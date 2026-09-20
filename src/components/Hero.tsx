"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const titleLinesRef = useRef<HTMLDivElement>(null);
  const metaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Clip path reveal and gentle scale settle for hero image
      tl.fromTo(
        imageWrapperRef.current,
        { clipPath: "inset(12% 8% 12% 8%)", scale: 1.08, opacity: 0 },
        { clipPath: "inset(0% 0% 0% 0%)", scale: 1, opacity: 1, duration: 2.2 }
      );

      // Title lines progressive vertical reveal
      if (titleLinesRef.current) {
        const lines = titleLinesRef.current.querySelectorAll(".hero-line");
        tl.fromTo(
          lines,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.4, stagger: 0.18 },
          "-=1.4"
        );
      }

      // Metadata fade in
      if (metaRef.current) {
        tl.fromTo(
          metaRef.current,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 1.2 },
          "-=0.8"
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="index"
      ref={containerRef}
      className="relative w-full min-h-screen flex flex-col justify-between pt-28 md:pt-36 pb-12 px-6 md:px-12 bg-[#f4f3ef] overflow-hidden"
    >
      {/* Top Context Tag */}
      <div className="flex justify-between items-center text-[11px] uppercase tracking-[0.2em] text-[#6e6e73]">
        <span className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#e63928]" />
          Spatial Bureau &bull; West Africa
        </span>
        <span className="hidden sm:inline font-mono">6°25&apos;N 3°27&apos;E</span>
      </div>

      {/* Hero Architectural Visual */}
      <div className="relative w-full my-8 md:my-10 h-[52vh] sm:h-[58vh] md:h-[64vh] overflow-hidden rounded-sm">
        <div ref={imageWrapperRef} className="w-full h-full relative will-change-transform">
          <Image
            src="/images/hero_pavilion.jpg"
            alt="Zion Architect Atelier — Minimalist Zinc & Basalt Pavilion"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/10 pointer-events-none" />
        </div>
      </div>

      {/* Hero Bottom Narrative */}
      <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-end gap-6 pt-4 border-t border-[#121214]/10">
        <div ref={titleLinesRef} className="max-w-2xl">
          <div className="overflow-hidden">
            <h1 className="hero-line font-serif-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-[#121214] leading-[0.95]">
              Zion Architect
            </h1>
          </div>
          <div className="overflow-hidden">
            <h1 className="hero-line font-serif-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-[#121214] leading-[0.95] flex items-baseline gap-2">
              Atelier<span className="text-[#e63928]">.</span>
            </h1>
          </div>
        </div>

        <div ref={metaRef} className="flex flex-col items-start md:items-end gap-2 text-right">
          <span className="font-sans-ui text-[11px] md:text-[12px] uppercase tracking-[0.2em] text-[#121214]">
            Lagos &bull; Abuja &bull; London
          </span>
          <span className="font-sans-ui text-[11px] tracking-wider text-[#6e6e73]">
            Scroll to explore works & philosophy <span className="text-[#e63928]">&darr;</span>
          </span>
        </div>
      </div>
    </section>
  );
}
