import type { CaseStudy } from '@/data/projects';
import type { CompletedParticipantStudy } from '@/data/research-studies';

export function ParticipantStudy({
  project,
  study,
  nextProject,
}: {
  project: CaseStudy;
  study: CompletedParticipantStudy;
  nextProject: CaseStudy;
}) {
  const sections = [
    ['Context and research question', [study.context, study.researchQuestion]],
    ['My role', [study.responsibilities]],
    [
      'Participants and method',
      [study.recruitmentAndSample, study.protocol, study.analysis],
    ],
    ['Evidence and observations', study.observations],
    ['Findings and design decisions', study.findingsAndDecisions],
    ['Outcomes and limitations', [study.outcomesAndLimitations]],
    ['Reflection and next steps', [study.reflectionAndNextSteps]],
  ] as const;
  return (
    <main id="main-content" tabIndex={-1}>
      <header className="case-hero shell">
        <a href="/work">← All work</a>
        <p className="eyebrow">{study.kind}</p>
        <h1>{project.title}</h1>
        <p className="narrative-deck">{project.description}</p>
      </header>
      <article className="shell audit-story">
        {sections.map(([heading, paragraphs]) => (
          <section key={heading} className="case-section">
            <h2>{heading}</h2>
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>
        ))}
        <a href={'/work/' + nextProject.slug} className="next-project">
          <span>Next case study</span>
          <h2>{nextProject.title} →</h2>
        </a>
      </article>
    </main>
  );
}
