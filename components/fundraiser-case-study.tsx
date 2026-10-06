import Image from 'next/image';
import type { ReactNode } from 'react';
import type { CaseStudy } from '@/data/projects';
import { ArrowIcon } from './arrow-icon';
import { CaseStudyTOC, VisualLightbox } from './case-study-tools';
import { FundraiserCover } from './fundraiser-cover';
import { ProjectMedia } from './project-media';
const sections = [
  ['overview', 'At a glance'],
  ['strategy', 'Strategy & scope'],
  ['evidence', 'Research & assumptions'],
  ['journey', 'The first invitation'],
  ['guidance', 'Guidance & control'],
  ['continuity', 'Content & trust'],
  ['iteration', 'Iteration & inclusion'],
  ['research', 'Research plan'],
  ['outcome', 'Outcome & reflection'],
].map(([id, label]) => ({ id, label }));
function Chapter({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="case-section">
      <p className="eyebrow">
        {sections.findIndex((s) => s.id === id) + 1} /{' '}
        {sections.find((s) => s.id === id)?.label.toUpperCase()}
      </p>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
function Screen({
  name,
  alt,
  caption,
  width = 725,
  height = 828,
}: {
  name: string;
  alt: string;
  caption: string;
  width?: number;
  height?: number;
}) {
  return (
    <figure className="fundraiser-evidence">
      <VisualLightbox title={alt}>
        <Image
          src={`/projects/fundraiser-studio/${name}`}
          width={width}
          height={height}
          alt={alt}
          loading="lazy"
        />
      </VisualLightbox>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}
export function FundraiserCaseStudy({
  nextProject,
}: {
  nextProject: CaseStudy;
}) {
  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="narrative-page fundraiser-study"
    >
      <header className="case-hero shell">
        <a href="/work" className="text-link">
          ← All work
        </a>
        <p className="eyebrow">
          05 / INDEPENDENT PRODUCT DESIGN · OCTOBER 2026
        </p>
        <h1>Fundraiser Studio</h1>
        <p className="narrative-deck">
          From willing to help to ready to share.
        </p>
        <p className="section-lede">
          A guided workspace that helps first-time organizers prepare a
          campaign, understand their next step, and create an invitation.
        </p>
        <dl className="case-metadata">
          <div>
            <dt>My role</dt>
            <dd>Product direction</dd>
          </div>
          <div>
            <dt>Focus</dt>
            <dd>UX strategy · Interaction design · Research planning</dd>
          </div>
          <div>
            <dt>Platform</dt>
            <dd>Responsive web prototype</dd>
          </div>
          <div>
            <dt>Context</dt>
            <dd>Independent concept · October 2026</dd>
          </div>
        </dl>
        <div className="case-project-links">
          <a
            className="button button-primary"
            href="https://deandreperry.github.io/fundraiser-studio/dashboard/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore the live prototype <ArrowIcon />
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
          <a
            className="text-link"
            href="/projects/fundraiser-studio/case-study.pdf"
            download
          >
            Download the case study <ArrowIcon down />
          </a>
        </div>
        <p className="caption">
          Independent concept; not commissioned, affiliated with, or endorsed by
          St. Jude Children’s Research Hospital. All financial and supporter
          figures are sample data.
        </p>
        <FundraiserCover />
      </header>
      <div className="case-layout shell">
        <CaseStudyTOC sections={sections} />
        <article className="case-body">
          <Chapter id="overview" title="Help the organizer take the next step.">
            <dl className="study-at-a-glance">
              <div>
                <dt>The opportunity</dt>
                <dd>
                  Bring a relevant action, its explanation, and the tools to
                  complete it into one workspace. The hypothesis: knowing what
                  to do next can help a willing organizer prepare to share.
                </dd>
              </div>
              <div>
                <dt>Who it is for</dt>
                <dd>
                  Adults preparing their first small community fundraiser with
                  limited time. This is the proposed research audience, not a
                  validated user segment.
                </dd>
              </div>
              <div>
                <dt>My contribution</dt>
                <dd>
                  I directed the product, with AI assistance in design, research
                  synthesis, development, and verification.
                </dd>
              </div>
              <div>
                <dt>Where the work stands</dt>
                <dd>
                  A working prototype and a defined research plan. Participant
                  sessions and measured fundraising outcomes are still ahead.
                </dd>
              </div>
            </dl>
          </Chapter>
          <Chapter
            id="strategy"
            title="Improve the first invitation before adding more tools."
          >
            <p className="section-lede">
              St. Jude already offers fundraising pages, toolkits, social
              assets, and support. The opportunity is to test contextual
              guidance within that journey—not assume the existing services are
              missing.
            </p>
            <div className="fundraiser-split">
              <div>
                <h3>Focus first</h3>
                <p>
                  Setup, a personal story, event details, a saved preview, and
                  one invitation asset. Together, these produce something an
                  organizer can review and use.
                </p>
              </div>
              <div>
                <h3>Defer until useful</h3>
                <p>
                  Supporter management, channel analytics, team permissions, and
                  long-term retention require different research and
                  integrations. More features would not settle the core
                  question.
                </p>
              </div>
            </div>
            <blockquote className="fundraiser-question">
              How might a first-time organizer know what to do next, understand
              why it matters, and leave with something ready to share?
            </blockquote>
          </Chapter>
          <Chapter id="evidence" title="Test the reason people pause.">
            <p>
              The riskiest assumption is that organizers stall because they
              cannot prioritize. They may instead lack time, struggle to recruit
              help, or feel uncomfortable asking for money. Guidance cannot
              resolve every barrier.
            </p>
            <dl className="study-at-a-glance">
              <div>
                <dt>Secondary research</dt>
                <dd>
                  Public fundraising and donation materials established what
                  services already exist. They did not reveal difficulties
                  inside authenticated tools or internal abandonment data.
                </dd>
              </div>
              <div>
                <dt>Product review</dt>
                <dd>
                  Technical and interface checks identified navigation,
                  empty-state, and small-screen problems. Development feedback
                  also shaped giving-frequency choices and editable identity.
                </dd>
              </div>
              <div>
                <dt>Still to learn</dt>
                <dd>
                  Whether prioritization is a real obstacle, whether the
                  recommendation fits the organizer’s situation, and whether
                  existing guidance already meets the need.
                </dd>
              </div>
            </dl>
            <p>
              If organizers already know their next action, I would investigate
              what prevents them from completing it. A smaller content or
              onboarding improvement may be more useful than another workspace.
            </p>
          </Chapter>
          <Chapter
            id="journey"
            title="One journey, from an idea to an invitation."
          >
            <ol className="fundraiser-journey">
              {[
                ['Choose', 'Set a format, date, team, and goal.'],
                ['Prepare', 'Write the story and explain where to join.'],
                ['Review', 'Inspect and save the campaign preview.'],
                ['Invite', 'Reuse the details in a promotional asset.'],
                ['Return', 'Review the next suggested action.'],
              ].map(([title, text], i) => (
                <li key={title}>
                  <span className="eyebrow">0{i + 1}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </li>
              ))}
            </ol>
            <p>
              The six-step setup collects useful context, but may delay the
              first useful result. I would compare it with a shorter path that
              asks for extra context only when it changes a recommendation. This
              journey is a design hypothesis awaiting participant evaluation.
            </p>
            <Screen
              name="dashboard.webp"
              width={1440}
              height={1000}
              alt="Public demo dashboard showing an empty campaign, next-story action, and readiness checklist."
              caption="Current public demo: a fresh campaign starts with no supporters or money raised."
            />
          </Chapter>
          <Chapter
            id="guidance"
            title="One action. A reason. Room to disagree."
          >
            <div className="fundraiser-split fundraiser-decision">
              <Screen
                name="guidance.png"
                alt="Next-action panel with its explanation, rescheduling field, and dismiss control expanded."
                caption="October 4 prototype: explanation and timing controls. The public edition now saves previews in the current browser."
              />
              <div>
                {[
                  [
                    'Prioritize the task',
                    'A specific action comes before the metrics. The readiness checklist gives context without competing with the next step.',
                  ],
                  [
                    'Show the reason',
                    'Rules use missing content, dates, saved-preview state, and unfinished work. “Why this step?” makes the recommendation understandable. It is rule-based guidance.',
                  ],
                  [
                    'Keep the choice',
                    'An organizer can dismiss, reschedule, or restore a suggestion. Rescheduling returns it in the workspace; it does not send a notification.',
                  ],
                ].map(([title, text]) => (
                  <div key={title}>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                ))}
              </div>
            </div>
            <p>
              <strong>The tradeoff:</strong> one recommendation reduces
              competing actions, but it may choose the wrong priority. Testing
              should ask people to explain and challenge it. Displayed task
              durations are estimates, not measured completion times.
            </p>
          </Chapter>
          <Chapter
            id="continuity"
            title="Carry the story forward. Make the limits clear."
          >
            <p className="section-lede">
              Campaign details connect the editor, saved preview, and
              promotional templates. Organizers can reuse their message instead
              of entering it again at each step.
            </p>
            <div className="fundraiser-split">
              <div>
                <h3>A draft is not a saved preview</h3>
                <p>
                  Editing and saving are distinct. Changes need to be saved
                  again before they appear in the preview. Templates constrain
                  styling while keeping the personal message and event details
                  editable.
                </p>
                <h3>The public demo’s boundary</h3>
                <p>
                  Drafts and previews stay in the current browser. Shared links
                  and QR codes open the demo, not the organizer’s personal
                  campaign. There is no cross-device sync or donation
                  collection.
                </p>
              </div>
              <Screen
                name="preview.png"
                alt="Earlier campaign preview showing the campaign story and giving action."
                caption="October 4 preview from the earlier hosted prototype. Amounts and supporter counts are illustrative."
              />
            </div>
            <h3>Giving should be an informed handoff.</h3>
            <div className="fundraiser-split">
              <Screen
                name="giving.png"
                width={522}
                height={596}
                alt="Giving dialog explaining one-time and monthly choices before opening the official donation site."
                caption="October 5 dialog: monthly selected. Payment takes place on the official donation site."
              />
              <div>
                <p>
                  The dialog explains one-time and monthly giving, then links to
                  St. Jude’s general donation page. The selected frequency does
                  not transfer, and gifts are not attributed to the demo
                  campaign.
                </p>
                <p>
                  That extra choice may be redundant. I would compare a clear
                  explanatory link with the dialog and ask participants where
                  payment happens and whether their choice carries over.
                </p>
                <p>
                  A click is not a completed donation. The immediate goal is
                  understanding the handoff.
                </p>
              </div>
            </div>
          </Chapter>
          <Chapter
            id="iteration"
            title="Verify the journey, not just the destination."
          >
            <div className="fundraiser-iterations">
              {[
                [
                  'Navigation appeared unresponsive',
                  'Changed the affected links and saved campaign state before navigation.',
                  'Onboarding and ten workspace destinations were checked on the published build.',
                ],
                [
                  'A new campaign implied existing activity',
                  'Started fresh campaigns with zero supporters and money, plus blank story and location.',
                  'Empty states and the next-story suggestion were checked October 5.',
                ],
                [
                  'Feedback covered mobile navigation',
                  'Moved the notification above navigation and corrected resource-count wrapping.',
                  'Resource search, singular counts, and small-screen layouts were checked.',
                ],
              ].map(([issue, change, check]) => (
                <article key={issue}>
                  <h3>{issue}</h3>
                  <p>{change}</p>
                  <p className="caption">{check}</p>
                </article>
              ))}
            </div>
            <h3>Warmth without pressure.</h3>
            <p>
              The optional heart is a personal reaction, not a popularity count
              or donation. Its pressed state, keyboard support, 44px target, and
              reduced-motion behavior keep the interaction optional and
              understandable.
            </p>
            <p>
              Labeled fields, visible focus, error focus, dialog focus return,
              flexible layouts, and alternatives to dragging support the core
              tasks.
            </p>
            <details className="evidence-details">
              <summary>Technical evaluation and remaining checks</summary>
              <p>
                October 3 checks recorded no automated axe violations on 17
                desktop routes and no horizontal overflow at tested widths from
                320–1440px. These results apply to that version. They do not
                establish usability or complete accessibility.
              </p>
              <p>
                The PDF records the later display-name edit as build-tested,
                with browser verification still needed. Manual screen-reader
                use, zoom, Safari and Firefox, and sessions with disabled
                participants remain research priorities.
              </p>
            </details>
          </Chapter>
          <Chapter
            id="research"
            title="Decide what evidence would change the design."
          >
            <p className="section-lede">
              The proposed study starts with five adult organizers: three
              first-time and two experienced. No participant sessions have been
              conducted.
            </p>
            <ol className="fundraiser-research">
              {[
                [
                  'Understand the context',
                  'Discuss a recent or planned fundraiser before introducing the concept. Look for barriers to sending the first invitation.',
                ],
                [
                  'Observe the core task',
                  'Use a neutral scenario and sample data in 30–40 minute sessions. Ask people to prepare and review a campaign, then create an invitation.',
                ],
                [
                  'Probe trust and control',
                  'Ask what a link exposes, why an action is recommended, what rescheduling does, and what happens after choosing monthly giving.',
                ],
                [
                  'Revise and retest',
                  'Record task context, observed behavior, assistance, severity, and the proposed change. Retest critical changes with fresh participants.',
                ],
              ].map(([title, text]) => (
                <li key={title}>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </li>
              ))}
            </ol>
            <div className="fundraiser-split">
              <div>
                <h3>Decision rules</h3>
                <ul>
                  <li>
                    Investigate any lost work, wrong destination, or failed
                    save.
                  </li>
                  <li>
                    If two participants misunderstand a recommendation, revise
                    its wording or hierarchy.
                  </li>
                  <li>
                    Review any material payment or privacy misunderstanding
                    immediately.
                  </li>
                  <li>
                    Resolve blocking accessibility issues before releasing the
                    affected flow.
                  </li>
                </ul>
              </div>
              <div>
                <h3>Protect the research</h3>
                <p>
                  Use voluntary participation, separate recording consent,
                  anonymous IDs, and a stated deletion date. Do not collect
                  donor lists, patient stories, credentials, or payment details.
                </p>
                <p>
                  Use a neutral script and record assistance consistently. Seek
                  a second review of the synthesis to challenge designer bias.
                </p>
              </div>
            </div>
            <h3>Measure readiness before fundraising impact.</h3>
            <p>
              The proposed measure is the share of eligible new organizers with
              a campaign meeting agreed readiness criteria and a saved preview
              within seven days. Include non-completers and allow the full
              observation window.
            </p>
            <p>
              Readiness is only a proxy. A production measure needs a baseline,
              version-consistent previews, approved access, and safeguards for
              unintended sharing and accessibility barriers. It does not measure
              invitations sent or donations received.
            </p>
          </Chapter>
          <Chapter
            id="outcome"
            title="A working direction. A clear next decision."
          >
            <dl className="study-at-a-glance">
              <div>
                <dt>Delivered</dt>
                <dd>
                  Explainable next-step guidance, editable campaign content,
                  saved previews, connected promotional templates, and an
                  explicit official-site donation handoff.
                </dd>
              </div>
              <div>
                <dt>Not yet established</dt>
                <dd>
                  Whether the guidance matches real priorities, reduces
                  assistance, or improves campaign completion. No fundraising
                  impact has been measured.
                </dd>
              </div>
              <div>
                <dt>What comes next</dt>
                <dd>
                  Validate the narrow invitation workflow, revise from observed
                  behavior, then review organizational fit before proposing
                  integrations or broader features.
                </dd>
              </div>
            </dl>
            <p>
              The most useful lesson was to separate a working feature from a
              useful intervention. Fixing navigation and save behavior made the
              prototype testable. Research still has to establish whether the
              suggested next step is the one an organizer actually needs.
            </p>
            <details className="evidence-details">
              <summary>Project references</summary>
              <p>
                The October 5 case-study PDF documents the public desk review,
                original captures, development checks, and proposed research.
                The linked public demo is a newer browser-saved edition.
              </p>
              <a
                className="text-link"
                href="/projects/fundraiser-studio/case-study.pdf"
                download
              >
                Read the complete case study <ArrowIcon down />
              </a>
            </details>
          </Chapter>
          <a href={`/work/${nextProject.slug}`} className="next-project">
            <span>Next case study</span>
            <h2>
              {nextProject.title} <ArrowIcon />
            </h2>
            <ProjectMedia project={nextProject} />
          </a>
        </article>
      </div>
    </main>
  );
}
