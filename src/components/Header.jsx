import logoImg from "../assets/logo.svg";

export default function Header() {
  return (
    <header className="flex gap-2 justify-center py-2 w-full shadow-md">
      <img src={logoImg} alt="logo image" />
      <h1 className="">Quiz time!</h1>
    </header>
  );
}
