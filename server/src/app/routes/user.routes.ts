import { Request, Response, Router } from 'express';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import multer from 'multer'
import uploadConfig from '../../config/upload'
import { UserData } from '../data/user';
import { CreateUserService } from '../services/user/CreateUserService';
import { UploadProfileAvatarServices } from '../services/user/UploadProfileAvatarServices';
import { body, validationResult, param } from 'express-validator';
import { ForgotPasswordServices } from '../services/user/ForgotPasswordServices';
import { ResetPasswordServices } from '../services/user/ResetPasswordServices';



const upload = multer(uploadConfig)
const usersRoutes = Router();
const userData = new UserData()

const createUser = new CreateUserService()
const uploadProfileAvatar = new UploadProfileAvatarServices()
const forgotPassword = new ForgotPasswordServices()
const resetPassword = new ResetPasswordServices()


usersRoutes.get(
  '/:id',
  param('id', 'Id is understand or nullable'),
  async (request: Request, response: Response) => {
    const { id } = request.params
    const user = await userData.getUser(id)

    return response.json(user)
  }
)

usersRoutes.post(
  '/',
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
  async (request, response) => {
    const {
      name, cpf, email, password, contact_whatsapp,
    } = request.body;

    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      return response.status(400).json({ errors: errors.array() });
    }


    await createUser.execute(
      {email,password, name, cpf, contact_whatsapp}
    );

    return response
      .status(201)
      .json({ message: 'User create with success'});
  }
);

usersRoutes.patch('/profile-avatars',
  ensureAuthenticated,
  upload.single('avatar'),
  async (request, response) => {
    const { filename } = request.file;
    const { user } = request

    const profileAvatar = await uploadProfileAvatar.execute({
      filename,
      idUser: user.id
    })

    return response.json(profileAvatar);
  }
)

usersRoutes.post('/forgot-password', async(request, response) => {
  const { email } = request.body

  await forgotPassword.execute({email});

  return response.json({ message: 'Send email forgot password'})
})

usersRoutes.post('/reset-password', async(request, response) => {
  const { password, token } = request.body

  await resetPassword.execute({password, token});

  return response.json({ message: 'Password changed with success'})
})

export default usersRoutes;
