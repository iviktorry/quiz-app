export default function Answer({ answer }) {
  return (
    <>
      <label className="flex gap-2">
        <input type="radio" />
        {answer}
      </label>
    </>
  );
}
