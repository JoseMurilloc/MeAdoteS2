import { NextFunction, Request, Response } from "express";
import { body, check, validationResult } from "express-validator";

export default [
  body('email').isEmail().notEmpty(),
  body('password').notEmpty().isLength({ min: 6 }),
  check('password', 'Password is not permit caracteres special')
    .matches(/^[\w&.\-]+$/, 'i'),
  function credentialsSessionValidate(req: Request, res: Response, next: NextFunction) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    next()
  }
]

