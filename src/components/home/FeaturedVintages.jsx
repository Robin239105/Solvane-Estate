import React from "react";
import { motion } from "framer-motion";
import { wines } from "../../data/wines";
import ProductCard from "../shop/ProductCard";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";

export const FeaturedVintages = () => {
  // Show 3 distinct featured wines
  const featuredWines = wines.filter(
    (wine) =>
      wine.id === "solvane-cab-sauv-2021" ||
      wine.id === "solvane-chardonnay-2022" ||
      wine.id === "solvane-grand-cuvee-2018",
  );

  return (
    <section className="py-24 px-6 bg-[#FBF8F3]">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <SectionHeading
          eyebrow="The Collection"
          title="Featured Estate Allocations"
          subtitle="A handpicked showcase of our finest current releases, reflecting the unique microclimate and mineral complexities of our soil blocks."
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {featuredWines.map((wine) => (
            <ProductCard key={wine.id} wine={wine} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <Button variant="outline-dark" to="/shop">
            View Complete Cellar
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedVintages;
