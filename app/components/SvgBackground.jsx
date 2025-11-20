import React from "react";

const SvgBackground = ({ width, height, id }) => {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none opacity-10 bg-radial-[at_50%_0%] to-40% from-[#5682a5] to-black"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id={id}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
        >
          <rect
            x="0"
            y="0"
            width={width}
            height={height}
            fill="none"
            stroke="rgba(255,255,255,0.35)"
            strokeWidth="1"
          />
        </pattern>
      </defs>

      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
};

export default SvgBackground;
