import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { AccessibilityList, AffinityMap, InsightGrid, JourneyMap, MetricGrid, ResearchMethods, TestingTable, UserFlow } from '@/components/artifacts';
import { MobileToc, ReadingProgress, RecruiterSummary } from '@/components/case-study-tools';
import { ProjectVisual } from '@/components/project-visual';
import { PrototypeDemo } from '@/components/prototype-demo';
import { getProject, projects } from '@/data/projects';

type PageProps = { params: Promise<{ slug: string }> };

const sections = [
  { id: 'summary', label: 'Executive summary' }, { id: 'research', label: 'Research' }, { id: 'synthesis', label: 'Synthesis' },
  { id: 'definition', label: 'Problem reframing' }, { id: 'structure', label: 'Structure & flows' }, { id: 'iteration', label: 'Iteration' },
  { id: 'testing', label: 'Testing' }, { id: 'accessibility', label: 'Accessibility' }, { id: 'solution', label: 'Final interface' }, { id: 'outcomes', label: 'Outcomes' },
];

export function generateStaticParams() { return projects.map((project) => ({ slug: project.slug })); }

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return { title: project.title, description: project.description, alternates: { canonical: `/work/${slug}` } };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const currentIndex = projects.findIndex((item) => item.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];
  return (
    <main id="main-content" tabIndex={-1} className="case-study" style={{ '--project-accent': project.accent } as React.CSSProperties}>
      <ReadingProgress />
      <header className="case-hero shell">
        <div className="case-title"><Link href="/work" className="back-link">← All work</Link><p className="eyebrow">{project.index} · {project.category}</p><h1>{project.title}</h1><p>{project.subtitle}</p></div>
        <dl className="case-facts"><div><dt>Role</dt><dd>{project.role}</dd></div><div><dt>Timeline</dt><dd>{project.timeline}</dd></div><div><dt>Industry</dt><dd>{project.industry}</dd></div><div><dt>Team</dt><dd>{project.team}</dd></div></dl>
        <ProjectVisual slug={project.slug} />
        <p className="sample-banner"><b>Portfolio sample</b> This case study uses fictional product context and clearly marked sample outcomes. Replace it with verified project content before presenting it as client work.</p>
      </header>

      <RecruiterSummary><div className="quick-grid"><article><small>Problem</small><p>{project.challenge}</p></article><article><small>Role</small><p>{project.role} across {project.services.slice(0, 3).join(', ').toLowerCase()}.</p></article><article><small>Approach</small><p>{project.research.slice(0, 3).map((item) => item.method).join(', ')}.</p></article><article><small>Key decision</small><p>{project.reframe}</p></article><article><small>Sample outcome</small><p>{project.outcomes.map((item) => `${item.value} ${item.label}`).join(' · ')}</p></article></div></RecruiterSummary>
      <MobileToc sections={sections} />

      <div className="case-layout shell">
        <aside className="case-toc" aria-label="Case study sections"><span>In this story</span>{sections.map((section) => <a href={`#${section.id}`} key={section.id}>{section.label}</a>)}</aside>
        <article className="case-content">
          <section id="summary" className="case-section"><p className="section-number">01 / Executive summary</p><h2>A focused view of the problem, approach, and result.</h2><div className="summary-triptych"><article><span>Problem</span><p>{project.challenge}</p></article><article><span>Approach</span><p>{project.research.map((item) => item.method).slice(0, 3).join(', ')}, followed by iterative prototyping and validation.</p></article><article><span>Outcome</span><p>{project.outcomes[0].value} {project.outcomes[0].label}, with measurable improvement across the tested critical path.</p></article></div><div className="context-panel"><div><small>Product context</small><p>{project.businessContext}</p></div><div><small>Audience</small><p>{project.audience}</p></div><div><small>Tools</small><p>{project.tools.join(' · ')}</p></div></div></section>

          <section id="research" className="case-section"><p className="section-number">02 / Discovery</p><h2>Research designed around the decisions we needed to make.</h2><div className="research-questions"><span>Questions guiding discovery</span>{project.researchQuestions.map((question, index) => <p key={question}><i>0{index + 1}</i>{question}</p>)}</div><ResearchMethods items={project.research} /></section>

          <section id="synthesis" className="case-section full-bleed-section"><p className="section-number">03 / Synthesis</p><h2>Patterns became priorities—not a decorative wall of notes.</h2><InsightGrid items={project.findings} /><div className="artifact-label"><span>Affinity map</span><p>Observations were grouped by repeated behavior, then connected to a concrete design implication.</p></div><AffinityMap findings={project.findings} /><div className="artifact-label"><span>Behavioral segments</span><p>Segments focus on product behavior and decision needs rather than demographic decoration.</p></div><div className="segment-grid">{project.segments.map((segment) => <article key={segment.name}><h3>{segment.name}</h3><p><b>Behavior</b>{segment.behavior}</p><p><b>Needs</b>{segment.need}</p></article>)}</div><div className="artifact-label"><span>Journey map</span><p>The opportunity space across the end-to-end experience.</p></div><JourneyMap items={project.journey} /></section>

          <section id="definition" className="case-section"><p className="section-number">04 / Reframing</p><h2>The research changed the problem.</h2><blockquote className="reframe-quote">{project.reframe}</blockquote><div className="hmw-grid">{project.hmws.map((hmw) => <article key={hmw}><span>How might we</span><p>{hmw.replace(/^How might we /, '')}</p></article>)}</div><div className="artifact-label"><span>Design principles</span><p>Four filters used to make and critique decisions.</p></div><div className="principle-grid">{project.principles.map((principle, index) => <article key={principle.title}><span>0{index + 1}</span><h3>{principle.title}</h3><p>{principle.detail}</p></article>)}</div></section>

          <section id="structure" className="case-section"><p className="section-number">05 / Structure</p><h2>Making the intended journey legible before adding polish.</h2><UserFlow steps={project.flow} /><div className="wireframe-evolution"><div><small>EARLY CONCEPT</small><div className="wire low"><i /><i /><i /><i /></div><p>Broad information hierarchy and task sequencing.</p></div><b aria-hidden="true">→</b><div><small>VALIDATED WIREFRAME</small><div className="wire high"><i /><i /><i /><i /><i /></div><p>Refined emphasis, progressive disclosure, and recovery.</p></div></div></section>

          <section id="iteration" className="case-section full-bleed-section"><p className="section-number">06 / Iteration</p><h2>The point is not that the design changed. It’s why.</h2><div className="iteration-compare"><article><span>Version 1</span><h3>{project.iteration.before}</h3><p><b>What failed</b>{project.iteration.failed}</p></article><div className="iteration-divider"><i /><span>Evidence changed the direction</span></div><article className="after"><span>Version 2</span><h3>{project.iteration.after}</h3><p><b>Why it improved</b>The revised model brought the highest-value decision and its supporting evidence into the primary flow.</p></article></div></section>

          <section id="testing" className="case-section full-bleed-section"><p className="section-number">07 / Validation</p><h2>Two rounds of testing, with the friction made explicit.</h2><TestingTable items={project.testing} /><p className="data-note">All percentages in this sample case study are placeholder data intended to be replaced with verified project results.</p></section>

          <section id="accessibility" className="case-section"><p className="section-number">08 / Accessibility</p><h2>Accessibility shaped the interaction model from the start.</h2><p className="section-lede">The review covered semantic structure, keyboard behavior, screen-reader communication, contrast, target size, errors, and motion—not a checklist added after visual design.</p><AccessibilityList items={project.accessibility} /></section>

          <section id="solution" className="case-section full-bleed-section"><p className="section-number">09 / Final interface</p><h2>A product surface that carries the reasoning forward.</h2><ProjectVisual slug={project.slug} /><div className="annotation-row"><span><i>1</i>Priority is visible at a glance</span><span><i>2</i>Supporting evidence stays one step away</span><span><i>3</i>States explain action and recovery</span></div><div className="artifact-label"><span>Interactive prototype</span><p>Try a small, local demonstration of the core decision pattern.</p></div><PrototypeDemo slug={project.slug} /><div className="system-strip"><span>Core system</span><div><i style={{ background: project.accent }} /><i style={{ background: '#07111e' }} /><i style={{ background: '#f7fbff' }} /><i style={{ background: '#9badc4' }} /></div><p>8px spacing rhythm · Plus Jakarta Sans · accessible focus · shared motion tokens</p></div></section>

          <section id="outcomes" className="case-section"><p className="section-number">10 / Outcomes & reflection</p><h2>Measuring the design, then naming what comes next.</h2><MetricGrid items={project.outcomes} /><div className="reflection-grid"><article><span>What worked</span><p>{project.reflection.worked}</p></article><article><span>What I’d change</span><p>{project.reflection.change}</p></article><article><span>What I learned</span><p>{project.reflection.learned}</p></article><article><span>What I’d test next</span><p>{project.reflection.next}</p></article></div></section>
        </article>
      </div>
      <nav className="next-project shell" aria-label="Case study pagination"><Link href="/work"><span>Back to</span><b>All work</b></Link><Link href={`/work/${nextProject.slug}`}><span>Next case study</span><b>{nextProject.title} →</b></Link></nav>
    </main>
  );
}
