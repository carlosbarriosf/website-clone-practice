import React from "react";
import GlowingButton from "./GlowingButton";

const Header = () => {
  return (
    <nav className="flex justify-between items-center h-[70px] max-w-7xl mx-auto py-5 px-12">
      <a href="/" className="text-white font-semibold text-lg">
        cobaltito
      </a>
      <div className="flex gap-4 items-center font-semibold">
        <a
          href="/"
          className="text-gray-200 text-sm hover:text-white transition-all"
        >
          Blog
        </a>
        <GlowingButton />
      </div>
    </nav>
  );
};

export default Header;
