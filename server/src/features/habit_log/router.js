const { Router } = require('express');
const { createHabitLogHandler, getHabitLogHandler } = require('./controller');
const requireUser = require('../../middleware/requireUser');
const habitLogRouter = Router();

habitLogRouter.post('/create', requireUser, createHabitLogHandler);
habitLogRouter.get('/get/:inputDate/', requireUser, getHabitLogHandler);

module.exports = habitLogRouter;
