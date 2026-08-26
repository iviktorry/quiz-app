import { useState } from "react";
import questionsArray from "../data";

export default function Main() {
  const [questionId, setQuestionId] = useState(1);

  function handleForm(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);
    if (data.answer === undefined) return;

    const selectedAnswer = Number(data.answer);
    console.log(
      `index: ${selectedAnswer} answer: ${questionsArray[questionId - 1].answers[selectedAnswer].answer}`,
    );

    if (
      questionsArray[questionId - 1].answers[selectedAnswer].correct == true
    ) {
      console.log("win!!!!!!");
    }

    setQuestionId((prev) => prev + 1);
  }

  return (
    <div>
      <form onSubmit={handleForm} key={questionId}>
        <p>question {questionId}</p>
        <h2>{questionsArray[questionId - 1].question}</h2>
        <div className="flex flex-col">
          {questionsArray[questionId - 1].answers.map((item, index) => (
            <label key={index}>
              <input type="radio" name="answer" value={index} />
              {item.answer} {index}
            </label>
          ))}
        </div>

        <button
          type="submit"
          className="ring ring-neutral-400 px-4 rounded-sm mt-4"
        >
          submit
        </button>
      </form>
    </div>
  );
}
