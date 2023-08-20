import { Request, Response } from 'express';
import { verifiyEmail } from '../../services/database';
import encript from '../../utils/encrypt';
import tables from '../../types/enumTables';
import { webTokenGenerate } from '../../utils';

export default async function login(req: Request, res: Response) {
  const { email, password } = req.body;
  try {
    const query = await verifiyEmail(tables.users, email);
    const checkPassword = encript.validate(password, query.password);
    if (!query) {
      return res.status(400).json({
        ok: false,
        msg: `the email: ${email} not exist`,
      });
    }
    if (!checkPassword) {
      return res.status(400).json({
        ok: false,
        msg: `password is incorrect`,
      });
    }
    return res.status(200).json({
      ok: true,
      msg: `successfully accessed`,
      token: webTokenGenerate(query.uid),
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      msg: `server error`,
    });
  }
}
