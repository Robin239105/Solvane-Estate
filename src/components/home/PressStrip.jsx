import React from "react";
import { motion } from "framer-motion";

export const PressStrip = () => {
  const pressMentions = [
    {
      source: "WINE SPECTATOR",
      quote:
        "“Solvane’s Reserve Cabernet represents the pinnacle of Napa Valley winemaking craft.”",
      rating: "98 PTS",
    },
    {
      source: "DECANTER",
      quote:
        "“Vibrant mineral salinity meets luxurious texture. An absolute masterpiece.”",
      rating: "97 PTS",
    },
    {
      source: "JAMES SUCKLING",
      quote:
        "“Exceptional structure and cellular depth designed to age for decades.”",
      rating: "99 PTS",
    },
    {
      source: "THE WINE ADVOCATE",
      quote:
        "“Unbelievable precision and tension. One of the greatest vintages of the decade.”",
      rating: "98+ PTS",
    },
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-[#1c1716] via-[#120e0d] to-[#1c1716] text-[#FBF8F3] border-t border-b border-[#722F37]/20 relative z-10 overflow-hidden">
      {/* Decorative subtle background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#722F37]/5 blur-[120px] rounded-full pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10">
        {/* Section Eyebrow */}
        <span className="font-sans text-[10px] tracking-[0.35em] font-extrabold text-[#D98E96] uppercase mb-14 text-center">
          Accolades &amp; Recognition
        </span>

        {/* Critic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
          {pressMentions.map((press, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative flex flex-col justify-between items-center p-8 bg-[#161211]/90 border border-white/5 hover:border-[#722F37]/40 rounded-2xl shadow-xl hover:shadow-[0_20px_50px_rgba(114,47,55,0.25)] transition-all duration-500 overflow-hidden group cursor-default h-full text-center"
            >
              {/* Radial card hover background shine */}
              <div className="absolute inset-0 bg-radial from-[#722F37]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              {/* Critic Card Header & Rating Badge */}
              <div className="flex flex-col items-center w-full">
                {/* Score Badge */}
                <div className="w-16 h-16 rounded-full border border-[#722F37]/35 flex items-center justify-center bg-[#1e1918] shadow-md group-hover:border-[#D98E96]/60 transition-colors duration-500 mb-6 relative z-10">
                  <span className="font-sans font-bold text-xs tracking-wider text-[#D98E96] group-hover:text-white transition-colors duration-300">
                    {press.rating}
                  </span>
                  <div className="absolute inset-0 bg-[#722F37]/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 origin-center -z-10" />
                </div>

                {/* Source/Critic Name */}
                <span className="font-sans font-bold text-xs tracking-[0.25em] text-[#F6EFE2] mb-3 group-hover:text-[#D98E96] transition-colors duration-300">
                  {press.source}
                </span>

                {/* Expanding Divider Line */}
                <div className="w-8 h-[1.5px] bg-[#722F37]/50 mb-6 group-hover:w-16 transition-all duration-500" />

                {/* Critique Quote */}
                <p className="font-sans italic text-xs md:text-sm text-[#F6EFE2]/75 group-hover:text-[#FBF8F3] leading-relaxed font-light transition-colors duration-300">
                  {press.quote}
                </p>
              </div>

              {/* 5-Star Critic Acclaim Indicator */}
              <div className="flex gap-1 mt-8 text-[#722F37]/60 group-hover:text-[#D98E96] transition-colors duration-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="text-xs">
                    ★
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PressStrip;
