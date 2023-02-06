const habitService = require('./service');

async function createHabitHandler(req, res) {
  try {
    const userId = res.locals.user.dataValues.id;
    const newHabit = await habitService.createHabit(userId, req.body);
    return res.status(200).json(newHabit.dataValues);
  } catch (error) {
    return res.status(500).json(error.message);
  }
}

async function getHabitByDateHandler(req, res) {
  const userId = res.locals.user.dataValues.id;
  const { inputDate } = req.body;
  const habits = await habitService.getHabitByDate(userId, inputDate);
  return res.send(habits);
}

async function deleteHabitHandler(req, res) {
  try {
    return res.status(200).json(habitService.deleteHabit(req.body.id));
  } catch (error) {
    return res.status(500).json(error.message);
  }
}

module.exports = { createHabitHandler, getHabitByDateHandler, deleteHabitHandler };
