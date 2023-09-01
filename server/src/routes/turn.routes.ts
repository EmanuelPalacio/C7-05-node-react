import { Router } from 'express';
import checkToken from '../middleware/checkToken';
import { registerTurn } from '../controllers';
import { checkTurnCreate } from '../middleware';

const turnRouter = Router();
turnRouter.get('/', checkToken);
turnRouter.post('/create', checkToken, checkTurnCreate, registerTurn);
turnRouter.put('/update', checkToken);
export default turnRouter;
