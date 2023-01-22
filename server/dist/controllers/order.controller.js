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
exports.OrderController = void 0;
const order_service_1 = require("../services/order.service");
const orderService = new order_service_1.OrderService();
class OrderController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const orderId = yield orderService.create(req.body);
                return res.status(200).send(orderId);
            }
            catch (error) {
                return res.status(500).send(error.message);
            }
        });
    }
    findAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const orders = yield orderService.findAll();
                return res.status(200).send(orders);
            }
            catch (error) {
                return res.status(500).send(error.message);
            }
        });
    }
    findOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const order = yield orderService.findOne(Number(req.params.id));
                return res.status(200).send(order);
            }
            catch (error) {
                return res.status(500).send(error.message);
            }
        });
    }
    findOneAndUpdate(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const orderId = Number(req.params.id);
                const order = req.body;
                const updatedOrder = yield orderService.findOneAndUpdate({
                    orderId: orderId,
                    product: { id: order.product.id },
                    productQuantity: order.productQuantity,
                });
                return res.status(201).send(updatedOrder);
            }
            catch (error) {
                return res.status(500).send(error.message);
            }
        });
    }
}
exports.OrderController = OrderController;
