import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { megaMenuVariants } from "../../lib/motion";

// Import local premium winery assets
import wineCabernet from "../../assets/wine_cabernet.png";
import wineChardonnay from "../../assets/wine_chardonnay.png";
import wineSparkling from "../../assets/wine_sparkling.png";

import teaserMain from "../../assets/teaser_main.png";
import gallery6 from "../../assets/gallery6.png";
import gallery5 from "../../assets/gallery5.png";

export const MegaMenu = ({ isOpen, variant, onClose }) => {
  const [hoveredCol, setHoveredCol] = useState(0);

  // Shop variant images to crossfade
  const shopFeatured = [
    {
      name: "Solvane Cabernet Sauvignon Reserve",
      price: "$145",
      image: wineCabernet,
      slug: "solvane-cabernet-sauvignon-reserve-2021",
    },
    {
      name: "Solvane Chardonnay Block 12",
      price: "$85",
      image: wineChardonnay,
      slug: "solvane-chardonnay-block-12-2022",
    },
    {
      name: "Solvane Grand Cuvée Sparkling",
      price: "$180",
      image: wineSparkling,
      slug: "solvane-grand-cuvee-sparkling-2018",
    },
  ];

  // Estate items (Using high-res Napa vineyard, historic cellars, etc.)
  const estateItems = [
    {
      title: "Our Story",
      subtitle: "A Century of Craft",
      image: teaserMain,
      to: "/estate",
    },
    {
      title: "Vineyard & Terroir",
      subtitle: "Where Sun Meets Soil",
      image: gallery6,
      to: "/estate/vineyard",
    },
    {
      title: "Winemaking Process",
      subtitle: "The Silence of Aging",
      image: gallery5,
      to: "/estate/winemaking",
    },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={megaMenuVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          // Floating obsidian glassmorphic card matching the capsule width
          className="absolute top-[72px] left-0 w-full bg-[#120e0d]/95 backdrop-blur-xl border border-white/10 rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.8)] z-40 text-[#F6EFE2] hidden lg:block overflow-hidden"
        >
          {variant === "shop" ? (
            <div className="grid grid-cols-4 gap-10 py-12 px-10">
              {/* Col 1 */}
              <div
                className="flex flex-col gap-4 border-r border-white/10 pr-6"
                onMouseEnter={() => setHoveredCol(0)}
              >
                <h3 className="font-sans font-bold text-[10px] tracking-[0.25em] text-[#D98E96] uppercase border-b border-white/10 pb-2 flex items-center gap-1.5">
                  <span className="w-1 h-1 bg-[#D98E96] rounded-full inline-block" />{" "}
                  By Type
                </h3>
                <ul className="flex flex-col gap-2 font-sans text-xs tracking-wider text-[#F6EFE2]/85">
                  <li>
                    <Link
                      to="/shop?type=red"
                      onClick={onClose}
                      className="group/item flex items-center justify-between py-1.5 border-b border-transparent hover:border-white/5 hover:text-[#D98E96] transition-all duration-300 hover:pl-2"
                    >
                      <span>Red Wines</span>
                      <span className="opacity-0 group-hover/item:opacity-100 translate-x-1.5 group-hover/item:translate-x-0 transition-all duration-300 text-[10px] text-[#D98E96] font-bold">
                        &rarr;
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/shop?type=white"
                      onClick={onClose}
                      className="group/item flex items-center justify-between py-1.5 border-b border-transparent hover:border-white/5 hover:text-[#D98E96] transition-all duration-300 hover:pl-2"
                    >
                      <span>White Wines</span>
                      <span className="opacity-0 group-hover/item:opacity-100 translate-x-1.5 group-hover/item:translate-x-0 transition-all duration-300 text-[10px] text-[#D98E96] font-bold">
                        &rarr;
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/shop?type=rose"
                      onClick={onClose}
                      className="group/item flex items-center justify-between py-1.5 border-b border-transparent hover:border-white/5 hover:text-[#D98E96] transition-all duration-300 hover:pl-2"
                    >
                      <span>Rosé Wines</span>
                      <span className="opacity-0 group-hover/item:opacity-100 translate-x-1.5 group-hover/item:translate-x-0 transition-all duration-300 text-[10px] text-[#D98E96] font-bold">
                        &rarr;
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/shop?type=sparkling"
                      onClick={onClose}
                      className="group/item flex items-center justify-between py-1.5 border-b border-transparent hover:border-white/5 hover:text-[#D98E96] transition-all duration-300 hover:pl-2"
                    >
                      <span>Sparkling Wines</span>
                      <span className="opacity-0 group-hover/item:opacity-100 translate-x-1.5 group-hover/item:translate-x-0 transition-all duration-300 text-[10px] text-[#D98E96] font-bold">
                        &rarr;
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Col 2 */}
              <div
                className="flex flex-col gap-4 border-r border-white/10 pr-6"
                onMouseEnter={() => setHoveredCol(1)}
              >
                <h3 className="font-sans font-bold text-[10px] tracking-[0.25em] text-[#D98E96] uppercase border-b border-white/10 pb-2 flex items-center gap-1.5">
                  <span className="w-1 h-1 bg-[#D98E96] rounded-full inline-block" />{" "}
                  By Vintage
                </h3>
                <ul className="flex flex-col gap-2 font-sans text-xs tracking-wider text-[#F6EFE2]/85">
                  <li>
                    <Link
                      to="/shop?vintage=2024"
                      onClick={onClose}
                      className="group/item flex items-center justify-between py-1.5 border-b border-transparent hover:border-white/5 hover:text-[#D98E96] transition-all duration-300 hover:pl-2"
                    >
                      <span>2024 Vintage</span>
                      <span className="opacity-0 group-hover/item:opacity-100 translate-x-1.5 group-hover/item:translate-x-0 transition-all duration-300 text-[10px] text-[#D98E96] font-bold">
                        &rarr;
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/shop?vintage=2022"
                      onClick={onClose}
                      className="group/item flex items-center justify-between py-1.5 border-b border-transparent hover:border-white/5 hover:text-[#D98E96] transition-all duration-300 hover:pl-2"
                    >
                      <span>2022 Vintage</span>
                      <span className="opacity-0 group-hover/item:opacity-100 translate-x-1.5 group-hover/item:translate-x-0 transition-all duration-300 text-[10px] text-[#D98E96] font-bold">
                        &rarr;
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/shop?vintage=2020"
                      onClick={onClose}
                      className="group/item flex items-center justify-between py-1.5 border-b border-transparent hover:border-white/5 hover:text-[#D98E96] transition-all duration-300 hover:pl-2"
                    >
                      <span>2020 Vintage</span>
                      <span className="opacity-0 group-hover/item:opacity-100 translate-x-1.5 group-hover/item:translate-x-0 transition-all duration-300 text-[10px] text-[#D98E96] font-bold">
                        &rarr;
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/shop?vintage=2018"
                      onClick={onClose}
                      className="group/item flex items-center justify-between py-1.5 border-b border-transparent hover:border-white/5 hover:text-[#D98E96] transition-all duration-300 hover:pl-2"
                    >
                      <span>2018 Vintage</span>
                      <span className="opacity-0 group-hover/item:opacity-100 translate-x-1.5 group-hover/item:translate-x-0 transition-all duration-300 text-[10px] text-[#D98E96] font-bold">
                        &rarr;
                      </span>
                    </Link>
                  </li>
                  <li className="mt-2">
                    <Link
                      to="/vintages"
                      onClick={onClose}
                      className="hover:text-[#D98E96] font-sans italic text-xs tracking-wide flex items-center gap-1 text-[#D98E96]"
                    >
                      View Vintage Guide &rarr;
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Col 3 */}
              <div
                className="flex flex-col gap-4 border-r border-white/10 pr-6"
                onMouseEnter={() => setHoveredCol(2)}
              >
                <h3 className="font-sans font-bold text-[10px] tracking-[0.25em] text-[#D98E96] uppercase border-b border-white/10 pb-2 flex items-center gap-1.5">
                  <span className="w-1 h-1 bg-[#D98E96] rounded-full inline-block" />{" "}
                  Collections
                </h3>
                <ul className="flex flex-col gap-2 font-sans text-xs tracking-wider text-[#F6EFE2]/85">
                  <li>
                    <Link
                      to="/shop?collection=reserve"
                      onClick={onClose}
                      className="group/item flex items-center justify-between py-1.5 border-b border-transparent hover:border-white/5 hover:text-[#D98E96] transition-all duration-300 hover:pl-2"
                    >
                      <span>Reserve Series</span>
                      <span className="opacity-0 group-hover/item:opacity-100 translate-x-1.5 group-hover/item:translate-x-0 transition-all duration-300 text-[10px] text-[#D98E96] font-bold">
                        &rarr;
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/shop?collection=library"
                      onClick={onClose}
                      className="group/item flex items-center justify-between py-1.5 border-b border-transparent hover:border-white/5 hover:text-[#D98E96] transition-all duration-300 hover:pl-2"
                    >
                      <span>Library Releases</span>
                      <span className="opacity-0 group-hover/item:opacity-100 translate-x-1.5 group-hover/item:translate-x-0 transition-all duration-300 text-[10px] text-[#D98E96] font-bold">
                        &rarr;
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/wine-club"
                      onClick={onClose}
                      className="group/item flex items-center justify-between py-1.5 border-b border-transparent hover:border-white/5 hover:text-[#D98E96] transition-all duration-300 hover:pl-2"
                    >
                      <span>Wine Club Exclusives</span>
                      <span className="opacity-0 group-hover/item:opacity-100 translate-x-1.5 group-hover/item:translate-x-0 transition-all duration-300 text-[10px] text-[#D98E96] font-bold">
                        &rarr;
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Col 4 - Featured Editorial */}
              <div className="bg-white/5 p-5 flex flex-col gap-3 rounded-2xl border border-white/5 shadow-inner">
                <span className="font-sans text-[8px] tracking-[0.2em] font-extrabold text-[#D98E96] uppercase">
                  Featured Release
                </span>
                <div className="relative h-36 overflow-hidden rounded-xl bg-[#161211] border border-white/10">
                  <img
                    src={shopFeatured[hoveredCol].image}
                    alt={shopFeatured[hoveredCol].name}
                    className="w-full h-full object-cover transition-all duration-700 ease-out hover:scale-105"
                    loading="lazy"
                  />

                  <div className="absolute inset-0 bg-black/10 hover:bg-transparent transition-colors duration-300" />
                </div>
                <div className="flex flex-col gap-1 text-left">
                  <h4 className="font-sans text-xs font-bold text-[#F6EFE2] line-clamp-1 uppercase tracking-wide">
                    {shopFeatured[hoveredCol].name}
                  </h4>
                  <div className="flex justify-between items-center mt-1 border-t border-white/5 pt-2">
                    <span className="font-sans font-extrabold text-xs text-[#D98E96]">
                      {shopFeatured[hoveredCol].price}
                    </span>
                    <Link
                      to={`/shop/${shopFeatured[hoveredCol].slug}`}
                      onClick={onClose}
                      className="font-sans text-[9px] uppercase tracking-widest font-bold text-[#F6EFE2] hover:text-[#D98E96] transition-colors"
                    >
                      Shop Now &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            // Estate variant - 3-column image tiles
            <div className="grid grid-cols-3 gap-8 py-10 px-10">
              {estateItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.to}
                  onClick={onClose}
                  className="group relative h-60 overflow-hidden rounded-2xl border border-white/10 shadow-md"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-103"
                    loading="lazy"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#120e0d]/90 via-[#120e0d]/40 to-transparent transition-opacity duration-300 z-10" />

                  {/* Text */}
                  <div className="absolute bottom-5 left-5 text-left flex flex-col z-20">
                    <span className="font-sans italic text-[10px] tracking-wide text-[#D98E96] mb-1 font-bold">
                      {item.subtitle}
                    </span>
                    <h3 className="font-sans text-sm font-bold text-white uppercase tracking-widest group-hover:text-[#D98E96] transition-colors">
                      {item.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MegaMenu;
