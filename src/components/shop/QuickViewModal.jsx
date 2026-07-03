import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShoppingBag } from "lucide-react";
import { useCartStore } from "../../store/cartStore";
import Button from "../ui/Button";
import Badge from "../ui/Badge";

export const QuickViewModal = ({ wine, onClose }) => {
  const { addItem } = useCartStore();

  const handleAdd = () => {
    if (!wine) return;
    addItem({
      id: wine.id,
      name: wine.name,
      vintage: wine.vintage,
      price: wine.price,
      image: wine.image,
    });
    onClose();
  };

  return (
    <AnimatePresence>
      {wine && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#201A18] z-[120] cursor-pointer"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-[121] flex items-center justify-center p-4 pointer-events-none select-none">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 250 }}
              className="bg-[#FBF8F3] text-[#201A18] w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-xs p-6 md:p-8 flex flex-col md:flex-row gap-8 relative shadow-2xl pointer-events-auto border border-[#722F37]/10"
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-1.5 hover:text-[#722F37] text-[#5C5450] transition-colors focus:outline-none z-10"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Left Column: Image */}
              <div className="md:w-5/12 bg-[#F6EFE2] rounded-xs overflow-hidden flex items-center justify-center relative min-h-[300px]">
                <img
                  src={wine.image}
                  alt={wine.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />

                {/* Score badge absolute overlay */}
                <div className="absolute top-4 left-4 flex flex-col gap-1.5 animate-fade-in">
                  {wine.isReserve && <Badge variant="cabernet">Reserve</Badge>}
                  {wine.rating && (
                    <Badge variant="rose">{wine.rating} Points</Badge>
                  )}
                </div>
              </div>

              {/* Right Column: Info */}
              <div className="md:w-7/12 flex flex-col justify-between text-left">
                <div className="flex flex-col">
                  <span className="font-sans text-[11px] tracking-widest text-[#722F37] font-semibold uppercase">
                    {wine.origin}
                  </span>
                  <h3 className="font-sans text-2xl md:text-3xl font-semibold text-[#722F37] mt-1.5 leading-tight">
                    {wine.name}
                  </h3>
                  <span className="font-sans italic text-sm text-[#521D23] mt-1">
                    Vintage {wine.vintage} | {wine.abv} ABV
                  </span>

                  <div className="w-12 h-[1px] bg-[#722F37] my-4" />

                  <p className="font-sans text-xs md:text-sm text-[#5C5450] leading-relaxed mb-5">
                    {wine.description}
                  </p>

                  {/* Tasting Notes Highlight */}
                  <div className="bg-[#F6EFE2] p-4 rounded-xs border border-[#722F37]/5 mb-5 flex flex-col gap-1">
                    <span className="font-sans text-[9px] uppercase tracking-wider text-[#722F37] font-semibold">
                      Tasting Highlights
                    </span>
                    <p className="font-sans text-xs text-[#201A18] leading-relaxed">
                      <strong className="font-sans text-[9px] tracking-wider uppercase font-semibold text-[#521D23]">
                        Nose:
                      </strong>{" "}
                      {wine.tastingNotes.nose}
                    </p>
                    <p className="font-sans text-xs text-[#201A18] leading-relaxed mt-1">
                      <strong className="font-sans text-[9px] tracking-wider uppercase font-semibold text-[#521D23]">
                        Palate:
                      </strong>{" "}
                      {wine.tastingNotes.palate}
                    </p>
                  </div>

                  {/* Quick Specs */}
                  <div className="grid grid-cols-2 gap-4 border-t border-[#722F37]/5 pt-4 text-[10px] tracking-wider font-sans text-[#5C5450] uppercase font-semibold mb-6">
                    <div>
                      <span className="text-[#722F37]">Temp:</span>{" "}
                      {wine.servingTemp}
                    </div>
                    <div>
                      <span className="text-[#722F37]">Volume:</span>{" "}
                      {wine.volume}
                    </div>
                  </div>
                </div>

                {/* Add to Cart and Price */}
                <div className="flex items-center justify-between gap-6 border-t border-[#722F37]/10 pt-5 mt-auto">
                  <div className="flex flex-col leading-none">
                    <span className="font-sans text-[10px] tracking-wider text-[#5C5450] uppercase font-semibold">
                      Allocation Price
                    </span>
                    <span className="font-sans text-2xl font-bold text-[#201A18] mt-1.5">
                      ${wine.price}
                    </span>
                  </div>
                  <Button
                    variant="solid-cabernet"
                    onClick={handleAdd}
                    className="flex-1 flex items-center gap-2.5 !py-3.5"
                  >
                    <ShoppingBag className="w-4 h-4" /> Add to Allocation
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default QuickViewModal;
