import { Request, Response } from 'express';
import { webTokenGenerate } from '../../utils';

export default function refreshToken(req: Request, res: Response) {
  try {
    const { uid } = req.body;
    const token = webTokenGenerate(uid);
    res.status(200).json({
      ok: true,
      msg: 'refresh token',
      token,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: 'server error',
    });
  }
}
