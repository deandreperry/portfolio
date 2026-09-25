'use client';
import { useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';
export function CaseStudyTOC({
  sections,
}: {
  sections: { id: string; label: string }[];
}) {
  const [active, setActive] = useState('overview');
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - innerHeight;
        setProgress(max > 0 ? Math.min(100, (scrollY / max) * 100) : 0);
        let current = sections[0].id;
        for (const x of sections) {
          const el = document.getElementById(x.id);
          if (el) {
            const anchorOffset =
              (parseFloat(getComputedStyle(el).scrollMarginTop) || 0) +
              (parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0);
            if (el.getBoundingClientRect().top <= Math.max(160, anchorOffset + 2)) {
              current = x.id;
            }
          }
        }
        setActive(current);
      });
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [sections]);
  return (
    <>
      <div className="reading-progress" aria-hidden="true">
        <i style={{ transform: `scaleX(${progress / 100})` }} />
      </div>
      <aside className="case-toc">
        <nav aria-label="Case study sections">
          <span className="eyebrow">IN THIS STUDY</span>
          {sections.map((x) => (
            <a
              href={`#${x.id}`}
              key={x.id}
              aria-current={active === x.id ? 'location' : undefined}
            >
              {x.label}
            </a>
          ))}
          <span className="toc-progress">{Math.round(progress)}% read</span>
        </nav>
      </aside>
      <div className="mobile-toc">
        <label htmlFor="section-select">In this study</label>
        <select
          id="section-select"
          value={active}
          onChange={(e) => {
            document.getElementById(e.target.value)?.scrollIntoView({
              behavior: matchMedia('(prefers-reduced-motion: reduce)').matches
                ? 'instant'
                : 'smooth',
            });
          }}
        >
          {sections.map((x) => (
            <option key={x.id} value={x.id}>
              {x.label}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}
export function VisualLightbox({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  return (
    <div className="zoomable-visual">
      {children}
      <button
        type="button"
        ref={trigger}
        className="zoom-trigger"
        onClick={() => dialog.current?.showModal()}
      >
        Expand visual <span aria-hidden="true">⤢</span>
      </button>
      <dialog
        ref={dialog}
        className="visual-dialog"
        aria-label={title}
        onClose={() => trigger.current?.focus()}
      >
        <div className="dialog-header">
          <p>{title}</p>
          <button
            type="button"
            className="button button-secondary"
            onClick={() => dialog.current?.close()}
            autoFocus
          >
            Close ×
          </button>
        </div>
        {children}
      </dialog>
    </div>
  );
}
export function BeforeAfter() {
  const [value, setValue] = useState(60);
  return (
    <figure className="comparison">
      <figcaption>
        Illustrative comparison · Replace with your actual iterations
      </figcaption>
      <div className="comparison-stage">
        <div className="comparison-layer after-layer">
          <span>AFTER / CLEAR HIERARCHY</span>
          <div className="wire-layout">
            <aside />
            <section>
              <b>One clear next step.</b>
              <p>Essential context, where it is needed.</p>
              <div className="wire-option" />
              <div className="wire-action">Continue →</div>
            </section>
          </div>
        </div>
        <div
          className="comparison-layer before-layer"
          style={{ clipPath: `inset(0 ${100 - value}% 0 0)` }}
        >
          <span>BEFORE / UNDIFFERENTIATED</span>
          <div className="wire-layout">
            <aside />
            <section>
              <div className="wire-line" />
              <div className="wire-line" />
              <div className="wire-equal">
                <i />
                <i />
                <i />
              </div>
              <div className="wire-line" />
              <div className="wire-line" />
            </section>
          </div>
        </div>
        <div
          className="compare-handle"
          style={{ left: `${value}%` }}
          aria-hidden="true"
        >
          <span>↔</span>
        </div>
      </div>
      <label className="comparison-control">
        Compare the hierarchy
        <input
          type="range"
          min="0"
          max="100"
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          aria-label="Amount of before design visible"
          aria-valuetext={`${value}% before, ${100 - value}% after`}
        />
      </label>
    </figure>
  );
}
