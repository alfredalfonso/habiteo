/* eslint-disable no-undef */
const express = require('express');
const cors = require('cors');
const { createUser } = require('./controllers/user.controller');
const { validateSignup } = require('./middlewares/validateSignup');
const { sessionRouter } = require('./routers/session.router');

const app = express();
require('dotenv').config();
const port = process.env.PORT;

app.use(express.json());
app.use(cors({ origin: 'http://localhost:5173' }));

app.post('/user/signup', validateSignup, createUser);
app.use('/session', sessionRouter);

app.listen(port, async () => {
  console.log(`Server running at http://localhost:${port}`);
});
