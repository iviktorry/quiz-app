import StartScreen from "./start/StartScreen";
import QuizScreen from "./quiz/QuizScreen";
import ResultScreen from "./result/ResultScreen";
import { useState } from "react";

export default function App() {
  const [screen, setScreen] = useState("start");
  const [isVisibleScreen, setIsVisibleScreen] = useState(true);
  const [points, setPoints] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [hasLives, setHasLives] = useState(3);

  function changeScreenWithFade(newState) {
    setIsVisibleScreen(false);

    setTimeout(() => {
      setScreen(newState);
      setIsVisibleScreen(true);
    }, 500);
  }

  const screens = {
    start: (
      <StartScreen
        changeScreenWithFade={changeScreenWithFade}
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        setPoints={setPoints}
        setHasLives={setHasLives}
      />
    ),
    quiz: (
      <QuizScreen
        changeScreenWithFade={changeScreenWithFade}
        setPoints={setPoints}
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        hasLives={hasLives}
        setHasLives={setHasLives}
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
        className={`w-full transition-all duration-500 ease-in-out ${isVisibleScreen ? "opacity-100" : "opacity-0"}`}
      >
        {screens[screen]}
      </div>
    </div>
  );
}
