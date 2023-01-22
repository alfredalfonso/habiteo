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
exports.SessionService = void 0;
const session_model_1 = require("../models/session.model");
const sessionModel = new session_model_1.SessionModel();
class SessionService {
    create({ userId, userAgent }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield sessionModel.create({ userId, userAgent });
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    find(userId, valid) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield sessionModel.find(userId, valid);
        });
    }
    updateOne(sessionId, valid) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield sessionModel.updateOne(sessionId, valid);
        });
    }
}
exports.SessionService = SessionService;
