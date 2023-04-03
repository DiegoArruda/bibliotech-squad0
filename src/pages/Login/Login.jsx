import { useContext, useState } from "react";
import { Button, Container, Form, InputGroup } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, Navigate, useNavigate } from "react-router-dom";
import googleIcon from "../../assets/icons/google-white.svg";
import loginImg from "../../assets/images/login.png";
import githubIcon from "../../assets/icons/github.svg";
import { AuthContext } from "../../contexts/AuthContext";
import { loginGoogle, loginEmailSenha, loginFacebook, loginGithub } from "../../firebase/auth";
import facebookIcon from "../../assets/icons/facebook-icon.svg"
import { Footer } from "../../components/Footer/Footer";


export function Login() {
  const [hidePass, setHidePass] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

    const navigate = useNavigate();

    function onSubmit(data) {
        const { email, senha } = data;
        loginEmailSenha(email, senha)
        .then((user) => {
            toast.success(`Entrando como ${user.email}`, {
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
        loginGoogle()
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

  function onLoginFacekook(){
    loginFacebook().then((user)=>{
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
  
  function onLoginGithub(){
    loginGithub().then((user)=>{
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
    <Container fluid className="my-5">
      <p className="text-center">
        <img src={loginImg} width="256" alt="Logo" />
      </p>
      <h4>Bem-vindo(a) de volta!</h4>
      <p className="text-muted">
        Não tem conta? <Link to="/cadastro">Cadastre-se</Link>
      </p>
      <hr />
      <Button className="m-3 " variant="danger" onClick={onLoginGoogle}>
        <img src={googleIcon} width="32" alt="Google icon" /> Entrar com o
        Google
      </Button>
      <Button className="m-3" variant="primary text-light" onClick={onLoginFacekook}>
        <img src={facebookIcon} width="32" alt="Facebook icon" /> Entrar com o
        Facebook
      </Button>
      <Button className="m-3" variant="dark text-light" onClick={onLoginGithub}>
        <img src={githubIcon} width="32" alt="Facebook icon" /> Entrar com o
        Github
      </Button>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Seu email"
            className={errors.email ? "is-invalid" : ""}
            {...register("email", { required: "Email é obrigatório" })}
          />
          <Form.Text className="invalid-feedback">
            {errors.email?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="senha">
          <Form.Label>Senha</Form.Label>
          <InputGroup>
            <Form.Control
              type={hidePass ? "password" : "text"}
              id="password"
              placeholder={`Sua senha `}
              className={errors.senha ? "is-invalid" : ""}
              {...register("senha", { required: "Senha é obrigatória" })}
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
        <p className="text-muted">
        <Link to="/login/recuperar">Esqueci minha senha</Link>
        </p>
        <Button type="submit" variant="success">
          Entrar
        </Button>
      </Form>
    </Container>
    <Footer />
    </>
  );
}
