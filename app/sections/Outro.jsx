import React from "react";
import GlowingButton from "../components/GlowingButton";
import SvgBackground from "../components/SvgBackground";

const Outro = () => {
  return (
    <section className="relative pt-48 bg-black">
      <div className="px-12 pt-20 pb-28 relative max-w-7xl mx-auto">
        <div className="gradient-blob"></div>
        <div className="gradient-blob2"></div>
        <div className="gradient-blob3"></div>
        <span className="absolute -top-px opacity-40 left-1/2 -translate-x-1/2 h-px w-1/2 bg-linear-to-r from-cyan-400/0 via-cyan-400/90 to-cyan-400/0"></span>
        <SvgBackground id="outro" width={50} height={50} />
        <h2 className="text-transparent bg-linear-to-br from-white to-zinc-500 bg-clip-text text-center mx-auto font-semibold text-3xl max-w-[30ch] tracking-tighter">
          Discover how financial automation can elevate your business.
        </h2>
        <p className="text-zinc-400 max-w-[60ch] mx-auto text-center mt-8 text-lg tracking-tight">
          A finance tool built to delight from the start — and built to last.
        </p>
        <div className="flex justify-center mt-8">
          <GlowingButton />
        </div>
      </div>
    </section>
  );
};

export default Outro;
