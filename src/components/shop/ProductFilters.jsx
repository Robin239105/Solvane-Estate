import React from "react";

export const ProductFilters = ({ filters, onChange, vintagesList }) => {
  const wineTypes = [
    { value: "all", label: "All Varietals" },
    { value: "red", label: "Red" },
    { value: "white", label: "White" },
    { value: "rose", label: "Rosé" },
    { value: "sparkling", label: "Sparkling" },
  ];

  const collections = [
    { value: "all", label: "All Collections" },
    { value: "reserve", label: "Reserve Series" },
    { value: "library", label: "Library Series" },
  ];

  const sortOptions = [
    { value: "featured", label: "Featured Allocations" },
    { value: "price-asc", label: "Price: Low to High" },
    { value: "price-desc", label: "Price: High to Low" },
    { value: "rating-desc", label: "Critical Rating" },
  ];

  return (
    <div className="w-full flex flex-col lg:flex-row gap-6 justify-between items-start lg:items-center py-6 border-b border-[#722F37]/10 font-sans">
      {/* Filters Group */}
      <div className="flex flex-wrap gap-4 w-full lg:w-auto">
        {/* Type Filter */}
        <div className="flex flex-col gap-1.5 shrink-0">
          <label className="text-[9px] uppercase tracking-widest font-semibold text-[#5C5450]">
            Category
          </label>
          <select
            value={filters.type}
            onChange={(e) => onChange({ type: e.target.value })}
            className="bg-[#F6EFE2] border border-[#722F37]/10 text-xs px-3.5 py-2.5 tracking-wider focus:outline-none focus:border-[#722F37] rounded-xs select-none"
          >
            {wineTypes.map((t) => (
              <option key={t.value} value={t.value}>
                {t.label}
              </option>
            ))}
          </select>
        </div>

        {/* Collection Filter */}
        <div className="flex flex-col gap-1.5 shrink-0">
          <label className="text-[9px] uppercase tracking-widest font-semibold text-[#5C5450]">
            Tier
          </label>
          <select
            value={filters.collection}
            onChange={(e) => onChange({ collection: e.target.value })}
            className="bg-[#F6EFE2] border border-[#722F37]/10 text-xs px-3.5 py-2.5 tracking-wider focus:outline-none focus:border-[#722F37] rounded-xs select-none"
          >
            {collections.map((c) => (
              <option key={c.value} value={c.value}>
                {c.label}
              </option>
            ))}
          </select>
        </div>

        {/* Vintage Filter */}
        <div className="flex flex-col gap-1.5 shrink-0">
          <label className="text-[9px] uppercase tracking-widest font-semibold text-[#5C5450]">
            Vintage Year
          </label>
          <select
            value={filters.vintage}
            onChange={(e) => onChange({ vintage: e.target.value })}
            className="bg-[#F6EFE2] border border-[#722F37]/10 text-xs px-3.5 py-2.5 tracking-wider focus:outline-none focus:border-[#722F37] rounded-xs select-none"
          >
            <option value="all">All Vintages</option>
            {vintagesList.map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Sorting Group */}
      <div className="flex flex-col gap-1.5 w-full sm:w-60 lg:w-auto self-end lg:self-center shrink-0">
        <label className="text-[9px] uppercase tracking-widest font-semibold text-[#5C5450]">
          Sort By
        </label>
        <select
          value={filters.sortBy}
          onChange={(e) => onChange({ sortBy: e.target.value })}
          className="w-full lg:w-60 bg-[#F6EFE2] border border-[#722F37]/10 text-xs px-3.5 py-2.5 tracking-wider focus:outline-none focus:border-[#722F37] rounded-xs select-none"
        >
          {sortOptions.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ProductFilters;
