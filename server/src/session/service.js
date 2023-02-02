const sessionModel = require('../../models/session');
const userModel = require('../../models/user');
const { signJwt, verifyJwt } = require('../util/jwt');
const get = require('lodash/get');

async function createSession(userId, userAgent) {
  try {
    return await sessionModel.create({ userId: userId, userAgent: userAgent });
  } catch (error) {
    throw new Error(error);
  }
}

async function findSession(userId, valid) {
  return await sessionModel.findAll({ where: { userId: userId, valid: Number(valid) } });
}

async function updateSession(sessionId, valid) {
  return await sessionModel.update({ valid: valid }, { where: { id: sessionId } });
}

async function reissueAcessToken({ refreshToken }) {
  const { decoded } = verifyJwt(refreshToken);
  if (!decoded || !get(decoded, 'session')) {
    return false;
  }

  const session = await sessionModel.findOne({ where: get(decoded, 'session') });

  if (!session || !session.valid) {
    return false;
  }

  const user = await userModel.findOne({ where: { id: session.userId } });

  if (!user) {
    return false;
  }

  const accessToken = signJwt(
    { ...user, session: session.id },
    { expiresIn: process.env.ACCESS_TOKEN_TTL }
  );

  return accessToken;
}

module.exports = { createSession, findSession, updateSession, reissueAcessToken };
