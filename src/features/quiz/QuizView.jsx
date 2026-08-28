import questionsArray from "../../data";

export default function QuizView({
  handleForm,
  questionId,
  isAnswered,
  selectedAnswer,
  points,
}) {
  return (
    <div>
      <form onSubmit={handleForm} key={questionId}>
        <p>
          Question {questionId}/{questionsArray.length}
        </p>
        <p className="pb-4">Points: {points}</p>

        <h2 className="">{questionsArray[questionId - 1].question}</h2>

        <div className="flex flex-col gap-1">
          {questionsArray[questionId - 1].answers.map((item, index) => {
            let style = "";

            if (isAnswered) {
              if (item.correct) {
                style = "ring ring-green-400";
              } else if (index === selectedAnswer) {
                style = "ring ring-red-400";
              }
            }

            return (
              <label
                key={index}
                className={`flex gap-2 w-60 px-2 rounded-sm ${style} ${item.correct === true ? "after:text-red-800 after:content-['*']" : ""}`}
              >
                <input type="radio" name="answer" value={index} />
                {item.answer} ({index})
              </label>
            );
          })}
        </div>

        <button
          type="submit"
          className="ring ring-neutral-400 px-4 rounded-sm mt-4 hover:bg-neutral-100"
        >
          {isAnswered ? "next" : "submit"}
        </button>
      </form>
    </div>
  );
}
