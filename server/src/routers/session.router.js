const { Router } = require('express');
const { createSession } = require('../controllers/session.controller');

const sessionRouter = new Router();

sessionRouter.post('/login', createSession);

exports.sessionRouter = sessionRouter;
