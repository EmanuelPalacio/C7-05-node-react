import { Router } from 'express';
import { login, refreshToken, register } from '../controllers';
import validateCreateUser from '../middleware/createUserValidation';
import loginValidation from '../middleware/loginValidation';
import { checkToken } from '../middleware';

const authRouter = Router();
authRouter.get('/refresh-token', checkToken, refreshToken);
authRouter.post('/login', loginValidation, login);
authRouter.post('/register', validateCreateUser, register);
export default authRouter;
