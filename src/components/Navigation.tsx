import React, { useState } from 'react';
import { Menu, X, FileText } from 'lucide-react';

interface NavigationProps {
  onOpenResume: () => void;
  activeSection: string;
}

export const Navigation: React.FC<NavigationProps> = ({ onOpenResume, activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Origin', href: '#origin', id: 'origin' },
    { label: 'Philosophy', href: '#thinking', id: 'thinking' },
    { label: 'Journey', href: '#journey', id: 'journey' },
    { label: 'Works', href: '#works', id: 'works' },
    { label: 'Milestones', href: '#milestones', id: 'milestones' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#070709]/85 border-b border-white/[0.07] transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8 px-6 py-4 lg:px-12">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#"
          className="text-base sm:text-lg font-serif font-medium tracking-tight text-[#fcfbfa] hover:text-amber-200 transition-colors whitespace-nowrap shrink-0"
        >
          Elikatti Nithya Goud
        </a>

        {/* Zone 2: 5 single-line clean text navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-mono tracking-widest uppercase">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.href)}
                className={`transition-colors whitespace-nowrap shrink-0 relative py-1 ${
                  isActive
                    ? 'text-amber-300 font-semibold'
                    : 'text-neutral-400 hover:text-neutral-100'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-amber-400" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenResume}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono font-medium tracking-wider text-black bg-amber-300 hover:bg-amber-200 rounded-md transition-colors whitespace-nowrap shrink-0 shadow-sm"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </button>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-neutral-300 hover:text-white rounded-md bg-neutral-900 border border-neutral-800"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-neutral-800 bg-[#09090d] px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link.href)}
              className="block w-full text-left py-2 text-sm font-mono tracking-wider text-neutral-300 hover:text-amber-300"
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};
