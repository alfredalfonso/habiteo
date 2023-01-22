import { Session } from '../types/session.type';
import { db } from '../utils/connection';
import { OkPacket, RowDataPacket } from 'mysql2';

export class SessionModel {
  create({ userId, userAgent }: { userId: number; userAgent: string }): Promise<Session> {
    return new Promise((resolve, reject) => {
      const queryString = 'INSERT into sessions (userId, userAgent) VALUES(?,?)';
      db.query(queryString, [userId, userAgent], async (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(this.findOne((<OkPacket>result).insertId));
        }
      });
    });
  }

  findOne(id: number | undefined): Promise<Session> {
    return new Promise((resolve, reject) => {
      const queryString = 'SELECT * from sessions WHERE id=?';
      db.query(queryString, [id], async (error, result) => {
        const row = (<RowDataPacket>result)[0];
        if (row == undefined) {
          reject(new Error('Session not found'));
        } else {
          const session: Session = {
            id: row.id,
            userId: row.userId,
            userAgent: row.userAgent,
            valid: row.valid,
            createdAt: row.createdAt,
            updatedAt: row.updatedAt,
          };
          resolve(session);
        }
      });
    });
  }

  find(userId: number, valid: boolean): Promise<Session[]> {
    return new Promise((resolve, reject) => {
      const queryString = 'SELECT * from sessions WHERE userId=? AND valid=?';
      db.query(queryString, [userId, Number(valid)], async (error, result) => {
        const rows = <RowDataPacket[]>result;
        const sessions: Session[] = [];
        if (rows == undefined) {
          reject(new Error('Session not found'));
        } else {
          rows.forEach((row) => {
            const session: Session = {
              id: row.id,
              userId: row.userId,
              userAgent: row.userAgent,
              valid: row.valid,
              createdAt: row.createdAt,
              updatedAt: row.updatedAt,
            };
            sessions.push(session);
          });
          resolve(sessions);
        }
      });
    });
  }

  updateOne(sessionId: number, valid: boolean) {
    return new Promise((resolve, reject) => {
      const queryString = 'UPDATE sessions SET valid=? WHERE id=?';

      db.query(queryString, [Number(valid), sessionId], async (error, result) => {
        if (error) {
          reject(error);
        }
      });
    });
  }
}
