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
    const showHabits = [];
    for (let habit of habits) {
      const recurrence = habit.getDataValue('recurrence');
      const type = JSON.parse(recurrence).type;

      switch (type) {
        case 'daily':
          showHabits.push(habit);
          break;

        case 'interval':
          break;

        case 'monthly':
          break;

        default:
          break;
      }
    }
    return showHabits;
  } catch (error) {
    /* empty */
  }
}

module.exports = { createHabit, getHabitByDate };
