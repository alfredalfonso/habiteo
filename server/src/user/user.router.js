const express = require('express');
const { validateSchema } = require('../middleware/validateSchema');
const { signupSchema } = require('./user.schema');
const { createUser } = require('./user.controller');

const userRouter = express.Router();

userRouter.post('/signup', validateSchema(signupSchema), createUser);

module.exports = userRouter;
