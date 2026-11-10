import React, { useEffect } from 'react';
import { X, ExternalLink, ZoomIn } from 'lucide-react';

export interface LightboxData {
  imageUrl: string;
  title: string;
  subtitle?: string;
  category?: string;
  externalLink?: string;
}

interface ImageLightboxProps {
  data: LightboxData | null;
  onClose: () => void;
}

export const ImageLightbox: React.FC<ImageLightboxProps> = ({ data, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (data) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [data, onClose]);

  if (!data) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={data.title}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative max-w-6xl w-full max-h-[95vh] flex flex-col rounded-2xl bg-[#0c0c11] border border-white/[0.14] shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/[0.08] bg-[#111117] text-white">
          <div className="flex items-center gap-3 min-w-0 pr-4">
            {data.category && (
              <span className="text-[11px] font-mono tracking-widest text-amber-300 uppercase px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/20 shrink-0">
                {data.category}
              </span>
            )}
            <div className="min-w-0">
              <h3 className="text-sm font-medium text-white truncate font-sans">
                {data.title}
              </h3>
              {data.subtitle && (
                <p className="text-xs text-neutral-400 font-mono truncate">
                  {data.subtitle}
                </p>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {data.externalLink && (
              <a
                href={data.externalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-neutral-300 hover:text-white bg-white/5 hover:bg-white/10 rounded transition-colors"
              >
                <span>Live Link</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            <button
              onClick={onClose}
              className="p-1.5 text-neutral-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Close image viewer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Image Display Container */}
        <div className="relative flex-1 min-h-[300px] max-h-[82vh] overflow-auto flex items-center justify-center p-3 sm:p-6 bg-[#07070a]">
          <img
            src={data.imageUrl}
            alt={data.title}
            className="max-w-full max-h-[76vh] object-contain rounded-lg border border-white/[0.06] shadow-2xl"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Footer Note */}
        <div className="px-5 py-2.5 border-t border-white/[0.06] bg-[#0c0c11] flex items-center justify-between text-xs font-mono text-neutral-500">
          <span className="flex items-center gap-1.5">
            <ZoomIn className="w-3.5 h-3.5 text-amber-400" />
            High-Resolution Authentic Evidence
          </span>
          <span>Press ESC or click outside to dismiss</span>
        </div>
      </div>
    </div>
  );
};
