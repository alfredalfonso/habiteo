const express = require('express');
const { validateSchema } = require('../middleware/validateSchema');
const { loginSchema } = require('./session.schema');
const { createSessionHandler } = require('./session.controller');

const sessionRouter = express.Router();

sessionRouter.post('/login', validateSchema(loginSchema), createSessionHandler);

module.exports = sessionRouter;
