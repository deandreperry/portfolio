import Image from 'next/image';
import type { CaseStudy } from '@/data/projects';
export function ProjectMedia({ project }: { project: CaseStudy }) {
  return (
    <figure className={`product-capture capture-${project.slug}`}>
      <div className="capture-mat">
        <Image
          src={`/projects/${project.slug}/hero/desktop.png`}
          width={1440}
          height={1000}
          alt={`${project.title}: ${project.slug === 'uxd-systems' ? 'aligned comparison of Apple HIG, Material 3, and Carbon' : project.slug === 'uxr-forge' ? 'research learning homepage with the question-to-validation model' : project.slug === '508-dev' ? 'target-size lesson with paired reference controls' : 'extracted palette and selected-color refinement controls'}`}
          loading="lazy"
        />
      </div>
      <figcaption>
        Actual product interface · {project.services.slice(0, 2).join(' / ')}
      </figcaption>
    </figure>
  );
}
