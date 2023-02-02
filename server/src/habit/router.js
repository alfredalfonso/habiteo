const { Router } = require('express');
const { createHabitHandler, getHabitByDateHandler } = require('./controller');
const requireUser = require('../middleware/requireUser');
const validateSchema = require('../middleware/validateSchema');
const habitSchema = require('./schema');
const habitRouter = Router();

habitRouter.post('/create', requireUser, validateSchema(habitSchema), createHabitHandler);
habitRouter.get('/get', requireUser, getHabitByDateHandler);

module.exports = habitRouter;
