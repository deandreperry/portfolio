import type { Metadata } from 'next';
import { ProjectCard } from '@/components/project-card';
import { projects } from '@/data/projects';

export const metadata: Metadata = { title: 'Work', description: 'Six sample UX case studies spanning research, product design, accessibility, design systems, and UX engineering.', alternates: { canonical: '/work' } };

export default function WorkPage() {
  return (
    <main id="main-content" tabIndex={-1}>
      <header className="page-hero shell"><p className="eyebrow">Selected case studies</p><h1>Product thinking, made visible.</h1><p>Explore how research changes the problem, how iteration changes the interface, and how accessibility shapes the finished experience.</p><div className="page-meta"><span>6 in-depth stories</span><span>Research → delivery</span><span>Sample content</span></div></header>
      <section className="work-index section shell" aria-label="Case studies"><div className="work-index-grid">{projects.map((project, index) => <ProjectCard key={project.slug} project={project} featured={index === 0 || index === 3} />)}</div></section>
      <aside className="disclosure shell"><b>A transparent note about this work</b><p>These six projects are polished sample case studies created to demonstrate portfolio structure and storytelling. Project names are fictional. Participant counts and results are replacement-ready sample data, not verified client claims.</p></aside>
    </main>
  );
}
