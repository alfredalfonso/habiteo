"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderRouter = void 0;
const express_1 = __importDefault(require("express"));
const order_controller_1 = require("../controllers/order.controller");
const validateData_1 = require("../middlewares/validateData");
const order_schema_1 = require("../schemas/order.schema");
const orderRouter = express_1.default.Router();
exports.orderRouter = orderRouter;
const orderController = new order_controller_1.OrderController();
orderRouter.post('/', (0, validateData_1.validateData)(order_schema_1.createOrderSchema), orderController.create);
orderRouter.get('/:id', orderController.findOne);
orderRouter.get('/', orderController.findAll);
orderRouter.patch('/:id', orderController.findOneAndUpdate);
