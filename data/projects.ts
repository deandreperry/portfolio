export type ProjectAsset = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
  state?: 'Default' | 'Loading' | 'Empty' | 'Error' | 'Recovery' | 'Responsive';
};
export type ProjectDecision = {
  title: string;
  evidence: string;
  alternatives: string;
  tradeoff: string;
  decision: string;
  consequence: string;
  source?: string;
};
export type ProjectStory = {
  problem: string;
  users: string;
  contribution: string;
  outcome: string;
  decisions: ProjectDecision[];
  collaboration?: {
    context: string;
    tension: string;
    contribution: string;
    resolution: string;
    learning: string;
  };
  research?: {
    method: string;
    rationale: string;
    participants: string;
    finding: string;
    limitation: string;
    source?: string;
  }[];
  assets?: ProjectAsset[];
  comparison?: {
    before: ProjectAsset;
    after: ProjectAsset;
    reason: string;
    evidence: string;
  };
  flow?: string[];
  system?: string;
  accessibility?: string[];
  reflection: string;
  next: string;
};
export type CaseStudy = {
  slug: string;
  index: string;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  role: string;
  timeline: string;
  team: string;
  platform: string;
  services: string[];
  accent: string;
  status: 'placeholder' | 'ready';
  story?: ProjectStory;
  narrative?: Narrative;
  focus: string;
  researchPrompts: string[];
  designPrompts: string[];
  reflectionPrompts: string[];
};
export type Narrative = {
  question: string;
  context: string;
  constraint: string;
  flow: string[];
  decisions: {
    title: string;
    observation: string;
    decision: string;
    why: string;
    tradeoff: string;
    source: string;
  }[];
  visual: string;
  accessibility: string;
  outcome: string;
  reflection: string;
  validation: {
    question: string;
    method: string;
    participants: string;
    signal: string;
  };
  capture: string;
  source: string;
};
export const projects: CaseStudy[] = [
  {
    slug: 'gather', index: '01', title: 'Gather',
    subtitle: 'Gather — Native iOS Product & Visual Design',
    description: 'Helping friends turn shared requirements and private choices into one plan they can act on.',
    category: 'Native iOS / Product & Visual Design',
    role: 'Product direction & design', timeline: '2026', team: 'Independent concept · AI-assisted implementation',
    platform: 'iOS · SwiftUI', services: ['Product Design', 'Visual Design', 'Inclusive Interaction'],
    accent: '#1F5C4D', status: 'ready',
    focus: 'A functional native iOS concept for shared planning, private voting, and group consensus.',
    researchPrompts: [], designPrompts: [], reflectionPrompts: [],
  },
  {
    slug: 'uxd-systems',
    index: '02',
    title: 'UXD Systems',
    subtitle: 'UXD Systems — Visual Design / Design Systems',
    description:
      'A structured environment for exploring how design systems connect principles, tokens, components, and interaction patterns.',
    category: 'Visual Design / Design Systems',
    role: 'UX Designer',
    timeline: 'Dates to confirm',
    team: 'Authorship scope to confirm',
    platform: 'Web',
    services: ['Visual Design', 'Design Systems', 'Interaction Design'],
    accent: '#146ff8',
    status: 'ready',
    focus:
      'A structured environment for exploring how design systems connect principles, tokens, components, and interaction patterns.',
    researchPrompts: [],
    designPrompts: [],
    reflectionPrompts: [],
    narrative: {
      question:
        'How can designers explore, compare, and apply system knowledge without losing its context?',
      context:
        'Design-system guidance lives in separate documentation environments with different terminology, platform assumptions, and levels of detail. UXD Systems brings that material into a consistent learning structure while keeping official references visible.',
      constraint:
        'A shared comparison model must not turn educational interpretation into an authoritative implementation specification. The product explicitly separates official guidance, explanation, analysis, and comparison.',
      flow: [
        'System library',
        'Structured profile',
        'Comparison workspace',
        'Token Lab',
        'Learning curriculum',
      ],
      decisions: [
        {
          title: 'Keep exploration and comparison distinct',
          observation:
            'The library has filterable system profiles; the comparison workspace exposes selectable systems and four lenses.',
          decision:
            'Use profiles for depth and comparison for a focused question across systems.',
          why: 'A profile preserves context. Aligned comparison dimensions make differences inspectable without requiring readers to remember separate pages.',
          tradeoff:
            'Switching modes adds navigation; profile links preserve a route back to primary references.',
          source: 'components/CompareClient.tsx; components/SystemExplorer.tsx',
        },
        {
          title: 'Turn abstract tokens into visible consequences',
          observation:
            'Token Lab exposes hue, radius, spacing, density, and a dark preview. Changes update shared preview variables.',
          decision:
            'Keep controls next to one consistent interface preview and a live white-on-action contrast readout.',
          why: 'Holding the content constant lets the visual effect of a variable become easier to isolate. Contrast feedback also exposes when a color choice fails a specific text pairing.',
          tradeoff:
            'This is an educational preview, not a guarantee that every component and color pair in an exported system is accessible.',
          source: 'components/TokenLab.tsx',
        },
        {
          title: 'Compare through a common frame, not a common identity',
          observation:
            'The comparison table uses shared dimensions, named system columns, and links to each profile.',
          decision:
            'Normalize the questions while retaining system names, source scope, and contextual explanation.',
          why: 'Aligned attributes support cross-system scanning; direct references prevent the comparison from replacing the original guidance.',
          tradeoff:
            'Normalization inevitably compresses nuance. The product labels the result as educational analysis.',
          source: 'components/CompareClient.tsx',
        },
        {
          title: 'Make component states part of the lesson',
          observation:
            'A dedicated Button Explorer presents component variants and states.',
          decision:
            'Treat the button as a behavioral component rather than a static color specimen.',
          why: 'Hierarchy, affordance, focus, and disabled behavior affect how an action can be understood and used. A state explorer makes those differences available for inspection.',
          tradeoff:
            'An isolated explorer cannot represent every interaction within a complete task.',
          source: 'components/ButtonExplorer.tsx',
        },
      ],
      visual:
        'The Token Lab ties a primitive hue to semantic surface and text values, then applies radius, spacing, and density variables to a stable preview. This makes the relationship between a system value and an interface visible. In comparison, column alignment and row headings carry the grouping; system accents identify columns without replacing their labels.',
      accessibility:
        'Source inspection confirms labeled range controls, pressed states on density controls, a native theme checkbox, and a live contrast readout in Token Lab. The comparison uses table headers and a labeled focusable overflow region. These are implementation observations, not a complete accessibility certification.',
      outcome:
        'The implemented product combines structured system profiles, a comparison workspace, a component explorer, and a manipulable Token Lab. No learning improvement or task-time reduction is claimed.',
      reflection:
        'The central tension is between making systems comparable and retaining the context that gives each system meaning. The next review should test whether the navigation separates learning and reference clearly enough; feature completeness alone cannot answer that.',
      validation: {
        question:
          'Can designers explain a system difference and predict what a token change will affect?',
        method:
          'Proposed moderated task-based usability sessions with think-aloud and a short explanation task.',
        participants:
          'Practicing and early-career designers who use design-system documentation. Recruitment has not begun.',
        signal:
          'Observe successful comparison, mistaken interpretations, navigation detours, and whether explanations match the demonstrated token behavior.',
      },
      capture:
        'Capture the comparison workspace with two systems and the Token Lab with density, radius, and contrast controls visible.',
      source: 'uxd-systems',
    },
  },
  {
    slug: 'uxr-forge',
    index: '03',
    title: 'UXR Forge',
    subtitle: 'UXR Forge — User Research / Research Operations',
    description:
      'A research learning and practice environment that connects questions, methods, evidence, and proposed decisions.',
    category: 'User Research / Research Operations',
    role: 'UX Designer',
    timeline: 'Dates to confirm',
    team: 'Authorship scope to confirm',
    platform: 'Web',
    services: ['User Research', 'Research Strategy', 'Interaction Design'],
    accent: '#496856',
    status: 'ready',
    focus:
      'A research learning and practice environment that connects questions, methods, evidence, and proposed decisions.',
    researchPrompts: [],
    designPrompts: [],
    reflectionPrompts: [],
    narrative: {
      question:
        'How can a research tool develop judgment without reducing research to a checklist?',
      context:
        'UXR Forge combines method guidance, practice exercises, a Decision Lab, study planning, and synthesis. Its displayed studies are synthetic teaching material—not research conducted with participants.',
      constraint:
        'Authored feedback can explain tradeoffs but cannot grade the quality of an open-ended research judgment. The product avoids scores, certificates, and simulated AI critique.',
      flow: [
        'Learn',
        'Practice',
        'Decision Lab',
        'Toolkit: plan & synthesis',
        'Traceable study evidence',
      ],
      decisions: [
        {
          title: 'Keep evidence traceable',
          observation:
            'Study records link observations to themes, insights, recommendations, and counterexamples.',
          decision:
            'Retain stable record IDs and direct finding-to-observation navigation.',
          why: 'Separating observation from interpretation lets a reader inspect what supports a conclusion and what challenges it.',
          tradeoff:
            'More explicit relationships increase authoring effort and demand validation of references.',
          source: 'README.md: Evidence relationships; src/data.ts',
        },
        {
          title: 'Explain method choices rather than score them',
          observation:
            'Practice activities provide approach-specific feedback and ungraded written reflections.',
          decision:
            'Present costs and assumptions behind defensible approaches.',
          why: 'A usability task can reveal interaction breakdowns; a survey answers a different kind of question. Method choice should follow the decision to be informed.',
          tradeoff:
            'Authored feedback cannot respond to every contextual detail in a learner’s reflection.',
          source: 'README.md: Learning and practice release',
        },
        {
          title: 'Keep practice and research provenance visible',
          observation:
            'Every displayed study is labeled as synthetic; planner exports identify unexecuted drafts.',
          decision: 'Carry provenance into both the interface and exports.',
          why: 'An observation count is not a population estimate, and a teaching dataset is not participant evidence. Labels reduce the risk of confusing practice with completed research.',
          tradeoff:
            'Repeated labeling adds content, but removing it could create a materially misleading impression.',
          source: 'README.md: Research status; Local storage and exports',
        },
      ],
      visual:
        'The product separates learning, practice, and toolkit destinations. Within synthesis, observation IDs and supporting or challenging evidence maintain a readable chain from source material to interpretation. The portfolio presents that chain as the research competency—not the existence of templates.',
      accessibility:
        'The implementation documents native select-based evidence assignment, keyboard journeys, recoverable drafts, and explicit confirmation before resets. Automated checks are documented in the source repository; assistive-technology testing and practitioner sessions remain separate validation needs.',
      outcome:
        'The product implements planning, synthesis, downloadable resources, and authored research-reasoning exercises. No participant findings or measured research-training outcome is claimed.',
      reflection:
        'Research tools need to preserve uncertainty. A structured workflow helps expose reasoning, but it should not make a recommendation appear more certain simply because every field is filled.',
      validation: {
        question:
          'Do learners distinguish observations, interpretations, and proposed recommendations?',
        method:
          'Proposed moderated synthesis exercise followed by explanation and navigation tasks.',
        participants:
          'Early-career researchers and practitioners reviewing research plans.',
        signal:
          'Trace an insight to evidence, identify a counterexample, and explain a method choice without treating synthetic data as real findings.',
      },
      capture:
        'Capture the current learning homepage and a finding with supporting observations and counterexamples.',
      source: 'uxr-forge',
    },
  },
  {
    slug: 'palette-snap',
    index: '04',
    title: 'Palette Snap',
    subtitle: 'Palette Snap — Visual Design / Color Interaction',
    description:
      'An image-to-color workflow that makes extracted palettes editable, reusable, and easier to evaluate.',
    category: 'Visual Design / Color Interaction',
    role: 'UX Designer',
    timeline: 'Dates to confirm',
    team: 'Authorship scope to confirm',
    platform: 'Web',
    services: ['Visual Design', 'Color Systems', 'Interaction Design'],
    accent: '#92603e',
    status: 'ready',
    focus:
      'An image-to-color workflow that makes extracted palettes editable, reusable, and easier to evaluate.',
    researchPrompts: [],
    designPrompts: [],
    reflectionPrompts: [],
    narrative: {
      question:
        'How can extracted color become a useful design material rather than a static list of swatches?',
      context:
        'Palette Snap organizes the work into Extract, Refine, and Export. Designers can move from image colors to names, semantic roles, contrast checks, and reusable output without an account.',
      constraint:
        'A palette alone cannot establish accessibility: contrast depends on a specific foreground and background pairing. Browser clipboard and remote-image capabilities also vary.',
      flow: [
        'Extract',
        'Name & refine',
        'Assign roles',
        'Check contrast',
        'Export',
      ],
      decisions: [
        {
          title: 'Keep refinement under the designer’s control',
          observation:
            'Swatches support editing, ordering, locks, names, and editable semantic-role suggestions.',
          decision:
            'Offer suggestions without silently replacing a selected color.',
          why: 'Color has contextual and expressive value. Explicit acceptance preserves authorship while exposing an accessible alternative for a particular pairing.',
          tradeoff:
            'The designer must still evaluate the suggestion in the actual interface.',
          source: 'README.md: Product capabilities',
        },
        {
          title: 'Make palette changes reversible',
          observation:
            'The product includes bounded undo/redo, recent history, and saved palettes.',
          decision:
            'Preserve a recovery path while designers explore colors and ordering.',
          why: 'Experimentation is easier when a previous arrangement can be recovered. Keyboard move controls also offer an alternative to dragging.',
          tradeoff:
            'Local history is not a cloud backup; clearing browser storage removes saved work.',
          source:
            'README.md: Privacy and browser limitations; palette-history.js',
        },
        {
          title: 'Group export by the next use',
          observation:
            'Export supports visual cards, stylesheet formats, structured data, and design tokens.',
          decision: 'Carry names and roles forward into reusable output.',
          why: 'A palette becomes more useful when the result fits the next design or implementation task rather than requiring manual transcription.',
          tradeoff:
            'Multiple formats create choice; grouped export categories are needed to keep the primary action understandable.',
          source: 'README.md: Product capabilities',
        },
      ],
      visual:
        'Swatches are both visual samples and editable design data. Naming and semantic roles connect appearance to purpose; explicit contrast results describe a pairing rather than declaring an entire palette accessible. The extraction, refinement, and export sequence gives each stage a different visual priority.',
      accessibility:
        'The implementation documents keyboard reorder controls, accessible dialogs and menus, live action feedback, and explicit contrast results. Unsupported clipboard and EyeDropper paths retain upload or manual fallbacks. These observations do not establish a full accessibility audit.',
      outcome:
        'The implemented workflow transforms images into editable palettes and multiple reusable formats, with local processing for uploads and pasted images. No time-saving or satisfaction metric is claimed.',
      reflection:
        'Automatic extraction starts the work; naming, grouping, correction, and recovery make the result usable. Future testing should examine whether designers understand the difference between a visually harmonious palette and a passing contrast pair.',
      validation: {
        question:
          'Can a designer refine an extracted palette and export the intended roles without losing work?',
        method:
          'Proposed task-based usability sessions covering extraction, keyboard reorder, contrast adjustment, undo, and export.',
        participants:
          'Visual and product designers who use image references in their workflow.',
        signal:
          'Correct export selection, understandable feedback, recovery from unwanted edits, and accurate interpretation of contrast results.',
      },
      capture:
        'Capture the current workspace with a source image, named swatches, contrast evaluation, and the grouped export menu.',
      source: 'palette-snap',
    },
  },
  {
    slug: '508-dev',
    index: '05',
    title: '508 Dev',
    subtitle: '508 Dev — Accessibility / Inclusive Interaction',
    description:
      'An interactive accessibility learning environment that makes the consequences of interface decisions tangible.',
    category: 'Accessibility / Inclusive Interaction',
    role: 'UX Designer',
    timeline: 'Dates to confirm',
    team: 'Authorship scope to confirm',
    platform: 'Web',
    services: ['Accessibility', 'Inclusive Design', 'Interaction Design'],
    accent: '#655a92',
    status: 'ready',
    focus:
      'An interactive accessibility learning environment that makes the consequences of interface decisions tangible.',
    researchPrompts: [],
    designPrompts: [],
    reflectionPrompts: [],
    narrative: {
      question:
        'How can people understand accessibility requirements by experiencing the interaction?',
      context:
        '508 Dev places failing and repaired reference patterns alongside practical explanations. The design challenge is to connect a technical requirement to the experience of navigating, understanding, and recovering from an interface.',
      constraint:
        'A demonstration is not a conformance guarantee. The product marks examples as reference material until documented browser and assistive-technology testing supports stronger claims.',
      flow: [
        'Learn',
        'Playground',
        'Patterns',
        'Test',
        'Reference & standards',
      ],
      decisions: [
        {
          title: 'Make the behavioral difference available to inspect',
          observation:
            'The playground includes failing and repaired target-size, redundant-entry, contrast, and input-purpose examples.',
          decision:
            'Present paired interactions with an explanation of the affected task.',
          why: 'Experiencing the difference gives a requirement a concrete consequence. The comparison connects observation to an action the learner can apply.',
          tradeoff:
            'A deliberately failing example must remain clearly identified and must not prevent navigation out of the lesson.',
          source: 'README.md: Interactive Accessibility Playgrounds',
        },
        {
          title: 'Connect patterns to keyboard behavior',
          observation:
            'The pattern library includes keyboard maps and live examples for dialogs, tabs, menus, and other widgets.',
          decision:
            'Describe expected interaction alongside semantic structure.',
          why: 'A visually correct control can still fail when operated without a pointer. Behavior belongs in the design specification.',
          tradeoff:
            'Reference patterns still need testing in the context of the consuming product.',
          source: 'README.md: Pattern Library; Release Status',
        },
        {
          title: 'Separate reference examples from tested claims',
          observation:
            'The product labels examples as Reference until a documented browser and assistive-technology matrix supports a stronger status.',
          decision:
            'Keep evaluation status visible beside the educational material.',
          why: 'A working demonstration does not prove that every interaction is accessible in every browser or assistive-technology combination. Status language helps readers understand the scope of the evidence.',
          tradeoff:
            'Qualified claims are less promotional, but prevent a reference implementation from being mistaken for a complete conformance guarantee.',
          source: 'README.md: QA Status; Release Status',
        },
      ],
      visual:
        'The paired-example structure gives visual comparison a specific purpose: identifying behavioral differences. Labels and explanations must carry the distinction alongside color so that the teaching mechanism does not depend on the ability it is explaining.',
      accessibility:
        'The source documents focus management, skip navigation, keyboard interactions, and reduced motion. Vision simulations illustrate some visual effects; they cannot reproduce lived experience or substitute for research with disabled users. Browser and assistive-technology combinations remain unverified until documented.',
      outcome:
        'The product offers interactive reference examples and routes for learning, patterns, testing, and standards. It remains a public preview; no conformance certification or learning outcome is claimed.',
      reflection:
        'Demonstrating an inaccessible pattern creates an obligation to protect the surrounding learning experience. Future evaluation needs to establish whether the lesson stays navigable and understandable for the people it is intended to support.',
      validation: {
        question:
          'Can learners explain and repair the interaction problem after comparing examples?',
        method:
          'Proposed keyboard walkthroughs and moderated learning tasks, including assistive-technology use.',
        participants:
          'Interface designers and developers, including people who use keyboard and screen-reader navigation.',
        signal:
          'Identify the failure, explain its user consequence, and apply the reference without becoming trapped in the example.',
      },
      capture:
        'Capture a real playground showing failing and repaired versions with their labels and keyboard instructions.',
      source: '508Dev',
    },
  },
];
// Additional context keeps audience and validation tasks separate from completed research.
export const projectReview: Record<
  string,
  { audience: string; tasks: string; works: string; limit: string }
