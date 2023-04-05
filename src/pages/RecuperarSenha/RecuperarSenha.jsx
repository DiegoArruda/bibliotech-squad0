import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Logo from "../../assets/icons/LogoBibliotech.svg";
import { toast } from "react-hot-toast";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase/config";
import { Link } from "react-router-dom";
import { Footer } from "../../components/Footer/Footer";

export function RecuperarSenha() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    const { email, confirmarEmail } = data;
    if (email === confirmarEmail) {
      sendPasswordResetEmail(auth, email)
        .then(() => {
          toast.success(`Email enviado para ${email}`, {
            position: "top-right",
            duration: 3500,
          });
        })
        .catch((error) => {
          toast.error(`Email não cadastrado. Tente novamente`, {
            position: "top-right",
            duration: 4000,
          });
        });
    } else {
      toast.error(`Os emails não correspondem`, {
        position: "top-right",
        duration: 3500,
      });
    }
  }
  return (
    <>
      <div className="recuperar-senha">
        <Container fluid className="mt-5 mb-0" >
          <Container className="card-login">
            <Row className="d-flex justify-content-center align-items-center">
              <Col className="d-flex justify-content-center align-items-center">
                <Card className="p-5">
                  <p className="text-center">
                    <img src={Logo} width="256" alt="Logo" />
                  </p>
                  <h4>Recuperar Senha</h4>
                  <hr />
                  <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group>
                      <Form.Label>Email:</Form.Label>
                      <Form.Control
                        className={errors.email ? "is-invalid" : ""}
                        type="email"
                        placeholder="Seu email"
                        {...register("email", {
                          required: "Campo Obrigatório",
                        })}
                      />
                      <Form.Text className="invalid-feedback">
                        {errors.email?.message}
                      </Form.Text>
                    </Form.Group>

                    <Form.Group>
                      <Form.Label>Confirme seu email:</Form.Label>
                      <Form.Control
                        className={errors.confirmarEmail ? "is-invalid" : ""}
                        type="email"
                        placeholder="Seu email"
                        {...register("confirmarEmail", {
                          required: "Campo Obrigatório",
                        })}
                      />
                      <Form.Text className="invalid-feedback">
                        {errors.confirmarEmail?.message}
                      </Form.Text>
                    </Form.Group>
                    <div>
                      <Button
                        className="mx-2 my-2"
                        type="submit"
                        variant="success"
                      >
                        Enviar
                      </Button>
                      <Button
                        className="mx-2 my-2"
                        as={Link}
                        to="/login"
                        variant="success"
                      >
                        Voltar
                      </Button>
                    </div>
                  </Form>
                </Card>
              </Col>
            </Row>
          </Container>
        </Container>
        <Footer />
      </div>
    </>
  );
}
