import React from "react";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="relative py-28 md:py-40 bg-background">
      <div className="max-w-6xl mx-auto px-6 lg:px-10 grid md:grid-cols-12 gap-12 md:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="md:col-span-5"
        >
          <div className="relative aspect-[3/4] overflow-hidden">
            <img
              src="https://media.base44.com/images/public/69e1d16049c5d21cd426e575/6c9909710_ChatGPTImageApr21202607_30_10PM.png"
              alt="Camarines Norte map with folk dancers"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-primary/20 to-transparent" />
          </div>
          <p className="font-serif italic text-sm text-muted-foreground mt-4 text-center md:text-left">
            "Dance can be studied in terms of its purpose and function within a culture."
            <span className="block not-italic text-xs mt-1 text-accent">— Kannamoto, 2022</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.1 }}
          className="md:col-span-7 space-y-8"
        >
          <p className="text-xs uppercase tracking-[0.35em] text-accent">
            The Story
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-balance">
            A Bicol archive of a province that dances.
          </h2>
          <div className="space-y-6 text-lg md:text-xl text-foreground/75 leading-relaxed font-sans">
            <p>
              Preserving our culture is embedded in how we establish our way of living.
              In Camarines Norte, five published traditional folk dances carry the
              memory of courtship, labor, celebration, and ritual. Yet, only a handful
              of its own people can name them.
            </p>
            <p>
              <span className="font-serif italic text-primary">Sayaw Cam Norteño</span>{" "}
              is a web-based platform developed in support of a qualitative study by <b>Christine A. Bautista,
              LPT</b> and <b>Faith Isabelle M. Bardon</b>, and the thesis research by <b>Brutas, España & Labrador (2026)</b> — studies that asked twelve
              informants a simple but urgent question: <em>do we still know our own dances?</em>
            </p>
            <p>
              The answer was humbling. And it is why this archive exists — to make every
              step, costume, and note impossible to forget.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
            <Stat value="5" label="Published Folk Dances" />
            <Stat value="12" label="Key Informants" />
            <Stat value="3" label="Proposed Measures" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Stat({ value, label }) {
  return (
    <div>
      <div className="font-serif text-4xl md:text-5xl text-primary">{value}</div>
      <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground mt-2">
        {label}
      </div>
    </div>
  );
}