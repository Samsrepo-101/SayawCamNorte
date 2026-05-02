import React from "react";
import { motion } from "framer-motion";
import { School, Users, Building2 } from "lucide-react";

const MEASURES = [
  {
    icon: Building2,
    title: "Collaboration with the LGU",
    text: "Partner with Local Government Units for cultural mapping, funding, and legislation through resolutions and ordinances that acknowledge the dances as intangible heritage.",
  },
  {
    icon: School,
    title: "Continuous School Curriculum",
    text: "Integrate the five published folk dances into DepEd Camarines Norte curriculum — so that every child learns to step, count, and sing in their own provincial language.",
  },
  {
    icon: Users,
    title: "Creation of a Cultural Dance Group",
    text: "Establish provincial dance groups that perform, teach, and sustain the dances — led by elders, artists, and scholars committed to their preservation.",
  },
];

export default function PreservationSection() {
  return (
    <section id="preservation" className="py-28 md:py-40 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-2xl mb-20"
        >
          <p className="text-xs uppercase tracking-[0.35em] text-accent mb-6">
            Three Proposed Measures
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-balance">
            How we keep a dance <span className="italic text-primary">alive.</span>
          </h2>
          <p className="mt-6 font-display text-lg text-foreground/70 leading-relaxed">
            Drawn directly from the study's findings, these three pathways form the
            roadmap for safeguarding Camarines Norte's traditional folk dances for the
            next generation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-10">
          {MEASURES.map((m, i) => (
            <motion.div
              key={m.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="group relative bg-card border border-border p-10 hover:border-primary/40 transition-colors"
            >
              <div className="w-12 h-12 rounded-full border border-accent/40 flex items-center justify-center mb-8 group-hover:bg-accent/10 transition-colors">
                <m.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-serif text-2xl mb-4">{m.title}</h3>
              <p className="text-sm text-foreground/70 leading-relaxed">{m.text}</p>
              <div className="absolute top-6 right-6 font-serif italic text-xs text-accent">
                0{i + 1}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-24 max-w-3xl mx-auto text-center"
        >
          <div className="divider-ornament mb-8">
            <span className="font-serif italic text-sm">✦</span>
          </div>
          <blockquote className="font-display italic text-2xl md:text-3xl text-foreground/80 leading-relaxed">
            "Pwede tayo gumawa ng resolution — acknowledging na meron tayong ganitong
            dance na unique sa atin sa Daet."
          </blockquote>
          <p className="mt-6 text-xs uppercase tracking-[0.25em] text-muted-foreground">
            — Informant 5, Field Survey 2023
          </p>
        </motion.div>
      </div>
    </section>
  );
}