import express from 'express';
import dotenv from 'dotenv';
import { routes } from './routes';

dotenv.config();
const app = express();
app.use(express.json());
const port = process.env.APP_PORT;

app.listen(port, async () => {
  console.log(`App is running at http://localhost:${port}`);

  routes(app);
});
