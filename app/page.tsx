import Link from 'next/link';
import { ProjectCard } from '@/components/project-card';
import { capabilities, processSteps, projects } from '@/data/projects';

function EvidenceStage() {
  return (
    <figure className="evidence-stage">
      <figcaption className="sr-only">Research evidence becoming a product interface</figcaption>
      <div className="stage-glow" aria-hidden="true" />
      <div className="evidence-card card-research">
        <span className="card-kicker">01 · Research signal</span>
        <p className="quote">“I know I need care. I don&apos;t know what kind of provider to search for.”</p>
        <div className="tag-row"><span className="tag">unclear taxonomy</span><span className="tag">high urgency</span></div>
      </div>
      <div className="evidence-card card-flow">
        <span className="card-kicker">02 · Decision model</span>
        <div className="flow-row"><span className="flow-node">Need</span><span className="flow-arrow">→</span><span className="flow-node">Options</span><span className="flow-arrow">→</span></div>
      </div>
      <div className="evidence-card card-interface">
        <div className="interface-top"><i /><i /><i /></div>
        <div className="interface-body"><div className="mini-sidebar" /><div className="mini-ui"><div className="mini-title" /><div className="mini-subtitle" /><div className="slot-row"><div className="slot"><b>Today</b><small>3 options</small></div><div className="slot"><b>Tomorrow</b><small>8 options</small></div><div className="slot"><b>This week</b><small>21 options</small></div></div></div></div>
      </div>
    </figure>
  );
}

export default function Home() {
  return (
    <main id="main-content" tabIndex={-1}>
      <section className="hero shell">
        <div className="hero-copy">
          <p className="eyebrow">UX Designer · UX Design Engineer</p>
          <h1>From human evidence to <span>clear interfaces.</span></h1>
          <p className="hero-deck">I turn complex product questions into accessible, research-informed experiences—then help bring the strongest decisions to life in code.</p>
          <div className="hero-actions"><Link className="button button-primary" href="/work">View selected work <span aria-hidden="true">→</span></Link><Link className="button button-secondary" href="/about">About my approach</Link></div>
          <div className="hero-meta"><span>Research-led</span><span>Systems-minded</span><span>Implementation-aware</span></div>
        </div>
        <EvidenceStage />
      </section>

      <section className="capabilities-section section shell" aria-labelledby="capabilities-title">
        <div className="section-intro"><div><p className="eyebrow">Recruiter snapshot</p><h2 id="capabilities-title">Strategy through shipped experience.</h2></div><p>I work across the moments where product ambiguity becomes design direction—and where design intent becomes dependable behavior.</p></div>
        <div className="capability-grid">{capabilities.map((item, index) => <article key={item.title}><span>0{index + 1}</span><h3>{item.title}</h3><p>{item.detail}</p></article>)}</div>
      </section>

      <section className="work-section section" aria-labelledby="selected-title">
        <div className="shell">
          <div className="section-intro"><div><p className="eyebrow">Selected work</p><h2 id="selected-title">Six product stories. One throughline: clarity.</h2></div><p>Each sample case study makes the reasoning visible—from the evidence that changed the brief to the details that changed the interface.</p></div>
          <div className="featured-work"><ProjectCard project={projects[0]} featured /><div className="project-pair"><ProjectCard project={projects[1]} /><ProjectCard project={projects[2]} /></div><div className="project-trio">{projects.slice(3).map((project) => <ProjectCard key={project.slug} project={project} />)}</div></div>
          <div className="sample-note"><span>Sample portfolio content</span><p>Project concepts, participant counts, and outcomes are clearly structured placeholders—not verified client engagements.</p><Link href="/work">See all case studies <i aria-hidden="true">→</i></Link></div>
        </div>
      </section>

      <section className="evidence-section section shell" aria-labelledby="evidence-title">
        <div className="section-intro"><div><p className="eyebrow">Signature approach</p><h2 id="evidence-title">From evidence to interface.</h2></div><p>The strongest interaction is the one a team can trace back to a real user need, tested assumption, or system constraint.</p></div>
        <figure className="transformation">
          <figcaption className="sr-only">Research-to-interface transformation</figcaption>
          <article><span>Observation</span><blockquote>“Fastest isn&apos;t best if I can&apos;t make the transfer.”</blockquote><i aria-hidden="true">01</i></article>
          <b aria-hidden="true">→</b>
          <article><span>Insight</span><p>Route choice balances time, reliability, effort, and access.</p><i aria-hidden="true">02</i></article>
          <b aria-hidden="true">→</b>
          <article><span>Decision</span><p>Compare routes using personal priorities, not one hidden score.</p><i aria-hidden="true">03</i></article>
          <b aria-hidden="true">→</b>
          <article className="final"><span>Interface</span><div><strong>Most reliable</strong><small>42 min · 1 transfer</small></div><i aria-hidden="true">04</i></article>
        </figure>
      </section>

      <section className="process-section section" aria-labelledby="process-title"><div className="shell"><div className="section-intro"><div><p className="eyebrow">Adaptive process</p><h2 id="process-title">Structured enough to align. Flexible enough to learn.</h2></div><p>These modes overlap and repeat. The sequence changes with the risk, evidence, and maturity of the product.</p></div><ol className="process-loop">{processSteps.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, '0')}</span><b>{step}</b></li>)}</ol><p className="process-note"><i aria-hidden="true">↺</i> Learnings loop back into framing, exploration, and validation throughout delivery.</p></div></section>

      <section className="about-teaser section shell"><p className="eyebrow">Working philosophy</p><blockquote>“I design by reducing uncertainty—understanding what people need, testing assumptions early, and translating validated decisions into interfaces that are usable, accessible, and technically realistic.”</blockquote><Link className="text-link" href="/about">More about my approach <i aria-hidden="true">↗</i></Link></section>
    </main>
  );
}
