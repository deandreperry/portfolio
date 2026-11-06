'use client';
import { useState, type ReactNode } from 'react';
const groups = {
  'All work': [],
  'User Research & Evaluation': [
    'uxr-forge',
    'downtownsf-accessibility-audit',
    'sbf',
    'neuromode',
  ],
  'Product & Interaction Design': [
    'neuromode',
    'gather',
    'uxd-systems',
    'uxr-forge',
  ],
  'Visual Design & Client Work': ['polish-patrol', 'sbf', 'uxd-systems'],
} as const;
export function WorkFilter({
  items,
}: {
  items: { slug: string; secondary: boolean; card: ReactNode }[];
}) {
  const [active, setActive] = useState<keyof typeof groups>('All work');
  const allowed: readonly string[] = groups[active];
  const cards = items.filter((item) =>
    active === 'All work' ? !item.secondary : allowed.includes(item.slug),
  );
  const secondary =
    active === 'All work' ? items.filter((item) => item.secondary) : [];
  return (
    <>
      <fieldset className="work-filters" aria-label="Filter case studies">
        {(Object.keys(groups) as (keyof typeof groups)[]).map((label) => (
          <button
            type="button"
            key={label}
            aria-pressed={label === active}
            onClick={() => setActive(label)}
          >
            {label}
          </button>
        ))}
      </fieldset>
      <output className="content-note" aria-live="polite">
        {cards.length + secondary.length} projects · {active}
      </output>
      <div className="work-index-grid">{cards.map((item) => item.card)}</div>
      {secondary.length > 0 && (
        <section className="section" aria-labelledby="additional-projects">
          <h2 id="additional-projects">Additional client work</h2>
          <div className="work-index-grid">
            {secondary.map((item) => item.card)}
          </div>
        </section>
      )}
    </>
  );
}
