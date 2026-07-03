import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Compass,
  MapPin,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import Button from "../ui/Button";

// Import local high-resolution generated images
import slide1 from "../../assets/slide1.png";
import slide2 from "../../assets/slide2.png";
import slide3 from "../../assets/slide3.png";
import slide4 from "../../assets/slide4.png";
import slide5 from "../../assets/slide5.png";

const SLIDES = [
  {
    id: 1,
    bgUrl: slide1,
    eyebrow: "Solvane Estate • Napa Valley",
    titleLine1: "Where Time",
    titleLine2: "Transforms Into",
    titleHighlight: "Pure Artistry",
    description:
      "Nurtured on the high gravel slopes of Napa Valley, the Solvane family crafts rare, library-quality vintages designed to age with elegance.",
    btn1Text: "Explore Collection",
    btn1Link: "/shop",
    btn2Text: "Our Story",
    btn2Link: "/estate",
    badgeLabel: "Current Release",
    badgeTitle: "Cabernet Sauvignon Reserve",
    badgeText: "98 Points & bull; Hand-Sorted",
    stats: [
      { label: "Elevation", value: "680 FT", icon: Compass },
      { label: "Terroir", value: "Gravel Loam", icon: MapPin },
      { label: "Sorting", value: "100% Hand", icon: ShieldCheck },
    ],
  },
  {
    id: 2,
    bgUrl: slide2,
    eyebrow: "Private Cellar Tastings",
    titleLine1: "An Immersive",
    titleLine2: "Winery Journey",
    titleHighlight: "Tasting Rooms",
    description:
      "Join us for an exclusive, private tour through our historic barrel vaults. Sample current releases paired with curated culinary bites.",
    btn1Text: "Book a Tasting",
    btn1Link: "/tasting-room",
    btn2Text: "View Packages",
    btn2Link: "/tasting-room",
    badgeLabel: "Private Reserves",
    badgeTitle: "Exclusive Estate Tastings",
    badgeText: "Reservations Required & bull; Daily",
    stats: [
      { label: "Capacity", value: "Private", icon: Compass },
      { label: "Pairings", value: "Artisan", icon: MapPin },
      { label: "Duration", value: "90 Mins", icon: ShieldCheck },
    ],
  },
  {
    id: 3,
    bgUrl: slide3,
    eyebrow: "Napa Valley Terroir",
    titleLine1: "Rooted in Sun,",
    titleLine2: "Steep Slopes &",
    titleHighlight: "Rolling Hills",
    description:
      "Discover our high-altitude vineyard blocks, where steep volcanic slopes and rocky soils yield grapes of concentrated power.",
    btn1Text: "Explore Vineyard",
    btn1Link: "/estate/vineyard",
    btn2Text: "Harvest Notes",
    btn2Link: "/vintages",
    badgeLabel: "Estate Soils",
    badgeTitle: "Volcanic Gravelly Loam",
    badgeText: "Ridgetop Blocks & bull; Sustainable",
    stats: [
      { label: "Vines", value: "Clone 337", icon: Compass },
      { label: "Slope", value: "Up to 22°", icon: MapPin },
      { label: "Blocks", value: "12 Unique", icon: ShieldCheck },
    ],
  },
  {
    id: 4,
    bgUrl: slide4,
    eyebrow: "Wine Club Allocation",
    titleLine1: "A Sanctuary for",
    titleLine2: "True Connoisseurs",
    titleHighlight: "Join the Club",
    description:
      "Receive guaranteed allocation access to our limited library vintages, reserve selections, and invitations to private estate events.",
    btn1Text: "Join Allocation",
    btn1Link: "/wine-club",
    btn2Text: "Club Tiers",
    btn2Link: "/wine-club",
    badgeLabel: "Member Benefits",
    badgeTitle: "Guaranteed Allocations",
    badgeText: "Library Cellar & bull; Private Events",
    stats: [
      { label: "Shipments", value: "2x Yearly", icon: Compass },
      { label: "Discount", value: "Up to 20%", icon: MapPin },
      { label: "Access", value: "Library", icon: ShieldCheck },
    ],
  },
  {
    id: 5,
    bgUrl: slide5,
    eyebrow: "Winery Craft & History",
    titleLine1: "Crafted With",
    titleLine2: "Deep Passion &",
    titleHighlight: "Vintage Log",
    description:
      "Explore our historical cellar archives. Each bottle represents a distinct snapshot of weather, soil, and our winemaker's choice.",
    btn1Text: "View Vintages",
    btn1Link: "/vintages",
    btn2Text: "Winemaking Craft",
    btn2Link: "/estate/winemaking",
    badgeLabel: "Cellar Logs",
    badgeTitle: "Historical Archives",
    badgeText: "Winemaker Notes & bull; Library Logs",
    stats: [
      { label: "Vintages", value: "Est. 1998", icon: Compass },
      { label: "Barrels", value: "French Oak", icon: MapPin },
      { label: "Aging", value: "22+ Months", icon: ShieldCheck },
    ],
  },
];

