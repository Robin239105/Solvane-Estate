import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { pageVariants, staggerContainer } from "../lib/motion";
import { wines } from "../data/wines";
import ProductCard from "../components/shop/ProductCard";
import ProductFilters from "../components/shop/ProductFilters";
import QuickViewModal from "../components/shop/QuickViewModal";
import teaserSecondary from "../assets/teaser_secondary.png";

export const Shop = () => {
  const [searchParams] = useSearchParams();
  const [selectedWine, setSelectedWine] = useState(null);
  const [filters, setFilters] = useState({
    type: "all",
    collection: "all",
    vintage: "all",
    sortBy: "featured",
  });

  // Sync category filter from query params
  useEffect(() => {
    const typeParam = searchParams.get("type") || "all";
    const collectionParam = searchParams.get("collection") || "all";
    const vintageParam = searchParams.get("vintage") || "all";
    setFilters({
      type: typeParam,
      collection: collectionParam,
      vintage: vintageParam,
      sortBy: "featured",
    });
  }, [searchParams]);

  const handleFilterChange = (newFilters) => {
    setFilters((prev) => ({ ...prev, ...newFilters }));
  };

  // Get distinct list of vintages for the filter dropdown
  const vintagesList = Array.from(new Set(wines.map((w) => w.vintage))).sort(
    (a, b) => b.localeCompare(a),
  );

  // Filter & Sort Logic
  const filteredWines = wines
    .filter((wine) => {
      const matchesType = filters.type === "all" || wine.type === filters.type;
      const matchesCollection =
        filters.collection === "all" ||
        (filters.collection === "reserve" && wine.isReserve) ||
        (filters.collection === "library" && wine.isLibrary);

      const matchesVintage =
        filters.vintage === "all" || wine.vintage === filters.vintage;

      return matchesType && matchesCollection && matchesVintage;
    })
    .sort((a, b) => {
      if (filters.sortBy === "price-asc") {
        return a.price - b.price;
      }
      if (filters.sortBy === "price-desc") {
        return b.price - a.price;
      }
      if (filters.sortBy === "rating-desc") {
        return b.rating - a.rating;
      }
      // 'featured' sorting: reserve/library items first, then by rating
      const aVal =
        (a.isReserve ? 2 : 0) + (a.isLibrary ? 2 : 0) + a.rating / 100;
      const bVal =
        (b.isReserve ? 2 : 0) + (b.isLibrary ? 2 : 0) + b.rating / 100;
      return bVal - aVal;
    });

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="w-full text-left"
    >
      {/* Subpage Hero Header */}
      <div className="relative h-[250px] md:h-[350px] w-full flex items-center bg-[#201A18] text-[#F6EFE2] overflow-hidden select-none">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: `url(${teaserSecondary})`,
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#201A18]/80 to-transparent" />
        <div className="relative max-w-7xl mx-auto w-full px-6 text-left pt-16">
          <span className="font-sans italic text-sm md:text-base text-[#D98E96] tracking-wider mb-2 block">
            Where Sun Meets Soil
          </span>
          <h1 className="font-sans text-3xl md:text-5xl font-medium tracking-wide">
            The Cellar Allocations
          </h1>
          <p className="font-sans text-xs md:text-sm text-[#F6EFE2]/75 max-w-md mt-4 leading-relaxed">
            Acquire unique, hand-harvested reserve vintages directly from our
            estate cellars. Designed for longevity and deep cellaring.
          </p>
        </div>
      </div>

      {/* Main Catalog Body */}
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col">
        {/* Filters bar */}
        <ProductFilters
          filters={filters}
          onChange={handleFilterChange}
          vintagesList={vintagesList}
        />

        {/* Results Info */}
        <div className="flex justify-between items-baseline font-sans text-xs text-[#5C5450] py-6 select-none">
          <span>Showing {filteredWines.length} releases</span>
          {filteredWines.length === 0 && (
            <button
              onClick={() =>
                setFilters({
                  type: "all",
                  collection: "all",
                  vintage: "all",
                  sortBy: "featured",
                })
              }
              className="text-[#722F37] underline uppercase font-semibold tracking-wider hover:text-[#521D23]"
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* Catalog Grid */}
        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {filteredWines.map((wine) => (
            <ProductCard
              key={wine.id}
              wine={wine}
              onQuickView={(w) => setSelectedWine(w)}
            />
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredWines.length === 0 && (
          <div className="text-center py-20 bg-[#F6EFE2] rounded-xs border border-[#722F37]/5">
            <span className="text-3xl">🍷</span>
            <h3 className="font-sans text-lg text-[#722F37] font-medium mt-3">
              No matching allocations found
            </h3>
            <p className="font-sans text-xs text-[#5C5450] mt-1 max-w-xs mx-auto">
              Try adjusting your selectors above or resetting your filters to
              view the complete catalog.
            </p>
          </div>
        )}
      </div>

      {/* Quick View Portal */}
      <QuickViewModal
        wine={selectedWine}
        onClose={() => setSelectedWine(null)}
      />
    </motion.div>
  );
};

export default Shop;
