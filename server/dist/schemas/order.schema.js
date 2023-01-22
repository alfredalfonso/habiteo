"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOrderSchema = void 0;
const zod_1 = require("zod");
exports.createOrderSchema = (0, zod_1.object)({
    body: (0, zod_1.object)({
        product: (0, zod_1.object)({
            id: (0, zod_1.number)({
                required_error: 'product_id is required',
            }),
        }),
        customer: (0, zod_1.object)({
            id: (0, zod_1.number)({
                required_error: 'customer_id is required',
            }),
        }),
        productQuantity: (0, zod_1.number)({
            required_error: 'product quantity is required',
        }),
    }),
});
