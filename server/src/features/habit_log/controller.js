const habitLogService = require('./service');

async function createHabitLogHandler(req, res) {
  try {
    const newHabitLog = await habitLogService.createHabitLog(req.body);
    return res.status(200).json(newHabitLog.dataValues);
  } catch (error) {
    return res.status(500).json(error.message);
  }
}

async function getHabitLogHandler(req, res) {
  try {
    const getHabitLogs = await habitLogService.getHabitLogs(req.params.inputDate);
    return res.status(200).json(getHabitLogs);
  } catch (error) {
    return res.status(500).json(error.message);
  }
}

module.exports = { createHabitLogHandler, getHabitLogHandler };
