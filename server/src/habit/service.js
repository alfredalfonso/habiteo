const habitModel = require('../../models/habit');

async function createHabit(userId, habitDetails) {
  try {
    return await habitModel.create({ userId: userId, ...habitDetails });
  } catch (error) {
    throw new Error(error.errors[0].message);
  }
}

async function getHabitByDate(userId) {
  try {
    const habits = await habitModel.findAll({ where: { userId: userId } });
    return habits
      .map((habit) => habit.getDataValue('recurrence'))
      .map((recurrence) => JSON.parse(recurrence.type));
  } catch (error) {
    /* empty */
  }
}

module.exports = { createHabit, getHabitByDate };
