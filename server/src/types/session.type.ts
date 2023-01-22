import { User } from './user.type';

export interface Session {
  id: number;
  userId: User['id'];
  valid: boolean;
  userAgent: string;
  createdAt: Date;
  updatedAt: Date;
}
