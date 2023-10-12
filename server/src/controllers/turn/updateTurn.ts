import { Request, Response } from 'express';
import { updateTurns } from '../../services/database';

export default async function updateTurn(req: Request, res: Response) {
  const { uid, id } = req.body;
  try {
    await updateTurns({ uid, id, state: 'delayed' });
    res.status(200).json({
      ok: true,
      msg: 'successfully completed',
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: 'server error',
    });
  }
}
