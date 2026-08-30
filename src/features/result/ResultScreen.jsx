import questionsArray from "../../data";
import bgDefeat from "../../assets/images/result-defeat.jpg";
import bgVictory from "../../assets/images/result-victory.jpg";

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
      className="h-full text-white bg-cover"
      style={{
        backgroundImage: ` url(${points > questionsArray.length / 2 ? bgVictory : bgDefeat})`,
      }}
    >
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
