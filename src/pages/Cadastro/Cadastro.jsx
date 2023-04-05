import { Button, Card, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { Link, Navigate } from "react-router-dom";
import logoIcon from "../../assets/icons/livros.png";
import Logo from "../../assets/icons/LogoBibliotech.svg"
import googleIcon from "../../assets/icons/google-white.svg";
import githubIcon from "../../assets/icons/github.svg";
import { useForm } from "react-hook-form";
import {
  cadastrarEmailSenha,
  loginGoogle,
  loginFacebook,
  loginGithub,
} from "../../firebase/auth";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import facebookIcon from "../../assets/icons/facebook-icon.svg";
import { Footer } from "../../components/Footer/Footer";
import { AuthContext } from "../../contexts/AuthContext";
import "../Login/Login.css"

export function Cadastro() {
  const [hidePass, setHidePass] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  function onSubmit(data) {
    const { email, senha } = data;
    cadastrarEmailSenha(email, senha)
      .then((user) => {
        toast.success(`Bem-vindo(a) ${user.email}`, {
          position: "bottom-right",
          duration: 2500,
        });
        navigate("/");
      })
      .catch((erro) => {
        toast.error(`Um erro aconteceu. Código: ${erro.code}`, {
          position: "bottom-right",
          duration: 2500,
        });
      });
  }

  function onLoginGoogle() {
    // then = quando der certo o processo
    loginGoogle()
      .then((user) => {
        toast.success(`Bem-vindo(a) ${user.email}`, {
          position: "bottom-right",
          duration: 2500,
        });
        navigate("/");
      })
      .catch((erro) => {
        // tratamento de erro
        toast.error(`Um erro aconteceu. Código: ${erro.code}`, {
          position: "bottom-right",
          duration: 2500,
        });
      });
  }

  function onLoginFacekook() {
    loginFacebook()
      .then((user) => {
        toast.success(`Bem-vindo(a) ${user.email}`, {
          position: "bottom-right",
          duration: 2500,
        });
        navigate("/");
      })
      .catch((erro) => {
        toast.error(`Um erro aconteceu. Código: ${erro.code}`, {
          position: "bottom-right",
          duration: 2500,
        });
      });
  }

  function onLoginGithub() {
    loginGithub()
      .then((user) => {
        toast.success(`Bem-vindo(a) ${user.email}`, {
          position: "bottom-right",
          duration: 2500,
        });
        navigate("/");
      })
      .catch((erro) => {
        toast.error(`Um erro aconteceu. Código: ${erro.code}`, {
          position: "bottom-right",
          duration: 2500,
        });
      });
  }

  const usuarioLogado = useContext(AuthContext);

  // Se tiver dados no objeto, está logado
  if (usuarioLogado !== null) {
    return <Navigate to="/" />;
  }

  return (
    <>
    <div className="CardBg">
      <Container fluid className="my-5">
        <Container className="card-login">
          <Row className="d-flex justify-content-center align-items-center">
            <Col className="md-12 xl-4">
              <Card className="p-5">
                <div>
                  <p className="text-center">
                    <img src={Logo} width="256" alt="Logo do app" />
                  </p>
                </div>
                <div>
              <h4>Faça parte da nossa plataforma</h4>
              <p className="text-muted">
                Já tem conta? <Link to="/login">Entre</Link>
              </p>
              <hr />
              <div className="d-flex justify-content-center align-items-center">
              <Button className="botao-icone" variant="danger" onClick={onLoginGoogle}>
                <img src={googleIcon} width="32" alt="Logo do google" />
              </Button>
              <Button
                className="botao-icone"
                variant="primary text-light"
                onClick={onLoginFacekook}
              >
                <img src={facebookIcon} width="32" alt="Facebook icon" /> 
              </Button>
              <Button
                className="botao-icone"
                variant="dark text-light"
                onClick={onLoginGithub}
              >
                <img src={githubIcon} width="32" alt="Facebook icon" />
              </Button>
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <Button className="m-3" variant="outline-success" as={Link} to="/quizz">
                  <img src={logoIcon} width="32" alt="" />
                  Tente nosso Quiz
                </Button>
                <Button className="m-3" variant="outline-success" as={Link} to="/loja">
                  <img src={logoIcon} width="32" alt="" />
                  Visite nossa loja
                </Button>
              </div>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    className={errors.email && "is-invalid"}
                    placeholder="Seu email"
                    {...register("email", { required: "O email é obrigatório" })}
                  />
                  <Form.Text className="invalid-feedback">
                    {errors.email?.message}
                  </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="password">
                  <Form.Label>Senha</Form.Label>
                  <InputGroup>
                    <Form.Control
                      type={hidePass ? "password" : "text"}
                      className={errors.senha && "is-invalid"}
                      placeholder="Sua senha"
                      {...register("senha", { required: "A senha é obrigatória" })}
                    />
                    <InputGroup.Text>
                      <i
                        class={hidePass ? "bi bi-eye-fill" : "bi bi-eye"}
                        onClick={() => setHidePass(!hidePass)}
                      ></i>
                    </InputGroup.Text>
                    <Form.Text className="invalid-feedback">
                      {errors.senha?.message}
                    </Form.Text>
                  </InputGroup>
                </Form.Group>
                <div className="d-flex justify-content-center align-items-center">
                <Button className="w-25" type="submit" variant="success">
                  Cadastrar
                </Button>
                </div>
              </Form>
              </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>
      </div>
      <Footer />
    </>
  );
}
