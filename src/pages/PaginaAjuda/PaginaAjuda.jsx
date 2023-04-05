import { Accordion, Carousel, Container } from "react-bootstrap";
import AccordionBody from "react-bootstrap/esm/AccordionBody";
import AccordionHeader from "react-bootstrap/esm/AccordionHeader";
import AccordionItem from "react-bootstrap/esm/AccordionItem";
import "./PaginaAjuda.css";
import Ajuda1 from "./../../assets/images/paginaAjuda/Ajuda1.jpg";
import Ajuda2 from "./../../assets/images/paginaAjuda/Ajuda2.jpg";
import Ajuda3 from "./../../assets/images/paginaAjuda/Ajuda3.jpg";

export function PaginaAjuda() {
  return (
    <div className="ajuda">
      <Container>
        <h1 className="mt-2">Ajuda</h1>
        <hr />
        {/* ACCORDION PARA PERGUNTAS E RESPOSTAS */}
        <div className="accordion">
          <Accordion>
            <AccordionItem className="accordion-item-dark" eventKey="0">
              <AccordionHeader bsPrefix="accordion-header">
                {" "}
                Como cadastrar um novo livro?{" "}
              </AccordionHeader>
              <AccordionBody className="accordion-body">
                {/* CAROUSEL DO ITEM 1 */}
                <div className="carrossel">
                  <Carousel variant="dark">
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src={Ajuda1}
                        alt="Imagem1"
                      />
                    </Carousel.Item>

                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src={Ajuda2}
                        alt="Imagem2"
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src={Ajuda3}
                        alt="Imagem3"
                      />
                    </Carousel.Item>
                  </Carousel>
                </div>
              </AccordionBody>
            </AccordionItem>

            <AccordionItem eventKey="1">
              <AccordionHeader>
                {" "}
                Como editar um livro Cadastrado?{" "}
              </AccordionHeader>
              <AccordionBody>
                {/* CAROUSEL DO ITEM 2 */}
                <div className="carrossel">
                  <Carousel variant="dark">
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src={Ajuda1}
                        alt="Imagem1"
                      />
                      <Carousel.Caption variant="dark">
                        <h3>Passo 1</h3>
                        <p>Faça isso</p>
                      </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src={Ajuda2}
                        alt="Imagem2"
                      />
                    </Carousel.Item>

                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src={Ajuda3}
                        alt="Imagem3"
                      />
                    </Carousel.Item>
                  </Carousel>
                </div>
              </AccordionBody>
            </AccordionItem>

            <AccordionItem eventKey="2">
              <AccordionHeader> Como emprestar um livro? </AccordionHeader>
              <AccordionBody>
                {/* CAROUSEL DO ITEM 3 */}
                <div className="carrossel">
                  <Carousel variant="dark">
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src={Ajuda1}
                        alt="Imagem1"
                      />
                    </Carousel.Item>

                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src={Ajuda2}
                        alt="Imagem2"
                      />
                    </Carousel.Item>

                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src={Ajuda3}
                        alt="Imagem3"
                      />
                    </Carousel.Item>
                  </Carousel>
                </div>
              </AccordionBody>
            </AccordionItem>

            <AccordionItem eventKey="3">
              <AccordionHeader>
                {" "}
                Como mudar o status de um livro?{" "}
              </AccordionHeader>
              <AccordionBody>
                {/* CAROUSEL DO ITEM 3 */}
                <div className="carrossel">
                  <Carousel variant="dark">
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src={Ajuda1}
                        alt="Imagem1"
                      />
                    </Carousel.Item>

                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src={Ajuda2}
                        alt="Imagem2"
                      />
                    </Carousel.Item>

                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src={Ajuda3}
                        alt="Imagem3"
                      />
                    </Carousel.Item>
                  </Carousel>
                </div>
              </AccordionBody>
            </AccordionItem>
          </Accordion>
        </div>
      </Container>
    </div>
  );
}
