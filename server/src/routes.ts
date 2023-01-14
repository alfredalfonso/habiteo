import { Express } from 'express';
import { createUser, deleteUser, updateUser } from './controllers/user.controller';

import { createSession } from './controllers/session.controller';

export function routes(app: Express) {
  // User

  app.post('/signup', createUser);

  app.patch('/:id', updateUser);

  app.delete('/:id', deleteUser);

  // Session

  app.post('/login', createSession);
}
