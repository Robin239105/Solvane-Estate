import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { vintages } from "../data/vintages";
import { pageVariants } from "../lib/motion";

export const Vintages = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const activeVintage = vintages[activeIdx];

  const handleNext = () => {
    if (activeIdx < vintages.length - 1) {
      setActiveIdx(activeIdx + 1);
    }
  };

  const handlePrev = () => {
    if (activeIdx > 0) {
      setActiveIdx(activeIdx - 1);
    }
  };

  // We can just use activeVintage directly. No need for dummy variable to trigger Type check.
  const checkType = (v) => {
    return v.year;
  };

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="w-full text-left pt-32 bg-[#201A18] text-[#F6EFE2] min-h-screen select-none flex flex-col justify-between"
    >
      {/* Subpage Header */}
      <div className="max-w-7xl mx-auto w-full px-6 pt-12 flex flex-col items-center text-center">
        <span className="font-sans italic text-base text-[#D98E96] tracking-wide mb-2.5">
          History of the Soil
        </span>
        <h1 className="font-sans text-3xl md:text-5xl font-medium tracking-wide text-[#F6EFE2] mb-4">
          The Vintage Ledger
        </h1>
        <p className="font-sans text-xs md:text-sm text-[#F6EFE2]/70 max-w-xl leading-relaxed">
          An interactive chronicle of our growing seasons, weather narratives,
          and cellar ratings from 2015 to 2024. Click any year to explore its
          story.
        </p>
      </div>

      {/* Horizontal Timeline Navigation Bar */}
      <div className="w-full border-t border-b border-[#F6EFE2]/10 py-6 my-10 overflow-x-auto no-scrollbar relative z-10 bg-[#201A18]/80 backdrop-blur-md">
        <div className="max-w-4xl mx-auto flex justify-between items-center gap-6 px-6 min-w-[600px]">
          {vintages.map((v, idx) => {
            const isActive = idx === activeIdx;
            return (
              <button
                key={v.year}
                onClick={() => setActiveIdx(idx)}
                className="flex flex-col items-center gap-1.5 focus:outline-none group cursor-pointer relative"
              >
                {/* Year display */}
                <span
                  className={`font-sans text-xl md:text-2xl transition-all duration-300 font-semibold ${
                    isActive
                      ? "text-[#722F37] scale-110"
                      : "text-[#F6EFE2]/45 group-hover:text-[#F6EFE2]"
                  }`}
                >
                  {v.year}
                </span>

                {/* Status Dot */}
                <div
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    isActive
                      ? "bg-[#722F37] scale-125"
                      : "bg-[#F6EFE2]/20 group-hover:bg-[#F6EFE2]/40"
                  }`}
                />

                {/* Rating summary */}
                <span
                  className={`font-sans text-[8px] uppercase tracking-wider transition-all duration-300 ${
                    isActive
                      ? "text-[#722F37]/90"
                      : "text-[#F6EFE2]/30 opacity-0 group-hover:opacity-100"
                  }`}
                >
                  {v.rating.split("/")[0]} pts
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main interactive cards wrapper with AnimatePresence */}
      <div className="max-w-7xl mx-auto w-full px-6 flex-1 flex flex-col justify-center mb-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeVintage.year}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center"
          >
            {/* Left: Photos and Color Chip indicator */}
            <div className="lg:col-span-6 flex flex-col gap-4 relative">
              <div className="aspect-16/10 rounded-xs overflow-hidden border border-[#F6EFE2]/10 bg-charcoal shadow-2xl relative">
                <img
                  src={activeVintage.photo}
                  alt={`Harvest photos for ${activeVintage.year}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />

                {/* Color Chip representation overlay */}
                <div
                  className="absolute bottom-4 right-4 w-12 h-12 rounded-full border-2 border-[#F6EFE2]/25 shadow-lg flex items-center justify-center font-sans font-bold text-[9px] text-white"
                  style={{ backgroundColor: activeVintage.colorChip }}
                  title="Dominant tasting profile hue"
                >
                  <span className="bg-black/40 px-1 rounded-sm text-center">
                    HUE
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Narrative Details */}
            <div className="lg:col-span-6 flex flex-col items-start text-left">
              {/* Top Details & Rating Star */}
              <div className="flex items-center gap-4.5 mb-4">
                <span className="font-sans text-[10px] tracking-widest text-[#722F37] font-bold uppercase border border-[#722F37] py-1 px-3">
                  {activeVintage.status} vintage
                </span>

                <div className="flex items-center gap-1.5">
                  <Star className="w-4 h-4 text-[#722F37] fill-[#722F37]" />
                  <span className="font-sans font-bold text-xl text-[#F6EFE2]">
                    {activeVintage.rating}
                  </span>
                </div>
              </div>

              {/* Big Year Title */}
              <h2 className="font-sans text-5xl md:text-7xl font-bold tracking-tight text-[#F6EFE2] mb-6">
                Vintage {activeVintage.year}
              </h2>

              <div className="w-16 h-[1px] bg-[#722F37] my-3" />

              {/* Narratives */}
              <div className="flex flex-col gap-4.5 font-sans text-xs md:text-sm leading-relaxed text-[#F6EFE2]/85 max-w-xl">
                <p>
                  <strong className="font-sans italic text-[#D98E96] text-sm block mb-1">
                    Growing Season & Climate:
                  </strong>
                  {activeVintage.weatherNarrative}
                </p>
                <p>
                  <strong className="font-sans italic text-[#D98E96] text-sm block mb-1">
                    Harvest & Cellar Report:
                  </strong>
                  {activeVintage.harvestNotes}
                </p>
              </div>

              {/* Shop wine link helper */}
              <div className="mt-8">
                <a
                  href={`/shop?vintage=${activeVintage.year}`}
                  className="font-sans text-[10px] uppercase tracking-widest font-semibold text-[#722F37] hover:text-[#D98E96] transition-colors border-b border-[#722F37] pb-1"
                >
                  Acquire {activeVintage.year} Vintages &rarr;
                </a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom slider controls */}
      <div className="max-w-7xl mx-auto w-full px-6 py-6 border-t border-[#F6EFE2]/10 flex justify-between items-center z-10">
        <button
          onClick={handlePrev}
          disabled={activeIdx === 0}
          className="flex items-center gap-2.5 font-sans text-[10px] tracking-widest uppercase font-semibold text-[#F6EFE2] hover:text-[#722F37] disabled:opacity-25 disabled:hover:text-current transition-colors focus:outline-none cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4" /> Previous Year
        </button>

        <span className="font-sans italic text-sm text-[#F6EFE2]/60">
          Record {activeIdx + 1} of {vintages.length}
        </span>

        <button
          onClick={handleNext}
          disabled={activeIdx === vintages.length - 1}
          className="flex items-center gap-2.5 font-sans text-[10px] tracking-widest uppercase font-semibold text-[#F6EFE2] hover:text-[#722F37] disabled:opacity-25 disabled:hover:text-current transition-colors focus:outline-none cursor-pointer"
        >
          Next Year <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Suppress type warning */}
      <div className="hidden">{checkType(activeVintage)}</div>
    </motion.div>
  );
};

export default Vintages;
