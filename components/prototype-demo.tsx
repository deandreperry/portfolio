'use client';

import { useState } from 'react';

export function PrototypeDemo({ slug }: { slug: string }) {
  const content = slug === 'movecity'
    ? { eyebrow: 'Route preference', title: 'What matters for this trip?', options: ['Most reliable', 'Least walking', 'Fewest transfers'], result: 'Blue Line + 14 bus · 42 min · step-free' }
    : slug === 'atlas-finance'
      ? { eyebrow: 'Insight detail', title: 'What would you like to understand?', options: ['What changed', 'Why it changed', 'What I can do'], result: 'Weekend dining explains 71% of the monthly increase.' }
      : slug === 'giveforward'
        ? { eyebrow: 'Giving preference', title: 'Choose how you want to help', options: ['One-time gift', 'Monthly support', 'Specific program'], result: 'Your choice stays visible through confirmation.' }
        : slug === 'northstar'
          ? { eyebrow: 'Pattern finder', title: 'What are you designing?', options: ['Collect information', 'Choose one option', 'Confirm an action'], result: 'Recommended: Input + accessible validation pattern' }
          : slug === 'orbit-ai'
            ? { eyebrow: 'AI action preview', title: 'Choose the level of control', options: ['Draft only', 'Draft and cite', 'Ask before changes'], result: 'Orbit will draft, attach sources, and wait for approval.' }
            : { eyebrow: 'Care discovery', title: 'What best describes your need?', options: ['New symptom', 'Routine care', 'Known specialist'], result: 'We’ll guide you to options available this week.' };
  const [selected, setSelected] = useState(0);
  return (
    <div className="prototype-demo">
      <div className="prototype-head"><span>{content.eyebrow}</span><i>Interactive sample</i></div>
      <div className="prototype-body">
        <h3>{content.title}</h3>
        <fieldset className="prototype-options"><legend className="sr-only">{content.title}</legend>
          {content.options.map((option, index) => <button className={selected === index ? 'active' : ''} type="button" key={option} onClick={() => setSelected(index)}><i aria-hidden="true" />{option}</button>)}
        </fieldset>
        <output aria-live="polite"><small>RECOMMENDED NEXT STEP</small><b>{content.result}</b><span>Based on: {content.options[selected].toLowerCase()}</span></output>
      </div>
    </div>
  );
}
