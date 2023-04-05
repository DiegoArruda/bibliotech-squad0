import "./Quizz.css";
import { useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import loginImg from "../../assets/images/login.png";
import { Footer } from "../../components/Footer/Footer";

const questions = [
  {
    question: "Quem escreveu Dom Casmurro?",
    answerOptions: [
      { answerText: "A) Machado de Assis", isCorrect: true },
      { answerText: "B) Fernando Pessoa", isCorrect: false },
      { answerText: "C) Clarice Lispector", isCorrect: false },
      { answerText: "D) Guimarães Rosa", isCorrect: false },
    ],
  },
  {
    question: "Quem escreveu Macunaína?",
    answerOptions: [
      { answerText: "A) Aluísio Azevedo", isCorrect: false },
      { answerText: "B) Guimarães Rosa", isCorrect: false },
      { answerText: "C) Hilda Hilst", isCorrect: false },
      { answerText: "D) Mario de Andrade", isCorrect: true },
    ],
  },
  {
    question: "Quem escreveu Memórias Póstumas de Brás Cubas?",
    answerOptions: [
      { answerText: "A) Machado de Assis", isCorrect: true },
      { answerText: "B) Raul Pompeia", isCorrect: false },
      { answerText: "C) Paulo Leminski", isCorrect: false },
      { answerText: "D) Mario de Andrade", isCorrect: false },
    ],
  },
  {
    question: "Quem escreveu A Hora da Estrela?",
    answerOptions: [
      { answerText: "A) Guimarães Rosa", isCorrect: false },
      { answerText: "B) Clarice Lispector", isCorrect: true },
      { answerText: "C) Graciliano Ramos", isCorrect: false },
      { answerText: "D) Lygia Fagundes Telles", isCorrect: false },
    ],
  },
  {
    question: "Quem escreveu Grande Sertão: Veredas?",
    answerOptions: [
      { answerText: "A) Graciliano Ramos", isCorrect: false },
      { answerText: "B) Guimarães Rosa", isCorrect: true },
      { answerText: "C) José de Alencar", isCorrect: false },
      { answerText: "D) Lima Barreto", isCorrect: false },
    ],
  },
  {
    question: "Quem escreveu O Cortiço?",
    answerOptions: [
      { answerText: "A) Carlos Drummond de Andrade", isCorrect: false },
      { answerText: "B) Clarice Lispector", isCorrect: false },
      { answerText: "C) Paulo Coelho", isCorrect: false },
      { answerText: "D) Aluísio Azevedo", isCorrect: true },
    ],
  },
  {
    question: "Quem escreveu Vidas Secas?",
    answerOptions: [
      { answerText: "A) Graciliano Ramos", isCorrect: true },
      { answerText: "B) Lima Barreto", isCorrect: false },
      { answerText: "C) Machado de Assis", isCorrect: false },
      { answerText: "D) José de Alencar", isCorrect: false },
    ],
  },
  {
    question: "Quem escreveu Iracema?",
    answerOptions: [
      { answerText: "A) Clarice Lispector", isCorrect: false },
      { answerText: "B) Guimarães Rosa", isCorrect: false },
      { answerText: "C) Raul Pompeia", isCorrect: false },
      { answerText: "D) José de Alencar", isCorrect: true },
    ],
  },
  {
    question: "Quem escreveu O Ateneu?",
    answerOptions: [
      { answerText: "A) Lima Barreto", isCorrect: false },
      { answerText: "B) Aluísio Azevedo", isCorrect: false },
      { answerText: "C) Raul Pompeia", isCorrect: true },
      { answerText: "D) Machado de Assis", isCorrect: false },
    ],
  },
  {
    question: "Quem escreveu Triste Fim de Policarpo Quaresma?",
    answerOptions: [
      { answerText: "A) Mario de Andrade", isCorrect: false },
      { answerText: "B) Hilda Hilst", isCorrect: false },
      { answerText: "C) Carlos Drummond de Andrade", isCorrect: false },
      { answerText: "D) Lima Barreto", isCorrect: true },
    ],
  },
];

export function Quizz() {
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  function handleAnswer(isCorrect) {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  }

  function handleRestart() {
    setShowScore(false);
    setCurrentQuestion(0);
    setScore(0);
  }


  return (
    <>
      <Container className="container-quizz">

        <Card className="card" border="success">
          {showScore ? (
            <div className="score-section">
              <Card.Header className="card-header text-center">
                Quem escreveu...?
              </Card.Header>
              <p className="text-center mb-3" style={{ marginBottom: "5px" }}>
                <img src={loginImg} width="250" alt="Logo" />
              </p>
              <Card.Body>
                <Card.Title className="titulo">
                  Você pontuou {score} de {questions.length}!
                </Card.Title>
                <Button
                  variant="outline-success"
                  className="botao-tentar mt-5"
                  onClick={handleRestart}
                  as={Link}
                  to="/quizz"
                >
                  Tentar de novo
                </Button>
              </Card.Body>
            </div>
          ) : (
            <>
              <Card.Header className="card-header text-center">
                Quem escreveu...? {currentQuestion + 1}/{questions.length}
              </Card.Header>
              <p className="text-center">
                <img src={loginImg} width="250" alt="Logo" />
              </p>
              <div className="question-section">
                <div className="question-text">
                  <Card.Body className="card-body">
                    {" "}
                    {questions[currentQuestion].question}
                  </Card.Body>
                </div>
              </div>
              <div className="answer-section">
                {questions[currentQuestion].answerOptions.map(
                  (answerOption, index) => (
                    <div className="botao-resposta ">
                      <Button
                        variant="outline-success"
                        onClick={() => handleAnswer(answerOption.isCorrect)}
                        key={index}
                      >
                        {answerOption.answerText}
                      </Button>
                    </div>
                  )
                )}
              </div>
            </>
          )}
        </Card>
      </Container>
      <Footer></Footer>
    </>
  );
}
