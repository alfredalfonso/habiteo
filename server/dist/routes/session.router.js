"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sessionRouter = void 0;
const express_1 = __importDefault(require("express"));
const session_controller_1 = require("../controllers/session.controller");
const requireUser_1 = require("../middlewares/requireUser");
const validateData_1 = require("../middlewares/validateData");
const session_schema_1 = require("../schemas/session.schema");
const sessionRouter = express_1.default.Router();
exports.sessionRouter = sessionRouter;
const sessionController = new session_controller_1.SessionController();
sessionRouter.post('/login', (0, validateData_1.validateData)(session_schema_1.createSessionSchema), sessionController.create);
sessionRouter.get('/', requireUser_1.requireUser, sessionController.find);
sessionRouter.delete('/', requireUser_1.requireUser, sessionController.delete);
