import StartScreen from "./start/StartScreen";
import QuizScreen from "./quiz/QuizScreen";
import ResultScreen from "./result/ResultScreen";
import { useState } from "react";

export default function App() {
  const [screen, setScreen] = useState("start");
  const [isVisible, setIsVisible] = useState(true);
  const [points, setPoints] = useState(0);

  function changeScreenWithFade(newState) {
    setIsVisible(false);

    setTimeout(() => {
      setScreen(newState);
      setIsVisible(true);
    }, 500);
  }

  const screens = {
    start: <StartScreen changeScreenWithFade={changeScreenWithFade} />,
    quiz: (
      <QuizScreen
        changeScreenWithFade={changeScreenWithFade}
        points={points}
        setPoints={setPoints}
      />
    ),
    result: (
      <ResultScreen
        changeScreenWithFade={changeScreenWithFade}
        points={points}
      />
    ),
  };

  return (
    <div className="h-dvh min-w-full flex overflow-hidden font-custom text-3xl bg-black">
      <div
        className={`w-full transition-all duration-500 ease-in-out ${isVisible ? "opacity-100" : "opacity-0"}`}
      >
        {screens[screen]}
      </div>
    </div>
  );
}
