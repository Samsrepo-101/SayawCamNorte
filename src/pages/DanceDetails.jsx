import React, { useEffect, useRef, useState } from "react";
import { useParams, Link, Navigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Play, MapPin, User, BookOpen, Users, Music, Shirt, Footprints, ImageIcon, Eye, Video, FileAudio, ShoppingCart, X, MessageSquare, ExternalLink, ChevronLeft, ChevronRight, Maximize2, Minimize2 } from "lucide-react";
import { getDanceBySlug, DANCES, DANCE_SUBTABS } from "@/lib/dances";

export default function DanceDetail() {
  const { slug } = useParams();
  const location = useLocation();
  const dance = getDanceBySlug(slug);
  const [activeTab, setActiveTab] = useState("overview");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentNotePieceIndex, setCurrentNotePieceIndex] = useState(0);
  const [activeStep, setActiveStep] = useState(null);
  const [isStepModalOpen, setIsStepModalOpen] = useState(false);
  const [isStepVideoFullscreen, setIsStepVideoFullscreen] = useState(false);
  const stepVideoContainerRef = useRef(null);

  const openModal = (index = 0) => {
    setCurrentNotePieceIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const nextNotePiece = (e) => {
    e.stopPropagation();
    if (dance.musicSheetImage && dance.musicSheetImage.length > 0) {
      setCurrentNotePieceIndex((prev) => (prev + 1) % dance.musicSheetImage.length);
    }
  };

  const prevNotePiece = (e) => {
    e.stopPropagation();
    if (dance.musicSheetImage && dance.musicSheetImage.length > 0) {
      setCurrentNotePieceIndex((prev) => (prev - 1 + dance.musicSheetImage.length) % dance.musicSheetImage.length);
    }
  };

  const handleNextStep = (e) => {
    e?.stopPropagation();
    const videoSteps = dance.steps.filter(s => !s.isNote && s.video);
    const currentIndex = videoSteps.findIndex(s => s.name === activeStep?.name);
    if (currentIndex !== -1) {
      const nextIndex = (currentIndex + 1) % videoSteps.length;
      setActiveStep(videoSteps[nextIndex]);
    }
  };

  const handlePrevStep = (e) => {
    e?.stopPropagation();
    const videoSteps = dance.steps.filter(s => !s.isNote && s.video);
    const currentIndex = videoSteps.findIndex(s => s.name === activeStep?.name);
    if (currentIndex !== -1) {
      const prevIndex = (currentIndex - 1 + videoSteps.length) % videoSteps.length;
      setActiveStep(videoSteps[prevIndex]);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isStepModalOpen) return;
      if (e.key === "ArrowRight") handleNextStep();
      if (e.key === "ArrowLeft") handlePrevStep();
      if (e.key === "Escape") setIsStepModalOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isStepModalOpen, activeStep]);

  useEffect(() => {
    const syncFullscreenState = () => {
      setIsStepVideoFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", syncFullscreenState);
    return () => document.removeEventListener("fullscreenchange", syncFullscreenState);
  }, []);

  const handleToggleStepVideoFullscreen = async (e) => {
    e?.stopPropagation();

    const container = stepVideoContainerRef.current;
    if (!container) return;

    const requestFullscreen =
      container.requestFullscreen ||
      container.webkitRequestFullscreen ||
      container.msRequestFullscreen;
    const exitFullscreen =
      document.exitFullscreen ||
      document.webkitExitFullscreen ||
      document.msExitFullscreen;

    try {
      if (document.fullscreenElement) {
        if (exitFullscreen) {
          await exitFullscreen.call(document);
        }
      } else if (requestFullscreen) {
        await requestFullscreen.call(container);
      }
    } catch {
      // Fail silently if fullscreen is blocked by browser/device.
    }
  };

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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      setActiveTab(id);
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 200);
    }
  }, [location.hash]);

  if (!dance) return <Navigate to="/" replace />;

  const currentIndex = DANCES.findIndex((d) => d.slug === slug);
  const next = DANCES[(currentIndex + 1) % DANCES.length];
  const prev = DANCES[(currentIndex - 1 + DANCES.length) % DANCES.length];

  const scrollToSection = (id) => {
    setActiveTab(id);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <article className="bg-background w-full max-w-full overflow-x-hidden">

      {/* ── HERO ── */}
      <section id="overview" className="relative min-h-[92vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <motion.img
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
            src={dance.image}
            alt={dance.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-background/60" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-32 md:pt-40 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.22em] text-foreground/70 hover:text-primary transition-colors mb-10 font-sans"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Archive
            </Link>
            <p className="font-serif italic text-accent text-base md:text-lg tracking-[0.3em] uppercase mb-4">
              {dance.classification}
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-[0.95] text-balance max-w-4xl">
              {dance.name}
            </h1>
            <p className="mt-8 font-display italic text-2xl md:text-3xl text-foreground/85 max-w-2xl leading-relaxed">
              {dance.tagline}
            </p>

            {/* Instant Audio Player */}
            <div className="mt-12 max-w-md bg-background/40 backdrop-blur-md border border-white/10 p-6 rounded-2xl shadow-2xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg">
                  <Music className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-serif text-lg text-foreground leading-tight">{dance.name}</h4>
                  <p className="text-xs uppercase tracking-widest text-foreground/60 font-sans">Traditional Accompaniment</p>
                </div>
              </div>
              <audio controls src={dance.audio} className="w-full h-8 opacity-90 contrast-125" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── STICKY SUB-NAV ── */}
      <div className="sticky top-16 z-40 bg-background/95 backdrop-blur border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 overflow-x-auto hide-scrollbar">
          <div className="flex gap-1 min-w-max py-1">
            {DANCE_SUBTABS.map((tab) => {
              const Icon = TAB_ICONS[tab.id];
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => scrollToSection(tab.id)}
                  className={`flex items-center gap-1 px-3 py-1.5 text-[10px] font-sans font-medium uppercase tracking-[0.12em] rounded transition-all whitespace-nowrap ${isActive
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-foreground/70 hover:text-primary hover:bg-primary/5"
                    }`}
                >
                  {Icon && <Icon className={`w-3 h-3 ${isActive ? 'text-primary-foreground' : 'text-accent'}`} />}
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── META BAR ── */}
      <section className="border-b border-border bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          <Meta icon={MapPin} label="Origin" value={dance.origin} />
          <Meta icon={BookOpen} label="Dance Culture" value={dance.culture} />
          <Meta icon={User} label="Researcher" value={dance.researcher} />
          <Meta icon={Users} label="Performers" value={dance.performer} />
        </div>
      </section>

      {/* ── BACKGROUND & CONTEXT ── */}
      <section id="background" className="py-28 md:py-36 bg-secondary/10 scroll-mt-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <p className="text-sm uppercase tracking-[0.35em] text-accent mb-6 font-sans">
              Background & Context
            </p>
            <p className="font-serif text-xl md:text-3xl lg:text-4xl leading-relaxed text-foreground/90 break-words first-letter:font-display first-letter:text-6xl md:first-letter:text-7xl first-letter:float-left first-letter:mr-4 first-letter:leading-none first-letter:text-primary first-letter:italic">
              {dance.description}
            </p>
            <p className="mt-10 text-xl md:text-2xl text-foreground/75 leading-relaxed font-display">
              {dance.story}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── PERFORMERS & RESEARCHERS ── */}
      <section id="performers" className="py-24 md:py-32 bg-secondary/30 scroll-mt-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">
          <p className="text-sm uppercase tracking-[0.35em] text-accent mb-10 font-sans">
            Performers & Researchers
          </p>
          <div className="grid md:grid-cols-2 gap-10">
            <InfoCard title="Performer(s)" icon={Users}>
              <p className="font-serif text-2xl md:text-3xl text-foreground">{dance.performer}</p>
              <p className="mt-3 text-lg text-foreground/65 font-sans leading-relaxed">
                This dance is traditionally performed by {dance.performer.toLowerCase()} representing the culture of {dance.origin}.
              </p>
            </InfoCard>
            <InfoCard title="Researcher / Compiler" icon={User}>
              <p className="font-serif text-2xl md:text-3xl text-foreground">{dance.researcher}</p>
              <p className="mt-3 text-lg text-foreground/65 font-sans leading-relaxed">
                Compiled and documented under the Instructional Materials for Camarines Norte Folk Dances by Dr. Arnel P. Plantado.
              </p>
            </InfoCard>
          </div>
        </div>
      </section>

      {/* ── COSTUME & ACCESSORIES ── */}
      <section id="costume" className="py-28 md:py-36 bg-primary/5 scroll-mt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <p className="text-sm uppercase tracking-[0.35em] text-accent mb-12 font-sans text-center">
            Costume & Accessories
          </p>

          <div className={`grid ${dance.slug === 'pinuhag' ? 'lg:grid-cols-2 max-w-5xl mx-auto' : 'lg:grid-cols-3'} gap-12 lg:gap-20 items-start`}>

            {/* Female Costume Column */}
            {dance.slug !== 'pinuhag' && (
              <div className="order-2 lg:order-1 flex flex-col gap-10">
                <div className="text-right">
                  <p className="text-sm uppercase tracking-[0.3em] text-accent font-sans font-bold mb-4">The Attire</p>
                  <h3 className="font-serif text-4xl lg:text-5xl text-foreground mb-10 leading-tight">Female Costume</h3>

                  <div className="space-y-12">
                    <div className="flex flex-col items-end">
                      <div className="flex items-center gap-3 mb-5 flex-row-reverse">
                        <Shirt className="w-5 h-5 text-accent" />
                        <p className="text-sm uppercase tracking-[0.2em] text-foreground/70 font-sans font-medium">Garment</p>
                      </div>
                      <div className="font-serif text-2xl lg:text-3xl text-foreground/90 leading-relaxed border-r-[3px] border-primary/30 pr-6 py-2">
                        {[].concat(dance.properties.costume.female || []).map((item, index) => (
                          <p key={index} className="mb-2 last:mb-0">{item}</p>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col items-end">
                      <div className="flex items-center gap-3 mb-5 flex-row-reverse">
                        <Footprints className="w-5 h-5 text-accent" />
                        <p className="text-sm uppercase tracking-[0.2em] text-foreground/70 font-sans font-medium">Footwear</p>
                      </div>
                      <div className="font-serif text-xl md:text-2xl text-foreground/80 leading-relaxed pr-6 text-right">
                        {[].concat(dance.properties.footwearFemale || dance.properties.footwear || []).map((item, index) => (
                          <p key={index} className="mb-2 last:mb-0">{item}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Central Portrait Image Column */}
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative w-full max-w-[450px] aspect-[4/6] rounded-sm overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)]">
                <img
                  src={dance.costumeImage || dance.image}
                  alt={`${dance.name} Costume`}
                  className="w-full h-full object-cover transition-transform duration-1000 hover:scale-110"
                />
                <div className="absolute inset-0 border-[1px] border-white/20 m-4" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
            </div>

            {/* Male Costume Column */}
            <div className="order-3 flex flex-col gap-10">
              <div className="text-left">
                <p className="text-sm uppercase tracking-[0.3em] text-accent font-sans font-bold mb-4">The Attire</p>
                <h3 className="font-serif text-4xl lg:text-5xl text-foreground mb-10 leading-tight">Male Costume</h3>

                <div className="space-y-12">
                  <div className="flex flex-col items-start">
                    <div className="flex items-center gap-3 mb-5">
                      <Shirt className="w-5 h-5 text-accent" />
                      <p className="text-sm uppercase tracking-[0.2em] text-foreground/70 font-sans font-medium">Garment</p>
                    </div>
                    <div className="font-serif text-2xl lg:text-3xl text-foreground/90 leading-relaxed border-l-[3px] border-primary/30 pl-6 py-2">
                      {[].concat(dance.properties.costume.male || []).map((item, index) => (
                        <p key={index} className="mb-2 last:mb-0">{item}</p>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col items-start">
                    <div className="flex items-center gap-3 mb-5">
                      <Footprints className="w-5 h-5 text-accent" />
                      <p className="text-sm uppercase tracking-[0.2em] text-foreground/70 font-sans font-medium">Footwear</p>
                    </div>
                    <div className="font-serif text-xl md:text-2xl text-foreground/80 leading-relaxed pl-6">
                      {[].concat(dance.properties.footwearMale || dance.properties.footwear || []).map((item, index) => (
                        <p key={index} className="mb-2 last:mb-0">{item}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Text-based Accessories Section */}
          <div className="mt-32 max-w-5xl mx-auto">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-px bg-primary/30 mb-8" />
              <p className="text-sm uppercase tracking-[0.35em] text-accent mb-10 font-sans font-medium">Accessories & Details</p>

              <div className="flex flex-wrap justify-center gap-x-12 gap-y-8">
                {dance.properties.accessories.map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <span className="text-primary/30 font-serif text-2xl">◊</span>
                    <span className="font-serif text-2xl md:text-3xl text-foreground/85 italic">{item}</span>
                  </div>
                ))}
              </div>
              <p className="mt-16 text-sm font-sans text-foreground/40 italic max-w-2xl leading-relaxed">
                Note: Accessories may vary based on performance requirements. Dancers are encouraged to incorporate adornments that remain faithful to the original dance concept.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── MUSIC & COUNT ── */}
      <section id="music" className="py-24 md:py-32 bg-background scroll-mt-32 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <p className="text-sm uppercase tracking-[0.35em] text-accent mb-4 font-sans font-medium">
            Music & Count
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-16">
            Musical Character
          </h2>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
            {/* Left Column: Properties */}
            <div className="lg:col-span-7 space-y-8">
              <MusicalProperty
                title="STRUCTURE"
                desc={dance.properties.musicalCharacter?.structure || "N/A"}
              />
              <MusicalProperty
                title="TEMPO"
                desc={dance.properties.musicalCharacter?.tempo || "N/A"}
              />
              <MusicalProperty
                title="INSTRUMENTS"
                desc={dance.properties.musicalCharacter?.instruments || "N/A"}
              />
              <MusicalProperty
                title="COUNT"
                desc={dance.properties.musicalCharacter?.count || "N/A"}
              />
              <MusicalProperty
                title="DESCRIPTION"
                desc={dance.properties.musicalCharacter?.description || "N/A"}
              />
            </div>

            {/* Right Column: Media Cards */}
            <div className="lg:col-span-5 space-y-8">
              {/* Audio Player Card */}
              <div className="bg-background border border-border rounded-xl p-8 shadow-sm">
                <p className="text-xs uppercase tracking-[0.25em] text-accent font-sans font-medium mb-6">
                  AUDIO RECORDING
                </p>
                {dance.audio ? (
                  <div className="flex flex-col gap-5">
                    <div className="flex-1">
                      <h4 className="font-serif text-xl text-foreground">{dance.name} — Traditional Music</h4>
                      <p className="text-sm text-muted-foreground font-sans mt-1">Official Audio Recording</p>
                    </div>
                    <audio controls src={dance.audio} className="w-full mt-4" />
                  </div>
                ) : (
                  <>
                    <div className="flex items-start gap-5">
                      <button className="w-14 h-14 rounded-full bg-primary flex items-center justify-center flex-shrink-0 hover:scale-105 transition-transform shadow-md">
                        <Play className="w-6 h-6 text-primary-foreground ml-1" fill="currentColor" />
                      </button>
                      <div className="flex-1">
                        <h4 className="font-serif text-xl text-foreground">{dance.name} — Traditional Music</h4>
                        <p className="text-sm text-muted-foreground font-sans mt-1">Audio file to be uploaded by the research team</p>
                      </div>
                    </div>
                    {/* Fake Audio Wave */}
                    <div className="mt-8 flex items-center justify-between gap-1 h-10 opacity-40">
                      {Array.from({ length: 40 }).map((_, i) => (
                        <div
                          key={i}
                          className="w-1.5 bg-accent rounded-full"
                          style={{ height: `${Math.max(15, Math.random() * 100)}%` }}
                        />
                      ))}
                    </div>
                    <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground font-sans">
                      <span>0:00</span>
                      <div className="w-12 h-0.5 bg-border rounded-full" />
                    </div>
                  </>
                )}
              </div>

              {/* Note Sheet Card */}
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-accent font-sans font-medium mb-4 pl-2">
                  MUSICAL NOTE SHEET
                </p>
                {dance.musicSheetImage && dance.musicSheetImage.length > 0 ? (
                  <div
                    onClick={() => openModal(0)}
                    className="relative bg-background border border-border rounded-xl overflow-hidden cursor-pointer group shadow-sm transition-all hover:shadow-md hover:border-primary/50"
                  >
                    <img
                      src={dance.musicSheetImage[0]}
                      alt={`${dance.name} Note Sheet`}
                      className="w-full h-auto object-contain max-h-[300px]"
                    />
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 bg-background/90 backdrop-blur-sm text-foreground px-4 py-2 rounded-full font-sans text-sm font-medium transition-all transform scale-95 group-hover:scale-100 flex items-center gap-2 shadow-sm border border-border">
                        <Eye className="w-4 h-4" /> View Full Score
                      </div>
                    </div>
                    {dance.musicSheetImage.length > 1 && (
                      <div className="absolute bottom-3 right-3 bg-background/90 backdrop-blur-sm border border-border rounded-full px-3 py-1 text-xs font-sans font-medium">
                        1 of {dance.musicSheetImage.length} Parts
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="bg-primary/5 border-2 border-dashed border-primary/20 rounded-xl p-10 flex flex-col items-center text-center transition-colors hover:bg-primary/10 cursor-pointer">
                    <div className="w-16 h-16 rounded-2xl bg-background border border-border flex items-center justify-center shadow-sm mb-6">
                      <FileAudio className="w-8 h-8 text-primary/60" strokeWidth={1.5} />
                    </div>
                    <h4 className="font-serif text-2xl text-foreground mb-3">Note Sheet</h4>
                    <p className="text-sm text-foreground/70 font-sans leading-relaxed max-w-xs mx-auto mb-8">
                      Upload the musical score for <span className="font-medium text-primary">{dance.name}</span> from the Appendix of the ICET document
                    </p>
                    <button className="px-6 py-2.5 bg-primary/80 hover:bg-primary text-primary-foreground text-sm font-sans font-medium rounded-md transition-colors">
                      Click to upload image
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DANCE STEPS ── */}
      <section id="steps" className="py-24 md:py-32 bg-primary/5 scroll-mt-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">
          <p className="text-sm uppercase tracking-[0.35em] text-accent mb-4 font-sans">
            Basic
          </p>
          <h2 className="font-serif text-4xl md:text-5xl mb-14 text-foreground">
            Fundamental <span className="italic text-primary">Steps</span>
          </h2>

          <div className="space-y-10">
            {dance.steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.06 }}
                className={`overflow-hidden transition-all duration-500 group/step ${step.isNote ? "bg-primary/5 border-l-4 border-primary p-8" : "grid md:grid-cols-[minmax(300px,_1fr)_1.5fr] gap-0 bg-background border border-border cursor-pointer hover:shadow-2xl hover:border-primary/40"}`}
                onClick={() => {
                  if (!step.isNote && step.video) {
                    setActiveStep(step);
                    setIsStepModalOpen(true);
                  }
                }}
              >
                {!step.isNote ? (
                  <>
                    {/* Video / Image Container */}
                    <div className="relative aspect-video md:aspect-auto bg-secondary/50 flex flex-col items-center justify-center gap-3 border-b md:border-b-0 md:border-r border-border min-h-[220px] overflow-hidden">
                      {step.video ? (
                        <>
                          <img
                            src={step.thumbnail || dance.image}
                            alt={step.name}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover/step:scale-105"
                          />
                          <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover/step:opacity-100 transition-opacity flex items-center justify-center">
                            <div className="w-16 h-16 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center shadow-2xl transform scale-75 group-hover/step:scale-100 transition-transform duration-500">
                              <Play className="w-6 h-6 text-primary fill-current" />
                            </div>
                          </div>
                        </>
                      ) : (
                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6">
                          <ImageIcon className="w-10 h-10 text-muted-foreground/30" />
                          <p className="text-sm text-muted-foreground/60 font-sans text-center">
                            Upload GIF or image for<br />
                            <span className="font-serif italic text-foreground/60">"{step.name}"</span>
                          </p>
                        </div>
                      )}
                      {/* Step number badge */}
                      <div className="absolute top-4 left-4 w-9 h-9 bg-primary text-primary-foreground font-serif text-lg flex items-center justify-center shadow-sm z-10">
                        {i + 1}
                      </div>
                    </div>

                    {/* Step Description */}
                    <div className="p-8 md:p-10 flex flex-col justify-center transition-colors duration-500 group-hover/step:bg-primary/[0.02]">
                      <p className="text-xs uppercase tracking-[0.25em] text-accent font-sans mb-3 font-bold">
                        Step {i + 1}
                      </p>
                      <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground mb-5 group-hover/step:text-primary transition-colors">
                        {step.name}
                      </h3>
                      <p className="text-lg md:text-xl text-foreground/75 font-sans leading-relaxed whitespace-pre-line">
                        {step.description}
                      </p>
                      {step.count && (
                        <div className="mt-8 inline-flex items-center gap-2 bg-primary/5 border border-primary/10 px-4 py-2 w-fit">
                          <span className="text-sm font-sans text-primary font-medium tracking-wide uppercase">Count: {step.count}</span>
                        </div>
                      )}
                    </div>
                  </>
                ) : (
                  <div className="flex flex-col gap-4">
                    <p className="text-lg md:text-xl text-foreground/80 font-sans leading-relaxed italic whitespace-pre-line">
                      {step.description}
                    </p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DANCE LITERATURE ── */}
      <section id="literature" className="py-28 md:py-36 scroll-mt-32 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center mb-24">
            <p className="text-sm uppercase tracking-[0.35em] text-accent mb-6 font-sans">
              Documentation
            </p>
            <h2 className="font-serif text-5xl md:text-6xl text-foreground leading-tight">Dance Literature</h2>
            <div className="w-24 h-1 bg-primary/20 mx-auto mt-10" />
          </div>

          <div className="space-y-32">
            {dance.literature?.map((lit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="relative"
              >
                <div className="flex flex-col md:flex-row gap-12 items-start">
                  <div className="md:w-1/4 sticky top-40">
                    <div className="flex items-center gap-3 mb-4">
                      <BookOpen className="w-5 h-5 text-primary/40" />
                      <span className="text-6xl font-serif text-primary/10 block">0{idx + 1}</span>
                    </div>
                    <h3 className="font-serif text-3xl text-foreground mb-2">{lit.title}</h3>
                    {lit.subtitle && (
                      <p className="text-sm uppercase tracking-widest text-accent font-sans font-bold">{lit.subtitle}</p>
                    )}
                  </div>
                  <div className="md:w-3/4">
                    <div className="space-y-8">
                      {lit.content.map((paragraph, pIdx) => (
                        <p
                          key={pIdx}
                          className="font-serif text-lg md:text-2xl text-foreground/80 leading-relaxed border-l border-border pl-5 md:pl-8 break-words"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-40 pt-20 border-t border-border/50 text-center">
            <p className="font-display text-2xl text-foreground/60 italic">
              "Preserving the rhythm of our ancestors, one step at a time."
            </p>
          </div>
        </div>
      </section>

      {/* ── PERFORMANCE VIDEO INQUIRY ── */}
      <section id="video" className="py-28 md:py-40 bg-secondary/10 scroll-mt-32 border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">
          <p className="text-sm uppercase tracking-[0.35em] text-accent mb-12 font-sans font-bold text-center">
            Performance Video
          </p>

          <div className="bg-background border border-border shadow-2xl rounded-2xl overflow-hidden">
            <div className="grid md:grid-cols-12 items-stretch">
              {/* Person Picture Side */}
              <div className="md:col-span-5 relative min-h-[350px] overflow-hidden">
                <img
                  src={dance.image}
                  alt={dance.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-background/0 to-background" />
              </div>

              {/* Description & Contact Side */}
              <div className="md:col-span-7 p-10 md:p-16 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-0.5 bg-primary" />
                  <p className="text-xs uppercase tracking-[0.3em] text-primary font-sans font-bold">Inquiry & Archives</p>
                </div>

                <h3 className="font-serif text-3xl md:text-5xl text-foreground mb-6 leading-tight">
                  Reach out for the <span className="italic text-primary">Full Performance</span> Video
                </h3>

                <p className="font-sans text-lg md:text-xl text-foreground/75 leading-relaxed mb-10">
                  {dance.contact?.description || "For the complete performance footage and high-quality archival videos of this dance, please coordinate with our official cultural documentation partner."}
                </p>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
                  <div className="flex items-center gap-5">
                    <img 
                      src={dance.contact?.picture || "/sirPlantado.jpg"} 
                      alt={dance.contact?.name || "Dr. Arnel P. Plantado"} 
                      className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover shadow-md border-2 border-primary/10"
                    />
                    <div className="flex flex-col">
                      <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-1 font-sans">Coordinated by</p>
                      <p className="font-serif text-2xl md:text-3xl text-foreground">{dance.contact?.name || "Dr. Arnel P. Plantado"}</p>
                    </div>
                  </div>

                  <div className="h-px w-full sm:w-px sm:h-12 bg-border" />

                  <a
                    href={dance.contact?.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-[#1877F2] hover:bg-[#166fe5] text-white rounded-full font-sans font-bold uppercase tracking-[0.1em] text-sm shadow-lg shadow-blue-500/20 transition-all hover:scale-105 active:scale-95"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Contact via Facebook
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-3 bg-primary/5 border border-primary/10 px-6 py-3 rounded-full">
              <MessageSquare className="w-4 h-4 text-primary" />
              <p className="text-sm font-sans text-foreground/70 italic">
                Our archive is growing. For educational use, high-resolution masters are available upon request.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── NEXT / PREV NAVIGATION ── */}
      <section className="py-24 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 grid md:grid-cols-2 gap-10">
          <Link to={`/dance/${prev.slug}`} className="group">
            <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground mb-4 font-sans">
              <ArrowLeft className="w-4 h-4 inline mr-2" /> Previous Dance
            </p>
            <h3 className="font-serif text-3xl md:text-4xl group-hover:text-primary transition-colors">
              {prev.name}
            </h3>
            <p className="font-display italic text-lg text-muted-foreground mt-2">{prev.tagline}</p>
          </Link>
          <Link to={`/dance/${next.slug}`} className="group md:text-right">
            <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground mb-4 font-sans">
              Next Dance <ArrowRight className="w-4 h-4 inline ml-2" />
            </p>
            <h3 className="font-serif text-3xl md:text-4xl group-hover:text-primary transition-colors">
              {next.name}
            </h3>
            <p className="font-display italic text-lg text-muted-foreground mt-2">{next.tagline}</p>
          </Link>
        </div>
      </section>

      {/* ── NOTE PIECE MODAL ── */}
      {isModalOpen && dance.musicSheetImage && dance.musicSheetImage.length > 0 && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 md:p-10 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-5xl max-h-full flex flex-col bg-background/5 rounded-xl border border-white/10 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/10 bg-black/50">
              <div className="text-white">
                <h3 className="font-serif text-xl">{dance.name} - Note Sheet</h3>
                <p className="text-xs uppercase tracking-widest text-white/50 mt-1">
                  Part {currentNotePieceIndex + 1} of {dance.musicSheetImage.length}
                </p>
              </div>
              <button
                onClick={closeModal}
                className="p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image */}
            <div className="relative flex-1 overflow-auto flex items-center justify-center p-4 bg-black/20 min-h-[50vh]">
              <img
                src={dance.musicSheetImage[currentNotePieceIndex]}
                alt={`${dance.name} Note Sheet Part ${currentNotePieceIndex + 1}`}
                className="max-w-full max-h-[80vh] object-contain rounded-md shadow-2xl"
              />

              {/* Navigation Overlays */}
              {dance.musicSheetImage.length > 1 && (
                <>
                  <button
                    onClick={prevNotePiece}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-black/80 text-white rounded-full backdrop-blur-md transition-all hover:scale-105 border border-white/10"
                  >
                    <ArrowLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={nextNotePiece}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-black/80 text-white rounded-full backdrop-blur-md transition-all hover:scale-105 border border-white/10"
                  >
                    <ArrowRight className="w-6 h-6" />
                  </button>
                </>
              )}
            </div>

            {/* Thumbnail Navigation (Optional if many parts) */}
            {dance.musicSheetImage.length > 1 && (
              <div className="p-4 bg-black/50 border-t border-white/10 flex items-center justify-center gap-3 overflow-x-auto hide-scrollbar">
                {dance.musicSheetImage.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentNotePieceIndex(i)}
                    className={`relative w-16 h-16 rounded-md overflow-hidden flex-shrink-0 border-2 transition-all ${i === currentNotePieceIndex ? 'border-primary scale-105' : 'border-transparent opacity-50 hover:opacity-100'
                      }`}
                  >
                    <img src={img} alt={`Thumb ${i}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
      {/* ── STEP VIDEO MODAL ── */}
      {isStepModalOpen && activeStep && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsStepModalOpen(false)}
            className="absolute inset-0 bg-black/95 backdrop-blur-md"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative w-full max-w-6xl bg-background border border-white/10 overflow-hidden shadow-2xl grid grid-cols-1 md:grid-cols-5 h-full max-h-[85vh]"
          >
            <button
              onClick={() => setIsStepModalOpen(false)}
              className="absolute top-6 right-6 z-20 w-12 h-12 bg-black/50 text-white rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-black/80 transition-all"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Video Side */}
            <div className="w-full md:col-span-3 p-4 md:p-6 bg-black/90">
              <div ref={stepVideoContainerRef} className="w-full aspect-video rounded-xl overflow-hidden bg-black flex items-center justify-center relative group">
                {/* Navigation Arrows */}
                <button 
                  onClick={handlePrevStep}
                  className="absolute left-4 z-20 w-12 h-12 bg-black/40 text-white rounded-full flex items-center justify-center backdrop-blur-sm opacity-100 md:opacity-0 group-hover:opacity-100 hover:bg-black/60 transition-all"
                  aria-label="Previous step"
                >
                  <ChevronLeft className="w-8 h-8" />
                </button>
                <button 
                  onClick={handleNextStep}
                  className="absolute right-4 z-20 w-12 h-12 bg-black/40 text-white rounded-full flex items-center justify-center backdrop-blur-sm opacity-100 md:opacity-0 group-hover:opacity-100 hover:bg-black/60 transition-all"
                  aria-label="Next step"
                >
                  <ChevronRight className="w-8 h-8" />
                </button>
                <button
                  onClick={handleToggleStepVideoFullscreen}
                  className="absolute top-3 right-3 z-20 inline-flex items-center gap-2 px-3 py-2 bg-black/50 text-white rounded-md backdrop-blur-sm hover:bg-black/70 transition-colors"
                  aria-label={isStepVideoFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
                >
                  {isStepVideoFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                  <span className="text-xs font-medium hidden sm:inline">
                    {isStepVideoFullscreen ? "Exit Fullscreen" : "Fullscreen"}
                  </span>
                </button>

                <div className="w-full h-full relative flex items-center justify-center" key={activeStep.video}>
                  <video
                    src={activeStep.video}
                    poster={activeStep.thumbnail || dance.image}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-contain pointer-events-none"
                  />
                </div>
              </div>
            </div>

            {/* Info Side */}
            <div className="w-full md:col-span-2 p-6 md:p-10 overflow-y-auto flex flex-col min-h-0">
              <p className="text-sm uppercase tracking-[0.3em] text-accent font-sans font-bold mb-6">Fundamental Step</p>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground mb-8 leading-tight break-words">{activeStep.name}</h2>

              <div className="w-16 h-1 bg-primary/20 mb-10" />

              <p className="font-sans text-lg sm:text-xl text-foreground/80 leading-relaxed whitespace-pre-line mb-10 break-words">
                {activeStep.description}
              </p>

              {activeStep.count && (
                <div className="mt-auto pt-10 border-t border-border">
                  <p className="text-xs uppercase tracking-widest text-accent font-sans font-bold mb-2">Timing</p>
                  <p className="font-serif text-3xl text-foreground italic">{activeStep.count}</p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </article>
  );
}

function Meta({ icon: Icon, label, value }) {
  return (
    <div>
      <div className="flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-muted-foreground mb-2 font-sans">
        <Icon className="w-4 h-4" /> {label}
      </div>
      <p className="font-serif text-xl md:text-2xl text-foreground">{value}</p>
    </div>
  );
}

function InfoCard({ title, icon: Icon, children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7 }}
      className="bg-background border border-border p-8"
    >
      <div className="flex items-center gap-3 mb-5">
        <Icon className="w-5 h-5 text-accent" />
        <p className="text-sm uppercase tracking-[0.28em] text-foreground font-sans font-medium">{title}</p>
      </div>
      {children}
    </motion.div>
  );
}

function PropertyBlock({ icon: Icon, title, children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7 }}
    >
      <div className="flex items-center gap-3 mb-5">
        <Icon className="w-5 h-5 text-accent" />
        <p className="text-sm uppercase tracking-[0.28em] text-foreground font-sans font-medium">{title}</p>
      </div>
      <div className="border-l-2 border-border pl-6">
        {children}
      </div>
    </motion.div>
  );
}

function MusicalProperty({ title, desc }) {
  return (
    <div className="border-l-[3px] border-primary/60 pl-6 py-1">
      <p className="text-xs uppercase tracking-[0.25em] text-accent font-sans font-medium mb-3">
        {title}
      </p>
      <div className="font-sans text-lg text-foreground/85 leading-relaxed">
        {Array.isArray(desc) ? (
          desc.map((line, i) => (
            <p key={i}>{line}</p>
          ))
        ) : (
          <p>{desc}</p>
        )}
      </div>
    </div>
  );
}

function CostumePlaceholder({ type }) {
  return (
    <div className="relative overflow-hidden bg-secondary/20 border border-border group cursor-pointer w-full aspect-[4/5] md:aspect-auto md:h-[600px] flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center gap-6 p-12 transition-transform duration-700 group-hover:scale-105">
        <ImageIcon className="w-16 h-16 text-muted-foreground/20 stroke-[1]" />
        <p className="text-sm text-center text-muted-foreground/70 font-sans uppercase tracking-[0.2em]">
          Visual For<br /><span className="font-medium text-foreground block mt-3 text-base">{type}</span>
        </p>
      </div>
      <div className="absolute inset-0 border-[12px] border-background/20 pointer-events-none mix-blend-overlay" />
      <div className="absolute bottom-0 left-0 right-0 bg-background/95 border-t border-border px-6 py-4">
        <p className="font-serif italic text-lg text-foreground/90">
          {type}
        </p>
      </div>
    </div>
  );
}