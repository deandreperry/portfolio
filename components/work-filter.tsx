'use client';
import { useState, type ReactNode } from 'react';
const groups = {
  'All work': [],
  'User Research & Evaluation': [
    'uxr-forge',
    'downtownsf-accessibility-audit',
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
  items: { slug: string; card: ReactNode }[];
}) {
  const [active, setActive] = useState<keyof typeof groups>('All work');
  const cards =
    active === 'All work'
      ? items
      : groups[active].flatMap((slug) =>
          items.filter((item) => item.slug === slug),
        );
  return (
    <>
      <fieldset
        className="work-filters"
        aria-label="Filter case studies"
      >
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
        {cards.length} projects · {active}
      </output>
      <div className="work-index-grid">{cards.map((item) => item.card)}</div>
    </>
  );
}
