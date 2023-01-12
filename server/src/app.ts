import express from 'express';
import dotenv from 'dotenv';
import { routes } from './routes';
import cors from 'cors';

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors({ origin: 'http://localhost:5173' }));
const port = process.env.APP_PORT;

app.listen(port, async () => {
  console.log(`App is running at http://localhost:${port}`);

  routes(app);
});
