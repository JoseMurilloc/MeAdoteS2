import { Router } from 'express';
import { Request, Response } from "express";
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

import uploadConfig from '../../config/upload'
import uploadPhotoPet from '../services/pet/UploadPhotoPetServices';
import multer from 'multer';
import listAllPetsServices from '../services/pet/ListAllPetsServices';

const petRoutes = Router();
const upload = multer(uploadConfig)


petRoutes.get('/',
  ensureAuthenticated,
  async (request: Request, response: Response) => {
    const { page } = request.query

    const pets = await listAllPetsServices.execute({
      page: Number(page),
    })

    return response.json({pets, page});
  }
);


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
