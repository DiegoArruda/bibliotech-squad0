import { useState } from "react";
import { Modal, Button } from "react-bootstrap"



export function ModalInfo(props){

    const titulo = props.titulo
    const autor = props.autor
    const categoria = props.categoria
    const isbn = props.isbn

    
    const [show, setshow] = useState(false);

    const handleClose = () => setshow(false);
    const handleShow = () => setshow(true);


    return(

        <>
        <Button  onClick={handleShow} size="sm" variant="info">
            <i className="bi bi-info-lg"></i>
        </Button>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Informações Adicionais</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Titulo: {titulo}</p>
                <p>Autor: {autor}</p>
                <p>Categoria: {categoria}</p>
                <p>ISBN: {isbn}</p>

            </Modal.Body>
            <Modal.Footer>
            </Modal.Footer>
        </Modal>
        </>
    )
}