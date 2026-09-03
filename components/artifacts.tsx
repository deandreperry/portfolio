import type { CaseStudy } from '@/data/projects';

export function ResearchMethods({ items }: { items: CaseStudy['research'] }) {
  return <div className="method-grid">{items.map((item, index) => <article key={item.method}><span>0{index + 1}</span><h3>{item.method}</h3><p>{item.detail}</p><small>{item.why}</small></article>)}</div>;
}

export function InsightGrid({ items }: { items: CaseStudy['findings'] }) {
  return <div className="insight-grid">{items.map((item, index) => <article key={item.title}><span>{index + 1}</span><h3>{item.title}</h3><blockquote>{item.evidence}</blockquote><p><b>Design implication</b>{item.implication}</p></article>)}</div>;
}

export function AffinityMap({ findings }: { findings: CaseStudy['findings'] }) {
  return <section className="affinity-map" aria-label="Research synthesis map">{findings.map((finding, index) => <div className="affinity-cluster" key={finding.title}><h3>{finding.title}</h3><span style={{ transform: 'rotate(-2deg)' }}>{finding.evidence}</span><span style={{ transform: 'rotate(1deg)' }}>Pattern repeated across sessions</span><span style={{ transform: 'rotate(-1deg)' }}>{finding.implication}</span><i aria-hidden="true">0{index + 1}</i></div>)}</section>;
}

export function JourneyMap({ items }: { items: CaseStudy['journey'] }) {
  // oxlint-disable-next-line jsx-a11y/no-noninteractive-tabindex -- keyboard access is required for the scroll region.
  return <section className="table-scroll" tabIndex={0} aria-label="User journey map, horizontally scrollable"><table className="journey-table"><thead><tr><th>Phase</th>{items.map((item) => <th key={item.phase}>{item.phase}</th>)}</tr></thead><tbody><tr><th>Action</th>{items.map((item) => <td key={item.phase}>{item.action}</td>)}</tr><tr><th>Feeling</th>{items.map((item) => <td key={item.phase}><span className="feeling-dot" />{item.feeling}</td>)}</tr><tr><th>Opportunity</th>{items.map((item) => <td key={item.phase}>{item.opportunity}</td>)}</tr></tbody></table></section>;
}

export function UserFlow({ steps }: { steps: string[] }) {
  return <section className="user-flow" aria-label="Primary user flow">{steps.map((step, index) => <div key={step}><span>0{index + 1}</span><b>{step}</b>{index < steps.length - 1 && <i aria-hidden="true">→</i>}</div>)}</section>;
}

export function TestingTable({ items }: { items: CaseStudy['testing'] }) {
  // oxlint-disable-next-line jsx-a11y/no-noninteractive-tabindex -- keyboard access is required for the scroll region.
  return <section className="table-scroll" tabIndex={0} aria-label="Usability testing results, horizontally scrollable"><table className="testing-table"><thead><tr><th>Task</th><th>Round 1</th><th>Round 2</th><th>Observed issue</th><th>Severity</th><th>Design change</th></tr></thead><tbody>{items.map((item) => <tr key={item.task}><th>{item.task}</th><td>{item.before}</td><td className="improved">{item.after}</td><td>{item.issue}</td><td><span className={`severity ${item.severity.toLowerCase()}`}>{item.severity}</span></td><td>{item.change}</td></tr>)}</tbody></table></section>;
}

export function AccessibilityList({ items }: { items: string[] }) {
  return <ul className="accessibility-list">{items.map((item) => <li key={item}><span aria-hidden="true">✓</span>{item}</li>)}</ul>;
}

export function MetricGrid({ items }: { items: CaseStudy['outcomes'] }) {
  return <div className="metric-grid">{items.map((item) => <article key={item.label}><strong>{item.value}</strong><span>{item.label}</span><small>sample outcome</small></article>)}</div>;
}
