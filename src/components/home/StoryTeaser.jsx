import React from "react";
import { motion } from "framer-motion";
import Button from "../ui/Button";
import { fadeInUp } from "../../lib/motion";

// Import local high-resolution generated winery images
import teaserMain from "../../assets/teaser_main.png";
import teaserSecondary from "../../assets/teaser_secondary.png";

export const StoryTeaser = () => {
  return (
    <section className="py-24 px-6 bg-[#F6EFE2] overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Editorial Story Copy */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp(0.1)}
          className="lg:col-span-5 flex flex-col items-start text-left"
        >
          {/* Eyebrow in elegant script */}
          <span className="font-script text-4xl text-[#722F37] mb-2 leading-none">
            Our Legacy
          </span>

          {/* Headline combining Sans-Serif and Script highlights */}
          <h2 className="font-sans text-3xl md:text-5xl font-light text-[#722F37] leading-[1.1] mb-6">
            Crafted at the <br />
            Intersection of <br />
            <span className="font-script text-4xl md:text-5xl text-[#D98E96] tracking-normal normal-case font-normal inline-block mt-2">
              Sun &amp; Soil
            </span>
          </h2>

          <div className="w-12 h-[1.5px] bg-[#722F37] my-4" />

          {/* High-end magazine style drop cap/highlight paragraph */}
          <p className="font-sans text-base md:text-lg text-[#201A18] font-medium leading-relaxed mb-6">
            Founded in 1912 on the high ridgetop terraces of Rutherford, Solvane
            Estate has spent over a century researching the complex
            limestone-clay beds beneath our feet. We believe that great wine is
            not manufactured — it is decoded.
          </p>

          <p className="font-sans text-xs md:text-sm text-[#5C5450] leading-relaxed mb-8">
            Every grape cluster is harvested by hand under starlight, and every
            barrel rests in stone caves carved directly into the mountain,
            maturing in cold, silent harmony.
          </p>

          <Button variant="outline-dark" to="/estate">
            Discover Our Story
          </Button>
        </motion.div>

        {/* Right Column: Dual Editorial Images (Fully Local) */}
        <div className="lg:col-span-7 grid grid-cols-12 gap-4 relative">
          {/* Main larger image (Local terraced vineyards) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="col-span-8 h-[350px] md:h-[450px] overflow-hidden rounded-xs border border-[#722F37]/10 shadow-xl"
          >
            <img
              src={teaserMain}
              alt="Sun-drenched Solvane vineyard rows"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-103"
              loading="lazy"
            />
          </motion.div>

          {/* Secondary overlapping smaller image (Local grape sorting hands) */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="col-span-4 h-[250px] md:h-[300px] overflow-hidden rounded-xs border border-[#722F37]/15 shadow-2xl self-end -ml-10 mb-8 z-10"
          >
            <img
              src={teaserSecondary}
              alt="Winemaker hands sorting harvest grapes"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-103"
              loading="lazy"
            />
          </motion.div>

          {/* Accent Monk Style Established Seal */}
          <div className="absolute top-6 right-6 w-24 h-24 rounded-full border border-[#722F37]/35 flex flex-col items-center justify-center bg-[#FBF8F3] shadow-md z-20 pointer-events-none select-none">
            <span className="font-monk text-[9px] uppercase tracking-widest text-[#722F37]/80">
              Established
            </span>
            <span className="font-sans font-extrabold text-sm text-[#722F37] mt-0.5">
              1912
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoryTeaser;
