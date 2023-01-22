import { Request, Response, Handler } from 'express';
import { SessionService } from '../services/session.service';
import { UserService } from '../services/user.service';
import { signJwt } from '../utils/jwt.utils';
import * as dotenv from 'dotenv';

dotenv.config();
const userService = new UserService();
const sessionService = new SessionService();

export class SessionController {
  async create(req: Request, res: Response) {
    // Validate user's request
    const user = await userService.validatePassword(req.body);
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Create a session
    const session = await sessionService.create({
      userId: user.id,
      userAgent: req.get('user-agent') || '',
    });

    // Create access token
    const accessToken = signJwt(
      { ...user, session: session.id },
      { expiresIn: process.env.ACCESS_TOKEN_TTL }
    );

    // Create refresh token
    const refreshToken = signJwt(
      { ...user, session: session.id },
      { expiresIn: process.env.REFRESH_TOKEN_TTL }
    );

    // Return access and refresh token
    return res.send({ accessToken, refreshToken });
  }

  async find(req: Request, res: Response) {
    const userId = res.locals.user.id;
    const sessions = await sessionService.find(userId, true);
    return res.send(sessions);
  }

  async delete(req: Request, res: Response) {
    const sessionId = res.locals.user.session;

    sessionService.updateOne(sessionId, false);

    return res.send({
      accessToken: null,
      refreshToken: null,
    });
  }
}
