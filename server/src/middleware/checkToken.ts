import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { KEY_GENERATE_TOKEN } from '../config';

export default function checkToken(req: Request, res: Response, next: NextFunction) {
  const { authorization } = req.headers;
  const validate = authorization && jwt.verify(authorization, KEY_GENERATE_TOKEN);
  if (!authorization) {
    return res.status(404).json({
      ok: false,
      msg: 'token not found ',
    });
  }
  if (typeof validate === 'string') {
    return res.status(400).json({
      ok: false,
      msg: 'Invalid Token',
    });
  }
  req.body.uid = validate?.uid;
  return next();
}
