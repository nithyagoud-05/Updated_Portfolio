import React, { useState } from 'react';
import { Award, ExternalLink, X, ArrowUpRight, ZoomIn, FileCheck } from 'lucide-react';
import { ChapterHeader } from './ChapterHeader';
import { MILESTONES, NASA_CERTIFICATE, NASA_TEAM_PORTAL, BPP_AWARD_IMAGE } from '../data/portfolioData';
import { Milestone } from '../types';
import { LightboxData } from './ImageLightbox';

interface MilestonesSectionProps {
  onOpenLightbox?: (data: LightboxData) => void;
}

export const MilestonesSection: React.FC<MilestonesSectionProps> = ({ onOpenLightbox }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalMilestone, setActiveModalMilestone] = useState<Milestone | null>(null);
  const [nasaView, setNasaView] = useState<'certificate' | 'team'>('certificate');

  const categories = ['All', 'Global & National', 'Scholarship & Academic', 'Industry Leadership'];

  const filteredMilestones =
    selectedCategory === 'All'
      ? MILESTONES
      : MILESTONES.filter((m) => m.category === selectedCategory);

  const handleOpenCertificate = (milestone: Milestone, imageUrl: string, title: string) => {
    if (onOpenLightbox) {
      onOpenLightbox({
        imageUrl,
        title,
        subtitle: `${milestone.organization} · ${milestone.year}`,
        category: 'Official Milestone Certificate',
      });
    }
  };

  return (
    <section id="milestones" className="py-20 sm:py-32 relative scroll-mt-20 bg-[#060608]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <ChapterHeader
          number="05"
          title="The Milestones"
          subtitle="Competitive triumphs, institutional scholarships, and corporate leadership honors — verified through authentic credentials."
          category="Recognition"
        />

        {/* Feature Spotlight: NASA Space Apps Challenge National Finalist */}
        <div className="mb-14 rounded-3xl overflow-hidden border border-white/[0.12] bg-[#0c0c12] relative group shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            {/* Visual Display with Certificate / Team Portal Switcher */}
            <div className="lg:col-span-7 relative bg-[#07070a] border-b lg:border-b-0 lg:border-r border-white/[0.08]">
              {/* Image Switcher Bar */}
              <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 p-1 rounded-lg bg-black/75 backdrop-blur-md border border-white/15">
                <button
                  onClick={() => setNasaView('certificate')}
                  className={`px-3 py-1 text-xs font-mono rounded transition-colors ${
                    nasaView === 'certificate'
                      ? 'bg-amber-300 text-black font-semibold'
                      : 'text-neutral-300 hover:text-white'
                  }`}
                >
                  Official Certificate
                </button>
                <button
                  onClick={() => setNasaView('team')}
                  className={`px-3 py-1 text-xs font-mono rounded transition-colors ${
                    nasaView === 'team'
                      ? 'bg-amber-300 text-black font-semibold'
                      : 'text-neutral-300 hover:text-white'
                  }`}
                >
                  Ideation Icons Team Portal
                </button>
              </div>

              {/* Click to expand in Lightbox */}
              <div
                onClick={() => {
                  const img = nasaView === 'certificate' ? NASA_CERTIFICATE : NASA_TEAM_PORTAL;
                  const title = nasaView === 'certificate'
                    ? 'NASA International Space Apps Challenge — Galactic Problem Solver Certificate'
                    : 'NASA Space Apps Challenge 2025 — Ideation Icons Team Portal';
                  handleOpenCertificate(MILESTONES[1], img, title);
                }}
                className="relative cursor-pointer aspect-[16/10] sm:aspect-[16/9] overflow-hidden group/img flex items-center justify-center p-2"
                title="Click to view full-resolution credential"
              >
                <img
                  src={nasaView === 'certificate' ? NASA_CERTIFICATE : NASA_TEAM_PORTAL}
                  alt={nasaView === 'certificate' ? 'NASA Space Apps Certificate' : 'NASA Space Apps Team Portal'}
                  className="w-full h-full object-contain sm:object-cover sm:object-center transition-transform duration-500 group-hover/img:scale-[1.02] rounded-xl"
                  referrerPolicy="no-referrer"
                />
                
                {/* Lightbox hint badge */}
                <div className="absolute bottom-4 right-4 z-20 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[11px] font-mono text-white border border-white/20 flex items-center gap-1.5 opacity-90 group-hover/img:opacity-100 transition-opacity">
                  <ZoomIn className="w-3.5 h-3.5 text-amber-300" />
                  <span>Inspect Full Document</span>
                </div>
              </div>
            </div>

            {/* Narrative Column */}
            <div className="lg:col-span-5 p-6 sm:p-10 lg:p-12 space-y-4">
              <div className="flex items-center gap-3 text-xs font-mono tracking-widest text-amber-400 uppercase">
                <span>Spotlight Milestone</span>
                <span aria-hidden="true">·</span>
                <span className="text-neutral-400">2025</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-white font-normal leading-tight">
                NASA Space Apps Challenge
              </h3>
              <div className="text-xs font-mono text-amber-200">
                National Finalist · Project MIRIS (Ideation Icons)
              </div>
              <p className="text-xs sm:text-sm text-neutral-300 font-sans leading-relaxed">
                Spearheaded computational modeling on Project MIRIS, addressing planetary sustainability (SpaceTrash Hack on Mars) utilizing Earth Observation and satellite telemetry datasets. Conferred the prestigious <strong>Galactic Problem Solver</strong> distinction signed by NASA Program Scientist Dr. Keith Gaddis.
              </p>
              
              <div className="pt-2 flex flex-wrap items-center gap-3 text-xs font-mono text-neutral-400">
                <span className="flex items-center gap-1.5 text-amber-300 font-semibold">
                  <FileCheck className="w-3.5 h-3.5" />
                  Verified NASA Credential
                </span>
                <span aria-hidden="true">·</span>
                <span>National Finalist Tier</span>
              </div>
            </div>
          </div>
        </div>

        {/* Category Filter Bar */}
        <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs font-mono tracking-wider uppercase rounded-md transition-colors whitespace-nowrap shrink-0 ${
                selectedCategory === cat
                  ? 'bg-amber-300 text-black font-semibold shadow-sm'
                  : 'bg-white/[0.03] text-neutral-400 hover:text-white hover:bg-white/[0.06] border border-white/[0.06]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Film Montage Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMilestones.map((milestone) => {
            const hasCertificate = Boolean(milestone.certificateImage);

            return (
              <div
                key={milestone.id}
                className="group p-6 sm:p-7 rounded-2xl bg-white/[0.02] border border-white/[0.07] hover:border-amber-400/40 hover:bg-white/[0.04] transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs font-mono text-neutral-400">
                    <span className="text-amber-300">{milestone.year}</span>
                    <span className="text-[11px] text-neutral-400 truncate max-w-[140px]">
                      {milestone.category}
                    </span>
                  </div>

                  <div>
                    <h4 className="font-serif text-lg sm:text-xl text-neutral-100 font-medium group-hover:text-amber-200 transition-colors leading-snug">
                      {milestone.title}
                    </h4>
                    <div className="text-xs font-sans text-neutral-400 mt-1">
                      {milestone.organization}
                    </div>
                  </div>

                  {/* Thumbnail Preview for Milestones with Authentic Evidence (Reliance, BPP, ServiceNow, Spark Chamber, McKinsey) */}
                  {(milestone.certificateImage || milestone.evidenceImage) && (
                    <div
                      onClick={() => {
                        const targetImg = milestone.certificateImage || milestone.evidenceImage!;
                        handleOpenCertificate(milestone, targetImg, milestone.evidenceLabel || milestone.title);
                      }}
                      className="cursor-pointer relative rounded-xl overflow-hidden border border-white/[0.1] aspect-[16/9] group/thumb my-2"
                      title="Click to view authentic credential"
                    >
                      <img
                        src={milestone.certificateImage || milestone.evidenceImage}
                        alt={`${milestone.title} Credential`}
                        className="w-full h-full object-cover object-center transition-transform duration-500 group-hover/thumb:scale-[1.03]"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-[11px] font-mono text-amber-200">
                        <span className="truncate max-w-[200px]">{milestone.evidenceLabel || 'View Authentic Credential'}</span>
                        <ZoomIn className="w-3.5 h-3.5 shrink-0" />
                      </div>
                    </div>
                  )}

                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-sans line-clamp-3">
                    {milestone.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono">
                  <span className="text-amber-300/90">{milestone.highlightText}</span>
                  <button
                    onClick={() => setActiveModalMilestone(milestone)}
                    className="inline-flex items-center gap-1 text-neutral-400 hover:text-white transition-colors"
                    aria-label={`Open dossier for ${milestone.title}`}
                  >
                    <span>Dossier</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Milestone Dossier Modal */}
      {activeModalMilestone && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-xl rounded-2xl bg-[#0f0f14] border border-white/[0.12] p-6 sm:p-8 shadow-2xl text-left">
            <button
              onClick={() => setActiveModalMilestone(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-neutral-400 hover:text-white bg-white/5 hover:bg-white/10"
              aria-label="Close dossier modal"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2 text-xs font-mono text-amber-300 uppercase tracking-widest mb-2">
              <Award className="w-3.5 h-3.5" />
              <span>{activeModalMilestone.year} · {activeModalMilestone.category}</span>
            </div>

            <h3 className="font-serif text-2xl text-white font-normal mb-1">
              {activeModalMilestone.title}
            </h3>

            <div className="text-sm font-sans text-neutral-400 mb-4">
              Conferred by {activeModalMilestone.organization}
            </div>

            {/* Certificate display if available */}
            {activeModalMilestone.certificateImage && (
              <div
                onClick={() => {
                  handleOpenCertificate(
                    activeModalMilestone,
                    activeModalMilestone.certificateImage!,
                    activeModalMilestone.title
                  );
                }}
                className="cursor-pointer mb-4 rounded-xl overflow-hidden border border-white/[0.1] aspect-[16/9] relative group/modalimg"
              >
                <img
                  src={activeModalMilestone.certificateImage}
                  alt={activeModalMilestone.title}
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/modalimg:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-3 py-1 rounded bg-black/80 text-xs font-mono text-white flex items-center gap-1.5">
                    <ZoomIn className="w-3.5 h-3.5 text-amber-300" />
                    Click for Full Resolution
                  </span>
                </div>
              </div>
            )}

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] mb-6">
              <div className="text-xs font-mono text-neutral-400 uppercase tracking-wider mb-1">
                Citation Summary
              </div>
              <div className="text-sm font-mono text-amber-200">
                {activeModalMilestone.highlightText}
              </div>
            </div>

            <p className="text-sm text-neutral-300 font-sans leading-relaxed mb-6">
              {activeModalMilestone.description}
            </p>

            <div className="flex justify-end gap-3 pt-4 border-t border-white/[0.08]">
              <button
                onClick={() => setActiveModalMilestone(null)}
                className="px-5 py-2 text-xs font-mono uppercase tracking-wider text-black bg-amber-300 hover:bg-amber-200 rounded-md font-semibold transition-colors"
              >
                Close Dossier
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
