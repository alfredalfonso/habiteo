import { Express } from 'express';
import {
  createUser,
  deleteUser,
  loginUser,
  getUserById,
  updateUser,
} from './controllers/user.controller';

export function routes(app: Express) {
  app.post('/signup', createUser);

  app.post('/login', loginUser);

  app.get('/:id', getUserById);

  app.patch('/:id', updateUser);

  app.delete('/:id', deleteUser);
}
