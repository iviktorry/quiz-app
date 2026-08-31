import questionsArray from "../../data";
import bgDefeat from "../../assets/images/result-defeat.png";
import bgVictory from "../../assets/images/result-victory.jpg";
import ResultView from "./ResultView";

export default function ResultSCreen({
  points,
  changeScreenWithFade,
  hasLives,
}) {
  let message;
  let bg;
  let text;

  if (hasLives === 0) {
    message = "Defeat";
    bg = bgDefeat;
  } else if (hasLives !== 0) {
    message = "Victory";

    if (points / questionsArray.length > 0.1) {
      text = "0.01";
    }
    if (points / questionsArray.length > 0.24) {
      text = "0.33";
    }
    if (points / questionsArray.length > 0.49) {
      text = "0.5";
    }
    if (points / questionsArray.length > 0.74) {
      text = "0.75";
    }
    if (points / questionsArray.length === 1) {
      text = "1";
    }
  }

  return (
    <div
      className="h-full text-white bg-cover bg-bottom flex justify-center  items-end pb-6"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <ResultView
        changeScreenWithFade={changeScreenWithFade}
        message={message}
        questionsArray={questionsArray}
        points={points}
        text={text}
      />
    </div>
  );
}
