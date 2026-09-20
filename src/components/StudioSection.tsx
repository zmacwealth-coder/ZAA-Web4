"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const STUDIO_PHOTOS = [
  { id: 1, src: "/images/studio_1.jpg", caption: "PHYSICAL MODELING // TOWER ENVELOPE" },
  { id: 2, src: "/images/studio_2.jpg", caption: "MASTERPLAN REVIEW // MAITAMA" },
  { id: 3, src: "/images/studio_3.jpg", caption: "HAND DRAFTING // TRACE ON VELLUM" },
  { id: 4, src: "/images/studio_4.jpg", caption: "TACTILE PALETTE // RAMMED EARTH & TEAK" },
  { id: 5, src: "/images/studio_5.jpg", caption: "OPEN ATELIER // VICTORIA ISLAND" },
  { id: 6, src: "/images/studio_6.jpg", caption: "BLUEPRINT INTEGRATION // LEVEL 04" },
  { id: 7, src: "/images/studio_7.jpg", caption: "COLLABORATIVE SESSION // SPATIAL STUDY" },
  { id: 8, src: "/images/studio_8.jpg", caption: "FIELD SITE REVIEW // CONCRETE CURE" },
];

export default function StudioSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textStage1Ref = useRef<HTMLDivElement>(null);
  const textStage2Ref = useRef<HTMLDivElement>(null);
  const cylinderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=220%",
          pin: true,
          scrub: 1,
        },
      });

      // Stage 1: "A studio shaped by..." enters
      tl.fromTo(
        textStage1Ref.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.25, ease: "power2.out" },
        0
      );

      // 3D Carousel Cylinder rotates on scroll
      tl.fromTo(
        cylinderRef.current,
        { rotationY: 25, y: 80, opacity: 0 },
        { rotationY: -120, y: 0, opacity: 1, duration: 1, ease: "none" },
        0.05
      );

      // Transition from "A studio shaped by..." to "2011 Year of Foundation"
      tl.to(
        textStage1Ref.current,
        { opacity: 0, y: -30, duration: 0.2, ease: "power2.in" },
        0.35
      );

      tl.fromTo(
        textStage2Ref.current,
        { opacity: 0, y: 40, scale: 0.96 },
        { opacity: 1, y: 0, scale: 1, duration: 0.3, ease: "power2.out" },
        0.45
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const totalPhotos = STUDIO_PHOTOS.length;
  const radius = 620; // 3D cylinder radius in px

  return (
    <section
      id="studio"
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden flex flex-col justify-between items-center bg-[#0a0a0b] text-[#f5f5f2] pt-24 pb-12 px-6 md:px-12"
      style={{ perspective: "1200px" }}
    >
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-radial from-[#18181c]/40 via-transparent to-transparent pointer-events-none" />

      {/* Chapter Tag */}
      <div className="relative z-20 flex items-center gap-3">
        <span className="w-1.5 h-1.5 rounded-full bg-[#e63928]" />
        <span className="font-sans-ui text-[11px] uppercase tracking-[0.22em] text-[#88888e]">
          06 / Studio Ethos &amp; Heritage
        </span>
      </div>

      {/* Typography Stage (Centered in upper screen) */}
      <div className="relative z-20 w-full max-w-4xl mx-auto text-center my-auto min-h-[220px] flex items-center justify-center">
        {/* Stage 1: "A studio shaped by..." matching video 00:15 */}
        <div
          ref={textStage1Ref}
          className="absolute inset-x-0 will-change-transform"
        >
          <h2 className="font-serif-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-[#f5f5f2] tracking-tight">
            A studio shaped by...
          </h2>
          <p className="font-sans-ui text-xs sm:text-sm text-[#88888e] tracking-widest uppercase mt-4">
            Curiosity &bull; African Vernaculars &bull; <span className="text-[#e63928]">Structural Rigor</span>
          </p>
        </div>

        {/* Stage 2: "2011 Year of Foundation" matching video 00:17 */}
        <div
          ref={textStage2Ref}
          className="absolute inset-x-0 opacity-0 will-change-transform"
        >
          <h2 className="font-serif-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-light tracking-tight text-[#f5f5f2] leading-[0.92]">
            <span className="text-[#e63928]">2011</span> Year <br />
            <span className="italic font-normal">of Foundation</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 max-w-2xl mx-auto mt-8 text-left font-sans-ui text-xs text-[#9e9ea6] leading-relaxed border-t border-white/10 pt-6">
            <p>
              Design approach grounded in poetic structures, indigenous African materiality,
              climate-responsive vernaculars, and enhanced sensoriality.
            </p>
            <p>
              Lifecycle-focused architecture with efficient passive ventilation systems,
              sustainable metrics, local craftsmanship, and timeless execution.
            </p>
          </div>
        </div>
      </div>

      {/* 3D Cylindrical Photo Ribbon matching video 00:16 - 00:17 */}
      <div
        className="relative z-10 w-full h-[280px] sm:h-[320px] md:h-[360px] flex items-center justify-center pointer-events-none mb-4"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div
          ref={cylinderRef}
          className="relative w-0 h-0 flex items-center justify-center will-change-transform"
          style={{ transformStyle: "preserve-3d" }}
        >
          {STUDIO_PHOTOS.map((photo, index) => {
            const angle = (index / totalPhotos) * 360;
            return (
              <div
                key={photo.id}
                className="absolute w-44 sm:w-56 md:w-64 aspect-square bg-[#1a1a1e] p-2 sm:p-2.5 pb-4 border border-white/15 shadow-2xl rounded-xs flex flex-col justify-between"
                style={{
                  transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                  backfaceVisibility: "hidden",
                }}
              >
                <div className="relative w-full h-[84%] overflow-hidden bg-[#26262a] rounded-2xs">
                  <Image
                    src={photo.src}
                    alt={photo.caption}
                    fill
                    sizes="260px"
                    className="object-cover object-center grayscale contrast-110 brightness-95"
                  />
                </div>
                <div className="flex justify-between items-center text-[7px] sm:text-[8px] font-mono tracking-wider text-[#88888e] pt-1">
                  <span className="truncate pr-1">{photo.caption}</span>
                  <span>ZAA</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