> = {
  'uxd-systems': {
    audience: 'Designers learning and comparing design-system conventions.',
    tasks:
      'Compare two systems, explain a meaningful difference, then predict and inspect a density change in Token Lab.',
    works:
      'A shared comparison structure retains links back to contextual profiles.',
    limit:
      'An educational model simplifies the original systems; understanding still needs practitioner evaluation.',
  },
  'uxr-forge': {
    audience:
      'Aspiring and practicing researchers developing research judgment.',
    tasks:
      'Frame a question, justify a method, inspect a counterexample, and recover a saved draft.',
    works:
      'Evidence relationships remain inspectable rather than collapsing into a confidence score.',
    limit:
      'Authored scenarios and feedback cannot reproduce the ambiguity of a live research engagement.',
  },
  '508-dev': {
    audience:
      'Interface designers and developers learning accessible interaction.',
    tasks:
      'Navigate a reference example with a keyboard, explain the difference between paired controls, and identify what further testing is required.',
    works:
      'The paired reference makes an abstract requirement available for direct inspection.',
    limit:
      'A reference example cannot establish the accessibility of an entire product or replace assistive-technology testing.',
  },
  'palette-snap': {
    audience:
      'Visual and product designers turning image references into usable palettes.',
    tasks:
      'Extract a sample palette, name and move a color, check a pair, undo an edit, and choose an export.',
    works:
      'Color remains connected to values, names, roles, and recovery controls.',
    limit:
      'A suggested role or passing pair cannot guarantee that every use of the palette is accessible.',
  },
};
export const capabilities = [
  {
    title: 'Research & insight',
    detail:
      'Ask useful questions. Listen carefully. Turn evidence into a direction.',
    skills: [
      'User interviews',
      'Usability testing',
      'Research synthesis',
      'Survey design',
    ],
  },
  {
    title: 'Product & interaction',
    detail:
      'Make complex tasks understandable, from the main path to the edge cases.',
    skills: [
      'Problem framing',
      'Information architecture',
      'User flows',
      'Prototyping',
    ],
  },
  {
    title: 'Interface & systems',
    detail:
      'Bring clarity to every detail, with consistent, accessible design.',
    skills: [
      'Visual design',
      'Responsive design',
      'Design systems',
      'Accessibility',
    ],
  },
];
export const processSteps = [
  'Understand',
  'Frame',
  'Explore',
  'Validate',
  'Refine',
  'Deliver',
];
