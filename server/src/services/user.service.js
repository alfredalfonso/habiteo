const UserModel = require('../../models/user').model;

exports.validatePassword = async (email, password) => {
  const user = await UserModel.findOne({ where: { email: email } });

  if (!user) {
    return false;
  }

  const userPassword = user.getDataValue('password');

  const isValid = await user.comparePassword(password, userPassword);

  if (!isValid) {
    return false;
  }

  return user;
};
