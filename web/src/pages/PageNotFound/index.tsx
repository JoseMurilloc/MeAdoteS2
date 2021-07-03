import HeaderUserSignIn from "../../components/HeaderUserSignIn";
import { Container } from "./styles";

import Dog404 from '../../assets/images/Dog404.png'

export default function NotFound() {
  return (
    <Container>
      <HeaderUserSignIn />
      <main>
       <div className="content">
          <h1>Pagina não encontrada</h1>
          <p>
            O que foi pesquisado não foi encontrado, volte para a pagina inicial de busca.
          </p>
          <button>Voltar</button>
        </div>
        <img src={Dog404} alt="Background not found" />
     </main>
    </Container>
  )
}