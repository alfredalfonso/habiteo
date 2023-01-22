import express from 'express';
import { SessionController } from '../controllers/session.controller';
import { requireUser } from '../middlewares/requireUser';
import { validateData } from '../middlewares/validateData';
import { createSessionSchema } from '../schemas/session.schema';

const sessionRouter = express.Router();
const sessionController = new SessionController();

sessionRouter.post('/login', validateData(createSessionSchema), sessionController.create);
sessionRouter.get('/', requireUser, sessionController.find);
sessionRouter.delete('/', requireUser, sessionController.delete);

export { sessionRouter };
