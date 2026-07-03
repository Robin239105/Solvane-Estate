import React from "react";
import LogoMark from "./LogoMark";

export const LogoFull = ({ theme = "light", className = "" }) => {
  const textColor = theme === "dark" ? "text-[#F6EFE2]" : "text-[#722F37]";

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      <LogoMark theme={theme} className="w-9 h-9" />
      <div className={`flex flex-col leading-none ${textColor}`}>
        <span className="font-sans font-medium tracking-[0.25em] text-lg">
          SOLVANE
        </span>
        <span className="font-sans italic tracking-[0.05em] text-xs opacity-90 pl-[0.1em] mt-0.5">
          estate
        </span>
      </div>
    </div>
  );
};

export default LogoFull;
