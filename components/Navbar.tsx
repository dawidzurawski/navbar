import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-emerald-950 text-emerald-400  p-4 flex gap-4">
      <Link href="/about" className="hover:text-emerald-200">
        About
      </Link>
      <Link href="/blog" className="hover:text-emerald-200">
        Blog
      </Link>
      <Link href="/projects" className="hover:text-emerald-200">
        Projects
      </Link>
    </nav>
  );
};

export default Navbar;
