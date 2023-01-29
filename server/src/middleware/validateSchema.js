exports.validateSchema = (schema) => async (req, res, next) => {
  try {
    await schema.validateAsync(req.body);
    next();
  } catch (err) {
    return res.status(400).json(err.details[0].message);
  }
};
