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

  function handleForm(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);
    if (data.answer === undefined) return;

    if (!isAnswered) {
      const selectedEl = Number(data.answer);
      setSelectedAnswer(selectedEl);

      if (questionsArray[questionId - 1].answers[selectedEl].correct == true) {
        setPoints((prev) => prev + 1);
      }

      setIsAnswered(true);
    } else {
      if (questionId >= questionsArray.length) {
        changeScreenWithFade("result");
      } else {
        setIsVisible(false);

        setTimeout(() => {
          setQuestionId((prev) => prev + 1);
          setIsAnswered(false);
          setSelectedAnswer(null);

          setTimeout(() => {
            setIsVisible(true);
          }, 50);
        }, 500);
      }
    }
  }

  return (
    <main
      className="h-full bg-cover bg-bottom"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className={`h-full `}>
        <QuizView
          handleForm={handleForm}
          questionId={questionId}
          isAnswered={isAnswered}
          selectedAnswer={selectedAnswer}
          points={points}
          isVisible={isVisible}
        />
      </div>
    </main>
  );
}
