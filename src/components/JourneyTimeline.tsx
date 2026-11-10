import React, { useState } from 'react';
import { Award, BookOpen, Compass, Trophy } from 'lucide-react';
import { ChapterHeader } from './ChapterHeader';
import { ACADEMIC_METRICS } from '../data/portfolioData';

interface TimelineEvent {
  year: string;
  stage: string;
  title: string;
  highlight: string;
  narrative: string;
  proof: string;
  icon: typeof Trophy;
}

const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    year: '2024 – 2028',
    stage: 'Undergraduate Engineering',
    title: 'Computer Science at GNITS Hyderabad — 9.51 / 10 CGPA',
    highlight: 'B.Tech CSE · Class of 2028',
    narrative:
      'I am pursuing my Bachelor of Technology in Computer Science and Engineering at GNITS Hyderabad, focusing on core computer science, systems engineering, and algorithmic problem solving.',
    proof: 'Official CGPA: 9.51 out of 10.0 scale',
    icon: BookOpen,
  },
  {
    year: '2024',
    stage: 'State Engineering Entrance',
    title: 'TS EAMCET — State Rank 977',
    highlight: 'Rank 977 in Telangana State',
    narrative:
      'I secured State Rank 977 in the Telangana State Engineering, Agriculture & Medical Common Entrance Test (TS EAMCET), which opened up opportunities to pursue engineering at top institutions.',
    proof: 'State Rank 977 · TS EAMCET 2024',
    icon: Trophy,
  },
  {
    year: '2024',
    stage: 'National Engineering Entrance',
    title: 'JEE Main 97.0 Percentile & JEE Advanced 102 / 360',
    highlight: 'Top 3% Nationally among 1.2M+ Aspirants',
    narrative:
      'I achieved a 97th percentile score in JEE Main and qualified JEE Advanced with 102/360 marks, grounding my conceptual foundation in mathematics, physics, and analytical thinking.',
    proof: 'JEE Main 97.0%ile · JEE Advanced 102/360',
    icon: Award,
  },
  {
    year: '2021',
    stage: 'Foundational Aptitude',
    title: 'NTSE Stage 1 — State Rank 11 (179 / 200 Marks)',
    highlight: 'National Talent Search Examination',
    narrative:
      'I achieved State Rank 11 with 179/200 marks in the National Talent Search Examination (Stage 1), which sparked my love for logical and mathematical problem solving early on.',
    proof: '179 / 200 · State Rank 11',
    icon: Compass,
  },
];

export const JourneyTimeline: React.FC = () => {
  const [selectedEventIndex, setSelectedEventIndex] = useState<number>(0);
  const activeEvent = TIMELINE_EVENTS[selectedEventIndex];

  return (
    <section id="journey" className="py-20 sm:py-28 relative scroll-mt-20 bg-[#050507]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <ChapterHeader
          number="05"
          title="Academic Journey"
          subtitle="Evidence of consistency, effort, and conceptual discipline — establishing the foundations for building resilient software."
          category="Journey"
        />

        {/* 6-Metric Visual Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 mb-16">
          {ACADEMIC_METRICS.map((metric) => (
            <div
              key={metric.label}
              className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-amber-400/30 transition-all flex flex-col justify-between"
            >
              <div className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider mb-2">
                {metric.category}
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-mono font-semibold text-amber-200 tabular-nums">
                  {metric.value}
                </div>
                <div className="text-xs text-neutral-300 mt-1 font-medium leading-snug">
                  {metric.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Cinematic Dual-Track Timeline Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Interactive Milestone List */}
          <div className="lg:col-span-5 space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-2">
              Timeline Milestones (Select to view detailed context)
            </div>

            {TIMELINE_EVENTS.map((event, idx) => {
              const isSelected = selectedEventIndex === idx;
              return (
                <button
                  key={event.title}
                  onClick={() => setSelectedEventIndex(idx)}
                  className={`w-full text-left p-4 rounded-xl border transition-all flex items-start gap-4 ${
                    isSelected
                      ? 'bg-amber-500/[0.08] border-amber-400/40 text-white shadow-lg shadow-amber-500/5'
                      : 'bg-white/[0.02] border-white/[0.05] text-neutral-400 hover:text-neutral-200 hover:bg-white/[0.04]'
                  }`}
                >
                  <div
                    className={`mt-1 w-2.5 h-2.5 rounded-full shrink-0 transition-colors ${
                      isSelected ? 'bg-amber-400' : 'bg-neutral-600'
                    }`}
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between text-xs font-mono mb-1">
                      <span className={isSelected ? 'text-amber-300' : 'text-neutral-400'}>
                        {event.year}
                      </span>
                      <span className="text-[11px] text-neutral-400 truncate max-w-[130px]">
                        {event.stage}
                      </span>
                    </div>
                    <div className="text-sm font-medium text-neutral-100 truncate">
                      {event.title}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Deep-Dive Focus Stage */}
          <div className="lg:col-span-7">
            <div className="relative p-6 sm:p-8 rounded-2xl bg-[#0d0d12] border border-white/[0.08] shadow-2xl min-h-[380px] flex flex-col justify-between">
              <div className="space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/[0.06]">
                  <div className="flex items-center gap-3 text-xs font-mono text-amber-300">
                    <span className="uppercase tracking-widest">{activeEvent.stage}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-neutral-400">{activeEvent.year}</span>
                  </div>
                  <div className="text-xs font-mono text-neutral-400 tracking-wider">
                    Milestone {selectedEventIndex + 1} of {TIMELINE_EVENTS.length}
                  </div>
                </div>

                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-neutral-50 font-normal leading-snug">
                    {activeEvent.title}
                  </h3>
                  <div className="mt-2 text-sm font-mono text-amber-200">
                    {activeEvent.highlight}
                  </div>
                </div>

                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-sans">
                  {activeEvent.narrative}
                </p>
              </div>

              {/* Verified Proof Strip */}
              <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-neutral-400">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span className="text-neutral-300">Authentic Record:</span>
                  <span>{activeEvent.proof}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
