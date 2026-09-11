import type { Metadata } from 'next';
import Link from 'next/link';
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
        <div className="pending-notice">
          <strong>Resume coming soon</strong>A verified résumé has not yet been
          added. Career history, education, and credentials will appear here
          when available.
        </div>
      )}
      <Link href="/about" className="text-link">
        Explore my approach <span aria-hidden="true">↗</span>
      </Link>
    </main>
  );
}
