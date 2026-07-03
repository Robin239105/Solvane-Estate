import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ChevronRight,
  ShoppingBag,
  ArrowLeft,
  ShieldCheck,
  Flame,
  Compass,
} from "lucide-react";
import { wines } from "../data/wines";
import { useCartStore } from "../store/cartStore";
import { pageVariants } from "../lib/motion";
import Button from "../components/ui/Button";
import Badge from "../components/ui/Badge";
import slide4 from "../assets/slide4.png";
import slide2 from "../assets/slide2.png";
import gallery2 from "../assets/gallery2.png";

export const ProductDetail = () => {
  const { slug } = useParams();
  const { addItem } = useCartStore();
  const [quantity, setQuantity] = useState(1);

  // Look up product
  const wine = wines.find((w) => w.slug === slug);

  if (!wine) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center p-6 bg-[#FBF8F3]">
        <h2 className="font-sans text-3xl text-[#722F37] mb-4">
          Vintage Not Found
        </h2>
        <p className="font-sans text-sm text-[#5C5450] mb-6">
          The requested allocation slug does not exist in our historical ledger.
        </p>
        <Button variant="outline-dark" to="/shop">
          Return to Cellar
        </Button>
      </div>
    );
  }

  // Cross-sell items (pick 3 other random wines)
  const crossSellWines = wines.filter((w) => w.id !== wine.id).slice(0, 3);

  const handleAddToCart = () => {
    // Add multiple quantities
    for (let i = 0; i < quantity; i++) {
      addItem({
        id: wine.id,
        name: wine.name,
        vintage: wine.vintage,
        price: wine.price,
        image: wine.image,
      });
    }
  };

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="w-full text-left pt-32 pb-20 px-6 bg-[#FBF8F3]"
    >
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto flex items-center gap-2 font-sans text-[10px] tracking-widest uppercase text-[#5C5450] mb-8 select-none">
        <Link to="/shop" className="hover:text-[#722F37] transition-colors">
          Cellar
        </Link>
        <ChevronRight className="w-3 h-3 text-[#722F37]/30" />
        <span className="text-[#722F37]">{wine.vintage} Vintage</span>
        <ChevronRight className="w-3 h-3 text-[#722F37]/30" />
        <span className="text-[#722F37] font-semibold line-clamp-1">
          {wine.name}
        </span>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Left Column: Image Gallery Frame */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <div className="bg-[#F6EFE2] rounded-xs overflow-hidden flex items-center justify-center p-4 border border-[#722F37]/5 aspect-4/5">
            <img
              src={wine.image}
              alt={wine.name}
              className="w-full h-full object-cover rounded-xs"
              loading="lazy"
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-[#F6EFE2] aspect-square rounded-xs overflow-hidden border border-[#722F37]/5 p-2">
              <img
                src={slide4}
                alt="Detail close"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="bg-[#F6EFE2] aspect-square rounded-xs overflow-hidden border border-[#722F37]/5 p-2">
              <img
                src={slide2}
                alt="Detail barrel"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="bg-[#F6EFE2] aspect-square rounded-xs overflow-hidden border border-[#722F37]/5 p-2">
              <img
                src={gallery2}
                alt="Detail glass"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Right Column: Detailed Purchase & Tasting Notes */}
        <div className="lg:col-span-7 flex flex-col">
          {/* Header Info */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              {wine.isReserve && (
                <Badge variant="cabernet">Reserve Selection</Badge>
              )}
              {wine.isLibrary && (
                <Badge variant="cabernet">Library Cellar</Badge>
              )}
              <Badge variant="rose">{wine.rating} points</Badge>
            </div>

            <h1 className="font-sans text-3xl md:text-5xl font-medium text-[#722F37] mt-2">
              {wine.name}
            </h1>

            <span className="font-sans italic text-lg text-[#521D23] mt-1">
              {wine.origin} &bull; Vintage {wine.vintage}
            </span>
          </div>

          <div className="w-16 h-[1px] bg-[#722F37] my-6" />

          {/* Pricing & Cart Action */}
          <div className="bg-[#F6EFE2] p-6 rounded-xs border border-[#722F37]/5 mb-8 flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-4">
            <div className="flex flex-col text-left">
              <span className="font-sans text-[10px] tracking-wider text-[#5C5450] uppercase font-semibold">
                Allocation Price
              </span>
              <span className="font-sans text-3xl font-bold text-[#201A18] mt-1">
                ${wine.price}
              </span>
            </div>

            <div className="flex items-center gap-4">
              {/* Quantity Select */}
              <div className="flex items-center border border-[#722F37]/15 rounded-xs bg-[#FBF8F3] h-[48px]">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-3 hover:text-[#722F37] text-[#5C5450] font-sans font-bold text-sm h-full focus:outline-none"
                >
                  -
                </button>
                <span className="px-2 font-sans font-semibold text-sm text-[#201A18] select-none">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="px-3 hover:text-[#722F37] text-[#5C5450] font-sans font-bold text-sm h-full focus:outline-none"
                >
                  +
                </button>
              </div>

              {/* Purchase button */}
              <Button
                variant="solid-cabernet"
                onClick={handleAddToCart}
                className="flex-1 sm:flex-initial flex items-center gap-2.5 h-[48px] !px-8"
              >
                <ShoppingBag className="w-4 h-4" /> Add to Allocation
              </Button>
            </div>
          </div>

          {/* Main Description */}
          <p className="font-sans text-sm md:text-base text-[#5C5450] leading-relaxed mb-8">
            {wine.description}
          </p>

          {/* Collapsible/Tabbed content structure */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-[#722F37]/10 pt-8 mb-8">
            {/* Tasting Notes */}
            <div className="flex flex-col gap-4 text-left">
              <h3 className="font-sans font-semibold text-xs tracking-widest text-[#722F37] uppercase flex items-center gap-2">
                <Compass className="w-4 h-4 text-[#722F37]" /> Tasting Profile
              </h3>

              <div className="flex flex-col gap-3 font-sans text-xs leading-relaxed text-[#201A18]">
                <p>
                  <strong className="font-sans text-[9px] tracking-wider uppercase text-[#521D23] block mb-0.5">
                    Nose
                  </strong>
                  {wine.tastingNotes.nose}
                </p>
                <p>
                  <strong className="font-sans text-[9px] tracking-wider uppercase text-[#521D23] block mb-0.5">
                    Palate
                  </strong>
                  {wine.tastingNotes.palate}
                </p>
                <p>
                  <strong className="font-sans text-[9px] tracking-wider uppercase text-[#521D23] block mb-0.5">
                    Finish
                  </strong>
                  {wine.tastingNotes.finish}
                </p>
              </div>
            </div>

            {/* Technical analysis & Pairings */}
            <div className="flex flex-col gap-6 text-left">
              {/* Technical Specifications */}
              <div className="flex flex-col gap-3">
                <h3 className="font-sans font-semibold text-xs tracking-widest text-[#722F37] uppercase flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#722F37]" /> Chemistry &
                  Cave Log
                </h3>
                <ul className="flex flex-col gap-2 font-sans text-xs text-[#5C5450]">
                  <li className="flex justify-between border-b border-[#722F37]/5 pb-1">
                    <span className="text-[#722F37]/90 font-medium">
                      Harvest Date:
                    </span>
                    <span className="text-[#201A18]">
                      {wine.details.harvestDate}
                    </span>
                  </li>
                  <li className="flex justify-between border-b border-[#722F37]/5 pb-1">
                    <span className="text-[#722F37]/90 font-medium">
                      Barrel Program:
                    </span>
                    <span className="text-[#201A18]">
                      {wine.details.barrelAging}
                    </span>
                  </li>
                  <li className="flex justify-between border-b border-[#722F37]/5 pb-1">
                    <span className="text-[#722F37]/90 font-medium">
                      pH / Total Acid:
                    </span>
                    <span className="text-[#201A18]">
                      {wine.details.ph} pH / {wine.details.acidity}
                    </span>
                  </li>
                  <li className="flex justify-between border-b border-[#722F37]/5 pb-1">
                    <span className="text-[#722F37]/90 font-medium">
                      Serving Temp:
                    </span>
                    <span className="text-[#201A18]">{wine.servingTemp}</span>
                  </li>
                </ul>
              </div>

              {/* Pairings */}
              <div className="flex flex-col gap-2.5">
                <h3 className="font-sans font-semibold text-xs tracking-widest text-[#722F37] uppercase flex items-center gap-2">
                  <Flame className="w-4 h-4 text-[#722F37]" /> Culinary Pairings
                </h3>
                <ul className="list-disc pl-4 font-sans text-xs text-[#5C5450] flex flex-col gap-1">
                  {wine.pairings.map((pair, index) => (
                    <li key={index} className="leading-relaxed">
                      {pair}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 font-sans text-[10px] tracking-widest uppercase font-semibold text-[#722F37] hover:text-[#722F37] transition-all"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back to complete cellar
            </Link>
          </div>
        </div>
      </div>

      {/* Complete the Set Cross Sell */}
      <div className="max-w-7xl mx-auto border-t border-[#722F37]/10 pt-20 mt-20 text-center">
        <span className="font-sans italic text-base text-[#521D23] mb-2 block">
          Curated Suggestions
        </span>
        <h2 className="font-sans text-3xl font-medium text-[#722F37] mb-12">
          Complete the Allocation Set
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {crossSellWines.map((crossWine) => (
            <div
              key={crossWine.id}
              className="bg-[#F6EFE2]/40 border border-[#722F37]/5 p-5 rounded-xs flex flex-col hover:shadow-lg transition-all duration-300"
            >
              <div className="bg-[#F6EFE2] rounded-xs aspect-square overflow-hidden flex items-center justify-center p-3 relative mb-4">
                <img
                  src={crossWine.image}
                  alt={crossWine.name}
                  className="w-full h-full object-cover rounded-xs"
                  loading="lazy"
                />
              </div>
              <span className="font-sans text-[9px] tracking-widest text-[#5C5450] uppercase font-semibold">
                {crossWine.origin}
              </span>
              <Link
                to={`/shop/${crossWine.slug}`}
                className="font-sans text-base font-semibold text-[#722F37] hover:text-[#722F37] transition-colors mt-1 line-clamp-1"
              >
                {crossWine.name}
              </Link>
              <div className="flex justify-between items-baseline mt-4 border-t border-[#722F37]/5 pt-3">
                <span className="font-sans italic text-xs text-[#521D23]">
                  Vintage {crossWine.vintage}
                </span>
                <span className="font-sans font-bold text-xs text-[#201A18]">
                  ${crossWine.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProductDetail;
