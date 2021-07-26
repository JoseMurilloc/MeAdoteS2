import { PetData } from "@data/pet"
import { removeUploadImages } from "@utils/removeUploadImage"

interface IRequest {
  filenames: Array<{
    filename: string
  }>;
  idPet: number;
}

class UploadPhotoPetServices {
  private petData: PetData


  constructor () {
    this.petData = new PetData()
  }


  /**
   * [x] Check if of pet exists
   * [x] Upload of photos basic created news photos
   */
  public async execute({ filenames, idPet}: IRequest) {
    const pet = await this.petData.getPetById(idPet)

    const photosByPets = await this.petData.checkExistPhotoByPet(idPet)

    if (photosByPets.length > 0) {

      const photosByPetsFirst = photosByPets[0]

      // Type correct tge filename is string[]
      const oldPhotos =
        photosByPetsFirst.filename.map((f: string) => ({filename: f}))

      await removeUploadImages(oldPhotos)

      return await this.petData.updatedPhotos({
        filenames,
        idPet: pet.id
      })

    } else {
      return await this.petData.uploadPhotoOfPet({
        filenames,
        idPet: pet.id
      })
    }
  }
}

export default new UploadPhotoPetServices()

