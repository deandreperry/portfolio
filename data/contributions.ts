/** Based on De’Andre Perry’s supplied collaboration notes, October 2026.
 * Team descriptions are included only where project involvement is confirmed.
 * These notes do not establish individual collaborators’ ownership or user research.
 */
export const contributions: Record<string, { role: string; team?: string }> = {
  neuromode: {
    role: 'Product direction, neurodivergent-centered interaction design, information architecture, onboarding, and interface implementation.',
    team: 'The project involved designers, developers, and project reviewers.',
  },
  gather: {
    role: 'Product brief and UX direction, including the group decision-making model, voting, preferences, and activity selection.',
    team: 'Designers and developers contributed to the project. Codex supported development as a tool.',
  },
  'uxd-systems': {
    role: 'Product direction, the learning structure, system comparisons, and the interactive Token Lab experience.',
    team: 'The project involved designers, developers, and design-system reviewers.',
  },
  'fundraiser-studio': {
    role: 'Product concept and UX direction, with a focus on onboarding, campaign creation, and the first fundraising invitation.',
    team: 'Designers and developers contributed to this independent concept. AI tools also supported design, research organization, development, and prototype checks.',
  },
  'uxr-forge': {
    role: 'Product direction, the learning experience, and research workflows connecting planning, observations, synthesis, and recommendations.',
  },
  'palette-snap': {
    role: 'The palette-creation workflow, interaction hierarchy, editing experience, semantic color organization, and accessibility considerations.',
  },
  '508-dev': {
    role: 'The accessibility-learning concept, educational structure, and interactive examples for evaluating interface behavior.',
  },
};
