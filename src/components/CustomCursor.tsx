"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if ("ontouchstart" in window || navigator.maxTouchPoints > 0) {
      setIsTouch(true);
      return;
    }

    const cursor = cursorRef.current;
    if (!cursor) return;

    const onMouseMove = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.18,
        ease: "power2.out",
      });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const projectEl = target.closest("[data-cursor='project']");
      const linkEl = target.closest("a, button, [role='button']");

      if (projectEl) {
        gsap.to(cursor, {
          scale: 3.6,
          backgroundColor: "#e63928",
          color: "#ffffff",
          duration: 0.25,
          ease: "power2.out",
        });
        if (textRef.current) {
          textRef.current.innerText = "VIEW";
          gsap.to(textRef.current, { opacity: 1, duration: 0.2 });
        }
      } else if (linkEl) {
        gsap.to(cursor, {
          scale: 2,
          backgroundColor: "rgba(230, 57, 40, 0.25)",
          duration: 0.2,
        });
        if (textRef.current) {
          gsap.to(textRef.current, { opacity: 0, duration: 0.1 });
        }
      } else {
        gsap.to(cursor, {
          scale: 1,
          backgroundColor: "#121214",
          color: "transparent",
          duration: 0.2,
        });
        if (textRef.current) {
          gsap.to(textRef.current, { opacity: 0, duration: 0.1 });
        }
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  if (isTouch) return null;

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed top-0 left-0 -ml-2 -mt-2 z-50 flex h-4 w-4 items-center justify-center rounded-full bg-[#121214] text-[3.5px] font-medium tracking-widest transition-colors duration-200"
      style={{ willChange: "transform" }}
    >
      <span ref={textRef} className="opacity-0 font-sans-ui text-[#f4f3ef]"></span>
    </div>
  );
}
