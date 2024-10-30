"use client";
import Link from "next/link";
import { useState } from "react";
import TerminalIcon from "@mui/icons-material/Terminal";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import CloseIcon from "@mui/icons-material/Close";
import NavbarModal from "./NavbarModal";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const currentRoute = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 bg-zinc-950/30 backdrop-blur-sm">
      <div className="text-zinc-400 p-4 flex justify-between font-sans font-extralight text-[14px] items-center">
        <Link
          href="/"
          className="text-[18px] gap-2 flex items-center text-lime-400"
        >
          <TerminalIcon className="text-zinc-300" />
          <p className="font-mono font-normal">Dawid Zurawski</p>
        </Link>

        <div className="hidden sm:flex gap-5">
          <Link
            href="/about"
            className={`${
              currentRoute === "/about"
                ? "text-lime-400"
                : "text-zinc-400 hover:text-white duration-150 delay-50"
            } `}
          >
            About
          </Link>
          <Link
            href="/blog"
            className={`${
              currentRoute === "/blog"
                ? "text-lime-400"
                : "text-zinc-400 hover:text-white duration-150 delay-50"
            } `}
          >
            Blog
          </Link>
          <Link
            href="/projects"
            className={`${
              currentRoute === "/projects"
                ? "text-lime-400"
                : "text-zinc-400 hover:text-white duration-150 delay-50"
            } `}
          >
            Projects
          </Link>
        </div>

        <div className="block sm:hidden justify-end">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <CloseIcon /> : <DragHandleIcon />}
          </button>
        </div>
      </div>

      <hr className="border-zinc-700 border-1." />

      {isOpen && <NavbarModal onClose={() => setIsOpen(false)} />}
    </nav>
  );
};

export default Navbar;
