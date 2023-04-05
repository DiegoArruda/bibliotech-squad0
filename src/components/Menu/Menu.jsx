import "./Menu.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../firebase/auth";
import { ThemeContext } from "../../contexts/ThemeContext";
import { useContext } from "react";
import Logo from "../../assets/icons/LogoBibliotechSemTitulo.svg"

export function Menu() {
  const navigate = useNavigate();

  const { theme, switchTheme } = useContext(ThemeContext);

  function onLogout() {
    logout().then(() => {
      navigate("/login");
    });
  }

  return (
    <Navbar bg="success" variant="light" expand="lg">
      <Container fluid>
        <Navbar.Brand>
          <Link to="/">
            <img src={Logo} width="32" alt="Logo" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/perfil">
              Perfil
            </Nav.Link>
            <Nav.Link as={Link} to="/livros">
              Livros
            </Nav.Link>
            <Nav.Link as={Link} to="/emprestimos">
              Empréstimos
            </Nav.Link>
            <Nav.Link as={Link} to="/ajuda">
              Ajuda
            </Nav.Link>
            <Nav.Link as={Link}>
              <i
                onClick={switchTheme}
                class={
                  theme === "light"
                    ? "bi bi-emoji-sunglasses"
                    : "bi bi-moon-stars"
                }
              ></i>
            </Nav.Link>
            <Nav.Link onClick={onLogout}>
              <i className="bi bi-box-arrow-right"></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
