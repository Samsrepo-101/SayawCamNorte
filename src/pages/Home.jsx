import React, { useEffect } from "react";
import Hero from "@/components/site/Hero";
import AboutSection from "@/components/site/AboutSection";
import DancesGrid from "@/components/site/DanceGrid";
import HeritageSection from "@/components/site/HeritageSection";
import PreservationSection from "@/components/site/PreservationSection";

export default function Home() {
  useEffect(() => {
    // smooth hash scroll
    if (window.location.hash) {
      const el = document.querySelector(window.location.hash);
      if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 100);
    }
  }, []);

  return (
    <>
      <Hero />
      <AboutSection />
      <DancesGrid />
      <HeritageSection />
      <PreservationSection />
    </>
  );
}