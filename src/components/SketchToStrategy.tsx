"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SketchToStrategy() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const sketchSvgRef = useRef<SVGSVGElement>(null);
  const statementRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title reveal
      gsap.fromTo(
        titleRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 85%",
          },
        }
      );

      // SVG Stroke animation on scroll
      if (sketchSvgRef.current) {
        const paths = sketchSvgRef.current.querySelectorAll("path, line, polyline");
        paths.forEach((el) => {
          const pathEl = el as SVGGeometryElement;
          const length = pathEl.getTotalLength ? pathEl.getTotalLength() : 400;
          gsap.set(pathEl, {
            strokeDasharray: length,
            strokeDashoffset: length,
          });

          gsap.to(pathEl, {
            strokeDashoffset: 0,
            ease: "power2.inOut",
            scrollTrigger: {
              trigger: sketchSvgRef.current,
              start: "top 75%",
              end: "bottom 35%",
              scrub: 1,
            },
          });
        });
      }

      // Narrative statement line reveal
      gsap.fromTo(
        statementRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.4,
          ease: "power3.out",
          scrollTrigger: {
            trigger: statementRef.current,
            start: "top 85%",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full py-28 md:py-44 px-6 md:px-12 bg-[#f4f3ef] border-t border-[#121214]/10 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
        {/* Section Index */}
        <div className="flex items-center gap-3 mb-10">
          <span className="w-1.5 h-1.5 rounded-full bg-[#e63928]" />
          <span className="font-sans-ui text-[11px] uppercase tracking-[0.22em] text-[#6e6e73]">
            03 / Process & Linework
          </span>
        </div>

        {/* Headline matching video 00:06 */}
        <h2
          ref={titleRef}
          className="font-serif-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-[#121214] tracking-tight leading-[1.05] mb-12"
        >
          From Sketch <br />
          <span className="italic font-normal">to Strategy</span>
        </h2>

        {/* Animated Architectural Sketch Linework */}
        <div className="relative w-full max-w-2xl h-[340px] md:h-[420px] my-6 flex items-center justify-center">
          <svg
            ref={sketchSvgRef}
            viewBox="0 0 600 400"
            className="w-full h-full stroke-[#121214]/85 fill-none stroke-[1.2] overflow-visible"
            style={{ strokeLinecap: "round", strokeLinejoin: "round" }}
          >
            {/* Ground datum lines */}
            <line x1="40" y1="340" x2="560" y2="340" strokeWidth="0.8" strokeDasharray="6 4" />
            <line x1="80" y1="350" x2="520" y2="350" strokeWidth="0.5" />

            {/* Main structural columns */}
            <line x1="140" y1="340" x2="140" y2="120" strokeWidth="1.8" />
            <line x1="280" y1="340" x2="280" y2="90" strokeWidth="1.8" />
            <line x1="460" y1="340" x2="460" y2="150" strokeWidth="1.8" />

            {/* Foundation footings */}
            <polyline points="120,340 140,325 160,340" />
            <polyline points="260,340 280,325 300,340" />
            <polyline points="440,340 460,325 480,340" />

            {/* Primary Cantilever Beam */}
            <polyline points="110,140 280,110 490,165" strokeWidth="2.2" />
            <polyline points="110,155 280,125 490,180" strokeWidth="1.2" />

            {/* Cross bracing trusses */}
            <line x1="140" y1="340" x2="280" y2="120" strokeWidth="1.1" />
            <line x1="140" y1="135" x2="280" y2="340" strokeWidth="1.1" />
            <line x1="280" y1="340" x2="460" y2="160" strokeWidth="1.1" />
            <line x1="280" y1="120" x2="460" y2="340" strokeWidth="1.1" />

            {/* Roof Canopy Profile */}
            <polygon
              points="100,135 280,75 510,140 490,170 280,105 110,160"
              strokeWidth="1.4"
            />

            {/* Louver rhythms / shading battens */}
            {[160, 180, 200, 220, 240, 320, 340, 360, 380, 400, 420].map((x, i) => (
              <line
                key={i}
                x1={x}
                y1={140 + (i % 3) * 10}
                x2={x + 15}
                y2={220 + (i % 3) * 10}
                strokeWidth="0.75"
                opacity="0.6"
              />
            ))}

            {/* Perspective interior lines */}
            <line x1="280" y1="125" x2="380" y2="240" strokeWidth="0.8" strokeDasharray="3 3" />
            <line x1="140" y1="260" x2="460" y2="280" strokeWidth="0.8" />
            <polyline points="330,240 380,240 380,340" strokeWidth="1" />

            {/* Architectural dimension lines and markers */}
            <line x1="140" y1="365" x2="280" y2="365" strokeWidth="0.6" />
            <line x1="140" y1="360" x2="140" y2="370" strokeWidth="0.6" />
            <line x1="280" y1="360" x2="280" y2="370" strokeWidth="0.6" />
            <line x1="280" y1="365" x2="460" y2="365" strokeWidth="0.6" />
            <line x1="460" y1="360" x2="460" y2="370" strokeWidth="0.6" />

            {/* North arrow indicator */}
            <circle cx="530" cy="80" r="16" strokeWidth="0.6" strokeDasharray="2 2" />
            <line x1="530" y1="68" x2="530" y2="92" strokeWidth="1" stroke="#e63928" />
            <polygon points="530,68 526,76 534,76" fill="#e63928" />
          </svg>
        </div>

        {/* Narrative Statement matching video 00:07 */}
        <p
          ref={statementRef}
          className="font-serif-display text-2xl sm:text-3xl md:text-4xl font-light text-[#121214] max-w-3xl leading-[1.3] mt-8"
        >
          Early-stage ideas are distilled into precise frameworks balancing
          intuitive analysis and strategic direction &mdash; thoughtful, adaptable,
          and ready to be built.
        </p>

        {/* Studio Signature Tag */}
        <div className="mt-8 font-sans-ui text-[11px] uppercase tracking-[0.25em] text-[#77777d] flex items-center justify-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#e63928]" />
          <span>ZAA Design Methodology &bull; Section IV</span>
        </div>
      </div>
    </section>
  );
}
