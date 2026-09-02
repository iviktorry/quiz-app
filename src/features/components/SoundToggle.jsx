import { useState } from "react";
import { toggleMusic } from "../../utils/audio";
import { Volume2, VolumeX } from "lucide-react";

export default function SoundToggle({ screen }) {
  const [isMuted, setIsMutes] = useState(false);

  function handleToggle() {
    const nextStage = !isMuted;
    setIsMutes(nextStage);
    toggleMusic(nextStage);
  }

  const styles = `${screen === "start" ? "text-black drop-shadow-[0_2px_4px_rgba(229,229,229,0.9)] hover:drop-shadow-[0_2px_4px_rgba(245,245,245,0.6)]" : "text-neutral-300 drop-shadow-[0_2px_4px_rgba(64,64,64,0.9)] hover:text-neutral-100"}`;

  return (
    <button
      onClick={handleToggle}
      className={`fixed top-4 right-4 z-50 p-2`}
      aria-label={`${isMuted ? "Unmute" : "Mute"}`}
    >
      {isMuted ? (
        <VolumeX size={30} className={`${styles}`} />
      ) : (
        <Volume2 size={30} className={`${styles}`} />
      )}
    </button>
  );
}
