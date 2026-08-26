export default function WelcomeScreen() {
  return (
    <div className="m-auto px-6 py-3 rounded-lg ring ring-neutral-400">
      <h1 className="text-xl">
        Welcome to the <span className="italic">Demon Slayer</span> quiz!
      </h1>
      <p>Are you ready to start?</p>
      <div className="flex justify-between">
        <button className="ring ring-neutral-400 px-4 mt-3 rounded-sm">
          Yes
        </button>
        <button className="ring ring-neutral-400 px-4 mt-3 rounded-sm">
          No
        </button>
      </div>
    </div>
  );
}
