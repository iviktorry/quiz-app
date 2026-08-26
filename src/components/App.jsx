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
          {data.map((item) => (
            <div key={item.id}>
              <Question text={item.question} />
              <form className="">
                <ul className="">
                  {item.answers.map((item, index) => (
                    <li key={index}>
                      <Answer answer={item.answer} correct={item.correct} />
                    </li>
                  ))}
                </ul>
              </form>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
}
