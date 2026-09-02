import { useState } from "react";
import bgImg from "../../assets/images/start-bg.jpg";
import StartView from "./StartView";
import StartButton from "./components/StartButton";
import { mainTheme, playMusic } from "../../utils/audio";

export default function StartScreen({
  changeScreenWithFade,
  setPoints,
  setHasLives,
}) {
  const [readyState, setReadyState] = useState("ready");
  const [isVisible, setIsVisible] = useState(true);


  function changeStateWithFade(newState) {
    playMusic(mainTheme);

    setIsVisible(false);
    setPoints(0);
    setHasLives(3);

    setTimeout(() => {
      setReadyState(newState);
      setIsVisible(true);
    }, 500);
  }

  const shadowGreen = "text-shadow-lime-400";
  const hoverGreen = "hover:text-shadow-lime-400";
  const shadowRed = "text-shadow-red-400";
  const hoverRed = "hover:text-shadow-red-400";

  const readyStates = {
    ready: (
      <StartView label="Welcome to the quiz!" text="Are you ready to start?">
        <StartButton
          text="Yes"
          shadow={shadowGreen}
          hover={hoverGreen}
          onClick={() => changeStateWithFade("sure")}
        />
        <StartButton
          text="No"
          shadow={shadowRed}
          hover={hoverRed}
          onClick={() => changeStateWithFade("notReady")}
        />
      </StartView>
    ),

    sure: (
      <StartView label="Are you sure???">
        <StartButton
          text="Yes"
          shadow={shadowGreen}
          hover={hoverGreen}
          onClick={() => changeScreenWithFade("quiz")} // next step
        />
        <StartButton
          text="No"
          shadow={shadowRed}
          hover={hoverRed}
          onClick={() => changeStateWithFade("ready")}
        />
      </StartView>
    ),

    notReady: (
      <StartView label="See you next time">
        <StartButton
          text="Get back"
          shadow={shadowGreen}
          hover={hoverGreen}
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
