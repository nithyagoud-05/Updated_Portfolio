import React, { useState } from 'react';
import { Users, Presentation, Terminal, Sparkles, BookOpen, ChevronRight, Award } from 'lucide-react';
import { ChapterHeader } from './ChapterHeader';

interface LeadershipMilestone {
  period: string;
  role: string;
  initiative: string;
  deliverables: string[];
  impactMetric: string;
  icon: typeof Terminal;
}

const LEADERSHIP_TRACKS: LeadershipMilestone[] = [
  {
    period: 'August – October 2026',
    role: 'Vice President',
    initiative: 'Google Developer Groups (GDG) On Campus — GNITS',
    deliverables: [
      'Part of the GDG On Campus leadership team at GNITS.',
      'Involved in organizing hands-on coding sessions and technical workshops for student developers.',
      'Collaborated with peers to create an encouraging, curiosity-driven learning environment.',
    ],
    impactMetric: 'Executive Leadership',
    icon: Users,
  },
  {
    period: '2024',
    role: 'Trainee',
    initiative: 'Cisco CWiCS BOOST 6.0',
    deliverables: [
      'Completed mandatory programme courses covering networking, cybersecurity, and system fundamentals.',
      'Successfully completed the hands-on Capture The Flag (CTF) security challenge.',
      'Maintained 100% attendance throughout the intensive 45-day training cohort.',
    ],
    impactMetric: '45-Day Intensive Cohort',
    icon: Terminal,
  },
  {
    period: '2026',
    role: 'Launch Participant',
    initiative: 'PwC Women\'s Leadership Development Program (WLDP)',
    deliverables: [
      'Selected for cohort training focusing on strategic leadership, problem solving, and innovation.',
      'Engaged in collaborative discussions, case studies, and professional development.',
    ],
    impactMetric: 'Selective Cohort',
    icon: Award,
  },
  {
    period: 'Ongoing',
    role: 'Coordinator & Ambassador',
    initiative: 'Campus Leadership & Student Initiatives',
    deliverables: [
      'Student Placement Coordinator helping coordinate technical drives at GNITS.',
      'VedaVerse Campus Ambassador representing student initiatives.',
      'Nirman Club Communication Head managing community outreach.',
      'Former Head Girl with experience coordinating student teams.',
    ],
    impactMetric: 'Student Governance',
    icon: Presentation,
  },
];

interface LeadershipSectionProps {
  /** Optional array of authentic event photographs to display if provided by user */
  eventPhotographs?: string[];
}

