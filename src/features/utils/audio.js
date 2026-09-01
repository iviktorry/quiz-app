import mainThemeSound from "../assets/sounds/main-theme.mp3";
import victoryThemeSound from "../assets/sounds/victory-theme.mp3";
import defeatThemeSound from "../assets/sounds/defeat-theme.mp3";

export const mainTheme = new Audio(mainThemeSound);
export const victoryTheme = new Audio(victoryThemeSound);
export const defeatTheme = new Audio(defeatThemeSound);

mainTheme.loop = true;
victoryTheme.loop = true;
defeatTheme.loop = true;

export function stopAllMusic() {
  [mainTheme, victoryTheme, defeatTheme].forEach((track) => {
    track.pause();
    track.currentTime = 0;
  });
}
