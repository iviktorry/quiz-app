import { useState } from "react";
import bgImg from "../../assets/images/welcome-bg.jpg";
import WelcomeScreenReady from "./WelcomeStructure";
import WelcomeButton from "./WelcomeButton";

export default function WelcomeScreen() {
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
        <WelcomeScreenReady
          label="Welcome to the quiz!"
          text="Are you ready to start?"
        >
          <WelcomeButton
            text="Yes"
            shadow="text-shadow-green-400"
            hover="hover:text-shadow-green-500"
            onClick={handleButtonReady}
          />
          <WelcomeButton
            text="No"
            shadow="text-shadow-red-400"
            hover="hover:text-shadow-red-500"
            onClick={handleButtonNotReady}
          />
        </WelcomeScreenReady>
      ) : null}
    </div>
  );
}
