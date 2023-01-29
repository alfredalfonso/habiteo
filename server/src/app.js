const express = require('express');
const cors = require('cors');
const sessionRouter = require('./session/session.router');
const userRouter = require('./user/user.router');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors({ origin: 'http://localhost:5173' }));

app.use('/user', userRouter);
app.use('/session', sessionRouter);

app.listen(port, async () => {
  console.log(`Server running at http://localhost:${port}`);
});
