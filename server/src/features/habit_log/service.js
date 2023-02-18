const habitLogModel = require('../../../models/habit_log');

async function createHabitLog(input) {
  try {
    return await habitLogModel.create(input);
  } catch (error) {
    throw new Error(error.errors[0].message);
  }
}

async function getHabitLogs(inputDate) {
  return await habitLogModel.findAll({ where: { createdAt: inputDate } });
}

module.exports = { createHabitLog, getHabitLogs };
