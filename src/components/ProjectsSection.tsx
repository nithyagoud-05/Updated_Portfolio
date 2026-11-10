import React, { useState } from 'react';
import {
  ExternalLink,
  Github,
  Layers,
  ShieldCheck,
  Cpu,
  Database,
  ZoomIn,
  ChevronLeft,
  ChevronRight,
  Activity,
  CheckCircle2,
  Boxes,
  Compass,
} from 'lucide-react';
import { ChapterHeader } from './ChapterHeader';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { LightboxData } from './ImageLightbox';

interface ProjectsSectionProps {
  onOpenLightbox?: (data: LightboxData) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onOpenLightbox }) => {
  const [activeProjectTab, setActiveProjectTab] = useState<{ [key: string]: 'overview' | 'architecture' | 'decisions' | 'engineering' }>({
    recallgraph: 'overview',
    annapurna: 'overview',
  });

  const [activeScreenshotIndex, setActiveScreenshotIndex] = useState<{ [key: string]: number }>({
    recallgraph: 0,
    annapurna: 0,
  });

  const setTab = (projectId: string, tab: 'overview' | 'architecture' | 'decisions' | 'engineering') => {
    setActiveProjectTab((prev) => ({ ...prev, [projectId]: tab }));
  };

  const setScreenshot = (projectId: string, index: number) => {
    setActiveScreenshotIndex((prev) => ({ ...prev, [projectId]: index }));
  };

  const handleScreenshotClick = (project: Project, screenshotIndex: number) => {
    if (onOpenLightbox && project.screenshots && project.screenshots.length > 0) {
      const activeShot = project.screenshots[screenshotIndex] || project.screenshots[0];
      onOpenLightbox({
        imageUrl: activeShot.url,
        title: `${project.title} — ${activeShot.tag}`,
        subtitle: activeShot.caption,
        category: project.status,
        externalLink: project.liveUrl,
      });
    }
  };

  // Helper for status badge styling
  const getStatusBadge = (status: Project['status']) => {
    switch (status) {
      case 'Project Demo':
      case 'Deployed Project':
      case 'Production System':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono uppercase tracking-wider bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Project Demo</span>
          </span>
        );
      case 'Prototype':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono uppercase tracking-wider bg-sky-500/10 text-sky-300 border border-sky-500/30">
            <Boxes className="w-3 h-3" />
            <span>Prototype</span>
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <section id="works" className="py-20 sm:py-32 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <ChapterHeader
          number="04"
          title="The Things I Have Built"
          subtitle="Full-stack applications and prototypes engineered for real-world trust, transparency, and high-integrity data traceability — presented through authentic deployed interfaces."
          category="Projects"
        />

        <div className="space-y-28 lg:space-y-36">
          {PROJECTS.map((project: Project, index: number) => {
            const currentTab = activeProjectTab[project.id] || 'overview';
            const isReversed = index % 2 === 1;
            const hasScreenshots = project.screenshots && project.screenshots.length > 0;
            const currentScreenshotIdx = activeScreenshotIndex[project.id] || 0;
            const activeScreenshot = hasScreenshots
              ? project.screenshots[currentScreenshotIdx] || project.screenshots[0]
              : null;

            return (
              <article
                key={project.id}
                className="relative rounded-3xl bg-[#09090d] border border-white/[0.08] p-6 sm:p-10 lg:p-12 shadow-2xl overflow-hidden"
              >
                {/* Subtle cinematic backdrop glow */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/[0.03] rounded-full blur-3xl pointer-events-none" />

                {/* Case Study Header Lockup */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-white/[0.08]">
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center gap-3 text-xs font-mono tracking-widest uppercase">
                      <span className="text-amber-300">Project 0{index + 1}</span>
                      <span className="text-neutral-600" aria-hidden="true">·</span>
                      <span className="text-neutral-400">{project.timeline}</span>
                      <span className="text-neutral-600" aria-hidden="true">·</span>
                      {getStatusBadge(project.status)}
                    </div>
                    <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-normal">
                      {project.title}
                    </h3>
                    <p className="text-base sm:text-lg text-neutral-300 font-sans max-w-2xl">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Actions & Links */}
                  <div className="flex flex-wrap items-center gap-3 shrink-0">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono uppercase tracking-wider text-neutral-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-md transition-colors whitespace-nowrap"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>Source Code</span>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2 text-xs font-mono uppercase tracking-wider font-semibold text-black bg-amber-300 hover:bg-amber-200 rounded-md transition-colors whitespace-nowrap shadow-sm"
                      >
                        <span>Live Demo</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Main Showcase Layout */}
                <div
                  className={`mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start ${
                    isReversed ? 'lg:grid-flow-dense' : ''
                  }`}
                >
                  {/* Visual Interface Column: Real Screenshots with Browser Chrome & Switcher */}
                  <div className={`lg:col-span-7 ${isReversed ? 'lg:col-start-6' : ''}`}>
                    {hasScreenshots && activeScreenshot ? (
                      /* Browser-style frame */
                      <div className="rounded-2xl overflow-hidden border border-white/[0.12] bg-[#0c0c12] shadow-2xl">
                        {/* Browser top address bar */}
                        <div className="flex items-center justify-between px-4 py-2.5 bg-[#14141c] border-b border-white/[0.08]">
                          <div className="flex items-center gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                          </div>
                          <div className="text-[11px] font-mono text-neutral-400 bg-black/40 px-3 py-1 rounded-md border border-white/[0.06] flex items-center gap-2 max-w-[280px] sm:max-w-[340px] truncate">
                            {project.liveUrl ? (
                              <>
                                <span className="text-emerald-400">https://</span>
                                <span className="truncate">{project.liveUrl.replace('https://', '')}</span>
                              </>
                            ) : (
                              <>
                                <span className="text-amber-400">credential://</span>
                                <span className="truncate">{project.title.toLowerCase()}.artifact</span>
                              </>
                            )}
                          </div>
                          <span className="text-[10px] font-mono text-amber-300 uppercase tracking-wider hidden sm:inline">
                            Interactive Demo
                          </span>
                        </div>

                        {/* Interactive screenshot viewer */}
                        <div
                          onClick={() => handleScreenshotClick(project, currentScreenshotIdx)}
                          className="relative group cursor-pointer aspect-[16/10] sm:aspect-[16/9] bg-[#050508] overflow-hidden"
                          title="Click to expand high-resolution view"
                        >
                          <img
                            src={activeScreenshot.url}
                            alt={`${project.title} — ${activeScreenshot.tag}`}
                            className="w-full h-full object-contain sm:object-cover sm:object-top transition-transform duration-500 group-hover:scale-[1.01]"
                            referrerPolicy="no-referrer"
                          />
                          {/* Hover Overlay */}
                          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <span className="px-3.5 py-1.5 rounded-full bg-black/70 backdrop-blur-md text-xs font-mono text-white border border-white/20 flex items-center gap-2">
                              <ZoomIn className="w-3.5 h-3.5 text-amber-300" />
                              <span>Click to Inspect Full Resolution</span>
                            </span>
                          </div>
                        </div>

                        {/* Screenshot Caption & Quick Navigation Bar */}
                        <div className="px-4 py-3 bg-[#111118] border-t border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                          <div className="font-mono text-neutral-300">
                            <span className="text-amber-300 font-medium">{activeScreenshot.tag}</span>
                            <span className="text-neutral-500 mx-2">·</span>
                            <span className="text-neutral-400 text-[11px]">{activeScreenshot.caption}</span>
                          </div>

                          {project.screenshots.length > 1 && (
                            <div className="flex items-center gap-1 shrink-0 self-end sm:self-auto">
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  const newIdx =
                                    currentScreenshotIdx === 0
                                      ? project.screenshots.length - 1
                                      : currentScreenshotIdx - 1;
                                  setScreenshot(project.id, newIdx);
                                }}
                                className="p-1.5 rounded text-neutral-400 hover:text-white hover:bg-white/10"
                                aria-label="Previous screenshot"
                              >
                                <ChevronLeft className="w-3.5 h-3.5" />
                              </button>
                              <span className="font-mono text-[11px] text-neutral-400 px-1">
                                {currentScreenshotIdx + 1}/{project.screenshots.length}
                              </span>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  const newIdx = (currentScreenshotIdx + 1) % project.screenshots.length;
                                  setScreenshot(project.id, newIdx);
                                }}
                                className="p-1.5 rounded text-neutral-400 hover:text-white hover:bg-white/10"
                                aria-label="Next screenshot"
                              >
                                <ChevronRight className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    ) : (
                      /* Embedded IoT Hardware Showcase (EMBRACE) — Zero fake UI, pure engineering schematic */
                      <div className="rounded-2xl border border-white/[0.12] bg-[#0c0c12] p-6 sm:p-8 space-y-6 shadow-2xl">
                        <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-300">
                            <Activity className="w-4 h-4 text-emerald-400 animate-pulse" />
                            <span>Hardware IoT Architecture & Vitals Acquisition</span>
                          </div>
                          <span className="text-[11px] font-mono text-neutral-400">ESP32 Dual-Core</span>
                        </div>

                        {/* Simulated Oscilloscope Waveform */}
                        <div className="p-4 rounded-xl bg-black/60 border border-white/[0.06] space-y-2">
                          <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400">
                            <span>PPG Optical Pulse Waveform (IR & Red Channel)</span>
                            <span className="text-emerald-400">72 BPM · Calibrated</span>
                          </div>
                          <div className="h-20 w-full flex items-center justify-center relative overflow-hidden">
                            {/* Stylized ECG/PPG Waveform SVG */}
                            <svg className="w-full h-16 stroke-amber-400 fill-none" viewBox="0 0 500 80">
                              <path
                                d="M 0,40 L 60,40 L 70,38 L 80,42 L 90,40 L 110,40 L 120,20 L 130,65 L 140,5 L 150,55 L 160,35 L 170,40 L 230,40 L 240,38 L 250,42 L 260,40 L 280,40 L 290,20 L 300,65 L 310,5 L 320,55 L 330,35 L 340,40 L 400,40 L 410,38 L 420,42 L 430,40 L 450,40 L 460,20 L 470,65 L 480,5 L 490,55 L 500,40"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                          <div className="flex items-center justify-between text-[10px] font-mono text-neutral-500 pt-1 border-t border-white/[0.04]">
                            <span>Sampling: 100 Hz</span>
                            <span>Noise Filter: C++ Bandpass</span>
                            <span>Bus: I2C 400kHz</span>
                          </div>
                        </div>

                        {/* Hardware Specifications Matrix */}
                        <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                          <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                            <div className="text-neutral-400 text-[10px]">Microcontroller</div>
                            <div className="text-white font-medium">ESP-WROOM-32 (240MHz)</div>
                          </div>
                          <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                            <div className="text-neutral-400 text-[10px]">Sensor Interface</div>
                            <div className="text-white font-medium">Optical PPG Sensor (MAX30102)</div>
                          </div>
                          <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                            <div className="text-neutral-400 text-[10px]">Firmware Language</div>
                            <div className="text-white font-medium">Embedded C++ / FreeRTOS</div>
                          </div>
                          <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                            <div className="text-neutral-400 text-[10px]">Telemetry</div>
                            <div className="text-white font-medium">Serial Stream & BLE Beacon</div>
                          </div>
                        </div>

                        <p className="text-[11px] font-mono text-neutral-400 italic">
                          Authentic physical prototype: embedded firmware running directly on microcontroller hardware.
                        </p>
                      </div>
                    )}

                    {/* Screenshot thumbnail buttons (when multiple screenshots exist) */}
                    {hasScreenshots && project.screenshots.length > 1 && (
                      <div className="mt-3 flex items-center gap-2 overflow-x-auto pb-1">
                        {project.screenshots.map((shot, shotIdx) => (
                          <button
                            key={shot.tag}
                            onClick={() => setScreenshot(project.id, shotIdx)}
                            className={`px-3 py-1.5 rounded-lg border text-left text-xs font-mono transition-all whitespace-nowrap shrink-0 flex items-center gap-2 ${
                              shotIdx === currentScreenshotIdx
                                ? 'bg-amber-400/10 border-amber-400/50 text-amber-200'
                                : 'bg-white/[0.02] border-white/[0.06] text-neutral-400 hover:text-white hover:bg-white/[0.05]'
                            }`}
                          >
                            <span className="text-[10px] text-neutral-400 font-semibold">0{shotIdx + 1}</span>
                            <span>{shot.tag}</span>
                          </button>
                        ))}
                      </div>
                    )}

                    {/* Tech Stack Metadata Strip */}
                    <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-neutral-400 font-mono">
                      <span className="text-neutral-300 font-medium">Stack:</span>
                      {project.technologies.map((tech, techIdx) => (
                        <React.Fragment key={tech}>
                          <span className="text-neutral-200">{tech}</span>
                          {techIdx < project.technologies.length - 1 && (
                            <span className="text-neutral-600" aria-hidden="true">·</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>

                  {/* Interactive Technical Deep-Dive Column */}
                  <div className={`lg:col-span-5 ${isReversed ? 'lg:col-start-1' : ''} space-y-6`}>
                    {/* Deep-dive Tab Selector */}
                    <div className="flex items-center gap-1 p-1 bg-white/[0.03] border border-white/[0.07] rounded-lg">
                      <button
                        onClick={() => setTab(project.id, 'overview')}
                        className={`flex-1 py-1.5 px-2 text-xs font-mono tracking-wider uppercase rounded transition-colors whitespace-nowrap ${
                          currentTab === 'overview'
                            ? 'bg-amber-400 text-black font-semibold'
                            : 'text-neutral-400 hover:text-white'
                        }`}
                      >
                        Overview
                      </button>
                      <button
                        onClick={() => setTab(project.id, 'architecture')}
                        className={`flex-1 py-1.5 px-2 text-xs font-mono tracking-wider uppercase rounded transition-colors whitespace-nowrap ${
                          currentTab === 'architecture'
                            ? 'bg-amber-400 text-black font-semibold'
                            : 'text-neutral-400 hover:text-white'
                        }`}
                      >
                        Architecture
                      </button>
                      <button
                        onClick={() => setTab(project.id, 'decisions')}
                        className={`flex-1 py-1.5 px-2 text-xs font-mono tracking-wider uppercase rounded transition-colors whitespace-nowrap ${
                          currentTab === 'decisions'
                            ? 'bg-amber-400 text-black font-semibold'
                            : 'text-neutral-400 hover:text-white'
                        }`}
                      >
                        Decisions
                      </button>
                      <button
                        onClick={() => setTab(project.id, 'engineering')}
                        className={`flex-1 py-1.5 px-2 text-xs font-mono tracking-wider uppercase rounded transition-colors whitespace-nowrap ${
                          currentTab === 'engineering'
                            ? 'bg-amber-400 text-black font-semibold'
                            : 'text-neutral-400 hover:text-white'
                        }`}
                      >
                        Highlights
                      </button>
                    </div>

                    {/* Tab Panes */}
                    <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] min-h-[310px]">
                      {currentTab === 'overview' && (
                        <div className="space-y-4">
                          <div>
                            <div className="flex items-center gap-2 text-xs font-mono uppercase text-amber-400 tracking-wider mb-1">
                              <ShieldCheck className="w-3.5 h-3.5" />
                              <span>The Problem Statement</span>
                            </div>
                            <p className="text-sm text-neutral-300 leading-relaxed font-sans">
                              {project.problem}
                            </p>
                          </div>

                          <div className="pt-2">
                            <div className="flex items-center gap-2 text-xs font-mono uppercase text-amber-400 tracking-wider mb-1">
                              <Cpu className="w-3.5 h-3.5" />
                              <span>Architected Solution</span>
                            </div>
                            <p className="text-sm text-neutral-300 leading-relaxed font-sans">
                              {project.solution}
                            </p>
                          </div>

                          {project.features && project.features.length > 0 && (
                            <div className="pt-2 border-t border-white/[0.06]">
                              <div className="text-xs font-mono uppercase text-amber-300 tracking-wider mb-2">
                                Key Capabilities
                              </div>
                              <ul className="space-y-1.5 text-xs text-neutral-300 font-sans">
                                {project.features.map((feat, fIdx) => (
                                  <li key={fIdx} className="flex items-center gap-2">
                                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                                    <span>{feat}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      )}

                      {currentTab === 'architecture' && (
                        <div className="space-y-3">
                          <div className="flex items-center gap-2 text-xs font-mono uppercase text-amber-400 tracking-wider mb-2">
                            <Layers className="w-3.5 h-3.5" />
                            <span>System Architecture Layers</span>
                          </div>
                          <ul className="space-y-2.5 text-xs text-neutral-300 font-sans leading-relaxed">
                            {(project.architecture || []).map((item, i) => (
                              <li key={i} className="flex items-start gap-2.5">
                                <span className="text-amber-400 font-mono font-semibold shrink-0">
                                  0{i + 1}.
                                </span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {currentTab === 'decisions' && (
                        <div className="space-y-3">
                          <div className="flex items-center gap-2 text-xs font-mono uppercase text-amber-400 tracking-wider mb-2">
                            <Database className="w-3.5 h-3.5" />
                            <span>Key Product & Trade-Off Decisions</span>
                          </div>
                          <ul className="space-y-2.5 text-xs text-neutral-300 font-sans leading-relaxed">
                            {(project.keyDecisions || []).map((decision, i) => (
                              <li key={i} className="flex items-start gap-2.5">
                                <span className="text-amber-400 font-mono font-semibold shrink-0">
                                  ·
                                </span>
                                <span>{decision}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {currentTab === 'engineering' && (
                        <div className="space-y-3">
                          <div className="flex items-center gap-2 text-xs font-mono uppercase text-amber-400 tracking-wider mb-2">
                            <Cpu className="w-3.5 h-3.5" />
                            <span>Core Engineering Highlights</span>
                          </div>
                          <ul className="space-y-2.5 text-xs text-neutral-300 font-sans leading-relaxed">
                            {(project.engineeringHighlights || []).map((highlight, i) => (
                              <li key={i} className="flex items-start gap-2.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                                <span>{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
