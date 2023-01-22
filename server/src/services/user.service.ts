import { UserModel } from '../models/user.model';
import { User } from '../types/user.type';

const userModel = new UserModel();

export class UserService {
  async create(input: User) {
    try {
      return await userModel.create(input);
    } catch (error: any) {
      throw new Error(error);
    }
  }

  async validatePassword(input: { email: string; password: string }) {
    const user = await userModel.findOne({ email: input.email });

    if (!user) {
      return false;
    }

    const isValid = await user.comparePassword(input.password);

    if (!isValid) {
      return false;
    }

    return user;
  }

  async findById(userId: number) {
    return await userModel.findOne({ id: userId });
  }
}
