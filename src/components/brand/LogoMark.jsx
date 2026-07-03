import React from "react";

export const LogoMark = ({ theme = "light", className = "" }) => {
  const colorClass = theme === "dark" ? "text-[#F6EFE2]" : "text-[#722F37]";

  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-8 h-8 select-none transition-colors duration-300 ${colorClass} ${className}`}
    >
      {/* Highly stylized Grape Leaf outline silhouette */}
      <path
        d="M16 4 C14.5 7, 12 8, 9 9 C9 12, 10.5 14.5, 12 16 C10.5 17.5, 9.5 19.5, 9.5 21 C9.5 24, 12.5 27, 16 27 C19.5 27, 22.5 24, 22.5 21 C22.5 19.5, 21.5 17.5, 20 16 C21.5 14.5, 23 12, 23 9 C20 8, 17.5 7, 16 4 Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Elegant geometric Grape Cluster nested within the leaf */}
      <circle cx="16" cy="11.5" r="1.5" fill="currentColor" />
      <circle cx="13.5" cy="14" r="1.5" fill="currentColor" />
      <circle cx="18.5" cy="14" r="1.5" fill="currentColor" />
      <circle cx="11" cy="16.5" r="1.5" fill="currentColor" />
      <circle cx="16" cy="16.5" r="1.5" fill="currentColor" />
      <circle cx="21" cy="16.5" r="1.5" fill="currentColor" />
      <circle cx="13.5" cy="19" r="1.5" fill="currentColor" />
      <circle cx="18.5" cy="19" r="1.5" fill="currentColor" />
      <circle cx="16" cy="21.5" r="1.5" fill="currentColor" />
      <circle cx="16" cy="24" r="1" fill="currentColor" />

      {/* Delicate curly Vine Stem at the top */}
      <path
        d="M16 4 C17 2.5, 19.5 2.5, 21 3.5"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default LogoMark;
