import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/data/site';
import { CopyEmail } from '@/components/contact-actions';
export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with De’Andre Perry about UX and product design.',
  alternates: { canonical: '/contact' },
};
export default function ContactPage() {
  return (
    <main id="main-content" tabIndex={-1} className="contact-page shell">
      <div className="contact-main">
        <p className="eyebrow">LET’S TALK</p>
        <h1>
          Good work starts
          <br />
          with a conversation.
        </h1>
        <p>
          A product challenge. A design opportunity. A question worth exploring.
          Let’s find the next step.
        </p>
        {siteConfig.email ? (
          <div className="contact-actions">
            <a
              className="button button-primary"
              href={`mailto:${siteConfig.email}`}
            >
              Email De’Andre ↗
            </a>
            <CopyEmail email={siteConfig.email} />
          </div>
        ) : (
          <div className="contact-links">
            <div>
              Email<span>Contact details coming soon</span>
            </div>
          </div>
        )}
        <div className="contact-links">
          {siteConfig.linkedin ? (
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn <span>Visit profile ↗</span>
            </a>
          ) : (
            <div>
              LinkedIn<span>Profile link coming soon</span>
            </div>
          )}
          <a href={siteConfig.github} target="_blank" rel="noopener noreferrer">
            GitHub ↗
          </a>
          <Link href={siteConfig.resume || '/resume'}>
            Resume{' '}
            <span>{siteConfig.resume ? 'View resume ↗' : 'View status ↗'}</span>
          </Link>
        </div>
      </div>
      <aside className="contact-card">
        <span>A useful place to start</span>
        <ul>
          <li>The problem you’re working on</li>
          <li>The people it affects</li>
          <li>What your team needs to learn</li>
          <li>Where design could make a difference</li>
        </ul>
        <div>
          <small>DESIGN FOCUS</small>
          <p>
            UX research · Product thinking · Interaction design · Interface
            systems
          </p>
        </div>
      </aside>
    </main>
  );
}
