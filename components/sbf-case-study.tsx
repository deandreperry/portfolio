import Image from 'next/image';
import type { ReactNode } from 'react';
import type { CaseStudy } from '@/data/projects';
import { sbfResearch as research } from '@/data/sbf-research';
import { ArrowIcon } from './arrow-icon';
import { CaseStudyTOC, VisualLightbox } from './case-study-tools';
import { ProjectMedia } from './project-media';
const sections = [
  ['overview', 'Research question'],
  ['protocol', 'Study & facilitation'],
  ['synthesis', 'Evidence & synthesis'],
  ['journey', 'Donor journey'],
  ['decisions', 'Design decisions'],
  ['apparel', 'Storefront design'],
  ['resources', 'Related work'],
  ['validation', 'Validation & reflection'],
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
      <p className="eyebrow">{sections.find((s) => s.id === id)?.label}</p>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
function EvidenceLabel() {
  return <p className="sbf-status">{research.label}</p>;
}
function Screen({
  name,
  alt,
  caption,
  width = 1440,
  height = 1000,
  researchMap = false,
}: {
  name: string;
  alt: string;
  caption: string;
  width?: number;
  height?: number;
  researchMap?: boolean;
}) {
  return (
    <figure className="sbf-evidence">
      {researchMap && <EvidenceLabel />}
      <VisualLightbox title={researchMap ? `${research.label} — ${alt}` : alt}>
        <Image
          src={`/projects/sbf/${name}.${researchMap ? 'svg' : 'webp'}`}
          width={width}
          height={height}
          alt={alt}
          loading="lazy"
        />
      </VisualLightbox>
      <figcaption>
        {caption}
        {researchMap && (
          <>
            <br />
            <a
              href={`/projects/sbf/${name}.${researchMap ? 'svg' : 'webp'}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open this map at full resolution
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </>
        )}
      </figcaption>
    </figure>
  );
}
function StoreLink() {
  return (
    <a
      className="text-link"
      href="https://socialbutterfliesfoundation.org/custom-apparel/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Visit the live apparel experience (opens in a new tab)"
    >
      Visit the live apparel experience <ArrowIcon />
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
        <p className="eyebrow">Social Butterflies Foundation</p>
        <h1>What helps supporters buy custom apparel with confidence?</h1>
        <EvidenceLabel />
        <p className="section-lede">
          I designed and implemented SBF’s responsive apparel discovery page and
          Resource Center. This study investigates the broader shopping journey,
          from finding an item to reviewing an order.
        </p>
        <p className="sbf-hero-insight">
          The central insight: finding a product does not resolve uncertainty
          about customization, delivery, or the final cost.
        </p>
        <div className="case-project-links">
          <a className="button button-primary" href="#overview">
            View the research walkthrough <ArrowIcon down />
          </a>
          <StoreLink />
        </div>
        <dl className="case-metadata">
          <div>
            <dt>Organization’s goal</dt>
            <dd>Connect apparel purchases with support for SBF’s mission</dd>
          </div>
          <div>
            <dt>My contribution</dt>
            <dd>UX/UI design and responsive implementation</dd>
          </div>
          <div>
            <dt>Live design scope</dt>
            <dd>Apparel discovery, store handoff, and resource access</dd>
          </div>
          <div>
            <dt>Research walkthrough</dt>
            <dd>Moderated usability study, synthesis, and recommendations</dd>
          </div>
        </dl>
        <Screen
          name="apparel"
          alt="SBF apparel page with a custom jacket and the message Wear Your Strength. Represent the Fight."
          caption="Live design · The apparel page introduces the collection and links to the store. Personalization and checkout proposals below are outside this page’s delivered scope."
        />
      </header>
      <div className="case-layout shell">
        <CaseStudyTOC sections={sections} />
        <article className="case-body">
          <Chapter
            id="overview"
            title="What information makes a supporter ready to buy?"
          >
            <p>
              SBF supports people and families impacted by lupus and
              fibromyalgia. Apparel gives supporters another way to contribute
              and express that connection. A purchase also requires practical
              decisions about the item, its personalization, arrival timing, and
              total cost.
            </p>
            <p>
              I investigated those decisions beyond the discovery page I built
              through a moderated study with 10 prior donors. The task outcomes
              and observation notes connect each finding to the behavior that
              informed it.
            </p>
            <ul className="sbf-questions">
              <li>
                Where do supporters expect to find apparel, and which category
                labels make sense?
              </li>
              <li>
                How can shoppers tell that their name or number has saved?
              </li>
              <li>
                Can they find and explain production and delivery information
                before deciding?
              </li>
              <li>
                Can they verify their selections and full cost before payment?
              </li>
            </ul>
          </Chapter>
          <Chapter
            id="protocol"
            title="Observe the decision before offering help."
          >
            <EvidenceLabel />
            <p>
              The study used one formative round of moderated think-aloud
              sessions with 10 prior donors, split evenly between mobile and
              desktop. The protocol allocated approximately 35 minutes per
              session, with no payment required.
            </p>
            <p>
              Prior donors connect the shopping question to SBF’s mission.
              Recruitment through the donor network included one-time,
              recurring, and event supporters. Their familiarity may increase
              trust, so I would not assume their behavior represents first-time
              shoppers.
            </p>
            <h3>Four tasks, without directions to a feature</h3>
            <ol className="sbf-task-list">
              {research.tasks.map((task) => (
                <li key={task.id}>
                  <h4>
                    {task.id} · {task.name}
                  </h4>
                  <p>{task.script}</p>
                </li>
              ))}
            </ol>
            <div className="sbf-pair">
              <div>
                <h3>Record the outcome consistently</h3>
                <p>
                  <strong>Independent</strong> means completing the task and
                  explaining the relevant selection or information without
                  directed help. <strong>Assisted</strong> means completion
                  after moderator guidance beyond repeating the scenario.{' '}
                  <strong>Incomplete</strong> means the task’s success criterion
                  was not met.
                </p>
                <p>
                  The task matrix contains independent and incomplete outcomes
                  only. No assisted completions were recorded.
                </p>
              </div>
              <div>
                <h3>Facilitate without steering</h3>
                <p>
                  I first observed the action and allowed a pause. When an
                  expectation needed clarification, I asked “What did you expect
                  to happen?” or “What would you do next?”
                </p>
                <p>
                  If a participant needs a hint to continue, the moderator logs
                  the assistance and its timing separately. Pointing out a
                  shipping link would change the evidence about whether it was
                  findable.
                </p>
              </div>
            </div>
            <blockquote className="sbf-takeaway">
              <p>
                “We are testing how the store works, not you. Please say what
                you expect, notice, or find confusing. You can stop at any time.
                We will not ask you to place a real order or enter payment
                information.”
              </p>
              <footer>Facilitator opening</footer>
            </blockquote>
            <p>
              Participation was voluntary, with consent for notes and optional
              recording. Anonymous IDs P01–P10 replace names. Donation amounts
              and health information are not needed.
            </p>
          </Chapter>
          <Chapter
            id="synthesis"
            title="Trace each finding back to a behavior."
          >
            <table className="sbf-results">
              <caption>{research.label} · Independent task completion</caption>
              <thead>
                <tr>
                  <th scope="col">Task</th>
                  <th scope="col">Independently completed</th>
                </tr>
              </thead>
              <tbody>
                {research.tasks.map((task) => (
                  <tr key={task.id}>
                    <th scope="row">
                      {task.id} · {task.name}
                    </th>
                    <td>
                      {task.completed}/{research.sample}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p>
              These counts describe the study’s task outcomes. A task outcome
              identifies where to investigate; the notes help explain what
              happened. They are not conversion measures or estimates of how all
              supporters would behave.
            </p>
            <div className="sbf-synthesis-grid">
              <Screen
                name="affinity-map-study"
                width={1590}
                height={1370}
                researchMap
                alt="Apparel study affinity map grouping discovery, customization, delivery, order review, and positive paths"
                caption="Moderated usability study · 10 prior donors. Expand the standalone board to read the observation notes. The themes and evidence are also described in the adjacent text and findings below."
              />
              <div>
                <h3>From P02’s action to a proposal</h3>
                <dl className="sbf-trace">
                  <div>
                    <dt>Observation</dt>
                    <dd>
                      P02, on mobile during T2, entered a name, returned to the
                      summary, and rechecked the name field.
                    </dd>
                  </div>
                  <div>
                    <dt>Code</dt>
                    <dd>Uncertainty about whether personalization saved.</dd>
                  </div>
                  <div>
                    <dt>Interpretation</dt>
                    <dd>
                      The saved state may not be clear enough. P06 and P09’s
                      notes also describe uncertainty about applied choices.
                    </dd>
                  </div>
                  <div>
                    <dt>Proposed response</dt>
                    <dd>
                      Confirm the update immediately and keep the chosen name or
                      number visible in a persistent summary.
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
            <h3>Keep the paths that worked</h3>
            <p>
              {research.positivePaths.join(', ')} independently completed all
              four tasks. P03 found an item through a collection and confirmed
              choices in the summary. P08 used category filters and followed the
              intended path. P10 checked the purchase total and continued
              confidently.
            </p>
            <p>
              I compared these paths with the difficult ones before changing
              navigation or review. Collections, filters, and visible order
              details may already support useful behavior. Those differences are
              worth investigating rather than flattening into a single negative
              story.
            </p>
            <details className="sbf-appendix">
              <summary>Research appendix · Coding and observation note</summary>
              <EvidenceLabel />
              <p>
                One observation per note, with participant ID and task attached.
                Group by behavior, name a candidate theme, compare it with task
                outcomes, and retain exceptions before proposing a response.
              </p>
              <p>
                <strong>Sample note — P02 · Mobile · T2.</strong> Entered a name
                and returned to the summary. Paused and looked back at the input
                field. Paraphrased response indicated a need for clearer
                confirmation. Outcome was incomplete against the independent
                success criterion. Code: customization confirmation / unclear
                system status.
              </p>
              <p>
                <strong>Codebook.</strong> Findability covers category discovery
                (P04, P07). Customization feedback covers uncertainty about
                applied details (P02, P06, P09). Delivery confidence covers
                locating fulfillment information (P01, P05, P07, with T3
                incomplete for P02 and P04 as well). Checkout confidence covers
                reaching or trusting review (P04, P07, P09). Positive completion
                retains P03, P08, and P10.
              </p>
            </details>
          </Chapter>
          <Chapter
            id="journey"
            title="Finding the item and trusting the order are different steps."
          >
            <Screen
              name="journey-map-study"
              width={1590}
              height={1260}
              researchMap
              alt="Donor journey from Discover to Choose, Personalize, Assess trust, and Review, with P09 spotlight"
              caption="Moderated usability study · 10 prior donors. Choose is a journey stage without a separate task measure. The combined view includes both research boards."
            />
            <a
              className="text-link"
              href="/projects/sbf/research-boards-study.svg"
              target="_blank"
              rel="noopener noreferrer"
            >
              View both research boards{' '}
              <span className="sr-only">(opens in a new tab)</span>
              <ArrowIcon />
            </a>
            <ol className="sbf-journey">
              {research.journey.map((stage) => {
                const task = research.tasks.find((t) => t.id === stage.task);
                return (
                  <li key={stage.stage}>
                    <h3>{stage.stage}</h3>
                    <p>{stage.text}</p>
                    <p className="sbf-stage-measure">
                      {task
                        ? `${task.id} · ${task.completed}/${research.sample} independently completed`
                        : 'No separate task measure'}
                    </p>
                  </li>
                );
              })}
            </ol>
            <aside className="sbf-takeaway">
              <EvidenceLabel />
              <h3>
                {research.spotlight.id} · {research.spotlight.context}
              </h3>
              <p>{research.spotlight.story}</p>
              <p>
                This contrast is why I examined saved choices and changing costs
                separately from discovery. P09 could locate delivery
                information, but that did not resolve uncertainty about the
                order.
              </p>
            </aside>
          </Chapter>
          <Chapter
            id="decisions"
            title="Prioritize the decisions that stop a purchase."
          >
            <EvidenceLabel />
            <p>
              I rank delivery, personalization, and order review as high
              priority because they affect whether a shopper can make an
              informed commitment. Category labeling is medium priority. Its two
              incomplete tasks matter, but frequency alone does not determine
              severity. The decision affected and the consequence of uncertainty
              also shape the order.
            </p>
            <div className="sbf-findings">
              {research.findings.map((finding) => {
                const task = research.tasks.find((t) => t.id === finding.task)!;
                return (
                  <section key={finding.id} className="sbf-finding">
                    <p className="eyebrow">
                      {finding.id} · {finding.priority} priority · Proposed
                      response
                    </p>
                    <h3>{finding.title}</h3>
                    <p>
                      <strong>
                        {task.id} · {task.completed}/{research.sample}{' '}
                        independent; {research.sample - task.completed}/
                        {research.sample} incomplete.
                      </strong>{' '}
                      {finding.behavior}
                    </p>
                    <dl className="sbf-trace">
                      <div>
                        <dt>Decision affected</dt>
                        <dd>{finding.decision}</dd>
                      </div>
                      <div>
                        <dt>Proposed response</dt>
                        <dd>{finding.response}</dd>
                      </div>
                      <div>
                        <dt>Follow-up check</dt>
                        <dd>{finding.check}</dd>
                      </div>
                    </dl>
                    <p>
                      <strong>Handoff consideration.</strong> {finding.handoff}
                    </p>
                  </section>
                );
              })}
            </div>
            <h3>
              Bring the evidence and the constraint to the same conversation
            </h3>
            <p>
              I would bring SBF one decision record per finding, including the
              task, observation, consequence, proposed response, and follow-up
              check. Together we would record accept, revise, or defer and agree
              who owns the next step. These handoffs and checkout changes remain
              proposed.
            </p>
          </Chapter>
          <Chapter
            id="apparel"
            title="The storefront I designed starts with recognition."
          >
            <h3>Before · Introducing the original store</h3>
            <p>
              The previous experience introduced MySocialButterflies through a
              short mission statement, a link to the store, and a grid of
              apparel and accessories. The storefront grouped products under
              Women’s Apparel, Men’s Apparel, and Accessories, followed by
              individual product cards with names, price ranges, and tax
              information.
            </p>
            <Screen
              name="store-before-introduction"
              width={3024}
              height={1248}
              alt="Previous SBF store introduction with mission copy, a MySocialButterflies link, and a grid of shirts and bags"
              caption="Before · The original introduction connected merchandise to SBF’s mission and directed visitors to MySocialButterflies."
            />
            <Screen
              name="store-before-catalog"
              width={1596}
              height={1527}
              alt="Previous storefront with Women’s Apparel, Men’s Apparel, and Accessories categories above product cards with price ranges"
              caption="Before · The original catalog used audience-based apparel categories and an accessories category. Product cards displayed price ranges and noted that Virginia tax was excluded."
            />
            <h3>After · Lead with the custom collection</h3>
            <p>
              I gave the custom apparel landing page a product-led introduction
              and clothing-type entry points. These views document the changes
              to apparel discovery. Customization and order-review
              recommendations are discussed separately above.
            </p>
            <p>
              The live apparel page pairs a dominant jacket image with “Wear
              Your Strength. Represent the Fight.” I used the product image and
              mission messaging to introduce the collection before asking
              visitors to choose a category.
            </p>
            <Screen
              name="apparel"
              alt="Live SBF apparel hero combining jacket photography, mission messaging, and a collection action"
              caption="Live design · Product imagery gives the collection a clear focal point. This screenshot documents the apparel landing page, not the proposed personalization or order-review interactions."
            />
            <h3>Six entry points into the collection</h3>
            <p>
              Baseball, football, basketball, hockey, hoodies, and jackets
              organize the range. I used consistent image areas and card
              structure to help visitors compare categories and continue to the
              store.
            </p>
            <Screen
              name="catalog"
              alt="Live SBF collection cards with clothing categories and product images"
              caption="Live design · Six category entry points support apparel discovery. F03 proposes evaluating the labels and placement, without treating these cards as proof that a labeling change was validated."
            />
            <div className="sbf-pair">
              <div>
                <h3>Explain the commitment</h3>
                <p>
                  Product cards include a name, price, description, and store
                  destination. Expandable sections cover returns, shipping,
                  sizing, and customization, with returns open by default. Their
                  position late in the page makes discovery of those details a
                  useful follow-up question.
                </p>
              </div>
              <div>
                <h3>Keep the scope clear</h3>
                <p>
                  I implemented responsive page layouts and the handoff to the
                  existing store. The pictured pages do not contain a
                  configurator, cart, or order review. F01–F04 are proposals for
                  evaluation across the broader shopping journey.
                </p>
              </div>
            </div>
            <StoreLink />
          </Chapter>
          <Chapter
            id="resources"
            title="Related work for a different kind of support."
          >
            <p>
              I also designed and implemented the Resource Center. Its goal is
              to help visitors find education and assistance. Condition
              education covers overview, symptoms, diagnosis, and management.
              Practical assistance is grouped into healthcare, prescriptions,
              food, and finances.
            </p>
            <Screen
              name="resources"
              alt="SBF Resource Center with assistance category headings and organization cards"
              caption="Live design · Organization names, service descriptions, and visible destinations help visitors choose a resource. This contribution is separate from the apparel research walkthrough."
            />
            <p>
              The shared purple and lavender identity connects the pages, while
              resource cards emphasize who provides help and where a link leads.
              A future evaluation could examine whether visitors seeking
              practical help can reach it quickly after the education sections.
            </p>
            <a
              className="text-link"
              href="https://socialbutterfliesfoundation.org/resources/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Explore the Resource Center (opens in a new tab)"
            >
              Explore the Resource Center <ArrowIcon />
            </a>
          </Chapter>
          <Chapter
            id="validation"
            title="Test whether the information supports the decision."
          >
            <div className="sbf-checks">
              <div>
                <h3>Delivered design</h3>
                <p>
                  Responsive apparel discovery and resource pages, six apparel
                  category entry points, policy information, and links to the
                  existing store and support organizations.
                </p>
              </div>
              <div>
                <h3>Research findings</h3>
                <p>
                  A study protocol, participant observations, synthesis,
                  priorities, and proposed design responses. The findings
                  connect behavior to specific, testable design decisions.
                </p>
              </div>
            </div>
            <h3>Follow-up evaluation</h3>
            <p>
              I would repeat all four tasks with a new group that includes
              first-time shoppers. Track independent completion, rechecking,
              backtracking, and whether people can accurately explain delivery
              timing and order totals. Keep assistance separate from independent
              completion.
            </p>
            <p>
              A future target is at least 9/10 independent completions per task.
              This is a future target; the proposed changes have not yet been
              evaluated. First-time shoppers would also help reveal how much
              trust comes from familiarity with SBF.
            </p>
            <p>
              The proposed interactions need keyboard navigation, visible focus,
              form labels, error recovery, and screen-reader checks. Confirm
              that saved-state feedback is announced and that updated totals
              remain understandable without relying on color alone.
            </p>
            <h3>Limits and the next decision</h3>
            <p>
              The sample includes 10 prior donors, one formative round, and
              simulated checkout without payment. It cannot establish revenue,
              conversion uplift, or how common these behaviors are among all
              shoppers. Mixing mobile and desktop paths also requires attention
              to device differences.
            </p>
            <p>
              This study sharpened the distinction I make between finding an
              item and knowing enough to commit. My next decision would be
              whether product-page delivery information lets shoppers explain an
              arrival estimate before entering checkout. I would test that
              first, then use their behavior to decide whether the information,
              its placement, or both need to change.
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
