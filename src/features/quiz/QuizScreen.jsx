import questionsArray from "../../data";
import QuizView from "./QuizView";
import { useState } from "react";
import bgImg from "../../assets/images/quiz-bg.jpg";

export default function QuizScreen({
  changeScreenWithFade,
  setPoints,
  isVisible,
  setIsVisible,
  hasLives,
  setHasLives,
  correctSound,
  wrongSound,
  gameOverSound,
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
        setHasLives((prev) => Math.min(prev + 0.5, 3));
        correctSound.play();
      } else {
        const newLives = hasLives - 1;
        setHasLives(newLives);

        if (newLives <= 0) {
          gameOverSound.play();
        } else {
          wrongSound.play();
        }
      }

      setIsAnswered(true);
    } else {
      if (questionId >= questionsArray.length || hasLives <= 0) {
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
      <QuizView
        handleForm={handleForm}
        questionId={questionId}
        isAnswered={isAnswered}
        selectedAnswer={selectedAnswer}
        isVisible={isVisible}
        hasLives={hasLives}
      />
    </main>
  );
}
