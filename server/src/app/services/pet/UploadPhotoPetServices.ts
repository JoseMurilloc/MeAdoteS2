import { PetData } from "../../data/pet"

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
   * [] Check if of pet exists
   * [] Upload of photos basic created news photos
   */
  public async execute({ filenames, idPet}: IRequest) {
    const pet = await this.petData.getPetById(idPet)

    return await this.petData.uploadPhotoOfPet({
      filenames,
      idPet: pet.id
    })
  }
}

export default new UploadPhotoPetServices()

