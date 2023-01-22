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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionController = void 0;
const session_service_1 = require("../services/session.service");
const user_service_1 = require("../services/user.service");
const jwt_utils_1 = require("../utils/jwt.utils");
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const userService = new user_service_1.UserService();
const sessionService = new session_service_1.SessionService();
class SessionController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // Validate user's request
            const user = yield userService.validatePassword(req.body);
            if (!user) {
                return res.status(401).json({ message: 'Invalid email or password' });
            }
            // Create a session
            const session = yield sessionService.create({
                userId: user.id,
                userAgent: req.get('user-agent') || '',
            });
            // Create access token
            const accessToken = (0, jwt_utils_1.signJwt)(Object.assign(Object.assign({}, user), { session: session.id }), { expiresIn: process.env.ACCESS_TOKEN_TTL });
            // Create refresh token
            const refreshToken = (0, jwt_utils_1.signJwt)(Object.assign(Object.assign({}, user), { session: session.id }), { expiresIn: process.env.REFRESH_TOKEN_TTL });
            // Return access and refresh token
            return res.send({ accessToken, refreshToken });
        });
    }
    find(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const userId = res.locals.user.id;
            const sessions = yield sessionService.find(userId, true);
            return res.send(sessions);
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const sessionId = res.locals.user.session;
            sessionService.updateOne(sessionId, false);
            return res.send({
                accessToken: null,
                refreshToken: null,
            });
        });
    }
}
exports.SessionController = SessionController;
