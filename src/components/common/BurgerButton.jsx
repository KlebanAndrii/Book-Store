const BurgerButton = ({ isOpen, onClick }) => {
  return (
    <button
      onClick={onClick}
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
      className="lg:hidden z-40 p-2"
    >
      <div className="w-7 h-5 flex flex-col justify-between">
        <span
          className={`h-1 bg-stone-900 rounded-full transition-all duration-300 ease-in-out ${
            isOpen ? "rotate-45 translate-y-2" : "w-full"
          }`}
        />
        <span
          className={`h-1 bg-stone-900 rounded-full transition-all duration-300 ease-in-out ${
            isOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"
          }`}
        />
        <span
          className={`h-1 bg-stone-900 rounded-full transition-all duration-300 ease-in-out ${
            isOpen ? "-rotate-45 -translate-y-2" : "w-full"
          }`}
        />
      </div>
    </button>
  );
};

export default BurgerButton;
