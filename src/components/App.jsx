import questionsArray from "../data";
import FinalScreen from "./FinalScreen";
import Header from "./Header";
import Main from "./Main";
import { useState } from "react";

export default function App() {
  const [questionId, setQuestionId] = useState(1);
  const [isAnswered, setIsAnswered] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [points, setPoints] = useState(0);

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
      }

      setIsAnswered(true);
    } else {
      setIsAnswered(false);
      setQuestionId((prev) => prev + 1);
    }
  }

  return (
    <div className="min-h-lvh flex ">
      <div className="min-h-full w-3xl bg-neutral-200 ">
        <Header />
        <main className="px-4 py-6 ">
          <Main
            handleForm={handleForm}
            questionId={questionId}
            isAnswered={isAnswered}
            selectedAnswer={selectedAnswer}
            points={points}
          />
          
          <FinalScreen points={points} />
        </main>
      </div>
    </div>
  );
}
