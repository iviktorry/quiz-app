export default function App() {
  return (
    <div className="min-h-lvh ">
      <div className="min-h-full bg-neutral-200 px-4 py-6">
        <h1>Quiz time!</h1>
        <h2>Question:</h2>
        <form className="flex flex-col">
          <label htmlFor="">answer 1</label>
          <input type="radio" />
          <label htmlFor="">answer 2</label>
          <input type="radio" />
          <label htmlFor="">answer 3</label>
          <input type="radio" />
          <label htmlFor="">answer 4</label>
          <input type="radio" />
        </form>
      </div>
    </div>
  );
}
