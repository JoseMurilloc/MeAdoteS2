import multer from 'multer'
import { validationResult, param } from 'express-validator';
import { Request, Response, Router } from 'express';
import ensureAuthenticated from '@middleware/session/ensureAuthenticated';
import {multerUserConfig} from '@config/upload'
import { UserData } from '@data/user';
import { UploadProfileAvatarServices } from '@services/user/UploadProfileAvatarServices';
import { CreateUserService } from '@services/user/CreateUserService';
import { ForgotPasswordServices } from '@services/user/ForgotPasswordServices';
import { ResetPasswordServices } from '@services/user/ResetPasswordServices';

import createUserValidate from '@middleware/user/createUserValidate'

const upload = multer(multerUserConfig)
const usersRoutes = Router();
const userData = new UserData()

const createUser = new CreateUserService()
const uploadProfileAvatar = new UploadProfileAvatarServices()
const forgotPassword = new ForgotPasswordServices()
const resetPassword = new ResetPasswordServices()


usersRoutes.get(
  '/:id',
  param('id', 'Id is understand or nullable'),
  ensureAuthenticated,
  async (request: Request, response: Response) => {


    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      return response.status(400).json({ errors: errors.array() });
    }

    const { id } = request.params
    const user = await userData.getUser(id)

    return response.json(user)
  }
)

usersRoutes.post('/',
  createUserValidate,
  async (request: Request, response: Response) => {
    const {
      name, cpf, email, password, contact_whatsapp,
    } = request.body;


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

usersRoutes.patch('/reset-password', async(request, response) => {
  const { password, token } = request.body

  await resetPassword.execute({password, token});

  return response.json({ message: 'Password changed with success'})
})

export default usersRoutes;
