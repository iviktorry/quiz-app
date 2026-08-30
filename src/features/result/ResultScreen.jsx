import questionsArray from "../../data";
import bgDefeat from "../../assets/images/result-defeat.jpg";
import bgVictory from "../../assets/images/result-victory.jpg";
import ResultView from "./ResultView";

export default function ResultSCreen({ points, changeScreenWithFade }) {
  // let bg;
  // points < questionsArray.length / 2 ? (bg = bgVictory) : (bg = bgDefeat)
  let message;

  if (points > questionsArray.length / 2) {
    message = "Victory";
  } else if (points < questionsArray.length / 2) {
    message = "Defeat";
  }

  return (
    <div
      className="h-full text-white bg-cover flex justify-center items-end pb-6"
      style={{
        backgroundImage: ` url(${points > questionsArray.length / 2 ? bgVictory : bgDefeat})`,
      }}
    >
      <ResultView
        changeScreenWithFade={changeScreenWithFade}
        message={message}
        questionsArray={questionsArray}
        points={points}
      />
    </div>
  );
}
