const SessionModel = require('../../models/session').model;

const createSession = async (userId, userAgent) => {
  try {
    return await SessionModel.create({ userId: userId, userAgent: userAgent });
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = { createSession };
