import React from "react";
import { motion } from "framer-motion";

export default function HeritageSection() {
  return (
    <section id="heritage" className="relative py-28 md:py-40 bg-primary text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img
          src="https://media.base44.com/images/public/69e1d16049c5d21cd426e575/870e38746_generated_c0b9cc27.png"
          alt="Camarines Norte landscape"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-xs uppercase tracking-[0.35em] text-accent mb-6">
            Mandated by Law, Carried by People
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-balance">
            "The culture by the <span className="italic">people,</span> for the people."
          </h2>
          <p className="mt-10 font-display italic text-xl text-primary-foreground/80 leading-relaxed">
            Republic Act No. 7356 and RA 11961 mandate that every Filipino national
            culture shall be evolved, developed, and protected — registered in the
            Philippine Registry of Heritage and disseminated to the greatest number
            of its people.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-10 md:gap-14 mt-24"
        >
          {PILLARS.map((pillar, i) => (
            <div key={pillar.title} className="relative">
              <div className="font-serif italic text-6xl text-accent/60 leading-none mb-6">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="font-serif text-2xl mb-4">{pillar.title}</h3>
              <p className="text-primary-foreground/75 leading-relaxed text-sm">
                {pillar.description}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

const PILLARS = [
  {
    title: "Cultural Awareness",
    description:
      "Only 7 of 12 informants recognized the folk dances of their own province. Awareness begins with visibility — and visibility begins with archives like this.",
  },
  {
    title: "Cultural Knowledge",
    description:
      "Just 4 informants could correctly discuss the history and details of the published dances. Knowledge, once undocumented, drifts toward silence.",
  },
  {
    title: "Cultural Development",
    description:
      "Six informants actively engage in programs and activities that foster the development of traditional folk dances in their communities.",
  },
];