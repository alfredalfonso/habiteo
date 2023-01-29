const { validatePassword } = require('../user/user.service');
const { createSession } = require('./session.service');
const { signJwt } = require('./util/jwt');

exports.createSessionHandler = async (req, res) => {
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
};
