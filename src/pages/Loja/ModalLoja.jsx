import { Button, Modal } from "react-bootstrap";
import { getLivros } from "../../firebase/livros";
import { useEffect, useState } from "react";




export function ModalLoja(props) {

    const [showModal, setShowModal] = useState(false);
    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    const titulo = props.titulo
    const autor = props.autor
    const categoria = props.categoria
    const isbn = props.isbn

    


    return (
        <>
       
                <Button variant="success" onClick={handleShow}>
                        Comprar
                        </Button>
                        <Modal show={showModal} onHide={handleClose}>
                    
                        <Modal.Header closeButton>
                            <Modal.Title> {titulo} </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <p><b>Autor: </b>{autor}</p>
                            <p><b>Categoria:</b>  {categoria}</p>
                            <p><b>ISBN:</b> {isbn}</p>
                            <p> <b>Preço: R$1000,00</b>  </p> 
                        </Modal.Body>
                        <Modal.Footer>
                            <Button 
                            variant="outline-danger" 
                            onClick={handleClose}
                            >
                            Fechar
                            </Button>
                            <Button 
                            variant="outline-success" 
                            onClick={() => 
                            alert('Compra efetuada com sucesso!')}
                            >
                            Comprar
                            </Button>
                        </Modal.Footer>
                        </Modal>
        
                        </>             
    );

}