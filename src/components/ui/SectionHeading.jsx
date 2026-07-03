import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "../../lib/motion";

export const SectionHeading = ({
  eyebrow,
  title,
  subtitle,
  align = "center",
  theme = "light",
  className = "",
}) => {
  const alignmentClass = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  };

  const titleColor = theme === "dark" ? "text-[#F6EFE2]" : "text-[#722F37]";
  const subtitleColor =
    theme === "dark" ? "text-[#F6EFE2]/80" : "text-[#5C5450]";
  const eyebrowColor = theme === "dark" ? "text-[#D98E96]" : "text-[#521D23]";

  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeInUp(0.1)}
      className={`flex flex-col max-w-3xl mx-auto ${alignmentClass[align]} ${className}`}
    >
      {eyebrow && (
        <span
          className={`font-sans italic text-base md:text-lg mb-2.5 tracking-wide ${eyebrowColor}`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-sans text-3xl md:text-4xl lg:text-5xl font-medium leading-[1.15] ${titleColor}`}
      >
        {title}
      </h2>

      {/* Small design ornament */}
      <div className="flex items-center gap-2.5 my-5">
        <span
          className={`w-8 h-[1px] ${theme === "dark" ? "bg-[#F6EFE2]/20" : "bg-[#722F37]/20"}`}
        />
        <span className="w-1.5 h-1.5 rotate-45 bg-[#722F37]" />
        <span
          className={`w-8 h-[1px] ${theme === "dark" ? "bg-[#F6EFE2]/20" : "bg-[#722F37]/20"}`}
        />
      </div>

      {subtitle && (
        <p
          className={`font-sans text-sm md:text-base leading-relaxed max-w-xl ${subtitleColor}`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeading;
