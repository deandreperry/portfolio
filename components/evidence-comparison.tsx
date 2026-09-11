'use client';
import Image from 'next/image';
import { useId, useState } from 'react';
import type { ProjectStory } from '@/data/projects';
export function EvidenceComparison({
  comparison,
}: {
  comparison: NonNullable<ProjectStory['comparison']>;
}) {
  const [value, setValue] = useState(50);
  const id = useId();
  return (
    <figure className="evidence-comparison">
      <figcaption>
        <strong>Before → After</strong>
        <p>{comparison.reason}</p>
      </figcaption>
      <div
        className="evidence-comparison-images"
        style={{
          aspectRatio: `${comparison.after.width} / ${comparison.after.height}`,
        }}
      >
        <Image
          src={comparison.after.src}
          alt={`After: ${comparison.after.alt}`}
          width={comparison.after.width}
          height={comparison.after.height}
          loading="lazy"
        />
        <div
          className="evidence-before"
          style={{ clipPath: `inset(0 ${100 - value}% 0 0)` }}
        >
          <Image
            src={comparison.before.src}
            alt={`Before: ${comparison.before.alt}`}
            width={comparison.before.width}
            height={comparison.before.height}
            loading="lazy"
          />
        </div>
        <div
          className="compare-handle"
          style={{ left: `${value}%` }}
          aria-hidden="true"
        >
          <span>↔</span>
        </div>
      </div>
      <div className="comparison-control">
        <label htmlFor={id}>Compare iterations</label>
        <input
          id={id}
          type="range"
          min="0"
          max="100"
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          aria-valuetext={`${value}% before, ${100 - value}% after`}
        />
      </div>
      <p className="caption">Evidence: {comparison.evidence}</p>
      <details className="evidence-details">
        <summary>Read the individual screen descriptions</summary>
        <p>
          <strong>Before:</strong> {comparison.before.alt}{' '}
          {comparison.before.caption}
        </p>
        <p>
          <strong>After:</strong> {comparison.after.alt}{' '}
          {comparison.after.caption}
        </p>
      </details>
    </figure>
  );
}
