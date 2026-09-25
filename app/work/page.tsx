import type { Metadata } from 'next';
import { ProjectCard } from '@/components/project-card';
import { visibleProjects } from '@/data/projects';
export const metadata: Metadata = {
  title: 'Work',
  description:
    'NeuroMode, Gather, UXD Systems, and UXR Forge: UX design through systems, research, accessibility, and color.',
  alternates: { canonical: '/work' },
};
export default function WorkPage() {
  return (
    <main id="main-content" tabIndex={-1}>
      <header className="page-hero shell">
        <p className="eyebrow">SELECTED WORK / 01—04</p>
        <h1>
          Every decision
          <br />
          has a story.
        </h1>
        <p>
          Research, product thinking, and interface craft—four lenses on
          designing with intention.
        </p>
        <div className="page-meta">
          <span>Four selected projects</span>
          <span>Implementation-backed case studies</span>
        </div>
      </header>
      <section className="work-index section shell" aria-label="Case studies">
        <div className="work-index-grid">
          {visibleProjects.map((p, index) => (
            <ProjectCard key={p.slug} project={p} featured={index === 0} />
          ))}
        </div>
      </section>
    </main>
  );
}
