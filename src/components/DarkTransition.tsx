"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function DarkTransition() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const radialSvgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=120%",
          pin: true,
          scrub: 0.8,
          onUpdate: (self) => {
            const p = self.progress;
            // Interpolate body and main background from #f4f3ef to #0a0a0b
            if (p > 0.05) {
              const bgVal = gsap.utils.interpolate("#f4f3ef", "#0a0a0b", p);
              const textVal = gsap.utils.interpolate("#121214", "#f5f5f2", p);
              document.body.style.backgroundColor = bgVal;
              document.body.style.color = textVal;
            } else {
              document.body.style.backgroundColor = "#f4f3ef";
              document.body.style.color = "#121214";
            }
          },
        },
      });

      // 1. Text scale and transition
      tl.to(
        textRef.current,
        {
          color: "#f5f5f2",
          scale: 1.1,
          ease: "none",
        },
        0
      );

      // 2. Radial diagram expansion & rotation
      if (radialSvgRef.current) {
        const spokes = radialSvgRef.current.querySelectorAll(".spoke-line");
        const rings = radialSvgRef.current.querySelectorAll(".orbit-ring");
        const nodes = radialSvgRef.current.querySelectorAll(".spoke-node");

        tl.to(
          radialSvgRef.current,
          {
            scale: 1.35,
            rotation: 45,
            ease: "none",
          },
          0
        );

        tl.fromTo(
          spokes,
          { strokeDashoffset: 350, opacity: 0.2 },
          { strokeDashoffset: 0, opacity: 0.85, stroke: "#f5f5f2", ease: "none", stagger: 0.01 },
          0
        );

        tl.fromTo(
          rings,
          { scale: 0.5, opacity: 0.1 },
          { scale: 1.15, opacity: 0.5, stroke: "#f5f5f2", ease: "none" },
          0
        );

        tl.fromTo(
          nodes,
          { scale: 0.3, opacity: 0 },
          { scale: 1.2, opacity: 1, fill: "#f5f5f2", ease: "back.out(2)", stagger: 0.01 },
          0.15
        );
      }

      // Fade out text toward the end as we transition to studio section
      tl.to(
        textRef.current,
        {
          opacity: 0,
          y: -40,
          ease: "power2.in",
        },
        0.75
      );
    }, containerRef);

    return () => {
      ctx.revert();
      document.body.style.backgroundColor = "";
      document.body.style.color = "";
    };
  }, []);

  // 16 radial nodes
  const nodeCount = 16;
  const radius = 250;
  const nodes = Array.from({ length: nodeCount }).map((_, i) => {
    const angle = (i * 2 * Math.PI) / nodeCount;
    const x = 300 + radius * Math.cos(angle);
    const y = 300 + radius * Math.sin(angle);
    return { x, y };
  });

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden flex items-center justify-center transition-colors duration-200"
      style={{ backgroundColor: "transparent" }}
    >
      {/* Radial Architectural SVG Network Diagram matching video 00:14 */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <svg
          ref={radialSvgRef}
          viewBox="0 0 600 600"
          className="w-[88vmin] h-[88vmin] overflow-visible will-change-transform"
        >
          {/* Concentric subtle orbit rings */}
          <circle
            cx="300"
            cy="300"
            r="110"
            className="orbit-ring stroke-[#121214]/25 fill-none stroke-[0.8]"
            strokeDasharray="4 4"
          />
          <circle
            cx="300"
            cy="300"
            r="180"
            className="orbit-ring stroke-[#121214]/20 fill-none stroke-[0.8]"
          />
          <circle
            cx="300"
            cy="300"
            r="250"
            className="orbit-ring stroke-[#121214]/20 fill-none stroke-[0.8]"
            strokeDasharray="3 3"
          />

          {/* Central Point */}
          <circle cx="300" cy="300" r="4.5" className="fill-[#e63928]" />

          {/* Radiating Spoke Lines */}
          {nodes.map((node, i) => (
            <g key={i}>
              <line
                x1="300"
                y1="300"
                x2={node.x}
                y2={node.y}
                className="spoke-line stroke-[#121214]/40 stroke-[0.9]"
                style={{ strokeDasharray: 350, strokeDashoffset: 350 }}
              />
              <circle
                cx={node.x}
                cy={node.y}
                r="3.5"
                className="spoke-node fill-[#121214]"
              />
              <circle
                cx={node.x}
                cy={node.y}
                r="7.5"
                className="stroke-[#121214]/25 fill-none stroke-[0.6]"
              />
            </g>
          ))}
        </svg>
      </div>

      {/* Center Statement matching video 00:14 */}
      <div
        ref={textRef}
        className="relative z-10 text-center select-none px-4 will-change-transform"
      >
        <span className="inline-flex items-center gap-2 font-sans-ui text-[11px] uppercase tracking-[0.3em] opacity-80 mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#e63928]" />
          Spatial Synthesis
        </span>
        <h2 className="font-serif-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-light tracking-tight leading-[1.02]">
          Refined <span className="italic text-[#e63928]">&amp;</span> Bold
        </h2>
        <p className="font-serif-display text-3xl sm:text-5xl md:text-6xl font-light tracking-tight italic opacity-90 mt-2">
          Essential
        </p>
      </div>
    </section>
  );
}
