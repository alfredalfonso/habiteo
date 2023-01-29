const jwt = require('jsonwebtoken');
require('dotenv').config();

const privateKey = `${process.env.PRIVATE_KEY}`;
const publicKey = `${process.env.PUBLIC_KEY}`;

const signJwt = (object, options) => {
  return jwt.sign(object, privateKey, {
    ...(options && options),
    algorithm: 'RS256',
  });
};

const verifyJwt = (token) => {
  try {
    const decoded = jwt.verify(token, publicKey);
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
};

module.exports = { signJwt, verifyJwt };
