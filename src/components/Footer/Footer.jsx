import { Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo1.png";
import "./Footer.css"

export function Footer() {
    return (
        <footer>
            <Container className="d-flex justify-content-center ">
                <div className="col-lg-5 mb-0 mt-5">
                    <img src={logo} width="100" alt="logo"  />
                
                    <h6 className="mt-3 mb-0">Siga nossas rede sociais:</h6>
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
                <div className="col-lg-3 mb-4">
                    <h6 className="mt-5">Bibliotech</h6>
                    <ul className="list-unstyled mb-0">
                        <li>
                        <Nav.Link as={Link} to="/politicas">
                        Politica e Privacidade 
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
                <div>
                    <h6 className="mt-5">Quem somos</h6>
                    <ul className="list-unstyled mt-0">
                        <li>
                        <Nav.Link as={Link} to="/">
                        Quem somos 
                        </Nav.Link>
                        </li>
                        <li>
                        <Nav.Link as={Link} to="/">
                        Editoras parceiras
                        </Nav.Link>
                        </li>
                        <li>
                        <Nav.Link as={Link} to="/">
                        Clientes
                        </Nav.Link>
                        </li>
                    </ul>
                </div>
            </Container>
            <hr />
            <p className="d-flex justify-content-center">
                <i class="bi bi-c-circle">2023 Bibliotech </i> 
            </p>
        </footer>
    );
}
