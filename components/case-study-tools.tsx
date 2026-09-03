'use client';

import { useEffect, useState } from 'react';

export function ReadingProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const update = () => {
      const length = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(length > 0 ? Math.min(100, (window.scrollY / length) * 100) : 0);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => { window.removeEventListener('scroll', update); window.removeEventListener('resize', update); };
  }, []);
  return <div className="reading-progress" aria-hidden="true"><i style={{ width: `${progress}%` }} /></div>;
}

export function RecruiterSummary({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <section className={`quick-summary ${open ? 'is-open' : ''}`}>
      <button type="button" aria-expanded={open} onClick={() => setOpen(!open)}>
        <span><small>60–90 SECOND VIEW</small><b>Recruiter summary</b></span>
        <i aria-hidden="true">{open ? '−' : '+'}</i>
      </button>
      {open && <div className="quick-summary-content">{children}</div>}
    </section>
  );
}

export function MobileToc({ sections }: { sections: { id: string; label: string }[] }) {
  return (
    <label className="mobile-toc">
      <span>Jump to section</span>
      <select aria-label="Jump to case study section" defaultValue="" onChange={(event) => { if (event.target.value) document.getElementById(event.target.value)?.scrollIntoView(); }}>
        <option value="" disabled>Choose a section</option>
        {sections.map((section) => <option value={section.id} key={section.id}>{section.label}</option>)}
      </select>
    </label>
  );
}
