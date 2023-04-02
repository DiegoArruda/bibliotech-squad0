import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/images/login.png";


export function Footer() {
    return (
        <footer >
            <Container className="d-flex justify-content-center">
                <div className="col-lg-3 col-md-6 mb-4 mb-1 md-0" >
                    <img src={logo} width="60" alt="logo" />
                        <h6>Siga nossas rede sociais:</h6>
                    <Nav>
                        <Nav.Link as={Link}>
                        <i class="bi bi-facebook"></i>
                        </Nav.Link>
                        <Nav.Link as={Link}>
                        <i class="bi bi-linkedin"></i>
                        </Nav.Link>
                        <Nav.Link as={Link}>
                        <i class="bi bi-instagram"></i>
                        </Nav.Link>
                    </Nav>
                </div>
                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                    <h6>Bibliotech</h6>
                    <ul className="list-unstyled mb-0">
                        <li>
                        <Nav.Link as={Link} to="/politicas">
                        Termo de Politica e Privacidade 
                        </Nav.Link>
                        </li>
                        <li>
                        <Nav.Link as={Link} to="/">
                        Recursos
                        </Nav.Link>
                        </li>
                        <li>
                        <Nav.Link as={Link} to="/">
                        Suporte ao Cliente
                        </Nav.Link>
                        </li>
                    </ul>
                </div>
                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                    <h6>Quem somos</h6>
                    <ul className="list-unstyled mb-0">
                        <li>
                        <Nav.Link as={Link} to="/politicas">
                        Quem somos 
                        </Nav.Link>
                        </li>
                        <li>
                        <Nav.Link as={Link} to="/politicas">
                        Editoras parceiras
                        </Nav.Link>
                        </li>
                        <li>
                        <Nav.Link as={Link} to="/politicas">
                        Clientes
                        </Nav.Link>
                        </li>
                    </ul>
                </div>
            </Container>
            <hr />
            <p className="d-flex justify-content-center align-items-start" >
                <i class="bi bi-c-circle">2023 Bibliotech </i> 
            </p>
        </footer>
    );
}
