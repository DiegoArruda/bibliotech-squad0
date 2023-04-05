import { Container, Spinner } from "react-bootstrap";
import livroIcon  from "../../assets/icons/LogoBibliotechSemTitulo.svg"

export function Loader() {
    return (
        <Container 
        className="d-flex flex-column position-absolute top-50 start-50 translate-middle
        justify-content-center align-items-center">
            <img src={livroIcon} width="300" />
            <h1 className="display-3">Bibliotech</h1>
            <span>O melhor local para alugar livros</span>
            <br />
            <Spinner variant="dark"></Spinner>
        </Container>
    )
}