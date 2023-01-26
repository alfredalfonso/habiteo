const express = require('express');
const cors = require('cors');
const { createUser } = require('./controllers/user.controller');
const { validateSignup } = require('./middlewares/validateSignup');

const app = express();

app.use(express.json());
app.use(cors({ origin: 'http://localhost:5173' }));

app.post('/user/signup', validateSignup, createUser);

app.listen(3000);
