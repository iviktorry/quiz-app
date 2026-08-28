export default function StartView({ label, text, children }) {
  return (
    <div className="mx-auto w-auto text-center px-1 text-4xl text-neutral-950 text-shadow-lg text-shadow-neutral-200 sm:w-auto lg:text-4xl">
      <div className="mb-2 flex flex-col items-center">
        {label && <h1 className="text-5xl mb-4 lg:text-6xl">{label}</h1>}
        {text && <p>{text}</p>}
      </div>

      <div className="flex justify-around">{children}</div>
    </div>
  );
}
