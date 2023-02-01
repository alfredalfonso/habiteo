const express = require('express');
const cors = require('cors');
const userRouter = require('./user/router');
const sessionRouter = require('./session/router');
const habitRouter = require('./habit/router');
const deserializeUser = require('./middleware/deserializeUser');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors({ origin: 'http://localhost:5173' }));

app.use(deserializeUser);
app.use('/user', userRouter);
app.use('/session', sessionRouter);
app.use('/habit', habitRouter);

app.listen(port, async () => {
  console.log(`Server running at http://localhost:${port}`);
});