export const LeadershipSection: React.FC<LeadershipSectionProps> = ({ eventPhotographs = [] }) => {
  const [selectedTrackIndex, setSelectedTrackIndex] = useState<number>(0);
  const activeTrack = LEADERSHIP_TRACKS[selectedTrackIndex];

  return (
    <section className="py-20 sm:py-32 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <ChapterHeader
          number="05"
          title="Leadership — Beyond the Code"
          subtitle="Contributing to technical communities, organizing hands-on workshops, and collaborating with peers to learn and build together."
          category="Leadership"
        />

        {/* 3-Pillar Community Telemetry Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-14">
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.07] hover:border-amber-400/30 transition-colors">
            <div className="flex items-center justify-between text-xs font-mono text-neutral-400 mb-2">
              <span className="uppercase tracking-widest text-amber-300">Executive Office</span>
              <Users className="w-4 h-4 text-amber-400" />
            </div>
            <div className="text-xl sm:text-2xl font-serif text-white font-normal mt-1">
              Vice President
            </div>
            <p className="text-xs text-neutral-400 mt-2 font-sans leading-relaxed">
              Google Developer Groups (GDG) On Campus at GNITS Hyderabad (August – October 2026).
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.07] hover:border-amber-400/30 transition-colors">
            <div className="flex items-center justify-between text-xs font-mono text-neutral-400 mb-2">
              <span className="uppercase tracking-widest text-amber-300">Technical Sessions</span>
              <Terminal className="w-4 h-4 text-amber-400" />
            </div>
            <div className="text-xl sm:text-2xl font-serif text-white font-normal mt-1">
              Workshops & Coding
            </div>
            <p className="text-xs text-neutral-400 mt-2 font-sans leading-relaxed">
              Involved in organizing hands-on coding sessions and practical technical workshops.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.07] hover:border-amber-400/30 transition-colors">
            <div className="flex items-center justify-between text-xs font-mono text-neutral-400 mb-2">
              <span className="uppercase tracking-widest text-amber-300">Student Initiatives</span>
              <Sparkles className="w-4 h-4 text-amber-400" />
            </div>
            <div className="text-xl sm:text-2xl font-serif text-white font-normal mt-1">
              Campus Leadership
            </div>
            <p className="text-xs text-neutral-400 mt-2 font-sans leading-relaxed">
              Placement Coordinator, Campus Ambassador, Communication Head, and former Head Girl.
            </p>
          </div>
        </div>

        {/* Editorial Narrative & Interactive Timeline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Interactive Track Selector */}
          <div className="lg:col-span-5 space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-3">
              Leadership Initiatives & Responsibilities
            </div>

            {LEADERSHIP_TRACKS.map((track, idx) => {
              const isSelected = selectedTrackIndex === idx;
              const IconComp = track.icon;

              return (
                <button
                  key={track.initiative}
                  onClick={() => setSelectedTrackIndex(idx)}
                  className={`w-full text-left p-4 rounded-xl border transition-all flex items-start gap-3.5 ${
                    isSelected
                      ? 'bg-amber-400/10 border-amber-400/40 text-white shadow-lg shadow-amber-500/5'
                      : 'bg-white/[0.02] border-white/[0.05] text-neutral-400 hover:text-neutral-200 hover:bg-white/[0.04]'
                  }`}
                >
                  <div className={`p-2 rounded-lg shrink-0 mt-0.5 ${isSelected ? 'bg-amber-300 text-black' : 'bg-white/5 text-neutral-400'}`}>
                    <IconComp className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between text-[11px] font-mono mb-1">
                      <span className={isSelected ? 'text-amber-300 font-semibold' : 'text-neutral-400'}>
                        {track.period}
                      </span>
                      <span className="text-neutral-400 truncate max-w-[120px]">
                        {track.role}
                      </span>
                    </div>
                    <div className="text-sm font-medium text-neutral-100 truncate font-sans">
                      {track.initiative}
                    </div>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 shrink-0 transition-transform mt-1.5 ${
                      isSelected ? 'text-amber-400 translate-x-0.5' : 'text-neutral-600'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Deep-Dive Narrative Stage & Documentary Typography Slate */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0c0c12] border border-white/[0.09] shadow-2xl space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-white/[0.07] text-xs font-mono">
                <div className="flex items-center gap-2 text-amber-300">
                  <span className="uppercase tracking-widest">{activeTrack.role}</span>
                  <span className="text-neutral-600">·</span>
                  <span className="text-neutral-400">{activeTrack.period}</span>
                </div>
                <span className="px-2.5 py-0.5 rounded bg-white/[0.04] text-neutral-300 border border-white/[0.06]">
                  {activeTrack.impactMetric}
                </span>
              </div>

              <div>
                <h4 className="font-serif text-2xl sm:text-3xl text-white font-normal leading-tight">
                  {activeTrack.initiative}
                </h4>
                <p className="mt-2 text-xs font-mono text-neutral-400">
                  {activeTrack.role} · {activeTrack.period}
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <div className="text-[11px] font-mono uppercase tracking-wider text-amber-400">
                  Core Involvement & Deliverables
                </div>
                <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-300 font-sans leading-relaxed">
                  {activeTrack.deliverables.map((item, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-3">
                      <span className="text-amber-400 font-mono font-semibold shrink-0">0{dIdx + 1}.</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Direct Leadership Reflection */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-amber-500/[0.04] to-transparent border border-amber-500/15">
                <blockquote className="font-serif italic text-xs sm:text-sm text-amber-100/90 leading-relaxed">
                  &ldquo;Bringing people together, encouraging my peers, and working towards a common goal is what I value most about leadership.&rdquo;
                </blockquote>
                <div className="mt-2 text-[11px] font-mono text-neutral-400">
                  — Elikatti Nithya Goud
                </div>
              </div>
            </div>

            {/* Optional Authentic Event Photo Gallery (Cleanly renders when photographs are provided, otherwise hidden with zero broken frames) */}
            {eventPhotographs && eventPhotographs.length > 0 && (
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                <div className="text-xs font-mono text-neutral-400 uppercase tracking-wider mb-3">
                  Documentary Event Archive
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {eventPhotographs.map((photoUrl, pIdx) => (
                    <div key={pIdx} className="rounded-xl overflow-hidden aspect-[16/9] border border-white/10">
                      <img src={photoUrl} alt={`GDG Event ${pIdx + 1}`} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
