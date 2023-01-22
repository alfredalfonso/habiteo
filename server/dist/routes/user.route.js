"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("../controllers/user.controller");
const validateData_1 = require("../middlewares/validateData");
const user_schema_1 = require("../schemas/user.schema");
const userRouter = express_1.default.Router();
exports.userRouter = userRouter;
const userController = new user_controller_1.UserController();
userRouter.post('/signup', (0, validateData_1.validateData)(user_schema_1.createUserSchema), userController.create);
