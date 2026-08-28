import { useState } from "react";
import WelcomeScreen from "./start/WelcomeScreen";
import Quiz from "./quiz/Quiz";
import ResultsScreen from "./result/ResultsScreen";

export default function App() {
  const [screen, setScreen] = useState("start");

  const screens = {
    start: <WelcomeScreen setScreen={setScreen} />,
    quiz: <Quiz />,
    result: <ResultsScreen />,
  };

  return (
    <div className="h-dvh min-w-full flex overflow-hidden">
      {screens[screen]}
    </div>
  );
}
