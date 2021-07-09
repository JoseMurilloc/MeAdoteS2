import { createContext, useContext, useEffect, useState } from "react";
import { DetailsAnimalModalProps, ModalContextData, Animal, Pet } from "./types/modal";
import Modal from "react-modal";
import { FaHeart } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { useHistory } from "react-router-dom";

const ModalContext = createContext<ModalContextData>(
  {} as ModalContextData
);

const DetailsAnimalModal: React.FC<DetailsAnimalModalProps> = (
  {pet, onOpen, onClose}
) => {
  const [activeIndexImage, setActiveIndexImage] = useState(0);
  const monthsOrYears = pet.age > 1 ? 'anos' : 'meses'
  
  
  const { push } = useHistory()

  function handleClickPushPageAdopt() {
    onClose()
    push({
      pathname: `/Adopt/${pet.id}`,
    })
  }

  function handleClickImage (index: number) {
    setActiveIndexImage(index);
  }
  
  return (
    <Modal
      isOpen={onOpen}
      onRequestClose={onClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onClose}
        className="react-modal-close"
      >
        <IoMdClose color="#393A3A" size={20} />
      </button>
      <div className="containerFlex">
        <div className="containerImages">
          <img 
            src={pet.photos ? pet.photos[activeIndexImage] : "https://img.freepik.com/free-vector/404-error-web-template-with-cute-doggy_23-2147763344.jpg?size=338&ext=jpg"} 
            alt={pet.name}
          />
          <div className="images">
              {pet?.photos?.map((value: string, index: number) => {
                if (index !== activeIndexImage) {
                  return (
                   <button 
                      key={value}
                      className={
                        activeIndexImage === index ? 'active': ''
                      }
                      type="button"
                      onClick={() => handleClickImage(index)}
                    >
                      <img src={value} alt={pet?.name} />
                    </button>
                  )
                }
              })}
              {!pet.photos && (
                <>
                  <button>
                    <img src="https://img.freepik.com/free-vector/404-error-web-template-with-cute-doggy_23-2147763344.jpg?size=338&ext=jpg" alt="Not photo pet" />
                  </button>
                  <button>
                    <img src="https://img.freepik.com/free-vector/404-error-web-template-with-cute-doggy_23-2147763344.jpg?size=338&ext=jpg" alt="Not photo pet" />
                  </button>
                  <button>
                    <img src="https://img.freepik.com/free-vector/404-error-web-template-with-cute-doggy_23-2147763344.jpg?size=338&ext=jpg" alt="Not photo pet" />
                  </button>
                </>
            )}
            </div>
        </div>
        <div className="info">
          <h1>{pet.name}</h1>
          <div className="description">
            <p>
              {pet.description}
            </p>
          </div>
          <div className="infoPetCards">
            <aside>
              {pet.castrated ? 'Cadastrada' : 'Não castrado'}
            </aside>
            <aside className="yellow-gradient">
              Vacinada
            </aside>
            <aside className="red-gradient">
              {pet.gender === 'f' ? 'Femêa' : 'Macho'}
            </aside>
            <aside className="green-gradient">
              {`${pet.age} ${monthsOrYears}`}
            </aside>
          </div>
          <div className="detailsPerson">
            <h3>Comportamento:</h3>
            <span>Carinhosa, convive com catos e crianças</span>
          </div>
          <button>
            <FaHeart color="#FFF" size={10} />
            <span>Preferido</span>
          </button>
        </div>
      </div>

      <button 
        className="to-adopt"
        onClick={() => handleClickPushPageAdopt()}
      >
      Adotar
    </button>
    </Modal>
  )  
}

const ModalProvider: React.FC = ({children}) => {
  const [detailsAnimalModel, setDetailsAnimalModel] = useState(false);
  const [animal, setAnimal] = useState<Pet>({
    age: 1,
    gender: 'm',
    name: 'Murillo',
    castrated: false,
    specie: 'dog',
    description: 'lorem',
    id: 1,
    photos: [
      "https://skycms.s3.amazonaws.com/images/5495100/cachorro-card-1.png",
      "https://skycms.s3.amazonaws.com/images/5495100/cachorro-card-1.png",
      "https://skycms.s3.amazonaws.com/images/5495100/cachorro-card-1.png"
    ]
  });

  function handleDetailsAnimalModel() {
    setDetailsAnimalModel(state => !state);
  }

  function handleDetailsAnimalModelClose() {
    setDetailsAnimalModel(false);
  }


  function handleClickAppendAnimal(pet: Pet) {
    setAnimal(pet)
    handleDetailsAnimalModel()
  }

  return (
    <ModalContext.Provider value={{ handleClickAppendAnimal }}>
      <DetailsAnimalModal 
        pet={animal}
        onOpen={detailsAnimalModel}
        onClose={handleDetailsAnimalModelClose}
      />
      {children}
    </ModalContext.Provider>
  )
}

function useModal() {
  const context = useContext(ModalContext);

  if (!context) {  
    throw new Error('useModal must be used within a Authentication')
  }

  return context
}

export { useModal, ModalProvider }