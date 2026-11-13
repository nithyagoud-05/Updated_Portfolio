import { Project, Milestone, AcademicMetric, SkillCategory, QuoteItem, AspirationItem } from '../types';

// Authentic User Assets
export const PORTRAIT_IMAGE = '/assets/aistudio/Professional_a7145260.jpeg';
export const NASA_CERTIFICATE = '/assets/aistudio/Nasa_125b7bdc.jpeg';
export const NASA_TEAM_PORTAL = '/assets/aistudio/Nasa_2a5c8b0f.png';
export const BPP_AWARD_IMAGE = '/assets/aistudio/BPP_f9c8245f.jpeg';
export const RELIANCE_AWARD_LETTER = '/assets/aistudio/Reliance_acceptance_9b7e45f1.jpeg';
export const SPARK_CHAMBER_CERTIFICATE = '/assets/aistudio/spark-chamber_8974e525.jpeg';
export const SERVICENOW_SLIDE = '/assets/aistudio/image_00c9b052.png';
export const MCKINSEY_ACCEPTANCE = '/assets/aistudio/mc_c_db2be7c5.jpeg';
export const GOOGLE_AI_CERTIFICATE = '/assets/aistudio/Google_AI_Essentials_cfe52cc3.jpeg';
export const RESUME_PDF_URL = '/assets/aistudio/Nithya_Updated__2__579e0de8.pdf';

export const ANNAPURNA_SCREENSHOTS = [
  {
    url: '/assets/aistudio/AP2_250a4cef.png',
    tag: 'Restaurant Discovery',
    caption: 'Safe dining discovery grid with real-time aggregate hygiene scores and cuisine filters.',
  },
  {
    url: '/assets/aistudio/AP3_e30fb5c2.png',
    tag: 'Safety Intelligence & Allergens',
    caption: 'Detailed safety breakdown (BaseScore, ReviewSignal, IncidentPenalty) and allergen warnings.',
  },
  {
    url: '/assets/aistudio/AP1_86e53278.png',
    tag: 'Incident Reporting',
    caption: 'Citizen-led food hygiene incident submission workflow with photographic evidence validation.',
  },
];

export const RECALLGRAPH_SCREENSHOTS = [
  {
    url: '/assets/aistudio/Recall_graph_6e855587.png',
    tag: 'Lineage Trace Explorer',
    caption: 'PostgreSQL-backed multi-tier provenance graph tracking Material Lots across batches and shipments.',
  },
  {
    url: '/assets/aistudio/Recall_graph2_7c66a4c4.png',
    tag: 'Recall Simulation & Scope',
    caption: 'Read-only impact simulation calculating affected lots, available inventory, and precision containment.',
  },
];

export const PERSONAL_INFO = {
  name: 'Elikatti Nithya Goud',
  displayName: 'Nithya',
  role: 'Computer Science and Engineering Student | Aspiring Software Engineer',
  institution: 'G. Narayanamma Institute of Technology and Science for Women, Hyderabad',
  graduation: '2028',
  cgpa: '9.51 / 10',
  location: 'Hyderabad, India',
  email: 'nithyagoudelikatti@gmail.com',
  github: 'https://github.com/nithyagoud-05',
  linkedin: 'https://www.linkedin.com/in/elikatti-nithya-goud/',
  codolio: 'nithyagoud_28',
  
  heroHeadline: 'Curious by nature. Ambitious by choice. Building along the way.',
  heroIntro: "I'm Nithya, a Computer Science student who loves exploring new things, solving problems and challenging myself. I enjoy figuring out the unfamiliar, learning along the way and reaching goals that once seemed difficult.",
  heroSupporting: 'Exploring ideas, understanding how things work and turning possibilities into something real.',
  
  aboutMe: "I'm Nithya, a Computer Science student at GNITS Hyderabad who loves exploring new things, solving problems and challenging myself. I enjoy figuring out the unfamiliar, learning along the way and reaching goals that once seemed difficult. What excites me the most is building something from scratch and seeing people use it. For me, software engineering is not just about writing code—it's about understanding how things work behind the scenes and turning possibilities into something real.",
  signatureQuote: "Why stop at what's possible? Because imagination is free, right?",
};

