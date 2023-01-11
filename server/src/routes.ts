import { Express } from 'express';
import {
  createUser,
  deleteUser,
  getUser,
  getUserById,
  updateUser,
} from './controllers/user.controller';

export function routes(app: Express) {
  app.get('/', getUser);

  app.get('/:id', getUserById);

  app.post('/signup', createUser);

  app.patch('/:id', updateUser);

  app.delete('/:id', deleteUser);
}
