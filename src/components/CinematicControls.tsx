import React, { useEffect, useState } from 'react';
import { ArrowUp, RotateCcw, Volume2, VolumeX } from 'lucide-react';
import { soundEngine } from '../utils/audio';

interface CinematicControlsProps {
  onReplayIntro?: () => void;
}

export const CinematicControls: React.FC<CinematicControlsProps> = ({ onReplayIntro }) => {
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState<boolean>(() =>
    soundEngine.getIsPlaying()
  );

  useEffect(() => {
    const unsubscribe = soundEngine.subscribe((playing) => {
      setIsAudioPlaying(playing);
    });
    return unsubscribe;
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <aside
      aria-label="Navigation and audio controls"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2"
    >
      <button
        onClick={() => soundEngine.toggle()}
        className="p-3 rounded-full bg-[#121218]/90 hover:bg-[#1f1f2c] text-neutral-300 hover:text-white border border-white/10 backdrop-blur-md shadow-xl transition-all"
        title={isAudioPlaying ? 'Mute ambient audio' : 'Play ambient audio'}
        aria-label={isAudioPlaying ? 'Mute ambient audio' : 'Play ambient audio'}
      >
        {isAudioPlaying ? (
          <Volume2 className="w-4 h-4 text-amber-300" />
        ) : (
          <VolumeX className="w-4 h-4 text-neutral-400" />
        )}
      </button>

      {onReplayIntro && (
        <button
          onClick={onReplayIntro}
          className="px-3.5 py-2.5 rounded-full bg-[#121218]/90 hover:bg-[#1f1f2c] text-neutral-300 hover:text-white border border-white/10 backdrop-blur-md shadow-xl transition-all inline-flex items-center gap-1.5 text-xs font-mono"
          title="Replay opening sequence"
          aria-label="Replay opening sequence"
        >
          <RotateCcw className="w-3.5 h-3.5 text-amber-300" />
          <span className="hidden sm:inline">Replay Intro</span>
        </button>
      )}

      {showScrollTop && (
        <button
          onClick={handleScrollTop}
          className="p-3 rounded-full bg-[#121218]/90 hover:bg-[#1f1f2c] text-neutral-300 hover:text-white border border-white/10 backdrop-blur-md shadow-xl transition-all"
          title="Scroll to top"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-4 h-4 text-amber-300" />
        </button>
      )}
    </aside>
  );
};
