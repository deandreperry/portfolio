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
  visible: boolean;
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
    visible: true,
    slug: 'neuromode',
    index: '01',
    title: 'NeuroMode',
    subtitle: 'NeuroMode — Cognitive Accessibility & Product Design Case Study',
    description:
      'An iOS app for starting everyday activities, managing sensory preferences, and returning after interruptions. Product design centers on manageable steps and control.',
    category: 'Product Design / Cognitive Accessibility',
    role: 'Product direction & interaction design',
    timeline: 'September 2026',
    team: 'Designers, developers, and project reviewers',
    platform: 'iPhone & iPad · SwiftUI',
    services: ['Product Design', 'Accessibility', 'UX Analysis'],
    accent: '#305C52',
    status: 'ready',
    focus:
      'Designing manageable next steps, adjustable sensory controls, and a reliable way back after interruptions.',
    researchPrompts: [],
    designPrompts: [],
    reflectionPrompts: [],
  },
  {
    visible: true,
    slug: 'polish-patrol',
    index: '02',
    title: 'Polish Patrol',
    subtitle: 'Polish Patrol — Service & Booking UX Case Study',
    description:
      'A client website redesign connecting service selection, clear pricing, and the right booking form. UX, content, and frontend delivery shaped by client feedback.',
    category: 'Client Website / Service & Booking UX',
    role: 'UX design, content & frontend development',
    timeline: '2026',
    team: 'Client feedback · TidyTrack hosted forms',
    platform: 'Responsive web',
    services: ['UX Design', 'Content Design', 'Frontend Development'],
    accent: '#173f40',
    status: 'ready',
    focus:
      'A client website redesign that separates service journeys, clarifies starting prices, and connects each request to the right form.',
    researchPrompts: [],
    designPrompts: [],
    reflectionPrompts: [],
  },
  {
    visible: true,
    slug: 'sbf',
    index: '03',
    title: 'Social Butterflies Foundation',
    subtitle:
      'Social Butterflies Foundation — Visual Design & Information Architecture',
    description:
      'Two ways to support one mission. Apparel discovery and resource access shaped through visual hierarchy, content organization, and responsive page design.',
    category: 'Visual Design / Information Architecture',
    role: 'UX/UI design & implementation',
    timeline: '2026',
    team: 'Contribution: UX/UI design & implementation',
    platform: 'Responsive web for WordPress',
    services: [
      'Visual Design',
      'Information Architecture',
      'Responsive Design',
    ],
    accent: '#6D01AD',
    status: 'ready',
    focus:
      'Connecting merchandise discovery and practical assistance through one identity and two distinct page architectures.',
    researchPrompts: [],
    designPrompts: [],
    reflectionPrompts: [],
  },
  {
    visible: true,
    slug: 'gather',
    index: '04',
    title: 'Gather',
    subtitle: 'Gather — Native iOS Product & Visual Design',
    description:
      'A native group-planning concept. Private voting turns shared requirements into a plan friends can act on.',
    category: 'Native iOS / Product & Visual Design',
    role: 'Product direction & design',
    timeline: '2026',
    team: 'Design and development contributors',
    platform: 'iOS · SwiftUI',
    services: ['Product Design', 'Visual Design', 'Inclusive Interaction'],
    accent: '#1F5C4D',
    status: 'ready',
    focus:
      'A functional native iOS concept for shared planning, private voting, and group consensus.',
    researchPrompts: [],
    designPrompts: [],
    reflectionPrompts: [],
  },
  {
    visible: true,
    slug: 'uxd-systems',
    index: '05',
    title: 'UXD Systems',
    subtitle: 'UXD Systems — Visual Design / Design Systems',
    description:
      'A design-system learning workspace. Principles, tokens, and component comparisons help designers understand how interface choices fit together.',
    category: 'Visual Design / Design Systems',
    role: 'UX Designer',
    timeline: 'Dates to confirm',
    team: 'Designers, developers, and design-system reviewers',
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
        'Design-system guidance is spread across websites, each with its own terminology and platform assumptions. UXD Systems brings it into one learning workspace while keeping links to the original guidance.',
      constraint:
        'A comparison can simplify differences too far. The workspace distinguishes official guidance from its own explanations and links back to the source.',
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
          why: 'Profiles explain each system in context. Aligned comparison rows let designers compare differences without remembering information from separate pages.',
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
            'Use the same comparison questions while preserving each system’s name, context, and links to its guidance.',
          why: 'Shared headings help designers scan across systems. Direct links keep the original guidance within reach.',
          tradeoff:
            'A shared table cannot capture every detail. Links to the original guidance keep the comparison in context.',
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
        'Token Lab lets designers change color, corner radius, spacing, and density while watching the same interface respond. In the comparison view, aligned columns and headings make differences easier to scan; color reinforces each system’s name.',
      accessibility:
        'Token Lab uses labeled controls, clear selected states, and live contrast feedback. Table headings and a keyboard-focusable scrolling area support the comparison view. Screen-reader and task-based testing are still needed.',
      outcome:
        'The working product brings system profiles, comparisons, component states, and Token Lab into one learning workspace. Its effect on learning still needs to be tested with designers.',
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
    visible: true,
    slug: 'fundraiser-studio',
    index: '06',
    title: 'Fundraiser Studio',
    subtitle: 'Fundraiser Studio — UX Strategy & Organizer Experience',
    description:
      'A workspace for first-time fundraisers. The prototype helps organizers prepare a campaign and create their first invitation.',
    category: 'UX Strategy / Interaction Design',
    role: 'Product direction',
    timeline: 'October 2026',
    team: 'Design and development contributors',
    platform: 'Responsive web',
    services: ['UX Strategy', 'Interaction Design', 'Research Planning'],
    accent: '#9f2341',
    status: 'ready',
    focus:
      'Helping first-time organizers prepare a campaign, understand the next action, and create an invitation.',
    researchPrompts: [],
    designPrompts: [],
    reflectionPrompts: [],
  },
  {
    visible: false,
    slug: 'uxr-forge',
    index: '07',
    title: 'UXR Forge',
    subtitle: 'UXR Forge — User Research / Research Operations',
    description:
      'A research learning environment. The experience connects research questions, method selection, synthesis, and the evidence behind design decisions.',
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
        'The product separates learning, practice, and toolkit destinations. Within synthesis, observation IDs and supporting or challenging evidence maintain a readable chain from source material to interpretation. Readers can trace a recommendation back to the observations and counterexamples behind it.',
      accessibility:
        'Native selection controls support evidence assignment without dragging. Draft recovery and confirmation before resets protect work in progress. Assistive-technology testing and sessions with researchers are still needed.',
      outcome:
        'The working product connects planning, synthesis, resources, and practice exercises. Whether it helps people make better research decisions still needs evaluation.',
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
    visible: false,
    slug: 'palette-snap',
    index: '08',
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
        'Keyboard controls offer an alternative to dragging colors. Dialogs, menus, action feedback, and contrast results support editing and recovery. Upload and manual entry remain available when browser tools are unsupported. A full accessibility review is still needed.',
      outcome:
        'Designers can turn an image into an editable palette and export it in several formats. Uploaded and pasted images are processed locally. Time savings and ease of use have not yet been measured.',
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
    visible: false,
    slug: '508-dev',
    index: '09',
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
        'The interface includes focus management, skip navigation, keyboard interactions, and reduced motion. Vision simulations illustrate some visual effects; they cannot reproduce lived experience or substitute for research with disabled users. Browser and assistive-technology combinations remain unverified until documented.',
      outcome:
        'The public preview brings interactive examples, patterns, and testing guidance together. Learning outcomes and assistive-technology behavior still need evaluation.',
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

/** Listings and next-project navigation share this single visibility rule. */
export const visibleProjects = projects.filter((project) => project.visible);
