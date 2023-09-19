import { NextFunction, Request, Response } from 'express';
import jwt, { TokenExpiredError } from 'jsonwebtoken';
import { KEY_GENERATE_TOKEN } from '../config';

export default function checkToken(req: Request, res: Response, next: NextFunction) {
  const { authorization } = req.headers;
  try {
    const validate = authorization && jwt.verify(authorization, KEY_GENERATE_TOKEN);
    if (!authorization) {
      return res.status(401).json({
        ok: false,
        msg: 'token not found ',
      });
    }
    if (typeof validate === 'string') {
      return res.status(401).json({
        ok: false,
        msg: 'Invalid Token',
      });
    }
    req.body.uid = validate?.uid;
    return next();
  } catch (error) {
    if (error instanceof TokenExpiredError) {
      return res.status(401).json({
        ok: false,
        msg: 'Token expired',
      });
    } else {
      return res.status(500).json({
        ok: false,
        msg: 'Internal server error',
      });
    }
  }
}
