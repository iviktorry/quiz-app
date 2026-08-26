import { useState } from "react";
import questionsArray from "../data";

export default function Main() {
  const [questionId, setQuestionId] = useState(1);
  const [isAnswered, setIsAnswered] = useState(false);
  const [buttonText, setButtonText] = useState("submit");

  function handleForm(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);
    if (data.answer === undefined) return;

    if (!isAnswered) {
      const selectedAnswer = Number(data.answer);

      console.log(
        `index: ${selectedAnswer} answer: ${questionsArray[questionId - 1].answers[selectedAnswer].answer}`,
      );

      if (
        questionsArray[questionId - 1].answers[selectedAnswer].correct == true
      ) {
        console.log("win!!!!!!");
      }

      setIsAnswered(true);
      setButtonText("next");
    } else {
      setIsAnswered(false);
      setButtonText("submit");
      setQuestionId((prev) => prev + 1);
    }
  }

  return (
    <div>
      <form onSubmit={handleForm} key={questionId}>
        <p className="pb-4">Question {questionId}</p>
        <h2 className="">{questionsArray[questionId - 1].question}</h2>
        <div className="flex flex-col">
          {questionsArray[questionId - 1].answers.map((item, index) => (
            <label key={index} className="flex gap-2">
              <input type="radio" name="answer" value={index} />
              {item.answer} {index}
            </label>
          ))}
        </div>

        <button
          type="submit"
          className="ring ring-neutral-400 px-4 rounded-sm mt-4 hover:bg-neutral-100"
        >
          {buttonText}
        </button>
      </form>
    </div>
  );
}
