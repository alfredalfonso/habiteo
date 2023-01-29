const user = require('../../models/user').model;

exports.createUser = async (req, res) => {
  try {
    const newUser = await user.create(req.body);
    return res.status(200).json(newUser);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};
