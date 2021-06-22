import { Router } from 'express';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import multer from 'multer'
import uploadConfig from '../../config/upload'
import { UserData } from '../data/user';
import { CreateUserService } from '../services/user/CreateUserService';
import { UploadProfileAvatarServices } from '../services/user/UploadProfileAvatarServices';
import { body, validationResult } from 'express-validator';



const upload = multer(uploadConfig)
const usersRoutes = Router();
const userData = new UserData()

const createUser = new CreateUserService()
const uploadProfileAvatar = new UploadProfileAvatarServices()

usersRoutes.get(
  '/:id',
  async (request, response) => {
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
  body('gender').notEmpty(),
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
      name, cpf, email, password, gender, contact_whatsapp, confirmation_password
    } = request.body;

    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      return response.status(400).json({ errors: errors.array() });
    }


    await createUser.execute(
      {email,password, name, cpf, gender, contact_whatsapp}
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
    const { originalname, filename } = request.file;
    const { user } = request

    await uploadProfileAvatar.execute({
      filename,
      idUser: user.id
    })

    return response.json();
  }
)

export default usersRoutes;
