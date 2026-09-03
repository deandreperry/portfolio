import Link from 'next/link';
import type { CaseStudy } from '@/data/projects';
import { ProjectVisual } from './project-visual';

export function ProjectCard({ project, featured = false }: { project: CaseStudy; featured?: boolean }) {
  return (
    <article className={`project-card ${featured ? 'featured' : ''}`} style={{ '--project-accent': project.accent } as React.CSSProperties}>
      <Link href={`/work/${project.slug}`} className="project-card-link" aria-label={`View ${project.title} case study`} data-event="case-study-open" data-project={project.slug}>
        <div className="project-card-copy">
          <span className="project-index">{project.index} · {project.category}</span>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <dl><div><dt>Role</dt><dd>{project.role}</dd></div><div><dt>Sample impact</dt><dd>{project.outcomes[0].value} {project.outcomes[0].label}</dd></div></dl>
          <span className="text-link">Explore the story <i aria-hidden="true">↗</i></span>
        </div>
        <ProjectVisual slug={project.slug} compact={!featured} />
      </Link>
    </article>
  );
}
