import React from "react";

const LogoWS = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="100"
      viewBox="0 0 200 100"
    >
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#FFFF00", stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: "#000000", stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <text
        x="20"
        y="70"
        fontFamily="Orbitron, sans-serif"
        fontSize="70"
        fontWeight="700"
        fill="url(#grad)"
      >
        [WS]
      </text>
    </svg>
  );
};

export default LogoWS;
