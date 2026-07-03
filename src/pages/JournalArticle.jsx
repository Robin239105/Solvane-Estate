import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Calendar, User, ChevronRight } from "lucide-react";
import { journalPosts } from "../data/journalPosts";
import { pageVariants } from "../lib/motion";
import Button from "../components/ui/Button";
import Badge from "../components/ui/Badge";

export const JournalArticle = () => {
  const { slug } = useParams();

  // Look up post
  const post = journalPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center p-6 bg-[#FBF8F3]">
        <h2 className="font-sans text-3xl text-[#722F37] mb-4">
          Article Not Found
        </h2>
        <p className="font-sans text-sm text-[#5C5450] mb-6">
          The requested journal commentary cannot be located.
        </p>
        <Button variant="outline-dark" to="/journal">
          Back to Journal
        </Button>
      </div>
    );
  }

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="w-full text-left pt-24 pb-20 px-6 bg-[#FBF8F3]"
    >
      {/* Breadcrumbs */}
      <div className="max-w-3xl mx-auto flex items-center gap-2 font-sans text-[10px] tracking-widest uppercase text-[#5C5450] mb-8 select-none">
        <Link to="/journal" className="hover:text-[#722F37] transition-colors">
          Journal
        </Link>
        <ChevronRight className="w-3 h-3 text-[#722F37]/30" />
        <span className="text-[#722F37]">{post.category}</span>
        <ChevronRight className="w-3 h-3 text-[#722F37]/30" />
        <span className="text-[#722F37] font-semibold line-clamp-1">
          {post.title}
        </span>
      </div>

      <article className="max-w-3xl mx-auto flex flex-col">
        {/* Title & Metadata */}
        <div className="flex flex-col gap-4 text-left">
          <Badge variant="rose" className="w-fit">
            {post.category}
          </Badge>

          <h1 className="font-sans text-3xl md:text-5xl font-semibold leading-tight text-[#722F37] mt-2">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 font-sans text-xs text-[#5C5450] py-2 border-t border-b border-[#722F37]/10 mt-4">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#722F37]" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#722F37]" />
              <span>{post.readTime}</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-[#722F37]" />
              <span>{post.author}</span>
            </div>
          </div>
        </div>

        {/* Feature Image */}
        <div className="w-full aspect-16/9 rounded-xs overflow-hidden border border-[#722F37]/5 shadow-xl my-8">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Article Body Content */}
        <div
          className="prose prose-sm md:prose-base font-sans text-sm md:text-base text-[#5C5450] leading-relaxed flex flex-col gap-5 text-left"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Footer Actions */}
        <div className="border-t border-[#722F37]/10 pt-10 mt-12">
          <Link
            to="/journal"
            className="inline-flex items-center gap-2 font-sans text-[10px] tracking-widest uppercase font-semibold text-[#722F37] hover:text-[#722F37] transition-all"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Journal Index
          </Link>
        </div>
      </article>
    </motion.div>
  );
};

export default JournalArticle;
