import { NeuroModeWalkthrough } from './neuromode-walkthrough';
import Image from 'next/image';
import type { ReactNode } from 'react';
import type { CaseStudy } from '@/data/projects';
import { NeuroModeCover } from './neuromode-cover';
import { CaseStudyTOC, VisualLightbox } from './case-study-tools';
import { ProjectMedia } from './project-media';
import { ArrowIcon } from './arrow-icon';
const sections = [
  { id: 'overview', label: 'At a glance' },
  { id: 'research', label: 'Research & framing' },
  { id: 'structure', label: 'Structure & flows' },
  { id: 'wireframes', label: 'Reconstruct & refine' },
  { id: 'decisions', label: 'Design decisions' },
  { id: 'system', label: 'Visual system' },
  { id: 'experience', label: 'Final experience' },
  { id: 'evaluation', label: 'Evaluation & iteration' },
  { id: 'outcome', label: 'Outcome & reflection' },
];
function Chapter({
  id,
  kicker,
  title,
  children,
}: {
  id: string;
  kicker: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="case-section neuro-chapter">
      <p className="eyebrow">{kicker}</p>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
function Screen({
  name,
  caption,
  width = 1206,
  height = 2622,
}: {
  name: string;
  caption: string;
  width?: number;
  height?: number;
}) {
  return (
    <figure className="neuro-screen">
      <VisualLightbox title={caption}>
        <Image
          src={`/projects/neuromode/screens/${name}.webp`}
          width={width}
          height={height}
          alt={caption}
          loading="lazy"
        />
      </VisualLightbox>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}
function Board({ name, title }: { name: string; title: string }) {
  return (
    <figure className="neuro-board">
      <VisualLightbox title={title}>
        <Image
          src={`/projects/neuromode/artifacts/${name}.svg`}
          width={1600}
          height={1100}
          alt={title}
          loading="lazy"
        />
      </VisualLightbox>
      <figcaption>{title} Select to enlarge.</figcaption>
    </figure>
  );
}
export function NeuroModeCaseStudy({
  nextProject,
}: {
  nextProject: CaseStudy;
}) {
  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="narrative-page neuro-study"
    >
      <header className="case-hero shell">
        <a href="/work" className="text-link">
          ← All work
        </a>
        <p className="eyebrow">
          01 / FLAGSHIP CASE STUDY · INDEPENDENT PRODUCT
        </p>
        <h1>NeuroMode</h1>
        <p className="narrative-deck">Support for the next moment.</p>
        <p className="section-lede">
          A native iOS experience for starting everyday activities, finding
          sensory space, and returning after interruptions.
        </p>
        <dl className="case-metadata">
          <div>
            <dt>Role</dt>
            <dd>Product design & implementation</dd>
          </div>
          <div>
            <dt>Platform</dt>
            <dd>iPhone & iPad · SwiftUI</dd>
          </div>
          <div>
            <dt>Evidence dates</dt>
            <dd>September 23–25, 2026</dd>
          </div>
          <div>
            <dt>Context</dt>
            <dd>Independent · retrospective UX analysis</dd>
          </div>
        </dl>
        <div className="case-project-links">
          <a className="button button-primary" href="#overview">
            Read the overview <ArrowIcon down />
          </a>
          <a className="text-link" href="#walkthrough">
            Watch the 65-second walkthrough <ArrowIcon />
          </a>
          <a className="text-link" href="#wireframes">
            Explore the wireframe process <ArrowIcon />
          </a>
        </div>
        <NeuroModeCover />
      </header>
      <div className="case-layout shell">
        <CaseStudyTOC sections={sections} />
        <div className="case-body">
          <Chapter
            id="overview"
            kicker="01 / THE 30-SECOND READ"
            title="Help before a plan to maintain."
          >
            <p className="section-lede">
              Naming a task, choosing a priority, estimating time, and
              remembering where you stopped are separate demands. NeuroMode asks
              whether support can be useful before someone has the energy to
              organize all of them.
            </p>
            <dl className="neuro-summary">
              <div>
                <dt>For whom</dt>
                <dd>
                  People experiencing friction with initiation, attention,
                  transitions, or sensory comfort—including neurodivergent
                  people. No diagnosis or disclosure is required.
                </dd>
              </div>
              <div>
                <dt>The response</dt>
                <dd>
                  Need-based entry, editable next steps, silent sensory
                  defaults, and saved context for returning.
                </dd>
              </div>
              <div>
                <dt>My contribution</dt>
                <dd>
                  An independent product-design and SwiftUI implementation
                  project, brought into an explicit UX model through structural
                  analysis, reconstructed wireframes, accessibility review, and
                  a design handoff specification.
                </dd>
              </div>
              <div>
                <dt>The outcome</dt>
                <dd>
                  A working native product with tested support and recovery
                  paths. Participant usability testing is the next step.
                </dd>
              </div>
            </dl>
            <div className="neuro-thesis">
              <p className="eyebrow">THE DESIGN QUESTION</p>
              <p>
                How might support make the next action manageable without making
                setup, sensory demands, or recovery another task?
              </p>
            </div>
            <p className="caption">
              September 23–25 marks the documented development and evaluation
              milestones. NeuroMode provides everyday support; it is not a
              diagnostic or treatment product.
            </p>
          </Chapter>
          <Chapter
            id="research"
            kicker="02 / RESEARCH & FRAMING"
            title="Separate what exists from what works."
          >
            <p>
              After building the product, I used desk research, comparative
              review, and a heuristic walkthrough to question its structure,
              navigation, and recovery paths.
            </p>
            <p className="neuro-evidence-note">
              This phase combined product review and secondary research.
              Interviews, surveys, and participant usability testing remain
              future work.
            </p>
            <div className="neuro-findings">
              {[
                [
                  '01',
                  'Help should precede self-description.',
                  'W3C cognitive-accessibility guidance emphasizes clear purpose and manageable paths; Today already exposes three immediate support actions.',
                  'Setup may itself add work.',
                  'Keep onboarding skippable and check-in optional. Test whether “start,” “focus,” and “less stimulation” are distinguishable.',
                ],
                [
                  '02',
                  'Returning is part of the task.',
                  'The implementation stores a concrete next step alongside focus-session state; memory support is a lens in the desk research.',
                  'Elapsed time alone cannot reconstruct intent.',
                  'Save the person’s wording and pause together. Evaluate whether that cue is sufficient when they return.',
                ],
                [
                  '03',
                  'Quiet is a choice, not one setting.',
                  'Quiet Room begins silently; sensory controls and comfort drafts are independent in the implementation.',
                  'An intervention intended to help can still impose stimulation.',
                  'Make audio and breathing explicit opt-ins; preview persistent preferences before applying them.',
                ],
              ].map(([n, title, evidence, insight, implication]) => (
                <article key={n}>
                  <span className="neuro-number">{n}</span>
                  <div>
                    <h3>{title}</h3>
                    <dl>
                      <div>
                        <dt>Evidence</dt>
                        <dd>{evidence}</dd>
                      </div>
                      <div>
                        <dt>Interpretation</dt>
                        <dd>{insight}</dd>
                      </div>
                      <div>
                        <dt>Design implication</dt>
                        <dd>{implication}</dd>
                      </div>
                    </dl>
                  </div>
                </article>
              ))}
            </div>
            <h3>Compare organizing models, not feature counts.</h3>
            <div className="neuro-comparison">
              {[
                [
                  'Apple Reminders',
                  'Lists, sections, and subtasks',
                  'Externalize and organize work.',
                ],
                [
                  'Structured',
                  'A visual day timeline',
                  'Place activities in time.',
                ],
                [
                  'Goblin Tools',
                  'Focused everyday tools',
                  'Choose a tool and judge its output.',
                ],
              ].map(([name, pattern, meaning]) => (
                <div key={name}>
                  <h4>{name}</h4>
                  <p>{pattern}</p>
                  <p className="caption">{meaning}</p>
                </div>
              ))}
            </div>
            <p>
              NeuroMode’s opportunity is a short route from a present need to an
              adjustable action. Local task templates favor predictable behavior
              over broad interpretation. The cost is limited suggestions that
              may not fit someone’s activity.
            </p>
            <p className="caption">
              The comparison draws on official product descriptions, rather than
              hands-on benchmarking.
            </p>
            <h3>Changing needs, rather than fixed personas.</h3>
            <ul className="neuro-needs">
              <li>
                <strong>A smaller entry point.</strong> “Start laundry” may
                still need a smaller, user-authored action.
              </li>
              <li>
                <strong>Fewer simultaneous demands.</strong> Reduce what is
                visible without hiding the way out.
              </li>
              <li>
                <strong>A reliable return.</strong> Keep the next action
                available across an interruption.
              </li>
              <li>
                <strong>Control over disclosure.</strong> Preview selected
                support statements before sharing.
              </li>
            </ul>
            <p className="caption">
              These are conceptual behavioral lenses and constructed scenarios,
              not validated audience segments or participant quotes.
            </p>
            <details className="evidence-details">
              <summary>Research references & scope</summary>
              <p>
                These references informed the review of cognitive load,
                navigation, and control. NeuroMode’s effectiveness still needs
                participant evaluation.
              </p>
              <ul>
                <li>
                  <a
                    href="https://www.w3.org/TR/coga-usable/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    W3C: Making Content Usable for People with Cognitive and
                    Learning Disabilities
                  </a>
                </li>
                <li>
                  <a
                    href="https://developer.apple.com/design/human-interface-guidelines/accessibility"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Apple: Accessibility guidance
                  </a>
                </li>
                <li>
                  <a
                    href="https://support.apple.com/en-au/119953"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Apple Reminders documentation
                  </a>
                </li>
                <li>
                  <a
                    href="https://structured.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Structured
                  </a>{' '}
                  ·{' '}
                  <a
                    href="https://goblin.tools/About"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Goblin Tools
                  </a>
                </li>
              </ul>
            </details>
          </Chapter>
          <Chapter
            id="structure"
            kicker="03 / INFORMATION ARCHITECTURE"
            title="Enter by need. Keep the tools behind it."
          >
            <p>
              Today offers immediate support; the other destinations organize
              deeper capabilities. Each tab has its own native navigation stack.
              Less stimulation replaces the tab shell with a quieter
              experience—it is not a sixth destination.
            </p>
            <ol
              className="neuro-nav-map"
              aria-label="Five primary app destinations"
            >
              {[
                ['Today', 'Immediate help'],
                ['Modes', 'Focus & sensory tools'],
                ['Plan', 'Now / Next / Later'],
                ['Support', 'Capture & reusable tools'],
                ['You', 'Preferences & data'],
              ].map(([a, b]) => (
                <li key={a}>
                  <strong>{a}</strong>
                  <span>{b}</span>
                </li>
              ))}
            </ol>
            <p className="caption">
              Trade-off: shared destinations are easier to reach from several
              contexts, but Modes and Support may be difficult to distinguish. A
              tree test should challenge that grouping.
            </p>
            <NeuroModeWalkthrough />
            <h3>One journey: start, leave, return.</h3>
            <ol className="neuro-flow">
              {[
                [
                  'Ask for help',
                  'Today → Help me start. Name an activity only when needed.',
                ],
                [
                  'Adjust the step',
                  'Make it smaller, choose a different step, or write your own.',
                ],
                [
                  'Focus',
                  'Carry the activity and current step into a timed or untimed session.',
                ],
                [
                  'Save and pause',
                  'Write the next action. Save it and preserve remaining time.',
                ],
                [
                  'Return',
                  'Open the saved session, read the cue, and resume deliberately.',
                ],
              ].map(([a, b], i) => (
                <li key={a}>
                  <span>{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <h4>{a}</h4>
                    <p>{b}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="neuro-thesis">
              <p>
                Preserving context is an interaction requirement, not just a
                persistence feature.
              </p>
            </div>
            <p className="caption">
              Constructed walkthrough of implemented behavior. A failed save
              keeps the focus sheet open; a return does not silently restart the
              paused timer.
            </p>
          </Chapter>
          <Chapter
            id="wireframes"
            kicker="04 / REVERSE-ENGINEERED WIREFRAMES"
            title="Take the interface apart. Make the reasoning visible."
          >
            <p className="section-lede">
              Reconstruction turns a working interface into something that can
              be questioned: what deserves attention, what can wait, and what
              must survive a change in state?
            </p>
            <ol className="neuro-process">
              <li>
                <strong>01 · Implemented product</strong>
                <span>Inspect views, navigation, and saved state.</span>
              </li>
              <li>
                <strong>02 · Structural analysis</strong>
                <span>Separate hierarchy, disclosure, and recovery.</span>
              </li>
              <li>
                <strong>03 · Reconstructed wireframes</strong>
                <span>Make the core screen relationships reviewable.</span>
              </li>
              <li>
                <strong>04 · Figma-ready handoff</strong>
                <span>Specify components, variants, and prototype edges.</span>
              </li>
            </ol>
            <p className="neuro-evidence-note">
              The wireframes were created after implementation. They are not
              original discovery sketches. The Figma specification is complete
              as a handoff document; a live Figma file and evaluated Figma
              prototype are not yet available.
            </p>
            <Board
              name="wireframes-low"
              title="Low-fidelity reconstruction: Today, Next Step, Focus, and Quiet Room."
            />
            <div className="neuro-two">
              <div>
                <h3>What the abstraction reveals</h3>
                <p>
                  Today introduces a need before an inventory. Next Step
                  elevates one action above a whole plan. Focus keeps the next
                  step near the save controls. Quiet Room moves optional
                  stimulation behind disclosure.
                </p>
              </div>
              <div>
                <h3>What it challenges</h3>
                <p>
                  Reducing visible content can also reduce discoverability. The
                  next evaluation should test whether people can locate
                  secondary actions and exits, not assume that fewer elements
                  mean less effort.
                </p>
              </div>
            </div>
            <Board
              name="wireframes-mid"
              title="Mid-fidelity reconstruction: real labels and annotated interaction states; schematic, not pixel-accurate."
            />
            <h3>From structure to a buildable design contract.</h3>
            <div className="neuro-spec">
              <div>
                <p className="eyebrow">PROPOSED FIGMA COMPONENT</p>
                <h4>Session / Focus / Paused</h4>
                <p>
                  Preserve the activity, user-written next step, and paused
                  state.
                </p>
              </div>
              <div>
                <p className="eyebrow">IMPLEMENTATION REFERENCE</p>
                <h4>FocusSession · FocusParkingView</h4>
                <p>
                  Saving and pausing are one action. Close the sheet only when
                  the save succeeds.
                </p>
              </div>
            </div>
            <p>
              The handoff specifies semantic color modes, Auto Layout recipes,
              native text styles, component variants, error states, and a
              start-and-return prototype path. Those contracts make future Figma
              refinement traceable to actual product behavior.
            </p>
            <a
              className="text-link"
              href="/projects/neuromode/evidence/figma-specification.md"
              download
            >
              Download the Figma build specification <ArrowIcon down />
            </a>
          </Chapter>
          <Chapter
            id="decisions"
            kicker="05 / EXPLORATION & TRADE-OFFS"
            title="Less demand. Without less control."
          >
            {[
              [
                '01',
                'A need, before a catalog.',
                'A full tool catalog exposes everything; a required check-in asks for explanation before help.',
                'Three direct Today actions with optional check-in.',
                'A shorter entry path, at the cost of overlap with the recommendation card. Terminology still needs validation.',
              ],
              [
                '02',
                'Time that can stay out of view.',
                'An always-visible countdown may add pressure; removing time entirely reduces choice.',
                'Timed or untimed focus, with countdown hidden by default.',
                'More control introduces more setup. Test whether hidden time makes transitions harder.',
              ],
              [
                '03',
                'Preview before preference.',
                'Automatic adaptation risks surprise; one global quiet switch bundles different needs.',
                'Separate sensory controls, a draft preview, Apply, and local Undo.',
                'Explicit effects improve inspectability, while additional settings create complexity. Undo is not permanent history.',
              ],
            ].map(([n, title, problem, decision, tradeoff]) => (
              <article className="reasoning-decision" key={n}>
                <p className="eyebrow">{n} / DESIGN DECISION</p>
                <h3>{title}</h3>
                <p>{problem}</p>
                <dl className="neuro-summary">
                  <div>
                    <dt>Implemented direction</dt>
                    <dd>{decision}</dd>
                  </div>
                  <div>
                    <dt>Trade-off to evaluate</dt>
                    <dd>{tradeoff}</dd>
                  </div>
                </dl>
              </article>
            ))}
            <p className="caption">
              These alternatives emerged during the retrospective review and are
              candidates for future testing.
            </p>
          </Chapter>
          <Chapter
            id="system"
            kicker="06 / VISUAL & INTERACTION SYSTEM"
            title="A quiet surface. An explicit contract."
          >
            <p>
              Warm neutral surfaces and sage actions establish the product’s
              identity. Semantic typography and native controls keep that
              identity responsive to appearance, text size, and familiar
              platform behavior.
            </p>
            <div className="neuro-swatches">
              {[
                ['Canvas', '#F7F5ED'],
                ['Surface', '#FEFBF6'],
                ['Action / light', '#305C52'],
                ['Action / dark', '#9ED1BD'],
              ].map(([n, c]) => (
                <div key={n}>
                  <span style={{ background: c }} />
                  <strong>{n}</strong>
                  <span>{c}</span>
                </div>
              ))}
            </div>
            <dl className="neuro-summary">
              <div>
                <dt>Typography</dt>
                <dd>
                  Native SF Pro text styles support Dynamic Type. Layouts expand
                  with the content so larger text remains readable without
                  clipping.
                </dd>
              </div>
              <div>
                <dt>Spacing & form</dt>
                <dd>
                  Shared cards use 22-point padding and a 24-point radius.
                  Internal spacing grows from 16 to 24 points in simpler
                  layouts.
                </dd>
              </div>
              <div>
                <dt>States</dt>
                <dd>
                  Applied versus draft, paused versus active, saved versus
                  failed. Labels and native semantics carry meaning alongside
                  color.
                </dd>
              </div>
              <div>
                <dt>Motion</dt>
                <dd>
                  System and in-app preferences can suppress animation. Quiet
                  Room does not require motion or sound to communicate its
                  state.
                </dd>
              </div>
            </dl>
            <p className="caption">
              Increased Contrast uses system surfaces. A dedicated high-contrast
              accent and a complete contrast review remain next steps.
            </p>
          </Chapter>
          <Chapter
            id="experience"
            kicker="07 / THE IMPLEMENTED EXPERIENCE"
            title="Different needs. The same right to choose."
          >
            <div className="neuro-experience-pair">
              <div>
                <p className="eyebrow">START / IMMEDIATE SUPPORT</p>
                <h3>The next action is easier to find.</h3>
                <p>
                  Today gives starting, focus, and less stimulation clear entry
                  points. At accessibility text sizes, useful actions take
                  priority over the greeting.
                </p>
                <p className="caption">
                  Retained dark-appearance capture. Selected simulator states
                  were reviewed; the complete accessibility matrix remains open.
                </p>
              </div>
              <Screen
                name="today-dark-verified"
                width={1170}
                height={2532}
                caption="Today in dark appearance: immediate support before deeper tools."
              />
            </div>
            <div className="neuro-experience-pair neuro-pair-reverse">
              <div>
                <p className="eyebrow">PAUSE / SENSORY SPACE</p>
                <h3>Nothing starts without a choice.</h3>
                <p>
                  Quiet Room starts silent. Breathing, animation, and audio are
                  separate opt-ins. Back and Finish stay visible while optional
                  comforts remain collapsed.
                </p>
                <p>
                  The unresolved question is whether Finish creates an
                  unnecessary extra exit step. A calm visual does not settle
                  that interaction question.
                </p>
              </div>
              <Screen
                name="quiet-room"
                caption="Quiet Room’s default state, with optional comforts collapsed."
              />
            </div>
            <div className="neuro-experience-pair">
              <div>
                <p className="eyebrow">COMMUNICATE / CHOSEN DISCLOSURE</p>
                <h3>Review the words before sharing them.</h3>
                <p>
                  Support cards let people choose statements, add their own
                  wording, and preview what will be shared. The design makes
                  disclosure an explicit action, rather than treating personal
                  needs as profile metadata.
                </p>
              </div>
              <Screen
                name="support-card-preview"
                caption="Support-card preview: selected statements remain visible before sharing."
              />
            </div>
            <h3>Recovery deserves a larger view.</h3>
            <p>
              Local-first storage removes account setup, but places
              responsibility on recovery. Backup validates a file before
              previewing replacement. Confirmation makes clear that restoration
              replaces current records and clears scheduled notifications and
              Live Activities; it does not merge them.
            </p>
            <div className="neuro-landscape">
              <Screen
                name="backup-ipad-landscape"
                width={1600}
                height={1051}
                caption="Retained iPad landscape backup interface: preview consequences before committing."
              />
            </div>
            <details className="evidence-details">
              <summary>
                Accessibility implementation & remaining validation
              </summary>
              <ul>
                <li>
                  Native labels, heading traits, and selected states support
                  nonvisual navigation. Human VoiceOver focus-order checks
                  remain pending.
                </li>
                <li>
                  Visible Move controls and menu actions supplement dragging.
                  Voice Control and Switch Control task completion remain
                  unverified.
                </li>
                <li>
                  Semantic text, scrollable layouts, and selected largest-text
                  simulator checks support text scaling. Every screen and sheet
                  still needs coverage.
                </li>
                <li>
                  Audio starts explicitly and stops on interruption or
                  backgrounding in documented checks. Physical-device comfort
                  and audio routing remain to be assessed.
                </li>
                <li>
                  Undo, paused sessions, and Recently Deleted make recovery part
                  of the product model; comprehension still requires
                  participants.
                </li>
              </ul>
            </details>
          </Chapter>
          <Chapter
            id="evaluation"
            kicker="08 / EVALUATION & ITERATION"
            title="The interface changed through verification."
          >
            <p>
              Integration testing and visual review exposed recovery and
              readability issues. The following refinements address those
              findings; participant testing remains the next evaluation phase.
            </p>
            <div className="neuro-iterations">
              {[
                [
                  'Recovery was fragmented',
                  'The earlier version lacked one place to find and recover saved items.',
                  'A searchable library, archive, and Recently Deleted were added. Restored activities return to Later.',
                  'Added between the first and second development milestones; usability evaluation is still planned.',
                ],
                [
                  'Import also deleted the item',
                  'Both automatic buttons in a shared-inbox row executed during integration testing.',
                  'Independent borderless button styling separates import and delete, keeping the imported note readable.',
                  'Verified through integration testing.',
                ],
                [
                  'Dark buttons lost contrast',
                  'White text on pale sage and weak secondary text were identified in visual/audit review.',
                  'Adaptive on-accent foreground and opaque semantic secondary text replaced those combinations.',
                  'Reviewed in dark appearance.',
                ],
              ].map(([title, observation, change, evidence]) => (
                <article key={title}>
                  <h3>{title}</h3>
                  <dl>
                    <div>
                      <dt>Observed issue</dt>
                      <dd>{observation}</dd>
                    </div>
                    <div>
                      <dt>Design / implementation change</dt>
                      <dd>{change}</dd>
                    </div>
                  </dl>
                  <p className="caption">{evidence}</p>
                </article>
              ))}
            </div>
            <div className="neuro-validation">
              <strong>56</strong>
              <div>
                <h3>Distinct tests reported passing across final runs.</h3>
                <p>
                  The project’s latest validation record combines final runs; it
                  is not one uninterrupted all-green run. Tests establish
                  technical behavior, not participant usefulness or release
                  readiness.
                </p>
                <a
                  className="text-link"
                  href="/projects/neuromode/evidence/validation.md"
                  download
                >
                  Read the validation record <ArrowIcon down />
                </a>
              </div>
            </div>
            <h3>The audit also found questions worth keeping open.</h3>
            <p>
              Several onboarding answers are stored but do not feed
              recommendation rules. Asking those questions creates an
              expectation that the answers matter. The next revision should
              either clarify that promise or connect it to tested behavior.
            </p>
            <p>
              Other review priorities include preserving scripts and routine
              drafts after save failures, clarifying search scope, and testing
              whether recovery remains findable when optional prompts are
              disabled.
            </p>
            <h3>Design and engineering meet at the state boundary.</h3>
            <p>
              Working independently across design and development, I defined
              what persists, what remains a draft, when a save sheet closes, and
              what happens when permissions are refused. I used SwiftUI,
              SwiftData, Xcode, SF Symbols, XCTest/XCUITest, and Git. The Figma
              handoff specification prepares the next round of design
              refinement.
            </p>
          </Chapter>
          <Chapter
            id="outcome"
            kicker="09 / OUTCOME & REFLECTION"
            title="Saving data isn’t the same as preserving a place."
          >
            <p className="section-lede">
              NeuroMode demonstrates implemented support paths, reversible
              preferences, local recovery, and a design model that can be
              inspected beyond the screens.
            </p>
            <div className="neuro-two">
              <div>
                <h3>What is demonstrated</h3>
                <p>
                  A feasible native foundation: editable steps, preserved
                  context, independent sensory choices, and documented technical
                  iterations. Reverse engineering makes the architecture and its
                  trade-offs explicit.
                </p>
              </div>
              <div>
                <h3>What comes next</h3>
                <p>
                  Run the prepared formative study, evaluate Figma refinements,
                  and complete human assistive-technology and physical-device
                  checks. Test mismatched suggestions and interruption recovery
                  before adding features.
                </p>
              </div>
            </div>
            <p>
              The assumption most worth challenging is that fewer visible
              elements always mean less effort. A simpler layout hides context;
              a hidden countdown hides time; a quiet room hides options. Each
              reduction creates a responsibility to preserve discovery and an
              exit.
            </p>
            <div className="neuro-thesis">
              <p>
                The strongest next outcome would be a person finding useful
                support, understanding what changed, and returning with enough
                context to continue.
              </p>
            </div>
            <p className="caption">
              Next milestones: participant research, a completed Figma
              prototype, and evaluation of interruption recovery in everyday
              use.
            </p>
          </Chapter>
          <a className="next-project" href={`/work/${nextProject.slug}`}>
            <span>Next case study</span>
            <h2>
              {nextProject.title} <ArrowIcon />
            </h2>
            <ProjectMedia project={nextProject} />
          </a>
        </div>
      </div>
    </main>
  );
}
