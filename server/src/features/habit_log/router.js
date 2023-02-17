const { Router } = require('express');
const { createHabitLogHandler } = require('./controller');
const requireUser = require('../../middleware/requireUser');
const habitLogRouter = Router();

habitLogRouter.post('/create', requireUser, createHabitLogHandler);

module.exports = habitLogRouter;
