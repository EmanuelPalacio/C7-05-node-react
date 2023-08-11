import { Request, Response } from 'express';
import { User, UserRequest } from '../../types/User';
import { encrypt, idGenerate } from '../../utils';
import { createUser } from '../../services/database';

export default function userCreate(req: Request, res: Response) {
  try {
    const { password, ...rest }: UserRequest = req.body;
    const passwordEncrypt = encrypt.toEncrypt(password);
    const uid = idGenerate();
    const data: User = {
      ...rest,
      uid,
      password: passwordEncrypt,
    };
    console.log(createUser(data));
    res.status(200).json({
      ok: true,
      msg: 'User created successfully',
    });
  } catch (error) {
    console.log('🚀 ~ file: userCreate.ts:22 ~ userCreate ~ error:', error);
    res.status(500).json({
      ok: false,
      error,
    });
  }
}
