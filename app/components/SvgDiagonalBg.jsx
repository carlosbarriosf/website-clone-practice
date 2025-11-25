import React from "react";

const SvgDiagonalBg = () => {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id="diagonalLines"
          width="12"
          height="12"
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(-45)"
        >
          <line
            x1="0"
            y1="0"
            x2="0"
            y2="20"
            stroke="rgba(80,120,255,0.1)"
            strokeWidth="2"
          />
        </pattern>
      </defs>

      <rect width="100%" height="100%" fill="url(#diagonalLines)" />
    </svg>
  );
};

export default SvgDiagonalBg;
