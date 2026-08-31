export default function ResultView({
  points,
  questionsArray,
  changeScreenWithFade,
  message,
  text,
}) {
  return (
    <div className="text-4xl text-neutral-300 text-shadow-lg text-shadow-neutral-900 lg:text-5xl">
      <div className="flex flex-col items-center">
        <p
          className={`uppercase text-5xl lg:text-7xl text-red-800`}
        >
          {message}
        </p>
        <h1>
          You earned {points === 0 ? "0" : points}
          {points === 1 ? " point" : " points"} out of {questionsArray.length}
        </h1>
        <p>{text}</p>
        <button
          onClick={() => changeScreenWithFade("start")}
          className="text-shadow-neutral-900 text-shadow-lg hover:text-neutral-50"
        >
          Go to the start
        </button>
      </div>
    </div>
  );
}
