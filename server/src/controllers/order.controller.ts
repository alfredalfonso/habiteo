import { Request, Response } from 'express';
import { CreateOrderInput } from '../schemas/order.schema';
import { OrderService } from '../services/order.service';
import { BasicOrder } from '../types/order.type';

const orderService = new OrderService();

export class OrderController {
  async create(req: Request<{}, {}, CreateOrderInput['body']>, res: Response) {
    try {
      const orderId = await orderService.create(req.body);
      return res.status(200).send(orderId);
    } catch (error: any) {
      return res.status(500).send(error.message);
    }
  }

  async findAll(req: Request, res: Response) {
    try {
      const orders = await orderService.findAll();
      return res.status(200).send(orders);
    } catch (error: any) {
      return res.status(500).send(error.message);
    }
  }

  async findOne(req: Request, res: Response) {
    try {
      const order = await orderService.findOne(Number(req.params.id));
      return res.status(200).send(order);
    } catch (error: any) {
      return res.status(500).send(error.message);
    }
  }

  async findOneAndUpdate(req: Request, res: Response) {
    try {
      const orderId = Number(req.params.id);
      const order: Omit<BasicOrder, 'customer'> = req.body;

      const updatedOrder = await orderService.findOneAndUpdate({
        orderId: orderId,
        product: { id: order.product.id },
        productQuantity: order.productQuantity,
      });
      return res.status(201).send(updatedOrder);
    } catch (error: any) {
      return res.status(500).send(error.message);
    }
  }
}
