import { check, validationResult } from 'express-validator';
import { NextFunction, Request, Response } from 'express';

const checkTurnCreate = [
  check('name', 'the name does not exist ').exists(),
  check('name', 'the name field must not be empty').notEmpty(),
  check('name', 'the name must be of type string').isString(),

  check('time', 'the time does not exist').exists(),
  check('time', 'the time field must not be empty').notEmpty(),
  check('time', 'the time is not a number').isNumeric(),

  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(403).json({ error: errors.array() });
    }
    return next();
  },
];
export default checkTurnCreate;
