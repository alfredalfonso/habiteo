const get = require('lodash/get');
const { verifyJwt } = require('./jwtUtils');
const { reissueAcessToken } = require('../session/service');

async function deserializeUser(req, res, next) {
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
    const newAccessToken = await reissueAcessToken({ refreshToken });

    if (newAccessToken) {
      res.setHeader('x-access-token', newAccessToken);
    }

    const result = verifyJwt(String(newAccessToken));

    res.locals.user = result.decoded;

    return next();
  }
}

module.exports = deserializeUser;
