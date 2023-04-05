import { Button, Card, Col, Container, Row } from "react-bootstrap";
import imgPerfil from "../../assets/icons/iconProfile.svg"
import "./PerfilUsuario.css"
import { ModalUser } from "../../components/ModalUser/ModalUser";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { auth } from "../../firebase/config";


export function PerfilUsuario(){

    const usuarioLogado = useContext(AuthContext);

    console.log(usuarioLogado)

    const displayName= usuarioLogado.displayName;
    const email = usuarioLogado.email

    
    const [user,setUser] = useState(auth.currentUser)
    


    return(
        <div className="perfil-usuario">
            <div className="d-flex justify-content-center align-items-center">
                <Container className="py-5 h-100 w-25">
                    <Row className="d-flex justify-content-center align-items-center h-100">
                        <Col className="md-12 xl-4">
                            <Card className="cardperfil">
                                <Card.Body className="text-center">
                                    <div className="mt-3 mb-4">
                                        <img src={imgPerfil} alt="Imagem de Perfil"/>
                                    </div>
                                    <h4>{user.displayName}</h4>
                                    <Card.Text className="text-muded mb-4">
                                        {user.email} <span className="mx-2"></span>
                                    </Card.Text>
                                    <div className="mb-4 pb-2">
                                        <Button variant="outline floating">
                                            <i className="bi bi-facebook"></i>
                                        </Button>
                                        <Button variant="outline floating">
                                            <i className="bi bi-whatsapp"></i>
                                        </Button>
                                        <Button variant="outline floating">
                                            <i className="bi bi-skype"></i>
                                        </Button>
                                    </div>
                                    <ModalUser/>
                                    <div className="d-flex justify-content-evenly text-center mt-5 mb-2">
                                        <div>
                                            <Card.Text className="mb-1 h-5 p-2">
                                                <i class="bi bi-journal-check"></i>
                                            </Card.Text>
                                            <Card.Text className="small text-muted mb-0 m-2">
                                                Total Livros Lidos
                                            </Card.Text>
                                        </div>
                                        <div>
                                            <Card.Text className="mb-1 h-5 p-2">
                                            <i class="bi bi-journal-text"></i>
                                            </Card.Text>
                                            <Card.Text className="small text-muted mb-0 m-2">
                                                Lendo no Momento
                                            </Card.Text>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}