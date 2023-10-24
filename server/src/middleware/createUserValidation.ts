import { check, validationResult } from 'express-validator';
import { NextFunction, Request, Response } from 'express';
import { emailExist } from './custom';

const validateCreateUser = [
  check('name', 'the name does not exist ').exists(),
  check('name', 'the name field must not be empty').notEmpty(),
  check('name', 'the name must be of type string').isString(),

  check('email', 'the email does not exist').exists(),
  check('email', 'the email field must not be empty').notEmpty(),
  check('email', 'the email must be valid').isEmail(),
  check('email', 'the email must be of type string').isString(),
  check('email').custom(emailExist),

  check('companyName', 'the email does not exist').exists(),
  check('companyName', 'the email field must not be empty').notEmpty(),

  check('password', 'the password does not exist').exists(),
  check('password', 'the password field must not be empty').notEmpty(),
  check('password', 'the password must be of type string').isString(),
  check(
    'password',
    'the password field must have a minimum of 8 characters and contain at least one uppercase letter, one lowercase letter, and one special character.'
  )
    .isLength({ min: 8 })
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d@$.!%*#?&]/),
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(404).json({ error: errors.array() });
    }
    next();
    return;
  },
];
export default validateCreateUser;
