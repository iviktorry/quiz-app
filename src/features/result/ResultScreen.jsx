import questionsArray from "../../data";
import ResultView from "./ResultView";
import bgVictory100 from "../../assets/images/result-victory-100.avif";
import bgVictory90 from "../../assets/images/result-victory-90.webp";
import bgVictory90Mob from "../../assets/images/result-victory-90-mob.webp";
import bgVictory70 from "../../assets/images/result-victory-70.webp";
import bgVictory50 from "../../assets/images/result-victory-50.webp";
import bgDefeat30 from "../../assets/images/result-defeat-30.webp";
import bgDefeat0 from "../../assets/images/result-defeat-0.webp";

export default function ResultScreen({ points, changeScreenWithFade }) {
  let message;
  let bg;
  let bgMob;
  let text;
  const percent = points / questionsArray.length;

  if (percent === 1) {
    message = "Victory";
    bg = bgVictory100;
    text =
      "Muichiro Tokito unlocked his Slayer Mark and humiliated Upper Rank Five in a one-on-one duel. The Mist Hashira sliced Gyokko's head off so fast the demon didn't even realize he was dead, taking zero damage.";
  } else if (percent >= 0.9) {
    message = "Victory";
    bg = bgVictory90;
    bgMob = bgVictory90Mob;
    text =
      "Tanjiro, Zenitsu, and Inosuke executed a perfect synchronized strike against Upper Moon Six. Breaking through poison and fatal wounds, they severed both Gyutaro's and Daki's heads at the exact same second.";
  } else if (percent >= 0.7) {
    message = "Victory";
    bg = bgVictory70;
    text =
      "Tanjiro Kamado pushed his body past all human limits at the Swordsmith Village. Unlocking his Slayer Mark at dawn, he sliced off Hantengu's head just as the morning sun began to rise.";
  } else if (percent >= 0.5) {
    message = "Victory";
    bg = bgVictory50;
    text =
      "Tengen Uzui defeated Upper Rank Six in the Entertainment District, but at a devastating price. Poisoned and battered, he lost his left eye and hand, ending his career as an active Hashira.";
  } else if (percent >= 0.3) {
    message = "Defeat";
    bg = bgDefeat30;
    text =
      "Kyojuro Rengoku protected all two hundred passengers on the Mugen Train, but paid with his life. He stood his ground against Akaza until sunrise, dying of his wounds as the demon fled into the forest.";
  } else {
    message = "Defeat";
    bg = bgDefeat0;
    text =
      "Muzan Kibutsuji slaughtered the Kamado family in cold blood before anyone could even reach for a blade. Zero chance to fight back, zero survivors left in the snow. Total annihilation.";
  }

  return (
    <div
      className="h-full text-white bg-cover bg-bottom flex justify-center bg-(image:--bg-mobile) sm:bg-(image:--bg-desktop)"
      style={{
        "--bg-mobile": `url(${bgMob || bg})`,
        "--bg-desktop": `url(${bg})`,
      }}
    >
      <ResultView
        changeScreenWithFade={changeScreenWithFade}
        message={message}
        questionsArray={questionsArray}
        points={points}
        text={text}
      />
    </div>
  );
}
