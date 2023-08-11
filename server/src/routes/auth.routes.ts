import { Router } from 'express';
import { userCreate } from '../controllers';
const authRouter = Router();
authRouter.post('/login', () => {});
authRouter.post('/register', userCreate);
export default authRouter;
