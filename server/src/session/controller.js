const { validatePassword } = require('../user/service');
const { createSession, findSession, updateSession } = require('./service');
const { signJwt } = require('../util/jwt');

async function createSessionHandler(req, res) {
  // Validate user's password
  const user = await validatePassword(req.body.email, req.body.password);
  if (!user) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }

  // Create a session
  const newSession = await createSession(user.id, req.get('user-agent') || '');

  // Create access token
  const accessToken = signJwt(
    { ...user, session: newSession.id },
    { expiresIn: process.env.ACCESS_TOKEN_TTL }
  );

  // Create refresh token
  const refreshToken = signJwt(
    { ...user, session: newSession.id },
    { expiresIn: process.env.REFRESH_TOKEN_TTL }
  );

  // Return access and refresh token
  return res.send({ accessToken, refreshToken });
}

async function findSessionHandler(req, res) {
  const userId = res.locals.user.dataValues.id;
  const sessions = await findSession(userId, true);
  return res.send(sessions);
}

async function deleteSessionHandler(req, res) {
  const sessionId = res.locals.user.session;

  updateSession(sessionId, false);

  return res.send({
    accessToken: null,
    refreshToken: null,
  });
}

module.exports = { createSessionHandler, findSessionHandler, deleteSessionHandler };
