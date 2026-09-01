import { useState } from "react";
import { toggleMusic } from "../../utils/audio";
import { Volume2, VolumeX } from "lucide-react";

export default function SoundToggle() {
  const [isMuted, setIsMutes] = useState(false);

  function handleToggle() {
    const nextStage = !isMuted;
    setIsMutes(nextStage);
    toggleMusic(nextStage);
  }

  return (
    <button onClick={handleToggle} className="fixed top-4 right-4 z-50 p-2">
      {isMuted ? <VolumeX size={50} /> : <Volume2 size={50} />}
    </button>
  );
}
