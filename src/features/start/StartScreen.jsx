import { useState } from "react";
import bgImg from "../../assets/images/welcome-bg.jpg";
import StartView from "./StartView";
import StartButton from "./components/StartButton";

export default function StartScreen() {
  const [readyState, setReadyState] = useState("readyScreen");

  function handleButtonReady() {
    setReadyState("sureScreen");
  }

  function handleButtonNotReady() {
    setReadyState("notReadyScreen");
  }

  return (
    <div
      className="h-full w-full flex bg-top bg-cover items-end pb-6 font-custom"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      {readyState === "readyScreen" ? (
        <StartView label="Welcome to the quiz!" text="Are you ready to start?">
          <StartButton
            text="Yes"
            shadow="text-shadow-green-400"
            hover="hover:text-shadow-green-500"
            onClick={handleButtonReady}
          />
          <StartButton
            text="No"
            shadow="text-shadow-red-400"
            hover="hover:text-shadow-red-500"
            onClick={handleButtonNotReady}
          />
        </StartView>
      ) : null}
    </div>
  );
}
