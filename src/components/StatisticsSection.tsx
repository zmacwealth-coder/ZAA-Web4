"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const STATS = [
  {
    num: "15+",
    title: "Years of experience",
    desc: "Dedicated to contemporary spatial experimentation across Nigeria and Africa.",
  },
  {
    num: "490+",
    title: "Completed projects",
    desc: "Private oceanfront villas, civic institutions, and sustainable pavilions.",
  },
  {
    num: "45+",
    title: "Professionals on the team",
    desc: "Architects, structural engineers, landscape designers & master planners.",
  },
  {
    num: "40K",
    title: "Total area covered",
    unit: "m²",
    desc: "Square meters of tactile, climate-responsive built environment executed.",
  },
];

const LEFT_STACK_PHOTOS = [
  { src: "/images/studio_1.jpg", rot: -8, y: 0, label: "TOWER MODEL STUDY" },
  { src: "/images/studio_4.jpg", rot: 6, y: 40, label: "EARTH & TEAK PALETTE" },
  { src: "/images/studio_6.jpg", rot: -4, y: 80, label: "BLUEPRINT REVIEW" },
  { src: "/images/studio_8.jpg", rot: 8, y: 120, label: "CONSTRUCTION SITE" },
];

export default function StatisticsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftStackRef = useRef<HTMLDivElement>(null);
  const statsListRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Left photos stack drifting on scroll
      if (leftStackRef.current) {
        gsap.to(leftStackRef.current, {
          y: -180,
          rotation: -4,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        });
      }

      // Staggered reveal for statistics rows
      if (statsListRef.current) {
        const rows = statsListRef.current.querySelectorAll(".stat-row");
        rows.forEach((row) => {
          gsap.fromTo(
            row,
            { y: 60, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 1.2,
              ease: "power3.out",
              scrollTrigger: {
                trigger: row,
                start: "top 85%",
              },
            }
          );
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full py-36 md:py-48 px-6 md:px-12 bg-[#0a0a0b] text-[#f5f5f2] border-t border-white/10 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative">
        {/* Left Floating Photo Column matching video 00:18 - 00:20 */}
        <div className="hidden lg:block lg:col-span-4 relative sticky top-32">
          <div ref={leftStackRef} className="relative w-64 will-change-transform">
            {LEFT_STACK_PHOTOS.map((item, idx) => (
              <div
                key={idx}
                className="relative w-56 aspect-4/3 bg-[#16161a] p-2 pb-4 border border-white/15 shadow-2xl rounded-xs mb-8 transition-transform"
                style={{
                  transform: `rotate(${item.rot}deg) translateY(${item.y * 0.15}px)`,
                }}
              >
                <div className="relative w-full h-[85%] overflow-hidden bg-[#242428] rounded-2xs mb-1">
                  <Image
                    src={item.src}
                    alt={item.label}
                    fill
                    sizes="240px"
                    className="object-cover grayscale contrast-110"
                  />
                </div>
                <span className="font-mono text-[8px] tracking-widest text-[#88888e]">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Statistics Stream matching video 00:18 - 00:20 */}
        <div ref={statsListRef} className="lg:col-span-8 flex flex-col gap-20 md:gap-28">
          {/* Chapter Subheading */}
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#e63928]" />
            <span className="font-sans-ui text-[11px] uppercase tracking-[0.22em] text-[#88888e]">
              07 / Built Metrics &amp; Impact
            </span>
          </div>

          {STATS.map((stat, idx) => (
            <div
              key={idx}
              className="stat-row border-b border-white/10 pb-16 flex flex-col sm:flex-row sm:items-baseline justify-between gap-6"
            >
              <div>
                <div className="flex items-baseline">
                  <span className="font-serif-display text-7xl sm:text-8xl md:text-9xl font-light text-[#f5f5f2] leading-none tracking-tight">
                    {stat.num.replace(/[+K]/g, '')}
                  </span>
                  <span className="font-serif-display text-5xl sm:text-6xl md:text-7xl font-light text-[#e63928] ml-1">
                    {stat.num.includes('+') ? '+' : stat.num.includes('K') ? 'K' : ''}
                  </span>
                  {stat.unit && (
                    <span className="font-sans-ui text-2xl md:text-3xl text-[#88888e] ml-2">
                      {stat.unit}
                    </span>
                  )}
                </div>
                <h3 className="font-serif-display text-2xl sm:text-3xl font-light text-[#f5f5f2] mt-3">
                  {stat.title}
                </h3>
              </div>

              <p className="max-w-xs font-sans-ui text-xs text-[#88888e] leading-relaxed">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
