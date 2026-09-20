"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function PrecisionSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const sketch1Ref = useRef<HTMLDivElement>(null);
  const sketch2Ref = useRef<HTMLDivElement>(null);
  const sketch3Ref = useRef<HTMLDivElement>(null);
  const sketch4Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax drifting for floating sketches
      gsap.to(sketch1Ref.current, {
        y: -120,
        x: 20,
        rotation: 3,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
        },
      });

      gsap.to(sketch2Ref.current, {
        y: -180,
        x: -30,
        rotation: -2,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.8,
        },
      });

      gsap.to(sketch3Ref.current, {
        y: -90,
        rotation: 1.5,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.9,
        },
      });

      gsap.to(sketch4Ref.current, {
        y: -150,
        x: 15,
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
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.4,
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

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-[120vh] py-36 px-6 md:px-12 bg-[#f4f3ef] border-t border-[#121214]/10 overflow-hidden flex flex-col justify-center items-center"
    >
      {/* Background Subtle Grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#121214 1px, transparent 1px), linear-gradient(to right, #121214 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating Sketch 1 (Top Left Isometric Box Pavilion) */}
      <div
        ref={sketch1Ref}
        className="absolute top-[8%] left-[4%] md:left-[10%] w-60 md:w-80 p-5 bg-white/70 backdrop-blur-xs border border-[#121214]/15 shadow-sm rounded-xs pointer-events-none"
      >
        <div className="flex justify-between text-[9px] font-mono tracking-widest text-[#77777e] mb-3 border-b border-[#121214]/10 pb-1">
          <span>FIG 01 // ISOMETRIC</span>
          <span>SCALE 1:100</span>
        </div>
        <svg viewBox="0 0 200 120" className="w-full stroke-[#121214] fill-none stroke-[1]">
          {/* Isometric volumetric massing */}
          <polygon points="100,20 160,50 100,80 40,50" strokeWidth="1.2" />
          <line x1="40" y1="50" x2="40" y2="100" />
          <line x1="100" y1="80" x2="100" y2="130" />
          <line x1="160" y1="50" x2="160" y2="100" />
          <polygon points="40,100 100,130 160,100" strokeWidth="1.2" />
          <line x1="100" y1="20" x2="100" y2="80" strokeDasharray="3 2" />
        </svg>
      </div>

      {/* Floating Sketch 2 (Top Right Cantilever Section) */}
      <div
        ref={sketch2Ref}
        className="absolute top-[14%] right-[3%] md:right-[8%] w-64 md:w-96 p-6 bg-white/80 backdrop-blur-xs border border-[#121214]/15 shadow-sm rounded-xs pointer-events-none"
      >
        <div className="flex justify-between text-[9px] font-mono tracking-widest text-[#77777e] mb-3 border-b border-[#121214]/10 pb-1">
          <span>SEC 04 // LONGITUDINAL</span>
          <span>TOLERANCE &plusmn;2MM</span>
        </div>
        <svg viewBox="0 0 240 110" className="w-full stroke-[#121214] fill-none stroke-[1]">
          {/* Structural section */}
          <line x1="10" y1="95" x2="230" y2="95" strokeWidth="1.5" />
          <polyline points="30,95 30,30 120,30 210,15 210,95" strokeWidth="1.5" />
          <line x1="120" y1="30" x2="120" y2="95" strokeWidth="1.2" />
          <line x1="30" y1="60" x2="210" y2="60" strokeDasharray="3 2" />
          {[50, 70, 90, 140, 160, 180].map((x, i) => (
            <line key={i} x1={x} y1="30" x2={x} y2="95" strokeWidth="0.5" strokeDasharray="2 2" />
          ))}
        </svg>
      </div>

      {/* Floating Sketch 3 (Bottom Left Modernist Tower Section) */}
      <div
        ref={sketch3Ref}
        className="absolute bottom-[10%] left-[6%] md:left-[12%] w-56 md:w-72 p-5 bg-white/75 backdrop-blur-xs border border-[#121214]/15 shadow-sm rounded-xs pointer-events-none"
      >
        <div className="flex justify-between text-[9px] font-mono tracking-widest text-[#77777e] mb-3 border-b border-[#121214]/10 pb-1">
          <span>ELEV 02 // AIR COLUMN</span>
          <span>VENTILATION STACK</span>
        </div>
        <svg viewBox="0 0 160 140" className="w-full stroke-[#121214] fill-none stroke-[1]">
          <line x1="20" y1="130" x2="140" y2="130" strokeWidth="1.5" />
          <rect x="50" y="30" width="60" height="100" strokeWidth="1.2" />
          <polygon points="50,30 80,10 110,30" strokeWidth="1.2" />
          <line x1="80" y1="10" x2="80" y2="130" strokeDasharray="3 3" />
        </svg>
      </div>

      {/* Floating Sketch 4 (Bottom Right Perspective Wireframe) */}
      <div
        ref={sketch4Ref}
        className="absolute bottom-[8%] right-[5%] md:right-[12%] w-60 md:w-80 p-5 bg-white/70 backdrop-blur-xs border border-[#121214]/15 shadow-sm rounded-xs pointer-events-none"
      >
        <div className="flex justify-between text-[9px] font-mono tracking-widest text-[#77777e] mb-2 border-b border-[#121214]/10 pb-1">
          <span>AXO 03 // FACADE GRID</span>
          <span>CALIBRATED</span>
        </div>
        <svg viewBox="0 0 180 100" className="w-full stroke-[#121214] fill-none stroke-[0.9]">
          <polygon points="30,80 150,70 120,20 10,25" />
          <line x1="30" y1="80" x2="10" y2="25" />
          <line x1="70" y1="76" x2="50" y2="23" />
          <line x1="110" y1="73" x2="90" y2="21" />
          <line x1="20" y1="52" x2="135" y2="45" />
        </svg>
      </div>

      {/* Central Editorial Anchor Title */}
      <div className="relative z-10 text-center max-w-4xl px-4 my-auto">
        <div className="flex items-center justify-center gap-3 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#e63928]" />
          <span className="font-sans-ui text-[11px] uppercase tracking-[0.22em] text-[#6e6e73]">
            04 / Structural Engineering
          </span>
        </div>

        <h2
          ref={titleRef}
          className="font-serif-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-[#121214] tracking-tight leading-[0.98] mb-8"
        >
          Precision in <br />
          <span className="italic font-normal">Development</span>
        </h2>

        <p className="font-sans-ui text-xs sm:text-sm md:text-base text-[#55555c] max-w-xl mx-auto leading-relaxed">
          From thermal modeling and parametric solar louvers to tectonic joint details,
          every structure is calculated to endure tropical monsoons, oceanfront salinity,
          and intense equatorial radiation with timeless grace.
        </p>
      </div>
    </section>
  );
}
