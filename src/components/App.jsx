import Header from "./Header";

export default function App() {
  return (
    <div className="min-h-lvh flex ">
      <div className="min-h-full w-3xl bg-neutral-200 ">
        <Header />
        <main className="px-4 py-6 ">
          <h2 className="pb-4">Question:</h2>
          <form className="flex flex-col">
            <ul>
              <li className="flex items-center gap-2">
                <input type="radio" />
                <label htmlFor="">Answer 1</label>
              </li>
              <li className="flex items-center gap-2">
                <input type="radio" />
                <label htmlFor="">Answer 2</label>
              </li>
              <li className="flex items-center gap-2">
                <input type="radio" />
                <label htmlFor="">Answer 3</label>
              </li>
              <li className="flex items-center gap-2">
                <input type="radio" />
                <label htmlFor="">Answer 4</label>
              </li>
            </ul>
          </form>
        </main>
      </div>
    </div>
  );
}
