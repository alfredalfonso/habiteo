const { Router } = require('express');
const validateSchema = require('../middleware/validateSchema');
const requireUser = require('../middleware/requireUser');
const loginSchema = require('./schema');
const { createSessionHandler, findSessionHandler, deleteSessionHandler } = require('./controller');

const sessionRouter = Router();

sessionRouter.post('/login', validateSchema(loginSchema), createSessionHandler);
sessionRouter.get('/find', requireUser, findSessionHandler);
sessionRouter.delete('/delete', requireUser, deleteSessionHandler);

module.exports = sessionRouter;
