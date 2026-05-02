import React from "react";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div className="md:col-span-1">
            <p className="font-serif italic text-xs tracking-[0.3em] text-accent uppercase">
              Sayaw
            </p>
            <h3 className="font-serif text-3xl mt-1">Cam Norteño</h3>
            <p className="mt-5 text-base text-primary-foreground/70 leading-relaxed font-display italic max-w-xs">
              A living archive of the five published traditional folk dances of
              Camarines Norte, Bicol Region, Philippines.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-accent mb-5">
              Thesis Authors
            </p>
            <ul className="space-y-3 text-sm text-primary-foreground/85 font-sans font-medium">
              <li>Brutas, Mark Theolo O.</li>
              <li>España, Kiezzha Anne T.</li>
              <li>Labrador, Joana Mae B.</li>
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-accent mb-5">
              Acknowledgments
            </p>
            <ul className="space-y-3 text-sm text-primary-foreground/85 font-sans">
              <li>Christine A. Bautista, LPT</li>
              <li>Faith Isabelle M. Bardon</li>
              <li>Dr. Arnel P. Plantado — Compilation</li>
              <li>Mrs. Francisca R. Aquino — Research</li>
              <li>Mr. Hermes F. Avellana — Research</li>
              <li>Provincial Museum of Camarines Norte</li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-primary-foreground/15 flex flex-col md:flex-row justify-between gap-4 text-xs uppercase tracking-[0.2em] text-primary-foreground/50">
          <p>© {new Date().getFullYear()} Sayaw Cam Norteño — A Thesis in Heritage</p>
          <p>Camarines Norte, Philippines</p>
        </div>
      </div>
    </footer>
  );
}