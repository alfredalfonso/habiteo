const Joi = require('joi');

exports.signupSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(8).max(64).required(),
  passwordConfirmation: Joi.ref('password'),
});
