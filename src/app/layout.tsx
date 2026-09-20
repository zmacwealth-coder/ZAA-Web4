import type { Metadata } from "next";
import { Cormorant_Garamond, Geist } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Zion Architect Atelier | ZAA — Spatial Architecture & Strategy",
  description:
    "Zion Architect Atelier (ZAA) is a leading Nigerian contemporary architecture and spatial strategy bureau delivering systematic clarity, poetic structures, and timeless execution.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${geistSans.variable} font-sans-ui selection:bg-[#121214] selection:text-[#f4f3ef]`}
    >
      <body className="bg-[#f4f3ef] text-[#121214] min-h-screen overflow-x-hidden antialiased">
        {children}
      </body>
    </html>
  );
}
