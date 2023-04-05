import "./Loja.css";
import { Footer } from "../../components/Footer/Footer";
import { Card,Carousel, Container, Nav, Navbar} from "react-bootstrap";
import Logo from "../../assets/icons/LogoBibliotechSemTitulo.svg"
import { Link } from "react-router-dom";
import { ThemeContext } from "../../contexts/ThemeContext";
import { useContext, useEffect, useState } from "react";
import banner1 from "../../assets/images/Loja/Bem-Vindo.jpeg"
import banner2 from "../../assets/images/Loja/Happy.jpeg"
import banner3 from "../../assets/images/Loja/Presente.jpeg"
import { getLivros } from "../../firebase/livros"
import { ModalLoja } from "./ModalLoja";




export function Loja() {

    function Menu() {
      
        const { theme, switchTheme } = useContext(ThemeContext);
      
      
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
        <div className="loja">
        <Carousel className="carousel-loja1" variant="dark" >

            <Carousel.Item>
                <img 
                className="d-block w-100 mt-5"
                src={banner1} 
                alt="" />
            </Carousel.Item>

            <Carousel.Item>
                <img 
                className="d-block w-100 mt-5" 
                src={banner2} 
                alt="" />
            </Carousel.Item>

            <Carousel.Item>
                <img 
                className="d-block w-100 mt-5"
                src={banner3} 
                alt="" />
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
        </div>
        {/* Footer */}
        <Footer/>
        </>
    );
}