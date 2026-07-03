import React, { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Search, User, ShoppingBag, Menu } from "lucide-react";
import LogoFull from "../brand/LogoFull";
import MegaMenu from "./MegaMenu";
import MobileNav from "./MobileNav";
import { useCartStore } from "../../store/cartStore";

export const Header = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaMenu, setMegaMenu] = useState(null);

  // Cart store
  const { items, openCart } = useCartStore();
  const cartItemCount = items.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mega menu on route change
  useEffect(() => {
    setMegaMenu(null);
  }, [location]);

  // Only allow transparent blending at the top of the home page. Other pages have light backgrounds so they need the solid capsule.
  const isHomePage = location.pathname === "/";
  const headerBg =
    isScrolled || !isHomePage
      ? "bg-[#120e0d]/95 border-[#722F37]/35 shadow-[0_15px_40px_rgba(0,0,0,0.65)] backdrop-blur-md"
      : "bg-transparent border-transparent shadow-none backdrop-blur-none";

  return (
    <>
      <header
        className={`fixed top-5 left-1/2 -translate-x-1/2 w-[92%] max-w-7xl h-[64px] z-50 flex items-center justify-between px-8 rounded-full border transition-all duration-500 ease-in-out ${headerBg} text-[#F6EFE2]`}
        onMouseLeave={() => setMegaMenu(null)}
      >
        {/* Left: Brand Logo */}
        <Link to="/" className="z-50 shrink-0">
          <LogoFull theme="dark" />
        </Link>

        {/* Center: Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8 h-full font-sans text-xs tracking-[0.2em] uppercase font-medium">
          <div
            className="relative py-5 cursor-pointer group"
            onMouseEnter={() => setMegaMenu("shop")}
          >
            <NavLink
              to="/shop"
              className={({ isActive }) =>
                `transition-colors py-1 relative ${isActive ? "text-[#D98E96] font-bold" : "text-[#F6EFE2]/85 hover:text-[#D98E96]"}`
              }
            >
              Shop
              <span className="absolute -bottom-1 left-0 w-full h-[1.5px] bg-[#D98E96] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
            </NavLink>
          </div>

          <div className="relative py-5 cursor-pointer group">
            <NavLink
              to="/vintages"
              className={({ isActive }) =>
                `transition-colors py-1 relative ${isActive ? "text-[#D98E96] font-bold" : "text-[#F6EFE2]/85 hover:text-[#D98E96]"}`
              }
            >
              Vintages
              <span className="absolute -bottom-1 left-0 w-full h-[1.5px] bg-[#D98E96] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
            </NavLink>
          </div>

          <div
            className="relative py-5 cursor-pointer group"
            onMouseEnter={() => setMegaMenu("estate")}
          >
            <span
              className={`transition-colors py-1 relative ${
                location.pathname.startsWith("/estate")
                  ? "text-[#D98E96] font-bold"
                  : "text-[#F6EFE2]/85 hover:text-[#D98E96]"
              }`}
            >
              The Estate
              <span className="absolute -bottom-1 left-0 w-full h-[1.5px] bg-[#D98E96] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
            </span>
          </div>

          <div className="relative py-5 cursor-pointer group">
            <NavLink
              to="/tasting-room"
              className={({ isActive }) =>
                `transition-colors py-1 relative ${isActive ? "text-[#D98E96] font-bold" : "text-[#F6EFE2]/85 hover:text-[#D98E96]"}`
              }
            >
              Tasting Room
              <span className="absolute -bottom-1 left-0 w-full h-[1.5px] bg-[#D98E96] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
            </NavLink>
          </div>

          <div className="relative py-5 cursor-pointer group">
            <NavLink
              to="/wine-club"
              className={({ isActive }) =>
                `transition-colors py-1 relative ${isActive ? "text-[#D98E96] font-bold" : "text-[#F6EFE2]/85 hover:text-[#D98E96]"}`
              }
            >
              Wine Club
              <span className="absolute -bottom-1 left-0 w-full h-[1.5px] bg-[#D98E96] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
            </NavLink>
          </div>

          <div className="relative py-5 cursor-pointer group">
            <NavLink
              to="/journal"
              className={({ isActive }) =>
                `transition-colors py-1 relative ${isActive ? "text-[#D98E96] font-bold" : "text-[#F6EFE2]/85 hover:text-[#D98E96]"}`
              }
            >
              Journal
              <span className="absolute -bottom-1 left-0 w-full h-[1.5px] bg-[#D98E96] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
            </NavLink>
          </div>

          <div className="relative py-5 cursor-pointer group">
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `transition-colors py-1 relative ${isActive ? "text-[#D98E96] font-bold" : "text-[#F6EFE2]/85 hover:text-[#D98E96]"}`
              }
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-full h-[1.5px] bg-[#D98E96] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
            </NavLink>
          </div>
        </nav>

        {/* Right: Actions */}
        <div className="flex items-center gap-6 z-50 shrink-0">
          <Link
            to="/contact?inquiry=trade"
            className="hover:text-[#D98E96] transition-colors"
            aria-label="Search"
          >
            <Search className="w-4 h-4" />
          </Link>
          <Link
            to="/contact"
            className="hover:text-[#D98E96] transition-colors hidden sm:block"
            aria-label="Account"
          >
            <User className="w-4 h-4" />
          </Link>

          <button
            onClick={openCart}
            className="relative hover:text-[#D98E96] transition-colors flex items-center justify-center cursor-pointer"
            aria-label="Open Cart"
          >
            <ShoppingBag className="w-4 h-4" />
            {cartItemCount > 0 && (
              <span className="absolute -top-1.5 -right-2 bg-[#722F37] text-white text-[8px] font-extrabold w-4 h-4 rounded-full flex items-center justify-center border border-[#120e0d] shadow-sm animate-pulse">
                {cartItemCount}
              </span>
            )}
          </button>

          <button
            className="lg:hidden hover:text-[#D98E96] transition-colors cursor-pointer"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>

        {/* Floating Glassmorphic Mega Menu */}
        <MegaMenu
          isOpen={megaMenu !== null}
          variant={megaMenu || "shop"}
          onClose={() => setMegaMenu(null)}
        />
      </header>

      {/* Mobile Nav Overlay */}
      <MobileNav
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
};

export default Header;
