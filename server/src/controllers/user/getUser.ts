import { Request, Response } from 'express';
import { searchUserById } from '../../services/database';
import tables from '../../types/enumTables';

export default async function getUser(req: Request, res: Response) {
  try {
    const getUser = await searchUserById(tables.users, req.body.uid);
    if (!getUser) {
      return res.status(404).json({
        ok: false,
        msg: 'User not exist',
      });
    } else {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...user } = getUser;
      return res.status(200).json({
        ok: true,
        msg: 'User exist',
        user,
      });
    }
  } catch (error) {
    return res.status(500).json({
      ok: false,
      msg: 'server error',
    });
  }
}
