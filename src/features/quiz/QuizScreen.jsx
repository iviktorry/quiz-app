import questionsArray from "../../data";
import QuizView from "./QuizView";
import { useState } from "react";
import bgImg from "../../assets/images/quiz-bg.jpg";

export default function QuizScreen({
  changeScreenWithFade,
  points,
  setPoints,
  isVisible,
  setIsVisible,
}) {
  const [questionId, setQuestionId] = useState(1);
  const [isAnswered, setIsAnswered] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  function changeStateWithFade() {
    setIsVisible(false);

    setTimeout(() => {
      setIsVisible(true);
      setQuestionId((prev) => prev + 1);
    }, 500);
  }

  function handleForm(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);
    if (data.answer === undefined) return;

    if (!isAnswered) {
      const selectedEl = Number(data.answer);
      setSelectedAnswer(selectedEl);

      console.log(
        `answer: ${questionsArray[questionId - 1].answers[selectedEl].answer}`,
      );

      if (questionsArray[questionId - 1].answers[selectedEl].correct == true) {
        console.log("correct");
        setPoints((prev) => prev + 1);
        console.log(points);
      }

      setIsAnswered(true);
    } else {
      if (questionId >= questionsArray.length) {
        changeScreenWithFade("result");
      } else {
        changeStateWithFade();
        setIsAnswered(false);
      }
    }
  }

  return (
    <main
      className="h-full bg-cover bg-bottom"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div
        className={`h-full transition-all duration-500 ease-in-out ${isVisible ? "opacity-100" : "opacity-0"}`}
      >
        <QuizView
          handleForm={handleForm}
          questionId={questionId}
          isAnswered={isAnswered}
          selectedAnswer={selectedAnswer}
          points={points}
        />
      </div>
    </main>
  );
}
