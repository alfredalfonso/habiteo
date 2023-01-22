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
exports.OrderModel = void 0;
const connection_1 = require("../utils/connection");
class OrderModel {
    create(order) {
        return new Promise((resolve, reject) => {
            const queryString = 'INSERT INTO ProductOrder (product_id, customer_id, product_quantity) VALUES (?, ?, ?)';
            connection_1.db.query(queryString, [order.product.id, order.customer.id, order.productQuantity], (error, result) => __awaiter(this, void 0, void 0, function* () {
                if (error) {
                    reject(error);
                }
                else {
                    resolve(this.findOne(result.insertId));
                }
            }));
        });
    }
    findOne(orderId) {
        return new Promise((resolve, reject) => {
            const queryString = `
        SELECT
          o.*,
          p.*,
          c.name AS customer_name,
          c.email
        FROM ProductOrder AS o
        INNER JOIN Customer AS c ON c.id=o.customer_id
        INNER JOIN Product AS p ON p.id=o.product_id
        WHERE o.order_id=?`;
            connection_1.db.query(queryString, orderId, (error, result) => {
                const row = result[0];
                if (row == undefined) {
                    reject(new Error('Order not found'));
                }
                else {
                    const order = {
                        orderId: row.order_id,
                        customer: {
                            id: row.cusomer_id,
                            name: row.customer_name,
                            email: row.email,
                        },
                        product: {
                            id: row.product_id,
                            name: row.name,
                            description: row.description,
                            instockQuantity: row.instock_quantity,
                            price: row.price,
                        },
                        productQuantity: row.product_quantity,
                    };
                    resolve(order);
                }
            });
        });
    }
    findAll() {
        return new Promise((resolve, reject) => {
            const queryString = `
        SELECT
          o.*,
          p.*,
          c.name AS customer_name,
          c.email
        FROM ProductOrder AS o
        INNER JOIN Customer AS c ON c.id=o.customer_id
        INNER JOIN Product AS p ON p.id=o.product_id`;
            connection_1.db.query(queryString, (error, result) => {
                if (error) {
                    reject(error);
                }
                else {
                    const rows = result;
                    const orders = [];
                    rows.forEach((row) => {
                        const order = {
                            orderId: row.order_id,
                            customer: {
                                id: row.customer_id,
                                name: row.customer_name,
                                email: row.email,
                            },
                            product: {
                                id: row.product_id,
                                name: row.name,
                                description: row.description,
                                instockQuantity: row.instock_quantity,
                                price: row.price,
                            },
                            productQuantity: row.product_quantity,
                        };
                        orders.push(order);
                    });
                    resolve(orders);
                }
            });
        });
    }
    findOneAndUpdate(order) {
        return new Promise((resolve, reject) => {
            const queryString = `UPDATE ProductOrder SET product_id=?, product_quantity=? WHERE order_id=?`;
            connection_1.db.query(queryString, [order.product.id, order.productQuantity, order.orderId], (error, result) => {
                if (error) {
                    reject(error);
                }
                else {
                    resolve(this.findOne(order.orderId));
                }
            });
        });
    }
}
exports.OrderModel = OrderModel;
