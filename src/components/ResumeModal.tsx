import React from 'react';
import { Download, Printer, X, Mail, MapPin, Linkedin, Github, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, MILESTONES, SKILL_CATEGORIES } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadMarkdownResume = () => {
    const markdownContent = `# ELIKATTI NITHYA GOUD
Hyderabad, India | ${PERSONAL_INFO.email}
LinkedIn: ${PERSONAL_INFO.linkedin} | GitHub: ${PERSONAL_INFO.github}

---

## EDUCATION
**G. Narayanamma Institute of Technology and Science for Women (GNITS)**, Hyderabad, India
*Bachelor of Technology in Computer Science and Engineering* (2024 – 2028)
- Current Cumulative GPA: **9.51 / 10.0**
- Reliance Foundation Undergraduate Scholar (2024 – 2028)
- TS EAMCET: State Rank 977 | NTSE Stage 1: State Rank 11 | JEE Main: 97th Percentile | JEE Adv: 102/360

---

## TECHNICAL SKILLS
- **Languages**: C++, Python, JavaScript, SQL, HTML5, CSS3
- **Frameworks & Runtimes**: React, Vite, Node.js, Express, Tailwind CSS
- **Databases**: PostgreSQL (ACID, Row Locking, Recursive CTEs), MongoDB
- **Core Competencies**: Data Structures & Algorithms (800+ Solved), Object-Oriented Programming, DBMS, Operating Systems, Computer Networks

---

## KEY ENGINEERING PROJECTS
**Annapurna — Food Safety Intelligence Platform**
*React, Vite, Node.js, Express, MongoDB, JWT* | Live: https://annapurna-frontend-tau.vercel.app/
- Engineered full-stack intelligence platform evaluating outlet hygiene scores and counterfeit reviews.
- Designed stateless JWT authentication and normalized 14-parameter dietary allergen schema.
- Integrated automated sentiment anomaly filters to prevent sponsored review tampering.

**RecallGraph — Supply-Chain Traceability & Product Recall System**
*React, Node.js, Express, PostgreSQL* | Live: https://recall-graph-tau.vercel.app/
- Architected immutable directed acyclic graph for real-time inventory lineage and custody tracking.
- Engineered explicit PostgreSQL row-level locks (SELECT FOR UPDATE) preventing race conditions during batch recalls.
- Built recursive SQL Common Table Expressions (CTEs) traversing multi-tier warehouse trees in sub-milliseconds.

---

## HONORS & RECOGNITION
- **Reliance Foundation Undergraduate Scholar (2024–2028)**: Highly selective national merit fellowship.
- **NASA Space Apps Challenge 2025**: National Finalist with Project MIRIS (Earth Observation data modeling).
- **BPP University London International Essay Competition**: 1st Prize Winner worldwide.
- **Cisco CWiCS BOOST 6.0 Trainee**: Enterprise networking and distributed cloud systems training.
- **PwC Women's Leadership Development Program 2026**: Selective technology governance cohort.
- **ServiceNow Co-Innovation Day 2026**: Top 3rd place in Track 03: Tell It Once among 17 competing teams.
- **Spark Chamber at NEXORA'25**: 1st Position in collegiate technical innovation challenge.
- **McKinsey.org Forward Program Fellow**: Digital transformation and structured problem solving.

---

## LEADERSHIP & COMMUNITY
**Vice President — Google Developer Groups (GDG) On Campus, GNITS** (August – October 2026)
- Part of the GDG On Campus leadership team at GNITS.
- Involved in organizing hands-on coding sessions and technical workshops for student developers.
`;

    const blob = new Blob([markdownContent], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Elikatti_Nithya_Goud_Resume.md';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-2xl bg-[#0c0c11] border border-white/[0.14] shadow-2xl overflow-hidden my-auto">
        {/* Top Action Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.08] bg-[#101016] text-white">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono tracking-widest text-amber-300 uppercase">
              Curriculum Vitae
            </span>
            <span className="text-neutral-500">·</span>
            <span className="text-xs font-mono text-neutral-400">Elikatti Nithya Goud</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono bg-white/10 hover:bg-white/15 text-neutral-200 hover:text-white rounded transition-colors"
              title="Print standard resume"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print / Save PDF</span>
            </button>

            <button
              onClick={handleDownloadMarkdownResume}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-semibold bg-amber-300 hover:bg-amber-200 text-black rounded transition-colors"
              title="Download text resume"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download .MD</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-neutral-400 hover:text-white rounded hover:bg-white/10 transition-colors ml-1"
              aria-label="Close resume viewer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Resume Sheet */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-[#0a0a0e] text-[#ededf2] font-sans selection:bg-amber-500/20">
          {/* Header */}
          <div className="border-b border-white/[0.08] pb-6 space-y-2">
            <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal">
              ELIKATTI NITHYA GOUD
            </h2>
            <p className="text-sm font-mono text-amber-200">
              Computer Science Undergraduate · Software Engineer in the Making
            </p>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-1 text-xs font-mono text-neutral-400 pt-1">
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-amber-400" />
                Hyderabad, India
              </span>
              <span>·</span>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-amber-300 flex items-center gap-1">
                <Mail className="w-3 h-3 text-amber-400" />
                {PERSONAL_INFO.email}
              </a>
              <span>·</span>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-amber-300 flex items-center gap-1">
                <Linkedin className="w-3 h-3 text-amber-400" />
                LinkedIn
              </a>
              <span>·</span>
              <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="hover:text-amber-300 flex items-center gap-1">
                <Github className="w-3 h-3 text-amber-400" />
                GitHub
              </a>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono font-semibold tracking-widest text-amber-300 uppercase border-b border-white/[0.08] pb-1">
              Education & Academic Honors
            </h3>
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1 text-sm">
              <div>
                <strong className="text-white font-medium">G. Narayanamma Institute of Technology and Science for Women (GNITS)</strong>
                <p className="text-neutral-300 text-xs mt-0.5">Bachelor of Technology — Computer Science & Engineering</p>
              </div>
              <div className="text-right text-xs font-mono text-neutral-400">
                <span>Hyderabad, India · 2024 – 2028 (Expected)</span>
                <div className="text-amber-200 font-semibold">Current CGPA: 9.51 / 10.0</div>
              </div>
            </div>
            <ul className="text-xs text-neutral-300 space-y-1 pl-4 list-disc marker:text-amber-400">
              <li><strong>Reliance Foundation Undergraduate Scholar (2024–2028)</strong>: Awarded full merit fellowship.</li>
              <li><strong>TS EAMCET</strong>: State Rank 977 in Telangana engineering entrance.</li>
              <li><strong>JEE Main</strong>: 97th percentile nationally among 1.2M+ test-takers.</li>
              <li><strong>NTSE Stage 1</strong>: State Rank 11 in National Talent Search Examination.</li>
            </ul>
          </div>

          {/* Technical Skills */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono font-semibold tracking-widest text-amber-300 uppercase border-b border-white/[0.08] pb-1">
              Technical Arsenal
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                <span className="font-mono text-neutral-400 block mb-1">Programming</span>
                <span className="text-white font-medium">C++, Python, JavaScript, SQL</span>
              </div>
              <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                <span className="font-mono text-neutral-400 block mb-1">Full-Stack & Data</span>
                <span className="text-white font-medium">React, Vite, Node.js, Express, PostgreSQL, MongoDB, Tailwind CSS</span>
              </div>
              <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                <span className="font-mono text-neutral-400 block mb-1">Core Competencies</span>
                <span className="text-white font-medium">800+ DSA Solved, OOP, DBMS, Operating Systems, Computer Networks</span>
              </div>
            </div>
          </div>

          {/* Engineering Projects */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono font-semibold tracking-widest text-amber-300 uppercase border-b border-white/[0.08] pb-1">
              Engineered Systems & Projects
            </h3>
            {PROJECTS.map((proj) => (
              <div key={proj.id} className="space-y-1.5 text-xs">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div className="flex items-center gap-2">
                    <strong className="text-sm font-medium text-white">{proj.title}</strong>
                    <span className="text-neutral-500">—</span>
                    <span className="text-neutral-300">{proj.subtitle}</span>
                  </div>
                  {proj.liveUrl ? (
                    <a
                      href={proj.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-300 font-mono hover:underline flex items-center gap-1"
                    >
                      <span>View Live</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : proj.githubUrl ? (
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-300 font-mono hover:underline flex items-center gap-1"
                    >
                      <span>View Code</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : null}
                </div>
                <div className="text-[11px] font-mono text-neutral-400">
                  Technologies: {proj.technologies.join(', ')}
                </div>
                <ul className="pl-4 list-disc marker:text-amber-400 space-y-1 text-neutral-300">
                  <li>{proj.problem}</li>
                  <li>{proj.solution}</li>
                  {(proj.engineeringHighlights || []).map((hl, i) => (
                    <li key={i}>{hl}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Honors & Recognition */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono font-semibold tracking-widest text-amber-300 uppercase border-b border-white/[0.08] pb-1">
              Honors, Fellowships & Recognition
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {MILESTONES.map((m) => (
                <div key={m.id} className="p-2.5 rounded bg-white/[0.02] border border-white/[0.04]">
                  <div className="font-medium text-white">{m.title}</div>
                  <div className="text-[11px] font-mono text-amber-300/80">{m.organization} · {m.year}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Leadership */}
          <div className="space-y-2">
            <h3 className="text-xs font-mono font-semibold tracking-widest text-amber-300 uppercase border-b border-white/[0.08] pb-1">
              Leadership & Community
            </h3>
            <div className="text-xs">
              <strong className="text-white">Vice President — Google Developer Groups (GDG) On Campus, GNITS (August – October 2026)</strong>
              <p className="text-neutral-300 mt-1">
                Part of the GDG On Campus leadership team. Involved in organizing hands-on coding sessions and technical workshops for student developers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
