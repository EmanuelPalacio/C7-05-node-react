import { Request, Response } from 'express';
import { askForTableData } from '../../services/database';
import tables from '../../types/enumTables';
import { webTokenGenerate } from '../../utils';

export default async function login(req: Request, res: Response) {
  try {
    const { email } = req.body;
    const data = await askForTableData(tables.users);
    const user = data.find((user) => user.email === email);
    const token = user !== undefined && webTokenGenerate(user.uid);
    res.status(200).json({
      ok: true,
      msg: 'Successfully verified account',
      token,
    });
  } catch (error) {
    console.log('🚀 ~ file: userCreate.ts:22 ~ userCreate ~ error:', error);
    res.status(500).json({
      ok: false,
      error,
    });
  }
}
