import type { Metadata } from 'next';
import Link from 'next/link';
import { experience, siteConfig } from '@/data/site';

export const metadata: Metadata = { title: 'Experience', description: "De'Andre Perry's UX design experience, capabilities, tools, education, and professional development.", alternates: { canonical: '/experience' } };

const skillGroups = [
  { title: 'Research', items: ['User interviews', 'Contextual inquiry', 'Usability testing', 'Competitive research', 'Heuristic evaluation', 'Research synthesis'] },
  { title: 'Experience design', items: ['Information architecture', 'Task flows', 'Wireframing', 'Interaction design', 'Prototyping', 'Service blueprints'] },
  { title: 'Interface & systems', items: ['Visual hierarchy', 'Responsive design', 'Component design', 'Design systems', 'Typography', 'Documentation'] },
  { title: 'Accessibility', items: ['WCAG 2.2', 'Keyboard behavior', 'Screen-reader considerations', 'Focus management', 'Inclusive research', 'Accessible content'] },
  { title: 'Engineering', items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Git'] },
];

export default function ExperiencePage() {
  return (
    <main id="main-content" tabIndex={-1}>
      <header className="page-hero shell"><p className="eyebrow">Experience</p><h1>Product design with technical range.</h1><p>A recruiter-friendly view of roles, contribution, and the capabilities I bring from discovery through delivery.</p><a className="button button-secondary" href={siteConfig.resume} download data-event="resume-click">Download résumé placeholder ↓</a></header>
      <section className="timeline-section section shell" aria-labelledby="timeline-title"><div className="section-intro"><div><p className="eyebrow">Career timeline</p><h2 id="timeline-title">Experience, ready for your verified history.</h2></div><p>The structure is complete; replace the clearly marked entries with your company, role, dates, and outcomes.</p></div><ol className="timeline">{experience.map((entry, index) => <li key={entry.company}><span className="timeline-marker">0{index + 1}</span><div className="timeline-head"><div><h3>{entry.role}</h3><p>{entry.company}</p></div><time>{entry.dates}</time></div><p>{entry.summary}</p><ul>{entry.achievements.map((achievement) => <li key={achievement}>{achievement}</li>)}</ul><div className="tag-row">{entry.skills.map((skill) => <span className="tag" key={skill}>{skill}</span>)}</div></li>)}</ol></section>
      <section className="skills-section section"><div className="shell"><div className="section-intro"><div><p className="eyebrow">Capabilities</p><h2>No percentages. Just the work.</h2></div><p>Skills are grouped around the decisions and deliverables they support.</p></div><div className="skills-grid">{skillGroups.map((group) => <article key={group.title}><h3>{group.title}</h3><ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul></article>)}</div></div></section>
      <section className="credentials section shell"><article><span>Education</span><h3>Add degree or program</h3><p>Institution · Location · Year</p></article><article><span>Certifications</span><h3>Add relevant credential</h3><p>Issuer · Year · Credential link</p></article><article><span>Tools</span><h3>Figma · FigJam · Dovetail</h3><p>Storybook · GitHub · VS Code · analytics and testing tools</p></article></section>
      <section className="inline-cta shell"><h2>Want the project-level detail?</h2><Link href="/work" className="button button-primary">Explore case studies →</Link></section>
    </main>
  );
}
