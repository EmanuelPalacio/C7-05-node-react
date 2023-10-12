import { Request, Response } from 'express';
import { turnIdGenerate } from '../../utils';
import { createTurn } from '../../services/database';
import { TurnRequest } from '../../types/turn';

export default function registerTurn(req: Request, res: Response) {
  const { uid, time, name }: TurnRequest = req.body;
  const id = turnIdGenerate();
  const creationDate = new Date();
  const endDate = new Date(creationDate.getTime() + time * 60 * 1000);
  try {
    createTurn({ id, uid, name, time, creationDate, endDate, state: 'in progress' });
    res.status(200).json({
      ok: true,
      msg: 'create turn successfully',
      data: {
        id,
        name,
        time,
        creationDate,
        endDate,
      },
    });
  } catch (error) {
    console.log('🚀 ~ file: registerTurn.ts:13 ~ registerTurn ~ error:', error);
    res.status(500).json({
      ok: false,
      msg: 'server error',
    });
  }
}
