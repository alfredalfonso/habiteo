import get from 'lodash/get';
import { Request, Response, NextFunction } from 'express';
import { verifyJwt } from '../utils/jwt.utils';
import { SessionService } from '../services/session.service';

const sessionService = new SessionService();

export const deserializeUser = async (req: Request, res: Response, next: NextFunction) => {
  const accessToken = get(req, 'headers.authorization', '').replace(/^Bearer\s/, '');
  const refreshToken = String(get(req, 'headers.x-refresh'));

  if (!accessToken) {
    return next();
  }

  const { decoded, expired } = verifyJwt(accessToken);

  if (decoded) {
    res.locals.user = decoded;
    return next();
  }

  if (expired && refreshToken) {
    const newAccessToken = await sessionService.reissueAcessToken({ refreshToken });
    console.log('\nFrom newAcessToken: ' + newAccessToken);

    if (newAccessToken) {
      res.setHeader('x-access-token', newAccessToken);
    }

    const result = verifyJwt(String(newAccessToken));

    res.locals.user = result.decoded;

    return next();
  }
};
