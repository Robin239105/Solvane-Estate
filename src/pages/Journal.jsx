import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { journalPosts } from "../data/journalPosts";
import { pageVariants, staggerContainer } from "../lib/motion";
import SectionHeading from "../components/ui/SectionHeading";
import Badge from "../components/ui/Badge";
import teaserSecondary from "../assets/teaser_secondary.png";

export const Journal = () => {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="w-full text-left"
    >
      {/* Hero Banner */}
      <div className="relative h-[250px] md:h-[350px] w-full flex items-center bg-[#201A18] text-[#F6EFE2] overflow-hidden select-none">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: `url(${teaserSecondary})`,
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#201A18] to-transparent" />
        <div className="relative max-w-7xl mx-auto w-full px-6 text-center pt-16">
          <span className="font-sans italic text-sm md:text-base text-[#D98E96] tracking-wider mb-2 block">
            The Chronicle
          </span>
          <h1 className="font-sans text-3xl md:text-5xl font-medium tracking-wide">
            The Solvane Journal
          </h1>
          <p className="font-sans text-xs md:text-sm text-[#F6EFE2]/75 max-w-xl mx-auto mt-4 leading-relaxed">
            Vintage commentaries, organic viticulture diaries, culinary pairing
            guides, and notes from the winemaking cellar.
          </p>
        </div>
      </div>

      {/* Grid of articles */}
      <section className="py-24 px-6 bg-[#FBF8F3]">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <SectionHeading
            eyebrow="The Ledger"
            title="Stories & Cellar Reports"
            className="mb-16"
          />

          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full"
          >
            {journalPosts.map((post) => (
              <div
                key={post.id}
                className="bg-[#F6EFE2]/30 border border-[#722F37]/5 rounded-xs overflow-hidden flex flex-col justify-between hover:shadow-lg transition-all duration-300 group"
              >
                {/* Visual Image container */}
                <div>
                  <div className="aspect-16/10 overflow-hidden relative border-b border-[#722F37]/5">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-103"
                      loading="lazy"
                    />

                    <div className="absolute top-4 left-4">
                      <Badge variant="rose">{post.category}</Badge>
                    </div>
                  </div>

                  {/* Body Info */}
                  <div className="p-6 flex flex-col text-left">
                    <span className="font-sans text-[10px] tracking-wider text-[#5C5450] uppercase mb-2 block">
                      {post.date} &bull; {post.readTime}
                    </span>

                    <Link
                      to={`/journal/${post.slug}`}
                      className="font-sans text-lg font-bold text-[#722F37] hover:text-[#722F37] transition-colors leading-snug line-clamp-2"
                    >
                      {post.title}
                    </Link>

                    <p className="font-sans text-xs text-[#5C5450] mt-3.5 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                {/* Read Button */}
                <div className="p-6 pt-0 border-t border-[#722F37]/5 mt-auto flex justify-between items-center">
                  <span className="font-sans text-[10px] text-[#5C5450] italic">
                    By {post.author.split(",")[0]}
                  </span>

                  <Link
                    to={`/journal/${post.slug}`}
                    className="font-sans text-[10px] uppercase tracking-widest font-semibold text-[#722F37] hover:text-[#722F37] transition-colors"
                  >
                    Read Article &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Journal;
