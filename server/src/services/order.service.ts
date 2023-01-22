import { BasicOrder, Order } from '../types/order.type';
import { OrderModel } from '../models/order.model';

const orderModel = new OrderModel();

export class OrderService {
  async create(input: BasicOrder) {
    try {
      const orderId = await orderModel.create(input);
      return orderId;
    } catch (error: any) {
      throw new Error(error);
    }
  }

  async findAll() {
    try {
      const orders = await orderModel.findAll();
      return orders;
    } catch (error: any) {
      throw new Error(error);
    }
  }

  async findOne(input: number) {
    try {
      const order = await orderModel.findOne(input);
      return order;
    } catch (error: any) {
      throw new Error(error);
    }
  }

  async findOneAndUpdate(input: Omit<Order, 'customer'>) {
    try {
      const updatedOrder = await orderModel.findOneAndUpdate(input);
      return updatedOrder;
    } catch (error: any) {
      throw new Error(error);
    }
  }
}
