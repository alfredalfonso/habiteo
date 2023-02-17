const { omit } = require('lodash');
const userModel = require('../../../models/user');

async function createUser(userDetails) {
  try {
    return await userModel.create(userDetails);
  } catch (error) {
    throw new Error(error.errors[0].message);
  }
}

async function validatePassword(email, password) {
  const user = await userModel.findOne({ where: { email: email } });

  if (!user) {
    return false;
  }

  const userPassword = user.getDataValue('password');

  const isValid = await user.comparePassword(password, userPassword);

  if (!isValid) {
    return false;
  }

  return omit(user.toJSON(), 'password');
}

module.exports = { createUser, validatePassword };
