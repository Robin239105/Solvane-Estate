import React from "react";
import { motion } from "framer-motion";
import { pageVariants } from "../lib/motion";
import HeroVideo from "../components/home/HeroVideo";
import FeaturedVintages from "../components/home/FeaturedVintages";
import StoryTeaser from "../components/home/StoryTeaser";
import PressStrip from "../components/home/PressStrip";
import InstaGallery from "../components/home/InstaGallery";

export const Home = () => {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="w-full text-left"
    >
      <HeroVideo />
      <PressStrip />
      <StoryTeaser />
      <FeaturedVintages />
      <InstaGallery />
    </motion.div>
  );
};

export default Home;
