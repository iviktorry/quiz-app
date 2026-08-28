import { useState } from "react";
import bgImg from "../../assets/images/welcome-bg.jpg";
import StartView from "./StartView";
import StartButton from "./components/StartButton";

export default function StartScreen({ changeScreenWithFade }) {
  const [readyState, setReadyState] = useState("ready");
  const [isVisible, setIsVisible] = useState(true);

  function changeStateWithFade(newState) {
    setIsVisible(false);

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
          shadow="text-shadow-green-400"
          hover="hover:text-shadow-green-500"
          onClick={() => changeStateWithFade("sure")}
        />
        <StartButton
          text="No"
          shadow="text-shadow-red-400"
          hover="hover:text-shadow-red-500"
          onClick={() => changeStateWithFade("notReady")}
        />
      </StartView>
    ),

    sure: (
      <StartView label="Are you sure???">
        <StartButton
          text="Yes"
          shadow="text-shadow-green-400"
          hover="hover:text-shadow-green-500"
          onClick={() => changeScreenWithFade("quiz")} // next step
        />
        <StartButton
          text="No"
          shadow="text-shadow-red-400"
          hover="hover:text-shadow-red-500"
          onClick={() => changeStateWithFade("ready")}
        />
      </StartView>
    ),

    notReady: (
      <StartView label="See you next time">
        <StartButton
          text="Get back"
          shadow="text-shadow-green-400"
          hover="hover:text-shadow-green-500"
          onClick={() => changeStateWithFade("ready")}
        />
      </StartView>
    ),
  };

  return (
    <div
      className="h-full w-full flex bg-top bg-cover items-end pb-6"
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
