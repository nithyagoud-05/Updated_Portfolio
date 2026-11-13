import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Sparkles, Volume2, VolumeX, ChevronRight } from 'lucide-react';
import { PERSONAL_INFO, PORTRAIT_IMAGE } from '../data/portfolioData';
import { soundEngine } from '../utils/audio';

interface OpeningSequenceProps {
  onComplete: () => void;
  onExploreWork: () => void;
}

const TOTAL_BEATS = 4;

export const OpeningSequence: React.FC<OpeningSequenceProps> = ({
  onComplete,
  onExploreWork,
}) => {
  const [currentBeat, setCurrentBeat] = useState<number>(1);
  const [isAudioPlaying, setIsAudioPlaying] = useState<boolean>(() =>
    soundEngine.getIsPlaying()
  );

  useEffect(() => {
    const unsubscribe = soundEngine.subscribe((playing) => {
      setIsAudioPlaying(playing);
    });
    return unsubscribe;
  }, []);

  // Auto-advance smoothly through opening beats 1 -> 2 -> 3 -> 4
  useEffect(() => {
    if (currentBeat === 1) {
      const t = setTimeout(() => setCurrentBeat(2), 2500);
      return () => clearTimeout(t);
    }
    if (currentBeat === 2) {
      const t = setTimeout(() => setCurrentBeat(3), 3200);
      return () => clearTimeout(t);
    }
    if (currentBeat === 3) {
      const t = setTimeout(() => setCurrentBeat(4), 3200);
      return () => clearTimeout(t);
    }
  }, [currentBeat]);

  const handleToggleAudio = () => {
    soundEngine.toggle();
  };

  const handleNext = useCallback(() => {
    if (currentBeat < TOTAL_BEATS) {
      setCurrentBeat((prev) => prev + 1);
    } else {
      onComplete();
    }
  }, [currentBeat, onComplete]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onComplete();
      } else if (e.key === 'ArrowRight') {
        setCurrentBeat((prev) => Math.min(TOTAL_BEATS, prev + 1));
      } else if (e.key === 'ArrowLeft') {
        setCurrentBeat((prev) => Math.max(1, prev - 1));
      } else if (e.key === 'Enter' && currentBeat === TOTAL_BEATS) {
        onComplete();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentBeat, onComplete]);

  return (
    <div
      className="fixed inset-0 z-50 bg-[#050507] text-[#e8e8ed] flex flex-col justify-between overflow-hidden select-none"
      role="dialog"
      aria-label="Portfolio Introduction"
    >
      {/* Subtle 35mm film grain and radial atmospheric lighting */}
      <div className="film-grain" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,rgba(226,179,107,0.09),transparent_68%)] pointer-events-none" />
      <div className="absolute inset-0 cinematic-vignette pointer-events-none" />

      {/* Minimal Top Bar — Clean without Scene 1/2/3/4 headings */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-10 pt-6 sm:pt-8 flex items-center justify-between">
        <div className="text-xs font-mono tracking-[0.22em] uppercase text-neutral-400">
          Explore My Journey
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleToggleAudio}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] hover:bg-white/[0.09] border border-white/[0.08] text-xs font-mono text-neutral-300 hover:text-white transition-colors"
            aria-label={isAudioPlaying ? 'Mute ambient audio' : 'Play ambient audio'}
            title={isAudioPlaying ? 'Mute ambient audio' : 'Play ambient audio'}
          >
            {isAudioPlaying ? (
              <>
                <Volume2 className="w-3.5 h-3.5 text-amber-300" />
                <span className="hidden sm:inline">Sound On</span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5 text-neutral-400" />
                <span className="hidden sm:inline">Sound Off</span>
              </>
            )}
          </button>

          <button
            onClick={onComplete}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] hover:bg-white/[0.1] border border-white/[0.1] text-xs font-mono uppercase tracking-wider text-neutral-200 hover:text-white transition-all"
          >
            <span>Skip</span>
            <ChevronRight className="w-3.5 h-3.5 text-amber-300" />
          </button>
        </div>
      </div>

      {/* Center Stage Content */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-6 sm:px-10 py-8">
        <AnimatePresence mode="wait">
          {currentBeat === 1 && (
            <motion.div
              key="beat-1"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              onClick={handleNext}
              className="max-w-3xl mx-auto text-center space-y-6 cursor-pointer"
            >
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="w-16 h-[1px] bg-amber-400/70 mx-auto"
              />
              <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-white leading-tight">
                {PERSONAL_INFO.name}
              </h1>
              <p className="text-sm sm:text-lg font-mono tracking-widest uppercase text-amber-200/90">
                Curious by nature. Ambitious by choice.
              </p>
            </motion.div>
          )}

          {currentBeat === 2 && (
            <motion.div
              key="beat-2"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              onClick={handleNext}
              className="max-w-4xl mx-auto text-center space-y-6 cursor-pointer"
            >
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.22em] text-amber-400/90">
                <Sparkles className="w-3.5 h-3.5" />
                <span>A Thought That Guides Me</span>
              </div>
              <blockquote className="font-serif italic text-3xl sm:text-5xl lg:text-6xl font-normal text-neutral-100 leading-snug">
                &ldquo;Why stop at what&apos;s possible?
                <br />
                <span className="text-amber-300">Because imagination is free, right?</span>&rdquo;
              </blockquote>
              <p className="text-sm sm:text-base text-neutral-400 font-sans max-w-xl mx-auto leading-relaxed">
                Imagining possibilities beyond what already exists and turning them into something real.
              </p>
            </motion.div>
          )}

          {currentBeat === 3 && (
            <motion.div
              key="beat-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              onClick={handleNext}
              className="max-w-4xl w-full mx-auto text-center space-y-8 cursor-pointer"
            >
              <div className="space-y-3">
                <h2 className="font-serif text-3xl sm:text-5xl text-white font-normal">
                  Building along the way.
                </h2>
                <p className="text-sm sm:text-base text-neutral-400 font-sans max-w-2xl mx-auto">
                  {PERSONAL_INFO.heroSupporting}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
                <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
                  <div className="text-xs font-mono uppercase tracking-widest text-amber-300 mb-1.5">
                    Full-Stack Works
                  </div>
                  <div className="font-serif text-xl text-white mb-1">
                    Annapurna &amp; RecallGraph
                  </div>
                  <p className="text-xs text-neutral-400 font-sans leading-relaxed">
                    Solving real problems in food safety intelligence and supply-chain traceability.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
                  <div className="text-xs font-mono uppercase tracking-widest text-amber-300 mb-1.5">
                    Problem Solving
                  </div>
                  <div className="font-serif text-xl text-white mb-1">
                    800+ DSA Problems
                  </div>
                  <p className="text-xs text-neutral-400 font-sans leading-relaxed">
                    Understanding logic deeply and figuring out the unfamiliar step by step.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
                  <div className="text-xs font-mono uppercase tracking-widest text-amber-300 mb-1.5">
                    Milestones
                  </div>
                  <div className="font-serif text-xl text-white mb-1">
                    NASA &amp; Reliance Scholar
                  </div>
                  <p className="text-xs text-neutral-400 font-sans leading-relaxed">
                    GNITS Hyderabad CSE · CGPA 9.51 · Global &amp; national recognitions.
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {currentBeat === 4 && (
            <motion.div
              key="beat-4"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-4xl w-full mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center"
            >
              {/* Portrait Reveal */}
              <div className="md:col-span-5 flex justify-center">
                <div className="relative w-52 sm:w-64 aspect-[3/4] rounded-2xl overflow-hidden border border-amber-400/30 shadow-2xl bg-[#0c0c10]">
                  <img
                    src={PORTRAIT_IMAGE}
                    alt="Elikatti Nithya Goud"
                    className="w-full h-full object-cover object-top"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-left">
                    <div className="text-[11px] font-mono uppercase tracking-widest text-amber-300">
                      GNITS Hyderabad
                    </div>
                    <div className="text-xs font-sans text-neutral-200">
                      B.Tech CSE · Class of 2028
                    </div>
                  </div>
                </div>
              </div>

              {/* Welcome & Entry CTA */}
              <div className="md:col-span-7 text-center md:text-left space-y-5">
                <div className="text-xs font-mono uppercase tracking-[0.22em] text-amber-400">
                  Welcome
                </div>
                <h2 className="font-serif text-3xl sm:text-5xl text-white font-normal leading-tight">
                  I&apos;m <span className="italic text-amber-200">Nithya.</span>
                </h2>
                <p className="text-sm sm:text-base text-neutral-300 font-sans leading-relaxed">
                  {PERSONAL_INFO.heroIntro}
                </p>

                <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-3">
                  <button
                    onClick={onComplete}
                    className="inline-flex items-center gap-2.5 px-6 py-3 rounded-md bg-amber-300 hover:bg-amber-200 text-black text-xs sm:text-sm font-mono uppercase tracking-wider font-semibold transition-all shadow-lg shadow-amber-500/20"
                  >
                    <span>Enter Portfolio</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={onExploreWork}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.12] text-neutral-200 hover:text-white text-xs sm:text-sm font-mono uppercase tracking-wider transition-all"
                  >
                    <span>Explore My Work</span>
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom Interactive Progress Dots (No scene numbers or clutter) */}
      <div className="relative z-20 w-full max-w-xl mx-auto px-6 pb-8 sm:pb-10 flex flex-col items-center gap-3">
        <div className="flex items-center gap-2.5 w-full max-w-xs">
          {[1, 2, 3, 4].map((beat) => {
            const isActive = beat === currentBeat;
            const isCompleted = beat < currentBeat;
            return (
              <button
                key={beat}
                onClick={() => setCurrentBeat(beat)}
                aria-label={`Go to introduction step ${beat}`}
                className="flex-1 py-2 group focus:outline-none"
              >
                <div className="h-[2px] w-full rounded-full bg-white/15 overflow-hidden">
                  <div
                    className={`h-full transition-all duration-500 ${
                      isActive
                        ? 'w-full bg-amber-300'
                        : isCompleted
                        ? 'w-full bg-amber-400/60'
                        : 'w-0 bg-transparent group-hover:w-1/2 group-hover:bg-white/30'
                    }`}
                  />
                </div>
              </button>
            );
          })}
        </div>
        {currentBeat < TOTAL_BEATS && (
          <button
            onClick={handleNext}
            className="text-[11px] font-mono tracking-widest uppercase text-neutral-500 hover:text-amber-300 transition-colors"
          >
            Click anywhere to continue
          </button>
        )}
      </div>
    </div>
  );
};
