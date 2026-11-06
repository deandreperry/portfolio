import { WorkFilter } from '@/components/work-filter';
import type { Metadata } from 'next';
import { ProjectCard } from '@/components/project-card';
import { visibleProjects } from '@/data/projects';
export const metadata: Metadata = {
  title: 'Work',
  description:
    'Explore UX design projects, client work, and accessibility evaluations by De’Andre Perry.',
  alternates: { canonical: '/work' },
};
export default function WorkPage() {
  return (
    <main id="main-content" tabIndex={-1}>
      <header className="page-hero shell">
        <p className="eyebrow">
          SELECTED WORK / 01—{String(visibleProjects.length).padStart(2, '0')}
        </p>
        <h1>
          Every decision
          <br />
          has a story.
        </h1>
        <p>
          Research, product thinking, and visual design shape how each project
          solves a different problem.
        </p>
        <div className="page-meta">
          <span>{visibleProjects.length} selected projects</span>
          <span>Product concepts & website redesigns</span>
        </div>
      </header>
      <section className="work-index section shell" aria-label="Case studies">
        <WorkFilter
          items={visibleProjects.map((project) => ({
            slug: project.slug,
            card: (
              <ProjectCard
                key={project.slug}
                project={project}
                featured={project.slug === 'neuromode'}
              />
            ),
          }))}
        />
      </section>
    </main>
  );
}
