import Image from 'next/image';
import type { CaseStudy } from '@/data/projects';
import { GatherCover } from './gather-cover';
import { CaseStudyTOC, VisualLightbox } from './case-study-tools';
import { ProjectMedia } from './project-media';
import { ArrowIcon } from './arrow-icon';
const sections = [
  { id: 'overview', label: 'Overview' },
  { id: 'experience', label: 'The experience' },
  { id: 'decisions', label: 'Design decisions' },
  { id: 'visual', label: 'Visual language' },
  { id: 'duo', label: 'Duo exploration' },
  { id: 'inclusion', label: 'Inclusive design' },
  { id: 'refinements', label: 'Refinement & QA' },
  { id: 'reflection', label: 'Outcome & next steps' },
];
function Screen({ name, caption }: { name: string; caption: string }) {
  const src = `/projects/gather/assets/${name}.png`;
  return (
    <figure className="gather-screen">
      <VisualLightbox title={caption}>
        <Image
          src={src}
          alt={caption}
          width={1206}
          height={2622}
          loading="lazy"
        />
      </VisualLightbox>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}
export function GatherCaseStudy({ nextProject }: { nextProject: CaseStudy }) {
  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="narrative-page gather-study"
    >
      <header className="case-hero shell">
        <a href="/work" className="text-link">
          ← All work
        </a>
        <p className="eyebrow">02 / INDEPENDENT iOS CONCEPT · 2026</p>
        <h1>Gather</h1>
        <p className="narrative-deck">Less debating. More together.</p>
        <p className="section-lede">
          An iOS concept that helps friends choose a plan with everyone’s needs
          in mind and room for an honest vote.
        </p>
        <dl className="case-metadata">
          <div>
            <dt>Direction</dt>
            <dd>De’Andre Perry</dd>
          </div>
          <div>
            <dt>Focus</dt>
            <dd>Product & visual design</dd>
          </div>
          <div>
            <dt>Platform</dt>
            <dd>Native iOS · SwiftUI</dd>
          </div>
          <div>
            <dt>Scope</dt>
            <dd>Independent functional concept</dd>
          </div>
        </dl>
        <div className="case-project-links">
          <a href="#walkthrough" className="text-link">
            Watch the 40-second walkthrough <ArrowIcon down />
          </a>
          <a href="#experience" className="button button-primary">
            Explore the iPhone experience ↓
          </a>
          <a href="/projects/gather/index.html#duo" className="text-link">
            View the Duo design <ArrowIcon />
          </a>
        </div>
        <GatherCover />
      </header>
      <div className="case-layout shell">
        <CaseStudyTOC sections={sections} />
        <div className="case-body">
          <section id="overview" className="case-section">
            <p className="eyebrow">01 / THE OPPORTUNITY</p>
            <h2>Making a plan shouldn’t be the hard part.</h2>
            <p className="section-lede">
              A group chat is great for conversation. It’s a difficult place to
              keep track of a decision. Gather brings interests, practical
              constraints, and private choices into one focused journey.
            </p>
            <dl className="study-at-a-glance">
              <div>
                <dt>The premise</dt>
                <dd>
                  Ideas, timing, and budgets become scattered. Unspoken
                  requirements can be missed, while more suggestions do not
                  necessarily create agreement.
                </dd>
              </div>
              <div>
                <dt>The design response</dt>
                <dd>
                  A shared lobby, requirement-aware recommendations, private
                  voting, aggregate consensus, and a final actionable plan.
                </dd>
              </div>
              <div>
                <dt>Contribution</dt>
                <dd>
                  I defined the product brief and directed the design. Codex
                  supported development, procedural artwork, sample content, and
                  technical testing.
                </dd>
              </div>
            </dl>
            <p className="caption">
              Independent concept developed from a product brief. These premises
              are hypotheses, not interview findings. Venues, people, votes, and
              accessibility metadata are sample data; this is not an App Store
              release or Apple-affiliated project.
            </p>
          </section>
          <section id="experience" className="case-section">
            <p className="eyebrow">02 / THE EXPERIENCE</p>
            <h2>One continuous path to a shared plan.</h2>
            <p>
              Home establishes the next step. The lobby brings the group
              together. Voting makes room for an honest preference; consensus
              turns the aggregate result into a plan.
            </p>
            <div id="walkthrough" className="gather-walkthrough">
              <p className="eyebrow">GATHER IN MOTION / 40 SECONDS</p>
              <h3>From a private vote to a shared plan.</h3>
              <video
                controls
                playsInline
                preload="metadata"
                width="1600"
                height="1000"
                poster="/projects/gather/assets/gather-walkthrough-poster.jpg"
                aria-label="Gather: from private voting to a confirmed plan"
                aria-describedby="gather-film-description"
              >
                <source
                  src="/projects/gather/assets/gather-walkthrough.mp4"
                  type="video/mp4"
                />
                <track
                  kind="captions"
                  src="/projects/gather/assets/gather-walkthrough.vtt"
                  srcLang="en"
                  label="English"
                />
                Your browser does not support embedded video. Open the video
                separately or read the transcript below.
              </video>
              <p className="caption" id="gather-film-description">
                Silent walkthrough with on-screen captions. Recorded in the
                running app using sample participants and venues.
              </p>
              <a
                href="/projects/gather/assets/gather-walkthrough.mp4"
                className="text-link"
              >
                Open video separately <ArrowIcon />
              </a>
              <details className="evidence-details">
                <summary>Read the walkthrough transcript</summary>
                <ol>
                  <li>
                    <strong>00:00 — Pick up the plan.</strong> Home makes the
                    next step clear.
                  </li>
                  <li>
                    <strong>00:04 — Find common ground.</strong> See group
                    progress without revealing individual choices.
                  </li>
                  <li>
                    <strong>00:09 — Choose honestly.</strong> Choose Love, Good,
                    or Pass. Review choices before submitting.
                  </li>
                  <li>
                    <strong>00:23 — Reach a decision.</strong> Aggregate results
                    explain the group match. Confirm the plan.
                  </li>
                  <li>
                    <strong>00:30 — Make it happen.</strong> The final plan
                    brings details, directions, and a calendar action together.
                  </li>
                </ol>
              </details>
            </div>
            <div className="gather-screen-grid">
              {[
                ['Home', 'Pick up the active plan.'],
                ['Lobby', 'Find common ground and start voting.'],
                ['Voting', 'Choose privately: Pass, Good, or Love.'],
                [
                  'Consensus',
                  'See the aggregate result after all ballots are complete.',
                ],
                ['Final', 'Leave with a confirmed plan.'],
              ].map(([n, c]) => (
                <Screen key={n} name={`Portfolio-${n}`} caption={c} />
              ))}
            </div>
            <p className="caption">
              Original, unretouched Simulator captures. Select a screen to
              enlarge it. The group-match score reflects shared preferences in
              the demo. It does not verify a venue’s accessibility or
              suitability.
            </p>
          </section>
          <section id="decisions" className="case-section">
            <p className="eyebrow">03 / DESIGN REASONING</p>
            <h2>Small choices. Meaningful differences.</h2>
            {[
              [
                'Give the group one next step.',
                'Home prioritizes the active plan; Start Voting appears before recommendations in the lobby. Browsing remains available without becoming a prerequisite.',
                'Less content up front, more direction.',
              ],
              [
                'Make room for an honest pass.',
                'Love, Good, and Pass express different levels of interest. Individual choices remain private, with aggregate results withheld until all ballots are complete.',
                'The group waits for everyone before seeing the result.',
              ],
              [
                'A must-have isn’t a nice-to-have.',
                'Preferences affect ranking; requirements determine eligibility. Missing required accessibility information excludes an option rather than assuming suitability.',
                'A smaller set of ideas may be the appropriate answer.',
              ],
            ].map(([title, body, tradeoff], i) => (
              <article key={title} className="reasoning-decision">
                <p className="eyebrow">0{i + 1} / DECISION</p>
                <h3>{title}</h3>
                <p>{body}</p>
                <p className="caption">Trade-off: {tradeoff}</p>
              </article>
            ))}
          </section>
          <section id="visual" className="case-section">
            <p className="eyebrow">04 / VISUAL LANGUAGE</p>
            <h2>Warm in character. Clear in purpose.</h2>
            <p className="section-lede">
              Forest-green actions anchor a warm illustrated identity. Familiar
              iOS controls provide structure, while conversational copy gives
              the app its voice.
            </p>
            <div className="gather-palette">
              {[
                ['Forest', '#1F5C4D'],
                ['Apricot', '#F5975E'],
                ['Midnight', '#262E4D'],
                ['Cream', '#FADEA6'],
              ].map(([name, color]) => (
                <div key={name}>
                  <span style={{ background: color }} />
                  <strong>{name}</strong>
                  <p>{color}</p>
                </div>
              ))}
            </div>
            <dl className="study-at-a-glance">
              <div>
                <dt>Typography</dt>
                <dd>
                  Semantic iOS text styles establish hierarchy and adapt to
                  Dynamic Type.{' '}
                </dd>
              </div>
              <div>
                <dt>Rhythm</dt>
                <dd>
                  24-point page gutters and a 12, 16, 24, 32 spacing rhythm
                  group content with whitespace instead of extra borders.
                </dd>
              </div>
              <div>
                <dt>Appearance</dt>
                <dd>
                  System surfaces and labels adapt to appearance. The separate
                  dark accent is pale green (#94D1AD); warm illustration colors
                  remain expressive.
                </dd>
              </div>
            </dl>
            <div className="gather-screen-grid">
              <Screen
                name="Portfolio-Discover"
                caption="Discovery makes room for inspiration."
              />
              <Screen
                name="Home-Dark-Contrast"
                caption="Home in dark appearance with Increase Contrast enabled."
              />
            </div>
          </section>
          <section id="duo" className="case-section">
            <p className="eyebrow">05 / DUO DESIGN EXPLORATION</p>
            <h2>More room. Same plan.</h2>
            <p className="section-lede">
              An interactive layout study explores compact, expanded, and
              fold-aware arrangements while keeping the selected plan
              consistent.
            </p>
            <dl className="study-at-a-glance">
              <div>
                <dt>Compact</dt>
                <dd>
                  A focused plan view with a clear route back to the plan list.
                </dd>
              </div>
              <div>
                <dt>Expanded</dt>
                <dd>
                  The list and selected plan sit together when space allows and
                  stack on narrow previews. More context appears without adding
                  tasks or exposing private votes.
                </dd>
              </div>
              <div>
                <dt>Fold-aware</dt>
                <dd>
                  A schematic separation explores how content could adapt across
                  a larger canvas.
                </dd>
              </div>
            </dl>
            <p className="caption">
              This is a web proposal, not a native Duo implementation or device
              capture. Dimensions, transitions, and assistive-technology
              behavior still need native validation.
            </p>
            <a className="text-link" href="/projects/gather/index.html#duo">
              Try the interactive Duo exploration <ArrowIcon />
            </a>
          </section>
          <section id="inclusion" className="case-section">
            <p className="eyebrow">06 / INCLUSION</p>
            <h2>Consideration is part of the interface.</h2>
            <p>
              Requirements inform the eligible options without appearing in
              participant summaries or shared invitations. Voting uses words and
              symbols together, exposes selected values to assistive technology,
              and excludes decorative artwork from the reading order.
            </p>
            <p>
              Semantic text can grow. Voting responses stack at accessibility
              sizes, primary labels receive the full available width, and
              reduced-motion settings disable voting transitions. Native tabs,
              navigation stacks, and a dismissible voting sheet retain familiar
              interaction patterns.
            </p>
            <div className="gather-screen-grid">
              <Screen
                name="Accessible-Plan-iPhone17e"
                caption="Final plan at the largest accessibility text size on the smaller iPhone 17e Simulator."
              />
            </div>
            <p className="caption">
              VoiceOver, Switch Control, Reduce Transparency, landscape,
              permissions, and physical-device behavior still require manual
              validation.{' '}
            </p>
          </section>
          <section id="refinements" className="case-section">
            <p className="eyebrow">07 / REFINEMENT & QA</p>
            <h2>The polish is in the follow-through.</h2>
            <p>
              Testing the app exposed contrast, action hierarchy, and navigation
              issues that were less apparent in static screens.
            </p>
            <dl className="study-at-a-glance">
              {[
                [
                  'Secondary text was too quiet.',
                  'Strengthened secondary-text contrast following the native accessibility audit.',
                ],
                [
                  'The action came after browsing.',
                  'Moved Start Voting above the recommendation list.',
                ],
                [
                  'Large labels needed more room.',
                  'Removed competing icons from primary buttons at accessibility text sizes.',
                ],
                [
                  'Confirmation inherited scroll position.',
                  'Returned the plan to its heading when its state changed.',
                ],
              ].map(([a, b]) => (
                <div key={a}>
                  <dt>{a}</dt>
                  <dd>{b}</dd>
                </div>
              ))}
            </dl>
            <dl className="scope-numbers">
              <div>
                <dt>Unit tests passed</dt>
                <dd>12</dd>
              </div>
              <div>
                <dt>UI tests passed</dt>
                <dd>4</dd>
              </div>
              <div>
                <dt>Smaller-device journey runs</dt>
                <dd>2</dd>
              </div>
            </dl>
            <p className="caption">
              Technical test results recorded September 15, 2026; participant
              usability testing remains planned. The native audit excludes
              contrast findings for elements overlapping the translucent tab
              bar, which received separate visual review.
            </p>
            <a
              className="text-link"
              href="/projects/gather/assets/QA.md"
              download
            >
              Download the QA record ↓
            </a>
          </section>
          <section id="reflection" className="case-section">
            <p className="eyebrow">08 / OUTCOME & REFLECTION</p>
            <h2>A working idea. A clear next chapter.</h2>
            <p className="section-lede">
              The functional native concept connects private choices, group
              consensus, and final-plan actions. Its core journey runs offline
              using sample participants and venues.
            </p>
            <p>
              Creation, discovery, preferences, saved activities, and final-plan
              actions extend beyond the central walkthrough. Live collaboration,
              real venue providers, reservations, widgets, and Live Activities
              remain future work.
            </p>
            <h3>What I would test next</h3>
            <ul>
              <li>
                Do people understand the difference between a preference and a
                requirement?
              </li>
              <li>
                Does private voting help people express a real preference?
              </li>
              <li>
                Can organizers recover confidently from a tie or an all-pass
                round?
              </li>
            </ul>
          </section>
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
