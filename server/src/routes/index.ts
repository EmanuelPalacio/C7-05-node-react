import { Response, Router } from 'express';
import authRouter from './auth.routes';
import userRouter from './user.routes';
import turnRouter from './turn.routes';

const router = Router();
router.use('/auth', authRouter);
router.use('/user', userRouter);
router.use('/turn', turnRouter);
router.get('', (_, res: Response) => {
  res.send('server is running');
});
export default router;
