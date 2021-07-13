import { Router } from 'express';
import { Request, Response } from "express";
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

import uploadConfig from '../../config/upload'
import multer from 'multer';

import uploadPhotoPet from '../services/pet/UploadPhotoPetServices';
import listAllPetsServices from '../services/pet/ListAllPetsServices';
import getPetByIdServices from '../services/pet/getPetByIdServices';
import favoritePetServices from '../services/pet/FavoritePetServices';
import listAllFavoritesServices from '../services/pet/ListAllFavoritesServices'
import deleteFavoritePetServices from '../services/pet/DeleteFavoritePetServices'
import isFavoriteServices from '../services/favorite/isFavoriteServices'


const petRoutes = Router();
const upload = multer(uploadConfig)

petRoutes.get(
  '/favorites/:idPet',
  ensureAuthenticated,
  async(request: Request, response: Response) => {
    const { id: idUser } = request.user
    const { idPet } = request.params

    const isFavorite = await isFavoriteServices.execute({
      idUser: Number(idUser),
      idPet: Number(idPet)
    })

    return response.json({ isFavorite })
  }
)

petRoutes.delete(
  '/favorites/:idPet',
  ensureAuthenticated,
  async (request: Request, response: Response) => {
    const { idPet } = request.params
    const { id: idUser} = request.user

    await deleteFavoritePetServices.execute({
      idUser: Number(idUser),
      idPet: Number(idPet)
    })

    return response.status(204).json()
  }
)


petRoutes.get(
  '/favorites',
  ensureAuthenticated,
  async (request: Request, response: Response) => {
    const { id: idUser } = request.user
    const { specie } = request.query

    const pets = await listAllFavoritesServices.execute({
      idUser: Number(idUser),
      specie: String(specie),
    })

    return response
      .status(201)
      .json(pets)
  }
)

petRoutes.post(
  '/:idPet/favorites',
  ensureAuthenticated,
  async (request: Request, response: Response) => {
    const { idPet } = request.params
    const { id: idUser } = request.user

    const favoriteResponse = await favoritePetServices.execute({
      idPet: Number(idPet),
      idUser: Number(idUser)
    })

    return response
      .status(favoriteResponse.statusCode)
      .json({message: favoriteResponse.message})
  }
)

petRoutes.get('/', async (request: Request, response: Response) => {
    const { page, specie } = request.query

    const pets = await listAllPetsServices.execute({
      page: Number(page),
      specie: String(specie)
    })

    return response.json({pets, page});
  }
);

petRoutes.get('/:id', ensureAuthenticated, async (request: Request, response: Response) => {
  const { id } = request.params

  const user = await getPetByIdServices.execute({ id: Number(id) })

  return response.json(user)
})


petRoutes.post('/profile-avatars',
  ensureAuthenticated,
  upload.array('avatar', 4),
  async (request, response) => {
    const files = request.files as any
    const { idPet } = request.body

    const filenames =  files.map((f: any) => ({ filename: f.filename }))

    const photoPetAvatar = await uploadPhotoPet.execute({
      filenames,
      idPet
    })

    return response.json(photoPetAvatar);
  }
)


export default petRoutes;
