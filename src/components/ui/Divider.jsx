import React from "react";

export const Divider = ({
  theme = "light",
  ornament = true,
  className = "",
}) => {
  const lineColor = theme === "dark" ? "bg-[#F6EFE2]/25" : "bg-[#722F37]/25";

  return (
    <div
      className={`relative flex items-center justify-center py-8 ${className}`}
    >
      <div className={`absolute inset-0 flex items-center`} aria-hidden="true">
        <div className={`w-full h-[1px] ${lineColor}`}></div>
      </div>
      {ornament && (
        <div className="relative px-4 bg-transparent flex items-center">
          <span className="w-2.5 h-2.5 rotate-45 border border-[#722F37] bg-[#FBF8F3] dark:bg-[#201A18] z-10" />
        </div>
      )}
    </div>
  );
};

export default Divider;
