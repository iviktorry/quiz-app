import data from "../data";
import Answer from "./Answer";
import Header from "./Header";
import Question from "./Question";

export default function App() {
  return (
    <div className="min-h-lvh flex ">
      <div className="min-h-full w-3xl bg-neutral-200 ">
        <Header />
        <main className="px-4 py-6 ">
          <Question />
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
        </main>
      </div>
    </div>
  );
}
