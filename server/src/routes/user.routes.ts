import { Router } from 'express';
import { getUser, register } from '../controllers';
import validateCreateUser from '../middleware/createUserValidation';
import checkToken from '../middleware/checkToken';

const userRouter = Router();
userRouter.get('/', checkToken, getUser);
userRouter.post('/register', validateCreateUser, register);
export default userRouter;
