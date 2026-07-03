import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { pageVariants } from "../lib/motion";
import gallery1 from "../assets/gallery1.png";
import gallery5 from "../assets/gallery5.png";
import slide2 from "../assets/slide2.png";
import slide4 from "../assets/slide4.png";
import slide5 from "../assets/slide5.png";

export const Winemaking = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      label: "01 / HARVEST",
      title: "Starlight Picking",
      narrative:
        "Harvesting begins at 3:00 AM under spotlight towers. By picking in freezing nighttime temperatures, we preserve natural grape acidities and prevent skin oxidation, ensuring pristine fruit enters the cellar.",
      image: gallery1,
    },
    {
      label: "02 / CRUSH",
      title: "Gravity Flow Sort",
      narrative:
        "We avoid mechanical pumps that bruise grape skins. Instead, our multilevel cellar utilizes natural gravity to move grapes from the sorting tables to wood-top fermenters, protecting delicate aromatics.",
      image: slide5,
    },
    {
      label: "03 / FERMENT",
      title: "Native Wild Yeast",
      narrative:
        "We do not add commercial yeast strains. Fermentations start spontaneously using native ambient yeasts residing on the grape skins, allowing the unique, localized terroir characteristics to translate fully.",
      image: slide2,
    },
    {
      label: "04 / BARREL",
      title: "The Cave Sanctuary",
      narrative:
        "The wine matures in French oak cooperage deep inside our stone caves. Maturing at a constant 55°F (13°C) and 75% natural humidity, the wine develops rich texture and complex spice profiles over 22 months.",
      image: gallery5,
    },
    {
      label: "05 / BOTTLE",
      title: "Minimal Filtration",
      narrative:
        "Wines are bottled unfined and unfiltered to preserve their natural structural integrity and fruit purity, guaranteeing they continue to develop complexity and age gracefully in your cellar.",
      image: slide4,
    },
  ];

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="w-full text-left bg-[#FBF8F3]"
    >
      {/* Subpage Hero */}
      <div className="relative h-[250px] md:h-[350px] w-full flex items-center bg-[#201A18] text-[#F6EFE2] overflow-hidden select-none">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: `url(${gallery5})`,
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#201A18] to-transparent" />
        <div className="relative max-w-7xl mx-auto w-full px-6 text-center pt-16">
          <span className="font-sans italic text-sm md:text-base text-[#D98E96] tracking-wider mb-2 block">
            The Craft
          </span>
          <h1 className="font-sans text-3xl md:text-5xl font-medium tracking-wide">
            Winemaking Process
          </h1>
          <p className="font-sans text-xs md:text-sm text-[#F6EFE2]/75 max-w-xl mx-auto mt-4 leading-relaxed">
            Five deliberate steps from soil to cellar. Explore our gravity-flow
            viticulture program and caves.
          </p>
        </div>
      </div>

      {/* Scrollytelling/Stepping layout */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch min-h-[500px]">
          {/* Left Column: Pinned visual container with transitions */}
          <div className="lg:col-span-7 flex flex-col justify-center relative min-h-[300px] md:min-h-[450px]">
            <div className="sticky top-[120px] aspect-16/10 rounded-xs overflow-hidden border border-[#722F37]/10 shadow-2xl bg-charcoal bg-cover bg-center">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeStep}
                  src={steps[activeStep].image}
                  alt={steps[activeStep].title}
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
            </div>
          </div>

          {/* Right Column: Step selections and text details */}
          <div className="lg:col-span-5 flex flex-col justify-between py-4 select-none">
            <div className="flex flex-col gap-6">
              <span className="font-sans italic text-[#521D23] text-lg">
                Crafting Sequence
              </span>

              {/* Vertical steps trigger bar */}
              <div className="flex flex-col gap-3">
                {steps.map((step, idx) => {
                  const isActive = idx === activeStep;
                  return (
                    <button
                      key={idx}
                      onClick={() => setActiveStep(idx)}
                      className="text-left w-full focus:outline-none group cursor-pointer"
                    >
                      <div className="flex items-center gap-4 py-2 border-b border-[#722F37]/10">
                        <span
                          className={`font-sans text-[10px] font-semibold tracking-wider transition-colors ${
                            isActive
                              ? "text-[#722F37]"
                              : "text-[#5C5450] group-hover:text-[#722F37]"
                          }`}
                        >
                          {step.label}
                        </span>

                        <span
                          className={`font-sans text-sm md:text-base font-semibold transition-colors ${
                            isActive
                              ? "text-[#722F37]"
                              : "text-[#5C5450]/60 group-hover:text-[#5C5450]"
                          }`}
                        >
                          {step.title}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Description card */}
            <div className="bg-[#F6EFE2] p-8 border border-[#722F37]/5 rounded-xs mt-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col text-left"
                >
                  <span className="font-sans text-[9px] uppercase tracking-widest text-[#722F37] font-semibold mb-2">
                    Phase {activeStep + 1} details
                  </span>
                  <h3 className="font-sans text-2xl font-bold text-[#722F37] mb-4">
                    {steps[activeStep].title}
                  </h3>
                  <p className="font-sans text-xs md:text-sm text-[#5C5450] leading-relaxed">
                    {steps[activeStep].narrative}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Winemaking;
