import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function DanceCard({ dance, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        to={`/dance/${dance.slug}`}
        className="group block relative"
      >
        <div className="relative aspect-[3/4] overflow-hidden bg-muted">
          <img
            src={dance.image}
            alt={dance.name}
            className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
          />
          <div className={`absolute inset-0 bg-gradient-to-t ${dance.accent} opacity-20 group-hover:opacity-40 transition-opacity duration-700`} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          <div className="absolute top-5 left-5">
            <span className="text-[10px] uppercase tracking-[0.3em] text-white/80 bg-black/20 backdrop-blur-sm px-3 py-1.5">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>

          <div className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/30 flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
            <ArrowUpRight className="w-4 h-4 text-white" />
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-7">
            <p className="font-serif italic text-accent text-xs tracking-[0.2em] uppercase mb-2">
              {dance.classification}
            </p>
            <h3 className="font-serif text-2xl md:text-3xl text-white leading-tight">
              {dance.name}
            </h3>
            <p className="text-sm text-white/70 mt-1 font-display italic">
              {dance.origin}
            </p>
          </div>
        </div>

        <p className="text-sm text-muted-foreground mt-4 max-w-sm font-display italic">
          {dance.tagline}
        </p>
      </Link>
    </motion.div>
  );
}