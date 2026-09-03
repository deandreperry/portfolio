import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'About', description: "About De'Andre Perry's research-led, accessible, and implementation-aware approach to product design.", alternates: { canonical: '/about' } };

const strengths = [
  { title: 'Reduce uncertainty', text: 'Find the assumptions with the most product risk and test them early enough to change direction.' },
  { title: 'Connect the system', text: 'Design the full decision path—content, interaction, edge cases, accessibility, and operational reality.' },
  { title: 'Make intent buildable', text: 'Use prototypes and coded exploration to clarify behavior before details are lost in handoff.' },
];

export default function AboutPage() {
  return (
    <main id="main-content" tabIndex={-1}>
      <header className="page-hero about-hero shell"><div><p className="eyebrow">About</p><h1>Designing for clarity—across people, products, and teams.</h1></div><p>I’m a UX designer and design engineer interested in the decisions beneath an interface: what people need, what the system can support, and what evidence helps a team move forward with confidence.</p></header>
      <section className="about-manifesto section shell"><p className="eyebrow">Design philosophy</p><blockquote>I design by reducing uncertainty—understanding what people need, testing assumptions early, and translating validated decisions into interfaces that are usable, accessible, and technically realistic.</blockquote></section>
      <section className="strength-section section shell"><div className="section-intro"><div><p className="eyebrow">How I work</p><h2>Thoughtful process. Practical momentum.</h2></div><p>Good UX work creates shared understanding before it creates polished screens.</p></div><div className="strength-grid">{strengths.map((item, index) => <article key={item.title}><span>0{index + 1}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></section>
      <section className="values-section section"><div className="shell"><div className="section-intro"><div><p className="eyebrow">What I value</p><h2>Craft that earns trust.</h2></div></div><div className="value-list"><article><h3>Evidence over performance</h3><p>Clear reasoning matters more than design theater. Research artifacts should make decisions easier to evaluate.</p></article><article><h3>Accessibility as product quality</h3><p>Inclusive behavior belongs in the definition of done—not in a final audit after core decisions are fixed.</p></article><article><h3>Systems over isolated screens</h3><p>The interface is connected to content, policy, operations, technology, and the moments before and after a task.</p></article><article><h3>Collaboration with specificity</h3><p>The best critique names the goal, the evidence, the tradeoff, and what we need to learn next.</p></article></div></div></section>
      <section className="interest-section section shell"><div><p className="eyebrow">Current interests</p><h2>Design systems, accessible interaction, AI transparency, and the space between prototype and production.</h2></div><aside><span>Outside the work</span><p>Add the interests, communities, and pursuits that make this page feel unmistakably yours.</p></aside></section>
      <section className="inline-cta shell"><h2>See the thinking in context.</h2><Link href="/work" className="button button-primary">Explore selected work →</Link></section>
    </main>
  );
}
