import { Request, Response } from 'express';
import { UserService } from '../services/user.service';
import { User } from '../types/user.type';

const userService = new UserService();

export class UserController {
  async create(req: Request<{}, {}, User>, res: Response) {
    try {
      const user = await userService.create(req.body);
      return res.status(200).json(user);
    } catch (error: any) {
      return res.status(500).json({ message: error.message });
    }
  }
}
