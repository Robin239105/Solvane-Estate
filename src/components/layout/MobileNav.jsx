import React from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import LogoStacked from "../brand/LogoStacked";
import {
  mobileNavVariants,
  staggerContainer,
  staggerReveal,
} from "../../lib/motion";
import teaserMain from "../../assets/teaser_main.png";

export const MobileNav = ({ isOpen, onClose }) => {
  const navLinks = [
    { name: "Shop Wine", to: "/shop" },
    { name: "Vintages Guide", to: "/vintages" },
    { name: "Our Story", to: "/estate" },
    { name: "The Vineyard", to: "/estate/vineyard" },
    { name: "Winemaking", to: "/estate/winemaking" },
    { name: "Tasting Room", to: "/tasting-room" },
    { name: "Wine Club", to: "/wine-club" },
    { name: "Private Events", to: "/events" },
    { name: "Journal", to: "/journal" },
    { name: "Gallery", to: "/gallery" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={mobileNavVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="fixed inset-0 w-full h-screen bg-[#201A18] text-[#F6EFE2] z-50 overflow-y-auto flex flex-col justify-between py-8 px-6 lg:hidden"
        >
          {/* Subtle Vineyard Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-10 pointer-events-none"
            style={{
              backgroundImage: `url(${teaserMain})`,
            }}
          />

          {/* Top header bar in Mobile Nav */}
          <div className="relative flex justify-between items-center z-10">
            <LogoStacked
              theme="dark"
              className="scale-75 origin-top-left -mb-4"
            />
            <button
              onClick={onClose}
              className="p-2 text-[#F6EFE2] hover:text-[#D98E96] transition-colors focus:outline-none"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Links list */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="relative flex flex-col justify-center gap-6 my-10 z-10 pl-4"
          >
            {navLinks.map((link, idx) => (
              <motion.div key={idx} variants={staggerReveal}>
                <NavLink
                  to={link.to}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `font-sans text-2xl font-medium tracking-wide transition-all ${
                      isActive
                        ? "text-[#722F37] pl-2 border-l border-[#722F37]"
                        : "text-[#F6EFE2] hover:text-[#D98E96]"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </motion.div>
            ))}
          </motion.div>

          {/* Footer of Mobile Menu */}
          <div className="relative flex flex-col items-center gap-4 z-10 border-t border-[#F6EFE2]/10 pt-6 text-center text-xs tracking-widest text-[#F6EFE2]/60 font-sans">
            <p>SOLVANE ESTATE — EST. VINTAGE PROGRAM</p>
            <p className="font-sans italic text-sm text-[#D98E96]">
              "Where Sun Meets Soil"
            </p>
            <p className="mt-2 text-[10px]">
              Open Tue–Sun, 10am–6pm | Napa Valley
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileNav;
