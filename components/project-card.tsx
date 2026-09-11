import type { CaseStudy } from '@/data/projects';
import { ProjectCover } from './project-cover';
export function ProjectCard({
  project,
  featured = false,
}: {
  project: CaseStudy;
  featured?: boolean;
}) {
  return (
    <article
      className={`project-card ${featured ? 'project-featured' : ''} project-editorial-${project.index}`}
      style={{ '--project-accent': project.accent } as React.CSSProperties}
    >
      <a href={`/work/${project.slug}`} className="project-card-link">
        <div className="project-art">
          <ProjectCover project={project} />
          <span className="project-open" aria-hidden="true">
            ↗
          </span>
        </div>
        <div className="project-card-copy">
          <div className="project-topline">
            <span>
              {project.index} / {project.category}
            </span>
            <span className="status-label">
              {project.status === 'ready'
                ? featured
                  ? 'Flagship case study'
                  : 'Case study'
                : 'Content pending'}
            </span>
          </div>
          <h3>{project.title}</h3>
          <p>{project.story?.problem || project.description}</p>
          <div className="project-details">
            <span>
              <b>ROLE</b>
              {project.role}
            </span>
            <span>
              <b>FOCUS</b>
              {project.services.slice(0, 2).join(' · ')}
            </span>
            <span>
              <b>STATUS</b>
              {project.story?.outcome ||
                'Functional product · validation proposed'}
            </span>
          </div>
          <div className="project-bottom">
            <ul className="tags">
              {project.services.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
            <span className="text-link">
              View case study <span aria-hidden="true">↗</span>
            </span>
          </div>
        </div>
      </a>
    </article>
  );
}
