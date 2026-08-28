export default function StartView({ label, text, children }) {
  return (
    <div className="mx-auto w-xl text-center px-1 text-4xl text-neutral-950 text-shadow-lg text-shadow-neutral-200 lg:text-5xl ">
      <div className="mb-4 flex flex-col items-center">
        {label && <h1 className="text-5xl mb-6 lg:text-7xl">{label}</h1>}
        {text && <p>{text}</p>}
      </div>

      <div className="flex justify-around">{children}</div>
    </div>
  );
}
