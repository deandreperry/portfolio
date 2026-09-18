import { GatherCaseStudy } from './gather-case-study';
import { ArrowIcon } from '@/components/arrow-icon';
import { ProjectNarrative } from './project-narrative';
import Image from 'next/image';
import type { CaseStudy as Project, ProjectDecision } from '@/data/projects';
import { ContentSlot, FlowDiagram } from './artifacts';
import { CaseStudyTOC, VisualLightbox } from './case-study-tools';
import { ProjectMedia } from './project-media';
import { EvidenceComparison } from './evidence-comparison';
function Decision({ item, index }: { item: ProjectDecision; index: number }) {
  return (
    <article className="decision-story">
      <p className="eyebrow">DECISION {String(index + 1).padStart(2, '0')}</p>
      <h3>{item.title}</h3>
      <div className="two-column">
        <ContentSlot label="Evidence">{item.evidence}</ContentSlot>
        <ContentSlot label="The decision">{item.decision}</ContentSlot>
      </div>
      <ContentSlot label="What changed">{item.consequence}</ContentSlot>
      <details className="evidence-details">
        <summary>Alternatives, tradeoffs & source</summary>
        <ContentSlot label="Alternatives considered">
          {item.alternatives}
        </ContentSlot>
        <ContentSlot label="Tradeoff">{item.tradeoff}</ContentSlot>
        {item.source && <p className="caption">Source: {item.source}</p>}
      </details>
    </article>
  );
}
export function CaseStudy({
  project,
  nextProject,
}: {
  project: Project;
  nextProject: Project;
}) {
  if (project.slug === 'gather') return <GatherCaseStudy nextProject={nextProject} />;
  if (project.narrative)
    return <ProjectNarrative project={project} nextProject={nextProject} />;
  const story = project.story;
  const sections = [
    { id: 'overview', label: 'At a glance' },
    { id: 'decisions', label: 'Key decisions' },
    ...(story?.research?.length
      ? [{ id: 'research', label: 'Research evidence' }]
      : []),
    ...(story?.collaboration
      ? [{ id: 'collaboration', label: 'Collaboration' }]
      : []),
    { id: 'solution', label: 'The solution' },
    ...(story?.system || story?.accessibility?.length
      ? [{ id: 'system', label: 'System & accessibility' }]
      : []),
    { id: 'impact', label: 'Impact & reflection' },
  ];
  const decisions: ProjectDecision[] =
    story?.decisions ||
    project.designPrompts.map((title) => ({
      title,
      evidence: 'Research evidence has not been supplied.',
      alternatives: 'Add the approaches considered and why they were explored.',
      tradeoff: 'Name what the chosen direction gained and what it sacrificed.',
      decision: 'Add your actual decision and individual contribution.',
      consequence:
        'Add the observed result, or clearly identify what remains untested.',
    }));
  return (
    <main id="main-content" tabIndex={-1}>
      <header className="case-hero shell">
        <a href="/work" className="text-link">
          ← Back to work
        </a>
        <div className="case-hero-heading">
          <div>
            <p className="eyebrow">
              {project.index} / {project.category.toUpperCase()}
            </p>
            <h1>{project.title}</h1>
            <p>{story?.problem || project.focus}</p>
          </div>
          <span className="status-label">
            {project.status === 'ready'
              ? 'Case study'
              : 'Project evidence pending'}
          </span>
        </div>
        <dl className="case-metadata">
          {[
            ['My role', project.role],
            ['Team', project.team],
            ['Timeline', project.timeline],
            ['Platform', project.platform],
          ].map(([label, value]) => (
            <div key={label}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
        {!story && (
          <div className="pending-notice">
            <strong>Project story in preparation</strong>This is a case-study
            space, not a completed engagement. Actual project details and
            evidence have not yet been provided.
          </div>
        )}
      </header>
      <div className="case-layout shell">
        <CaseStudyTOC sections={sections} />
        <article className="case-body">
          <section className="case-section" id="overview">
            <p className="eyebrow">AT A GLANCE</p>
            <h2>The essential context.</h2>
            <div className="summary-grid">
              {[
                [
                  'Problem',
                  story?.problem ||
                    'Specific product and user problem pending.',
                ],
                ['Users', story?.users || 'User context pending.'],
                [
                  'My contribution',
                  story?.contribution ||
                    'Individual responsibilities and collaborators pending.',
                ],
                [
                  'Outcome',
                  story?.outcome || 'No verified outcome has been provided.',
                ],
              ].map(([label, value]) => (
                <ContentSlot key={label} label={label}>
                  {value}
                </ContentSlot>
              ))}
            </div>
            <a href="#decisions" className="text-link">
              Explore the decisions ↓
            </a>
          </section>
          <section className="case-section" id="decisions">
            <p className="eyebrow">EVIDENCE → DECISION → CONSEQUENCE</p>
            <h2>
              {story
                ? 'The decisions that shaped the work.'
                : 'The story this project will tell.'}
            </h2>
            {decisions.map((d, i) => (
              <Decision key={d.title} item={d} index={i} />
            ))}
            {!story && (
              <details className="evidence-details">
                <summary>Research questions & supporting materials</summary>
                <ul className="evidence-checklist">
                  {project.researchPrompts.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
                <p>
                  Include only methods actually used. Add anonymized source
                  excerpts, participant context, recruitment criteria, and
                  limitations. Connect each artifact to a decision.
                </p>
              </details>
            )}
          </section>
          {story?.research?.length ? (
            <section className="case-section" id="research">
              <p className="eyebrow">RESEARCH EVIDENCE</p>
              <h2>How the evidence was gathered.</h2>
              {story.research.map((r) => (
                <details className="evidence-details" key={r.method}>
                  <summary>{r.method}</summary>
                  <ContentSlot label="Purpose">{r.rationale}</ContentSlot>
                  <ContentSlot label="Participants & context">
                    {r.participants}
                  </ContentSlot>
                  <ContentSlot label="Finding">{r.finding}</ContentSlot>
                  <ContentSlot label="Limitations">{r.limitation}</ContentSlot>
                  {r.source && <p className="caption">Source: {r.source}</p>}
                </details>
              ))}
            </section>
          ) : null}
          {story?.collaboration && (
            <section className="case-section" id="collaboration">
              <p className="eyebrow">Working through a tradeoff</p>
              <h2>How the team moved forward.</h2>
              {Object.entries({
                Context: story.collaboration.context,
                'The tension': story.collaboration.tension,
                'My contribution': story.collaboration.contribution,
                Resolution: story.collaboration.resolution,
                Learning: story.collaboration.learning,
              }).map(([label, value]) => (
                <ContentSlot key={label} label={label}>
                  {value}
                </ContentSlot>
              ))}
            </section>
          )}
          <section className="case-section" id="solution">
            <p className="eyebrow">INTERACTION & EXECUTION</p>
            <h2>
              {story?.assets?.length
                ? 'The solution in context.'
                : 'Final project visuals pending.'}
            </h2>
            {story?.assets?.length ? (
              story.assets.map((a) => (
                <VisualLightbox title={a.alt} key={a.src}>
                  <figure className="real-project-media">
                    <Image
                      src={a.src}
                      alt={a.alt}
                      width={a.width}
                      height={a.height}
                      loading="lazy"
                      decoding="async"
                    />
                    <figcaption>
                      {a.state && <strong>{a.state} · </strong>}
                      {a.caption}
                    </figcaption>
                  </figure>
                </VisualLightbox>
              ))
            ) : (
              <>
                <p className="section-lede">
                  The composition below illustrates a presentation direction. It
                  is not a project screenshot or evidence of completed work.
                </p>
                <VisualLightbox title="Illustrative presentation direction">
                  <ProjectMedia project={project} />
                </VisualLightbox>
                <details className="evidence-details">
                  <summary>What the final interface story should show</summary>
                  <ul className="evidence-checklist">
                    <li>
                      The primary task, with annotations explaining important
                      behavior.
                    </li>
                    <li>
                      Actual before/after iterations and the evidence that
                      motivated each change.
                    </li>
                    <li>
                      Loading, empty, error, and recovery states where relevant.
                    </li>
                    <li>
                      Responsive views and the rules that change across screen
                      sizes.
                    </li>
                  </ul>
                </details>
              </>
            )}
            {story?.comparison && (
              <EvidenceComparison comparison={story.comparison} />
            )}
            {story?.flow?.length ? (
              <FlowDiagram label="Primary task flow" steps={story.flow} />
            ) : null}
          </section>
          {story?.system || story?.accessibility?.length ? (
            <section className="case-section" id="system">
              <p className="eyebrow">SYSTEM & ACCESSIBILITY</p>
              <h2>Consistency beyond one screen.</h2>
              {story.system && <p className="section-lede">{story.system}</p>}
              {story.accessibility?.length ? (
                <ul className="evidence-checklist">
                  {story.accessibility.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              ) : null}
            </section>
          ) : null}
          <section className="case-section" id="impact">
            <p className="eyebrow">IMPACT & REFLECTION</p>
            <h2>What changed. What comes next.</h2>
            <ContentSlot label="Outcome">
              {story?.outcome ||
                'Add a verified result with its source, timeframe, and limitations. Qualitative and implementation outcomes are welcome when quantitative data is unavailable.'}
            </ContentSlot>
            <ContentSlot label="Reflection">
              {story?.reflection || project.reflectionPrompts.join(' ')}
            </ContentSlot>
            <ContentSlot label="Next step">
              {story?.next ||
                'Add the next question worth investigating, grounded in what this project revealed.'}
            </ContentSlot>
          </section>
        </article>
      </div>
      <nav className="next-project shell" aria-label="Case study pagination">
        <a href="/work">
          <span>BACK TO</span>
          <b>All work ←</b>
        </a>
        <a href={`/work/${nextProject.slug}`}>
          <span>NEXT CASE STUDY</span>
          <b>{nextProject.title} <ArrowIcon /></b>
        </a>
      </nav>
    </main>
  );
}
