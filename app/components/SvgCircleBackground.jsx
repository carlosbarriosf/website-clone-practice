import React from "react";

const SvgCircleBackground = () => {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden mask-[linear-gradient(to_bottom,white_0%,white_10%,transparent_100%)]"
      viewBox="0 0 600 600"
    >
      <circle
        cx="300"
        cy="300"
        r="390"
        stroke="rgba(255,255,255,0.1)"
        fill="none"
      />
      <circle
        cx="300"
        cy="300"
        r="320"
        stroke="rgba(255,255,255,0.1)"
        fill="none"
      />
      <circle
        cx="300"
        cy="300"
        r="250"
        stroke="rgba(255,255,255,0.1)"
        fill="none"
      />
      <circle
        cx="300"
        cy="300"
        r="180"
        stroke="rgba(255,255,255,0.1)"
        fill="none"
      />
      <circle
        cx="300"
        cy="300"
        r="110"
        stroke="rgba(255,255,255,0.1)"
        fill="none"
      />
      <circle
        cx="300"
        cy="300"
        r="40"
        stroke="rgba(255,255,255,0.1)"
        fill="none"
      />
    </svg>
  );
};

export default SvgCircleBackground;
