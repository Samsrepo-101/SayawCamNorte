import React from "react";
import { motion } from "framer-motion";
import DanceCard from "./DanceCard";
import { DANCES } from "@/lib/dances";

export default function DancesGrid() {
  return (
    <section id="dances" className="relative py-28 md:py-40 bg-secondary/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="max-w-2xl mb-20 md:mb-24"
        >
          <p className="text-xs uppercase tracking-[0.35em] text-accent mb-6">
            The Five Published Dances
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-balance">
            An archive, <span className="italic text-primary">in five movements.</span>
          </h2>
          <p className="mt-6 font-display text-lg text-foreground/70 leading-relaxed">
            Documented through the Instructional Materials compiled by Dr. Arnel P. Plantado,
            and authored through decades of folkloric research by Francisca R. Aquino
            and Hermes F. Avellana.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {DANCES.map((dance, i) => (
            <DanceCard key={dance.slug} dance={dance} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}