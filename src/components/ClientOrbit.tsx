"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const CLIENTS = [
  { name: "COLDY", label: "Real Estate" },
  { name: "ERA", label: "Hospitality" },
  { name: "INGRAD", label: "Urban Dev" },
  { name: "PIONEER", label: "Commercial" },
  { name: "ALARA", label: "Luxury Design" },
  { name: "LANDMARK", label: "Waterfront" },
  { name: "CORONATION", label: "Private Wealth" },
  { name: "EKO PACIFIC", label: "Masterplan" },
];

export default function ClientOrbit() {
  const containerRef = useRef<HTMLDivElement>(null);
  const orbitGroupRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Rotate the 3D orbit ring smoothly on scroll
      gsap.to(orbitGroupRef.current, {
        rotation: 60,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      // Title reveal
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, scale: 0.94, y: 30 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const totalClients = CLIENTS.length;
  const radiusX = 400; // Elliptical horizontal radius
  const radiusY = 170; // Elliptical vertical perspective radius

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-[120vh] py-32 md:py-44 px-6 md:px-12 bg-[#0a0a0b] text-[#f5f5f2] border-t border-white/10 overflow-hidden flex flex-col justify-between items-center"
      style={{ perspective: "1000px" }}
    >
      {/* Chapter Tag */}
      <div className="flex items-center gap-3 mb-10">
        <span className="w-1.5 h-1.5 rounded-full bg-[#e63928]" />
        <span className="font-sans-ui text-[11px] uppercase tracking-[0.22em] text-[#88888e]">
          08 / Institutional Network
        </span>
      </div>

      {/* 3D Tilted Elliptical Orbit Stage matching video 00:21 */}
      <div className="relative w-full max-w-5xl h-[460px] md:h-[540px] flex items-center justify-center my-auto">
        {/* Subtle Elliptical Orbit Rails */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div
            className="w-[88%] md:w-[840px] h-[340px] border border-white/15 rounded-[50%] opacity-40"
            style={{ transform: "rotateX(20deg)" }}
          />
          <div
            className="absolute w-[98%] md:w-[940px] h-[400px] border border-white/10 rounded-[50%] stroke-dasharray opacity-25"
            style={{ transform: "rotateX(20deg)" }}
          />
        </div>

        {/* Orbiting Client Discs */}
        <div
          ref={orbitGroupRef}
          className="absolute inset-0 flex items-center justify-center pointer-events-none will-change-transform"
        >
          {CLIENTS.map((client, i) => {
            const angle = (i * 2 * Math.PI) / totalClients;
            const x = Math.cos(angle) * radiusX;
            const y = Math.sin(angle) * radiusY;

            return (
              <div
                key={i}
                className="absolute flex items-center justify-center will-change-transform pointer-events-auto group cursor-default"
                style={{
                  transform: `translate(${x}px, ${y}px)`,
                }}
              >
                {/* Circular White Badge Disc matching video 00:21 */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-[#f4f3ef] text-[#121214] flex flex-col items-center justify-center p-2 shadow-2xl border border-black/10 group-hover:scale-110 group-hover:bg-white transition-all duration-300">
                  <span className="font-sans-ui text-[9px] sm:text-[10px] md:text-[11px] font-bold tracking-wider text-center leading-tight">
                    {client.name}
                  </span>
                  <span className="text-[7px] text-[#66666e] uppercase tracking-tighter text-center mt-0.5 hidden sm:block">
                    {client.label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Center Typography matching video 00:21 */}
        <div
          ref={titleRef}
          className="relative z-10 text-center max-w-2xl px-4 pointer-events-none"
        >
          <h2 className="font-serif-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-[#f5f5f2] leading-[0.98] tracking-tight">
            Choose to <br />
            <span className="italic font-normal">Work With Us</span>
          </h2>
        </div>
      </div>

      {/* Structured Category Columns below orbit matching video 00:21 */}
      <div className="w-full max-w-5xl mx-auto pt-16 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 font-sans-ui text-[11px] text-[#88888e] tracking-wider uppercase">
        <div>
          <span className="text-white block mb-1">Corporate HQ</span>
          <span>Victoria Island, Lagos</span>
        </div>
        <div>
          <span className="text-white block mb-1">Abuja Atelier</span>
          <span>Maitama District, Abuja</span>
        </div>
        <div>
          <span className="text-white block mb-1">Practice Focus</span>
          <span>Residential &bull; Cultural</span>
        </div>
        <div className="text-left md:text-right">
          <span className="text-white block mb-1">Affiliations</span>
          <span>NIA &bull; ARCON &bull; RIBA</span>
        </div>
      </div>
    </section>
  );
}
