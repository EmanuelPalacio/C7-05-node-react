import { Router } from 'express';
import { login, register } from '../controllers';
import validateCreateUser from '../middleware/createUserValidation';
import loginValidation from '../middleware/loginValidation';

const authRouter = Router();
authRouter.post('/login', loginValidation, login);
authRouter.post('/register', validateCreateUser, register);
export default authRouter;
