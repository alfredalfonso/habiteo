import express from 'express';
import { UserController } from '../controllers/user.controller';
import { validateData } from '../middlewares/validateData';
import { createUserSchema } from '../schemas/user.schema';

const userRouter = express.Router();
const userController = new UserController();

userRouter.post('/signup', validateData(createUserSchema), userController.create);

export { userRouter };
