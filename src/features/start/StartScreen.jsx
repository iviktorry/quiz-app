import { useState } from "react";
import bgImg from "../../assets/images/start-bg-2.jpg";
import StartView from "./StartView";
import StartButton from "./components/StartButton";

export default function StartScreen({
  changeScreenWithFade,
  isVisible,
  setIsVisible,
  setPoints,
}) {
  const [readyState, setReadyState] = useState("ready");

  function changeStateWithFade(newState) {
    setIsVisible(false);
    setPoints(0);

    setTimeout(() => {
      setReadyState(newState);
      setIsVisible(true);
    }, 500);
  }

  const readyStates = {
    ready: (
      <StartView label="Welcome to the quiz!" text="Are you ready to start?">
        <StartButton
          text="Yes"
          shadow="text-shadow-lime-400"
          hover="hover:text-shadow-lime-400"
          onClick={() => changeStateWithFade("sure")}
        />
        <StartButton
          text="No"
          shadow="text-shadow-red-400"
          hover="hover:text-shadow-red-400"
          onClick={() => changeStateWithFade("notReady")}
        />
      </StartView>
    ),

    sure: (
      <StartView label="Are you sure???">
        <StartButton
          text="Yes"
          shadow="text-shadow-lime-400"
          hover="hover:text-shadow-lime-400"
          onClick={() => changeScreenWithFade("quiz")} // next step
        />
        <StartButton
          text="No"
          shadow="text-shadow-red-400"
          hover="hover:text-shadow-red-400"
          onClick={() => changeStateWithFade("ready")}
        />
      </StartView>
    ),

    notReady: (
      <StartView label="See you next time">
        <StartButton
          text="Get back"
          shadow="text-shadow-lime-400"
          hover="hover:text-shadow-lime-500"
          onClick={() => changeStateWithFade("ready")}
        />
      </StartView>
    ),
  };

  return (
    <div
      className="h-full w-full flex bg-bottom bg-cover items-end pb-6"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div
        className={`w-full transition-opacity duration-500 ease-in-out ${isVisible ? "opacity-100" : "opacity-0"}`}
      >
        {readyStates[readyState]}
      </div>
    </div>
  );
}
