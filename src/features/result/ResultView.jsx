export default function ResultView({
  points,
  questionsArray,
  changeScreenWithFade,
  message,
  text,
}) {
  return (
    <div className="flex flex-col justify-between px-2 py-4 text-3xl text-center text-neutral-200 text-shadow-lg text-shadow-neutral-900 lg:text-4xl lg:max-w-2/3">
      <p className={`uppercase text-5xl lg:text-7xl text-red-800`}>{message}</p>

      <div className="flex flex-col items-center">
        <h1>
          You did {points}/{questionsArray.length}
        </h1>
        <q className="italic">{text}</q>
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
