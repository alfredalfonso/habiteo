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
  let userId = res.locals.user.id;
  if (userId == undefined) {
    userId = res.locals.user.dataValues.id;
  }
  const { inputDate } = req.params;
  const habits = await habitService.getHabitByDate(userId, inputDate);
  return res.send(habits);
}

async function updateHabitById(req, res) {
  let userId = res.locals.user.id;
  if (userId == undefined) {
    userId = res.locals.user.dataValues.id;
  }
  await habitService.updateHabit(req.params.id, req.body);
  return res.send('Updated successfully');
}

async function deleteHabitHandler(req, res) {
  try {
    return res.status(200).json(habitService.deleteHabit(req.params.id));
  } catch (error) {
    return res.status(500).json(error.message);
  }
}

module.exports = { createHabitHandler, getHabitByDateHandler, updateHabitById, deleteHabitHandler };
