import Image from 'next/image';
import {
  auditFindings,
  auditRoadmap,
  downtownAudit,
} from '@/data/research-studies';
import type { CaseStudy } from '@/data/projects';

export function AuditCover() {
  return (
    <div className="audit-cover">
      <div className="audit-cover-type">
        <span>DowntownSF Partnership</span>
        <strong>
          Access to
          <br /> downtown.
        </strong>
        <span>Website accessibility &amp; usability evaluation</span>
      </div>
      <div className="audit-cover-media">
        <Image
          src="/projects/downtownsf/homepage.webp"
          alt="DowntownSF homepage with a street performance beneath the San Francisco skyline"
          width="1440"
          height="900"
        />
      </div>
    </div>
  );
}

export function DowntownAudit({ nextProject }: { nextProject: CaseStudy }) {
  return (
    <main id="main-content" tabIndex={-1}>
      <header className="case-hero shell">
        <a href="/work">← All work</a>
        <p className="eyebrow">Completed expert evaluation</p>
        <h1>
          Website Accessibility & Usability Evaluation — DowntownSF Partnership
        </h1>
        <p className="narrative-deck">
          I reviewed the nonprofit’s website by keyboard and screen reader,
          checked it against accessibility standards, and presented the team
          with priorities for remediation.
        </p>
        <a
          className="text-link"
          href="https://catchafire.org/impact/match/4177855/downtown-sf-partnership--website-accessibility-audit/"
        >
          View the engagement on Catchafire ↗
        </a>
        <figure className="audit-hero-figure">
          <AuditCover />
          <figcaption>
            Website under review ·{' '}
            <a href="https://downtownsf.org/">DowntownSF Partnership</a>
          </figcaption>
        </figure>
      </header>
      <article className="shell audit-story">
        {downtownAudit.map(([heading, body]) => (
          <section className="case-section" key={heading}>
            <h2>{heading}</h2>
            <p>{body}</p>
            {heading === 'What the evaluation established' && (
              <>
                <dl className="study-at-a-glance">
                  {auditFindings.map(([area, observation, recommendation]) => (
                    <div key={area}>
                      <dt>{area}</dt>
                      <dd>{observation}</dd>
                      <dd>
                        <strong>Recommendation</strong> · {recommendation}
                      </dd>
                    </div>
                  ))}
                </dl>
                <figure className="audit-evidence">
                  <a
                    href="/projects/downtownsf/wave-review.webp"
                    aria-label="Open full-size WAVE screenshot of the DowntownSF event listings"
                  >
                    <Image
                      src="/projects/downtownsf/wave-review.webp"
                      alt="WAVE panel beside the DowntownSF event carousel. Contrast markers appear on View Details buttons."
                      width="2048"
                      height="1163"
                      loading="lazy"
                    />
                  </a>
                  <figcaption>
                    <strong>Reading the event-listing scan</strong> WAVE
                    reported 17 contrast errors and 8 alerts in this capture.
                    The markers on the “View Details” buttons show where to
                    inspect the text and background together. These counts
                    describe this scan only.
                  </figcaption>
                </figure>
              </>
            )}
            {heading === 'How findings shaped recommendations' && (
              <dl className="study-at-a-glance">
                {auditRoadmap.map(([phase, action]) => (
                  <div key={phase}>
                    <dt>{phase}</dt>
                    <dd>{action}</dd>
                  </div>
                ))}
              </dl>
            )}
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
