import { useState } from "react";
import bgImg from "../../assets/images/welcome-bg.jpg";
import StartView from "./StartView";
import StartButton from "./components/StartButton";

export default function StartScreen() {
  const [readyState, setReadyState] = useState("ready");

  function handleButtonReady() {
    setReadyState("ready");
  }

  function handleButtonSure() {
    setReadyState("sure");
    console.log("im sure");
  }

  function handleButtonNotReady() {
    setReadyState("notReady");
  }

  const readyStates = {
    ready: (
      <StartView label="Welcome to the quiz!" text="Are you ready to start?">
        <StartButton
          text="Yes"
          shadow="text-shadow-green-400"
          hover="hover:text-shadow-green-500"
          onClick={handleButtonSure}
        />
        <StartButton
          text="No"
          shadow="text-shadow-red-400"
          hover="hover:text-shadow-red-500"
          onClick={handleButtonNotReady}
        />
      </StartView>
    ),

    sure: (
      <StartView label="Are you sure???">
        <StartButton
          text="Yes"
          shadow="text-shadow-green-400"
          hover="hover:text-shadow-green-500"
          onClick={handleButtonReady} // add next step
        />
        <StartButton
          text="No"
          shadow="text-shadow-red-400"
          hover="hover:text-shadow-red-500"
          onClick={handleButtonReady}
        />
      </StartView>
    ),

    notReady: (
      <StartView label="See you next time">
        <StartButton
          text="Try again"
          shadow="text-shadow-green-400"
          hover="hover:text-shadow-green-500"
          onClick={handleButtonReady}
        />
      </StartView>
    ),
  };

  return (
    <div
      className="h-full w-full flex bg-top bg-cover items-end pb-6 font-custom"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      {readyStates[readyState]}
    </div>
  );
}
