const userService = require('./service');

async function createUser(req, res) {
  try {
    const newUser = await userService.createUser(req.body);
    return res.status(200).json(newUser.dataValues);
  } catch (error) {
    return res.status(500).json(error.message);
  }
}

module.exports = { createUser };
