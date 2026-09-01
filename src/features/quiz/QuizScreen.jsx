import questionsArray from "../../data";
import QuizView from "./QuizView";
import { useState } from "react";
import bgImg from "../../assets/images/quiz-bg.jpg";
import correctAudio from "../../assets/sounds/correct.mp3";
import wrongAudio from "../../assets/sounds/wrong.mp3";

export default function QuizScreen({
  changeScreenWithFade,
  setPoints,
  isVisible,
  setIsVisible,
  hasLives,
  setHasLives,
}) {
  const [questionId, setQuestionId] = useState(1);
  const [isAnswered, setIsAnswered] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const correctSound = new Audio(correctAudio);
  const wrongSound = new Audio(wrongAudio);

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
        setHasLives((prev) => prev + 0.5);

        if (hasLives >= 3) {
          setHasLives(3);
        }
      } else {
        setHasLives((prev) => prev - 1);
      }

      setIsAnswered(true);
    } else {
      if (
        questionId >= questionsArray.length ||
        hasLives === 0 ||
        hasLives < 0
      ) {
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
          isVisible={isVisible}
          hasLives={hasLives}
          correctSound={correctSound}
          wrongSound={wrongSound}
        />
      </div>
    </main>
  );
}
