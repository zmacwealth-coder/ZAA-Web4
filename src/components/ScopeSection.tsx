"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const SCOPES = [
  {
    code: "ARC-01",
    title: "Architectural Concept",
    desc: "Volumetric studies, spatial zoning, cultural context, and master planning topology.",
    sheet: "PLAN 01 / REV B",
  },
  {
    code: "FAC-02",
    title: "Facade & Climate Solutions",
    desc: "Passive cooling screens, solar-calibrated louvers, and sustainable thermal envelopes.",
    sheet: "ELEV 04 / SECTION",
  },
  {
    code: "DOC-03",
    title: "Working Documentation",
    desc: "Execution blueprints, MEP integration, civil engineering tolerances, and material schedules.",
    sheet: "SPEC 12 / DETAILS",
  },
  {
    code: "VIS-04",
    title: "Visualizations & Spatial Simulation",
    desc: "High-fidelity radiometric ray-traced renders, physical daylight studies, and immersive walkthroughs.",
    sheet: "RENDER 09 / MONOGRAPH",
  },
];

export default function ScopeSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Large text reveal
      gsap.fromTo(
        titleRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.4,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
          },
        }
      );

      // Cards staggered reveal
      if (cardsRef.current) {
        const items = cardsRef.current.querySelectorAll(".scope-card");
        gsap.fromTo(
          items,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.15,
            duration: 1.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 85%",
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full py-28 md:py-40 px-6 md:px-12 bg-[#f4f3ef] border-t border-[#121214]/10"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Index */}
        <div className="flex items-center gap-3 mb-12">
          <span className="w-1.5 h-1.5 rounded-full bg-[#e63928]" />
          <span className="font-sans-ui text-[11px] uppercase tracking-[0.22em] text-[#6e6e73]">
            02 / Scope of Deliverables
          </span>
        </div>

        {/* Large Typographic Scope Statement matching video 00:04 */}
        <h2
          ref={titleRef}
          className="font-serif-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-[#121214] leading-[1.18] tracking-tight max-w-5xl mb-20 md:mb-28"
        >
          Architectural concept, facade and planning solutions, sketch project,
          working documentation, visualizations.
        </h2>

        {/* Technical Blueprint Documentation Cards matching video 00:05 */}
        <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SCOPES.map((item, idx) => (
            <div
              key={idx}
              className="scope-card group relative p-6 bg-[#eae8e2]/60 hover:bg-[#eae8e2] border border-[#121214]/10 transition-all duration-300 rounded-sm flex flex-col justify-between min-h-[300px]"
            >
              {/* Technical Header */}
              <div className="flex justify-between items-start font-sans-ui text-[10px] tracking-[0.2em] text-[#6e6e73] border-b border-[#121214]/10 pb-3">
                <span className="text-[#e63928] font-mono font-medium">{item.code}</span>
                <span className="font-mono">{item.sheet}</span>
              </div>

              {/* Architectural Technical Schematic SVG */}
              <div className="my-6 h-28 flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity">
                <svg
                  viewBox="0 0 120 80"
                  className="w-full h-full stroke-[#121214] fill-none stroke-[0.75]"
                >
                  {idx === 0 && (
                    <>
                      {/* Floor plan schematic */}
                      <rect x="15" y="15" width="90" height="50" strokeDasharray="3 2" />
                      <line x1="45" y1="15" x2="45" y2="65" />
                      <line x1="15" y1="40" x2="45" y2="40" />
                      <circle cx="75" cy="40" r="14" strokeWidth="0.5" />
                      <line x1="80" y1="15" x2="80" y2="30" />
                      <circle cx="30" cy="28" r="1.5" fill="#121214" />
                    </>
                  )}
                  {idx === 1 && (
                    <>
                      {/* Louver & facade elevation */}
                      <line x1="10" y1="65" x2="110" y2="65" />
                      <line x1="20" y1="20" x2="100" y2="20" />
                      {[25, 35, 45, 55, 65, 75, 85, 95].map((x, i) => (
                        <line key={i} x1={x} y1="20" x2={x} y2="65" strokeWidth="0.8" />
                      ))}
                      <line x1="20" y1="42" x2="100" y2="42" strokeDasharray="2 2" />
                    </>
                  )}
                  {idx === 2 && (
                    <>
                      {/* Structural axonometric */}
                      <polygon points="60,15 95,30 60,45 25,30" />
                      <line x1="25" y1="30" x2="25" y2="60" />
                      <line x1="60" y1="45" x2="60" y2="75" />
                      <line x1="95" y1="30" x2="95" y2="60" />
                      <line x1="25" y1="60" x2="60" y2="75" />
                      <line x1="60" y1="75" x2="95" y2="60" />
                      <line x1="60" y1="15" x2="60" y2="45" strokeDasharray="2 2" />
                    </>
                  )}
                  {idx === 3 && (
                    <>
                      {/* Camera frustum & perspective rays */}
                      <circle cx="20" cy="40" r="4" fill="#121214" />
                      <polygon points="40,20 100,10 100,70 40,60" />
                      <line x1="20" y1="40" x2="40" y2="20" strokeDasharray="2 2" />
                      <line x1="20" y1="40" x2="40" y2="60" strokeDasharray="2 2" />
                      <line x1="70" y1="15" x2="70" y2="65" strokeWidth="0.5" />
                    </>
                  )}
                </svg>
              </div>

              {/* Title & Description */}
              <div>
                <h3 className="font-serif-display text-xl font-normal text-[#121214] mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="font-sans-ui text-xs text-[#55555c] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
