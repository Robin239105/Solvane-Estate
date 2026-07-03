import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LogoStacked from "../brand/LogoStacked";
import Button from "../ui/Button";
import teaserMain from "../../assets/teaser_main.png";

export const AgeGateModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [refused, setRefused] = useState(false);

  useEffect(() => {
    // Check session state
    const isVerified = sessionStorage.getItem("solvane_age_verified");
    if (!isVerified) {
      setIsOpen(true);
      document.body.style.overflow = "hidden"; // block scrolling
    }
  }, []);

  const handleVerify = () => {
    sessionStorage.setItem("solvane_age_verified", "true");
    setIsOpen(false);
    document.body.style.overflow = "unset"; // restore scrolling
  };

  const handleRefuse = () => {
    setRefused(true);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 w-full h-screen bg-[#201A18] z-[9999] flex items-center justify-center p-6 select-none"
        >
          {/* Background image overlay */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-15"
            style={{
              backgroundImage: `url(${teaserMain})`,
            }}
          />

          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.6,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="relative max-w-md w-full bg-[#201A18] border border-[#722F37]/25 p-8 text-center flex flex-col items-center gap-6 rounded-xs shadow-2xl"
          >
            <LogoStacked theme="dark" className="scale-90" />

            <div className="w-12 h-[1px] bg-[#722F37]/40" />

            {!refused ? (
              <>
                <div className="flex flex-col gap-2">
                  <h3 className="font-sans text-[#F6EFE2] text-xl md:text-2xl">
                    Are you of legal drinking age?
                  </h3>
                  <p className="font-sans text-xs text-[#F6EFE2]/60 tracking-wider leading-relaxed">
                    You must be 21 years of age or older (or the legal drinking
                    age in your country of residence) to enter Solvane Estate.
                  </p>
                </div>

                <div className="flex gap-4 w-full mt-2">
                  <Button
                    variant="solid-cabernet"
                    onClick={handleVerify}
                    className="flex-1 !py-3 !text-[10px]"
                  >
                    I am 21+
                  </Button>
                  <Button
                    variant="outline-cream"
                    onClick={handleRefuse}
                    className="flex-1 !py-3 !text-[10px]"
                  >
                    No
                  </Button>
                </div>
              </>
            ) : (
              <div className="flex flex-col gap-4 py-4 animate-fade-in">
                <h3 className="font-sans text-[#D98E96] text-xl">
                  Access Restricted
                </h3>
                <p className="font-sans text-xs text-[#F6EFE2]/60 tracking-wider leading-relaxed">
                  We apologize, but you must be of legal drinking age to explore
                  our collections and estate. Thank you for your interest in
                  Solvane Estate.
                </p>
              </div>
            )}

            <p className="font-sans text-[9px] tracking-widest text-[#F6EFE2]/40 uppercase mt-4">
              Where Sun Meets Soil
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AgeGateModal;
