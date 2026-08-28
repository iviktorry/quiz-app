export default function StartButton({ text, shadow, hover, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`py-1 w-auto rounded-lg text-shadow-lg transition-all duration-200 ease-out ${shadow} ${hover} lg:text-shadow-neutral-200 `}
    >
      {text}
    </button>
  );
}
