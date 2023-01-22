"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionModel = void 0;
const connection_1 = require("../utils/connection");
class SessionModel {
    create({ userId, userAgent }) {
        return new Promise((resolve, reject) => {
            const queryString = 'INSERT into sessions (userId, userAgent) VALUES(?,?)';
            connection_1.db.query(queryString, [userId, userAgent], (error, result) => __awaiter(this, void 0, void 0, function* () {
                if (error) {
                    reject(error);
                }
                else {
                    resolve(this.findOne(result.insertId));
                }
            }));
        });
    }
    findOne(id) {
        return new Promise((resolve, reject) => {
            const queryString = 'SELECT * from sessions WHERE id=?';
            connection_1.db.query(queryString, [id], (error, result) => __awaiter(this, void 0, void 0, function* () {
                const row = result[0];
                if (row == undefined) {
                    reject(new Error('Session not found'));
                }
                else {
                    const session = {
                        id: row.id,
                        userId: row.userId,
                        userAgent: row.userAgent,
                        valid: row.valid,
                        createdAt: row.createdAt,
                        updatedAt: row.updatedAt,
                    };
                    resolve(session);
                }
            }));
        });
    }
    find(userId, valid) {
        return new Promise((resolve, reject) => {
            const queryString = 'SELECT * from sessions WHERE userId=? AND valid=?';
            connection_1.db.query(queryString, [userId, Number(valid)], (error, result) => __awaiter(this, void 0, void 0, function* () {
                const rows = result;
                const sessions = [];
                if (rows == undefined) {
                    reject(new Error('Session not found'));
                }
                else {
                    rows.forEach((row) => {
                        const session = {
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
            }));
        });
    }
    updateOne(sessionId, valid) {
        return new Promise((resolve, reject) => {
            const queryString = 'UPDATE sessions SET valid=? WHERE id=?';
            connection_1.db.query(queryString, [Number(valid), sessionId], (error, result) => __awaiter(this, void 0, void 0, function* () {
                if (error) {
                    reject(error);
                }
            }));
        });
    }
}
exports.SessionModel = SessionModel;
