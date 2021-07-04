import { NextFunction, Request, Response } from "express";
import { body, check, validationResult } from "express-validator";

export default [
  body('email').isEmail().notEmpty(),
  body('password').notEmpty().isLength({ min: 6 }),
  body('cpf').notEmpty().isLength({ min: 11}),
  body('contact_whatsapp').notEmpty().isLength({ min: 11}),
  body('confirmation_password').notEmpty().custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error(
        'Password confirmation does not match password'
      );
    } else {
      return true
    }
  }),
  function credentialsCheckBySession(req: Request, res: Response, next: NextFunction) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    next()
  }
]

