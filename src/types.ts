export interface ProjectScreenshot {
  url: string;
  caption: string;
  tag: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  image: string;
  screenshots: ProjectScreenshot[];
  liveUrl?: string;
  githubUrl?: string;
  technologies: string[];
  problem: string;
  solution: string;
  features?: string[];
  architecture?: string[];
  keyDecisions?: string[];
  engineeringHighlights?: string[];
  role: string;
  timeline: string;
  status: 'Project Demo' | 'Deployed Project' | 'Prototype' | 'Production System';
}

export interface QuoteItem {
  id: string;
  quote: string;
  context: string;
  isProposed?: boolean;
}

export interface AspirationItem {
  title: string;
  tagline: string;
  description: string;
}

export interface Milestone {
  id: string;
  year: string;
  title: string;
  organization: string;
  category: 'Global & National' | 'Scholarship & Academic' | 'Industry Leadership';
  description: string;
  highlightText: string;
  badge?: string;
  certificateImage?: string;
  evidenceImage?: string;
  evidenceLabel?: string;
}

export interface AcademicMetric {
  label: string;
  value: string;
  context: string;
  category: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    focus: string;
    appliedIn: string;
  }[];
}
