import React from 'react';
import { Terminal, Code, Cpu, Database, Wrench } from 'lucide-react';
import { ChapterHeader } from './ChapterHeader';
import { SKILL_CATEGORIES, CODING_JOURNEY } from '../data/portfolioData';

export const ToolkitSection: React.FC = () => {
  const getCategoryIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return Terminal;
      case 1:
        return Code;
      case 2:
        return Database;
      case 3:
        return Cpu;
      case 4:
      default:
        return Wrench;
    }
  };

  return (
    <section id="toolkit" className="py-20 sm:py-32 relative scroll-mt-20 bg-[#07070a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-16">
        <ChapterHeader
          number="06"
          title="The Engineering Toolkit"
          subtitle="Core technical capabilities honed through competitive problem solving, software engineering coursework, and production deployments."
          category="Capabilities"
        />

        {/* Coding Journey & Problem Solving Highlight */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#0b0b10] border border-white/[0.08] relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-amber-400">
                <Terminal className="w-3.5 h-3.5" />
                <span>Problem Solving Practice</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal">
                {CODING_JOURNEY.headline}
              </h3>
              <p className="text-sm sm:text-base text-neutral-300 font-sans leading-relaxed">
                &ldquo;{CODING_JOURNEY.narrative}&rdquo;
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-between">
                <div>
                  <div className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider">Platform</div>
                  <div className="text-sm font-mono font-medium text-white">{CODING_JOURNEY.platform}</div>
                </div>
                <div className="text-right">
                  <div className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider">Handle</div>
                  <div className="text-sm font-mono text-amber-300">{CODING_JOURNEY.profileName}</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-between">
                <div>
                  <div className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider">Primary Language</div>
                  <div className="text-sm font-mono font-medium text-white">C++ (STL & Algorithms)</div>
                </div>
                <div className="text-right">
                  <div className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider">Focus</div>
                  <div className="text-xs font-mono text-emerald-300">Graphs, Trees, DP</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Clean Categorized Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((category, catIdx) => {
            const IconComp = getCategoryIcon(catIdx);
            return (
              <div
                key={category.title}
                className="p-6 sm:p-7 rounded-2xl bg-[#09090e] border border-white/[0.07] hover:border-amber-400/30 transition-all flex flex-col justify-between space-y-6"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-2.5 text-xs font-mono uppercase tracking-wider text-amber-300">
                    <IconComp className="w-4 h-4 text-amber-400" />
                    <span>0{catIdx + 1}</span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl text-white font-normal">
                    {category.title}
                  </h3>

                  <p className="text-xs text-neutral-400 font-sans leading-relaxed">
                    {category.description}
                  </p>
                </div>

                <div className="space-y-2.5 pt-2 border-t border-white/[0.06]">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.04] space-y-1"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-medium text-neutral-100">
                          {skill.name}
                        </span>
                        <span className="text-[10px] font-mono text-neutral-500">
                          {skill.appliedIn}
                        </span>
                      </div>
                      <p className="text-[11px] text-neutral-400 font-sans leading-relaxed">
                        {skill.focus}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
