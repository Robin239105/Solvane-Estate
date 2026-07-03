import React from "react";
import { Link } from "react-router-dom";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { ShoppingBag, Eye } from "lucide-react";
import { useCartStore } from "../../store/cartStore";

export const ProductCard = ({ wine, onQuickView }) => {
  const { addItem } = useCartStore();

  // Hover tilt effect coordinates
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const rotateX = useTransform(y, [0, 1], [8, -8]);
  const rotateY = useTransform(x, [0, 1], [-8, 8]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width);
    y.set(mouseY / height);
  };

  const handleMouseLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="group flex flex-col bg-[#FBF8F3] border border-[#722F37]/15 p-6 rounded-2xl shadow-md hover:shadow-xl hover:border-[#722F37]/45 transition-all duration-500 text-left select-none relative h-full justify-between overflow-hidden"
    >
      {/* 3D Tilt Card Image Container - Dark Obsidian background to make cream wine labels POP */}
      <div className="perspective-1000 w-full h-[340px] bg-[#120e0d]/95 rounded-xl relative overflow-hidden flex items-center justify-center p-4">
        <motion.div
          style={{ rotateX, rotateY }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="w-full h-full flex items-center justify-center relative cursor-pointer"
        >
          {/* Main image - bottle or label closeup */}
          <img
            src={wine.image}
            alt={wine.name}
            className="h-full object-contain transition-transform duration-700 ease-out group-hover:scale-105"
            loading="lazy"
          />

          {/* Subtle lighting reflex overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </motion.div>

        {/* Top Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-1.5 z-10">
          {wine.isReserve && (
            <span className="bg-[#D98E96] text-[#120e0d] text-[8px] font-extrabold tracking-widest px-2.5 py-1 rounded-sm shadow-md uppercase select-none">
              Reserve
            </span>
          )}
          {wine.isLibrary && (
            <span className="bg-[#722F37] text-[#F6EFE2] border border-[#722F37] text-[8px] font-extrabold tracking-widest px-2.5 py-1 rounded-sm shadow-md uppercase select-none">
              Library
            </span>
          )}
          {wine.rating >= 95 && (
            <span className="bg-[#722F37] text-[#F6EFE2] border border-[#D98E96]/35 text-[8px] font-extrabold tracking-widest px-2.5 py-1 rounded-full shadow-md select-none">
              {wine.rating} PTS
            </span>
          )}
        </div>

        {/* Hover Quick Actions */}
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
          {onQuickView && (
            <button
              onClick={() => onQuickView(wine)}
              className="p-3 bg-[#FBF8F3] text-[#722F37] rounded-full hover:bg-[#722F37] hover:text-[#FBF8F3] transition-colors shadow-lg cursor-pointer"
              aria-label="Quick view"
            >
              <Eye className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={() =>
              addItem({
                id: wine.id,
                name: wine.name,
                vintage: wine.vintage,
                price: wine.price,
                image: wine.image,
              })
            }
            className="p-3 bg-[#722F37] text-[#FBF8F3] rounded-full hover:bg-[#521D23] transition-colors shadow-lg cursor-pointer"
            aria-label="Add to cart"
          >
            <ShoppingBag className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Info Content */}
      <div className="flex flex-col mt-5">
        {/* Appellation/Origin using font-monk for authentic, traditional seal look */}
        <span className="font-monk text-[9px] tracking-wider text-[#D98E96] uppercase mb-1">
          {wine.origin}
        </span>

        {/* Name using sans-serif bold uppercase winery styling */}
        <Link
          to={`/shop/${wine.slug}`}
          className="font-sans text-lg font-bold text-[#722F37] hover:text-[#521D23] transition-colors mt-1 line-clamp-1 uppercase tracking-wider"
        >
          {wine.name}
        </Link>

        {/* Quote/Description */}
        <p className="font-sans text-xs text-[#5C5450] mt-2 line-clamp-2 leading-relaxed font-light">
          {wine.description}
        </p>

        {/* Footer: script vintage and price */}
        <div className="flex justify-between items-baseline mt-5 border-t border-[#722F37]/15 pt-4">
          <span className="font-script text-2xl text-[#722F37] leading-none">
            Vintage {wine.vintage}
          </span>
          <span className="font-sans font-extrabold text-base text-[#201A18] tracking-wide">
            ${wine.price}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
