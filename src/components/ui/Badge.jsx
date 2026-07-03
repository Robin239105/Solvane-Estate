import React from "react";

export const Badge = ({ children, variant = "gold", className = "" }) => {
  const styles = {
    gold: "bg-[#F6EFE2] border border-[#722F37] text-[#722F37]",
    cabernet: "bg-[#722F37] border border-[#722F37] text-[#FBF8F3]",
    champagne: "bg-[#F6EFE2] border border-[#722F37]/25 text-[#120e0d]",
    rose: "bg-[#D98E96] border border-[#D98E96] text-[#120e0d]",
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1 font-sans text-[10px] font-semibold tracking-widest uppercase select-none ${styles[variant]} ${className}`}
    >
      {children}
    </span>
  );
};

export default Badge;
