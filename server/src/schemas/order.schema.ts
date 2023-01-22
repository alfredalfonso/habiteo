import { object, number, TypeOf } from 'zod';

export const createOrderSchema = object({
  body: object({
    product: object({
      id: number({
        required_error: 'product_id is required',
      }),
    }),
    customer: object({
      id: number({
        required_error: 'customer_id is required',
      }),
    }),
    productQuantity: number({
      required_error: 'product quantity is required',
    }),
  }),
});

export type CreateOrderInput = TypeOf<typeof createOrderSchema>;
