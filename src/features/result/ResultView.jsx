export default function ResultView({
  points,
  questionsArray,
  changeScreenWithFade,
  message,
}) {
  return (
    <div className="flex flex-col items-center">
      <h1>
        You earned {points === 0 ? "0" : points}
        {points === 1 ? " point" : " points"} out of {questionsArray.length}!
      </h1>
      <p>{message}</p>
      <button onClick={() => changeScreenWithFade("start")} className="">
        Go to the start
      </button>
    </div>
  );
}
