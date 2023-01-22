import get from 'lodash/get';
import { SessionModel } from '../models/session.model';
import { UserModel } from '../models/user.model';
import { signJwt, verifyJwt } from '../utils/jwt.utils';

const sessionModel = new SessionModel();
const userModel = new UserModel();

export class SessionService {
  async create({ userId, userAgent }: { userId: number; userAgent: string }) {
    try {
      return await sessionModel.create({ userId, userAgent });
    } catch (error: any) {
      throw new Error(error);
    }
  }

  async find(userId: number, valid: boolean) {
    return await sessionModel.find(userId, valid);
  }

  async updateOne(sessionId: number, valid: boolean) {
    return await sessionModel.updateOne(sessionId, valid);
  }

  async reissueAcessToken({ refreshToken }: { refreshToken: string }) {
    console.log({ refreshToken });
    const { decoded } = verifyJwt(refreshToken);
    console.log({ decoded });
    if (!decoded || !get(decoded, 'session')) {
      return false;
    }

    const session = await sessionModel.findOne(get(decoded, 'session'));

    if (!session || !session.valid) {
      return false;
    }

    const user = await userModel.findOne({ id: session.userId });

    if (!user) {
      return false;
    }

    const accessToken = signJwt(
      { ...user, session: session.id },
      { expiresIn: process.env.ACCESS_TOKEN_TTL }
    );

    return accessToken;
  }
}
