import { useEffect, useState } from "react";
import { Badge, Button, Container, Pagination, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { Loader } from "../../components/Loader/Loader";
import {
  collection,
  endBefore,
  getDocs,
  limit,
  limitToLast,
  orderBy,
  query,
  startAfter,
} from "firebase/firestore";
import { db } from "../../firebase/config";

export function Emprestimos() {
  const [emprestimos, setEmprestimos] = useState(null);

  const [last, setLast] = useState(null);
  const [first, setFirst] = useState(null);
  const [contador, setContador] = useState(1);

  useEffect(() => {
    // getEmprestimos().then((busca) => {
    //   setEmprestimos(busca);
    // });
    const atual = query(
      collection(db, "emprestimos"),
      orderBy("leitor"),
      limit(3)
    );
    getDocs(atual).then((snapshot) => {
      let paginaAtual = [];
      const lastVisible = snapshot.docs[snapshot.docs.length - 1];
      setLast(lastVisible);
      const first = snapshot.docs[0];
      setFirst(first);
      snapshot.forEach((doc) => {
        paginaAtual.push({ ...doc.data(), id: doc.id });
      });
      setEmprestimos(paginaAtual);
    });
  }, []);

  function proximaPagina() {
    const nextPage = query(
      collection(db, "emprestimos"),
      orderBy("leitor"),
      startAfter(last),
      limit(3)
    );
    getDocs(nextPage).then((snapshot) => {
      if (!snapshot.empty) {
        let calculo = contador + 1;
        setContador(calculo);
        let paginaAtual = [];
        const lastVisible = snapshot.docs[snapshot.docs.length - 1];
        setLast(lastVisible);
        const first = snapshot.docs[0];
        setFirst(first);
        snapshot.forEach((doc) => {
          paginaAtual.push({ ...doc.data(), id: doc.id });
        });
        setEmprestimos(paginaAtual);
      }
    });
  }

  function voltarPagina() {
    const prevPage = query(
      collection(db, "emprestimos"),
      orderBy("leitor"),
      endBefore(first),
      limitToLast(3)
    );
    getDocs(prevPage).then((snapshot) => {
      if (!snapshot.empty) {
        let calculo = contador - 1;
        setContador(calculo);

        let paginaAtual = [];
        const lastVisible = snapshot.docs[snapshot.docs.length - 1];
        setLast(lastVisible);
        const first = snapshot.docs[0];
        setFirst(first);
        snapshot.forEach((doc) => {
          paginaAtual.push({ ...doc.data(), id: doc.id });
        });
        setEmprestimos(paginaAtual);
      }
    });
  }

  //Função para definir status do emprestimo para atrasado ou pendente
  function bookLoanStatus(emprestimo) {
    const today = dayjs();
    const dataDevolucao = dayjs(emprestimo.dataDevolucao);
    const diff = today.diff(dataDevolucao, "day");
    /* const loanToDeliver = loanStatus; */

    if (diff <= 0) {
      emprestimo.status = "Pendente";
      return <Badge bg="warning">{emprestimo.status}</Badge>;
    } else if (diff > 0) {
      emprestimo.status = "Atrasado";
      return <Badge bg="danger">{emprestimo.status}</Badge>;
    } /*  else if ((loanToDeliver = "Devolvido")) { */
    /*  emprestimo.status = "Devolvido"; */
    /*  return <Badge bg="success">{emprestimo.status}</Badge>; */
    /* }  */
  }

  //Utilização do dayjs
  //Instalação: npm install dayjs
  const dayjs = require("dayjs");
  return (
    <div className="emprestimos">
      <Container>
        <div className="d-flex justify-content-between align-items-center">
          <h1>Empréstimos</h1>
          <Button as={Link} to="/emprestimos/adicionar" variant="success">
            Adicionar empréstimo
          </Button>
        </div>
        <hr />
        {emprestimos === null ? (
          <Loader />
        ) : (
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Leitor</th>
                <th>E-mail</th>
                <th>Telefone</th>
                <th>Livro</th>
                <th>Status</th>
                <th>Atualizar Status</th>
                <th>Data de Empréstimo</th>
                <th>Data de Devolução</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {emprestimos.map((emprestimo) => {
                const dataEmprestimo = emprestimo.dataEmprestimo
                  .toDate()
                  .toLocaleDateString("pt-br");
                const dataDevolucao = dayjs(emprestimo.dataDevolucao);
                return (
                  <tr key={emprestimo.id}>
                    <td>{emprestimo.leitor}</td>
                    <td>{emprestimo.email}</td>
                    <td>{emprestimo.telefone}</td>
                    <td>{emprestimo.livro.titulo}</td>
                    <td>{bookLoanStatus(emprestimo)}</td>
                    <td>
                      <DropdownButton
                        variant="dark"
                        title="Status"
                        menuVariant="dark"
                      >
                        <Dropdown.Item onSelect={bookLoanStatus(emprestimo)}>
                          Pendente
                        </Dropdown.Item>
                        <Dropdown.Item>Devolvido</Dropdown.Item>
                      </DropdownButton>
                    </td>
                    <td>{dataEmprestimo}</td>
                    <td>{dataDevolucao.format("DD/MM/YYYY")}</td>
                    <td>
                      <Button
                        as={Link}
                        to={`/emprestimos/editar/${emprestimo.id}`}
                        variant="warning"
                        size="sm"
                      >
                        <i className="bi bi-pencil-fill"></i>
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        )}
        <Pagination className="d-flex justify-content-center">
          <Button variant="none" onClick={voltarPagina}>
            <Pagination.Prev />
          </Button>
          <Button variant="none">
            <Pagination.Item active>{contador}</Pagination.Item>
          </Button>
          <Button variant="none" onClick={proximaPagina}>
            <Pagination.Next />
          </Button>
        </Pagination>
      </Container>
    </div>
  );
}
