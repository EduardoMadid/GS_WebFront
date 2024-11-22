import { useState } from 'react';

function Sobre() {
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [quizResult, setQuizResult] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);

  // Perguntas do quiz com opções de resposta
  const questions = [
    {
      question: 'Qual é uma das principais fontes de energia limpa?',
      options: ['Energia solar', 'Energia nuclear', 'Energia fóssil', 'Energia geotérmica'],
      correctAnswer: 'Energia solar',
    },
    {
      question: 'Qual é a vantagem de usar energia renovável?',
      options: ['Aumenta a poluição', 'Reduz a emissão de gases poluentes', 'Acaba com os recursos naturais', 'Aumenta o custo da energia'],
      correctAnswer: 'Reduz a emissão de gases poluentes',
    },
    {
      question: 'O que é considerado uma forma de energia renovável?',
      options: ['Energia eólica', 'Energia nuclear', 'Energia fóssil', 'Energia hidráulica'],
      correctAnswer: 'Energia eólica',
    },
  ];

  // Função para processar a resposta do quiz e avançar para a próxima pergunta
  const handleNextQuestion = () => {
    if (selectedAnswer) {
      if (selectedAnswer === questions[currentQuestion].correctAnswer) {
        setCorrectAnswers(correctAnswers + 1);
      } else {
        setIncorrectAnswers(incorrectAnswers + 1);
      }

      // Avançar para a próxima pergunta ou finalizar o quiz
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer('');
        setQuizResult(null);
      } else {
        setQuizResult(`Você acertou ${correctAnswers + 1} perguntas e errou ${incorrectAnswers}.`);
      }
    } else {
      setQuizResult('Por favor, selecione uma resposta antes de continuar.');
    }
  };

  return (
    <div className="p-6 bg-green-100 text-center">
      <h2 className="text-3xl font-bold mb-4">Sobre o Projeto</h2>
      <p className="mb-4">
        O uso de energias limpas é uma das principais soluções para garantir um futuro mais sustentável. 
        Com o crescente impacto das mudanças climáticas, as energias renováveis, como a solar, eólica e hidrelétrica, têm se mostrado essenciais para a redução da emissão de gases poluentes e a preservação dos recursos naturais do planeta.
      </p>
      <p className="mb-6">
        As energias renováveis não apenas protegem o meio ambiente, mas também têm o potencial de transformar as economias, criando empregos e aumentando a independência energética dos países.
        Ao escolher essas fontes de energia, estamos contribuindo para a criação de um futuro mais limpo e saudável para as próximas gerações.
      </p>

      {/* Quiz sobre energias limpas */}
      <div className="bg-white p-4 rounded shadow-md">
        <h3 className="text-xl font-semibold mb-2">{questions[currentQuestion].question}</h3>
        <div className="mb-4">
          {questions[currentQuestion].options.map((option, index) => (
            <div key={index} className="mb-2">
              <input
                type="radio"
                id={`option${index}`}
                name="answer"
                value={option}
                checked={selectedAnswer === option}
                onChange={(e) => setSelectedAnswer(e.target.value)}
                className="mr-2"
              />
              <label htmlFor={`option${index}`} className="text-lg">{option}</label>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <button
            onClick={handleNextQuestion}
            className="bg-green-500 text-white p-2 rounded"
          >
            {currentQuestion < questions.length - 1 ? 'Próxima Pergunta' : 'Finalizar Quiz'}
          </button>
        </div>
        {quizResult && <p className="mt-4 text-lg">{quizResult}</p>}
      </div>
    </div>
  );
}

export default Sobre;
