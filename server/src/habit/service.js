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
      const startingDateValue = habit.getDataValue('createdAt');
      const startingDate = new Date(startingDateValue);

      // Reset time to 0
      startingDate.setHours(0);
      startingDate.setMinutes(0);
      startingDate.setSeconds(0);

      if (inputDate.getTime() >= startingDate.getTime()) {
        switch (recurrence.type) {
          case 'daily':
            recurrence.option.map((day) => {
              if (day == inputDate.getDay()) {
                showHabits.push(habit);
              }
            });
            break;

          case 'interval':
            while (startingDate.getDate() <= inputDate.getDate()) {
              if (startingDate.getDate() == inputDate.getDate()) {
                showHabits.push(habit);
                break;
              } else {
                startingDate.setDate(startingDate.getDate() + recurrence.option[0]);
              }
            }
            break;

          case 'monthly':
            recurrence.option.map((day) => {
              if (inputDate.getDate() == day) {
                showHabits.push(habit);
              }
            });
            break;

          default:
            break;
        }
      }
    });
    return showHabits;
  } catch (error) {
    /* empty */
  }
}

async function deleteHabit(id) {
  try {
    return await habitModel.destroy({ where: { id: id } });
  } catch (error) {
    throw new Error(error.errors[0].message);
  }
}

module.exports = { createHabit, getHabitByDate, deleteHabit };
