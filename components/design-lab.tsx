'use client';
import { useState } from 'react';
const stages = [
  {
    label: 'Understand',
    heading: 'Start with the right question.',
    detail:
      'What does someone need to know before they can take the next step?',
    annotation: '01 / Frame the decision',
  },
  {
    label: 'Structure',
    heading: 'Give the decision a structure.',
    detail:
      'Organize the essentials. Keep context visible. Make the next action clear.',
    annotation: '02 / Shape the interaction',
  },
  {
    label: 'Refine',
    heading: 'Make clarity tangible.',
    detail:
      'Use hierarchy, meaningful states, and a clear action to support the task.',
    annotation: '03 / Resolve the details',
  },
];
export function DesignLab() {
  const [stage, setStage] = useState(2);
  const [choice, setChoice] = useState('Explore a direction');
  return (
    <div className="design-lab">
      <div className="lab-top">
        <span>
          <i />
          THINKING → MAKING
        </span>
        <span>Interactive study</span>
      </div>
      <div className={`lab-canvas stage-${stage}`}>
        <span className="dimension top-dimension" aria-hidden="true">
          Clarity, by design
        </span>
        <div className="lab-content" key={stage}>
          {stage === 0 ? (
            <div className="question-model">
              <span className="tiny-label">THE QUESTION</span>
              <h2>{stages[stage].heading}</h2>
              <p>{stages[stage].detail}</p>
              <div className="question-tags">
                <span>Context</span>
                <span>Need</span>
                <span>Constraint</span>
              </div>
            </div>
          ) : stage === 1 ? (
            <div className="structure-model">
              <span className="tiny-label">DECISION MODEL</span>
              {[
                'Understand the goal',
                'Compare the options',
                'Choose a next step',
              ].map((x, i) => (
                <div key={x}>
                  <span>0{i + 1}</span>
                  {x}
                  {i < 2 && <b aria-hidden="true">↓</b>}
                </div>
              ))}
            </div>
          ) : (
            <div className="choice-model">
              <div className="choice-symbol" aria-hidden="true">
                ↗
              </div>
              <span className="tiny-label">A LITTLE DIRECTION</span>
              <h2>What’s your next step?</h2>
              <p>Start with what you need right now.</p>
              <fieldset className="lab-options">
                <legend className="sr-only">Choose a next step</legend>
                {['Explore a direction', 'Refine an idea'].map((x) => (
                  <button
                    type="button"
                    aria-pressed={choice === x}
                    className={choice === x ? 'chosen' : ''}
                    onClick={() => setChoice(x)}
                    key={x}
                  >
                    <i aria-hidden="true" />
                    {x}
                    <span aria-hidden="true">{choice === x ? '✓' : ''}</span>
                  </button>
                ))}
              </fieldset>
              <div className="lab-result" aria-live="polite">
                {choice === 'Explore a direction'
                  ? 'Begin with a question worth exploring.'
                  : 'Identify the assumption worth testing.'}
                <span aria-hidden="true">↗</span>
              </div>
            </div>
          )}
        </div>
        <span className="dimension bottom-dimension" aria-hidden="true">
          {stages[stage].annotation}
        </span>
      </div>
      <fieldset className="lab-tabs">
        <legend className="sr-only">Explore the design process</legend>
        {stages.map((x, i) => (
          <button
            key={x.label}
            type="button"
            aria-pressed={stage === i}
            onClick={() => setStage(i)}
          >
            <span>0{i + 1}</span>
            {x.label}
          </button>
        ))}
      </fieldset>
      <p className="lab-caption">
        One decision, from question to interface. Try a stage.
      </p>
    </div>
  );
}
