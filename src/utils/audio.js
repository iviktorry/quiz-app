import mainThemeSound from "../assets/sounds/main-theme.mp3";
import victoryThemeSound from "../assets/sounds/victory-theme.mp3";
import defeatThemeSound from "../assets/sounds/defeat-theme.mp3";
import correctAudio from "../../assets/sounds/correct.mp3";
import wrongAudio from "../../assets/sounds/wrong.mp3";
import gameOverAudio from "../../assets/sounds/gameOver.mp3";

export const mainTheme = new Audio(mainThemeSound);
export const victoryTheme = new Audio(victoryThemeSound);
export const defeatTheme = new Audio(defeatThemeSound);
export const correctSound = new Audio(correctAudio);
export const wrongSound = new Audio(wrongAudio);
export const gameOverSound = new Audio(gameOverAudio);

const allTracks = [mainTheme, victoryTheme, defeatTheme];

allTracks.forEach((track) => {
  track.loop = true;
});

export function playMusic(track) {
  stopAllMusic();
  track.play().catch(() => {});
}

export function toggleMusic(isMuted) {
  allTracks.forEach((track) => {
    track.muted = isMuted;
  });
}

export function stopAllMusic() {
  allTracks.forEach((track) => {
    track.pause();
    track.currentTime = 0;
  });
}
