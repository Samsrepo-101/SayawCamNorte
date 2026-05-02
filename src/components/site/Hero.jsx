import React from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";
import { DANCES } from "@/lib/dances";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-end">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://media.base44.com/images/public/69e1d16049c5d21cd426e575/6c9909710_ChatGPTImageApr21202607_30_10PM.png"
          alt="Filipino folk dancers in traditional attire"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-neutral-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/20 to-neutral-950/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pb-28 pt-40 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-sans text-xs md:text-sm tracking-[0.35em] uppercase mb-6 text-white/70"
          >
            Camarines Norte, Bicol Region, Philippines
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 1 }}
            className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] text-white text-balance"
          >
            Sayaw
            <br />
            <span className="italic text-[#E8C766]">Cam Norteño</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 1 }}
            className="mt-8 font-sans text-base md:text-lg text-white/85 max-w-xl leading-relaxed"
          >
            Five published folk dances. One province. A living archive of movement,
            costume, and memory — preserved for the generations to come.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 1 }}
            className="mt-5 font-sans text-sm md:text-base text-white/60 max-w-lg leading-relaxed"
          >
            Rooted in the traditions of Daet, Paracale, and Basud — from courtship dances to
            the songs of gold-panners and honey-gatherers of the Bicol mountains.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 1 }}
            className="mt-12 flex flex-wrap items-center gap-4"
          >
            <a
              href="#dances"
              className="group inline-flex items-center gap-3 bg-primary text-white px-8 py-4 text-xs md:text-sm uppercase tracking-[0.2em] hover:bg-primary/90 transition-colors font-sans font-medium"
            >
              Explore the Dances
              <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center px-8 py-4 text-xs md:text-sm uppercase tracking-[0.2em] text-white border border-white/30 hover:bg-white/10 hover:border-white/50 transition-all font-sans font-medium"
            >
              About This Project
            </a>
          </motion.div>

          {/* Quick dance links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 1 }}
            className="mt-16 pt-8 border-t border-white/10 flex flex-wrap gap-3"
          >
            {DANCES.map((dance) => (
              <Link
                key={dance.slug}
                to={`/dance/${dance.slug}`}
                className="text-[10px] md:text-xs uppercase tracking-[0.18em] text-white/60 hover:text-white hover:bg-white/10 border border-white/20 px-4 py-2 transition-all font-sans"
              >
                {dance.name}
              </Link>
            ))}
          </motion.div>
        </motion.div>

        {/* Vertical detail */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="hidden lg:flex absolute right-10 bottom-24 flex-col items-center gap-4"
        >
          <div className="h-16 w-px bg-white/30" />
          <span className="text-xs uppercase tracking-[0.4em] text-white/50 [writing-mode:vertical-rl]">
            Bicol — Cultural Heritage
          </span>
        </motion.div>
      </div>
    </section>
  );
}