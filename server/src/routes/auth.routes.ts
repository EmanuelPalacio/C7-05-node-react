import { Router } from 'express';
import { login, register } from '../controllers';
import validateCreateUser from '../middleware/createUserValidation';
const authRouter = Router();
authRouter.post('/login', login);
authRouter.post('/register', validateCreateUser, register);
export default authRouter;
