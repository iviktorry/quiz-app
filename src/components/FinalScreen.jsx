export default function FinalScreen({ points }) {
  let message;

  if (points < 4) {
    message = "Better luck next time..";
  } else if (points < 7) {
    message = "Not bad!";
  } else {
    message = "Great!";
  }

  return (
    <div>
      <h1>
        You earned {points} {points < 2 ? "points" : "point"}
      </h1>
      <p>{message}</p>
    </div>
  );
}
