"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const connection_1 = require("../utils/connection");
const bcrypt_1 = __importDefault(require("bcrypt"));
const dotenv = __importStar(require("dotenv"));
dotenv.config();
class UserModel {
    create(user) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            const queryString = `INSERT into users (name, email, password) VALUES (?,?,?)`;
            const salt = yield bcrypt_1.default.genSalt(Number(process.env.SALT_WORK_FACTOR));
            const hash = bcrypt_1.default.hashSync(user.password, salt);
            user.password = hash;
            connection_1.db.query(queryString, [user.name, user.email, user.password], (error, result) => __awaiter(this, void 0, void 0, function* () {
                if (error) {
                    reject(error);
                }
                else {
                    resolve(this.findOne(user.email));
                }
            }));
        }));
    }
    findOne(email) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            const queryString = 'SELECT * FROM users WHERE email=?';
            connection_1.db.query(queryString, [email], (error, result) => __awaiter(this, void 0, void 0, function* () {
                const row = result[0];
                if (row == undefined) {
                    resolve(undefined);
                }
                else {
                    const user = {
                        id: Number(row.id),
                        name: row.name,
                        email: row.email,
                        password: row.password,
                        createdAt: row.createdAt,
                        updatedAt: row.updatedAt,
                        comparePassword: (candidatePassword) => __awaiter(this, void 0, void 0, function* () {
                            return bcrypt_1.default.compare(candidatePassword, user.password).catch((e) => false);
                        }),
                    };
                    resolve(user);
                }
            }));
        }));
    }
}
exports.UserModel = UserModel;