export const PERSONAL_INTERESTS = [
  'Full-stack development',
  'Data Structures and Algorithms',
  'Ideation and brainstorming',
  'Understanding how technology works behind the scenes',
  'Exploring new possibilities and creating solutions',
];

export const PROBLEM_SOLVING_PHILOSOPHY = {
  title: 'Before finding the solution, understand the problem.',
  analysisQuote: "When something goes wrong, I might become a little nervous, wondering where the mistake is actually happening. But the first thing I do is analyse. I try to understand what's exactly happening, identify where the actual problem is hidden and then figure out how to move forward.",
  ownershipQuote: "When people in my team aren't able to figure something out, I take ownership and take the initiative to understand what's actually happening.",
  steps: [
    { number: '01', title: 'Analyse what\'s happening', detail: 'Step back from immediate panic or assumptions; examine the actual state, error boundaries, and unexpected output.' },
    { number: '02', title: 'Identify where the actual problem lies', detail: 'Isolate the symptom from the origin; discover where the breakdown is really taking place.' },
    { number: '03', title: 'Understand the root cause', detail: 'Dig deep into why the failure occurred, whether it is logical, data-driven, or architectural.' },
    { number: '04', title: 'Take ownership and explore solutions', detail: 'Step up for the team, take the initiative, evaluate trade-offs, and design practical remedies.' },
    { number: '05', title: 'Move forward with a clearer understanding', detail: 'Implement the fix, verify the result, and retain the lesson for future challenges.' },
  ],
};

export const IDEATION_PROCESS = {
  title: 'Ideation — Where Imagination Begins',
  quote: "I love brainstorming with people and combining different perspectives. I like understanding what's missing in the present solutions and what gaps are preventing them from solving the actual problem.",
  steps: ['Observe', 'Question', 'Brainstorm', 'Identify the Gap', 'Imagine', 'Build'],
  principles: [
    { title: 'Starting points, not final answers', detail: 'Existing solutions are benchmarks to learn from, not boundaries you can never surpass.' },
    { title: 'Perspectives reveal blind spots', detail: 'Different viewpoints uncover critical nuances and constraints that one person might miss.' },
    { title: 'Understanding beats feature bloat', detail: 'Understanding the actual human problem matters far more than simply adding flashy features.' },
    { title: 'Imagination sparks creation', detail: "Imagination is an indispensable part of software engineering — why stop at what's possible? Because imagination is free, right?" },
  ],
};

export const ASPIRATIONS: AspirationItem[] = [
  {
    title: 'Understand Deeply',
    tagline: 'Beyond using APIs',
    description: "I want to understand what's happening behind the scenes, not just know how to use a technology.",
  },
  {
    title: 'Solve Complex Challenges',
    tagline: 'Embracing the difficult',
    description: 'I want to become capable of tackling problems that initially seem difficult or intimidating.',
  },
  {
    title: 'Lead Effectively',
    tagline: 'Bringing people together',
    description: 'I aspire to become someone who can manage a team well, bring people together and work towards a common goal.',
  },
];

export const WHAT_KEEPS_ME_GOING = {
  title: 'Always remember why you started.',
  reflection: "Before starting any task, whether it's short-term or long-term, I make goals for myself. I think about why I'm doing it and what I want to achieve. Even when I get stuck, I go back to the reason I started. I ask myself, why did I even start this? What's the motto behind it? That reminds me of what I'm working towards and motivates me to move forward.",
  timeline: ['Goal', 'Purpose', 'Challenges', 'Reflection', 'Progress'],
  values: [
    { name: 'Discipline', note: 'Showing up consistently, especially when motivation fluctuates.' },
    { name: 'Moral Values', note: 'Integrity, authenticity, and empathy in engineering and teamwork.' },
    { name: 'High Aspirations', note: 'Aiming high and daring to tackle problems that initially seem impossible.' },
    { name: 'Goal-Oriented Thinking', note: 'Clarity on the objective, milestones, and the purpose behind every task.' },
    { name: 'Always Aiming for the Best', note: 'Continuous refinement and refusing to settle for lukewarm efforts.' },
  ],
};

