import { Response, Router } from 'express';
import authRouter from './auth.routes';
import userRouter from './user.routes';

const router = Router();
router.use('/auth', authRouter);
router.use('/user', userRouter);
router.get('', (_, res: Response) => {
  res.send('server is running');
});
export default router;
