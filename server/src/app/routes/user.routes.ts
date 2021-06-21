import { Router } from 'express';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import multer from 'multer'
import uploadConfig from '../../config/upload'
import { UserData } from '../data/user';
import { CreateUserService } from '../services/user/CreateUserService';
import { UploadProfileAvatarServices } from '../services/user/UploadProfileAvatarServices';


const upload = multer(uploadConfig)
const usersRoutes = Router();
const userData = new UserData()

const createUser = new CreateUserService()
const uploadProfileAvatar = new UploadProfileAvatarServices()

usersRoutes.get('/:id', async (request, response) => {
  const { id } = request.params
  const user = await userData.getUser(id)

  return response.json(user)
})

usersRoutes.post('/', async (request, response) => {
  const {
    name, email, password, cpf, gender, number
  } = request.body;

  await createUser.execute(
    {email,password, name, cpf, gender, number}
  );

  return response
    .status(201)
    .json({ message: 'User create with success'});
});

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
