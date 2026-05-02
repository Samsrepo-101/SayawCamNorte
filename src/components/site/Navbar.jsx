import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown, Eye, BookOpen, Users, Shirt, Music, MapPin, Footprints, Video } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { DANCES, DANCE_SUBTABS } from "@/lib/dances";

const TAB_ICONS = {
  "overview": Eye,
  "background": BookOpen,
  "performers": Users,
  "costume": Shirt,
  "music": Music,
  "literature": BookOpen,
  "steps": Footprints,
  "video": Video
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [hoveredDance, setHoveredDance] = useState(null);
  const [activeDanceSlug, setActiveDanceSlug] = useState(null);
  const [dancesMenuOpen, setDancesMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const hoverTimeout = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setDancesMenuOpen(false);
    // Set active dance from URL
    const match = location.pathname.match(/\/dance\/(.+)/);
    setActiveDanceSlug(match ? match[1] : null);
  }, [location]);

  const handleDanceMouseEnter = (slug) => {
    clearTimeout(hoverTimeout.current);
    setHoveredDance(slug);
  };

  const handleDanceMouseLeave = () => {
    hoverTimeout.current = setTimeout(() => setHoveredDance(null), 200);
  };

  const handleMenuMouseEnter = () => {
    clearTimeout(hoverTimeout.current);
  };

  const handleMenuMouseLeave = () => {
    hoverTimeout.current = setTimeout(() => setHoveredDance(null), 200);
  };

  const scrollToSection = (hash) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-background border-b border-border transition-all duration-500">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="flex flex-col leading-none group flex-shrink-0">
          <span className="font-serif italic text-[10px] tracking-[0.3em] text-accent uppercase font-bold">
            Sayaw
          </span>
          <span className="font-serif text-xl md:text-xl text-foreground group-hover:text-primary transition-colors mt-0.5 font-bold">
            Cam Norteño
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-6 ml-auto">
          {/* Home link */}
          <Link
            to="/"
            onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
            className={`text-[11px] uppercase tracking-[0.15em] transition-colors font-sans font-bold h-16 flex items-center border-b-2 ${
              location.pathname === "/" && !activeDanceSlug
                ? "text-primary border-primary"
                : "text-foreground/80 hover:text-primary border-transparent"
            }`}
          >
            Home
          </Link>

          {/* Dance tabs */}
          {DANCES.map((dance) => (
            <div
              key={dance.slug}
              className="relative h-16 flex items-center"
              onMouseEnter={() => handleDanceMouseEnter(dance.slug)}
              onMouseLeave={handleDanceMouseLeave}
            >
              <Link
                to={`/dance/${dance.slug}`}
                className={`flex items-center gap-1.5 text-[11px] uppercase tracking-[0.15em] font-sans font-bold transition-all duration-200 h-full border-b-2 ${
                  activeDanceSlug === dance.slug
                    ? "text-primary border-primary"
                    : "text-foreground/80 hover:text-primary border-transparent"
                }`}
              >
                {dance.name}
                <ChevronDown className="w-3 h-3 opacity-60" />
              </Link>

              {/* Hover Dropdown */}
              <AnimatePresence>
                {hoveredDance === dance.slug && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.18 }}
                    onMouseEnter={handleMenuMouseEnter}
                    onMouseLeave={handleMenuMouseLeave}
                    className="absolute top-full left-0 mt-3 w-56 bg-background border border-border shadow-xl overflow-hidden z-50"
                  >
                    <div className="px-4 py-3 bg-primary/5 border-b border-border">
                      <p className="font-serif text-sm text-primary italic">{dance.name}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{dance.classification}</p>
                    </div>
                    <ul className="py-2">
                      {DANCE_SUBTABS.map((tab) => {
                        const Icon = TAB_ICONS[tab.id];
                        return (
                          <li key={tab.id}>
                            <Link
                              to={`/dance/${dance.slug}#${tab.id}`}
                              className="flex items-center gap-3 px-4 py-2.5 text-sm text-foreground/75 hover:text-primary hover:bg-primary/10 hover:font-medium transition-all font-sans"
                            >
                              {Icon && <Icon className="w-4 h-4 text-accent" />}
                              {tab.label}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}

          {/* About link */}
          {/* About link */}
          <Link
            to="/about"
            className={`flex items-center text-[11px] uppercase tracking-[0.15em] transition-colors font-sans font-bold h-16 border-b-2 ${
              location.pathname === "/about"
                ? "text-primary border-primary"
                : "text-foreground/80 hover:text-primary border-transparent hover:border-primary/50"
            }`}
          >
            About
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-t border-border overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-1">
              <Link
                to="/"
                className="text-base uppercase tracking-[0.2em] text-foreground/80 py-2 font-sans font-medium"
              >
                Home
              </Link>
              <p className="text-xs uppercase tracking-[0.3em] text-accent mt-4 mb-2 font-sans">The Dances</p>
              {DANCES.map((dance) => (
                <div key={dance.slug}>
                  <button
                    onClick={() => setDancesMenuOpen(dancesMenuOpen === dance.slug ? null : dance.slug)}
                    className={`w-full text-left flex items-center justify-between py-2 text-base font-medium font-sans transition-colors ${
                      activeDanceSlug === dance.slug ? "text-primary" : "text-foreground/80"
                    }`}
                  >
                    {dance.name}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        dancesMenuOpen === dance.slug ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {dancesMenuOpen === dance.slug && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-4 pb-2 flex flex-col gap-1 border-l-2 border-primary/30 ml-2">
                          {DANCE_SUBTABS.map((tab) => (
                            <Link
                              key={tab.id}
                              to={`/dance/${dance.slug}#${tab.id}`}
                              className="py-1.5 text-sm text-foreground/65 hover:text-primary font-sans"
                            >
                              {tab.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              <Link
                to="/about"
                className="text-left text-base uppercase tracking-[0.2em] text-foreground/80 py-2 mt-4 font-sans font-medium"
              >
                About
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}