import React from "react";

const GlowingButton = () => {
  return (
    <button className="cursor-pointer group relative bg-black text-gray-400 text-sm py-1.5 px-4 rounded-full font-normal border border-gray-100/40 hover:shadow-[0_0_30px_1px_rgba(0,200,255,0.25)] hover:text-white transition-all duration-300">
      Join the waitlist
      <span className="absolute -bottom-px left-4 h-px w-[calc(100%-2rem)] bg-linear-to-r from-cyan-400/0 via-cyan-400/90 to-cyan-400/0 transition-opacity duration-300 group-hover:opacity-40"></span>
      <span className="absolute -top-px opacity-0 left-4 h-px w-[calc(100%-2rem)] bg-linear-to-r from-cyan-400/0 via-cyan-400/90 to-cyan-400/0 transition-opacity duration-300 group-hover:opacity-40"></span>
    </button>
  );
};

export default GlowingButton;
