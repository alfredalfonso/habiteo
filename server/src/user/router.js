const express = require('express');
const validateSchema = require('../middleware/validateSchema');
const signupSchema = require('./schema');
const { createUser } = require('./controller');

const userRouter = express.Router();

userRouter.post('/signup', validateSchema(signupSchema), createUser);

module.exports = userRouter;
