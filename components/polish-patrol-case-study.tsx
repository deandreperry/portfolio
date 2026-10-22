import Image from 'next/image';
import type { ReactNode } from 'react';
import type { CaseStudy } from '@/data/projects';
import { ArrowIcon } from './arrow-icon';
import { CaseStudyTOC, VisualLightbox } from './case-study-tools';
import { PolishPatrolCover } from './polish-patrol-cover';
import { ProjectMedia } from './project-media';
const sections = [
  ['overview', 'At a glance'],
  ['evidence', 'Review & priorities'],
  ['routing', 'Service journeys'],
  ['pricing', 'Pricing & content'],
  ['mobile', 'Mobile experience'],
  ['hiring', 'Client feedback'],
  ['delivery', 'Delivery & constraints'],
  ['outcome', 'Outcome & next steps'],
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
        {String(sections.findIndex((s) => s.id === id) + 1).padStart(2, '0')} /{' '}
        {sections.find((s) => s.id === id)?.label}
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
  width = 1440,
  height = 1000,
}: {
  name: string;
  alt: string;
  caption: string;
  width?: number;
  height?: number;
}) {
  return (
    <figure className="polish-evidence">
      <VisualLightbox title={alt}>
        <Image
          src={`/projects/polish-patrol/${name}.webp`}
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
export function PolishPatrolCaseStudy({
  nextProject,
}: {
  nextProject: CaseStudy;
}) {
  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="narrative-page polish-study"
    >
      <header className="case-hero shell">
        <a href="/work" className="text-link">
          ← All work
        </a>
        <p className="eyebrow">02 / CLIENT WEBSITE REDESIGN · 2026</p>
        <h1>Polish Patrol</h1>
        <p className="narrative-deck">A clearer path to a cleaner space.</p>
        <p className="section-lede">
          Helping homeowners, business customers, and job applicants find the
          right next step through clearer services, pricing, and booking flows.
        </p>
        <dl className="case-metadata">
          <div>
            <dt>My role</dt>
            <dd>UX design, content & frontend development</dd>
          </div>
          <div>
            <dt>Platform</dt>
            <dd>Responsive web & hosted forms</dd>
          </div>
          <div>
            <dt>Focus</dt>
            <dd>Service selection & booking</dd>
          </div>
          <div>
            <dt>Delivery</dt>
            <dd>2026</dd>
          </div>
        </dl>
        <div className="case-project-links">
          <a
            className="button button-primary"
            href="https://polishpatrol.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Polish Patrol (opens in a new tab)"
          >
            Visit the website <ArrowIcon />
          </a>
        </div>
        <PolishPatrolCover />
      </header>
      <div className="case-layout shell">
        <CaseStudyTOC sections={sections} />
        <article className="case-body">
          <Chapter
            id="overview"
            title="One business. Different reasons to visit."
          >
            <p className="section-lede">
              Choosing a service should not lead to a form built for a different
              customer.
            </p>
            <dl className="study-at-a-glance">
              <div>
                <dt>The problem</dt>
                <dd>
                  Some commercial and custom-cleaning actions opened a
                  residential booking form built around bedrooms and bathrooms.
                </dd>
              </div>
              <div>
                <dt>The approach</dt>
                <dd>
                  Review destinations, separate service journeys, explain
                  starting prices, and refine mobile navigation with the
                  client’s feedback.
                </dd>
              </div>
              <div>
                <dt>The delivery</dt>
                <dd>
                  Service-specific forms, consistent pricing language, a shorter
                  application path, and responsive interface refinements.
                </dd>
              </div>
            </dl>
            <h3>Contribution & collaboration</h3>
            <p>
              My responsibilities covered website review, user flows, content,
              interface design, frontend updates, and QA. The client supplied
              business policies, form destinations, and annotated feedback.
              TidyTrack managed the hosted forms, which set the boundaries for
              booking and application changes.
            </p>
          </Chapter>
          <Chapter
            id="evidence"
            title="Fix the wrong destination before polishing the page."
          >
            <div className="polish-findings">
              <div>
                <h3>Client feedback</h3>
                <p>
                  Annotated screenshots called out pricing, button spacing,
                  mobile navigation, and extra steps in the hiring journey.
                </p>
              </div>
              <div>
                <h3>Website review</h3>
                <p>
                  Following service links exposed a mismatch between the
                  selected service and the information requested by the
                  destination form.
                </p>
              </div>
              <div>
                <h3>Browser checks</h3>
                <p>
                  Navigation, responsive layouts, form loading, and
                  accessibility checks identified problems that could be
                  addressed on the website or referred to the provider.
                </p>
              </div>
            </div>
            <div className="polish-takeaway">
              <h3>Priority followed the consequence</h3>
              <p>
                Incorrect forms came first because they interrupted the task.
                Pricing clarity followed, then mobile orientation and visual
                consistency.
              </p>
            </div>
            <p>
              These decisions came from client feedback and website review.
              Customer interviews and formal usability testing were outside this
              phase.
            </p>
          </Chapter>
          <Chapter id="routing" title="Match the next step to the service.">
            <p>
              A single booking link was easier to maintain, but it asked
              different customers to follow the same process. Residential
              customers could book from defined options; commercial and custom
              work needed a conversation about scope.
            </p>
            <div className="polish-journeys">
              {[
                [
                  'Residential',
                  'Compare services',
                  'Review starting prices',
                  'Book online',
                ],
                [
                  'Commercial',
                  'Explore business cleaning',
                  'Describe the scope',
                  'Team follow-up',
                ],
                [
                  'Custom cleaning',
                  'Review service options',
                  'Send a contact request',
                  'Individual review',
                ],
              ].map(([label, ...steps]) => (
                <div key={label}>
                  <h3>{label}</h3>
                  <ol>
                    {steps.map((step) => (
                      <li key={step}>{step}</li>
                    ))}
                  </ol>
                </div>
              ))}
            </div>
            <p>
              Shared destinations now keep service cards, navigation, footer
              links, and mobile booking actions consistent. Commercial inquiry
              buttons lead to the scope-review form; custom and
              post-construction requests lead to the contact form.
            </p>
            <Screen
              name="commercial"
              alt="Commercial cleaning page with a dedicated scope-review action"
              caption="Business customers describe their property and cleaning needs before the team provides a quote."
            />
          </Chapter>
          <Chapter
            id="pricing"
            title="Explain the price before asking for a commitment."
          >
            <p>
              The pricing menu compares three services across six
              bedroom-and-bathroom configurations. Adding “+” to starting rates
              makes room for differences in property condition, size, and
              additional work.
            </p>
            <Screen
              name="pricing-detail"
              width={1178}
              height={592}
              alt="Pricing comparison with three linked service headings and plus signs on starting rates"
              caption="Service names lead to details about what is included. Each advertised rate is clearly marked as a starting price."
            />
            <div className="polish-pair">
              <div>
                <h3>Separate service from frequency</h3>
                <p>
                  “Recurring Cleaning” became “Standard Cleaning.” Customers can
                  choose the service without assuming a recurring commitment; a
                  one-time visit remains an option.
                </p>
              </div>
              <div>
                <h3>Keep payment amounts exact</h3>
                <p>
                  The “+” belongs on advertised rates, not deposits or checkout
                  totals. Shared policy content keeps deposit, cancellation, and
                  additional-work explanations consistent across FAQ and Terms
                  pages.
                </p>
              </div>
            </div>
          </Chapter>
          <Chapter
            id="mobile"
            title="Keep the next step clear on a smaller screen."
          >
            <div className="polish-mobile-story">
              <div>
                <p>
                  The client’s screenshots showed a booking button too close to
                  its paragraph, no current-page indicator in the menu, and
                  inconsistent image corners.
                </p>
                <h3>Small changes with a clear purpose</h3>
                <ul>
                  <li>
                    More space above buttons separates the action from
                    supporting text.
                  </li>
                  <li>
                    A visible current-page state helps visitors stay oriented.
                  </li>
                  <li>
                    Stacked pricing groups keep service comparisons readable.
                  </li>
                  <li>
                    The persistent booking bar is identified as navigation for
                    assistive technology.
                  </li>
                </ul>
                <h3>A service-area fallback</h3>
                <p>
                  Irving was added to the coverage content and ZIP list. An
                  unlisted ZIP code can still be submitted for review, so a
                  missing entry does not automatically rule out a customer.
                </p>
                <p>
                  The provider keeps its own coverage settings; those
                  restrictions need to be checked separately.
                </p>
              </div>
              <Screen
                name="mobile"
                width={390}
                height={844}
                alt="Mobile service pricing with stacked prices and persistent booking navigation"
                caption="The responsive pricing view at 390px."
              />
            </div>
          </Chapter>
          <Chapter
            id="hiring"
            title="Client feedback changed the hiring journey."
          >
            <p>
              The first approach sent applicants straight to the provider’s
              careers page. The client wanted to retain the company introduction
              and application guidance.
            </p>
            <div className="polish-pair">
              <div>
                <p className="eyebrow">Initial approach</p>
                <h3>Go directly to the provider</h3>
                <p>
                  A shorter route removed Polish Patrol’s own team introduction.
                </p>
              </div>
              <div>
                <p className="eyebrow">Revised approach</p>
                <h3>Keep the context, remove the repeat</h3>
                <p>
                  The restored “Join the Patrol” page leads directly to the full
                  application, skipping a second introduction page.
                </p>
              </div>
            </div>
            <Screen
              name="hiring"
              alt="Polish Patrol hiring page introducing the team and linking to the application"
              caption="The company page gives applicants context before they begin the hosted application."
            />
            <p>
              At the client’s request, the application opens in a new tab so the
              company page stays available. Application completion has not yet
              been measured.
            </p>
          </Chapter>
          <Chapter
            id="delivery"
            title="Work within the booking system’s boundaries."
          >
            <p>
              The existing residential widget and commercial form remained in
              place. Rebuilding them would have changed the submission process
              and expanded the scope beyond the website redesign.
            </p>
            <div className="polish-pair">
              <div>
                <h3>Website changes</h3>
                <p>
                  Descriptive embed titles, direct fallback links, and form
                  resizing help customers identify the form and reach its final
                  fields. Shared content keeps policies and destinations
                  consistent.
                </p>
              </div>
              <div>
                <h3>Provider follow-up</h3>
                <p>
                  Form-button styling, address autocomplete, percentage tipping,
                  and hosted-form accessibility issues were collected in a
                  TidyTrack checklist for the client.
                </p>
              </div>
            </div>
            <p>
              This kept unresolved provider issues visible instead of treating
              the website changes as a fix for everything in the booking
              journey. AI tools assisted with code and QA.
            </p>
          </Chapter>
          <Chapter
            id="outcome"
            title="A clearer route from interest to action."
          >
            <ul>
              <li>
                Residential, commercial, and custom requests now reach distinct,
                appropriate forms.
              </li>
              <li>
                Starting-price language and service details are consistent.
              </li>
              <li>
                The hiring page retains company context and leads directly to
                the application.
              </li>
              <li>Mobile navigation and pricing are easier to scan.</li>
            </ul>
            <p>
              Browser checks covered navigation, layouts, and form loading
              without sending live inquiries or payments. Mobile checks used
              browser emulation. They establish technical behavior, not an
              improvement in conversion or customer satisfaction.
            </p>
            <h3>What comes next</h3>
            <p>
              Task-based sessions with homeowners, business customers, and
              applicants would test whether people can choose a service, explain
              a starting price, and find the correct form. Booking starts and
              completions should be compared using provider records, with a
              baseline and comparable reporting period.
            </p>
            <div className="polish-takeaway">
              <h3>The lesson</h3>
              <p>
                A shorter journey is not always a better one. Restoring the
                hiring introduction preserved context the client valued;
                removing the repeated introduction made the next step more
                direct.
              </p>
            </div>
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
