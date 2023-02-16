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

    for (let i = 0; i < habits.length; i++) {
      const recurrence = habits[i].getDataValue('recurrence');
      const startingDateValue = habits[i].getDataValue('createdAt');
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
                showHabits.push(habits[i]);
              }
            });
            break;

          case 'interval':
            while (startingDate.getDate() <= inputDate.getDate()) {
              if (startingDate.getDate() == inputDate.getDate()) {
                showHabits.push(habits[i]);
                break;
              } else {
                startingDate.setDate(startingDate.getDate() + recurrence.option[0]);
              }
            }
            break;

          case 'monthly':
            recurrence.option.map((day) => {
              if (inputDate.getDate() == day) {
                showHabits.push(habits[i]);
              }
            });
            break;

          default:
            break;
        }
      }
    }
    return showHabits;
  } catch (error) {
    /* empty */
  }
}

async function updateHabit(id) {
  try {
    return await habitModel.update({ where: { id: id } });
  } catch (error) {
    throw new Error(error.errors[0].message);
  }
}

async function deleteHabit(id) {
  try {
    return await habitModel.destroy({ where: { id: id } });
  } catch (error) {
    throw new Error(error.errors[0].message);
  }
}

module.exports = { createHabit, updateHabit, getHabitByDate, deleteHabit };
