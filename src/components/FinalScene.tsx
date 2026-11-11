import React, { useState } from 'react';
import { ArrowUpRight, Check, Copy, FileText, Github, Linkedin, Mail } from 'lucide-react';
import { ChapterHeader } from './ChapterHeader';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FinalSceneProps {
  onOpenResume: () => void;
}

export const FinalScene: React.FC<FinalSceneProps> = ({ onOpenResume }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  return (
    <footer id="credits" className="py-24 sm:py-32 relative bg-[#040406] border-t border-white/[0.08] text-center overflow-hidden">
      {/* Background ambient subtle flare */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(217,174,107,0.06),transparent_70%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 lg:px-12 relative z-10 space-y-14">
        <ChapterHeader
          number="08"
          title="Let's Connect"
          subtitle="Open to conversations, technical explorations, and software engineering opportunities."
          category="Contact"
        />

        {/* Closing Headline Lockup */}
        <div className="space-y-6 max-w-3xl mx-auto">
          <div className="w-12 h-[1px] bg-amber-400/60 mx-auto" />
          <h3 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-white font-normal tracking-tight leading-tight">
            Have an idea?
            <br />
            <span className="italic text-amber-200">Let&apos;s explore it.</span>
          </h3>

          <p className="text-base sm:text-xl text-neutral-300 font-sans max-w-xl mx-auto leading-relaxed">
            I&apos;m always interested in learning, exploring new possibilities and connecting with people who enjoy building things.
          </p>

          <p className="font-serif italic text-base sm:text-lg text-amber-300/90 max-w-lg mx-auto">
            &ldquo;There&apos;s always something new to discover. See you around!&rdquo;
          </p>
        </div>

        {/* Primary Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="inline-flex items-center gap-2.5 px-6 py-3 text-xs sm:text-sm font-mono uppercase tracking-wider font-semibold text-black bg-amber-300 hover:bg-amber-200 rounded-md transition-all shadow-lg shadow-amber-500/20"
          >
            <Mail className="w-4 h-4 text-black" />
            <span>Let&apos;s Connect</span>
          </a>

          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3 text-xs sm:text-sm font-mono uppercase tracking-wider text-neutral-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-md transition-colors"
          >
            <Github className="w-4 h-4 text-amber-300" />
            <span>View GitHub</span>
          </a>

          <button
            onClick={onOpenResume}
            className="inline-flex items-center gap-2.5 px-6 py-3 text-xs sm:text-sm font-mono uppercase tracking-wider text-neutral-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-md transition-colors"
          >
            <FileText className="w-4 h-4 text-amber-300" />
            <span>Download Resume</span>
          </button>

          <button
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-2 px-4 py-3 text-xs font-mono text-neutral-400 hover:text-neutral-200 bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.06] rounded-md transition-colors"
            title="Copy email address to clipboard"
          >
            {copiedEmail ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-300 font-medium">Email Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>{PERSONAL_INFO.email}</span>
              </>
            )}
          </button>
        </div>

        {/* Channels Strip */}
        <div className="pt-6 flex flex-wrap items-center justify-center gap-8 text-xs font-mono uppercase tracking-widest text-neutral-400">
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-amber-300 transition-colors"
          >
            <Linkedin className="w-3.5 h-3.5" />
            <span>LinkedIn</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>

          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-amber-300 transition-colors"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>

          <a
            href={PERSONAL_INFO.portfolioUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-amber-300 transition-colors"
          >
            <span>GitHub Pages Mirror</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>

        {/* Clean Professional Footer Bar */}
        <div className="pt-12 border-t border-white/[0.06] text-xs font-mono text-neutral-400">
          <p>© 2026 Elikatti Nithya Goud. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
