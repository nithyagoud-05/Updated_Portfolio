import React, { useEffect } from 'react';
import { Download, ExternalLink, FileText, X } from 'lucide-react';
import { RESUME_PDF_URL } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Resume PDF Viewer"
    >
      <div
        className="relative w-full max-w-5xl h-[90vh] flex flex-col rounded-2xl bg-[#0c0c11] border border-white/[0.14] shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Action Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-4 sm:px-6 py-3.5 border-b border-white/[0.08] bg-[#101016] text-white shrink-0">
          <div className="flex items-center gap-3">
            <FileText className="w-4 h-4 text-amber-300" />
            <span className="text-xs font-mono tracking-widest text-amber-300 uppercase">
              Resume
            </span>
            <span className="text-neutral-500 hidden sm:inline">·</span>
            <span className="text-xs font-mono text-neutral-300 hidden sm:inline">
              Elikatti Nithya Goud
            </span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={RESUME_PDF_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono bg-white/10 hover:bg-white/15 text-neutral-200 hover:text-white rounded transition-colors"
              title="Open PDF in new tab"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Open PDF</span>
            </a>

            <a
              href={RESUME_PDF_URL}
              download="Elikatti_Nithya_Goud_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono font-semibold bg-amber-300 hover:bg-amber-200 text-black rounded transition-colors"
              title="Download Resume PDF"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={onClose}
              className="p-1.5 text-neutral-400 hover:text-white rounded hover:bg-white/10 transition-colors ml-1"
              aria-label="Close resume viewer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Embedded PDF Viewer */}
        <div className="flex-1 bg-[#141419] p-2 sm:p-4 overflow-hidden flex flex-col">
          <object
            data={`${RESUME_PDF_URL}#view=FitH`}
            type="application/pdf"
            className="w-full h-full rounded-lg bg-white"
          >
            <iframe
              src={`${RESUME_PDF_URL}#view=FitH`}
              title="Elikatti Nithya Goud Resume PDF"
              className="w-full h-full rounded-lg bg-white border-0"
            >
              <div className="flex flex-col items-center justify-center h-full p-8 text-center bg-[#0c0c11] text-neutral-200 space-y-4">
                <FileText className="w-10 h-10 text-amber-300" />
                <p className="text-sm font-sans text-neutral-300 max-w-md">
                  Your browser cannot display the PDF inline. You can open or download the resume directly below.
                </p>
                <div className="flex items-center gap-3">
                  <a
                    href={RESUME_PDF_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono bg-white/10 hover:bg-white/15 text-white rounded-md"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Open PDF</span>
                  </a>
                  <a
                    href={RESUME_PDF_URL}
                    download="Elikatti_Nithya_Goud_Resume.pdf"
                    className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono font-semibold bg-amber-300 hover:bg-amber-200 text-black rounded-md"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download PDF</span>
                  </a>
                </div>
              </div>
            </iframe>
          </object>
        </div>
      </div>
    </div>
  );
};
