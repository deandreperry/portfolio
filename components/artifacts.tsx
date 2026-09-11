import type { ReactNode } from 'react';
export function ContentSlot({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="content-slot">
      <span>{label}</span>
      <p>{children}</p>
    </div>
  );
}
export function InsightCard({
  number,
  observation,
  evidence,
  implication,
}: {
  number: string;
  observation: string;
  evidence: string;
  implication: string;
}) {
  return (
    <article className="insight-card">
      <span className="eyebrow">FINDING {number}</span>
      <h3>{observation}</h3>
      <div>
        <b>Evidence</b>
        <p>{evidence}</p>
      </div>
      <div className="insight-implication">
        <b>Design implication</b>
        <p>{implication}</p>
      </div>
    </article>
  );
}
export function FlowDiagram({
  steps,
  label,
}: {
  steps: string[];
  label: string;
}) {
  return (
    <figure className="flow-diagram">
      <figcaption>{label}</figcaption>
      <ol>
        {steps.map((x, i) => (
          <li key={x}>
            <span>0{i + 1}</span>
            <b>{x}</b>
            {i < steps.length - 1 && <i aria-hidden="true">→</i>}
          </li>
        ))}
      </ol>
    </figure>
  );
}
export function DesignDecision({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <article className="design-decision">
      <h3>{title}</h3>
      <p>{children}</p>
    </article>
  );
}
export function EvidenceChecklist({ items }: { items: string[] }) {
  return (
    <ul className="evidence-checklist">
      {items.map((x) => (
        <li key={x}>{x}</li>
      ))}
    </ul>
  );
}
