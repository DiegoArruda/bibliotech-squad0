import { Button, Container } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { ListGroup } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import { Card } from "react-bootstrap";

export function Politicas() {
  return (
    <Container>
      <h1>Politica de Privacidade</h1>
      <Tabs
        defaultActiveKey="info"
        transition={false}
        id="noanim-tab-example"
        className="mb-3"
      >
        <Tab eventKey="info" title="Informações que coletamos">
          <ListGroup>
            <ListGroup.Item>
              <strong>Informações pessoais:</strong> Coletamos informações
              pessoais como nome, endereço de e-mail e telefone quando você cria
              uma conta conosco.
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Informações de uso:</strong> Coletamos informações sobre
              como você usa nossos serviços, incluindo dados de uso, desempenho
              e diagnóstico.
            </ListGroup.Item>
          </ListGroup>
        </Tab>
        <Tab eventKey="profile" title="Profile">
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Accordion Item #1</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Accordion Item #2</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Tab>
        <Tab eventKey="use" title="Como usamos suas informações">
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Para fornecer nossos serviços</Card.Title>

              <Card.Text>
                Nós usamos suas informações para fornecer nossos serviços, como
                processar pagamentos e fornecer suporte ao cliente.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Para melhorar nossos serviços</Card.Title>

              <Card.Text>
                Nós usamos suas informações para melhorar nossos serviços,
                incluindo análise de dados e personalização.
              </Card.Text>
            </Card.Body>
          </Card>
        </Tab>
      </Tabs>
    </Container>
  );
}
