import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowDown, Code2, FileText, Volume2, VolumeX, FastForward } from 'lucide-react';
import { PORTRAIT_IMAGE } from '../data/portfolioData';
import { soundEngine } from '../utils/audio';

interface OpeningSequenceProps {
  onComplete: () => void;
  onOpenResume: () => void;
  onExploreWork: () => void;
}

export const OpeningSequence: React.FC<OpeningSequenceProps> = ({
  onComplete,
  onOpenResume,
  onExploreWork,
}) => {
  // Scene: 1, 2, 3, 4
  const [currentScene, setCurrentScene] = useState<number>(1);
  const [isAudioOn, setIsAudioOn] = useState<boolean>(soundEngine.getIsPlaying());

  useEffect(() => {
    const unsub = soundEngine.subscribe((playing) => {
      setIsAudioOn(playing);
    });
    return unsub;
  }, []);

  // Sequence timer automatically advances through scenes
  useEffect(() => {
    if (currentScene === 1) {
      const t = setTimeout(() => setCurrentScene(2), 2600);
      return () => clearTimeout(t);
    }
    if (currentScene === 2) {
      const t = setTimeout(() => setCurrentScene(3), 3200);
      return () => clearTimeout(t);
    }
    if (currentScene === 3) {
      const t = setTimeout(() => setCurrentScene(4), 3400);
      return () => clearTimeout(t);
    }
  }, [currentScene]);

  // Keyboard shortcut ESC to skip
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === ' ') {
        onComplete();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onComplete]);

  const handleAudioToggle = () => {
    soundEngine.toggle();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#050507] text-[#f2f2f7] overflow-hidden select-none">
      {/* Background cinematic radial lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(217,174,107,0.06),transparent_65%)] pointer-events-none" />

      {/* Top bar with Scene indicator, Sound toggle, and Skip action */}
      <div className="absolute top-0 inset-x-0 z-30 flex items-center justify-between px-6 py-6 sm:px-12">
        <div className="flex items-center gap-3 text-xs tracking-[0.25em] text-neutral-400 font-mono">
          <span className="text-amber-400 font-semibold">SCENE 0{currentScene}</span>
          <span>/</span>
          <span>04</span>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={handleAudioToggle}
            className="flex items-center gap-2 px-3 py-1.5 text-xs text-neutral-300 hover:text-white bg-neutral-900/80 hover:bg-neutral-800 border border-neutral-800 rounded-full transition-colors"
            title="Toggle cinematic ambient score"
          >
            {isAudioOn ? (
              <>
                <Volume2 className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
                <span className="hidden sm:inline">Score Playing</span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5 text-neutral-400" />
                <span className="hidden sm:inline">Enable Score</span>
              </>
            )}
          </button>

          <button
            onClick={onComplete}
            className="flex items-center gap-1.5 px-4 py-1.5 text-xs font-medium tracking-wider text-neutral-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all"
          >
            <span>Skip Intro</span>
            <FastForward className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Scene content container */}
      <div className="relative w-full max-w-5xl px-6 py-12 flex flex-col items-center justify-center min-h-[60vh] text-center">
        <AnimatePresence mode="wait">
          {/* SCENE 01: An Original Story */}
          {currentScene === 1 && (
            <motion.div
              key="scene-1"
              initial={{ opacity: 0, letterSpacing: '0.6em', y: 10 }}
              animate={{ opacity: 1, letterSpacing: '0.4em', y: 0 }}
              exit={{ opacity: 0, y: -10, transition: { duration: 0.8 } }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center gap-4"
            >
              <div className="w-8 h-[1px] bg-amber-400/60 mb-2" />
              <p className="text-xs sm:text-sm font-mono uppercase text-neutral-300 tracking-[0.45em]">
                An Original Story
              </p>
              <span className="text-[11px] font-mono tracking-widest text-neutral-500">
                PROLOGUE · HYDERABAD, 2026
              </span>
            </motion.div>
          )}

          {/* SCENE 02: Cinematic Chapter-like Title */}
          {currentScene === 2 && (
            <motion.div
              key="scene-2"
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.04, transition: { duration: 0.9 } }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center max-w-4xl"
            >
              <motion.span
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-xs sm:text-sm font-mono uppercase text-amber-300/80 tracking-[0.35em] mb-4"
              >
                Directed by Ambition · Built on Principle
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 1 }}
                className="font-serif text-3xl sm:text-5xl md:text-7xl lg:text-8xl tracking-tight text-[#fcfbfa] font-normal leading-[1.05]"
              >
                ELIKATTI NITHYA GOUD
              </motion.h1>
            </motion.div>
          )}

          {/* SCENE 03: The Core Statement */}
          {currentScene === 3 && (
            <motion.div
              key="scene-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15, transition: { duration: 0.8 } }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center max-w-4xl space-y-4"
            >
              <div className="w-12 h-[1px] bg-amber-400/60 mb-2" />
              <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl text-neutral-100 font-normal leading-snug">
                Curious by nature.
                <br />
                <span className="italic font-light text-amber-200/90">
                  Ambitious by choice. Building along the way.
                </span>
              </h2>
              <p className="text-xs sm:text-sm font-mono text-neutral-400 tracking-wider pt-2">
                Exploring ideas, understanding how things work and turning possibilities into something real.
              </p>
            </motion.div>
          )}

          {/* SCENE 04: Portrait Reveal & Direct Calls to Action */}
          {currentScene === 4 && (
            <motion.div
              key="scene-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="w-full grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center text-left max-w-4xl"
            >
              {/* Portrait container with subtle rim illumination */}
              <div className="md:col-span-5 flex justify-center">
                <div className="relative group max-w-[280px] sm:max-w-[320px]">
                  <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-amber-500/20 via-transparent to-amber-300/10 blur-xl opacity-75" />
                  <div className="relative rounded-2xl overflow-hidden border border-neutral-700/60 bg-neutral-900 shadow-2xl aspect-[3/4]">
                    <img
                      src={PORTRAIT_IMAGE}
                      alt="Elikatti Nithya Goud"
                      className="w-full h-full object-cover object-top transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-xs font-mono tracking-widest text-amber-300 uppercase">
                        Nithya Goud
                      </p>
                      <p className="text-[11px] text-neutral-300">
                        GNITS Hyderabad · CSE &apos;28
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Introducing statement & Action Buttons */}
              <div className="md:col-span-7 flex flex-col justify-center space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 text-[11px] font-mono tracking-widest text-amber-300 bg-amber-500/10 border border-amber-500/20 rounded mb-3">
                    B.TECH CSE · CGPA 9.51
                  </div>
                  <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-neutral-100 font-normal leading-tight">
                    I&apos;m Nithya.
                    <br />
                    <span className="italic text-amber-200 font-light text-xl sm:text-2xl lg:text-3xl">
                      Computer Science Student & Aspiring Software Engineer.
                    </span>
                  </h2>
                </div>

                <p className="text-sm text-neutral-300 leading-relaxed max-w-xl font-sans">
                  I love exploring new things, solving problems and challenging myself. I enjoy figuring out the unfamiliar, learning along the way and reaching goals that once seemed difficult.
                </p>

                {/* Clear CTAs */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    onClick={() => {
                      onComplete();
                      onExploreWork();
                    }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-wider uppercase text-black bg-amber-300 hover:bg-amber-200 rounded-md transition-all shadow-lg shadow-amber-500/20"
                  >
                    <span>Explore My Work</span>
                    <ArrowDown className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={onOpenResume}
                    className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold tracking-wider uppercase text-neutral-200 hover:text-white bg-white/10 hover:bg-white/15 border border-white/15 rounded-md transition-colors"
                  >
                    <FileText className="w-3.5 h-3.5 text-amber-400" />
                    <span>Get My Resume</span>
                  </button>

                  <button
                    onClick={() => {
                      onComplete();
                      const contactEl = document.getElementById('contact') || document.getElementById('credits');
                      if (contactEl) {
                        contactEl.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold tracking-wider uppercase text-neutral-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-md transition-colors"
                  >
                    <span>Let&apos;s Connect</span>
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Subtle bottom letterbox bar indicating scene progression */}
      <div className="absolute bottom-0 inset-x-0 h-1 bg-neutral-900">
        <motion.div
          className="h-full bg-gradient-to-r from-amber-500 to-amber-300"
          initial={{ width: '0%' }}
          animate={{
            width:
              currentScene === 1
                ? '25%'
                : currentScene === 2
                ? '50%'
                : currentScene === 3
                ? '75%'
                : '100%',
          }}
          transition={{ duration: 0.6 }}
        />
      </div>
    </div>
  );
};
