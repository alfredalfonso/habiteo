import { BasicOrder, Order, OrderWithDetails } from '../types/order.type';
import { db } from '../utils/connection';
import { OkPacket, RowDataPacket } from 'mysql2';

export class OrderModel {
  create(order: BasicOrder): Promise<OrderWithDetails> {
    return new Promise((resolve, reject) => {
      const queryString =
        'INSERT INTO ProductOrder (product_id, customer_id, product_quantity) VALUES (?, ?, ?)';
      db.query(
        queryString,
        [order.product.id, order.customer.id, order.productQuantity],
        async (error, result) => {
          if (error) {
            reject(error);
          } else {
            resolve(this.findOne((<OkPacket>result).insertId));
          }
        }
      );
    });
  }

  findOne(orderId: number): Promise<OrderWithDetails> {
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

      db.query(queryString, orderId, (error, result) => {
        const row = (<RowDataPacket>result)[0];
        if (row == undefined) {
          reject(new Error('Order not found'));
        } else {
          const order: OrderWithDetails = {
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

  findAll(): Promise<Order[]> {
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

      db.query(queryString, (error, result) => {
        if (error) {
          reject(error);
        } else {
          const rows = <RowDataPacket[]>result;
          const orders: Order[] = [];

          rows.forEach((row) => {
            const order: OrderWithDetails = {
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

  findOneAndUpdate(order: Omit<Order, 'customer'>): Promise<OrderWithDetails> {
    return new Promise((resolve, reject) => {
      const queryString = `UPDATE ProductOrder SET product_id=?, product_quantity=? WHERE order_id=?`;

      db.query(
        queryString,
        [order.product.id, order.productQuantity, order.orderId],
        (error, result) => {
          if (error) {
            reject(error);
          } else {
            resolve(this.findOne(order.orderId));
          }
        }
      );
    });
  }
}
