import { useState } from "react";
import WelcomeScreen from "./start/WelcomeScreen";
import Quiz from "./quiz/Quiz";
import ResultsScreen from "./results/ResultsScreen";

export default function App() {
  const [screen, setScreen] = useState("start");

  const screens = [
    { start: <WelcomeScreen /> },
    { quiz: <Quiz /> },
    { results: <ResultsScreen /> },
  ];

  return (
    <div className="h-dvh min-w-full flex overflow-hidden">
      {screens[screen]}
    </div>
  );
}
