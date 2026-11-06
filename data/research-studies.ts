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
    'The manual and technical reviews identified accessibility barriers in the website. I documented the issues and considered their relevance to people who rely on assistive technology. A WAVE flag was a starting point for inspection. The behavior I could verify in the interface was the basis for an accessibility finding.',
  ],
  [
    'What needed participant research',
    'The heuristic review also identified potential usability problems. A reviewer can describe what a control does and what VoiceOver announces. Whether a visitor understands that feedback, hesitates, or needs help is a separate question for a participant session.',
  ],
  [
    'How findings shaped recommendations',
    'I prioritized the findings and presented WCAG-aligned recommendations to stakeholders. For each discussion, the practical question was what a designer or developer could change and how that change would address the barrier. This gave the partnership a way to consider visitor needs alongside its compliance objectives.',
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
