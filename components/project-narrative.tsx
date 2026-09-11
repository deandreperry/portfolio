import { scopeNumbers } from '@/data/scope-numbers';
import { Toolkit } from './toolkit';
import {
  ContextVisual,
  ArchitectureVisual,
  DetailVisual,
  ResponsiveVisual,
  TokenStates,
} from './case-visuals';
import { projectReview } from '@/data/projects';
import { projectTools } from '@/data/toolkit';
import type { CaseStudy, Narrative } from '@/data/projects';
import { CaseStudyTOC } from './case-study-tools';
import { ProjectMedia } from './project-media';

export function DesignDecision({
  item,
  index,
}: {
  item: Narrative['decisions'][number];
  index: number;
}) {
  return (
    <article className="reasoning-decision">
      <p className="eyebrow">DESIGN DECISION / 0{index + 1}</p>
      <h3>{item.title}</h3>
      <dl>
        {[
          ['Observed in the product', item.observation],
          ['Design response', item.decision],
          ['Rationale', item.why],
          ['Tradeoff', item.tradeoff],
        ].map(([label, value]) => (
          <div key={label}>
            <dt>{label}</dt>
            <dd>{value}</dd>
          </div>
        ))}
      </dl>
      <p className="caption">Implementation reference: {item.source}</p>
    </article>
  );
}
export function StructureDiagram({ steps }: { steps: string[] }) {
  return (
    <ol className="structure-diagram" aria-label="Product structure">
      {steps.map((step, i) => (
        <li key={step}>
          <span>0{i + 1}</span>
          <strong>{step}</strong>
        </li>
      ))}
    </ol>
  );
}
export function ProjectNarrative({
  project,
  nextProject,
}: {
  project: CaseStudy;
  nextProject: CaseStudy;
}) {
  const n = project.narrative!;
  const sections = [
    { id: 'overview', label: 'Overview' },
    { id: 'structure', label: 'Structure' },
    { id: 'decisions', label: 'Design decisions' },
    { id: 'visual-system', label: 'Visual system' },
    { id: 'accessibility', label: 'Accessibility' },
    { id: 'outcome', label: 'Outcome' },
    { id: 'validation', label: 'Future validation' },
    { id: 'tools', label: 'Tools & workflow' },
  ];
  return (
    <main
      id="main-content"
      tabIndex={-1}
      className={`narrative-page narrative-${project.slug}`}
    >
      <header className="case-hero shell">
        <a href="/work" className="text-link">
          ← All work
        </a>
        <p className="eyebrow">
          {project.index} /{' '}
          {project.slug === 'uxd-systems' ? 'FLAGSHIP · ' : ''}
          {project.category}
        </p>
        <h1>{project.title}</h1>
        <p className="narrative-deck">{project.description}</p>
        <dl className="case-metadata">
          <div>
            <dt>Role</dt>
            <dd>UX Designer</dd>
          </div>
          <div>
            <dt>Focus</dt>
            <dd>{project.services.join(' · ')}</dd>
          </div>
          <div>
            <dt>Evidence</dt>
            <dd>Product implementation review</dd>
          </div>
          <div>
            <dt>Prototype tools</dt>
            <dd>{projectTools[project.slug][0].tools.join(' · ')}</dd>
          </div>
          <div>
            <dt>Status</dt>
            <dd>Functional product · research proposed</dd>
          </div>
        </dl>
        <dl className="scope-numbers" aria-label="Implemented product scope">
          {scopeNumbers[project.slug].map(([value, label]) => (
            <div key={label}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
        <p className="caption">
          Implemented product scope, not user-research or impact metrics.
        </p>
        <div className="case-hero-composition">
          <ProjectMedia project={project} />
          <div className="hero-evidence-strip">
            {project.narrative!.flow.slice(0, 3).map((item, i) => (
              <span key={item}>
                <b>0{i + 1}</b>
                {item}
              </span>
            ))}
          </div>
        </div>
      </header>
      <div className="case-layout shell">
        <CaseStudyTOC sections={sections} />
        <div className="case-body">
          <section id="overview" className="case-section">
            <p className="eyebrow">01 / CONTEXT & CHALLENGE</p>
            <h2>{n.question}</h2>
            <p className="audience-line">
              <strong>Designed for</strong>{' '}
              {projectReview[project.slug].audience}
            </p>
            <p className="section-lede">{n.context}</p>
            <div className="narrative-note">
              <h3>The constraint</h3>
              <p>{n.constraint}</p>
            </div>
            <p className="caption">
              This case study analyzes the current implementation. Rationale
              describes the design implications of observable choices; it does
              not claim undocumented interviews, historical alternatives, or
              measured improvements.
            </p>
          </section>
          <ContextVisual slug={project.slug} />
          <section id="structure" className="case-section">
            <p className="eyebrow">02 / INFORMATION ARCHITECTURE</p>
            <h2>A structure for different intentions.</h2>
            <ArchitectureVisual slug={project.slug} />
            <p className="caption">
              Product areas from the repository. This is an orientation model,
              not a tested linear user journey.
            </p>
          </section>
          <section id="decisions" className="case-section">
            <p className="eyebrow">03 / DESIGN REASONING</p>
            <h2>The choices behind the experience.</h2>
            {n.decisions.map((item, index) => (
              <div key={item.title}>
                <DesignDecision item={item} index={index} />
                <DetailVisual slug={project.slug} index={index} />
              </div>
            ))}
          </section>
          <section id="visual-system" className="case-section">
            <p className="eyebrow">04 / VISUAL & INTERACTION SYSTEM</p>
            <h2>
              {project.slug === 'uxd-systems'
                ? 'From a variable to an interface.'
                : 'Give the structure a visual expression.'}
            </h2>
            <p className="section-lede">{n.visual}</p>
            {project.slug === 'uxd-systems' && <TokenStates />}
            <ResponsiveVisual slug={project.slug} />
          </section>
          <section id="accessibility" className="case-section">
            <p className="eyebrow">05 / INCLUSIVE INTERACTION</p>
            <h2>Behavior matters as much as appearance.</h2>
            <p className="section-lede">{n.accessibility}</p>
          </section>
          <section id="outcome" className="case-section">
            <p className="eyebrow">06 / OUTCOME & REFLECTION</p>
            <h2>What exists. What remains to learn.</h2>
            <p className="section-lede">{n.outcome}</p>
            <div className="narrative-note">
              <h3>What works</h3>
              <p>{projectReview[project.slug].works}</p>
              <h3>What remains limited</h3>
              <p>{projectReview[project.slug].limit}</p>
              <h3>What I would explore next</h3>
              <p>{n.reflection}</p>
            </div>
          </section>
          <section id="validation" className="case-section">
            <p className="eyebrow">07 / PROPOSED RESEARCH · NOT CONDUCTED</p>
            <h2>The next questions to test.</h2>
            <dl className="validation-plan">
              <div>
                <dt>Proposed tasks</dt>
                <dd>{projectReview[project.slug].tasks}</dd>
              </div>
              {Object.entries(n.validation).map(([label, value]) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
          </section>
          <section id="tools" className="case-section">
            <p className="eyebrow">TOOLS & WORKFLOW</p>
            <h2>Tools supporting the design.</h2>
            <Toolkit project={project.slug} />
          </section>
          <a href={`/work/${nextProject.slug}`} className="next-project">
            <span>Next case study</span>
            <h2>{nextProject.title} ↗</h2>
            <ProjectMedia project={nextProject} />
          </a>
        </div>
      </div>
    </main>
  );
}
