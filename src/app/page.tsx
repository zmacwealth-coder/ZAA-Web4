import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ClaritySection from "@/components/ClaritySection";
import ScopeSection from "@/components/ScopeSection";
import SketchToStrategy from "@/components/SketchToStrategy";
import PrecisionSection from "@/components/PrecisionSection";
import ProjectsGallery from "@/components/ProjectsGallery";
import DarkTransition from "@/components/DarkTransition";
import StudioSection from "@/components/StudioSection";
import StatisticsSection from "@/components/StatisticsSection";
import ClientOrbit from "@/components/ClientOrbit";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <SmoothScroll>
      <CustomCursor />
      <Header />
      <main className="relative w-full min-h-screen overflow-x-hidden">
        {/* CHAPTER 1: HERO */}
        <Hero />

        {/* CHAPTER 2: PHILOSOPHY & CLARITY */}
        <ClaritySection />

        {/* CHAPTER 3: SCOPE & DELIVERABLES */}
        <ScopeSection />

        {/* CHAPTER 4: SKETCH TO STRATEGY */}
        <SketchToStrategy />

        {/* CHAPTER 5: PRECISION IN DEVELOPMENT */}
        <PrecisionSection />

        {/* CHAPTER 6: SELECTED PROJECTS */}
        <ProjectsGallery />

        {/* CHAPTER 7: LIGHT TO DARK TRANSITION */}
        <DarkTransition />

        {/* CHAPTER 8: DARK STUDIO & TEAM FIELD */}
        <StudioSection />

        {/* CHAPTER 9: STATISTICS */}
        <StatisticsSection />

        {/* CHAPTER 10: CLIENT & PARTNER ORBIT */}
        <ClientOrbit />

        {/* CHAPTER 11: MONUMENTAL FOOTER */}
        <Footer />
      </main>
    </SmoothScroll>
  );
}
