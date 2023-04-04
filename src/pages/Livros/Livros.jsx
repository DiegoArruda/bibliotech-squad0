import { useEffect, useState } from "react";
import { Button, Container, Form, Table } from "react-bootstrap";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { Loader } from "../../components/Loader/Loader";
import { deleteLivro, getLivros } from "../../firebase/livros";
import "./Livros.css";
import { ModalInfo } from "../../components/ModalInfo/ModalInfo";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/config";

export function Livros() {
  const [pesquisa, setPesquisa] = useState([]);

  const [livros, setLivros] = useState(null);

  useEffect(() => {
    initializeTable();
  }, []);


    function onPesquisa(event){
      let valor = event.target.value
    let Liv = [];
    for(let livro of livros) {
      let nomeLivroMinusculo = livro.titulo.toLowerCase();
      let valorMinusculo = valor.toLowerCase();
      let indice = nomeLivroMinusculo.indexOf(valorMinusculo);
      if(indice != -1) {
        Liv.push(livro)
      }
      setPesquisa(Liv)
    }}

  function initializeTable() {
    const livrosRef = collection(db, "livros");
    const q = query(livrosRef, where("active", "==", true));
    getDocs(q).then((snapshot) => {
      let paginaAtual = [];
      snapshot.forEach((doc) => {
        paginaAtual.push({ ...doc.data(), id: doc.id });
      });
      setLivros(paginaAtual);
      setPesquisa(paginaAtual);
    });
  }

  function onDeleteLivro(id, titulo) {
    const deletar = window.confirm(
      `Tem certeza que deseja excluir o livro ${titulo}?`
    );
    if (deletar) {
      let data = false;
      deleteLivro(id, data).then(() => {
        toast.success(`${titulo} apagado com sucesso!`, {
          duration: 2000,
          position: "bottom-right",
        });
        initializeTable();
      });
    }
  }

  return (
    <div className="livros">
      <Container>
        <div className="d-flex justify-content-between align-items-center">
          <h1>Livros</h1>
          <Form>
            <Form.Group className="mt-2">
              <Form.Control
                onChange={onPesquisa}
                type="text"
                placeholder="Pesquise livro ou ISBN..."
              />
              <Form.Text className="text-danger"></Form.Text>
            </Form.Group>
          </Form>
          <Button as={Link} to="/livros/adicionar" variant="success">
            Adicionar Livro
          </Button>
        </div>
        <hr />
        {livros === null ? (
          <Loader />
        ) : (
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Título</th>
                <th>Autor</th>
                <th>Categoria</th>
                <th>ISBN</th>
                <th>Imagem</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {pesquisa.map((livro) => {
                return (
                  <tr key={livro.id}>
                    <td>{livro.titulo}</td>
                    <td>{livro.autor}</td>
                    <td>{livro.categoria}</td>
                    <td>{livro.isbn}</td>
                    <td>
                      <img src={livro.urlCapa} alt={livro.titulo} />
                    </td>
                    <td className="text-center">
                      <Button
                        as={Link}
                        to={`/livros/editar/${livro.id}`}
                        variant="warning"
                        size="sm"
                        className="me-2"
                      >
                        <i className="bi bi-pencil-fill"></i>
                      </Button>
                      <Button
                        size="sm"
                        variant="danger"
                        className="me-2"
                        onClick={() => onDeleteLivro(livro.id, livro.titulo)}
                      >
                        <i className="bi bi-trash3-fill"></i>
                      </Button>
                      <ModalInfo
                        titulo={livro.titulo}
                        autor={livro.autor}
                        categoria={livro.categoria}
                        isbn={livro.isbn}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        )}
      </Container>
    </div>
  );
}
