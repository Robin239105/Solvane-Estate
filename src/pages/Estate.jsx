import React from "react";
import { motion } from "framer-motion";
import { pageVariants, fadeInUp } from "../lib/motion";
import SectionHeading from "../components/ui/SectionHeading";
import teaserMain from "../assets/teaser_main.png";
import gallery5 from "../assets/gallery5.png";
import slide2 from "../assets/slide2.png";

export const Estate = () => {
  const narrativeMilestones = [
    {
      year: "1912",
      title: "Seeds in the Limestone",
      description:
        "French immigrant Jean-Luc Solvane registers the original 40-acre homestead in Rutherford, planting Chardonnay budwood transported in sand crates from Burgundy.",
    },
    {
      year: "1945",
      title: "Carving the Cave",
      description:
        "After years of dry farming, the family hires local stonecutters to tunnel into the hillside, creating a constant-temperature barrel sanctuary requiring zero refrigeration.",
    },
    {
      year: "1982",
      title: "First Reserve Cabernet",
      description:
        'Third-generation grower Robert Solvane isolates the ridgetop gravel block, releasing the first "Solvane Cabernet Sauvignon Reserve" to immediate critical acclaim.',
    },
    {
      year: "2015",
      title: "Biodynamic Shift",
      description:
        "Marcus Vance took over vineyard management, transitioning the entire property to organic, gravity-flow, and solar-integrated farming models.",
    },
  ];

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="w-full text-left"
    >
      {/* Subpage Hero */}
      <div className="relative h-[300px] md:h-[450px] w-full flex items-center bg-[#201A18] text-[#F6EFE2] overflow-hidden select-none">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-35"
          style={{
            backgroundImage: `url(${teaserMain})`,
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#201A18] to-[#201A18]/45" />
        <div className="relative max-w-7xl mx-auto w-full px-6 text-center pt-16">
          <span className="font-sans italic text-sm md:text-base text-[#D98E96] tracking-wider mb-2 block">
            Our Legacy
          </span>
          <h1 className="font-sans text-4xl md:text-6xl font-medium tracking-wide">
            The Story of Solvane
          </h1>
          <p className="font-sans text-xs md:text-sm text-[#F6EFE2]/75 max-w-xl mx-auto mt-4 leading-relaxed">
            Crafting elegant, terroir-driven vintages requires a long memory.
            Explore the historical currents that shaped our Rutherford
            hillsides.
          </p>
        </div>
      </div>

      {/* Narrative Intro Section */}
      <section className="py-24 px-6 bg-[#FBF8F3]">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <SectionHeading
            eyebrow="The Heritage"
            title="A Century of Silence"
            subtitle="At Solvane Estate, we believe in minimal intervention. The best winemaking is a process of deep listening — allowing the weather patterns, wind drafts, and subterranean rock blocks to translate clearly into the glass."
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-4 text-[#5C5450] font-sans text-sm leading-relaxed">
            <p>
              Our founder, Jean-Luc Solvane, was convinced that the gravelly
              clay loam slopes of Rutherford shared a chemical affinity with the
              Grand Cru hilltops of France. By planting vines on the steepest,
              most nutrient-deficient ridgetops, he forced the roots to seek
              moisture dozens of feet deep in search of limestone minerals. This
              initial intuition remains the core philosophy of our viticulture
              program today.
            </p>
            <p>
              Each vine must struggle to survive. This struggle reduces grape
              sizes, limits yields, and produces berries with thick, dark skins,
              containing unmatched flavor pre-cursors, tannin concentration, and
              balanced acidity. Marcus Vance, our current Estate Winemaker,
              guides this process with hands-on precision, letting gravity and
              oak do the heavy lifting in our underground tunnels.
            </p>
          </div>
        </div>
      </section>

      {/* Historical Photo Essay / Founders Showcase */}
      <section className="py-24 px-6 bg-[#F6EFE2] border-t border-b border-[#722F37]/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Images Grid */}
          <div className="lg:col-span-6 grid grid-cols-12 gap-4">
            <div className="col-span-8 h-[380px] overflow-hidden rounded-xs border border-[#722F37]/10">
              <img
                src={gallery5}
                alt="Winemaker inspecting barrels"
                className="w-full h-full object-cover transition-transform duration-750 hover:scale-103"
                loading="lazy"
              />
            </div>
            <div className="col-span-4 h-[250px] overflow-hidden rounded-xs border border-[#722F37]/10 self-end -ml-6 mb-6">
              <img
                src={slide2}
                alt="Old barrel close-up"
                className="w-full h-full object-cover transition-transform duration-750 hover:scale-103"
                loading="lazy"
              />
            </div>
          </div>

          {/* Narrative text */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp(0.15)}
            className="lg:col-span-6 flex flex-col items-start"
          >
            <span className="font-sans italic text-base text-[#521D23] mb-2">
              The Stewards
            </span>
            <h2 className="font-sans text-3xl md:text-4xl font-medium text-[#722F37] leading-snug mb-6">
              Marcus & Elena Vance: Keepers of the Caves
            </h2>
            <div className="w-12 h-[1px] bg-[#722F37] my-3" />
            <p className="font-sans text-sm text-[#5C5450] leading-relaxed mb-6">
              Marcus Vance joined Solvane Estate as Cellar Master in 2008 and
              assumed Winemaking leadership in 2015. Elena, an accomplished
              sommelier and culinary designer, joined him to launch the estate
              culinary pairings and culinary programs. Together, they represent
              the modern, luxury direction of the winery.
            </p>
            <p className="font-sans text-sm text-[#5C5450] leading-relaxed">
              "We don't try to force a vintage to conform to a specific score or
              flavor template," Elena says. "If the winter was cold and rainy,
              the wine should express that crisp, vertical tension. If the
              summer was warm, it will showcase a broader, more luxurious frame.
              We are scribes, writing the vineyard's year-long diary."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Historical Vertical Timeline */}
      <section className="py-24 px-6 bg-[#FBF8F3]">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <SectionHeading
            eyebrow="The Ledger"
            title="Chronological Landmarks"
            className="mb-20"
          />

          <div className="flex flex-col gap-16 w-full relative pl-6 md:pl-0">
            {/* Center Line (desktop) or Left Line (mobile) */}
            <div className="absolute top-0 bottom-0 left-[23px] md:left-1/2 w-[1px] bg-[#722F37]/25" />

            {narrativeMilestones.map((m, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={m.year}
                  className={`flex flex-col md:flex-row items-start md:items-center relative w-full ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline node dot */}
                  <div className="absolute left-[3px] md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#722F37] border-4 border-[#FBF8F3] z-10" />

                  {/* Left Column (Desktop) */}
                  <div
                    className={`w-full md:w-1/2 text-left ${isEven ? "md:pr-12 md:text-right" : "md:pl-12"}`}
                  >
                    <span className="font-sans italic text-3xl font-semibold text-[#722F37] block mb-1">
                      {m.year}
                    </span>
                    <h3 className="font-sans text-lg font-bold text-[#722F37] mb-2">
                      {m.title}
                    </h3>
                    <p className="font-sans text-xs md:text-sm leading-relaxed text-[#5C5450]">
                      {m.description}
                    </p>
                  </div>

                  {/* Spacer for structure */}
                  <div className="hidden md:block w-1/2" />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Estate;
