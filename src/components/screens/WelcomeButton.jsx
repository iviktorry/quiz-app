export default function WelcomeButton({ text, shadow, hover }) {
  return (
    <button
      className={`py-1 w-20 rounded-lg text-shadow-lg transition-all duration-200 ease-out ${shadow} ${hover} lg:text-shadow-neutral-200 `}
    >
      {text}
    </button>
  );
}
