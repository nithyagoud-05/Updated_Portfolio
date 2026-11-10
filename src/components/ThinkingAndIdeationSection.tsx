import React, { useState } from 'react';
import { Lightbulb, Compass, Search, Sparkles, Target, ArrowRight, HeartHandshake, ShieldCheck, Quote } from 'lucide-react';
import { ChapterHeader } from './ChapterHeader';
import {
  PROBLEM_SOLVING_PHILOSOPHY,
  IDEATION_PROCESS,
  ASPIRATIONS,
  WHAT_KEEPS_ME_GOING,
  PERSONAL_QUOTES,
} from '../data/portfolioData';

export const ThinkingAndIdeationSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [activeIdeationStep, setActiveIdeationStep] = useState<number>(0);

  return (
    <section id="thinking" className="py-20 sm:py-32 relative scroll-mt-20 bg-[#060609]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-28 lg:space-y-36">

        {/* 1. HOW I THINK AND APPROACH PROBLEMS */}
        <div>
          <ChapterHeader
            number="07"
            title="Before finding the solution, understand the problem."
            subtitle="My personal working philosophy when facing bugs, complex architecture, and team roadblocks."
            category="Philosophy"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left: Authentic Voice Reflections */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-6 sm:p-7 rounded-2xl bg-white/[0.02] border border-white/[0.07] hover:border-amber-400/30 transition-all space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-amber-300">
                  <Search className="w-3.5 h-3.5" />
                  <span>Analysis Comes First</span>
                </div>
                <blockquote className="font-serif italic text-base sm:text-lg text-neutral-100 leading-snug">
                  &ldquo;When something goes wrong, I might become a little nervous, wondering where the mistake is actually happening. But the first thing I do is analyse.&rdquo;
                </blockquote>
                <p className="text-xs sm:text-sm text-neutral-400 font-sans leading-relaxed">
                  &ldquo;I try to understand what&apos;s exactly happening, identify where the actual problem is hidden and then figure out how to move forward.&rdquo;
                </p>
              </div>

              <div className="p-6 sm:p-7 rounded-2xl bg-white/[0.02] border border-white/[0.07] hover:border-amber-400/30 transition-all space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-amber-300">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Taking Ownership</span>
                </div>
                <blockquote className="font-serif italic text-base sm:text-lg text-neutral-100 leading-snug">
                  &ldquo;When people in my team aren&apos;t able to figure something out, I take ownership and take the initiative to understand what&apos;s actually happening.&rdquo;
                </blockquote>
                <p className="text-xs text-neutral-300 font-sans leading-relaxed">
                  I don&apos;t claim to know every answer in advance, but I step up with structured determination to help unblock my team.
                </p>
              </div>
            </div>

            {/* Right: The 5-Step Problem Solving Approach */}
            <div className="lg:col-span-7 space-y-3">
              <div className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-2">
                My Problem-Solving Approach (Interactive Steps)
              </div>

              {PROBLEM_SOLVING_PHILOSOPHY.steps.map((step, idx) => {
                const isSelected = activeStep === idx;
                return (
                  <div
                    key={step.number}
                    onClick={() => setActiveStep(idx)}
                    className={`cursor-pointer p-4 sm:p-5 rounded-xl border transition-all ${
                      isSelected
                        ? 'bg-amber-400/10 border-amber-400/40 text-white shadow-lg shadow-amber-500/5'
                        : 'bg-white/[0.02] border-white/[0.05] text-neutral-400 hover:text-neutral-200 hover:bg-white/[0.04]'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className={`text-xs font-mono font-semibold ${isSelected ? 'text-amber-300' : 'text-neutral-500'}`}>
                          Step {step.number}
                        </span>
                        <h4 className="text-sm sm:text-base font-medium text-neutral-100 font-sans">
                          {step.title}
                        </h4>
                      </div>
                      <span className={`text-xs font-mono ${isSelected ? 'text-amber-300' : 'text-neutral-600'}`}>
                        {isSelected ? 'Focused' : 'Expand'}
                      </span>
                    </div>
                    {isSelected && (
                      <p className="mt-3 text-xs sm:text-sm text-neutral-300 font-sans leading-relaxed pl-1 sm:pl-9">
                        {step.detail}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* 2. IDEATION — WHERE IMAGINATION BEGINS */}
        <div>
          <ChapterHeader
            number="03"
            title="Ideation — Where Imagination Begins"
            subtitle="Combining diverse perspectives to discover what is missing in current technology."
            category="Creative Process"
          />

          <div className="p-8 sm:p-10 rounded-3xl bg-[#09090e] border border-white/[0.08] relative overflow-hidden space-y-10">
            {/* Signature quote highlight */}
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-amber-300 uppercase tracking-widest">
                <Lightbulb className="w-3.5 h-3.5" />
                <span>The Ideation Mindset</span>
              </div>
              <blockquote className="font-serif italic text-xl sm:text-2xl lg:text-3xl text-neutral-100 leading-snug">
                &ldquo;{IDEATION_PROCESS.quote}&rdquo;
              </blockquote>
            </div>

            {/* Visual Process Flow: Observe → Question → Brainstorm → Identify the Gap → Imagine → Build */}
            <div className="space-y-4">
              <div className="text-xs font-mono uppercase tracking-widest text-neutral-400">
                The Creative Progression
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3">
                {IDEATION_PROCESS.steps.map((stepName, sIdx) => {
                  const isActive = activeIdeationStep === sIdx;
                  return (
                    <button
                      key={stepName}
                      onClick={() => setActiveIdeationStep(sIdx)}
                      className={`p-3.5 rounded-xl border text-left transition-all flex flex-col justify-between h-24 ${
                        isActive
                          ? 'bg-amber-300 text-black border-amber-300 font-semibold shadow-lg'
                          : 'bg-white/[0.02] border-white/[0.06] text-neutral-300 hover:text-white hover:bg-white/[0.04]'
                      }`}
                    >
                      <span className={`text-[11px] font-mono ${isActive ? 'text-black/70' : 'text-neutral-500'}`}>
                        0{sIdx + 1}
                      </span>
                      <div className="flex items-center justify-between text-xs font-mono uppercase tracking-wider">
                        <span>{stepName}</span>
                        {sIdx < IDEATION_PROCESS.steps.length - 1 && (
                          <ArrowRight className={`w-3 h-3 hidden lg:inline ${isActive ? 'text-black' : 'text-neutral-600'}`} />
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* The 4 Principles of Ideation */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 border-t border-white/[0.08]">
              {IDEATION_PROCESS.principles.map((pr) => (
                <div key={pr.title} className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] space-y-2">
                  <h5 className="text-xs font-semibold text-amber-200 font-mono uppercase tracking-wide">
                    {pr.title}
                  </h5>
                  <p className="text-xs text-neutral-400 font-sans leading-relaxed">
                    {pr.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 3. THE ENGINEER I ASPIRE TO BECOME & WHAT KEEPS ME GOING */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Aspirations */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono tracking-widest text-amber-400 uppercase">
                Aspirational Horizon
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal">
                There&apos;s a lot more I want to understand.
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 font-sans leading-relaxed">
                &ldquo;I want to become an engineer who understands how things work behind the scenes, someone who can tackle complex challenges and eventually manage teams effectively.&rdquo;
              </p>
            </div>

            <div className="space-y-3 pt-2">
              {ASPIRATIONS.map((asp, idx) => (
                <div
                  key={asp.title}
                  className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.12] transition-colors space-y-1.5"
                >
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-amber-300 font-semibold uppercase tracking-wider">
                      0{idx + 1}. {asp.title}
                    </span>
                    <span className="text-neutral-500">{asp.tagline}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-300 font-sans leading-relaxed">
                    {asp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* What Keeps Me Going */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono tracking-widest text-amber-400 uppercase">
                Inner Drive & Values
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal">
                Always remember why you started.
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 font-sans leading-relaxed">
                &ldquo;{WHAT_KEEPS_ME_GOING.reflection}&rdquo;
              </p>
            </div>

            {/* Visual Process: Goal → Purpose → Challenges → Reflection → Progress */}
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
              <div className="text-[11px] font-mono uppercase tracking-widest text-neutral-400 mb-2">
                Personal Progression Loop
              </div>
              <div className="flex items-center justify-between gap-1 text-[11px] font-mono text-amber-200">
                {WHAT_KEEPS_ME_GOING.timeline.map((stage, idx) => (
                  <React.Fragment key={stage}>
                    <span className="font-semibold">{stage}</span>
                    {idx < WHAT_KEEPS_ME_GOING.timeline.length - 1 && (
                      <span className="text-neutral-600">→</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Personal Values Matrix */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {WHAT_KEEPS_ME_GOING.values.map((val) => (
                <div key={val.name} className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                  <div className="text-xs font-mono font-medium text-white mb-0.5">
                    {val.name}
                  </div>
                  <div className="text-[11px] text-neutral-400 leading-snug">
                    {val.note}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 4. PERSONAL QUOTES GALLERY */}
        <div className="pt-6">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-amber-400">
              <Quote className="w-3.5 h-3.5" />
              <span>Personal Expressions</span>
            </div>
            <h3 className="font-serif text-3xl sm:text-4xl text-white font-normal">
              Words That Shape My Outlook
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 font-sans">
              Expressions that describe how I see curiosity, problem-solving, and the creative spirit of building technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PERSONAL_QUOTES.map((q) => (
              <div
                key={q.id}
                className="p-7 sm:p-9 rounded-2xl bg-white/[0.02] border border-white/[0.07] hover:border-amber-400/30 transition-all flex flex-col justify-between space-y-4"
              >
                <blockquote className="font-serif italic text-xl sm:text-2xl text-neutral-100 font-normal leading-snug">
                  &ldquo;{q.quote}&rdquo;
                </blockquote>
                <div className="pt-4 border-t border-white/[0.06] text-xs font-mono text-neutral-400 flex items-center justify-between">
                  <span>{q.context}</span>
                  {q.isProposed && (
                    <span className="text-[10px] text-neutral-500 uppercase tracking-wider">Editorial Reflection</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
