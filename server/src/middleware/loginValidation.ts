import { check, validationResult } from 'express-validator';
import { NextFunction, Request, Response } from 'express';
import { emailNotExist } from './custom';

const loginValidation = [
  check('email', 'the email does not exist').exists(),
  check('email', 'the email field must not be empty').notEmpty(),
  check('email', 'the email must be valid').isEmail(),
  check('email', 'the email must be of type string').isString(),
  check('email').custom(emailNotExist),

  check('password', 'the password does not exist').exists(),
  check('password', 'the password field must not be empty').notEmpty(),
  check('password', 'the password must be of type string').isString(),

  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(403).json({ error: errors.array() });
    }
    next();
    return;
  },
];
export default loginValidation;
