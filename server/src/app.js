const express = require('express');
const cors = require('cors');
const deserializeUser = require('./middleware/deserializeUser');
const userRouter = require('./features/user/router');
const sessionRouter = require('./features/session/router');
const habitRouter = require('./features/habit/router');
const habitLogRouter = require('./features/habit_log/router');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(cors({ origin: 'http://localhost:5173' }));
app.use(deserializeUser);

app.use('/user', userRouter);
app.use('/session', sessionRouter);
app.use('/habit', habitRouter);
app.use('/log', habitLogRouter);

app.listen(process.env.PORT, async () => {
  console.log(`Server running at http://localhost:${process.env.PORT}`);
});
