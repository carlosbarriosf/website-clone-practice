import React from "react";
import GlowingButton from "../components/GlowingButton";
import { IoArrowDown } from "react-icons/io5";

const Hero = () => {
  return (
    <section className="relative pt-20 z-10">
      <h1 className="text-transparent bg-linear-to-br from-white to-zinc-500 bg-clip-text text-center mx-auto font-semibold text-7xl max-w-[20ch] tracking-tighter">
        Unlock a smarter way to handle your finances
      </h1>
      <p className="text-zinc-400 max-w-[60ch] mx-auto text-center mt-8 text-xl tracking-tight">
        Outgrow clunky spreadsheets and outdated dashboards. With Cobaltito,
        anyone can run their business finances confidently — clear, fast, and
        beautifully simple.
      </p>
      <div className="flex flex-col items-center justify-center my-12 gap-8">
        <GlowingButton />
        <a
          href="#featured"
          className="text-gray-400 text-sm hover:text-white transition-all duration-500 flex flex-col justify-center items-center gap-2 group"
        >
          <span>Learn more</span>
          <IoArrowDown
            size={18}
            className="group-hover:translate-y-2 transition-all duration-500"
          />
        </a>
      </div>
      <div className="max-w-7xl mx-auto px-12">
        <img
          src="/coolmockup.png"
          alt=""
          className="rounded-lg border border-gray-400/30"
        />
      </div>
    </section>
  );
};

export default Hero;
