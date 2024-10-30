import { useState } from "react";

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      onClick={toggleMenu}
      className="flex flex-col justify-center items-center cursor-pointer"
    >
      <div
        className={`h-[1px] w-5 bg-zinc-400 transition-all duration-300 ease-in-out ${
          isOpen ? "rotate-45 translate-y-[7px]" : ""
        }`}
      ></div>
      <div
        className={`h-[1px] w-5 bg-zinc-400 transition-all duration-300 ease-in-out my-1.5 ${
          isOpen ? "opacity-0" : ""
        }`}
      ></div>
      <div
        className={`h-[1px] w-5 bg-zinc-400 transition-all duration-300 ease-in-out ${
          isOpen ? "-rotate-45 -translate-y-[7px]" : ""
        }`}
      ></div>
    </div>
  );
};

export default Hamburger;
