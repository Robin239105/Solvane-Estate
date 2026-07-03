import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Phone, MapPin, Clock } from "lucide-react";
import LogoStacked from "../brand/LogoStacked";

export const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubscribed(true);
      setEmail("");
    }, 1200);
  };

  return (
    <footer className="bg-gradient-to-b from-[#161211] to-[#0a0808] text-[#F6EFE2] pt-24 pb-12 px-6 border-t border-[#722F37]/35 relative z-10 overflow-hidden">
      {/* Decorative Winery Background Soft Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#722F37]/5 blur-[130px] rounded-full pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* 1. Grand Editorial Allocation Registry Callout */}
        <div className="flex flex-col items-center text-center pb-20 border-b border-white/5">
          <span className="font-script text-4xl text-[#D98E96] leading-none mb-2">
            The Allocation Registry
          </span>
          <h3 className="font-sans text-2xl md:text-3xl font-light text-[#F6EFE2] uppercase tracking-[0.2em] mb-4">
            Join the Inner Circle
          </h3>
          <p className="font-sans text-xs md:text-sm text-[#F6EFE2]/75 max-w-lg mb-8 leading-relaxed font-light">
            Unlock exclusive access to limited library reserves, private estate
            tastings, and seasonal vineyard reports curated by our winemakers.
          </p>

          <form
            onSubmit={handleSubscribe}
            className="w-full max-w-md relative flex items-center border-b border-[#F6EFE2]/25 focus-within:border-[#D98E96] transition-colors duration-500 py-3 px-1"
          >
            <input
              type="email"
              placeholder="ENTER YOUR EMAIL FOR PRIVATE ALLOCATIONS"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={subscribed || loading}
              className="bg-transparent w-full text-[10px] tracking-widest text-[#F6EFE2] focus:outline-none placeholder:text-[#F6EFE2]/30 disabled:opacity-50 font-sans font-semibold uppercase"
              required
            />

            <button
              type="submit"
              disabled={subscribed || loading}
              className="text-[#D98E96] hover:text-[#FBF8F3] transition-colors cursor-pointer pl-4"
              aria-label="Join allocation registry"
            >
              {loading ? (
                <span className="block w-4 h-4 border-2 border-t-transparent border-current rounded-full animate-spin" />
              ) : (
                <ArrowRight className="w-4.5 h-4.5" />
              )}
            </button>
          </form>

          {subscribed && (
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-sans text-[10px] text-[#D98E96] tracking-widest uppercase mt-4"
            >
              Thank you. You have been added to the allocation registry.
            </motion.span>
          )}
        </div>

        {/* 2. Structured Footer Links & Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 py-20 border-b border-white/5">
          {/* Column 1: Brand Logo & Mission */}
          <div className="flex flex-col items-start gap-5">
            <LogoStacked
              theme="dark"
              className="!items-start !text-left scale-90 origin-left"
            />
            <p className="font-sans text-xs leading-relaxed text-[#F6EFE2]/75 max-w-xs mt-1 font-light">
              Crafting singular wines at the intersection of old-world heritage
              and modern minimalist luxury. Sourced from the volcanic soils of
              Rutherford.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="text-[#F6EFE2]/50 hover:text-[#D98E96] hover:scale-105 transition-all duration-300"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="text-[#F6EFE2]/50 hover:text-[#D98E96] hover:scale-105 transition-all duration-300"
                aria-label="Youtube"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.108C19.53 3.5 12 3.5 12 3.5s-7.53 0-9.388.555A3.003 3.003 0 0 0 .502 6.163C0 8.07 0 12 0 12s0 3.93.502 5.837a3.003 3.003 0 0 0 2.11 2.108C4.47 20.5 12 20.5 12 20.5s7.53 0 9.388-.555a3.003 3.003 0 0 0 2.11-2.108C24 15.93 24 12 24 12s0-3.93-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noreferrer"
                className="text-[#F6EFE2]/50 hover:text-[#D98E96] hover:scale-105 transition-all duration-300"
                aria-label="Pinterest"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.08 3.16 9.42 7.63 11.16-.1-.95-.2-2.4.04-3.43.22-.93 1.4-5.93 1.4-5.93s-.36-.72-.36-1.77c0-1.66.96-2.9 2.17-2.9 1.02 0 1.51.77 1.51 1.7 0 1.03-.66 2.56-1 3.98-.28 1.18.59 2.15 1.76 2.15 2.11 0 3.73-2.23 3.73-5.44 0-2.84-2.04-4.83-4.96-4.83-3.38 0-5.37 2.54-5.37 5.16 0 1.02.39 2.12.88 2.72.1.12.11.23.08.35-.09.37-.29 1.19-.33 1.35-.05.21-.18.25-.41.14C4.1 14.88 3 12.65 3 10.1c0-4.13 3-7.93 8.66-7.93 4.55 0 8.08 3.24 8.08 7.57 0 4.52-2.85 8.16-6.8 8.16-1.33 0-2.58-.69-3.01-1.51l-.82 3.13c-.3 1.15-1.11 2.6-1.65 3.49C9.64 23.77 10.8 24 12 24c6.63 0 12-5.37 12-12S18.63 0 12 0z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Shop Wine links */}
          <div className="flex flex-col gap-5">
            <h4 className="font-sans font-extrabold text-xs tracking-[0.25em] text-[#D98E96] uppercase">
              Shop Vintages
            </h4>
            <ul className="flex flex-col gap-3 font-sans text-xs">
              <li>
                <Link
                  to="/shop?type=red"
                  className="text-[#F6EFE2]/70 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block font-light"
                >
                  Red Wines
                </Link>
              </li>
              <li>
                <Link
                  to="/shop?type=white"
                  className="text-[#F6EFE2]/70 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block font-light"
                >
                  White Wines
                </Link>
              </li>
              <li>
                <Link
                  to="/shop?type=rose"
                  className="text-[#F6EFE2]/70 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block font-light"
                >
                  Rosé Wines
                </Link>
              </li>
              <li>
                <Link
                  to="/shop?type=sparkling"
                  className="text-[#F6EFE2]/70 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block font-light"
                >
                  Sparkling Wines
                </Link>
              </li>
              <li>
                <Link
                  to="/shop?collection=reserve"
                  className="text-[#F6EFE2]/70 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block font-light"
                >
                  Reserve &amp; Library Series
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Estate links */}
          <div className="flex flex-col gap-5">
            <h4 className="font-sans font-extrabold text-xs tracking-[0.25em] text-[#D98E96] uppercase">
              The Estate
            </h4>
            <ul className="flex flex-col gap-3 font-sans text-xs">
              <li>
                <Link
                  to="/estate"
                  className="text-[#F6EFE2]/70 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block font-light"
                >
                  Our Story
                </Link>
              </li>
              <li>
                <Link
                  to="/estate/vineyard"
                  className="text-[#F6EFE2]/70 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block font-light"
                >
                  Vineyard &amp; Terroir
                </Link>
              </li>
              <li>
                <Link
                  to="/estate/winemaking"
                  className="text-[#F6EFE2]/70 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block font-light"
                >
                  Winemaking Process
                </Link>
              </li>
              <li>
                <Link
                  to="/journal"
                  className="text-[#F6EFE2]/70 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block font-light"
                >
                  Journal &amp; News
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="text-[#F6EFE2]/70 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block font-light"
                >
                  Visual Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Cellar Door Hours */}
          <div className="flex flex-col gap-5">
            <h4 className="font-sans font-extrabold text-xs tracking-[0.25em] text-[#D98E96] uppercase">
              Cellar Door
            </h4>
            <div className="flex flex-col gap-4 font-sans text-xs text-[#F6EFE2]/75 font-light">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#D98E96] shrink-0 mt-0.5" />
                <span>4500 Solvane Way, Rutherford, CA 94573</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#D98E96] shrink-0" />
                <span>(707) 555-0190</span>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#D98E96] shrink-0 mt-0.5" />
                <span>
                  Open Tue–Sun, 10am–6pm <br />
                  <span className="text-[10px] text-[#D98E96]/70 uppercase tracking-wider font-semibold">
                    Tastings by appointment
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Bottom bar & Legal Disclaimer */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 pt-10 text-center lg:text-left text-[10px] tracking-widest text-[#F6EFE2]/40 font-sans uppercase">
          <div className="flex flex-col gap-2 max-w-xl">
            <span>
              &copy; {new Date().getFullYear()} Solvane Estate. All rights
              reserved.
            </span>
            <span className="text-[#D98E96]/60 text-[8px] tracking-widest normal-case leading-relaxed font-light border border-[#722F37]/20 p-3 rounded-lg bg-[#120e0d]/50">
              WARNING: Drinking distilled spirits, beer, coolers, wine and other
              alcoholic beverages may increase cancer risk, and, during
              pregnancy, can cause birth defects. You must be 21+ or of legal
              drinking age to purchase.
            </span>
          </div>

          <div className="flex gap-6 font-semibold shrink-0">
            <Link
              to="/privacy-policy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-of-service"
              className="hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              to="/shipping-policy"
              className="hover:text-white transition-colors"
            >
              Shipping &amp; Returns
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
