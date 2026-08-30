import questionsArray from "../../data";

export default function QuizView({
  handleForm,
  questionId,
  isAnswered,
  selectedAnswer,
  points,
}) {
  return (
    <div className="flex px-4 py-20 items-end h-full text-neutral-300 text-shadow-lg text-shadow-neutral-700 lg:px-15">
      <form className="lg:w-1/2" onSubmit={handleForm} key={questionId}>
        <p>
          Question {questionId}/{questionsArray.length}
        </p>
        <p className="pb-4">Points: {points}</p>

        <h2 className="">{questionsArray[questionId - 1].question}</h2>

        <div className="grid max-w-fit gap-1 md:grid-cols-2">
          {questionsArray[questionId - 1].answers.map((item, index) => {
            let style;
            if (isAnswered) {
              if (item.correct) {
                style = "text-lime-500";
              } else if (index === Number(selectedAnswer)) {
                style = "text-red-500";
              }
            }

            const star = item.correct
              ? "after:text-red-800 after:content-['*']"
              : "";

            return (
              <label
                key={index}
                className={`flex items-center gap-2 px-2 rounded-sm transition-all hover:text-neutral-50 ${style} ${star}`}
              >
                <input type="radio" name="answer" value={index} />
                {item.answer}
              </label>
            );
          })}
        </div>

        <button
          type="submit"
          className="px-4 rounded-sm mt-4 text-shadow-lg text-shadow-neutral-600 hover:text-neutral-50"
        >
          {isAnswered ? "next" : "submit"}
        </button>
      </form>
    </div>
  );
}
