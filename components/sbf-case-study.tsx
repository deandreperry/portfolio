import Image from 'next/image';
import type { ReactNode } from 'react';
import type { CaseStudy } from '@/data/projects';
import { ArrowIcon } from './arrow-icon';
import { CaseStudyTOC, VisualLightbox } from './case-study-tools';
import { SbfCover } from './sbf-cover';
import { ProjectMedia } from './project-media';
const sections = [
  ['overview', 'The challenge'],
  ['apparel', 'Apparel discovery'],
  ['resources', 'Finding assistance'],
  ['system', 'Visual system'],
  ['evaluation', 'Evaluation & scope'],
  ['reflection', 'Reflection'],
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
function Screen({
  name,
  alt,
  caption,
}: {
  name: string;
  alt: string;
  caption: string;
}) {
  return (
    <figure className="sbf-evidence">
      <VisualLightbox title={alt}>
        <Image
          src={`/projects/sbf/${name}.webp`}
          width={1440}
          height={1000}
          alt={alt}
          loading="lazy"
        />
      </VisualLightbox>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}
export function SbfCaseStudy({ nextProject }: { nextProject: CaseStudy }) {
  return (
    <main id="main-content" tabIndex={-1} className="narrative-page sbf-study">
      <header className="case-hero shell">
        <a href="/work" className="text-link">
          ← All work
        </a>
        <p className="eyebrow">
          03 / VISUAL DESIGN & INFORMATION ARCHITECTURE · 2026
        </p>
        <h1>Social Butterflies Foundation</h1>
        <p className="narrative-deck">Designing both sides of support.</p>
        <p className="section-lede">
          An expressive apparel experience and a practical resource destination
          for a foundation supporting people and families impacted by lupus and
          fibromyalgia.
        </p>
        <dl className="case-metadata">
          <div>
            <dt>Contribution</dt>
            <dd>UX/UI design & implementation</dd>
          </div>
          <div>
            <dt>Focus</dt>
            <dd>Merchandise discovery & resource access</dd>
          </div>
          <div>
            <dt>Platform</dt>
            <dd>Responsive web for WordPress</dd>
          </div>
          <div>
            <dt>Evidence</dt>
            <dd>Designed pages & interface review</dd>
          </div>
        </dl>
        <div className="case-project-links">
          <a
            className="button button-primary"
            href="https://socialbutterfliesfoundation.org/custom-apparel/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Explore Custom Apparel (opens in a new tab)"
          >
            Explore Custom Apparel <ArrowIcon />
          </a>
          <a
            className="text-link"
            href="https://socialbutterfliesfoundation.org/resources/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Explore the Resource Center (opens in a new tab)"
          >
            Explore the Resource Center <ArrowIcon />
          </a>
        </div>
        <SbfCover />
      </header>
      <div className="case-layout shell">
        <CaseStudyTOC sections={sections} />
        <article className="case-body">
          <Chapter id="overview" title="One mission. Two different moments.">
            <p className="section-lede">
              A supporter browsing a custom jersey can take time to explore.
              Someone seeking prescription assistance needs a useful destination
              quickly.
            </p>
            <p>
              This work focuses on Custom Apparel and the Resource Center within
              the broader website redesign. Both share a recognizable identity,
              while their structure responds to different visitor goals.
            </p>
            <div className="sbf-pair">
              <div>
                <h3>Show support</h3>
                <p>
                  Recognize the collection, compare clothing types, understand
                  custom-order conditions, and continue to the store.
                </p>
              </div>
              <div>
                <h3>Find support</h3>
                <p>
                  Identify a relevant assistance category, understand what an
                  organization provides, and reach the right destination.
                </p>
              </div>
            </div>
            <p>
              My contribution covered UX/UI design and the responsive page
              implementations. The work presented here is based on the page
              designs and their review, rather than interviews or a completed
              usability study.
            </p>
            <div className="sbf-takeaway">
              <h3>Recognition and direction have different jobs</h3>
              <p>
                The brand connects the pages. The hierarchy helps each visitor
                decide where to go next.
              </p>
            </div>
          </Chapter>
          <Chapter id="apparel" title="Give merchandise a role in the mission.">
            <p>
              The apparel hero pairs a dominant jacket image with “Wear Your
              Strength. Represent the Fight.” It establishes the collection’s
              meaning before the category index introduces concrete choices.
            </p>
            <Screen
              name="apparel"
              alt="Purple SBF apparel hero with a custom jacket and collection action"
              caption="The product is the focal point; supporting copy connects apparel to awareness and community."
            />
            <div className="sbf-pair">
              <div>
                <h3>Begin with a familiar category</h3>
                <p>
                  Baseball, football, basketball, hockey, hoodies, and jackets
                  provide six entry points. Square image areas and consistent
                  card structure help visitors compare the collection.
                </p>
              </div>
              <div>
                <h3>Explain the commitment</h3>
                <p>
                  Product cards show a name, price, description, and store
                  destination. Expandable sections cover returns, shipping,
                  sizing, and customization; returns are open by default.
                </p>
              </div>
            </div>
            <Screen
              name="catalog"
              alt="SBF collection category cards showing clothing types and product imagery"
              caption="Category-led browsing organizes a varied collection without giving every item equal prominence."
            />
            <h3>The tradeoff: meaning adds length</h3>
            <p>
              The mission narrative gives the collection context but delays the
              catalog. Policies also sit late in the page. Task-based testing
              should check whether shoppers can find a style and understand
              sizing and return conditions before they leave for the store.
            </p>
            <ol className="sbf-flow">
              <li>Understand the collection</li>
              <li>Choose a category</li>
              <li>Browse the SBF store</li>
            </ol>
            <p>
              The scope is discovery and the store handoff. These pages do not
              include a product configurator, cart, or checkout.
            </p>
          </Chapter>
          <Chapter
            id="resources"
            title="Organize information around a recognizable need."
          >
            <p>
              The Resource Center separates condition education from practical
              assistance. Parallel education sections cover overview, symptoms,
              diagnosis, and management; assistance groups address healthcare,
              prescriptions, food, and finances.
            </p>
            <Screen
              name="resources"
              alt="Resource Center assistance section with named organizations and category headings"
              caption="Organization names, service descriptions, and visible destinations help explain where a resource link will lead."
            />
            <div className="sbf-pair">
              <div>
                <h3>Make the destination visible</h3>
                <p>
                  Resource cards name the organization and show its domain, with
                  a description or geographic context where available. A contact
                  route helps when none of the categories fits.
                </p>
              </div>
              <div>
                <h3>Keep the structure maintainable</h3>
                <p>
                  Consistent headings and cards allow organizations and programs
                  to change without redesigning the entire page. Link
                  specificity still needs review: a provider homepage may leave
                  visitors searching again.
                </p>
              </div>
            </div>
            <div className="sbf-takeaway">
              <h3>Education comes first. Urgent intent may not.</h3>
              <p>
                Lengthy education sections precede practical assistance. A
                proposed next iteration would test a “What do you need?” jump
                menu near the top, including a clearly discoverable
                urgent-support route. This is a next step, not a feature of the
                current design.
              </p>
            </div>
          </Chapter>
          <Chapter
            id="system"
            title="A shared identity, with room for different priorities."
          >
            <p>
              Poppins typography, purple actions, lavender surfaces, dark text,
              rounded cards, and pill-shaped buttons connect the pages. Apparel
              gives product imagery more space; resources uses the same identity
              to distinguish sections and actions.
            </p>
            <div className="sbf-swatches">
              {[
                ['Brand purple', '#6D01AD'],
                ['Light lavender', '#F7F1FB'],
                ['Text ink', '#29272C'],
              ].map(([label, color]) => (
                <div key={label}>
                  <span style={{ backgroundColor: color }} aria-hidden="true" />
                  <h3>{label}</h3>
                  <p>{color}</p>
                </div>
              ))}
            </div>
            <h3>Card content follows the decision</h3>
            <p>
              A merchandise card answers what the item looks like, what it
              costs, and where to browse. A resource card answers who provides
              help, what it is for, and where the link leads. Consistent styling
              supports different information needs.
            </p>
            <div className="sbf-pair">
              <div>
                <h3>Responsive density</h3>
                <p>
                  The apparel catalog moves from three columns to two at 980px,
                  then one at 680px. Resource grids stack at 860px to give
                  organization names and descriptions more room.
                </p>
              </div>
              <div>
                <h3>Accessibility priorities</h3>
                <p>
                  Headings, real links, focus styles, and native disclosure
                  controls provide a foundation. Further review should cover
                  contrast, keyboard order, zoom, long labels, motion
                  preferences, and accessible documents.
                </p>
              </div>
            </div>
          </Chapter>
          <Chapter
            id="evaluation"
            title="What the work delivers—and what needs validation."
          >
            <p>
              The delivered pages show two distinct architectures within one
              brand: six apparel categories and a Resource Center with education
              and four practical assistance categories. Both provide responsive
              layouts and routes to existing services.
            </p>
            <p>
              There is no analytics baseline or completed usability study for
              these pages. Revenue, task-completion, and support-demand
              improvements have not been measured.
            </p>
            <div className="sbf-checks">
              {[
                [
                  'Can shoppers find a relevant style?',
                  'Ask a participant to find a jersey and identify the next purchase step. Observe completion, backtracking, and category choice.',
                ],
                [
                  'Are custom-order conditions understood?',
                  'Ask the participant to explain sizing responsibilities and return conditions before ordering. Record comprehension errors and policy discovery.',
                ],
                [
                  'Can visitors find useful assistance?',
                  'Use a fictional support scenario to assess the chosen destination, time, and confidence. Avoid collecting diagnoses; allow flexible pacing and breaks.',
                ],
                [
                  'Does the handoff finish the journey?',
                  'Follow the store or provider destination and assess its relevance. Purchase completion requires appropriate tracking and consent.',
                ],
              ].map(([title, body]) => (
                <div key={title}>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </div>
              ))}
            </div>
            <p>
              This is a proposed evaluation plan. Clinical content also needs an
              accountable review process before it can be treated as reliable
              guidance.
            </p>
          </Chapter>
          <Chapter
            id="reflection"
            title="Design the next step, not just the page."
          >
            <p>
              The two experiences connect expression with usefulness. Apparel
              gives supporters a visible way to participate; resources gives
              visitors a structure for finding information and assistance.
            </p>
            <p>
              The next challenge is to test those routes with people. A strong
              visual identity can create recognition, but the experience still
              depends on what happens after someone chooses a category or
              follows a link.
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
