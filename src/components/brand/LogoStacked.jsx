import React from "react";
import LogoMark from "./LogoMark";

export const LogoStacked = ({ theme = "light", className = "" }) => {
  const textColor = theme === "dark" ? "text-[#F6EFE2]" : "text-[#722F37]";

  return (
    <div
      className={`flex flex-col items-center text-center select-none ${className}`}
    >
      <LogoMark theme={theme} className="w-12 h-12 mb-2" />
      <div className={`flex flex-col leading-none ${textColor}`}>
        <span className="font-sans font-medium tracking-[0.3em] text-xl">
          SOLVANE
        </span>
        <span className="font-sans italic tracking-[0.1em] text-sm opacity-90 mt-1">
          estate
        </span>
      </div>
    </div>
  );
};

export default LogoStacked;
