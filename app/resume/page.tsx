import type { Metadata } from 'next';
import { certificates } from '@/data/profile';
import { siteConfig } from '@/data/site';
export const metadata: Metadata = {
  title: 'Resume',
  description:
    'Resume and professional background for De’Andre Perry, UX Designer.',
  alternates: { canonical: '/resume' },
};
export default function ResumePage() {
  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="resume-page page-hero shell"
    >
      <p className="eyebrow">PROFESSIONAL BACKGROUND</p>
      <h1>
        The experience
        <br />
        behind the work.
      </h1>
      {siteConfig.resume ? (
        <a className="button button-primary" href={siteConfig.resume} download>
          Download resume ↓
        </a>
      ) : (
        <section
          className="resume-background"
          aria-label="Education and credentials"
        >
          <h2>Education</h2>
          <h3>Western Governors University</h3>
          <p>Bachelor of Science, User Experience Design</p>
          <p>June 2026 – Present · In progress</p>
          <h2>Professional certificates</h2>
          <ul>
            {certificates.map((c) => (
              <li key={c.id}>
                {c.title} — {c.issuer}
              </li>
            ))}
          </ul>
          <a
            className="button button-primary"
            href={`mailto:${siteConfig.email}?subject=Resume%20request`}
          >
            Request my résumé ↗
          </a>
        </section>
      )}
      <a href="/about" className="text-link">
        Explore my approach <span aria-hidden="true">↗</span>
      </a>
    </main>
  );
}
