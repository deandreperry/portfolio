import { NeuroModeCover } from './neuromode-cover';
import { GatherCover } from './gather-cover';
import Image from 'next/image';
import type { CaseStudy } from '@/data/projects';
export function ProjectCover({ project }: { project: CaseStudy }) {
  if (project.slug === 'neuromode') return <NeuroModeCover />;
  if (project.slug === 'gather') return <GatherCover />;
  const detail =
    project.slug === 'uxd-systems'
      ? 'details/token-comfortable.png'
      : project.slug === 'uxr-forge'
        ? 'screens/synthesis.png'
        : project.slug === '508-dev'
          ? 'details/target-comparison.png'
          : 'details/palette.png';
  return (
    <div className={`editorial-cover cover-layout-${project.slug}`}>
      <div className="cover-heading">
        <span>
          {project.index} /{' '}
          {project.services[0]}
        </span>
        <strong>{project.title}</strong>
        <p>{project.category}</p>
      </div>
      <div className="cover-interface">
        <Image
          src={`/projects/${project.slug}/hero/desktop.png`}
          alt={`${project.title} case-study cover showing the actual ${project.slug === 'uxd-systems' ? 'design-system comparison interface' : project.slug === 'uxr-forge' ? 'research learning workflow' : project.slug === '508-dev' ? 'target-size accessibility lesson' : 'palette refinement workspace'}`}
          width={1440}
          height={1000}
        />
      </div>
      <div className="cover-detail">
        <Image
          src={`/projects/${project.slug}/${detail}`}
          alt=""
          width={1440}
          height={900}
        />
      </div>
      <span className="cover-footnote">
        {project.slug === 'uxd-systems'
          ? 'Principles → Tokens → Components'
          : project.slug === 'uxr-forge'
            ? 'Question → Evidence → Decision'
            : project.slug === '508-dev'
              ? 'Observe → Compare → Understand'
              : 'Extract → Refine → Apply'}
      </span>
    </div>
  );
}
