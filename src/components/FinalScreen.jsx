export default function FinalScreen({ points }) {
  return (
    <div>
      <h1>
        You earned {points} {points < 2 ? "points" : "point"}
      </h1>
    </div>
  );
}
