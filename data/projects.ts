export type Metric = { value: string; label: string; sample: true };
export type TestResult = {
  task: string;
  before: string;
  after: string;
  issue: string;
  severity: 'High' | 'Medium' | 'Low';
  change: string;
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
  industry: string;
  team: string;
  tools: string[];
  services: string[];
  accent: string;
  challenge: string;
  businessContext: string;
  audience: string;
  researchQuestions: string[];
  research: { method: string; detail: string; why: string }[];
  findings: { title: string; evidence: string; implication: string }[];
  segments: { name: string; behavior: string; need: string }[];
  journey: { phase: string; action: string; feeling: string; opportunity: string }[];
  reframe: string;
  hmws: string[];
  principles: { title: string; detail: string }[];
  flow: string[];
  iteration: { before: string; failed: string; after: string };
  testing: TestResult[];
  accessibility: string[];
  outcomes: Metric[];
  reflection: { worked: string; change: string; learned: string; next: string };
};

export const projects: CaseStudy[] = [
  {
    slug: 'carebridge', index: '01', title: 'CareBridge', subtitle: 'Healthcare access, organized around how people actually seek care.',
    description: 'A guided care discovery and appointment experience designed to reduce decision friction, clarify insurance, and make the next step feel manageable.',
    category: 'Healthcare access', role: 'Lead UX Designer', timeline: '12 weeks', industry: 'Digital health', team: 'Product manager, 2 engineers, clinical advisor', tools: ['Figma', 'FigJam', 'Maze'],
    services: ['Discovery research', 'Information architecture', 'Interaction design', 'Accessibility'], accent: '#4e92fa',
    challenge: 'Patients were expected to navigate provider taxonomy, insurance rules, and uncertain appointment availability while already stressed or unwell.',
    businessContext: 'The sample product combined a provider directory, scheduling, and digital intake. Fragmentation caused abandonment before a visit was booked.',
    audience: 'People coordinating their own or a family member’s care, including older adults and first-time insurance users.',
    researchQuestions: ['How do people decide what kind of care they need?', 'Where does confidence break during provider selection?', 'Which details are essential before committing to an appointment?'],
    research: [
      { method: '12 user interviews', detail: 'Recent experiences finding and booking care', why: 'Reveal language, mental models, and trust signals.' },
      { method: '5 staff interviews', detail: 'Schedulers, care coordinators, and front-desk staff', why: 'Map operational constraints behind the interface.' },
      { method: 'Competitive review', detail: 'Six healthcare platforms and two adjacent services', why: 'Identify recurring gaps and familiar patterns.' },
      { method: 'Accessibility audit', detail: 'Keyboard, zoom, labels, errors, and contrast', why: 'Surface barriers before proposing a new flow.' },
    ],
    findings: [
      { title: 'Need before specialty', evidence: '9 of 12 participants began with a symptom or goal, not a provider type.', implication: 'Start discovery in everyday language and translate behind the scenes.' },
      { title: 'Availability is a trust signal', evidence: 'Participants abandoned options when dates appeared only after multiple steps.', implication: 'Expose realistic appointment windows during comparison.' },
      { title: 'Insurance needs confirmation', evidence: '“Accepts insurance” felt too vague to support a decision.', implication: 'Show plan-level verification and explain uncertainty.' },
    ],
    segments: [
      { name: 'Coordinating caregiver', behavior: 'Switches between several family members and calendars.', need: 'Fast context switching and saved details.' },
      { name: 'Complex-care navigator', behavior: 'Compares specialists, access needs, and referrals.', need: 'Visible constraints and dependable preparation.' },
      { name: 'First-time navigator', behavior: 'Uses symptoms and plain language to begin.', need: 'Guidance without medical jargon.' },
    ],
    journey: [
      { phase: 'Recognize', action: 'Decides the issue needs care', feeling: 'Uncertain', opportunity: 'Clarify urgency safely' },
      { phase: 'Discover', action: 'Searches symptoms and services', feeling: 'Overloaded', opportunity: 'Translate needs to options' },
      { phase: 'Compare', action: 'Checks coverage, access, and timing', feeling: 'Cautious', opportunity: 'Surface decision criteria' },
      { phase: 'Book', action: 'Selects a time and completes intake', feeling: 'Relieved', opportunity: 'Reduce repetition' },
      { phase: 'Prepare', action: 'Plans for the visit', feeling: 'Focused', opportunity: 'Create a clear checklist' },
    ],
    reframe: 'The problem was not “improving provider search.” It was helping people make a safe, informed care decision with incomplete knowledge.',
    hmws: ['How might we begin with a person’s need rather than clinical taxonomy?', 'How might we show the few details that create confidence before booking?', 'How might we reuse information without taking control away?'],
    principles: [
      { title: 'Guide, don’t diagnose', detail: 'Offer orientation and safe next steps without pretending the interface replaces clinical judgment.' },
      { title: 'Confidence before commitment', detail: 'Reveal coverage, access, location, and availability before asking users to book.' },
      { title: 'Plain language by default', detail: 'Translate system language into terms people recognize.' },
      { title: 'Remember with permission', detail: 'Reduce repeat entry while keeping people in control of sensitive data.' },
    ],
    flow: ['Describe need', 'Set practical constraints', 'Compare care options', 'Confirm coverage', 'Choose time', 'Prepare for visit'],
    iteration: { before: 'Version 1 asked users to choose a specialty before showing providers.', failed: '7 of 10 test participants guessed or backtracked; the taxonomy created false confidence.', after: 'Version 2 began with symptoms or goals, then explained why each care option matched.' },
    testing: [
      { task: 'Find appropriate care', before: '58%', after: '82%', issue: 'Specialty-first language caused guessing.', severity: 'High', change: 'Added guided need selection and plain-language rationale.' },
      { task: 'Verify insurance', before: '64%', after: '91%', issue: 'Coverage status looked generic.', severity: 'High', change: 'Added plan name, verification state, and explanation.' },
      { task: 'Prepare for visit', before: '71%', after: '89%', issue: 'Checklist was hidden after confirmation.', severity: 'Medium', change: 'Made preparation a persistent next step.' },
    ],
    accessibility: ['Semantic step and heading structure', 'Keyboard-operable comparison controls', 'Status text beyond color', '44px minimum targets', 'Inline errors tied to fields', 'Reduced-motion transitions'],
    outcomes: [{ value: '41%', label: 'faster provider discovery', sample: true }, { value: '32%', label: 'less booking abandonment', sample: true }, { value: '+24%', label: 'task success', sample: true }, { value: '+18', label: 'usability score points', sample: true }],
    reflection: { worked: 'Organizing around decisions, not departments, gave the team a durable product model.', change: 'I would involve more people with cognitive disabilities earlier.', learned: 'Availability and coverage were not metadata; they were core interaction design.', next: 'Test urgent-care guidance in low-connectivity and multilingual contexts.' },
  },
  {
    slug: 'northstar', index: '02', title: 'Northstar', subtitle: 'A design system built to align decisions—not just components.',
    description: 'An enterprise system connecting shared foundations, accessible coded components, documentation, and a contribution model across product teams.',
    category: 'Design systems', role: 'UX Design Engineer', timeline: '16 weeks', industry: 'Enterprise software', team: 'Design systems lead, 3 engineers, 8 product teams', tools: ['Figma', 'Storybook', 'React'],
    services: ['Interface audit', 'Token architecture', 'Component design', 'Governance'], accent: '#89b7fb',
    challenge: 'Teams shipped visually similar but behaviorally inconsistent components, slowing delivery and creating accessibility debt.',
    businessContext: 'Rapid product growth produced 312 interface variations, 47 button styles, 18 input variants, and unclear ownership.', audience: 'Designers and engineers building a connected suite of enterprise products.',
    researchQuestions: ['Which inconsistencies create the most user and delivery cost?', 'Where do Figma and code diverge?', 'What contribution model will teams actually use?'],
    research: [
      { method: 'Interface inventory', detail: '312 patterns across five products', why: 'Quantify fragmentation and prioritize by reach.' },
      { method: 'Workflow interviews', detail: '18 designers and engineers', why: 'Understand why teams bypass existing patterns.' },
      { method: 'Accessibility audit', detail: 'Core inputs, navigation, overlays, and feedback', why: 'Define non-negotiable behavior.' },
      { method: 'Pilot program', detail: 'Two product squads over three sprints', why: 'Test adoption in real delivery conditions.' },
    ],
    findings: [
      { title: 'Variants hid behavioral drift', evidence: 'Inputs shared appearance but differed in errors, focus, and keyboard support.', implication: 'Document anatomy, behavior, and state—not just pixels.' },
      { title: 'Discovery was the adoption barrier', evidence: 'Teams rebuilt components they could not quickly find or evaluate.', implication: 'Organize docs around product tasks and decision guidance.' },
      { title: 'Contribution needed a service level', evidence: 'Unclear review timing pushed teams to work around the system.', implication: 'Publish a small, time-bound contribution path.' },
    ],
    segments: [
      { name: 'Product designer', behavior: 'Composes flows under deadline.', need: 'Clear usage guidance and complete states.' },
      { name: 'Feature engineer', behavior: 'Evaluates APIs and edge cases.', need: 'Stable contracts and accessible defaults.' },
      { name: 'System contributor', behavior: 'Extends patterns across products.', need: 'Ownership, review criteria, and release visibility.' },
    ],
    journey: [
      { phase: 'Identify', action: 'Finds a product need', feeling: 'Urgent', opportunity: 'Task-oriented search' },
      { phase: 'Evaluate', action: 'Checks fit and states', feeling: 'Skeptical', opportunity: 'Usage decision guide' },
      { phase: 'Implement', action: 'Applies design and code', feeling: 'Focused', opportunity: 'Matched properties and APIs' },
      { phase: 'Validate', action: 'Tests behavior and access', feeling: 'Confident', opportunity: 'Built-in checks' },
      { phase: 'Contribute', action: 'Proposes an extension', feeling: 'Supported', opportunity: 'Visible review path' },
    ],
    reframe: 'The system’s primary product was not the component library. It was a reliable decision-making and contribution workflow.',
    hmws: ['How might we make the correct accessible pattern the fastest choice?', 'How might we reveal when not to use a component?', 'How might contribution feel predictable to busy teams?'],
    principles: [{ title: 'Behavior is the contract', detail: 'Accessibility and interaction rules travel with every component.' }, { title: 'Decisions over decoration', detail: 'Documentation explains when, why, and what to avoid.' }, { title: 'One model, two tools', detail: 'Figma properties map intentionally to coded APIs.' }, { title: 'Governance is a product', detail: 'Contribution has users, latency, and success measures.' }],
    flow: ['Identify need', 'Find pattern', 'Evaluate guidance', 'Implement', 'Validate', 'Contribute improvement'],
    iteration: { before: 'The first documentation model mirrored component categories.', failed: 'Pilot teams still searched by the task they were solving and missed relevant guidance.', after: 'Navigation shifted to task-led entry points with component-level reference beneath them.' },
    testing: [
      { task: 'Select the right input', before: '62%', after: '92%', issue: 'Labels described components, not use cases.', severity: 'High', change: 'Added decision trees and “use when” guidance.' },
      { task: 'Implement error state', before: '54%', after: '88%', issue: 'Design and code states were mismatched.', severity: 'High', change: 'Aligned properties, examples, and acceptance criteria.' },
      { task: 'Submit contribution', before: '46%', after: '81%', issue: 'Ownership and timing were unclear.', severity: 'Medium', change: 'Published roles, checkpoints, and response targets.' },
    ],
    accessibility: ['WCAG 2.2 AA acceptance criteria', 'Forced-colors support', 'Focus and keyboard contracts', 'Screen reader usage notes', 'Motion-safe defaults', 'Automated and manual test matrix'],
    outcomes: [{ value: '34%', label: 'faster handoff', sample: true }, { value: '52%', label: 'fewer duplicate components', sample: true }, { value: '8/8', label: 'pilot teams adopted', sample: true }, { value: '63%', label: 'fewer core WCAG issues', sample: true }],
    reflection: { worked: 'Treating documentation and governance as product surfaces improved adoption.', change: 'I would establish contribution analytics before the pilot.', learned: 'System trust is earned through predictable behavior and response time.', next: 'Measure upgrade effort and expand content design standards.' },
  },
  {
    slug: 'orbit-ai', index: '03', title: 'Orbit AI', subtitle: 'An AI workspace designed around provenance, control, and recovery.',
    description: 'A source-aware workspace that turns unstructured information into editable project knowledge without hiding how the output was produced.',
    category: 'AI productivity', role: 'Senior Product Designer', timeline: '14 weeks', industry: 'Knowledge work', team: 'Product, research, ML, and 3 engineers', tools: ['Figma', 'React', 'Prototyping'],
    services: ['Contextual inquiry', 'Product modeling', 'AI interaction design', 'Prototype testing'], accent: '#3382f9',
    challenge: 'Useful AI answers disappeared into chats, sources were unclear, and users could not safely recover from unpredictable actions.',
    businessContext: 'The concept served teams synthesizing research, planning work, and creating documents from distributed sources.', audience: 'Researchers, product teams, and operations leads working across shared source material.',
    researchQuestions: ['What makes AI output trustworthy enough to reuse?', 'Which actions require confirmation or recovery?', 'How should generated work persist beyond a conversation?'],
    research: [
      { method: 'Contextual inquiry', detail: 'Eight knowledge workers completing live synthesis tasks', why: 'See workarounds that interviews miss.' },
      { method: 'Workflow mapping', detail: 'Inputs, transformations, approvals, and outputs', why: 'Model AI as part of a broader system.' },
      { method: 'Trust interviews', detail: '12 frequent and occasional AI users', why: 'Separate novelty from dependable value.' },
      { method: 'Prototype testing', detail: 'Three interaction models across two rounds', why: 'Compare comprehension, control, and recovery.' },
    ],
    findings: [
      { title: 'Provenance supports editing', evidence: 'People checked sources to decide what to keep, not only to verify truth.', implication: 'Keep source context one action away from each claim.' },
      { title: 'Chat is a moment, not a home', evidence: 'Useful outputs were copied into documents immediately.', implication: 'Make durable, editable output a first-class object.' },
      { title: 'Recovery creates trust', evidence: 'Undo and version history mattered more than expressive AI personality.', implication: 'Design human confirmation and reversible actions.' },
    ],
    segments: [
      { name: 'Evidence-led synthesizer', behavior: 'Traces claims back to sources.', need: 'Fast provenance and editable structure.' },
      { name: 'Repeat-work automator', behavior: 'Runs recurring transformations.', need: 'Reusable instructions and predictable outputs.' },
      { name: 'Cautious collaborator', behavior: 'Reviews before sharing or changing work.', need: 'Clear confidence, confirmation, and history.' },
    ],
    journey: [
      { phase: 'Gather', action: 'Adds project sources', feeling: 'Scattered', opportunity: 'Show coverage and gaps' },
      { phase: 'Direct', action: 'Chooses a task and instruction', feeling: 'Hopeful', opportunity: 'Offer reusable patterns' },
      { phase: 'Review', action: 'Checks output and citations', feeling: 'Skeptical', opportunity: 'Preview provenance inline' },
      { phase: 'Edit', action: 'Refines structure and claims', feeling: 'In control', opportunity: 'Preserve human edits' },
      { phase: 'Reuse', action: 'Shares or reruns the workflow', feeling: 'Efficient', opportunity: 'Version the recipe' },
    ],
    reframe: 'The opportunity was not a smarter chat box. It was an inspectable work system connecting sources, tasks, AI actions, and durable output.',
    hmws: ['How might every claim carry useful source context?', 'How might generated work become a stable, editable artifact?', 'How might users preview and reverse consequential actions?'],
    principles: [{ title: 'Show the chain', detail: 'Connect source, instruction, action, and output.' }, { title: 'Editability is agency', detail: 'Human changes remain visible and protected.' }, { title: 'Consequences need consent', detail: 'Destructive or external actions require clear confirmation.' }, { title: 'Recovery over reassurance', detail: 'History and undo build more trust than confident language.' }],
    flow: ['Create workspace', 'Connect sources', 'Choose task', 'Review plan', 'Inspect output', 'Edit and publish'],
    iteration: { before: 'Version 1 showed citations in a separate source drawer.', failed: 'Participants overlooked provenance during review and opened the drawer only after prompting.', after: 'Version 2 attached citation previews directly to claims, with deeper source context on demand.' },
    testing: [
      { task: 'Verify a generated claim', before: '61%', after: '90%', issue: 'Sources were detached from output.', severity: 'High', change: 'Added inline citation previews and exact source excerpts.' },
      { task: 'Recover earlier output', before: '55%', after: '87%', issue: 'History was conversation-centric.', severity: 'High', change: 'Added artifact-level version history and restore.' },
      { task: 'Reuse an instruction', before: '48%', after: '82%', issue: 'Prompts had no durable home.', severity: 'Medium', change: 'Created named, editable instruction recipes.' },
    ],
    accessibility: ['Live-region boundaries for streaming updates', 'Pause and stop controls', 'Source previews reachable by keyboard', 'Non-color confidence language', 'Visible change history', 'No forced motion during generation'],
    outcomes: [{ value: '+28%', label: 'task completion', sample: true }, { value: '+21%', label: 'output trust', sample: true }, { value: '−37%', label: 'repeat workflow time', sample: true }, { value: '90%', label: 'claim verification success', sample: true }],
    reflection: { worked: 'The source-to-output model made AI behavior discussable across design and engineering.', change: 'I would test more adversarial and ambiguous source sets.', learned: 'Trust came from legibility and recovery, not conversational polish.', next: 'Study shared ownership when several people edit instructions and outputs.' },
  },
  {
    slug: 'atlas-finance', index: '04', title: 'Atlas Finance', subtitle: 'Financial information reframed as understandable next decisions.',
    description: 'A personal finance experience that starts with plain-language insight, then lets people progressively inspect the evidence behind it.',
    category: 'Personal finance', role: 'Product Designer', timeline: '10 weeks', industry: 'Fintech', team: 'Product manager, data analyst, 2 engineers', tools: ['Figma', 'Dovetail', 'ProtoPie'],
    services: ['Diary study', 'Information hierarchy', 'Data visualization', 'Concept testing'], accent: '#6ca5fb',
    challenge: 'Most tools displayed transaction totals without explaining what changed, what mattered, or what action was realistic.',
    businessContext: 'A sample financial clarity product explored how monthly activity could support better decisions without judgment or overload.', audience: 'People with variable income, emerging financial habits, and limited time for detailed budgeting.',
    researchQuestions: ['What questions do people bring to financial dashboards?', 'Which explanations build or reduce trust?', 'How much detail is useful before it becomes noise?'],
    research: [{ method: 'Financial diary study', detail: '10 participants over three weeks', why: 'Capture decisions in context, not from recall.' }, { method: 'Customer interviews', detail: '14 varied budgeting behaviors', why: 'Understand language, goals, and avoidance.' }, { method: 'Competitive analysis', detail: 'Seven finance products', why: 'Map conventions and trust gaps.' }, { method: 'Concept testing', detail: 'Progressive disclosure prototypes', why: 'Calibrate depth and terminology.' }],
    findings: [{ title: 'People wanted explanations', evidence: '“Dining: $642” required too much interpretation to be useful.', implication: 'Lead with what changed and why it may matter.' }, { title: 'Tone affected trust', evidence: 'Judgmental alerts were dismissed even when accurate.', implication: 'Use neutral language and user-defined goals.' }, { title: 'Evidence should stay available', evidence: 'Participants trusted summaries more when transactions were easy to inspect.', implication: 'Pair concise insight with transparent supporting detail.' }],
    segments: [{ name: 'Quick checker', behavior: 'Scans for anything needing attention.', need: 'Priority and reassurance.' }, { name: 'Goal planner', behavior: 'Compares current choices with a target.', need: 'Forecasts and tradeoffs.' }, { name: 'Detail verifier', behavior: 'Audits categories and transactions.', need: 'Traceable evidence and corrections.' }],
    journey: [{ phase: 'Orient', action: 'Checks current position', feeling: 'Guarded', opportunity: 'Lead with what changed' }, { phase: 'Interpret', action: 'Opens important insight', feeling: 'Curious', opportunity: 'Explain cause and confidence' }, { phase: 'Inspect', action: 'Reviews supporting activity', feeling: 'Analytical', opportunity: 'Make data traceable' }, { phase: 'Decide', action: 'Sets or changes a goal', feeling: 'Capable', opportunity: 'Show tradeoffs' }, { phase: 'Monitor', action: 'Returns after new activity', feeling: 'Aware', opportunity: 'Keep alerts meaningful' }],
    reframe: 'The dashboard was not a reporting surface; it was a sequence of questions that helped people decide what deserved attention.',
    hmws: ['How might we lead with meaning before data?', 'How might evidence remain inspectable without overwhelming the overview?', 'How might alerts inform without judging?'],
    principles: [{ title: 'Answer first', detail: 'State the meaningful change before showing the chart.' }, { title: 'Evidence on demand', detail: 'Let users inspect calculation and transactions.' }, { title: 'Neutral, not passive', detail: 'Be direct without moralizing spending.' }, { title: 'Goals shape relevance', detail: 'Prioritize insight using intent the user controls.' }],
    flow: ['Open overview', 'Scan priority insight', 'Inspect explanation', 'Review transactions', 'Choose response', 'Monitor progress'],
    iteration: { before: 'Version 1 opened with six equally weighted charts.', failed: 'Participants could describe the data but not identify what required action.', after: 'Version 2 prioritized three plain-language insights with optional supporting charts.' },
    testing: [{ task: 'Explain monthly change', before: '57%', after: '88%', issue: 'Charts lacked interpretation.', severity: 'High', change: 'Added plain-language insight and contributing factors.' }, { task: 'Verify an insight', before: '69%', after: '93%', issue: 'Transaction evidence was buried.', severity: 'Medium', change: 'Added inline “Why this changed” detail.' }, { task: 'Adjust a goal', before: '63%', after: '84%', issue: 'Forecast impact was unclear.', severity: 'Medium', change: 'Previewed tradeoffs before saving.' }],
    accessibility: ['Text equivalents for every chart', 'Data tables for detailed values', 'User-controlled number formatting', 'No color-only trend meaning', 'Plain-language financial terms', 'Large, persistent disclosure controls'],
    outcomes: [{ value: '+39%', label: 'insight comprehension', sample: true }, { value: '+26%', label: 'overview completion', sample: true }, { value: '+31%', label: 'alert interaction', sample: true }],
    reflection: { worked: 'Progressive disclosure supported both quick scanning and verification.', change: 'I would recruit more households managing shared finances.', learned: 'Financial clarity is as much about tone as information architecture.', next: 'Test irregular-income forecasting across longer cycles.' },
  },
  {
    slug: 'giveforward', index: '05', title: 'GiveForward', subtitle: 'A shorter donation flow that keeps meaning and trust intact.',
    description: 'A mobile-first donation experience clarifying impact, recurring support, validation, and confirmation without making generosity feel transactional.',
    category: 'Nonprofit giving', role: 'UX Designer', timeline: '8 weeks', industry: 'Civic & nonprofit', team: 'Nonprofit director, fundraiser, 2 engineers', tools: ['Figma', 'Analytics', 'Usability testing'],
    services: ['Analytics review', 'Form design', 'Mobile UX', 'Accessibility'], accent: '#bfd8fd',
    challenge: 'Long mobile forms, vague impact, and ambiguous recurring controls caused abandonment and distrust.', businessContext: 'A sample shared donation platform needed a reusable flow for organizations with different programs and supporter relationships.', audience: 'First-time and returning donors contributing on mobile and desktop.',
    researchQuestions: ['Which details create confidence before payment?', 'Where does mobile abandonment cluster?', 'How should recurring support be explained?'],
    research: [{ method: 'Donor interviews', detail: '11 recent online donors', why: 'Understand motivation and trust.' }, { method: 'Stakeholder interviews', detail: 'Six fundraising and program leads', why: 'Connect giving choices with real impact models.' }, { method: 'Funnel analysis', detail: 'Field and step abandonment', why: 'Locate measurable friction.' }, { method: 'Accessibility review', detail: 'Forms, errors, payment, confirmation', why: 'Address barriers in the critical path.' }],
    findings: [{ title: 'Impact precedes amount', evidence: 'Donors wanted to know what a contribution enabled.', implication: 'Connect selectable amounts to transparent examples.' }, { title: 'Recurring ambiguity erodes trust', evidence: 'Preselected or weakly explained recurring options caused hesitation.', implication: 'Use explicit, balanced controls with clear timing.' }, { title: 'Confirmation continues the relationship', evidence: 'A receipt alone felt abrupt and impersonal.', implication: 'Show impact, receipt status, and next steps after payment.' }],
    segments: [{ name: 'Moment-driven donor', behavior: 'Acts quickly from a campaign link.', need: 'Mobile speed and immediate trust.' }, { name: 'Impact evaluator', behavior: 'Compares programs before giving.', need: 'Transparent allocation.' }, { name: 'Ongoing supporter', behavior: 'Manages repeated contributions.', need: 'Clear cadence and self-service control.' }],
    journey: [{ phase: 'Connect', action: 'Reads the need', feeling: 'Motivated', opportunity: 'Make impact specific' }, { phase: 'Choose', action: 'Selects impact and amount', feeling: 'Intentional', opportunity: 'Explain allocation' }, { phase: 'Give', action: 'Enters payment details', feeling: 'Cautious', opportunity: 'Reduce fields' }, { phase: 'Confirm', action: 'Checks receipt and result', feeling: 'Reassured', opportunity: 'Close the loop' }, { phase: 'Return', action: 'Reviews or manages giving', feeling: 'Committed', opportunity: 'Make control easy' }],
    reframe: 'The donation flow had to reduce effort while increasing—rather than compressing—the moments that establish trust.', hmws: ['How might impact remain concrete at every amount?', 'How might recurring giving be equally visible and fully voluntary?', 'How might confirmation show what happens next?'],
    principles: [{ title: 'Fewer asks, stronger answers', detail: 'Request only what the gift requires.' }, { title: 'Clarity is consent', detail: 'Cadence, fees, and allocation are explicit.' }, { title: 'Impact stays visible', detail: 'Meaning continues through payment and confirmation.' }, { title: 'Errors preserve momentum', detail: 'Validation explains how to recover without clearing work.' }],
    flow: ['Choose impact', 'Set amount', 'Choose cadence', 'Pay securely', 'Review confirmation', 'Manage donation'],
    iteration: { before: 'Version 1 combined impact, amount, cadence, identity, and payment in one long form.', failed: 'Mobile users lost orientation and interpreted the recurring toggle as preselected.', after: 'Version 2 used three short, labeled steps and balanced cadence cards with a persistent summary.' },
    testing: [{ task: 'Make one-time donation', before: '68%', after: '93%', issue: 'Long form increased omissions.', severity: 'High', change: 'Grouped essential fields into short steps.' }, { task: 'Choose donation cadence', before: '72%', after: '96%', issue: 'Toggle meaning was unclear.', severity: 'High', change: 'Replaced toggle with explicit one-time and monthly choices.' }, { task: 'Find receipt', before: '79%', after: '95%', issue: 'Confirmation emphasized sharing over receipt.', severity: 'Low', change: 'Prioritized receipt, impact, and account controls.' }],
    accessibility: ['Persistent field labels', 'Error summary with focus movement', 'Autocomplete and input modes', 'Wallet payment option', 'No preselected recurring donation', 'Readable receipt and confirmation structure'],
    outcomes: [{ value: '+22%', label: 'completed donations', sample: true }, { value: '−35%', label: 'mobile abandonment', sample: true }, { value: '+19%', label: 'recurring contributions', sample: true }],
    reflection: { worked: 'Separating meaning from data entry kept the flow brief without making it cold.', change: 'I would test with more assistive-payment workflows.', learned: 'A trustworthy choice is often more valuable than a clever default.', next: 'Explore saved payment while keeping guest giving effortless.' },
  },
  {
    slug: 'movecity', index: '06', title: 'MoveCity', subtitle: 'Trip planning for the route people can actually take.',
    description: 'A multimodal planner balancing time with accessibility, transfers, walking, reliability, weather, and personal preference.',
    category: 'Urban mobility', role: 'UX Researcher & Product Designer', timeline: '11 weeks', industry: 'Transportation', team: 'Transit planner, product manager, 3 engineers', tools: ['Figma', 'Maps', 'Field research'],
    services: ['Contextual research', 'Service blueprint', 'Route comparison', 'Inclusive design'], accent: '#4e92fa',
    challenge: 'Route planners optimized for theoretical speed while hiding the real-world conditions that determine whether a trip works.', businessContext: 'A sample urban mobility service combined train, bus, walking, cycling, and rideshare options during frequent service disruption.', audience: 'Daily commuters, occasional riders, and people with mobility, sensory, or energy constraints.',
    researchQuestions: ['How do riders evaluate a route beyond duration?', 'What creates or destroys transfer confidence?', 'Which accessibility details need real-time status?'],
    research: [{ method: 'Contextual observation', detail: '14 trips across modes and times', why: 'See real decisions under time pressure.' }, { method: 'Commuter interviews', detail: '16 frequent and occasional riders', why: 'Compare preferences and routines.' }, { method: 'Accessibility interviews', detail: 'Eight riders with varied access needs', why: 'Ground route criteria in lived experience.' }, { method: 'Diary study', detail: 'One week of disrupted journeys', why: 'Understand adaptation over time.' }],
    findings: [{ title: 'Fastest is conditional', evidence: 'Riders rejected marginally faster routes with risky transfers or long walks.', implication: 'Let people rank the conditions that make a route usable.' }, { title: 'Transfer confidence is contextual', evidence: 'A six-minute transfer could feel safe or impossible depending on station details.', implication: 'Explain distance, level change, and historical reliability.' }, { title: 'Access status must be current', evidence: 'Static elevator labels created false assurance during outages.', implication: 'Pair accessible routes with real-time facility status.' }],
    segments: [{ name: 'Routine optimizer', behavior: 'Knows the network and watches disruption.', need: 'Fast comparison with reliability.' }, { name: 'Energy manager', behavior: 'Balances duration with walking and crowding.', need: 'Personalized physical demand.' }, { name: 'Access-dependent rider', behavior: 'Requires specific station and vehicle conditions.', need: 'Verified accessible continuity.' }],
    journey: [{ phase: 'Plan', action: 'Sets destination and timing', feeling: 'Neutral', opportunity: 'Remember preferences' }, { phase: 'Compare', action: 'Balances route conditions', feeling: 'Evaluative', opportunity: 'Show meaningful tradeoffs' }, { phase: 'Commit', action: 'Starts selected route', feeling: 'Prepared', opportunity: 'Explain confidence' }, { phase: 'Transfer', action: 'Navigates between modes', feeling: 'Alert', opportunity: 'Use contextual guidance' }, { phase: 'Adapt', action: 'Responds to disruption', feeling: 'Stressed', opportunity: 'Preserve constraints in reroute' }],
    reframe: 'The goal was not to calculate the shortest path. It was to help each rider identify and maintain a route that fit their real constraints.', hmws: ['How might route comparison reveal the tradeoffs riders already make?', 'How might we communicate transfer confidence before travel?', 'How might rerouting preserve accessibility and walking preferences?'],
    principles: [{ title: 'Appropriate beats fastest', detail: 'Time is one route quality among several.' }, { title: 'Confidence needs evidence', detail: 'Explain transfer, reliability, and access conditions.' }, { title: 'Preferences persist', detail: 'Reroutes respect the original constraints.' }, { title: 'Disruption is a core state', detail: 'Design degraded service, not only the ideal trip.' }],
    flow: ['Set destination', 'Choose route priorities', 'Compare tradeoffs', 'Review transfer details', 'Start guidance', 'Adapt to disruption'],
    iteration: { before: 'Version 1 used a single weighted “best route” recommendation.', failed: 'Participants distrusted the hidden calculation and could not compare the tradeoffs.', after: 'Version 2 showed three labeled routes—fastest, most reliable, and best match—with adjustable priorities.' },
    testing: [{ task: 'Choose preferred route', before: '66%', after: '91%', issue: 'Recommendation logic was opaque.', severity: 'High', change: 'Added route rationale and side-by-side tradeoffs.' }, { task: 'Assess transfer', before: '58%', after: '86%', issue: 'Time lacked station context.', severity: 'High', change: 'Added walking distance, levels, and reliability.' }, { task: 'Find accessible reroute', before: '52%', after: '84%', issue: 'Reroute reset constraints.', severity: 'High', change: 'Persisted accessibility and walking preferences.' }],
    accessibility: ['Wheelchair-continuous route validation', 'Elevator outage status', 'Step-free transfer detail', 'Screen-reader-friendly route summaries', 'Non-map list equivalent', 'Low-motion and high-contrast guidance'],
    outcomes: [{ value: '−29%', label: 'route selection time', sample: true }, { value: '+44%', label: 'accessible route discovery', sample: true }, { value: '−17%', label: 'missed transfers', sample: true }],
    reflection: { worked: 'Making route logic visible improved both trust and decision speed.', change: 'I would add more late-night and low-connectivity field sessions.', learned: 'Accessibility information becomes harmful when it is vague or stale.', next: 'Test crowding and weather preferences without making comparison too dense.' },
  },
];

export const getProject = (slug: string) => projects.find((project) => project.slug === slug);

export const capabilities = [
  { title: 'UX Research', detail: 'Interviews, contextual inquiry, usability testing, competitive analysis, synthesis' },
  { title: 'Product Design', detail: 'Product framing, information architecture, interaction design, prototyping' },
  { title: 'UI & Systems', detail: 'Visual hierarchy, responsive interfaces, components, design systems' },
  { title: 'Accessibility', detail: 'WCAG, semantic structure, keyboard behavior, inclusive design' },
  { title: 'UX Engineering', detail: 'HTML, CSS, TypeScript, React, front-end prototyping' },
];

export const processSteps = ['Understand', 'Frame', 'Explore', 'Prototype', 'Validate', 'Refine', 'Ship', 'Learn'];
