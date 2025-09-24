import React from "react";

const ShieldLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 240" width="50" height="240">
    <defs>
      {/* Gradiente para o escudo */}
      <linearGradient id="shieldGradient" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#0d6efd" /> {/* Azul */}
        <stop offset="100%" stopColor="#fd7e14" /> {/* Laranja */}
      </linearGradient>

      {/* Gradiente para o texto */}
      <linearGradient id="textGradient" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#0d6efd" stopOpacity="1" />
        <stop offset="100%" stopColor="#fd7e14" stopOpacity="1" />
      </linearGradient>
    </defs>

    {/* Forma do escudo */}
    <path
      d="M100 10 L190 60 V130 C190 180 150 220 100 230 C50 220 10 180 10 130 V60 Z"
      fill="url(#shieldGradient)"
      stroke="#222"
      strokeWidth="4"
    />

    {/* Texto WS mais visível com contorno */}
    <text
      x="50%"
      y="60%"
      textAnchor="middle"
      fontSize="80"
      fontFamily="Arial, Helvetica, sans-serif"
      fontWeight="900"
      fill="url(#textGradient)"
      stroke="#222"
      strokeWidth="3"
    >
      WS
    </text>
  </svg>
);

export default ShieldLogo;
