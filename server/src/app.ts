import express from 'express';
import * as dotenv from 'dotenv';
import { orderRouter } from './routes/order.route';
import { userRouter } from './routes/user.route';
import { sessionRouter } from './routes/session.router';
import { deserializeUser } from './middlewares/deserializeUser';

const app = express();
dotenv.config();

app.use(express.json());
app.use(deserializeUser);
app.use('/order', orderRouter);
app.use('/user', userRouter);
app.use('/session', sessionRouter);

app.listen(process.env.PORT, () => {
  console.log('Node server started running at http://localhost:' + process.env.PORT);
});