export const PERSONAL_QUOTES: QuoteItem[] = [
  {
    id: 'quote-1',
    quote: 'Nothing is interesting if you are not interested.',
    context: 'My reflection on curiosity, engagement, and finding meaning in unfamiliar subjects.',
  },
  {
    id: 'quote-2',
    quote: "Why stop at what's possible? Because imagination is free, right?",
    context: 'My signature outlook on ideation, dreaming up bold concepts, and exploring possibilities beyond what already exists.',
  },
  {
    id: 'quote-3',
    quote: 'I just imagine: why did I even start this? What\'s the motto behind it?',
    context: 'What I ask myself when I get stuck, to remember the reason I started and regain clarity.',
  },
];

export const ACADEMIC_METRICS: AcademicMetric[] = [
  {
    label: 'Engineering CGPA',
    value: '9.51 / 10',
    context: 'B.Tech in Computer Science and Engineering at GNITS Hyderabad (2024–2028).',
    category: 'GPA',
  },
  {
    label: 'DSA Problems Solved',
    value: '800+',
    context: 'Data structures and algorithms challenges across competitive platforms (Codolio: nithyagoud_28).',
    category: 'DSA Practice',
  },
  {
    label: 'TS EAMCET State Rank',
    value: 'Rank 977',
    context: 'Top-tier state rank in Telangana State Engineering & Agriculture Entrance Examination.',
    category: 'State Entrance',
  },
  {
    label: 'JEE Main Examination',
    value: '97.0 %ile',
    context: 'Competitive national entrance exam taken by 1.2M+ students across India.',
    category: 'National Exam',
  },
  {
    label: 'NTSE Stage 1',
    value: 'Rank 11 (179/200)',
    context: 'National Talent Search Examination state-level ranking in analytical & logical reasoning.',
    category: 'Talent Search',
  },
  {
    label: 'JEE Advanced Score',
    value: '102 / 360',
    context: 'National entrance for premier engineering institutes across India.',
    category: 'National Exam',
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'annapurna',
    title: 'Annapurna',
    subtitle: 'Food Safety Intelligence Platform',
    tagline: 'Empowering consumers with transparent hygiene analytics, counterfeit-review filtering, and allergen risks.',
    image: ANNAPURNA_SCREENSHOTS[0].url,
    screenshots: ANNAPURNA_SCREENSHOTS,
    status: 'Project Demo',
    liveUrl: 'https://annapurna-frontend-tau.vercel.app/',
    githubUrl: 'https://github.com/nithyagoud-05/food-safety-app',
    technologies: ['React', 'Vite', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    problem:
      'People often struggle to judge whether a food outlet is trustworthy. Inspection records are hard to find, while public review platforms are frequently inundated with paid endorsements and fraudulent feedback.',
    solution:
      'Annapurna evaluates food outlet safety using transparent hygiene information, weighted safety scores, fake-review detection considerations, and proactive allergen warnings.',
    features: [
      'Food outlet safety assessment',
      'Hygiene history and inspection tracking',
      'Weighted safety scoring algorithm',
      'Comprehensive allergen risk warnings',
      'Fake-review and sentiment anomaly identification',
    ],
    architecture: [
      'Client Layer: React SPA built with Vite and Tailwind CSS for instant restaurant lookup and interactive radar cards.',
      'API & Security: Express middleware composition with JWT token validation for community inspectors and reviewers.',
      'Persistence: MongoDB document storage holding venue metadata, inspection archives, and allergen profiles.',
      'Audit Engine: Weighted algorithm balancing regulatory violations with review credibility scores.',
    ],
    keyDecisions: [
      'Separated inspection score calculations from raw review ratings to prevent fraudulent positive reviews from inflating hygiene scores.',
      'Engineered normalized allergen schema supporting 14 standard dietary markers for low-latency client filtering.',
      'Designed responsive inspection radar cards allowing quick glances on mobile devices right before visiting restaurants.',
    ],
    engineeringHighlights: [
      'Full-stack architecture with RESTful endpoints and schema validation.',
      'Secure stateless authentication using JSON Web Tokens (JWT).',
      'Optimized MongoDB indexing on venue geolocation and compliance records.',
    ],
    role: 'Full-Stack Developer',
    timeline: '2024 · Deployed Project',
  },
  {
    id: 'recallgraph',
    title: 'RecallGraph',
    subtitle: 'Supply-Chain Traceability & Product Recall System',
    tagline: 'High-integrity lineage tracing connecting lots, batches, warehouses, and shipments with instant quarantine workflows.',
    image: RECALLGRAPH_SCREENSHOTS[0].url,
    screenshots: RECALLGRAPH_SCREENSHOTS,
    status: 'Project Demo',
    liveUrl: 'https://recall-graph-tau.vercel.app/',
    githubUrl: 'https://github.com/nithyagoud-05',
    technologies: ['React', 'Node.js', 'Express', 'PostgreSQL', 'SQL Relational Modeling'],
    problem:
      'When defective or contaminated products are detected, supply chains struggle to isolate affected batches quickly across disparate warehouses, leading to widespread risk.',
    solution:
      'A product recall traceability application that models the chain of custody across lots, batches, warehouses and shipments with automated quarantine workflows.',
    features: [
      'Product lineage and traceability mapping',
      'ACID database transactions with row-level locking',
      'Quarantine state propagation workflows',
      'Tamper-evident audit trails',
      'Supply-chain inventory reconciliation and precision impact scope',
    ],
    architecture: [
      'Relational Core: PostgreSQL schema structured with strict foreign keys and multi-tier batch-to-lot parent-child hierarchies.',
      'Concurrency Control: Implemented explicit SQL row-level locking (SELECT ... FOR UPDATE) during recall initiation to prevent race conditions during inventory movements.',
      'Audit Trail Engine: Write-ahead transaction logging ensuring every status change and quarantine override is recorded.',
      'Lineage API: Recursive SQL Common Table Expressions (CTEs) executing sub-millisecond trace trees across multi-tier distributions.',
    ],
    keyDecisions: [
      'Opted for PostgreSQL relational integrity over graph stores to ensure ACID compliance during inventory reconciliations.',
      'Utilized optimistic locking combined with transactional quarantine locks to prevent shipping lots currently under investigation.',
      'Built a deterministic audit ledger that retains the exact state of goods at every warehouse hand-off.',
    ],
    engineeringHighlights: [
      'Engineered transactional row-locking mechanisms to prevent race conditions during rapid recalls.',
      'Implemented recursive SQL CTEs querying deep supply graph trees in single atomic operations.',
      'Comprehensive quarantine workflow engine with granular permission checks.',
    ],
    role: 'Backend & Systems Engineer',
    timeline: '2024 · Deployed Project',
  },
];

export const MILESTONES: Milestone[] = [
  {
    id: 'reliance-scholar',
    year: '2024 – 2028',
    title: 'Reliance Foundation Undergraduate Scholar',
    organization: 'Reliance Foundation',
    category: 'Scholarship & Academic',
    description: 'Selected for the prestigious Reliance Foundation Undergraduate Scholarship awarded to top engineering students across India (₹2,00,000 scholarship award).',
    highlightText: 'Prestigious Nationwide Scholarship',
    badge: 'National Scholar',
    certificateImage: RELIANCE_AWARD_LETTER,
    evidenceLabel: 'Official Reliance Foundation Award Notification Letter (₹2,00,000 Award)',
  },
  {
    id: 'nasa-spaceapps',
    year: '2025',
    title: 'NASA Space Apps Challenge — National Finalist',
    organization: 'National Aeronautics and Space Administration (NASA)',
    category: 'Global & National',
    description: 'Selected for the national-level stage with Team IDEATION ICONS for Project MIRIS (SpaceTrash Hack on Mars). Conferred Galactic Problem Solver recognition.',
    highlightText: 'Galactic Problem Solver · National Finalist',
    badge: 'NASA Finalist',
    certificateImage: NASA_CERTIFICATE,
    evidenceImage: NASA_TEAM_PORTAL,
    evidenceLabel: 'Official Galactic Problem Solver Certificate & Ideation Icons Team Portal',
  },
  {
    id: 'bpp-london',
    year: '2025',
    title: 'First Prize — International Essay Competition',
    organization: 'BPP University London & GNITS',
    category: 'Global & National',
    description: 'Awarded First Prize worldwide and a cash award of ₹1,00,000 for rigorous analytical exposition addressing technological impact.',
    highlightText: 'Global 1st Prize · ₹1,00,000 Award',
    badge: 'International 1st Prize',
    certificateImage: BPP_AWARD_IMAGE,
    evidenceLabel: 'Official ₹1,00,000 Winner Felicitation Ceremony Certificate',
  },
  {
    id: 'servicenow-coinnovation',
    year: '2026',
    title: 'Top 3rd Place — ServiceNow Co-Innovation Day GNITS',
    organization: 'ServiceNow & GNITS',
    category: 'Industry Leadership',
    description: 'Top 3rd place in Track 03: Tell It Once among 17 competing teams with Team SERVICE, NOW OR NEVER, architecting an integrated student support prototype.',
    highlightText: 'Top 3rd Place (Track 03 · 17 Teams)',
    badge: 'Top 3rd Place',
    evidenceImage: SERVICENOW_SLIDE,
    evidenceLabel: 'Official ServiceNow Co-Innovation Day Demo — Team SERVICE, NOW OR NEVER',
  },
  {
    id: 'spark-chamber',
    year: '2025',
    title: 'Spark Chamber — First Prize',
    organization: 'NEXORA\'25 National Level Technical Fest (GNITS)',
    category: 'Industry Leadership',
    description: 'Awarded 1st position in Spark Chamber at NEXORA\'25 National Level Technical Fest for creative problem-solving and ideation.',
    highlightText: 'First Prize Winner',
    badge: '1st Prize',
    certificateImage: SPARK_CHAMBER_CERTIFICATE,
    evidenceLabel: 'Official 1st Position Certificate of Merit — Spark Chamber at NEXORA\'25',
  },
  {
    id: 'mckinsey-forward',
    year: '2025',
    title: 'McKinsey.org Forward — Core Skills Level',
    organization: 'McKinsey & Company',
    category: 'Industry Leadership',
    description: 'Accepted participant, completing Core Skills Level in structured problem-solving, digital business, and communication.',
    highlightText: 'Core Skills Level Accepted',
    badge: 'McKinsey Fellow',
    evidenceImage: MCKINSEY_ACCEPTANCE,
    evidenceLabel: 'Official McKinsey.org Forward Program Acceptance Notification',
  },
  {
    id: 'google-ai-essentials',
    year: '2025',
    title: 'Google AI Essentials',
    organization: 'Google & Coursera',
    category: 'Scholarship & Academic',
    description: 'Certified in foundational artificial intelligence concepts, responsible AI practices, and generative AI problem solving authorized by Google.',
    highlightText: 'Google Certified · Issued Feb 2025',
    badge: 'Google Certified',
    certificateImage: GOOGLE_AI_CERTIFICATE,
    evidenceLabel: 'Official Google AI Essentials Certificate (Coursera ID: R9XNXTVXX5H6)',
  },
];

export const EXPERIENCE_AND_INVOLVEMENT = [
  {
    role: 'Vice President',
    organization: 'Google Developer Groups (GDG) On Campus — GNITS',
    period: 'August – October 2026',
    highlights: [
      'Part of the GDG On Campus leadership team at GNITS.',
      'Involved in organizing hands-on coding sessions and technical workshops.',
      'Collaborated with peers to create an encouraging learning environment.',
    ],
  },
  {
    role: 'Trainee',
    organization: 'Cisco CWiCS BOOST 6.0',
    period: '2024',
    highlights: [
      'Completed mandatory programme courses covering networking and systems.',
      'Completed the hands-on Capture The Flag (CTF) security activity.',
      'Maintained 100% attendance throughout the rigorous 45-day programme.',
    ],
  },
  {
    role: 'Launch Participant',
    organization: 'PwC Women\'s Leadership Development Program (WLDP) 2026',
    period: '2026',
    highlights: [
      'Selected for selective cohort training focusing on strategic leadership and innovation.',
    ],
  },
  {
    role: 'Student Leader & Campus Roles',
    organization: 'GNITS & Student Initiatives',
    period: 'Ongoing',
    highlights: [
      'Student Placement Coordinator helping coordinate technical drives.',
      'VedaVerse Campus Ambassador representing student initiatives.',
      'Nirman Club Communication Head managing community outreach.',
      'Former Head Girl with experience leading a student community of 1,200+.',
    ],
  },
];

export const LEADERSHIP_EXPERIENCE = EXPERIENCE_AND_INVOLVEMENT;

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Programming Languages',
    description: 'Core languages for algorithmic logic, competitive coding, and scripting.',
    skills: [
      { name: 'C++', focus: 'Data structures, algorithmic problem solving, STL, memory awareness (800+ solved)', appliedIn: 'DSA & Competitive Practice' },
      { name: 'Python', focus: 'Data processing, scripting, algorithmic modeling', appliedIn: 'Prototyping & Automation' },
      { name: 'JavaScript', focus: 'Modern web development, asynchronous runtime, promises', appliedIn: 'Full-Stack Applications' },
    ],
  },
  {
    title: 'Frontend Development',
    description: 'Responsive, user-centric interfaces built with modern component frameworks.',
    skills: [
      { name: 'React', focus: 'Components, hooks, state management, client routing', appliedIn: 'Annapurna & RecallGraph' },
      { name: 'Tailwind CSS', focus: 'Utility-first styling, responsive layouts, design tokens', appliedIn: 'Production Interfaces' },
      { name: 'Vite', focus: 'Fast build tooling, bundle optimization, development server', appliedIn: 'Modern Web Apps' },
      { name: 'HTML5 & CSS3', focus: 'Semantic markup, accessibility, clean responsive design', appliedIn: 'All Web Projects' },
    ],
  },
  {
    title: 'Backend & Databases',
    description: 'Server composition, API architecture, data integrity, and persistent stores.',
    skills: [
      { name: 'Node.js & Express.js', focus: 'RESTful API architecture, middleware composition, routing', appliedIn: 'Full-Stack Backends' },
      { name: 'REST APIs & JWT', focus: 'Stateless authentication, token verification, role-based access', appliedIn: 'Annapurna Architecture' },
      { name: 'PostgreSQL', focus: 'Relational data modeling, transactions, row locking, recursive CTEs', appliedIn: 'RecallGraph Traceability' },
      { name: 'MongoDB', focus: 'Document stores, schema validation, collection indexing', appliedIn: 'Annapurna Database' },
    ],
  },
  {
    title: 'Core Computer Science',
    description: 'Fundamental principles that guide sound software engineering.',
    skills: [
      { name: 'Data Structures & Algorithms', focus: 'Graphs, trees, dynamic programming, sorting, asymptotic bounds', appliedIn: '800+ Problems Solved' },
      { name: 'Object-Oriented Programming', focus: 'Encapsulation, inheritance, polymorphism, modular design', appliedIn: 'Application Architecture' },
      { name: 'Database Management Systems', focus: 'ACID transactions, concurrency control, normalization, indexing', appliedIn: 'Database Systems' },
      { name: 'Operating Systems', focus: 'Processes, threads, memory management, scheduling', appliedIn: 'Core Fundamentals' },
      { name: 'Computer Networks', focus: 'OSI model, TCP/IP, client-server protocols, routing', appliedIn: 'Network Principles' },
    ],
  },
  {
    title: 'Tools & Environments',
    description: 'Development environments and version control tools used daily.',
    skills: [
      { name: 'Git & GitHub', focus: 'Version control, commit hygiene, branches, pull requests', appliedIn: 'Code Collaboration' },
      { name: 'VS Code', focus: 'Integrated debugging, workspace management, extensions', appliedIn: 'Primary Development IDE' },
    ],
  },
];

export const CODING_JOURNEY = {
  headline: '800+ Algorithmic Problems Solved',
  narrative: 'Solving problems has become an important part of my computer science journey. I enjoy understanding the logic behind a problem, exploring different approaches and learning from the process.',
  profileName: 'nithyagoud_28',
  platform: 'Codolio',
  profileUrl: 'https://github.com/nithyagoud-05',
};

export const BEYOND_CODE_THEMES = [
  { title: 'Brainstorming with people', description: 'Bringing together different perspectives to discover what is missing and what truly needs solving.' },
  { title: 'Exploring new ideas', description: 'Following curiosity into unfamiliar domains and turning exciting possibilities into working solutions.' },
  { title: 'Learning unfamiliar things', description: 'Enjoying the process of figuring out the unknown, rather than fearing what isn\'t understood yet.' },
  { title: 'Challenging myself', description: 'Taking on goals that initially seemed difficult and persisting until they are achieved.' },
  { title: 'Collaborating with different perspectives', description: 'Valuing diverse voices to identify blind spots that a single person might overlook.' },
  { title: 'Setting goals and working towards them', description: 'Making conscious goals, remembering the purpose behind them, and staying disciplined.' },
];
