import Image from 'next/image';
import { auditFindings, auditRoadmap } from '@/data/research-studies';
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
          As UX Designer &amp; Researcher, I evaluated how visitors could
          navigate DowntownSF.org by keyboard and screen reader. I documented
          eight accessibility findings and presented a three-month remediation
          roadmap to the partnership, starting with navigation, search, and
          focus behavior.
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
        <section className="case-section">
          <p className="eyebrow">High priority · Keyboard and VoiceOver</p>
          <h2>Where does focus go when the menu closes?</h2>
          <p>
            The menu could disappear from view while its contents remained
            reachable. A visual check alone could miss that difference. I
            prioritized this issue because it affected how visitors could move
            through the page.
          </p>
          <figure className="audit-focus">
            <figcaption>
              Illustration of the documented finding and proposed behavior
            </figcaption>
            <ol>
              <li>
                <strong>Menu closes</strong>
                <p>The links disappear from view.</p>
              </li>
              <li>
                <strong>Observed issue</strong>
                <p>
                  Keyboard or screen-reader navigation can still reach hidden
                  content.
                </p>
              </li>
              <li>
                <strong>Expected behavior</strong>
                <p>
                  Focus returns to a visible control. The next navigation step
                  skips the closed panel.
                </p>
              </li>
            </ol>
          </figure>
        </section>
        <section className="case-section">
          <h2>How I evaluated the site</h2>
          <p>
            DowntownSF Partnership needed to decide which barriers to fix first.
            I used WAVE to flag potential issues, navigated by keyboard, and
            listened to the site with VoiceOver on macOS. A heuristic review
            helped identify questions about what visitors might understand or
            expect. The audit used WCAG 2.2 Level AA as its target.
          </p>
        </section>
        <section className="case-section">
          <h2>Eight findings and their priorities</h2>
          <p>
            The audit rated five findings high, two medium, and one low. I
            grouped them by the part of the experience the team would need to
            revisit.
          </p>
          {auditFindings.map(({ area, items }) => (
            <div className="audit-topic" key={area}>
              <h3>{area}</h3>
              <dl className="study-at-a-glance">
                {items.map((item) => (
                  <div key={item.title}>
                    <dt>
                      {item.title} · {item.severity} priority
                    </dt>
                    <dd>{item.observation}</dd>
                    <dd>
                      <strong>Recommendation</strong> · {item.recommendation}
                    </dd>
                  </div>
                ))}
              </dl>
              {area === 'Contrast and image descriptions' && (
                <figure className="audit-evidence">
                  <a
                    href="/projects/downtownsf/wave-review.webp"
                    aria-label="Open full-size WAVE screenshot of the DowntownSF event listings"
                  >
                    <Image
                      src="/projects/downtownsf/wave-review.webp"
                      alt="WAVE contrast markers on red View Details buttons in the event listings"
                      width="2048"
                      height="1163"
                      loading="lazy"
                    />
                  </a>
                  <figcaption>
                    <strong>
                      Separate evidence from the event-listing scan
                    </strong>{' '}
                    WAVE marked red “View Details” buttons for contrast
                    inspection. The 17 contrast errors and 8 alerts are counts
                    from this single scan. The teal-on-white finding above comes
                    from the written audit.
                  </figcaption>
                </figure>
              )}
            </div>
          ))}
        </section>
        <section className="case-section">
          <h2>What the partnership received</h2>
          <p>
            I presented the findings to nonprofit stakeholders and delivered a
            written audit and prioritized roadmap for designers and developers.
            The engagement represented $4,212 in donated professional services.
            The proposed sequence put navigation and focus first.
          </p>
          <dl className="study-at-a-glance">
            {auditRoadmap.map(([phase, action]) => (
              <div key={phase}>
                <dt>{phase}</dt>
                <dd>{action}</dd>
              </div>
            ))}
          </dl>
        </section>
        <section className="case-section">
          <p className="eyebrow">Proposed participant study</p>
          <h2>Can a visitor find a Friday event?</h2>
          <p>
            VoiceOver and keyboard checks showed what the interface exposed. To
            learn how visitors interpret that feedback, I would invite people
            who use assistive technology to work through this task with their
            preferred setup after remediation.
          </p>
          <blockquote>
            “You’re planning a visit downtown this Friday. Find an event you
            might attend and tell me where it takes place.”
          </blockquote>
          <p>
            I would let each participant choose a route, observe where focus
            moves, and record whether they recover independently or need help.
            If they pause or change direction, I would ask, “What did you expect
            to happen there?” Those observations would guide the next design
            decision. Participant outcomes have yet to be measured.
          </p>
        </section>
        <a className="next-project" href={'/work/' + nextProject.slug}>
          <span>Next case study</span>
          <h2>{nextProject.title} →</h2>
        </a>
      </article>
    </main>
  );
}
