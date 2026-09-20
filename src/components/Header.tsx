"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-6 md:px-12 py-6 md:py-8 flex items-start justify-between mix-blend-difference text-white pointer-events-none">
      {/* Brand Identity */}
      <div className="pointer-events-auto">
        <Link href="/" className="group flex flex-col font-sans-ui text-[11px] md:text-[12px] leading-tight tracking-[0.18em] uppercase opacity-90 hover:opacity-100 transition-opacity">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#e63928]" />
            Zion
          </span>
          <span>Architect</span>
          <span>Atelier</span>
        </Link>
      </div>

      {/* Desktop Navigation Links */}
      <nav className="hidden md:flex items-center gap-8 font-sans-ui text-[11px] md:text-[12px] uppercase tracking-[0.2em] pointer-events-auto">
        <Link href="#index" className="hover:opacity-60 transition-opacity">
          Index
        </Link>
        <Link href="#work" className="hover:opacity-60 transition-opacity">
          Work
        </Link>
        <Link href="#studio" className="hover:opacity-60 transition-opacity">
          About
        </Link>
        <Link href="#contact" className="hover:opacity-60 transition-opacity">
          Contact
        </Link>
      </nav>

      {/* Mobile Toggle */}
      <div className="md:hidden pointer-events-auto">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-[11px] uppercase tracking-[0.2em] opacity-90 focus:outline-none"
        >
          {mobileMenuOpen ? "Close" : "Menu"}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-[#0c0c0d] text-[#f4f3ef] z-50 flex flex-col justify-between p-8 md:hidden pointer-events-auto">
          <div className="flex justify-between items-start">
            <div className="font-sans-ui text-[12px] tracking-[0.18em] uppercase leading-tight">
              <span>Zion</span><br />
              <span>Architect</span><br />
              <span>Atelier</span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-[12px] uppercase tracking-[0.2em]"
            >
              Close
            </button>
          </div>

          <div className="flex flex-col gap-6 font-serif-display text-4xl">
            <Link onClick={() => setMobileMenuOpen(false)} href="#index">
              Index
            </Link>
            <Link onClick={() => setMobileMenuOpen(false)} href="#work">
              Selected Works
            </Link>
            <Link onClick={() => setMobileMenuOpen(false)} href="#studio">
              The Atelier
            </Link>
            <Link onClick={() => setMobileMenuOpen(false)} href="#contact">
              Contact & Inquiry
            </Link>
          </div>

          <div className="font-sans-ui text-[11px] text-[#88888e] tracking-widest uppercase">
            Lagos & Abuja, Nigeria
          </div>
        </div>
      )}
    </header>
  );
}
