import Answer from "./Answer";

export default function Question() {
  return (
    <>
      <h2 className="pb-4">Question:</h2>
      <form className="flex flex-col">
        <ul>
          <li className="flex items-center gap-2">
            <Answer />
          </li>
          <li className="flex items-center gap-2">
            <Answer />
          </li>
          <li className="flex items-center gap-2">
            <Answer />
          </li>
          <li className="flex items-center gap-2">
            <Answer />
          </li>
        </ul>
      </form>
    </>
  );
}
