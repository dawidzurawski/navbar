"use client";
import Link from "next/link";
import { useState } from "react";
import TerminalIcon from "@mui/icons-material/Terminal";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import CloseIcon from "@mui/icons-material/Close";
import NavbarModal from "./NavbarModal";
import { usePathname } from "next/navigation";
import Hamburger from "./Hamburger";

const Navbar = () => {
  const currentRoute = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 bg-zinc-950/30 backdrop-blur-sm">
      <div className="text-zinc-400 md:max-lg:px-4 py-4 px-10 flex justify-between font-sans font-extralight text-[14px] items-center">
        <Link
          href="/"
          className="text-[18px] gap-2 flex items-center text-lime-400"
        >
          <TerminalIcon className="text-zinc-300" />
          <p className="font-mono font-normal">Dawid Zurawski</p>
        </Link>

        <nav className="hidden sm:flex gap-5">
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
        </nav>

        <div
          className="block sm:hidden justify-end"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Hamburger />
        </div>
      </div>

      <hr className="border-zinc-700 border-1." />

      {isOpen && <NavbarModal onClose={() => setIsOpen(false)} />}
    </header>
  );
};

export default Navbar;
