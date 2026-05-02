import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Mail, Globe, BookOpen } from "lucide-react";
import AboutSection from "@/components/site/AboutSection";

export default function About() {
  return (
    <main className="pt-20">
      {/* Reusing the AboutSection for context */}
      <AboutSection />

      {/* ── REDESIGNED TEAM SECTION ── */}
      <section className="py-28 bg-secondary/10 border-t border-border">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-24">
            <p className="text-xs uppercase tracking-[0.35em] text-accent mb-4 font-sans font-bold">The Project Team</p>
            <h2 className="font-serif text-5xl md:text-6xl text-foreground">Meet the Researchers</h2>
            <div className="w-20 h-1 bg-primary/20 mx-auto mt-10" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            <ResearcherCard 
              name="Brutas, Mark Theolo O."
              course="Bachelor of Physical Education"
              school="Camarines State College - Abaño Campus"
              social={{ icon: ExternalLink, url: "#", label: "Profile" }}
              image="/tyolo.jpg"
              color="bg-primary/5"
            />
            <ResearcherCard 
              name="España, Kiezzha Anne T."
              course="Bachelor of Physical Education"
              school="Camarines State College - Abaño Campus"
              social={{ icon: Globe, url: "#", label: "Website" }}
              image="/tyolo.jpg"
              color="bg-accent/5"
            />
            <ResearcherCard 
              name="Labrador, Joana Mae B."
              role=""
              description=""
              course="Bachelor of Physical Education"
              school="Camarines State College - Abaño Campus"
              social={{ icon: Mail, url: "#", label: "Contact" }}
              image="/tyolo.jpg"
              color="bg-primary/5"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

function ResearcherCard({ name, role, description, course, school, social: Social, image, color }) {
  const Icon = Social.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={`relative flex flex-col items-center text-center gap-6 p-8 rounded-3xl border border-border transition-all duration-500 hover:shadow-2xl hover:border-primary/30 hover:scale-[1.02] bg-background group cursor-default h-full`}
    >
      {/* Top side: Circular image */}
      <div className="relative flex-shrink-0">
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-background shadow-lg transition-transform duration-700 group-hover:rotate-3">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover transition-all duration-700" 
          />
        </div>
        <div className={`absolute -bottom-1 -right-1 w-10 h-10 ${color} rounded-full border-2 border-background flex items-center justify-center shadow-md`}>
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
        </div>
      </div>

      {/* Info */}
      <div className="flex-1 flex flex-col">
        <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-1 group-hover:text-primary transition-colors leading-tight">{name}</h3>
        {role && <p className="text-xs uppercase tracking-widest text-primary font-bold mb-4">{role}</p>}
        
        {description && (
          <p className="font-sans text-foreground/70 leading-relaxed mb-6 text-sm italic">
            "{description}"
          </p>
        )}

        <div className="mt-auto space-y-1 mb-8">
          <p className="text-[10px] md:text-xs font-sans text-muted-foreground uppercase tracking-tighter leading-tight">{course}</p>
          <p className="text-[10px] md:text-xs font-sans text-muted-foreground uppercase tracking-tighter leading-tight">{school}</p>
        </div>

        <div>
          <a 
            href={Social.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-secondary hover:bg-primary hover:text-primary-foreground text-foreground rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-300"
          >
            <Icon className="w-3.5 h-3.5" />
            {Social.label}
          </a>
        </div>
      </div>
    </motion.div>
  );
}
