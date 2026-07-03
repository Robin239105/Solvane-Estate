import React from "react";
import { Link } from "react-router-dom";

export const Button = ({
  variant = "solid-cabernet",
  to,
  children,
  className = "",
  ...props
}) => {
  const baseStyle =
    "inline-flex items-center justify-center font-sans text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 py-3.5 px-8 select-none focus:outline-none whitespace-nowrap";
  const variants = {
    "solid-gold": "bg-[#722F37] text-[#201A18] hover:bg-[#D98E96] shadow-sm",
    "solid-cabernet":
      "bg-[#722F37] text-[#FBF8F3] hover:bg-[#521D23] shadow-sm",
    "outline-cream":
      "border border-[#F6EFE2] text-[#F6EFE2] hover:bg-[#F6EFE2]/10 backdrop-blur-xs",
    "outline-dark":
      "border border-[#722F37] text-[#722F37] hover:bg-[#722F37] hover:text-[#FBF8F3]",
    "text-gold":
      "text-[#722F37] hover:text-[#D98E96] px-0 py-1 border-b border-transparent hover:border-[#D98E96] tracking-[0.25em]",
    "text-dark":
      "text-[#722F37] hover:text-[#521D23] px-0 py-1 border-b border-transparent hover:border-[#521D23]",
  };

  const combinedClass = `${baseStyle} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClass}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClass} {...props}>
      {children}
    </button>
  );
};

export default Button;
