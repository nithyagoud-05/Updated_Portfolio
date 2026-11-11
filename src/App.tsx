import React, { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { PersonSection } from './components/PersonSection';
import { ThinkingAndIdeationSection } from './components/ThinkingAndIdeationSection';
import { JourneyTimeline } from './components/JourneyTimeline';
import { ProjectsSection } from './components/ProjectsSection';
import { MilestonesSection } from './components/MilestonesSection';
import { LeadershipSection } from './components/LeadershipSection';
import { ToolkitSection } from './components/ToolkitSection';
import { FinalScene } from './components/FinalScene';
import { ResumeModal } from './components/ResumeModal';
import { CinematicControls } from './components/CinematicControls';
import { ImageLightbox, LightboxData } from './components/ImageLightbox';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('origin');
  const [lightboxData, setLightboxData] = useState<LightboxData | null>(null);

  // Track active section for clean navigation highlight
  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = ['origin', 'toolkit', 'works', 'milestones', 'journey', 'leadership', 'thinking', 'credits'];
      const scrollPosition = window.scrollY + 200;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#070709] text-[#e8e8ed] font-sans antialiased selection:bg-amber-500/30 selection:text-amber-200">
      {/* 35mm Film Grain Overlay (Simulated Cinematic Texture) */}
      <div className="film-grain" />

      {/* Atmospheric radial background vignettes */}
      <div className="fixed inset-0 cinematic-vignette z-0 pointer-events-none" />

      {/* Main Experience Layout */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Top Bar Navigation (Strict 3-zone contract) */}
        <Navigation
          onOpenResume={() => setIsResumeOpen(true)}
          activeSection={activeSection}
        />

        {/* Narrative Chapters Progression */}
        <main className="flex-1">
          {/* Chapter 01: The Person Behind the Code */}
          <PersonSection
            onOpenResume={() => setIsResumeOpen(true)}
            onOpenLightbox={(data) => setLightboxData(data)}
          />

          {/* Chapter 02: The Engineering Toolkit */}
          <ToolkitSection />

          {/* Chapter 03: The Things I Have Built */}
          <ProjectsSection
            onOpenLightbox={(data) => setLightboxData(data)}
          />

          {/* Chapter 04: The Milestones */}
          <MilestonesSection
            onOpenLightbox={(data) => setLightboxData(data)}
          />

          {/* Chapter 05: Academic Journey */}
          <JourneyTimeline />

          {/* Chapter 06: Leadership — Beyond the Code */}
          <LeadershipSection />

          {/* Chapter 07: Thinking, Ideation & Purpose */}
          <ThinkingAndIdeationSection />

          {/* Chapter 08: The Final Scene & Credits */}
          <FinalScene
            onOpenResume={() => setIsResumeOpen(true)}
          />
        </main>
      </div>

      {/* Floating Scroll to Top Control */}
      <CinematicControls />

      {/* Interactive Curriculum Vitae & Dossier Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      {/* High-Resolution Media & Certificate Lightbox */}
      <ImageLightbox
        data={lightboxData}
        onClose={() => setLightboxData(null)}
      />
    </div>
  );
}
