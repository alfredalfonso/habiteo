"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeUser = void 0;
const get_1 = __importDefault(require("lodash/get"));
const jwt_utils_1 = require("../utils/jwt.utils");
const deserializeUser = (req, res, next) => {
    const accessToken = (0, get_1.default)(req, 'headers.authorization', '').replace(/^Bearer\s/, '');
    if (!accessToken) {
        return next();
    }
    const { decoded, expired } = (0, jwt_utils_1.verifyJwt)(accessToken);
    if (decoded) {
        res.locals.user = decoded;
        return next();
    }
};
exports.deserializeUser = deserializeUser;
