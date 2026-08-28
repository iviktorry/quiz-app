import StartScreen from "./start/StartScreen";
import QuizScreen from "./quiz/QuizScreen";
import ResultScreen from "./result/ResultScreen";
import { useState } from "react";

export default function App() {
  const [screen, setScreen] = useState("start");

  const screens = {
    start: <StartScreen setScreen={setScreen} />,
    quiz: <QuizScreen />,
    result: <ResultScreen />,
  };

  return (
    <div className="h-dvh min-w-full flex overflow-hidden">
      {screens[screen]}
    </div>
  );
}
