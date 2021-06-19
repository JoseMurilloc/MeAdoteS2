import { createContext, useContext, useState } from "react";
import { DetailsAnimalModalProps, ModalContextData, Animal } from "./types/modal";
import Modal from "react-modal";
import { FaHeart } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { useHistory } from "react-router-dom";

const ModalContext = createContext<ModalContextData>(
  {} as ModalContextData
);

const DetailsAnimalModal: React.FC<DetailsAnimalModalProps> = (
  {animal, onOpen, onClose}
) => {
  const [activeIndexImage, setActiveIndexImage] = useState(0);
  
  const { push } = useHistory()

  function handleClickPushPageAdopt() {
    onClose()
    push({
      pathname: `/Adopt/${animal.id}`,
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
            src={animal.images[activeIndexImage]?.url} 
            alt={animal.name}
          />
          <div className="images">
              {animal?.images.map((image, index) => (
                <button 
                  key={image.id}
                  className={activeIndexImage === index ? 'active': ''}
                  type="button"
                  onClick={() => handleClickImage(index)}
                >
                  <img src={image?.url} alt={animal?.name} />
                </button>
              ))}
            </div>
        </div>
        <div className="info">
          <h1>{animal.name}</h1>
          <div className="description">
            <p>
              Modéstia à parte, eu não sou linda? Meu nome é {`${animal.name}`} e eu adoro brincar. Tudo o que eu mais quero é encontrar uma família que me ame e se importe comigo. Quer me adotar?
            </p>
          </div>
          <div className="infoPetCards">
            <aside>
              Cadastrada
            </aside>
            <aside className="yellow-gradient">
              Vacinada
            </aside>
            <aside className="red-gradient">
              {animal.gender === 'f' ? 'Femêa' : 'Macho'}
            </aside>
            <aside className="green-gradient">
              {`${animal.age} ano`}
            </aside>
          </div>
          <div className="detailsPerson">
            <h3>Comportamento:</h3>
            <span>Carinhosa, convive com catos e crianças</span>
          </div>
          <button>
            <FaHeart color="#FFF" size={20} />
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
  const [animal, setAnimal] = useState<Animal>({
    age: 1,
    gender: 'm',
    name: 'Murillo',
    id: 1,
    photo: "https://skycms.s3.amazonaws.com/images/5495100/cachorro-card-1.png",
    images: [
      {
        id: 1,
        url: "https://skycms.s3.amazonaws.com/images/5495100/cachorro-card-1.png"
      },
      {
        id: 2,
        url: "https://skycms.s3.amazonaws.com/images/5495100/cachorro-card-1.png"
      },
      {
        id: 3,
        url: "https://skycms.s3.amazonaws.com/images/5495100/cachorro-card-1.png"
      }
    ]
  });

  function handleDetailsAnimalModel() {
    setDetailsAnimalModel(state => !state);
  }

  function handleDetailsAnimalModelClose() {
    setDetailsAnimalModel(false);
  }


  function handleClickAppendAnimal(animal: Animal) {
    setAnimal(animal)
    handleDetailsAnimalModel()
  }

  return (
    <ModalContext.Provider value={{ handleClickAppendAnimal }}>
      <DetailsAnimalModal 
        animal={animal}
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