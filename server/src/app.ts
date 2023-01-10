import express from 'express';
import { routes } from './routes';

const port = 3000;
const app = express();

app.listen(port, async () => {
  console.log(`App is running at http://localhost:${port}`);

  routes(app);
});
