import Link from "next/link";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

const NavbarModal = ({ onClose }) => {
  const currentRoute = usePathname();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return (): void => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div className="pt-10 block sm:hidden flex flex-col gap-4 p-4 z-10 absolute bg-zinc-950 w-full h-lvh font-sans font-extralight text-[14px] text-zinc-300">
      <Link
        href="/"
        className={`${
          currentRoute === "/"
            ? "text-lime-400"
            : "text-zinc-400 hover:text-white duration-150 delay-50"
        } `}
        onClick={onClose}
      >
        Home
      </Link>
      <Link
        href="/about"
        className={`${
          currentRoute === "/about"
            ? "text-lime-400"
            : "text-zinc-400 hover:text-white duration-150 delay-50"
        } `}
        onClick={onClose}
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
        onClick={onClose}
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
        onClick={onClose}
      >
        Projects
      </Link>
    </div>
  );
};

export default NavbarModal;