export const HeroVideo = () => {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);

  const resetTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, 8000);
  };

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % SLIDES.length);
    resetTimer();
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
    resetTimer();
  };

  const active = SLIDES[current];

  return (
    <div className="relative min-h-screen lg:h-screen w-full overflow-hidden bg-[#161211] lg:grid lg:grid-cols-12 select-none">
      {/* LEFT COLUMN: Content & Details */}
      <div className="relative z-20 lg:col-span-5 w-full h-full bg-gradient-to-br from-[#1c1716] to-[#120e0d] p-6 sm:p-8 md:p-16 lg:p-12 xl:p-16 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#722F37]/15 shadow-2xl pt-40 sm:pt-44 lg:pt-48 xl:pt-52 pb-12">
        {/* Top Eyebrow */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`eyebrow-${current}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 mb-8 lg:mb-0"
          >
            <span className="text-[#D98E96] text-xs">★</span>
            <span className="font-monk text-[10px] tracking-[0.25em] text-[#D98E96] uppercase">
              {active.eyebrow}
            </span>
          </motion.div>
        </AnimatePresence>

        {/* Content Box */}
        <div className="my-auto py-6 text-left">
          <AnimatePresence mode="wait">
            <motion.div
              key={`content-${current}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="font-sans font-light tracking-tight text-white uppercase leading-[1.05] text-4xl sm:text-5xl xl:text-6xl mb-6">
                {active.titleLine1} <br />
                {active.titleLine2} <br />
                <span className="font-script text-5xl sm:text-6xl xl:text-7xl text-[#D98E96] tracking-normal normal-case block mt-2 font-normal">
                  {active.titleHighlight}
                </span>
              </h1>

              <div className="w-16 h-[1.5px] bg-[#722F37] my-6" />

              <p className="font-sans text-xs md:text-sm text-[#F6EFE2]/70 leading-relaxed tracking-wide mb-8 max-w-md">
                {active.description}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
                <Button
                  variant="solid-cabernet"
                  to={active.btn1Link}
                  className="flex-grow !py-4 !text-[10px] flex items-center justify-center gap-2"
                >
                  {active.btn1Text} <ArrowRight className="w-3.5 h-3.5" />
                </Button>
                <Button
                  variant="outline-cream"
                  to={active.btn2Link}
                  className="flex-grow !py-4 !text-[10px]"
                >
                  {active.btn2Text}
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Metrics Footer */}
        <div className="mt-8 lg:mt-0 pt-8 border-t border-[#722F37]/15">
          <AnimatePresence mode="wait">
            <motion.div
              key={`stats-${current}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-3 gap-4 text-left font-sans"
            >
              {active.stats.map((stat, idx) => {
                const IconComponent = stat.icon;
                return (
                  <div key={idx} className="flex items-start gap-2">
                    <IconComponent className="w-4 h-4 text-[#D98E96] mt-0.5 shrink-0" />
                    <div>
                      <span className="block text-[8px] uppercase tracking-widest text-[#D98E96]/70 font-bold">
                        {stat.label}
                      </span>
                      <span className="block text-[10px] xs:text-xs md:text-sm font-bold text-white mt-0.5">
                        {stat.value}
                      </span>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Slider Navigation & Dot Indicators */}
        <div className="flex items-center justify-between mt-8 pt-6 border-t border-[#722F37]/10 font-sans">
          {/* Dots */}
          <div className="flex gap-2">
            {SLIDES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setCurrent(idx);
                  resetTimer();
                }}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  current === idx ? "bg-[#D98E96] w-6" : "bg-white/20"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Chevrons */}
          <div className="flex gap-3">
            <button
              onClick={handlePrev}
              className="p-1.5 border border-white/10 hover:border-[#D98E96] text-white/50 hover:text-white transition-colors duration-300 rounded-full cursor-pointer"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              className="p-1.5 border border-white/10 hover:border-[#D98E96] text-white/50 hover:text-white transition-colors duration-300 rounded-full cursor-pointer"
              aria-label="Next slide"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN: Visual Canvas Frame */}
      <div className="relative lg:col-span-7 h-[50vh] sm:h-[60vh] lg:h-full w-full bg-[#120e0d] flex items-center justify-center p-6 sm:p-10 lg:p-12 xl:p-16 pt-36 lg:pt-40 xl:pt-44 pb-12">
        {/* Large Museum Frame */}
        <div className="relative w-full h-full rounded-xs overflow-hidden shadow-2xl border border-white/5 group">
          <AnimatePresence mode="wait">
            <motion.img
              key={`bg-${current}`}
              src={active.bgUrl}
              alt={active.badgeTitle}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full object-cover origin-center transition-transform duration-700 group-hover:scale-103"
            />
          </AnimatePresence>

          <div className="absolute inset-0 bg-black/35 z-10 pointer-events-none" />

          {/* Floating Acquisition/Details Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`badge-${current}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="absolute bottom-6 left-6 right-6 sm:right-auto bg-[#161211]/95 backdrop-blur-md p-5 border border-[#722F37]/25 shadow-2xl flex items-center justify-between gap-6 max-w-sm rounded-xs z-20"
            >
              <div className="text-left font-sans">
                <span className="text-[8px] uppercase tracking-[0.2em] text-[#D98E96] font-bold">
                  {active.badgeLabel}
                </span>
                <h4 className="text-xs font-bold text-white mt-1 uppercase tracking-wider">
                  {active.badgeTitle}
                </h4>
                <p className="text-[10px] text-[#F6EFE2]/60 mt-1 leading-snug">
                  {active.badgeText}
                </p>
              </div>
              <Button
                to={active.btn1Link}
                className="!py-2.5 !px-5 !text-[8px] shrink-0"
              >
                Acquire
              </Button>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default HeroVideo;
