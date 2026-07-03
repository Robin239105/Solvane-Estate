import React from "react";
import { motion } from "framer-motion";
import { pageVariants, fadeInUp } from "../lib/motion";
import SectionHeading from "../components/ui/SectionHeading";
import Badge from "../components/ui/Badge";
import teaserSecondary from "../assets/teaser_secondary.png";

export const Vineyard = () => {
  const blocks = [
    {
      name: "Block 12 (North Terrace)",
      soil: "Limestone gravelly clay loam",
      grape: "Chardonnay (Dijon clone 95)",
      elevation: "420 ft",
      slope: "12% West-facing",
      narrative:
        "Exposed to early morning coastal fog. Cool wind circulation preserves natural acidity, resulting in clean, energetic white wines with high minerality.",
    },
    {
      name: "Block 8 (South Ridge)",
      soil: "Volcanic cobble & decomposed granite",
      grape: "Pinot Noir (Pommard clone 4)",
      elevation: "580 ft",
      slope: "18% South-facing",
      narrative:
        "Steep gravelly slopes force roots deep into stone bedrock. High sunlight exposure results in thick skins, complex spice profiles, and concentrated tannins.",
    },
    {
      name: "Block 4 (Chateau Terrace)",
      soil: "Rutherford alluvial dust & volcanic gravel",
      grape: "Cabernet Sauvignon (Clone 337)",
      elevation: "680 ft",
      slope: "22% Southwest-facing",
      narrative:
        "Warmest coordinate on the property. Excellent drainage and direct sun exposure result in small, thick-skinned berries with immense color concentration and velvet power.",
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
      {/* Hero Banner */}
      <div className="relative h-[300px] md:h-[450px] w-full flex items-center bg-[#201A18] text-[#F6EFE2] overflow-hidden select-none">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: `url(${teaserSecondary})`,
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#201A18] via-[#201A18]/50 to-[#201A18]/25" />
        <div className="relative max-w-7xl mx-auto w-full px-6 text-center pt-16">
          <span className="font-sans italic text-sm md:text-base text-[#D98E96] tracking-wider mb-2 block">
            The Terroir
          </span>
          <h1 className="font-sans text-4xl md:text-6xl font-medium tracking-wide">
            The Vineyard & Soil
          </h1>
          <p className="font-sans text-xs md:text-sm text-[#F6EFE2]/75 max-w-xl mx-auto mt-4 leading-relaxed">
            Every bottle is an archive of a specific coordinate. Explore the
            limestone ridges, ocean winds, and rocky silt loams of Rutherford.
          </p>
        </div>
      </div>

      {/* Terroir & Soils Narrative */}
      <section className="py-24 px-6 bg-[#FBF8F3]">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <SectionHeading
            eyebrow="Limestone & Granite"
            title="The Chemistry of Flavor"
            subtitle="The tagline 'Where Sun Meets Soil' represents our commitment to capturing geological authenticity. The unique limestone bed underlying our property contributes natural pH balance, lending our wines their characteristic long finish and mineral clarity."
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-[#5C5450] font-sans text-sm leading-relaxed mb-16">
            <p>
              Millions of years ago, the Rutherford bench was an inland marine
              bay. As the mountains rose, they pushed prehistoric marine
              fossils, calcium carbonate, and gravelly silt blocks upward,
              creating a highly fractured limestone substrate. This
              calcium-dense bedrock regulates moisture naturally; acting like a
              giant sponge, it stores water during wet winters and slowly
              releases it to root structures during hot CA summers.
            </p>
            <p>
              By forcing our vines to dig deep in search of nutrients, we limit
              vegetative vigor (leaf growth) and instead redirect the vine’s
              metabolic energy toward berry development. The resulting grapes
              carry a distinct mineral salinity and a vertical acidity structure
              that is impossible to replicate on alluvial valley floors.
            </p>
          </div>

          {/* Technical Climate Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full border-t border-b border-[#722F37]/10 py-10 text-center font-sans">
            <div className="flex flex-col">
              <span className="text-[#722F37] font-bold text-3xl">680 ft</span>
              <span className="text-[10px] tracking-wider text-[#5C5450] uppercase mt-2">
                Peak Elevation
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-[#722F37] font-bold text-3xl">22°</span>
              <span className="text-[10px] tracking-wider text-[#5C5450] uppercase mt-2">
                Maximum Slope
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-[#722F37] font-bold text-3xl">30°F</span>
              <span className="text-[10px] tracking-wider text-[#5C5450] uppercase mt-2">
                Diurnal Temp Swing
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-[#722F37] font-bold text-3xl">100%</span>
              <span className="text-[10px] tracking-wider text-[#5C5450] uppercase mt-2">
                Estate Harvested
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Block-by-Block breakdown */}
      <section className="py-24 px-6 bg-[#F6EFE2] border-t border-[#722F37]/5">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <SectionHeading
            eyebrow="Viticulture Map"
            title="The Estate Blocks"
            className="mb-16"
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full mt-4">
            {blocks.map((b, idx) => (
              <motion.div
                key={idx}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInUp(idx * 0.1)}
                className="bg-[#FBF8F3] border border-[#722F37]/5 p-8 flex flex-col justify-between hover:shadow-lg transition-all duration-300"
              >
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="font-sans text-xl font-bold text-[#722F37]">
                      {b.name}
                    </h3>
                    <Badge variant="cabernet">Block {idx + 1}</Badge>
                  </div>

                  <ul className="flex flex-col gap-3 font-sans text-xs text-[#5C5450] border-b border-[#722F37]/5 pb-6 mb-6">
                    <li className="flex justify-between">
                      <span className="text-[#722F37]/90 font-medium">
                        Grape Cultivar:
                      </span>
                      <span className="text-[#201A18] font-medium">
                        {b.grape}
                      </span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-[#722F37]/90 font-medium">
                        Soil Class:
                      </span>
                      <span className="text-[#201A18] font-medium">
                        {b.soil}
                      </span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-[#722F37]/90 font-medium">
                        Elevation:
                      </span>
                      <span className="text-[#201A18] font-medium">
                        {b.elevation}
                      </span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-[#722F37]/90 font-medium">
                        Aspect & Slope:
                      </span>
                      <span className="text-[#201A18] font-medium">
                        {b.slope}
                      </span>
                    </li>
                  </ul>
                </div>

                <p className="font-sans text-xs leading-relaxed text-[#5C5450]">
                  {b.narrative}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Vineyard;
