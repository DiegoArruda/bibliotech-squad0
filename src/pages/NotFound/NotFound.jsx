import React, { useState } from "react";
import { Button, ButtonGroup, Modal } from "react-bootstrap";

export function NotFound() {
  //HandleShow vai ser utilizado para exibir o modal quando o modal é fechado o handle close é chamado para atualizar o estado e esconder o modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="container text-center mt-5">
      <h1>404 - Página não encontrada</h1>
      <p>Desculpe, a página que você está procurando não foi encontrada.</p>
      <ButtonGroup className="mt-3">
        <Button href="/" variant="primary">
          Página Inicial
        </Button>
        <Button href="/login" variant="secondary">
          Login
        </Button>

        <Button variant="danger" onClick={handleShow}>
          Reportar Erro
        </Button>
      </ButtonGroup>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Erro Reportado</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Um erro foi reportado para os desenvolvedores. Obrigado pela sua
            ajuda!
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
