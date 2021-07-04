import { Router } from 'express';
import { AuthenticationUserService } from '../services/user/AuthenticationUserService'
import { body, validationResult, check } from 'express-validator';

const sessionsRoutes = Router();
const authenticationUser = new AuthenticationUserService()

sessionsRoutes.post(
  '/',
  body('email').isEmail().notEmpty(),
  body('password').notEmpty().isLength({ min: 6 }),
  check('password', 'Password is not permit caracteres special')
    .matches(/^[\w&.\-]+$/, 'i'),
  async (request, response) => {
    const { email, password } = request.body;

    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      return response.status(400).json({ errors: errors.array() });
    }

    const { user, token } =
      await authenticationUser.execute({user: { email, password}})

    return response.json({user, token});
  }
);

export default sessionsRoutes;
