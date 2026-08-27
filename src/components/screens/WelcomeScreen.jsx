import bgImg from "../../assets/images/welcome-bg.jpg";
import WelcomeScreenReady from "./WelcomeScreenReady";

export default function WelcomeScreen() {
  return (
    <div
      className="h-full w-full flex bg-top bg-cover items-end pb-6 font-custom"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <WelcomeScreenReady />
    </div>
  );
}
