import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { pageVariants } from "../lib/motion";
import SectionHeading from "../components/ui/SectionHeading";
import gallery1 from "../assets/gallery1.png";
import gallery2 from "../assets/gallery2.png";
import gallery3 from "../assets/gallery3.png";
import gallery5 from "../assets/gallery5.png";
import slide1 from "../assets/slide1.png";
import slide3 from "../assets/slide3.png";
import slide4 from "../assets/slide4.png";
import slide5 from "../assets/slide5.png";
import heroBackground from "../assets/hero_background.png";

export const Gallery = () => {
  const [lightboxIdx, setLightboxIdx] = useState(null);

  const galleryItems = [
    {
      id: 0,
      url: gallery1,
      category: "grapes",
      title: "Harvest Grapes",
      aspect: "aspect-3/4",
    },
    {
      id: 1,
      url: gallery2,
      category: "glassware",
      title: "Red Wine Pour",
      aspect: "aspect-square",
    },
    {
      id: 2,
      url: slide5,
      category: "cellar",
      title: "Vance working the cellar",
      aspect: "aspect-4/3",
    },
    {
      id: 3,
      url: gallery3,
      category: "glassware",
      title: "Sommelier Tastings",
      aspect: "aspect-3/4",
    },
    {
      id: 4,
      url: slide3,
      category: "vineyard",
      title: "Estate morning dew",
      aspect: "aspect-square",
    },
    {
      id: 5,
      url: slide1,
      category: "vineyard",
      title: "Sunset ridge blocks",
      aspect: "aspect-16/10",
    },
    {
      id: 6,
      url: gallery5,
      category: "cellar",
      title: "Carved stone barrel tunnel",
      aspect: "aspect-4/3",
    },
    {
      id: 7,
      url: slide4,
      category: "vineyard",
      title: "Harvest crates",
      aspect: "aspect-3/4",
    },
  ];

  const handleNext = (e) => {
    e.stopPropagation();
    if (lightboxIdx !== null) {
      setLightboxIdx((lightboxIdx + 1) % galleryItems.length);
    }
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    if (lightboxIdx !== null) {
      setLightboxIdx(
        (lightboxIdx - 1 + galleryItems.length) % galleryItems.length,
      );
    }
  };

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="w-full text-left bg-[#FBF8F3] min-h-screen"
    >
      {/* Subpage Hero */}
      <div className="relative h-[250px] md:h-[350px] w-full flex items-center bg-[#201A18] text-[#F6EFE2] overflow-hidden select-none">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: `url(${heroBackground})`,
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#201A18] to-transparent" />
        <div className="relative max-w-7xl mx-auto w-full px-6 text-center pt-16">
          <span className="font-sans italic text-sm md:text-base text-[#D98E96] tracking-wider mb-2 block">
            Visual Library
          </span>
          <h1 className="font-sans text-3xl md:text-5xl font-medium tracking-wide">
            The Estate Gallery
          </h1>
          <p className="font-sans text-xs md:text-sm text-[#F6EFE2]/75 max-w-xl mx-auto mt-4 leading-relaxed">
            A photographic ledger detailing the changing of seasonal leaves,
            early-morning harvest, and dark cold tunnels.
          </p>
        </div>
      </div>

      {/* Masonry Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="The Chronicle"
            title="Moments of Soil & Light"
            className="mb-16"
          />

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {galleryItems.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => setLightboxIdx(idx)}
                className={`break-inside-avoid relative overflow-hidden rounded-xs border border-[#722F37]/5 group cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 ${item.aspect}`}
              >
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-103"
                  loading="lazy"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[#201A18]/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex flex-col items-center gap-1.5 text-[#F6EFE2]">
                    <ZoomIn className="w-5 h-5 text-[#722F37]" />
                    <span className="font-sans italic text-sm">
                      {item.title}
                    </span>
                    <span className="font-sans text-[8px] uppercase tracking-widest text-[#F6EFE2]/60">
                      {item.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal Portal */}
      <AnimatePresence>
        {lightboxIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxIdx(null)}
            className="fixed inset-0 bg-black/95 z-[9999] flex items-center justify-center p-6 select-none"
          >
            {/* Close Button */}
            <button
              onClick={() => setLightboxIdx(null)}
              className="absolute top-6 right-6 p-2 text-[#F6EFE2] hover:text-[#722F37] transition-colors focus:outline-none cursor-pointer"
              aria-label="Close Lightbox"
            >
              <X className="w-7 h-7" />
            </button>

            {/* Previous Button */}
            <button
              onClick={handlePrev}
              className="absolute left-4 p-2 text-[#F6EFE2] hover:text-[#722F37] transition-colors focus:outline-none cursor-pointer"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            {/* Main Image */}
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="max-w-4xl max-h-[80vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()} // stop close on image click
            >
              <img
                src={galleryItems[lightboxIdx].url}
                alt={galleryItems[lightboxIdx].title}
                className="max-w-full max-h-[70vh] object-contain border border-white/5 rounded-xs"
              />

              <span className="font-sans text-[#F6EFE2] text-lg mt-5">
                {galleryItems[lightboxIdx].title}
              </span>
              <span className="font-sans text-[10px] uppercase tracking-widest text-[#F6EFE2]/50 mt-1">
                {galleryItems[lightboxIdx].category}
              </span>
            </motion.div>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="absolute right-4 p-2 text-[#F6EFE2] hover:text-[#722F37] transition-colors focus:outline-none cursor-pointer"
              aria-label="Next image"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Gallery;
