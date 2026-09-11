import { ArrowIcon } from '@/components/arrow-icon';
import { Toolkit } from '@/components/toolkit';
import type { Metadata } from 'next';
import Image from 'next/image';
import { certificates } from '@/data/profile';
import { capabilities } from '@/data/projects';
export const metadata: Metadata = {
  title: 'About',
  description:
    'De’Andre Perry’s approach to research, interaction design, and thoughtful product experiences.',
  alternates: { canonical: '/about' },
};
export default function AboutPage() {
  return (
    <main id="main-content" tabIndex={-1}>
      <header className="page-hero shell about-profile-hero">
        <div>
          <p className="eyebrow">A LITTLE ABOUT ME</p>
          <h1>
            Curiosity sets the direction.
            <br />
            Craft brings it into focus.
          </h1>
          <p>
            I’m De’Andre Perry, a UX Designer working across visual design, user
            research, accessibility, and design systems. Front-end prototyping
            helps me explore behavior beyond static screens and communicate
            design decisions with engineering.
          </p>
        </div>
        <Image
          src="/headshot.png"
          width="1127"
          height="1396"
          alt="De’Andre Perry"
          className="about-headshot"
        />
      </header>
      <section className="about-manifesto section shell">
        <p className="eyebrow">MY DESIGN PHILOSOPHY</p>
        <blockquote>
          Understand the people. Question the assumptions. Make the complex feel
          clear, all the way down to the details.
        </blockquote>
      </section>
      <section className="section shell">
        <div className="section-intro">
          <div>
            <p className="eyebrow">HOW I APPROACH THE WORK</p>
            <h2>
              From an open question
              <br />
              to a considered answer.
            </h2>
          </div>
          <p>
            I see research, interaction, and visual design as connected parts of
            the same problem.
          </p>
        </div>
        <div className="strength-grid">
          {[
            {
              title: 'Make room for evidence.',
              text: 'Start with what people need, what they do today, and what is still uncertain. Use research to challenge the framing.',
            },
            {
              title: 'Think beyond the screen.',
              text: 'Consider the whole task: context, content, constraints, edge cases, and the moments before and after an interaction.',
            },
            {
              title: 'Care about the finish.',
              text: 'Make hierarchy, behavior, accessibility, and visual detail work together. A good idea needs thoughtful execution.',
            },
          ].map((x, i) => (
            <article key={x.title}>
              <span>0{i + 1}</span>
              <h3>{x.title}</h3>
              <p>{x.text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="section shell">
        <div className="section-intro">
          <div>
            <p className="eyebrow">Collaboration</p>
            <h2>
              Good decisions
              <br />
              are shared work.
            </h2>
          </div>
          <div>
            <p className="section-lede">
              A specific example of navigating an engineering constraint,
              stakeholder disagreement, or product tradeoff will appear here
              when the project evidence is available.
            </p>
            <details className="evidence-details">
              <summary>What the example will explain</summary>
              <p>
                The shared goal, competing constraints, my individual
                contribution, the decision we reached, and what I learned. No
                collaboration outcome has been supplied yet.
              </p>
            </details>
          </div>
        </div>
      </section>
      <section
        className="section shell portfolio-toolkit"
        aria-labelledby="about-toolkit"
      >
        <p className="eyebrow">MY TOOLKIT</p>
        <h2 id="about-toolkit">Design first. Prototype further.</h2>
        <Toolkit expanded />
      </section>
      <section className="values-section section">
        <div className="shell">
          <div className="section-intro">
            <div>
              <p className="eyebrow">DESIGN STRENGTHS</p>
              <h2>
                Different lenses.
                <br />A connected practice.
              </h2>
            </div>
          </div>
          <div className="capability-grid">
            {capabilities.map((x) => (
              <article key={x.title}>
                <h3>{x.title}</h3>
                <ul>
                  {x.skills.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section shell">
        <div className="section-intro">
          <div>
            <p className="eyebrow">BACKGROUND</p>
            <h2>The path so far.</h2>
          </div>
          <div className="education-entry">
            <p className="eyebrow">EDUCATION · JUN 2026 — PRESENT</p>
            <h3>Western Governors University</h3>
            <p>Bachelor of Science, User Experience Design</p>
            <p className="caption">In progress</p>
          </div>
        </div>
        <div className="certificate-list">
          <h3>Professional certificates</h3>
          {certificates.map((certificate) => (
            <article key={certificate.id} className="certificate-row">
              <div>
                <p className="eyebrow">
                  {certificate.issuer}
                  {certificate.date ? ` · ${certificate.date}` : ''}
                </p>
                <h4>{certificate.title}</h4>
                <p className="caption">Credential ID: {certificate.id}</p>
                {certificate.url && (
                  <p className="credential-destination">
                    {certificate.url.replace('https://', '')}
                  </p>
                )}
              </div>
              {certificate.url ? (
                <a
                  className="text-link credential-cta"
                  href={certificate.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Show credential: ${certificate.title} (opens in a new tab)`}
                >
                  Show credential <ArrowIcon />
                </a>
              ) : (
                <span className="credential-pending">
                  edX · Credential ID listed above
                </span>
              )}
            </article>
          ))}
        </div>
        <div className="hero-actions">
          <a href="/resume" className="button button-secondary">
            Resume <ArrowIcon />
          </a>
          <a href="/contact" className="text-link">
            Start a conversation <ArrowIcon />
          </a>
        </div>
      </section>
    </main>
  );
}
