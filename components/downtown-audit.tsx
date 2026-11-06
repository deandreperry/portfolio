import { downtownAudit } from '@/data/research-studies';
import type { CaseStudy } from '@/data/projects';

export function AuditCover() {
  return (
    <div className="audit-cover">
      <span>DowntownSF Partnership</span>
      <strong>Website accessibility audit</strong>
      <span>
        VoiceOver on macOS <b aria-hidden="true">/</b> Manual evaluation
      </span>
    </div>
  );
}

export function DowntownAudit({ nextProject }: { nextProject: CaseStudy }) {
  return (
    <main id="main-content" tabIndex={-1}>
      <header className="case-hero shell">
        <a href="/work">← All work</a>
        <p className="eyebrow">Completed expert evaluation</p>
        <h1>DowntownSF Accessibility Audit</h1>
        <p className="narrative-deck">
          Using VoiceOver and automated checks to turn website accessibility
          concerns into recommendations for DowntownSF Partnership.
        </p>
        <a
          className="text-link"
          href="https://catchafire.org/impact/match/4177855/downtown-sf-partnership--website-accessibility-audit/"
        >
          View the engagement on Catchafire ↗
        </a>
      </header>
      <article className="shell audit-story">
        {downtownAudit.map(([heading, body]) => (
          <section className="case-section" key={heading}>
            <h2>{heading}</h2>
            <p>{body}</p>
          </section>
        ))}
        <a className="next-project" href={'/work/' + nextProject.slug}>
          <span>Next case study</span>
          <h2>{nextProject.title} →</h2>
        </a>
      </article>
    </main>
  );
}
