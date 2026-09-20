"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ClaritySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Headline upward float reveal on scroll
      gsap.fromTo(
        headlineRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headlineRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Image parallax settle
      gsap.fromTo(
        imageRef.current,
        { scale: 1.06, y: 40 },
        {
          scale: 1,
          y: 0,
          ease: "none",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-24 md:py-36 px-6 md:px-12 bg-[#f4f3ef] border-t border-[#121214]/10"
    >
      {/* Chapter Tag */}
      <div className="flex items-center gap-3 mb-12">
        <span className="w-1.5 h-1.5 rounded-full bg-[#e63928]" />
        <span className="font-sans-ui text-[11px] uppercase tracking-[0.22em] text-[#6e6e73]">
          01 / Philosophy & Strategy
        </span>
      </div>

      {/* Oversized Editorial Headline */}
      <div className="max-w-5xl mx-auto text-center mb-16 md:mb-24">
        <h2
          ref={headlineRef}
          className="font-serif-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-[#121214] leading-[1.05] tracking-tight"
        >
          Systematic Clarity <br className="hidden sm:inline" />
          <span className="italic font-normal">&amp;</span> Creativity
        </h2>

        {/* Supporting Editorial Dual Column */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 max-w-3xl mx-auto mt-12 text-left text-sm md:text-base font-sans-ui text-[#44444a] leading-relaxed">
          <p>
            We approach architecture not as an isolated form, but as a living spatial dialogue
            between tropical climate resilience, tactile African materiality, and disciplined
            structural engineering.
          </p>
          <p>
            From private sanctuaries along the Lagos lagoons to institutional monuments in Abuja,
            every commission synthesizes raw environmental reality with uncompromising aesthetic
            rigor.
          </p>
        </div>
      </div>

      {/* Featured Wide Architectural Visual */}
      <div className="relative w-full max-w-6xl mx-auto h-[60vh] md:h-[75vh] overflow-hidden rounded-sm">
        <div ref={imageRef} className="w-full h-[115%] relative -top-[7%] will-change-transform">
          <Image
            src="/images/clarity_residence.jpg"
            alt="Curved glass modernist pavilion residence by Zion Architect Atelier"
            fill
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}
