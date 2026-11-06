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
    'The challenge',
    'DowntownSF Partnership needed to understand where its website might create barriers for visitors using assistive technology. The team needed recommendations that both designers and developers could act on.',
  ],
  [
    'My role',
    'As the UX and visual designer on the audit, I evaluated the site, documented findings, and presented recommendations. DowntownSF stakeholders joined the discussion about priorities.',
  ],
  [
    'Evaluation methods',
    'I used automated accessibility scans to flag potential issues, then navigated the site with VoiceOver on macOS to examine how the screen reader presented content and interactive elements.',
  ],
  [
    'Evidence and observations',
    'The scans pointed to places that warranted a closer look. During manual review, I could listen to what VoiceOver announced and consider what someone would need to know to navigate or use a control. The evidence came from my evaluation of the interface.',
  ],
  [
    'From findings to decisions',
    'For stakeholders, I explained what each issue could mean for someone using the site. For designers and developers, I translated the same findings into steps they could take to address the barrier. We discussed which issues to prioritize.',
  ],
  [
    'Outcomes and limits',
    'The partnership received a structured evaluation, documented findings, presentations, and guidance for remediation. The engagement documented expert observations. The effect of any subsequent fixes on visitors has yet to be established.',
  ],
  [
    'Reflection and next steps',
    'Listening to the site gave context to the scan results and helped me explain why a barrier mattered. After remediation, I would repeat the affected tasks with VoiceOver, then invite people who use screen readers to try those tasks and describe their experience.',
  ],
] as const;
