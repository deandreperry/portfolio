import type { Metadata } from 'next';
import { siteConfig } from '@/data/site';

export const metadata: Metadata = { title: 'Contact', description: "Contact De'Andre Perry about UX design, product design, design systems, accessibility, and UX engineering opportunities.", alternates: { canonical: '/contact' } };

export default function ContactPage() {
  return (
    <main id="main-content" tabIndex={-1} className="contact-page shell">
      <div className="contact-main"><p className="eyebrow">Contact</p><h1>Let’s make the complex feel considered.</h1><p>I’m interested in thoughtful product teams working on meaningful, high-constraint problems—especially where research, accessibility, systems thinking, and implementation need to connect.</p><div className="contact-actions"><a className="button button-primary" href={`mailto:${siteConfig.email}`} data-event="contact-click">Email De&apos;Andre ↗</a><a className="button button-secondary" href={siteConfig.resume} download data-event="resume-click">Résumé placeholder ↓</a></div>{siteConfig.contactIsPlaceholder && <p className="contact-placeholder"><b>Before sharing:</b> replace the placeholder email and social links in <code>data/site.ts</code>.</p>}</div>
      <aside className="contact-card"><span>Good conversations start with</span><ul><li>A product problem that matters</li><li>The evidence you already have</li><li>The constraints we should respect</li><li>What the team needs to learn next</li></ul><div><small>Current focus</small><p>UX design · Design systems · Accessibility · UX engineering</p></div></aside>
    </main>
  );
}
