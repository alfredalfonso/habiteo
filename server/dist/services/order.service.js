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
exports.OrderService = void 0;
const order_model_1 = require("../models/order.model");
const orderModel = new order_model_1.OrderModel();
class OrderService {
    create(input) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const orderId = yield orderModel.create(input);
                return orderId;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const orders = yield orderModel.findAll();
                return orders;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    findOne(input) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const order = yield orderModel.findOne(input);
                return order;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    findOneAndUpdate(input) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const updatedOrder = yield orderModel.findOneAndUpdate(input);
                return updatedOrder;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
}
exports.OrderService = OrderService;
