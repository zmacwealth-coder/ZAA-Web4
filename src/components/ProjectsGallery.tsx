"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PROJECTS, ProjectItem } from "@/lib/projectsData";

export default function ProjectsGallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header entrance
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
          },
        }
      );

      // Project cards image reveal with parallax
      const projectElements = containerRef.current?.querySelectorAll(".project-item");
      projectElements?.forEach((el) => {
        const img = el.querySelector(".project-img");
        if (img) {
          gsap.fromTo(
            img,
            { scale: 1.1, y: 30 },
            {
              scale: 1,
              y: 0,
              ease: "none",
              scrollTrigger: {
                trigger: el,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            }
          );
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="work"
      ref={containerRef}
      className="relative w-full py-28 md:py-40 px-6 md:px-12 bg-[#f4f3ef] border-t border-[#121214]/10"
    >
      {/* Editorial Section Header matching video 00:10 */}
      <div
        ref={headerRef}
        className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end mb-20 md:mb-32 gap-6"
      >
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#e63928]" />
            <span className="font-sans-ui text-[11px] uppercase tracking-[0.22em] text-[#6e6e73]">
              05 / Selected Portfolio
            </span>
          </div>
          <h2 className="font-serif-display text-4xl sm:text-5xl md:text-6xl font-light text-[#121214] tracking-tight">
            Selected Projects <span className="font-sans-ui text-xl md:text-2xl text-[#e63928] font-normal align-super">(10+)</span>
          </h2>
        </div>

        <p className="max-w-md font-sans-ui text-xs md:text-sm text-[#55555c] leading-relaxed">
          An overarching design practice connecting concept, tectonic materiality,
          and coherent architectural systems across Nigeria and beyond.
        </p>
      </div>

      {/* Asymmetric Gallery Layout matching video 00:10 - 00:13 */}
      <div className="max-w-6xl mx-auto flex flex-col gap-24 md:gap-36">
        {/* ROW 1: Project 1 (Large Left) & Project 2 (Offset Right) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-end">
          {/* Project 1 */}
          <div className="md:col-span-7 project-item" data-cursor="project">
            <ProjectCard project={PROJECTS[0]} heightClass="h-[400px] sm:h-[500px] md:h-[540px]" />
          </div>

          {/* Project 2 */}
          <div className="md:col-span-5 project-item md:mb-12" data-cursor="project">
            <ProjectCard project={PROJECTS[1]} heightClass="h-[340px] sm:h-[420px] md:h-[460px]" />
          </div>
        </div>

        {/* ROW 2: Project 3 (Tall Vertical Column) & Project 4 (Center Sloped Pavilion) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
          {/* Project 3 */}
          <div className="md:col-span-5 project-item" data-cursor="project">
            <ProjectCard project={PROJECTS[2]} heightClass="h-[480px] sm:h-[560px] md:h-[620px]" />
          </div>

          {/* Project 4 */}
          <div className="md:col-span-7 project-item md:mt-24" data-cursor="project">
            <ProjectCard project={PROJECTS[3]} heightClass="h-[360px] sm:h-[440px] md:h-[480px]" />
          </div>
        </div>

        {/* ROW 3: Project 5 (Offset Right Institutional Monolith) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 justify-end">
          <div className="md:col-start-4 md:col-span-8 project-item" data-cursor="project">
            <ProjectCard project={PROJECTS[4]} heightClass="h-[400px] sm:h-[480px] md:h-[540px]" />
          </div>
        </div>

        {/* ROW 4: Project 6 (Banana Island Estate) & Project 7 (Asokoro Sanctuary) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-end">
          {/* Project 6 */}
          <div className="md:col-span-7 project-item" data-cursor="project">
            <ProjectCard project={PROJECTS[5]} heightClass="h-[380px] sm:h-[460px] md:h-[520px]" />
          </div>

          {/* Project 7 */}
          <div className="md:col-span-5 project-item md:mb-8" data-cursor="project">
            <ProjectCard project={PROJECTS[6]} heightClass="h-[320px] sm:h-[400px] md:h-[440px]" />
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  heightClass,
}: {
  project: ProjectItem;
  heightClass: string;
}) {
  return (
    <div className="group block cursor-pointer">
      {/* Image Frame */}
      <div className={`relative w-full ${heightClass} overflow-hidden bg-[#e6e4dc] rounded-xs`}>
        <div className="project-img w-full h-[112%] relative -top-[6%] transition-transform duration-700 ease-out group-hover:scale-105 will-change-transform">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 65vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
        </div>
      </div>

      {/* Metadata Bar matching video */}
      <div className="mt-4 flex justify-between items-baseline border-b border-[#121214]/10 pb-2">
        <div>
          <h3 className="font-serif-display text-xl sm:text-2xl font-normal text-[#121214] leading-snug group-hover:text-[#e63928] group-hover:italic transition-all duration-300">
            {project.title}
          </h3>
          <p className="font-sans-ui text-[11px] uppercase tracking-[0.16em] text-[#6e6e73] mt-0.5">
            {project.location} &bull; {project.category}
          </p>
        </div>

        <div className="text-right">
          <span className="font-mono text-[11px] text-[#88888e] block">{project.year}</span>
          {project.area && (
            <span className="font-mono text-[10px] text-[#e63928] font-medium block">{project.area}</span>
          )}
        </div>
      </div>
    </div>
  );
}
