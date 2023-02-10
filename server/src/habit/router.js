const { Router } = require('express');
const { createHabitHandler, getHabitByDateHandler, deleteHabitHandler } = require('./controller');
const requireUser = require('../middleware/requireUser');
const validateSchema = require('../middleware/validateSchema');
const habitSchema = require('./schema');
const habitRouter = Router();

habitRouter.post('/create', requireUser, validateSchema(habitSchema), createHabitHandler);
habitRouter.get('/get/:inputDate', requireUser, getHabitByDateHandler);
habitRouter.delete('/', requireUser, deleteHabitHandler);

module.exports = habitRouter;
