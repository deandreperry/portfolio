export type ToolGroup = { label: string; tools: string[]; note?: string };
export const toolkit: ToolGroup[] = [
  {
    label: 'Design & interaction prototyping',
    tools: ['Figma', 'Sketch', 'Adobe XD'],
    note: 'Visual exploration, interface design, and interactive prototypes.',
  },
  {
    label: 'High-fidelity implementation',
    tools: ['React', 'Next.js', 'TypeScript', 'HTML', 'CSS', 'JavaScript'],
    note: 'Explore working behavior beyond static screens.',
  },
  {
    label: 'Workflow & AI assistance',
    tools: ['Git', 'GitHub', 'Codex', 'Claude Code'],
    note: 'Versioned work and AI-assisted implementation. Design judgment and verification remain human responsibilities.',
  },
];
export const projectTools: Record<string, ToolGroup[]> = {
  'uxd-systems': [
    {
      label: 'Prototype implementation',
      tools: ['Next.js', 'React', 'TypeScript'],
    },
    { label: 'Evaluation', tools: ['Playwright', 'axe-core'] },
    { label: 'Versioning & publishing', tools: ['Git', 'GitHub Pages'] },
  ],
  'uxr-forge': [
    {
      label: 'Prototype implementation',
      tools: ['React', 'TypeScript', 'Vite'],
    },
    { label: 'Evaluation', tools: ['Playwright', 'axe-core', 'Vitest'] },
    { label: 'Versioning', tools: ['Git'] },
  ],
  '508-dev': [
    { label: 'Prototype implementation', tools: ['HTML', 'CSS', 'JavaScript'] },
    {
      label: 'Evaluation',
      tools: ['Browser keyboard testing', 'Repository audits'],
    },
    { label: 'Versioning', tools: ['Git'] },
  ],
  'palette-snap': [
    {
      label: 'Prototype implementation',
      tools: ['HTML', 'CSS', 'JavaScript', 'Canvas'],
    },
    { label: 'Evaluation', tools: ['Node.js test runner'] },
    { label: 'Versioning', tools: ['Git'] },
  ],
};
