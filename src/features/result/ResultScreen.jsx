import questionsArray from "../../data";

export default function ResultSCreen({ points }) {
  let message;

  if (points < questionsArray.length / 5) {
    message = "Better luck next time..";
  } else if (points < questionsArray.length / 3) {
    message = "Not bad!";
  } else if (points < questionsArray.length / 2) {
    message = "Great! You pretty know this theme ;)";
  } else if ((points = questionsArray.length / 2)) {
    message = "Exactly the half! Good job!";
  } else if (points < questionsArray.length / 1.5) {
    message = "Perfect! Thats a great job!";
  } else if (points < questionsArray.length / 1.3) {
    message = "Almost there!";
  } else if (points < questionsArray.length / 1.2) {
    message = "Wonderful!! Great result!";
  } else if ((points = questionsArray.length)) {
    message = "Excellent! Congratulations!!!";
  }

  return (
    <div className="bg-[] h-full">
      <h1>
        You earned {points} {points < 2 ? "points" : "point"} out of{" "}
        {questionsArray.length}!
      </h1>
      <p>{message}</p>
    </div>
  );
}
