import StartScreen from "./start/StartScreen";
import QuizScreen from "./quiz/QuizScreen";
import ResultScreen from "./result/ResultScreen";
import SoundToggle from "./components/SoundToggle";
import { useState } from "react";
import {
  mainTheme,
  victoryTheme,
  defeatTheme,
  stopAllMusic,
  correctSound,
  wrongSound,
  gameOverSound,
} from "../utils/audio";

export default function App() {
  const [screen, setScreen] = useState("start");
  const [isVisibleScreen, setIsVisibleScreen] = useState(true);
  const [points, setPoints] = useState(0);
  const [hasLives, setHasLives] = useState(3);

  function changeScreenWithFade(newState) {
    setIsVisibleScreen(false);

    setTimeout(() => {
      setScreen(newState);

      stopAllMusic();

      if (newState === "start") {
        mainTheme.play().catch(() => {});
      } else if (newState === "result") {
        if (hasLives > 0) {
          victoryTheme.play().catch(() => {});
        } else {
          defeatTheme.play().catch(() => {});
        }
      }

      setIsVisibleScreen(true);
    }, 500);
  }

  function renderScreen() {
    switch (screen) {
      case "start": {
        return (
          <StartScreen
            changeScreenWithFade={changeScreenWithFade}
            setPoints={setPoints}
            setHasLives={setHasLives}
          />
        );
      }
      case "quiz": {
        return (
          <QuizScreen
            changeScreenWithFade={changeScreenWithFade}
            setPoints={setPoints}
            hasLives={hasLives}
            setHasLives={setHasLives}
            correctSound={correctSound}
            wrongSound={wrongSound}
            gameOverSound={gameOverSound}
          />
        );
      }
      case "result": {
        return (
          <ResultScreen
            changeScreenWithFade={changeScreenWithFade}
            points={points}
          />
        );
      }
      default:
        return null;
    }
  }

  return (
    <div className="h-lvh min-w-full flex overflow-hidden font-custom text-3xl bg-black">
      <SoundToggle screen={screen} />
      <div
        className={`w-full transition-all duration-500 ease-in-out ${isVisibleScreen ? "opacity-100" : "opacity-0"}`}
      >
        {renderScreen()}
      </div>
    </div>
  );
}
