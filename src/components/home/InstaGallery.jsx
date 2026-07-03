import React from "react";
import { motion } from "framer-motion";

// Import local high-resolution generated gallery images
import gallery1 from "../../assets/gallery1.png";
import gallery2 from "../../assets/gallery2.png";
import gallery3 from "../../assets/gallery3.png";
import gallery4 from "../../assets/gallery4.png";
import gallery5 from "../../assets/gallery5.png";
import gallery6 from "../../assets/gallery6.png";

export const InstaGallery = () => {
  // Curated editorial images representing vineyard life, cellars, and tastings
  const galleryItems = [
    {
      url: gallery1,
      alt: "Grape clusters close-up with morning dew",
    },
    {
      url: gallery2,
      alt: "Red wine glass poured on a cellar barrel",
    },
    {
      url: gallery3,
      alt: "Happy couple toasting with wine at the vineyard table",
    },
    {
      url: gallery4,
      alt: "Gourmet cheese and charcuterie wine pairing board",
    },
    {
      url: gallery5,
      alt: "Rows of oak wine barrels aging inside a historic cellar",
    },
    {
      url: gallery6,
      alt: "Sun-drenched winery estate chateau at sunset",
    },
  ];

  return (
    <section className="py-24 px-6 bg-[#FBF8F3]">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Calligraphic Eyebrow */}
        <span className="font-script text-4xl text-[#722F37] mb-2 leading-none text-center">
          Follow The Season
        </span>

        {/* Editorial Heading */}
        <h2 className="font-sans text-3xl md:text-5xl font-light text-[#722F37] mb-12 text-center uppercase tracking-wider">
          Scenes from the{" "}
          <span className="font-script text-4xl md:text-5xl text-[#D98E96] tracking-normal normal-case font-normal inline-block mt-1">
            Estate
          </span>
        </h2>

        {/* Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 w-full">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.06 }}
              className="relative aspect-square overflow-hidden rounded-xl border border-[#722F37]/10 group cursor-pointer shadow-sm hover:shadow-lg transition-all duration-500"
            >
              <img
                src={item.url}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />

              {/* Frosted Wine glassmorphism overlay on hover */}
              <div className="absolute inset-0 bg-[#722F37]/80 backdrop-blur-xs flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 p-4">
                <span className="font-monk text-[9px] tracking-widest text-[#F6EFE2] uppercase mb-1">
                  Solvane Estate
                </span>
                <span className="text-[#F6EFE2]/80 font-sans text-[8px] tracking-[0.25em] uppercase font-bold">
                  View Gallery
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstaGallery;
