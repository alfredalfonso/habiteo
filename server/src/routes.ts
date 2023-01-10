import { Express, Request, Response } from 'express';
import { helloWorld } from './controllers/user.controller';

export function routes(app: Express) {
  app.get('/', helloWorld);
}
