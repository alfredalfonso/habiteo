const habitModel = require('../../models/habit');

async function createHabit(userId, habitDetails) {
  try {
    return await habitModel.create({ userId: userId, ...habitDetails });
  } catch (error) {
    throw new Error(error.errors[0].message);
  }
}

async function getHabitByDate(userId, date) {
  try {
    const habits = await habitModel.findAll({ where: { userId: userId } });
    const showHabits = [];
    const inputDate = new Date(date);

    habits.forEach((habit) => {
      const recurrence = JSON.parse(habit.getDataValue('recurrence'));
      const findDateValue = habit.getDataValue('createdAt');
      const findDate = new Date(findDateValue);

      switch (recurrence.type) {
        case 'daily':
          recurrence.option.map((day) => {
            if (day == inputDate.getDay()) {
              showHabits.push(habit);
            }
          });
          break;

        case 'interval':
          while (findDate.getDate() <= inputDate.getDate()) {
            if (findDate.getDate() == inputDate.getDate()) {
              showHabits.push(habit);
              break;
            } else {
              findDate.setDate(findDate.getDate() + recurrence.option[0]);
            }
          }
          break;

        case 'monthly':
          recurrence.option.map((day) => {
            if (inputDate.getDate() == day) showHabits.push(habit);
          });
          break;

        default:
          break;
      }
    });
    return showHabits;
  } catch (error) {
    /* empty */
  }
}

module.exports = { createHabit, getHabitByDate };
