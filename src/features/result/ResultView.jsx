export default function ResultView({
  // points,
  // questionsArray,
  changeScreenWithFade,
  message,
  text,
}) {
  return (
    <div className="flex flex-col justify-between text-2xl text-center text-neutral-200 text-shadow-lg text-shadow-neutral-900 lg:text-4xl lg:max-w-2/3">
      <p className={`uppercase text-4xl lg:text-7xl text-red-800`}>{message}</p>
      <div className="flex flex-col items-center">
        {/* <h1>
          You earned {points === 0 ? "0" : points}
          {points === 1 ? " point" : " points"} out of {questionsArray.length}
        </h1> */}
        <p>{text}</p>
        <button
          onClick={() => changeScreenWithFade("start")}
          className="text-shadow-neutral-900 text-shadow-lg hover:text-neutral-50"
        >
          Start again
        </button>
      </div>
    </div>
  );
}
