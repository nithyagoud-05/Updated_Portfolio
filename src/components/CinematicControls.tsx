import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

interface CinematicControlsProps {}

export const CinematicControls: React.FC<CinematicControlsProps> = () => {
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

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

  if (!showScrollTop) return null;

  return (
    <aside aria-label="Navigation controls" className="fixed bottom-6 right-6 z-40">
      <button
        onClick={handleScrollTop}
        className="p-3 rounded-full bg-[#121218]/90 hover:bg-[#1f1f2c] text-neutral-300 hover:text-white border border-white/10 backdrop-blur-md shadow-xl transition-all"
        title="Scroll to top"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-4 h-4 text-amber-300" />
      </button>
    </aside>
  );
};
