import { Response, Router } from 'express';
import authRouter from './auth.routes';

const router = Router();
router.use('/auth', authRouter);
router.get('', (_, res: Response) => {
  res.send('server is running');
});
export default router;
