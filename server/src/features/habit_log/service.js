const habitLogModel = require('../../../models/habit_log');

async function createHabitLog(input) {
  try {
    return await habitLogModel.create(input);
  } catch (error) {
    throw new Error(error.errors[0].message);
  }
}

module.exports = { createHabitLog };
