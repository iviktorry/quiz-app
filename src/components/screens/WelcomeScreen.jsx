import bgImg from "../../assets/images/welcome-bg.jpg";

export default function WelcomeScreen() {
  return (
    <div
      className="h-full w-full flex bg-top bg-cover items-end px-4 pb-6 text-white text-xl"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="mx-auto px-6 py-3  rounded-lg ring ring-neutral-400 bg-neutral-600/50">
        <h1 className="text-xl flex gap-1.5 items-center flex-wrap justify-center">
          Welcome to the{" "}
          <span className="font-['Blood_Crow_Condensed'] text-5xl text-center w-full sm:w-auto">
            Demon Slayer
          </span>
          quiz!
        </h1>
        <p className="flex justify-center mt-3">Are you ready to start?</p>
        <div className="flex justify-between">
          <button className="ring ring-neutral-400 px-4 mt-6 rounded-sm">
            Yes
          </button>
          <button className="ring ring-neutral-400 px-4 mt-6 rounded-sm">
            No
          </button>
        </div>
      </div>
    </div>
  );
}

