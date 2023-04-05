import "./Loja.css";
import { Footer } from "../../components/Footer/Footer";
import { Button, Card, CardGroup, Carousel, Col, Container, Modal, Nav, Navbar, Row } from "react-bootstrap";
import logoIcon from "./../../assets/icons/livros.png";
import { Link, useNavigate } from "react-router-dom";
import { ThemeContext } from "../../contexts/ThemeContext";
import { useContext, useEffect, useState } from "react";
import pergunta1 from "./../../assets/images/paginaAjuda/cadastro1.png"
import pergunta2 from "./../../assets/images/paginaAjuda/editar1.png"
import pergunta3 from "./../../assets/images/paginaAjuda/emprestar1.png"
import pergunta4 from "./../../assets/images/paginaAjuda/status1.png"
import { getLivros } from "../../firebase/livros"
import { ModalLoja } from "./ModalLoja";




export function Loja() {

    function Menu() {
        const navigate = useNavigate();
      
        const { theme, switchTheme } = useContext(ThemeContext);
      
      
        return (
          <Navbar bg="success" variant="light" expand="lg">
            <Container fluid>
              <Navbar.Brand>
                <Link to="/">
                  <img src={logoIcon} width="32" alt="Logo" />
                </Link>
              </Navbar.Brand>
              <Navbar.Toggle />
              <Navbar.Collapse>
                <Nav className="ms-auto">
                  <Nav.Link as={Link} to="/login">
                    Login
                  </Nav.Link>
                  <Nav.Link as={Link} to="/cadastro">
                    Cadastro
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
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        );
    }

    const [livros, setLivros] = useState(null);
    useEffect(() => {
        getLivros().then((busca) => {
            setLivros(busca);
        });
    }, []);

    return (
        <>

        {/* NavBar */}
        <Menu/>

        {/* Carrossel de imagens de livros */}
        <Carousel className="carousel-loja1" variant="dark">

            <Carousel.Item>
                <img 
                className="d-block w-100"
                src={pergunta1} 
                alt="" />
                <Carousel.Caption>
                    <h3>Produto 1</h3>
                    <p>Descrição do Produto</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img 
                className="d-block w-100" 
                src={pergunta2} 
                alt="" />
                <Carousel.Caption>
                    <h3>Produto 2</h3>
                    <p>Descrição do Produto</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img 
                className="d-block w-100"
                src={pergunta3} 
                alt="" />
                <Carousel.Caption>
                    <h3>Produto 3</h3>
                    <p>Descrição do Produto</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img 
                className="d-block w-100" 
                src={pergunta4} 
                alt="" />
                <Carousel.Caption>
                    <h3>Produto 4</h3>
                    <p>Descrição do Produto</p>
                </Carousel.Caption>
            </Carousel.Item>

            
        </Carousel>

        {/* Cards de produtos (livros, marca paginas, etc etc) */}
        <Container className="d-flex flex-row flex-wrap">
        {
            livros && 
            livros.map((livro) => (
                <div className="d-flex justify-content-center flex-row">
                    <Card key={livro.id} className="card-loja"  border="success" >
                        <Card.Img variant="top" src={livro.urlCapa} style={{ width: '286px',  height: '350px' }}/>
                        <Card.Body>
                        <Card.Title>
                            <h5> <b>{livro.titulo}</b> </h5>
                        </Card.Title>
                        <Card.Text>
                            <p> <b>Autor: </b>{livro.autor} </p>
                            <p> <b>Categoria:</b> {livro.categoria}  </p> 
                            <p> <b>ISBN:</b> {livro.isbn} </p> 
                            <p> <b>Preço: R$1000,00</b>  </p> 
                        </Card.Text>
                            <ModalLoja
                            titulo={livro.titulo}
                            autor={livro.autor}
                            categoria={livro.categoria}
                            isbn={livro.isbn}
                            > </ModalLoja>
                        </Card.Body>
                    </Card>
                    </div>
            ))
            
        }
        </Container>
        {/* Footer */}
        <Footer/>
        </>
    );
}