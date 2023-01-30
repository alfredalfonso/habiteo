const { sign, verify } = require('jsonwebtoken');
require('dotenv').config();

const privateKey = `${process.env.PRIVATE_KEY}`;
const publicKey = `${process.env.PUBLIC_KEY}`;

function signJwt(object, options) {
  return sign(object, privateKey, {
    ...(options && options),
    algorithm: 'RS256',
  });
}

function verifyJwt(token) {
  try {
    const decoded = verify(token, publicKey);
    return {
      valid: true,
      expired: false,
      decoded,
    };
  } catch (error) {
    return {
      valid: false,
      expired: error.message === 'jwt expired',
      decoded: null,
    };
  }
}

module.exports = { signJwt, verifyJwt };
