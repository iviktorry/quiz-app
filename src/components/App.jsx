import Header from "./Header";

export default function App() {
  return (
    <div className="min-h-lvh flex ">
      <div className="min-h-full w-3xl bg-neutral-200">
        <Header />
        <main className="px-4 py-6 ">
          <h2>Question:</h2>
          <form className="flex flex-col">
            <ul>
              <li>
                <input type="radio" />
                <label htmlFor="">answer 1</label>
              </li>
              <li>
                <input type="radio" />
                <label htmlFor="">answer 2</label>
              </li>
              <li>
                <input type="radio" />
                <label htmlFor="">answer 3</label>
              </li>
              <li>
                <input type="radio" />
                <label htmlFor="">answer 4</label>
              </li>
            </ul>
          </form>
        </main>
      </div>
    </div>
  );
}
