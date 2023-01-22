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
exports.UserService = void 0;
const user_model_1 = require("../models/user.model");
const userModel = new user_model_1.UserModel();
class UserService {
    create(input) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield userModel.create(input);
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    validatePassword(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield userModel.findOne(input.email);
            if (!user) {
                return false;
            }
            const isValid = yield user.comparePassword(input.password);
            if (!isValid) {
                return false;
            }
            return user;
        });
    }
}
exports.UserService = UserService;
