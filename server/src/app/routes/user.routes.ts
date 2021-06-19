import { Router } from 'express';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import multer from 'multer'
import uploadConfig from '../../config/upload'
import { UserData } from '../data/user';
import { CreateUserService } from '../services/user/CreateUserService';


const upload = multer(uploadConfig)
const usersRoutes = Router();
const userData = new UserData()

const createUser = new CreateUserService()

usersRoutes.get('/:id', async (request, response) => {
  const { id } = request.params
  const users = await userData.getUser(id)

  return response.json(users)
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

usersRoutes.patch('/avatar',
  ensureAuthenticated,
  upload.single('avatar'),
  async (request, response) => {
    return response.json();
  }
)

export default usersRoutes;
