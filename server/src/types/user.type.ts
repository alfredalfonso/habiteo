import { RowDataPacket } from 'mysql2';

export interface User {
  id: number;
  email: string;
  name: string;
  password: string;
}

export interface UserWithDetails extends User {
  comparePassword(candidatePassword: string): Promise<Boolean>;
  createdAt: Date;
  updatedAt: Date;
}
