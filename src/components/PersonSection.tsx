import React from 'react';
import { ArrowUpRight, GraduationCap, MapPin, Sparkles, ZoomIn } from 'lucide-react';
import { ChapterHeader } from './ChapterHeader';
import { PERSONAL_INFO, PORTRAIT_IMAGE } from '../data/portfolioData';
import { LightboxData } from './ImageLightbox';

interface PersonSectionProps {
  onOpenResume: () => void;
  onOpenLightbox?: (data: LightboxData) => void;
}

export const PersonSection: React.FC<PersonSectionProps> = ({ onOpenResume, onOpenLightbox }) => {
  const handlePortraitClick = () => {
    if (onOpenLightbox) {
      onOpenLightbox({
        imageUrl: PORTRAIT_IMAGE,
        title: 'Elikatti Nithya Goud',
        subtitle: 'B.Tech Computer Science & Engineering · GNITS Hyderabad (Class of 2028)',
        category: 'Official Portrait',
      });
    }
  };

  return (
    <section id="origin" className="py-20 sm:py-28 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <ChapterHeader
          number="01"
          title="The Person Behind the Code"
          subtitle="Engineering is not merely writing syntax; it is cultivating the judgment to solve what truly matters."
          category="About"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Visual Column: Directed Portrait Composition with Film Light */}
          <div className="lg:col-span-5 relative">
            <div className="sticky top-28">
              <div
                onClick={handlePortraitClick}
                className="relative group overflow-hidden rounded-2xl border border-white/[0.12] bg-[#0c0c10] shadow-2xl cursor-pointer"
                title="Click to view full portrait"
              >
                <div className="aspect-[3/4] relative overflow-hidden bg-neutral-950">
                  <img
                    src={PORTRAIT_IMAGE}
                    alt="Elikatti Nithya Goud"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                    referrerPolicy="no-referrer"
                    loading="eager"
                  />
                  {/* Subtle cinema scrim at bottom for text legibility without obscuring face */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent pointer-events-none" />

                  {/* Click to enlarge indicator */}
                  <div className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm border border-white/20">
                    <ZoomIn className="w-4 h-4" />
                  </div>
                  
                  {/* Lower frame metadata caption */}
                  <div className="absolute bottom-5 left-5 right-5 pointer-events-none">
                    <p className="text-xs font-mono text-amber-300 tracking-widest uppercase mb-1">
                      Nithya Goud
                    </p>
                    <p className="text-sm font-sans text-neutral-200 font-medium">
                      GNITS Hyderabad · Class of 2028
                    </p>
                    <div className="mt-2 flex items-center gap-3 text-xs text-neutral-400 font-mono">
                      <span>B.Tech CSE</span>
                      <span aria-hidden="true">·</span>
                      <span className="text-amber-200">CGPA 9.51</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick credentials & CTAs card */}
              <div className="mt-4 p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-between">
                <div className="flex items-center gap-3 text-xs text-neutral-300">
                  <MapPin className="w-4 h-4 text-amber-400" />
                  <span>Hyderabad, India</span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={onOpenResume}
                    className="inline-flex items-center gap-1 text-xs font-mono text-amber-300 hover:text-amber-200 transition-colors"
                  >
                    <span>Get Resume</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Editorial Column: Authentic narrative & personal voice */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-mono tracking-widest text-amber-400 uppercase">
                About Me
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-neutral-100 font-normal leading-tight">
                Curious by nature. Ambitious by choice.
                <br />
                <span className="italic text-amber-200">Building along the way.</span>
              </h3>
              <p className="text-sm font-mono text-neutral-400">
                Exploring ideas, understanding how things work and turning possibilities into something real.
              </p>
            </div>

            <div className="prose prose-invert text-neutral-300 space-y-4 text-sm sm:text-base leading-relaxed font-sans">
              <p className="text-base text-neutral-200 font-medium leading-relaxed">
                I&apos;m <strong className="text-white font-semibold">Nithya</strong>, a Computer Science student at GNITS Hyderabad who loves exploring new things, solving problems and challenging myself. I enjoy figuring out the unfamiliar, learning along the way and reaching goals that once seemed difficult.
              </p>

              <p>
                What excites me the most is building something from scratch and seeing people use it. I also love solving problems that initially feel impossible. For me, software engineering is not just about writing code—it&apos;s about understanding how things work behind the scenes and turning possibilities into something real.
              </p>
            </div>

            {/* My Interests */}
            <div className="space-y-3 pt-1">
              <div className="text-xs font-mono uppercase tracking-widest text-amber-400 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>My Interests</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  'Full-stack development',
                  'Data Structures and Algorithms',
                  'Ideation and brainstorming',
                  'Understanding how technology works behind the scenes',
                  'Exploring new possibilities and creating solutions',
                ].map((interest) => (
                  <div
                    key={interest}
                    className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06] text-xs font-sans text-neutral-300 flex items-center gap-2.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                    <span>{interest}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* A thought that describes me — Distinctive Visual Signature Quote */}
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-amber-500/[0.07] via-amber-500/[0.02] to-transparent border border-amber-500/25 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/5 rounded-full blur-2xl pointer-events-none" />
              <div className="text-xs font-mono uppercase tracking-widest text-amber-400 mb-2">
                A Thought That Describes Me
              </div>
              <blockquote className="font-serif italic text-2xl sm:text-3xl text-amber-100 font-normal leading-snug">
                &ldquo;Why stop at what&apos;s possible?
                <br />
                <span className="text-amber-200">Because imagination is free, right?</span>&rdquo;
              </blockquote>
              <p className="mt-3 text-xs sm:text-sm text-neutral-300 font-sans leading-relaxed">
                I enjoy imagining possibilities beyond what already exists. Brainstorming with people, combining different perspectives, and exploring what current solutions might be missing are some of the things I genuinely enjoy.
              </p>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#works"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-mono uppercase tracking-wider font-semibold text-black bg-amber-300 hover:bg-amber-200 rounded-md transition-all shadow-sm"
              >
                <span>Explore My Work</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-mono uppercase tracking-wider text-neutral-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-md transition-colors"
              >
                <span>Get My Resume</span>
              </button>
              <a
                href="#credits"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-mono uppercase tracking-wider text-neutral-300 hover:text-white bg-white/[0.02] hover:bg-white/5 border border-white/[0.06] rounded-md transition-colors"
              >
                <span>Let&apos;s Connect</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
