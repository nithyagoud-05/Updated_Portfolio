import React from 'react';

interface ChapterHeaderProps {
  number: string;
  title: string;
  subtitle?: string;
  category?: string;
}

export const ChapterHeader: React.FC<ChapterHeaderProps> = ({
  number,
  title,
  subtitle,
  category = 'Section',
}) => {
  return (
    <div className="mb-12 sm:mb-16">
      <div className="flex items-center gap-3 text-xs font-mono tracking-[0.3em] uppercase text-neutral-400 mb-3">
        <span className="text-amber-400 font-semibold">{category} {number}</span>
        <span className="text-neutral-600">/</span>
        <span className="text-neutral-400">Engineering Portfolio</span>
      </div>

      <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#fcfbfa] leading-tight">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-3 text-sm sm:text-base text-neutral-400 max-w-2xl font-sans leading-relaxed">
          {subtitle}
        </p>
      )}

      <div className="mt-6 w-full h-[1px] bg-white/[0.08]" />
    </div>
  );
};
