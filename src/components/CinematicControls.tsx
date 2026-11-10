import React, { useEffect, useState } from 'react';
import { Volume2, VolumeX, RotateCcw, ArrowUp } from 'lucide-react';
import { soundEngine } from '../utils/audio';

interface CinematicControlsProps {
  onReplayIntro: () => void;
}

export const CinematicControls: React.FC<CinematicControlsProps> = ({ onReplayIntro }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(soundEngine.getIsPlaying());
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  useEffect(() => {
    const unsub = soundEngine.subscribe((playing) => {
      setIsPlaying(playing);
    });

    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      unsub();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleToggleSound = () => {
    soundEngine.toggle();
  };

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <aside aria-label="Audio and navigation controls" className="fixed bottom-5 right-5 z-40 flex items-center gap-2">
      {/* Scroll to Top */}
      {showScrollTop && (
        <button
          onClick={handleScrollTop}
          className="p-2.5 rounded-full bg-[#121218]/90 hover:bg-[#1a1a24] text-neutral-300 hover:text-white border border-white/[0.08] backdrop-blur-md shadow-lg transition-all"
          title="Scroll to top"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      )}

      {/* Replay Intro */}
      <button
        onClick={onReplayIntro}
        className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-full bg-[#121218]/90 hover:bg-[#1a1a24] text-neutral-300 hover:text-white border border-white/[0.08] backdrop-blur-md shadow-lg text-xs font-mono transition-all"
        title="Replay opening intro"
      >
        <RotateCcw className="w-3 h-3 text-amber-400" />
        <span>Replay Intro</span>
      </button>

      {/* Ambient Audio Toggle with Animated Waveform */}
      <button
        onClick={handleToggleSound}
        className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-full border backdrop-blur-md shadow-lg text-xs font-mono transition-all ${
          isPlaying
            ? 'bg-amber-400/10 border-amber-400/40 text-amber-200'
            : 'bg-[#121218]/90 hover:bg-[#1a1a24] border-white/[0.08] text-neutral-400 hover:text-neutral-200'
        }`}
        title={isPlaying ? 'Mute ambient audio' : 'Play ambient audio'}
      >
        {isPlaying ? (
          <>
            <div className="flex items-end gap-0.5 h-3">
              <span className="w-0.5 h-3 bg-amber-400 animate-pulse" />
              <span className="w-0.5 h-2 bg-amber-300 animate-pulse delay-75" />
              <span className="w-0.5 h-3.5 bg-amber-400 animate-pulse delay-150" />
            </div>
            <span>Audio On</span>
          </>
        ) : (
          <>
            <VolumeX className="w-3.5 h-3.5 text-neutral-500" />
            <span>Sound Off</span>
          </>
        )}
      </button>
    </aside>
  );
};
