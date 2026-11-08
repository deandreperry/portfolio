import Image from 'next/image';
import type { ReactNode } from 'react';
import type { CaseStudy } from '@/data/projects';
import { sbfResearch as research } from '@/data/sbf-research';
import { ArrowIcon } from './arrow-icon';
import { CaseStudyTOC, VisualLightbox } from './case-study-tools';
import { ProjectMedia } from './project-media';

const sections = [
  ['overview', 'Research question'],
  ['methods', 'Methods & participants'],
  ['protocol', 'Facilitation'],
  ['findings', 'Task results'],
  ['synthesis', 'Affinity map'],
  ['journey', 'Donor journey'],
  ['stakeholders', 'Stakeholder briefing'],
  ['decisions', 'Recommendations'],
  ['apparel', 'Storefront design'],
  ['outcome', 'Launch outcome'],
  ['post-launch-research', 'Post-launch research'],
  ['validation', 'Post-launch testing'],
  ['reflection', 'Reflection'],
].map(([id, label]) => ({ id, label }));
const base = '/projects/sbf/';
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
      <p className="eyebrow">{sections.find((s) => s.id === id)?.label}</p>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
function Visual({
  file,
  width = 1440,
  height = 1000,
  alt,
  caption,
  original,
  originalLabel,
}: {
  file: string;
  width?: number;
  height?: number;
  alt: string;
  caption: string;
  original?: string;
  originalLabel?: string;
}) {
  return (
    <figure className="sbf-evidence">
      <VisualLightbox title={alt}>
        <Image
          src={base + file}
          width={width}
          height={height}
          alt={alt}
          loading="lazy"
        />
      </VisualLightbox>
      <figcaption>
        {caption}
        {original && (
          <>
            {' '}
            <a href={base + original}>
              {originalLabel ??
                'Open the full-resolution ' +
                  (original.includes('affinity')
                    ? 'affinity map'
                    : 'journey map')}
            </a>
            .
          </>
        )}
      </figcaption>
    </figure>
  );
}
function Report({ file, children }: { file: string; children: ReactNode }) {
  return (
    <a
      className="sbf-download"
      href={base + 'research/' + file + '.pdf'}
      download
    >
      <svg
        aria-hidden="true"
        focusable="false"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 3v12m-5-5 5 5 5-5M4 16v4h16v-4" />
      </svg>
      <span>{children} (PDF)</span>
    </a>
  );
}
function StoreLink() {
  return (
    <a
      className="text-link"
      href="https://socialbutterfliesfoundation.org/custom-apparel/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Visit SBF’s apparel page (opens in a new tab)"
    >
      Visit SBF’s apparel page <ArrowIcon />
    </a>
  );
}
export function SbfCaseStudy({ nextProject }: { nextProject: CaseStudy }) {
  return (
    <main id="main-content" tabIndex={-1} className="narrative-page sbf-study">
      <header className="case-hero shell sbf-research-hero">
        <a href="/work" className="text-link">
          ← All work
        </a>
        <p className="eyebrow">
          Social Butterflies Foundation · Usability research
        </p>
        <h1>Helping SBF supporters buy with confidence</h1>
        <p className="section-lede">
          P09, an SBF event supporter, found apparel on their phone and located
          delivery information. They were unsure whether their personalization
          had saved. When the total changed at review, they hesitated.
        </p>
        <p className="sbf-hero-insight">
          I designed this nonprofit’s apparel discovery page and led a study of
          the shopping journey through order review. In moderated think-aloud
          sessions, eight of ten donors found apparel independently. Six
          completed the personalization task and five found delivery information
          independently.
        </p>
        <dl className="case-metadata">
          <div>
            <dt>Participants</dt>
            <dd>10 prior SBF donors</dd>
          </div>
          <div>
            <dt>Devices</dt>
            <dd>5 mobile · 5 desktop</dd>
          </div>
          <div>
            <dt>Scope</dt>
            <dd>4 tasks ending before payment</dd>
          </div>
          <div>
            <dt>Session protocol</dt>
            <dd>35–45 minutes</dd>
          </div>
        </dl>
        <div className="case-project-links">
          <a className="button button-primary" href="#findings">
            View the study findings <ArrowIcon down />
          </a>
          <StoreLink />
        </div>
      </header>
      <div className="case-layout shell">
        <CaseStudyTOC sections={sections} />
        <article className="case-body">
          <Chapter
            id="overview"
            title="Could supporters confidently find, personalize, and review apparel before paying?"
          >
            <p>
              SBF supports people and families affected by lupus and
              fibromyalgia. Buying apparel gives supporters a way to contribute.
              For someone choosing a personalized gift, the mission helps
              explain why to buy. They still need to know what will arrive, when
              it might arrive, and what they will pay.
            </p>
            <p>
              I wanted to see which category a shopper would choose, what they
              considered proof that a name or number had saved, and where they
              would look for delivery details. A design review could show me
              where a link was placed. Watching someone shop could tell me
              whether they found it and how they interpreted it.
            </p>
            <p className="content-note">
              Study plan dated August 7, 2026 and revised November 7, 2026.
            </p>
            <Report file="study-plan">Download the study plan</Report>
          </Chapter>
          <Chapter
            id="methods"
            title="Watch the route, listen for expectations, and score the task."
          >
            <p>
              I chose individual moderated sessions so I could see each person’s
              first move, where they paused and how they recovered. Think-aloud
              gave me a way to hear what they expected an action to do. Brief
              questions about previous online shopping and personalization
              helped me interpret their choices in context.
            </p>
            <p>
              I scored all four tasks against the same criteria for every
              participant. The counts tell me where independent progress was
              least common. The qualitative notes from those same sessions tell
              me what to investigate. I used affinity mapping to compare
              repeated behaviors and exceptions, then journey mapping to connect
              them across the order.
            </p>
            <h3>Why prior donors?</h3>
            <p>
              All ten participants had already supported SBF. That made them a
              relevant group for understanding how the mission carries into an
              apparel purchase. Five used mobile devices and five used desktop
              devices. The split gave me coverage of both experiences. Each
              group was too small to draw conclusions about device differences.
            </p>
            <details className="sbf-appendix">
              <summary>Eligibility and screening</summary>
              <p>
                The plan called for consenting adults aged 18 or older who had
                donated to SBF. Anyone who had created, reviewed, or approved
                the store design was ineligible. Screening asked about usual
                device, shopping frequency, personalization experience and
                access needs. Previous experience with custom apparel was
                optional.
              </p>
            </details>
          </Chapter>
          <Chapter
            id="protocol"
            title="Leave the choice of where to click to the participant."
          >
            <p>
              I facilitated four shopping tasks that stopped before payment. In
              my session guide, I explain that we’re evaluating the website,
              invite participants to describe what they expect, and give them
              room to explore. The guide was prepared for the November revision.
              Its prompts describe my facilitation approach rather than
              providing a transcript of the sessions.
            </p>
            <div className="sbf-takeaway">
              <h3>A task and a probe from the guide</h3>
              <p>
                “Before deciding to buy, find out when you could expect this
                item to arrive.”
              </p>
              <p>“What were you expecting?”</p>
              <p>
                The task gives the shopper a decision to make without naming a
                shipping link. The probe leaves room for their interpretation. I
                record the action first, then the explanation, so a pause on its
                own never becomes a finding about someone’s confidence.
              </p>
            </div>
            <h3>When someone gets stuck</h3>
            <p>
              The guide calls for waiting, then repeating the scenario or asking
              a neutral question. If a participant needs direction, record the
              hint and score the task accordingly. Independent completion means
              meeting the criterion without directional moderator assistance. A
              neutral reminder to think aloud does not change that score.
            </p>
            <p>
              If someone cannot find an eligible item, record the discovery
              outcome before opening a product for the personalization task. Log
              that reset separately. The shopper can then attempt
              personalization independently and the earlier outcome still
              stands.
            </p>
            <details className="sbf-appendix">
              <summary>Consent, task criteria, and moderator guide</summary>
              <p>
                Explain voluntary participation, breaks, and the option to stop.
                Ask separately about participation and recording. Use a
                participant ID and fictional customization details. Stop before
                any payment information is entered.
              </p>
              <ol className="sbf-task-list">
                {research.tasks.map((t) => (
                  <li key={t.id}>
                    <strong>{t.name}</strong>
                    <p>{t.criterion}</p>
                  </li>
                ))}
              </ol>
            </details>
            <Report file="session-guide">Download the session guide</Report>
          </Chapter>
          <Chapter
            id="findings"
            title="Delivery was the hardest task to complete independently."
          >
            <table className="sbf-results">
              <caption>
                Independent completions among the 10 prior donors
              </caption>
              <thead>
                <tr>
                  <th scope="col">Task</th>
                  <th scope="col">Count</th>
                  <th scope="col">Percent</th>
                </tr>
              </thead>
              <tbody>
                {research.tasks.map((t) => (
                  <tr key={t.id}>
                    <th scope="row">
                      {t.id} · {t.name}
                    </th>
                    <td>
                      {t.completed}/{research.sample}
                    </td>
                    <td>{(100 * t.completed) / research.sample}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p>
              The participant matrix records whether each task was completed
              independently. A “No” means the participant did not complete that
              task independently. The records do not specify how many finished
              with help and how many stopped. The notes below describe selected
              participants’ experiences.
            </p>
            <dl className="sbf-trace">
              {research.findings.map((f) => (
                <div key={f.id} id={`evidence-${f.id}`}>
                  <dt>
                    {f.id} · {f.title}
                  </dt>
                  <dd>
                    {f.behavior}{' '}
                    <strong>
                      {research.tasks.find((t) => t.id === f.task)?.completed}/
                      {research.sample}
                    </strong>{' '}
                    completed {f.task} independently.
                  </dd>
                </div>
              ))}
            </dl>
            <h3>Three donors completed all four tasks independently</h3>
            <p>
              P03 found an item through a collection and confirmed the selection
              in the summary. P08 used category filters and followed the
              intended checkout path. P10 checked the total and continued
              through review. I would preserve those routes when testing
              changes.
            </p>
            <Report file="data-summary">
              Download the study results and completed participant matrix
            </Report>
          </Chapter>
          <Chapter
            id="synthesis"
            title="A second look at a name field helped explain the score."
          >
            <p>
              P02 rechecked the name field during personalization. I kept that
              observation attached to P02, mobile, T2. My interpretation was
              that the saved choice was difficult to verify. P06’s uncertainty
              about a number and P09’s uncertainty about confirmation supported
              the same theme.
            </p>
            <Visual
              file="research/apparel-affinity.webp"
              original="research/apparel-affinity.png"
              width={4992}
              height={4672}
              alt="Donor affinity map grouping participant notes under discovery, customization feedback, delivery, checkout, and successful paths"
              caption="Each cluster keeps the task outcome, attributed notes, finding and proposed response together. The positive-completion cluster preserves the three successful paths."
            />
            <p>
              The consequence for a shopper was specific: they could enter the
              right details and still be unsure what would be printed. That led
              me to recommend immediate confirmation and a summary that keeps
              the selected name or number visible.
            </p>
            <p className="content-note">
              The worksheet has blank fields for recording sessions and
              decisions, plus a summary of the four findings on page 3. The{' '}
              <a href="#findings">task results section</a> includes the
              completed participant matrix.
            </p>
            <Report file="evidence-workbook">
              Download the research worksheet template
            </Report>
          </Chapter>
          <Chapter
            id="journey"
            title="P09 found delivery details and still hesitated at review."
          >
            <p>
              Mapping the tasks in order helped me see where uncertainty
              returned. {research.spotlight.story} Earlier progress alone could
              not explain that last decision.
            </p>
            <Visual
              file="research/donor-journey.webp"
              original="research/donor-journey.png"
              width={5632}
              height={4512}
              alt="Donor journey from Discover through Choose, Personalize, Check delivery and Review, with P09’s mobile path shown at each stage"
              caption="Choose captures the comparison between discovery and personalization. It has no separate task measure. P09’s spotlight follows their four scored tasks."
            />
            <details className="sbf-appendix">
              <summary>Read the journey by stage</summary>
              <ol className="sbf-journey">
                {research.journey.map((stage) => (
                  <li key={stage.stage}>
                    <h3>{stage.stage}</h3>
                    <p>{stage.text}</p>
                  </li>
                ))}
              </ol>
            </details>
          </Chapter>
          <Chapter id="stakeholders" title="Give SBF a decision it can act on.">
            <p>
              I built the stakeholder presentation around P09’s path. The task
              counts show how often donors reached each goal independently. The
              notes explain why a saved name, an arrival estimate or a changed
              total deserved attention.
            </p>
            <Visual
              file="research/delivery-slide.webp"
              width={1440}
              height={810}
              alt="Briefing slide linking five donors’ difficulty finding delivery details with observations from P01, P05 and P07 and a product-page estimate recommendation"
              caption="Stakeholder briefing, slide 7. Five donors did not find delivery information independently. The notes describe three of those experiences."
            />
            <p>
              For the shopper, delivery timing determines whether an item could
              work as a gift. For SBF, missing information could delay a
              purchase decision. I recommended putting the estimate where the
              shopper considers the item. The deck closes by asking SBF to agree
              on changes to test, identify owners and check platform
              feasibility.
            </p>
            <Report file="stakeholder-presentation">
              Download the stakeholder presentation
            </Report>
          </Chapter>
          <Chapter id="decisions" title="Put delivery and saved choices first.">
            <p>
              I prioritized decisions that affect what someone commits to
              buying. Delivery was the least frequently completed task.
              Personalization and review also carried a consequence for the item
              or amount paid. Discovery had the highest independent completion
              count, and the successful collection and filter paths gave us
              something specific to preserve. These are recommendations to
              evaluate against the live store. Launch does not establish that
              every individual recommendation has been implemented.
            </p>
            <ol className="sbf-priorities">
              {research.findings.map((f) => (
                <li className="sbf-finding" key={f.id}>
                  <p className="eyebrow">
                    {f.id} · {f.priority} priority · {f.task}
                  </p>
                  <h3>{f.decision}</h3>
                  <a href={`#evidence-${f.id}`}>
                    Read the observations for {f.id}
                  </a>
                  <p>
                    <strong>Recommended response.</strong> {f.response}
                  </p>
                  <p>
                    <strong>Intended shopper benefit.</strong> {f.userBenefit}
                  </p>
                  <p>
                    <strong>Potential benefit for SBF.</strong>{' '}
                    {f.organizationBenefit}
                  </p>
                  <p>
                    <strong>Post-launch check.</strong> {f.check}
                  </p>
                  <details className="sbf-appendix">
                    <summary>Implementation consideration</summary>
                    <p>{f.handoff}</p>
                  </details>
                </li>
              ))}
            </ol>
          </Chapter>
          <Chapter
            id="apparel"
            title="From the earlier storefront to the launched experience"
          >
            <p>
              I designed and implemented SBF’s responsive apparel discovery page
              and Resource Center. The apparel page introduces the collection,
              explains custom-order policies and hands shoppers off to the
              store. The redesigned apparel experience is live. The following
              views document my design work. Post-launch testing will assess the
              shopping journey; implementation of each recommendation for saved
              selections, delivery estimates and order review is not yet
              established.
            </p>
            <h3>The earlier storefront</h3>
            <p>
              The earlier store introduced merchandise through a grid of shirts
              and bags. Its catalog offered Women’s Apparel, Men’s Apparel and
              Accessories.
            </p>
            <Visual
              file="store-before-introduction.webp"
              width={3024}
              height={1248}
              alt="Original MySocialButterflies store introduction with a mission statement and apparel and bag imagery"
              caption="Earlier storefront · The introduction directed visitors to the online store."
            />
            <Visual
              file="store-before-catalog.webp"
              width={1596}
              height={1527}
              alt="Earlier catalog with audience-based apparel categories, accessories and product prices"
              caption="Earlier catalog · Product cards showed price ranges and identified the tax exclusion."
            />
            <h3>What the research asks the design to address</h3>
            <p>
              P04 and P07’s discovery difficulties made category language a
              question to test (F03). The delivery finding (F01) showed that
              having policy information available was only part of the problem:
              shoppers needed to find and interpret it while deciding on an
              item. These findings give me specific checks for the redesigned
              discovery page and its handoff to the store.
            </p>
            <p>
              Personalization confirmation (F02) and order clarity (F04) extend
              beyond the discovery page. They inform recommendations for saved
              selections and pre-payment review. The screens below show the
              launched apparel page; follow-up testing will examine the complete
              shopping journey.
            </p>
            <h3>The launched apparel experience</h3>
            <Visual
              file="apparel.webp"
              alt="SBF’s custom jacket beside the Wear Your Strength apparel introduction and collection link"
              caption="Launched apparel page · The jacket and mission message introduce apparel as a way to support SBF."
            />
            <Visual
              file="catalog.webp"
              alt="Existing apparel collection cards organized by clothing type"
              caption="Launched apparel page · Baseball, football, basketball, hockey, hoodies and jackets give shoppers six entry points. F03 calls for checking where people look first and which labels they expect."
            />
            <p>
              Product cards describe the item, price and store destination.
              Sizing, customization, shipping and returns appear in expandable
              policy sections. F01 raises a more specific question for
              post-launch testing: can a shopper explain an arrival estimate
              while considering an individual product? <StoreLink />
            </p>
            <details className="sbf-appendix">
              <summary>Related work · Resource Center</summary>
              <h3 id="resources">A different visitor goal</h3>
              <p>
                I organized the Resource Center around condition education and
                practical assistance with healthcare, prescriptions, food and
                finances. Apparel shopping was the scope of the donor study.
              </p>
              <Visual
                file="resources.webp"
                alt="Resource Center assistance categories and organization cards"
                caption="Related design · Service descriptions and destinations help visitors choose a provider."
              />
              <a
                className="text-link"
                href="https://socialbutterfliesfoundation.org/resources/"
              >
                Visit the Resource Center <ArrowIcon />
              </a>
            </details>
          </Chapter>
          <Chapter id="outcome" title="Launch outcome and next steps">
            <p>
              The redesigned apparel experience is live, and SBF is receiving
              orders through the store. I developed a post-launch survey and
              plan to collect responses, followed by usability testing to
              evaluate whether shoppers can find apparel, confirm
              personalization, locate delivery information, and review their
              orders more easily. I would compare independent task completion
              with the initial study and use the findings, alongside order
              trends and stakeholder feedback, to identify further improvements.
            </p>
            <dl className="sbf-trace sbf-launch-status">
              <div>
                <dt>Launched</dt>
                <dd>The redesigned apparel experience.</dd>
              </div>
              <div>
                <dt>Observed business activity</dt>
                <dd>SBF is receiving orders through the store.</dd>
              </div>
              <div>
                <dt>Next evaluation</dt>
                <dd>
                  Survey developed. Response collection and follow-up usability
                  testing are planned.
                </dd>
              </div>
            </dl>
            <h3>Supporting SBF’s mission</h3>
            <p>
              Beyond the apparel experience, my broader website redesign helped
              SBF explain its mission and how people could support its work. The
              project listing estimated the donated website-design work at
              $11,946 in savings, allowing SBF to direct more resources toward
              programs and services.
            </p>
            <div className="sbf-takeaway sbf-project-value">
              <p className="sbf-value">$11,946</p>
              <p>
                <strong>
                  Estimated savings for the broader website-design project
                </strong>
              </p>
              <p className="content-note">
                Source: SBF’s project listing, reproduced below. This is an
                estimate of donated project value, separate from store revenue
                and usability results.
              </p>
            </div>
            <Visual
              file="project-value-listing.png"
              width={2619}
              height={1157}
              alt="Social Butterflies Foundation project listing describing the website redesign and estimated project savings of $11,946."
              caption="The project listing attributes the estimated savings to the broader website-design engagement."
              original="project-value-listing.png"
              originalLabel="Open the full-resolution project listing"
            />
          </Chapter>
          <Chapter id="post-launch-research" title="Post-Launch Research">
            <p className="sbf-status">
              Survey developed · Response collection planned
            </p>
            <p>
              With the redesigned store live and orders coming in, I developed a
              post-launch survey to understand how supporters experience the
              shopping process outside moderated sessions.
            </p>
            <p>
              The survey revisits the issues identified during the initial
              study, including product discovery, personalization confirmation,
              delivery information, and order clarity. It captures feedback from
              purchasers and visitors who leave without ordering, helping me
              understand what supports a purchase and what still creates
              friction.
            </p>
            <p>
              I plan to use the responses to prioritize improvements and shape
              follow-up usability sessions. Combining this feedback with
              observed task completion and store analytics will help me assess
              how well the experience supports shoppers and SBF’s merchandise
              goals.
            </p>
            <h3>What I want to learn</h3>
            <dl className="sbf-trace">
              <div>
                <dt>Product discovery</dt>
                <dd>
                  Learn whether shoppers report finding apparel easily and
                  identify navigation issues to investigate.
                </dd>
              </div>
              <div>
                <dt>Personalization confidence</dt>
                <dd>
                  Learn whether shoppers understand that their choices have been
                  saved and identify feedback that needs clarification.
                </dd>
              </div>
              <div>
                <dt>Delivery and cost clarity</dt>
                <dd>
                  Learn whether shoppers understand delivery expectations and
                  the amount they will pay before ordering.
                </dd>
              </div>
              <div>
                <dt>Reasons for leaving</dt>
                <dd>
                  Identify reported barriers, including pricing, availability,
                  technical problems, and uncertainty.
                </dd>
              </div>
              <div>
                <dt>Order confidence</dt>
                <dd>
                  Learn whether purchasers believe the recorded order matches
                  their intended selections.
                </dd>
              </div>
            </dl>
            <div className="sbf-pair">
              <div>
                <h3>For shoppers</h3>
                <p>
                  This research will help identify changes that make selecting,
                  personalizing, and reviewing apparel easier.
                </p>
              </div>
              <div>
                <h3>For SBF</h3>
                <p>
                  The responses will help prioritize improvements that could
                  support merchandise sales and reduce avoidable order
                  questions. These are intended benefits to evaluate.
                </p>
              </div>
            </div>
            <div className="sbf-survey-preview">
              <Visual
                file="research/post-launch-survey-preview.webp"
                width={1391}
                height={1800}
                alt="Post-launch survey page 4, with questions 4–7 about finding apparel, attempting personalization, confidence that choices saved, and delivery clarity."
                caption="Questionnaire preview · Page 4 of the prepared survey. Questions include options for shoppers who did not attempt personalization or could not find delivery information."
              />
            </div>
            <a
              className="sbf-download"
              href="/projects/sbf/research/post-launch-survey.pdf"
            >
              View Post-Launch Survey (PDF) <ArrowIcon />
            </a>
            <p className="content-note">
              Response collection and follow-up usability testing are planned.
              The survey will capture reported experiences. Observed task
              completion and store analytics will provide separate evidence;
              incoming orders alone do not establish improvement.
            </p>
          </Chapter>
          <Chapter
            id="validation"
            title="Does the live experience resolve the earlier difficulties?"
          >
            <p>
              Follow-up usability sessions will build on the survey feedback.
              The initial study remains the baseline: 8/10 (80%) independently
              found apparel, 6/10 (60%) personalized an item, 5/10 (50%) found
              delivery information, and 7/10 (70%) reviewed the order.
            </p>
            <p>
              I would repeat the same four core tasks and independent-completion
              criteria with 10 new, comparable prior donors, again five mobile
              and five desktop. Testing would stop before payment. The proposed
              post-launch testing target is{' '}
              <strong>
                at least 9/10 independent completions on each task
              </strong>
              . This is a future target; no post-launch task results are
              available yet.
            </p>
            <p>
              I would record rechecking, backtracking and requests for
              assistance, and ask shoppers to explain whether their
              personalization saved, when the item could arrive, and what costs
              are known. Directional assistance would be recorded separately
              from independent completion. Comparing these observations with the
              baseline would help identify remaining difficulties and any new
              friction.
            </p>
            <p>
              I would start by checking the product-page delivery information.
              If shoppers can find it but still cannot explain when an item
              might arrive, the next revision should address the wording.
              Focused accessibility sessions would examine keyboard navigation,
              visible focus, form feedback and screen-reader announcements
              separately.
            </p>
          </Chapter>
          <Chapter id="reflection" title="What I would do differently">
            <p>
              Looking back, I would include first-time supporters alongside
              prior donors to understand what people unfamiliar with SBF need
              before feeling comfortable purchasing. I would also invite
              feedback on my task wording and interpretation of the findings to
              catch assumptions I might have missed. After making changes, I
              would test the experience again, looking for both improvements and
              new points of friction. For me, research means staying curious,
              being willing to revise my thinking, and continuing to ask where
              the experience could work better.
            </p>
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
