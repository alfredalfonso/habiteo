import express from 'express';
import { OrderController } from '../controllers/order.controller';
import { validateData } from '../middlewares/validateData';
import { createOrderSchema } from '../schemas/order.schema';

const orderRouter = express.Router();
const orderController = new OrderController();

orderRouter.post('/', validateData(createOrderSchema), orderController.create);
orderRouter.get('/:id', orderController.findOne);
orderRouter.get('/', orderController.findAll);
orderRouter.patch('/:id', orderController.findOneAndUpdate);

export { orderRouter };
