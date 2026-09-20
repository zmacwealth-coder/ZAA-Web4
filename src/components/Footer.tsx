"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative w-full bg-[#0a0a0b] text-[#f5f5f2] pt-28 md:pt-36 pb-8 px-6 md:px-12 border-t border-white/10 overflow-hidden"
    >
      {/* Upper Architectural Footer Directory */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-16 font-sans-ui text-xs text-[#88888e] tracking-wider mb-20 md:mb-32">
        {/* Studio Column */}
        <div className="flex flex-col gap-3">
          <span className="text-white text-[11px] uppercase tracking-[0.22em] mb-2 font-medium flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#e63928]" />
            Atelier
          </span>
          <Link href="#index" className="hover:text-[#e63928] transition-colors">
            Index &amp; Monograph
          </Link>
          <Link href="#studio" className="hover:text-[#e63928] transition-colors">
            Architectural Philosophy
          </Link>
          <Link href="#studio" className="hover:text-[#e63928] transition-colors">
            Team &amp; Partners
          </Link>
          <Link href="#work" className="hover:text-[#e63928] transition-colors">
            Publications &amp; Awards
          </Link>
        </div>

        {/* Work Column */}
        <div className="flex flex-col gap-3">
          <span className="text-white text-[11px] uppercase tracking-[0.22em] mb-2 font-medium flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#e63928]" />
            Commissions
          </span>
          <Link href="#work" className="hover:text-[#e63928] transition-colors">
            Private Waterfront Residences
          </Link>
          <Link href="#work" className="hover:text-[#e63928] transition-colors">
            Civic &amp; Cultural Pavilions
          </Link>
          <Link href="#work" className="hover:text-[#e63928] transition-colors">
            Commercial &amp; Research Centers
          </Link>
          <Link href="#work" className="hover:text-[#e63928] transition-colors">
            Sustainable Master Planning
          </Link>
        </div>

        {/* Inquiries / Contact */}
        <div className="flex flex-col gap-3">
          <span className="text-white text-[11px] uppercase tracking-[0.22em] mb-2 font-medium flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#e63928]" />
            Inquiries
          </span>
          <a
            href="mailto:commissions@zionatelier.ng"
            className="hover:text-[#e63928] transition-colors text-white"
          >
            commissions@zionatelier.ng
          </a>
          <a
            href="mailto:press@zionatelier.ng"
            className="hover:text-[#e63928] transition-colors"
          >
            press@zionatelier.ng
          </a>
          <span className="text-[#66666e] pt-1">+234 (0) 1 892 4000</span>
          <span className="text-[#66666e]">+234 (0) 803 555 7890</span>
        </div>

        {/* Social & Locations */}
        <div className="flex flex-col gap-3">
          <span className="text-white text-[11px] uppercase tracking-[0.22em] mb-2 font-medium flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#e63928]" />
            Locations
          </span>
          <p className="leading-relaxed">
            42 Ahmadu Bello Way, Victoria Island, Lagos
          </p>
          <p className="leading-relaxed text-[#66666e]">
            18 Aguiyi Ironsi St, Maitama, Abuja
          </p>
          <div className="flex items-center gap-4 pt-2">
            <span className="hover:text-[#e63928] cursor-pointer transition-colors">Instagram</span>
            <span className="hover:text-[#e63928] cursor-pointer transition-colors">LinkedIn</span>
            <span className="hover:text-[#e63928] cursor-pointer transition-colors">ArchDaily</span>
          </div>
        </div>
      </div>

      {/* Monumental Wordmark — guaranteed to show all letters including the final 'R' */}
      <div className="w-full select-none overflow-hidden py-6 md:py-10 border-t border-white/5 flex items-center justify-center">
        <h2
          className="font-serif-display font-light text-[#f5f5f2] tracking-[-0.01em] whitespace-nowrap leading-[0.88] uppercase will-change-transform text-center max-w-full px-2"
          style={{
            fontSize: "clamp(34px, 12.2vw, 204px)",
          }}
        >
          ZION ATELIER<span className="text-[#e63928]">.</span>
        </h2>
      </div>

      {/* Sub-footer Copyright */}
      <div className="max-w-6xl mx-auto pt-6 flex flex-col sm:flex-row justify-between items-center text-[10px] md:text-[11px] font-sans-ui text-[#66666e] uppercase tracking-widest gap-4">
        <span>&copy; {new Date().getFullYear()} Zion Architect Atelier (ZAA). All rights reserved.</span>
        <span className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#e63928]" />
          Lagos &bull; Abuja &bull; London
        </span>
      </div>
    </footer>
  );
}
