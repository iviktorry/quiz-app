import questionsArray from "../../data";
import heartFullColored from "../../assets/images/heart-full-colored.svg";
import heartHalfColored from "../../assets/images/heart-half-colored.svg";

export default function QuizView({
  handleForm,
  questionId,
  isAnswered,
  selectedAnswer,
  isVisible,
  hasLives,
}) {
  return (
    // lg:items-start lg:pt-[17%]
    <div className="flex PX-4 py-[20%] sm:py-[12%] lg:py-[8%] xl:py-[6%] items-end  h-full text-neutral-300 text-shadow-lg text-shadow-neutral-700 lg:pl-10">
      <form
        className="lg:w-5/7 flex flex-col gap-4 items-start"
        onSubmit={handleForm}
        key={questionId}
      >
        <p className="transition-all duration-400">
          Question {questionId}/{questionsArray.length}
        </p>

        <div className="flex gap-1.5 h-7 items-center pb-4">
          {[0, 1, 2].map((index) => {
            const isFull = index < Math.floor(hasLives);
            const isHalf = index === Math.floor(hasLives) && hasLives % 1 !== 0;
            const isAlive = index < hasLives;

            return (
              <img
                key={index}
                src={isHalf ? heartHalfColored : heartFullColored}
                alt="heart icon"
                className={`max-w-7 invert transition-all duration-500 ease-in-out ${
                  isAlive
                    ? "opacity-100 scale-100 translate-y-0"
                    : "opacity-0 scale-50 -translate-y-2 pointer-events-none"
                }`}
              />
            );
          })}
        </div>

        <div
          className={`flex flex-col gap-2 transition-all duration-500 ease ${isVisible ? "opacity-100" : "opacity-0"}`}
        >
          <h2 className="">{questionsArray[questionId - 1].question}</h2>

          <div
            className={`grid max-w-fit gap-x-6 gap-y-2 items-center lg:grid-cols-2 `}
          >
            {questionsArray[questionId - 1].answers.map((item, index) => {
              let style;
              if (isAnswered) {
                if (item.correct) {
                  style = "text-lime-500";
                } else if (index === Number(selectedAnswer)) {
                  style = "text-red-500";
                }
              }

              return (
                <label
                  key={index}
                  className={`flex items-center gap-2 rounded-sm transition-all duration-400 hover:text-neutral-50 ${style} `}
                >
                  <input type="radio" name="answer" value={index} />
                  {item.answer} {item.correct ? "*" : ""}
                </label>
              );
            })}
          </div>
        </div>

        <button
          type="submit"
          className={`rounded-sm text-shadow-lg text-shadow-neutral-600 hover:text-neutral-50`}
        >
          {isAnswered ? "next" : "submit"}
        </button>
      </form>
    </div>
  );
}
