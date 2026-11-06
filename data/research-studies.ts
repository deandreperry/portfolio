// A participant study can be published when its actual sessions, evidence,
// decisions and disclosure permissions are documented.
export type CompletedParticipantStudy = {
  kind: 'Survey' | 'Moderated usability study' | 'Survey and usability study';
  context: string;
  responsibilities: string;
  researchQuestion: string;
  recruitmentAndSample: string;
  protocol: string;
  analysis: string;
  observations: string[];
  findingsAndDecisions: string[];
  outcomesAndLimitations: string;
  reflectionAndNextSteps: string;
};

export const downtownAudit = [
  [
    'The question',
    'Where could the website make it difficult for someone using assistive technology to navigate, understand content, or use a control? DowntownSF Partnership needed to decide which barriers to address while working toward its accessibility compliance objectives.',
  ],
  [
    'My role',
    'As UX Designer & Researcher, I evaluated the website, documented the issues, and prioritized recommendations. I presented the findings to the nonprofit’s stakeholders and discussed what its designers and web developers could do next.',
  ],
  [
    'How I evaluated the site',
    'I used WAVE scans to flag potential issues for inspection. I also navigated by keyboard and listened to Apple VoiceOver on macOS to examine how the website exposed content and controls. I reviewed accessibility against WCAG 2.1 and 2.2 and used usability heuristics to assess interactions that could still be difficult to understand or complete.',
  ],
  [
    'What the evaluation established',
    'The audit documented eight findings against a WCAG 2.2 Level AA target. The highest priorities concerned how people find the menu and search, where focus goes when a panel closes, and what information an image communicates.',
  ],
  [
    'What needed participant research',
    'The heuristic review also identified potential usability problems. A reviewer can describe what a control does and what VoiceOver announces. Whether a visitor understands that feedback, hesitates, or needs help is a separate question for a participant session.',
  ],
  [
    'How findings shaped recommendations',
    'I presented a three-month remediation roadmap to stakeholders. It put navigation and focus first, followed by visual and content fixes, then testing and staff training. The timing below reflects the proposed sequence.',
  ],
  [
    'What the partnership received',
    'The engagement delivered a documented evaluation, prioritized implementation guidance, and a stakeholder presentation. The donated professional services were valued at $4,212. The impact of remediation on visitors remains open for follow-up evaluation.',
  ],
  [
    'Reflection and next steps',
    'Listening to the site with VoiceOver helped me explain why a technical issue could matter during an interaction. After changes are implemented, I would repeat the keyboard and VoiceOver checks, then ask people who use assistive technology to try the affected tasks. Their observations would help distinguish resolved barriers from questions that need further design work.',
  ],
] as const;

export const auditFindings = [
  [
    'Navigation and search',
    'The primary menu and search form lacked landmarks. The search input also lacked an explicit label.',
    'Identify both regions and label the search field so someone navigating by screen reader can find search and hear what to enter.',
  ],
  [
    'Focus in collapsed panels',
    'Closing a panel could leave its hidden content reachable by keyboard or screen reader.',
    'Hide closed panels from both the tab order and screen-reader navigation. Recheck the path as the menu opens and closes.',
  ],
  [
    'Contrast and image descriptions',
    'The teal accent used for text on white had insufficient contrast. Some informative images lacked alternative text.',
    'Darken the text color, verify the contrast on white, and describe the information each image contributes.',
  ],
  [
    'Headings and document links',
    'Some headings jumped from level one to level three. PDF links gave little indication that they opened documents.',
    'Restore the heading hierarchy and identify PDF destinations before someone opens them.',
  ],
] as const;

export const auditRoadmap = [
  [
    'Month 1 · Navigation and structure',
    'Repair landmarks, contain focus in closed menus, label form inputs, and correct heading levels on the homepage and Visit pages.',
  ],
  [
    'Month 2 · Visual design and content',
    'Adjust teal text contrast, review image descriptions, clarify ambiguous links, and identify document and email destinations.',
  ],
  [
    'Month 3 · Validation and maintenance',
    'Retest with VoiceOver on macOS and NVDA on Windows, train content editors on accessible PDFs, and prepare an accessibility statement. The roadmap also recommends quarterly scans as content changes.',
  ],
] as const;
