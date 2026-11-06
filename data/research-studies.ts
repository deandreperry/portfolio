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

export const auditFindings = [
  {
    area: 'Focus in collapsed panels',
    items: [
      {
        title: 'Content in a closed panel',
        severity: 'High',
        observation:
          'Hidden content could still receive keyboard focus or be read by a screen reader.',
        recommendation:
          'Keep focus out of closed menus. On closing a panel, place focus on a visible control and check that navigation skips the hidden contents.',
      },
    ],
  },
  {
    area: 'Navigation and search',
    items: [
      {
        title: 'Primary navigation',
        severity: 'High',
        observation:
          'The main menu lacked a navigation landmark, so landmark navigation could bypass it.',
        recommendation:
          'Mark the menu as a navigation region and check that VoiceOver lists it.',
      },
      {
        title: 'Search region',
        severity: 'High',
        observation:
          'The search form lacked a landmark that would let someone jump directly to it.',
        recommendation:
          'Identify the form as a search region and check that it appears in landmark navigation.',
      },
      {
        title: 'Search field',
        severity: 'High',
        observation:
          'The search input lacked an explicit label identifying its purpose.',
        recommendation:
          'Give the field an accessible name and listen to what VoiceOver announces when focus reaches it.',
      },
    ],
  },
  {
    area: 'Contrast and image descriptions',
    items: [
      {
        title: 'Teal text on white',
        severity: 'Medium',
        observation:
          'The audit identified teal text (#59C199) on white. That pair has a contrast ratio of 2.21:1.',
        recommendation:
          'Use a darker text color and verify at least 4.5:1 for normal text. The report’s suggested #3A8468 measures 4.487:1 on white, just below the target.',
      },
      {
        title: 'Informative images',
        severity: 'High',
        observation:
          'Some images conveyed information without a text alternative.',
        recommendation:
          'Describe the information each image contributes so someone listening to the page can access it.',
      },
    ],
  },
  {
    area: 'Headings and document links',
    items: [
      {
        title: 'Heading hierarchy',
        severity: 'Medium',
        observation:
          'Some headings jumped from level one to level three, obscuring the relationship between sections.',
        recommendation:
          'Match heading levels to the content structure and inspect the resulting heading list.',
      },
      {
        title: 'PDF destinations',
        severity: 'Low',
        observation:
          'Some links opened documents without identifying the file type in advance.',
        recommendation:
          'Identify PDF links and indicate when they open in a new tab so visitors can anticipate the change.',
      },
    ],
  },
] as const;

export const auditRoadmap = [
  [
    'Month 1 · Navigation and structure',
    'Repair landmarks, keep focus out of closed menus, label form inputs, and correct heading levels on the homepage and Visit pages.',
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
