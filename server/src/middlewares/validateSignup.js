const { signupSchema } = require('../schemas/user.schema');

exports.validateSignup = async (req, res, next) => {
  try {
    await signupSchema.validateAsync(req.body);
    next();
  } catch (err) {
    return res.status(400).json(err.details[0].message);
  }
};
