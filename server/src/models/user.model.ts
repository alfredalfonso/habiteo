import { User, UserWithDetails } from '../types/user.type';
import { db } from '../utils/connection';
import { OkPacket, RowDataPacket } from 'mysql2';
import bycrpt from 'bcrypt';
import * as dotenv from 'dotenv';

dotenv.config();

export class UserModel {
  create(user: User): Promise<UserWithDetails | undefined> {
    return new Promise(async (resolve, reject) => {
      const queryString = `INSERT into users (name, email, password) VALUES (?,?,?)`;

      const salt = await bycrpt.genSalt(Number(process.env.SALT_WORK_FACTOR));
      const hash = bycrpt.hashSync(user.password, salt);
      user.password = hash;

      db.query(queryString, [user.name, user.email, user.password], async (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(this.findOne({ email: user.email }));
        }
      });
    });
  }

  findOne({ email, id }: { email?: string; id?: number }): Promise<UserWithDetails | undefined> {
    return new Promise(async (resolve, reject) => {
      const queryString = 'SELECT * FROM users WHERE email=? OR id=?';

      db.query(queryString, [email, id], async (error, result) => {
        const row = (<RowDataPacket>result)[0];
        if (row == undefined) {
          resolve(undefined);
        } else {
          const user: UserWithDetails = {
            id: Number(row.id),
            name: row.name,
            email: row.email,
            password: row.password,
            createdAt: row.createdAt,
            updatedAt: row.updatedAt,
            comparePassword: async (candidatePassword: string): Promise<Boolean> => {
              return bycrpt.compare(candidatePassword, user.password).catch((e) => false);
            },
          };

          resolve(user);
        }
      });
    });
  }
}
