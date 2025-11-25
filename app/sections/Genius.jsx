import React from "react";
import SvgBackground from "../components/SvgBackground";
import { LuTriangleAlert } from "react-icons/lu";
import SvgDiagonalBg from "../components/SvgDiagonalBg";
import Typewriter from "../components/Typewriter";

const Genius = () => {
  return (
    <section className="pt-48 bg-black" id="genius">
      <div className="grid grid-cols-2 gap-y-32 text-white max-w-7xl mx-auto px-12 mb-12">
        <div>
          <div>
            <h2 className="text-5xl font-semibold tracking-tighter text-transparent bg-linear-to-br from-white to-zinc-400 bg-clip-text pb-2 mb-2">
              Meet Genius
            </h2>
          </div>
          <div>
            <p className="text-zinc-500 text-lg tracking-wide">
              Our AI-powered assistant helps you{" "}
              <span className="text-gray-300 font-semibold">
                interpret financial information and highlights patterns
              </span>{" "}
              that may be useful for understanding your business.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-12 max-w-7xl mx-auto px-12">
        <div className="h-[480px]  rounded-2xl border border-gray-400/30 bg-zinc-800/50 grid grid-rows-4">
          <div className="row-span-3 relative overflow-hidden mask-[linear-gradient(to_bottom,white_0%,white_65%,transparent_100%)] pointer-events-none">
            <div className="relative w-[90%] h-[90%] mx-auto mt-6 rounded-2xl">
              <SvgDiagonalBg />
            </div>
            <div className="absolute bg-zinc-900 w-[450px] h-80 top-12 left-1/2 -translate-x-1/2 rounded-xl grid grid-rows-5">
              <div className="row-span-2 self-end justify-self-center w-[230px] h-[65px] bg-zinc-700/50 rounded-xl flex items-center gap-4 px-2">
                <div className="text-orange-400">
                  <LuTriangleAlert size={24} />
                </div>
                <div>
                  <h3 className="text-[13px] text-zinc-300">
                    Critical Balance
                  </h3>
                  <p className="text-[13px] text-zinc-400">
                    You will have less than $2,500 in available funds in May
                  </p>
                </div>
              </div>
              <div className="overflow-hidden relative row-span-3">
                <svg
                  viewBox="0 0 400 200"
                  className="w-full h-48 text-blue-400"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Grid lines */}
                  <g stroke="rgba(255,255,255,0.05)" strokeWidth="1">
                    {[...Array(5)].map((_, i) => (
                      <line key={i} y1="0" x1={100 * i} y2="400" x2={100 * i} />
                    ))}
                  </g>

                  {/* Solid Line (past data) */}
                  <polyline
                    fill="none"
                    stroke="rgb(0,150,255)"
                    strokeWidth="3"
                    points="0,80 100,50 140,70 200,90"
                  />

                  {/* Dashed Line (forecast) */}
                  <polyline
                    fill="none"
                    stroke="rgb(0,150,255)"
                    strokeWidth="3"
                    strokeDasharray="6 6"
                    points="200,90 260,120 300,130 400,140"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="py-4 px-8">
            <h3 className="text-gray-200 text-lg font-semibold">
              Smart forecasting
            </h3>
            <p className="text-zinc-500 text-sm mt-2 tracking-wide">
              Use Cobaltito's predictive tools to explore possible financial
              scenarios and gain insights into how things might develop over
              time.
            </p>
          </div>
        </div>
        <div className="h-[480px]  rounded-2xl border border-gray-400/30 bg-zinc-800/50 grid grid-rows-4">
          <div className="row-span-3 px-8 pb-12">
            <div className="relative w-full h-full flex overflow-hidden">
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none mask-radial-at-center mask-radial-from-1% mask-radial-to-transparent"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <pattern
                    id="lastCard"
                    width="40"
                    height="40"
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x="0"
                      y="0"
                      width="40"
                      height="40"
                      fill="none"
                      stroke="rgba(255,255,255,0.1)"
                      strokeWidth="1"
                    />
                  </pattern>
                </defs>

                <rect width="100%" height="100%" fill="url(#lastCard)" />
              </svg>
              <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 rounded-xl bg-cyan-400/10 p-2 pointer-events-none">
                <div className=" text-zinc-200 px-3 py-1 bg-cyan-600 rounded-md text-sm shadow-[inset_0px_1px_1px_--theme(--color-white/30%),0px_1px_3px_--theme(--color-cyan-500/35%),0px_0px_0px_1px_--theme(--color-cyan-500)]">
                  Hey! How can I help you?
                </div>
              </div>
              <div className="text-white self-end mx-auto w-full h-[52px] bg-zinc-800 rounded-lg px-3 py-1 flex items-center justify-between relative z-10">
                <p className="text-[12px] text-zinc-400">
                  ✨{" "}
                  <Typewriter
                    texts={[
                      "Hey! How can I help you?",
                      "What would you like to analyze next?",
                      "Just ask — I’m here for you.",
                    ]}
                  />
                </p>
                <div className="relative">
                  <div className="absolute -z-10 h-full w-full blur-lg motion-safe:animate-pulse bg-gradient"></div>
                  <button className="rounded-md bg-black px-2 py-1 border border-zinc-400/40 text-[13px] cursor-pointer hover:border hover:border-zinc-300/70 transition-all">
                    Ask Genius
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="py-4 px-8">
            <h3 className="text-gray-200 text-lg font-semibold">
              Chat with Genius
            </h3>
            <p className="text-zinc-500 text-sm mt-2 tracking-wide">
              Ask questions whenever you need. Genius is here to support you as
              you explore your financial data and make sense of the numbers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Genius;
