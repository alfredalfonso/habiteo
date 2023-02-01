const { Router } = require('express');
const { createHabitHandler, getHabitByDateHandler } = require('./controller');
const requireUser = require('../middleware/requireUser');
const habitRouter = Router();

habitRouter.post('/create', requireUser, createHabitHandler);
habitRouter.get('/get', requireUser, getHabitByDateHandler);

module.exports = habitRouter;
