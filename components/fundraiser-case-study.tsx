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
  ['walkthrough', 'Watch the walkthrough'],
  ['guidance', 'Guidance & control'],
  ['continuity', 'Content & trust'],
  ['iteration', 'What changed'],
  ['accessibility', 'Accessible interactions'],
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
          04 / INDEPENDENT PRODUCT DESIGN · OCTOBER 2026
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
          <a className="text-link" href="#walkthrough">
            Watch the 64-second walkthrough <ArrowIcon down />
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
                  Preparing a fundraiser means choosing a format, writing a
                  story, and deciding when to invite people. I explored whether
                  one explained next step could make that work easier to begin.
                </dd>
              </div>
              <div>
                <dt>Who it is for</dt>
                <dd>
                  Adults preparing their first small community fundraiser with
                  limited time. I still need to test the concept with people in
                  this situation.
                </dd>
              </div>
              <div>
                <dt>My contribution</dt>
                <dd>
                  I directed the product and set priorities during development,
                  including clearer giving choices and an editable organizer
                  name. I used AI tools to help with design, organizing
                  research, writing code, and checking the prototype.
                </dd>
              </div>
              <div>
                <dt>Where the work stands</dt>
                <dd>
                  The prototype is ready for a first round of user research.
                  Participant sessions have not taken place, and fundraising
                  results have not been measured.
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
              templates, and support. I focused on a narrower question: could a
              suggested next step help someone put those resources to use while
              preparing their first invitation?
            </p>
            <div className="fundraiser-split">
              <div>
                <h3>Focus first</h3>
                <p>
                  Setup, a personal story, event details, a saved preview, and
                  one invitation. Together, these produce something an organizer
                  can review and use.
                </p>
              </div>
              <div>
                <h3>Defer until useful</h3>
                <p>
                  Managing supporters, tracking promotion, and adding team
                  permissions can wait. The first thing to learn is whether
                  organizers can prepare an invitation and understand what to do
                  next.
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
              I started with an assumption: organizers may pause because they
              are unsure what to do next. They may instead lack time, struggle
              to recruit help, or feel uncomfortable asking for money. Guidance
              cannot resolve every barrier.
            </p>
            <dl className="study-at-a-glance">
              <div>
                <dt>Secondary research</dt>
                <dd>
                  Public fundraising and donation materials established what
                  services already exist. They could not tell me where people
                  struggle after signing in or why they leave a campaign
                  unfinished.
                </dd>
              </div>
              <div>
                <dt>Product review</dt>
                <dd>
                  Technical and interface checks identified navigation,
                  empty-state, and small-screen problems. My feedback during
                  development also led to one-time and monthly giving choices
                  and an editable display name.
                </dd>
              </div>
              <div>
                <dt>Still to learn</dt>
                <dd>
                  Whether people need help choosing their next step, whether the
                  suggestion is useful, and whether existing resources already
                  answer their questions.
                </dd>
              </div>
            </dl>
            <h3>How the evidence shaped the design</h3>
            <div className="fundraiser-evidence-chain">
              {[
                [
                  'Build on existing support',
                  'The desk review found fundraising pages, toolkits, social templates, and an existing mobile app.',
                  'Another collection of tools would need a stronger reason to exist.',
                  'Focus the concept on preparing the first invitation and explaining the next step.',
                ],
                [
                  'Make progress believable',
                  'A prototype review found sample donations and supporters in a new campaign.',
                  'Those figures could make the organizer misread their starting point.',
                  'Begin with zero activity and connect the next suggestion to missing campaign content.',
                ],
                [
                  'Explain the donation destination',
                  'The prototype links to the official donation page; its selected giving frequency does not carry over.',
                  'A monthly selection could create an expectation the next page will not meet.',
                  'Explain the transition and test whether a simpler link is clearer than a separate choice.',
                ],
              ].map(([title, evidence, meaning, decision]) => (
                <article key={title}>
                  <h4>{title}</h4>
                  <dl>
                    <div>
                      <dt>Evidence</dt>
                      <dd>{evidence}</dd>
                    </div>
                    <div>
                      <dt>What it means</dt>
                      <dd>{meaning}</dd>
                    </div>
                    <div>
                      <dt>Design response</dt>
                      <dd>{decision}</dd>
                    </div>
                  </dl>
                </article>
              ))}
            </div>
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
                ['Invite', 'Use the campaign details to create an invitation.'],
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
              asks for more details only when they affect the next step. User
              sessions will help determine which approach works better.
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
            id="walkthrough"
            title="From the next step to an invitation."
          >
            <div className="fundraiser-walkthrough">
              <div>
                <p className="section-lede">
                  Follow the campaign from a suggested action to an edited
                  story, a saved preview, and a flyer using the same details.
                </p>
                <ol className="fundraiser-video-steps">
                  <li>
                    <strong>Understand the suggestion.</strong> Open the
                    explanation and timing controls.
                  </li>
                  <li>
                    <strong>Prepare the campaign.</strong> Edit the story, save
                    a preview, and review it.
                  </li>
                  <li>
                    <strong>Create the invitation.</strong> Carry the details
                    into a flyer and choose an export format.
                  </li>
                </ol>
                <p className="caption" id="fundraiser-video-description">
                  A silent, captioned sequence of real screens from the October
                  4 prototype. This earlier version saved a campaign to a shared
                  link. The current public demo saves in your browser; its links
                  open the demo. All fundraising figures shown are sample data.
                </p>
                <a
                  className="text-link"
                  href="/projects/fundraiser-studio/walkthrough.mp4"
                >
                  Open video separately <ArrowIcon />
                </a>
              </div>
              <video
                controls
                playsInline
                preload="none"
                width={1080}
                height={1920}
                poster="/projects/fundraiser-studio/walkthrough-poster.jpg"
                aria-label="Fundraiser Studio campaign walkthrough"
                aria-describedby="fundraiser-video-description"
              >
                <source
                  src="/projects/fundraiser-studio/walkthrough.mp4"
                  type="video/mp4"
                />
                <track
                  kind="captions"
                  src="/projects/fundraiser-studio/walkthrough.vtt"
                  srcLang="en"
                  label="English — walkthrough descriptions"
                />
                Your browser does not support embedded video. Use the separate
                video link.
              </video>
            </div>
            <details className="evidence-details">
              <summary>Read the walkthrough description</summary>
              <p>
                The dashboard suggests a next step. Expanding “Why this step?”
                reveals its explanation and options to change the timing. The
                recommended action opens the campaign editor.
              </p>
              <p>
                Saving the campaign produces a success message and a preview
                link. Opening that link shows the matching campaign title and
                story. The flyer builder reuses those details and offers a QR
                code. The final screen shows the available export formats.
              </p>
              <p>
                This sequence shows the earlier prototype, not a participant
                session. It ends at the export dialog; it does not show a
                downloaded file.
              </p>
            </details>
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
                    'Suggestions depend on what is missing, upcoming dates, and unfinished tasks. “Why this step?” explains the reason so the organizer can decide whether it fits.',
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
                  again before they appear in the preview. Templates keep the
                  layout consistent while letting organizers change their
                  message and event details.
                </p>
                <h3>What the public demo saves</h3>
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
            <h3>Make it clear where the donation happens.</h3>
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
                  making sure people know where they are going and what they
                  will need to choose again.
                </p>
              </div>
            </div>
          </Chapter>
          <Chapter id="iteration" title="Fix the moments that get in the way.">
            <p>
              These changes came from checking the prototype and my feedback
              during development. They have not yet been evaluated in
              participant sessions.
            </p>
            <div className="fundraiser-iterations">
              {[
                [
                  '01',
                  'Keep the campaign when someone moves on.',
                  'Some links did not open their destination. Moving between pages also needed to preserve the campaign.',
                  'Fixed navigation and saved the campaign before leaving the page.',
                  'Checked onboarding and all ten workspace destinations; the campaign details stayed in place.',
                ],
                [
                  '02',
                  'Let a fresh campaign start fresh.',
                  'Sample activity made a new campaign look as though it already had supporters and donations.',
                  'Started new campaigns with zero supporters and money raised, an empty story, and no location.',
                  'Checked that the dashboard asks the organizer to write their story next.',
                ],
                [
                  '03',
                  'Keep mobile navigation within reach.',
                  'A notification covered the bottom navigation, and a resource count wrapped poorly.',
                  'Moved the notification above the navigation and corrected the count layout.',
                  'Checked small-screen layouts, resource search, and the singular result count.',
                ],
              ].map(([number, title, before, after, check]) => (
                <article key={number}>
                  <p className="eyebrow">{number} / DESIGN CHANGE</p>
                  <h3>{title}</h3>
                  <div className="fundraiser-change-pair">
                    <div>
                      <h4>Before</h4>
                      <p>{before}</p>
                    </div>
                    <div>
                      <h4>After</h4>
                      <p>{after}</p>
                    </div>
                  </div>
                  <p className="caption">
                    <strong>What I checked:</strong> {check}
                  </p>
                </article>
              ))}
            </div>
            <div className="fundraiser-split fundraiser-annotated">
              <Screen
                name="dashboard.webp"
                width={1440}
                height={1000}
                alt="Updated dashboard with zero raised, zero supporters, and a prompt to write the campaign story."
                caption="After: the current public demo opens with an empty campaign."
              />
              <div>
                <h3>What changed on the dashboard</h3>
                <ol>
                  <li>
                    <strong>Honest starting point.</strong> Zero totals make it
                    clear that the organizer is beginning a new campaign.
                  </li>
                  <li>
                    <strong>A relevant next step.</strong> The missing story
                    becomes the first suggested action.
                  </li>
                  <li>
                    <strong>Progress with a purpose.</strong> The checklist
                    shows what is still needed before preparing an invitation.
                  </li>
                </ol>
              </div>
            </div>
          </Chapter>
          <Chapter id="accessibility" title="Keep the next step within reach.">
            <p>
              Preparing a campaign should work with a keyboard, a small screen,
              or reduced motion. The prototype includes the following
              interaction choices; manual assistive-technology testing is still
              needed.
            </p>
            <div className="fundraiser-accessibility-grid">
              <div>
                <h3>Find and recover</h3>
                <p>
                  Visible focus shows where a keyboard user is. Invalid fields
                  receive focus so an error can be corrected without searching
                  the page.
                </p>
              </div>
              <div>
                <h3>Return to the task</h3>
                <p>
                  Closing a dialog returns focus to the control that opened it.
                  The organizer can continue from the same place.
                </p>
              </div>
              <div>
                <h3>Choose how to interact</h3>
                <p>
                  Labeled fields and alternatives to dragging support the same
                  tasks without relying on a pointer. Layouts adapt to smaller
                  screens.
                </p>
              </div>
              <div>
                <h3>Keep reactions optional</h3>
                <p>
                  The heart has a 44px target, keyboard support, and a clear
                  selected state. Reduced motion removes the pop animation. It
                  does not affect donation totals.
                </p>
              </div>
            </div>
            <details className="evidence-details">
              <summary>Technical evaluation and remaining checks</summary>
              <p>
                October 3 checks recorded no automated axe violations on 17
                desktop routes and no horizontal overflow at tested widths from
                320–1440px. These results apply to that version. They do not
                establish usability or complete accessibility.
              </p>
              <p>
                Next checks include screen-reader use, browser zoom, Safari,
                Firefox, and sessions with disabled participants. Automated
                checks cannot tell me whether someone can comfortably finish
                their campaign.
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
                  'Check what people expect',
                  'Ask what someone else can see when they open a shared link, why an action is recommended, what rescheduling does, and what happens after choosing monthly giving.',
                ],
                [
                  'Revise and retest',
                  'Record where people hesitate, what help they need, and whether they finish. Use those observations to choose changes, then test the important fixes with new participants.',
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
                    Address any confusion about payments or who can see a
                    campaign immediately.
                  </li>
                  <li>
                    Resolve blocking accessibility issues before releasing the
                    affected flow.
                  </li>
                </ul>
              </div>
              <div>
                <h3>Respect participants’ privacy</h3>
                <p>
                  Use voluntary participation, separate recording consent,
                  anonymous IDs, and a stated deletion date. Do not collect
                  donor lists, patient stories, credentials, or payment details.
                </p>
                <p>
                  Use a neutral script and record assistance consistently. Ask
                  another reviewer to check my interpretation of the findings so
                  I do not overlook evidence against the design.
                </p>
              </div>
            </div>
            <h3>Define a useful result before testing.</h3>
            <p>
              In each session, I would look for three things: can the organizer
              prepare and review an invitation without help, explain why a step
              was suggested, and correctly describe what saving or sharing does?
              I would record hesitation and assistance alongside completion.
              Five sessions can reveal problems to investigate; they cannot
              establish a reliable conversion rate.
            </p>
            <h3>Measure readiness before fundraising impact.</h3>
            <p>
              For a future pilot, I would track how many new organizers prepare
              a campaign and save its preview within seven days. Before
              starting, I would define what “ready” means and give everyone the
              full seven days, including people who do not finish.
            </p>
            <p>
              A saved preview would show progress toward an invitation, not
              prove that someone sent it or raised money. I would compare the
              result with the existing process and check for problems such as
              accidental sharing or tasks people cannot complete accessibly.
            </p>
          </Chapter>
          <Chapter
            id="outcome"
            title="Built to try. Ready to learn from organizers."
          >
            <dl className="study-at-a-glance">
              <div>
                <dt>Delivered</dt>
                <dd>
                  A working path from campaign setup to a saved preview and
                  invitation, with next-step suggestions and a clear link to the
                  official donation site.
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
                  Watch organizers prepare their first invitation and revise the
                  steps that cause difficulty. Then consider whether the concept
                  fits alongside the organization’s existing tools.
                </dd>
              </div>
            </dl>
            <p>
              Fixing navigation and saving made the prototype usable enough to
              test. That still leaves the question I care about most: does the
              suggested next step help an organizer move forward? My next round
              of work needs to answer that before I add more features.
            </p>
            <details className="evidence-details">
              <summary>Project references</summary>
              <p>
                The October 5 case-study PDF documents the public desk review,
                original captures, development checks, and proposed research.
                The linked public demo is a newer browser-saved edition.
              </p>
              <ul>
                <li>
                  <a href="https://www.stjude.org/get-involved/fundraising-ideas.html">
                    St. Jude fundraising resources
                  </a>{' '}
                  — existing organizer support.
                </li>
                <li>
                  <a href="https://www.stjude.org/support-and-fundraising/i-love-st-jude-app.html">
                    I Love St. Jude app
                  </a>{' '}
                  — publicly described mobile capabilities.
                </li>
                <li>
                  <a href="https://www.stjude.org/donate/donate-to-st-jude.html">
                    Official donation page
                  </a>{' '}
                  — the prototype’s donation destination.
                </li>
              </ul>
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
