import { notFound } from 'next/navigation';
import type { CaseStudy as Project } from '@/data/projects';
import { NeuroModeCaseStudy } from './neuromode-case-study';
import { GatherCaseStudy } from './gather-case-study';
import { ProjectNarrative } from './project-narrative';

export function CaseStudy({
  project,
  nextProject,
}: {
  project: Project;
  nextProject: Project;
}) {
  if (project.slug === 'neuromode')
    return <NeuroModeCaseStudy nextProject={nextProject} />;
  if (project.slug === 'gather')
    return <GatherCaseStudy nextProject={nextProject} />;
  if (project.narrative)
    return <ProjectNarrative project={project} nextProject={nextProject} />;
  notFound();
}
