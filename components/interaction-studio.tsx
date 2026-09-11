'use client';
import { useEffect, useRef, useState } from 'react';
const modes = [
  {
    name: 'Research sprint',
    detail: 'Find the question worth answering.',
    symbol: '◎',
  },
  {
    name: 'Interface review',
    detail: 'Bring clarity to an existing flow.',
    symbol: '▤',
  },
  {
    name: 'Prototype',
    detail: 'Make an idea tangible and testable.',
    symbol: '↗',
  },
];
export function InteractionStudio() {
  const [step, setStep] = useState(0);
  const [mode, setMode] = useState('Interface review');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [status, setStatus] = useState<'idle' | 'saving' | 'failed' | 'done'>(
    'idle',
  );
  const [simulate, setSimulate] = useState(true);
  const heading = useRef<HTMLHeadingElement>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const mounted = useRef(false);
  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    [],
  );
  useEffect(() => {
    if (mounted.current) {
      heading.current?.focus({ preventScroll: true });
      heading.current?.scrollIntoView({ block: 'start', behavior: 'instant' });
    } else mounted.current = true;
  }, [step, status]);
  function save() {
    setStatus('saving');
    timer.current = setTimeout(
      () => setStatus(simulate && status !== 'failed' ? 'failed' : 'done'),
      650,
    );
  }
  function reset() {
    setStep(0);
    setName('');
    setError('');
    setStatus('idle');
  }
  return (
    <section
      className="interaction-studio section shell"
      id="interaction-studio"
      aria-labelledby="studio-title"
    >
      <div className="section-intro">
        <div>
          <p className="eyebrow">Interaction study / 01</p>
          <h2 id="studio-title">
            Good UI holds up
            <br />
            beyond the happy path.
          </h2>
        </div>
        <p>
          A small, working product flow. Explore the choices, try an empty
          field, and recover from a simulated error.
        </p>
      </div>
      <div className="studio-layout">
        <aside className="studio-notes">
          <span className="studio-index">01—05</span>
          <h3>
            Small decisions.
            <br />
            Considered behavior.
          </h3>
          <ol>
            <li>
              <b>Choice</b>
              <span>One selection, clearly communicated.</span>
            </li>
            <li>
              <b>Validation</b>
              <span>An error beside the field that needs attention.</span>
            </li>
            <li>
              <b>Review</b>
              <span>A chance to check before committing.</span>
            </li>
            <li>
              <b>Recovery</b>
              <span>Keep the input. Explain the next action.</span>
            </li>
            <li>
              <b>Confirmation</b>
              <span>Close the loop with a clear result.</span>
            </li>
          </ol>
          <p className="caption">
            Original UI demonstration. No request is sent; nothing is saved
            after you leave.
          </p>
        </aside>
        <div className="studio-product">
          <header>
            <b>
              form<span> /</span> function
            </b>
            <span>Interactive prototype</span>
          </header>
          <div className="studio-progress" aria-label={`Step ${step + 1} of 3`}>
            <i
              style={{
                transform: `scaleX(${status === 'done' ? 1 : (step + 1) / 3})`,
              }}
            />
          </div>
          <div className="studio-screen" key={`${step}-${status}`}>
            {status === 'done' ? (
              <div className="studio-success">
                <span aria-hidden="true">✓</span>
                <p className="eyebrow">Demo complete</p>
                <h3 ref={heading} tabIndex={-1}>
                  A clear next step.
                </h3>
                <p>
                  <strong>{name}</strong> is ready for a {mode.toLowerCase()}.
                  Your selections stayed intact through the flow.
                </p>
                <div className="studio-receipt">
                  <span>Project</span>
                  <b>{name}</b>
                  <span>Focus</span>
                  <b>{mode}</b>
                  <span>Status</span>
                  <b>Confirmed in this demo</b>
                </div>
                <button className="button studio-primary" onClick={reset}>
                  Try another path ↺
                </button>
              </div>
            ) : (
              <>
                <p className="eyebrow">Create a project / 0{step + 1}</p>
                <h3 ref={heading} tabIndex={-1}>
                  {step === 0
                    ? 'What needs your attention?'
                    : step === 1
                      ? 'Give the work a name.'
                      : 'Everything in the right place.'}
                </h3>
                <p className="studio-description">
                  {step === 0
                    ? 'Choose a focus. You can change it before confirming.'
                    : step === 1
                      ? 'Use a sample project name to explore the flow.'
                      : 'Review the details before creating your demo project.'}
                </p>
                {step === 0 ? (
                  <fieldset className="studio-choices">
                    <legend className="sr-only">Project focus</legend>
                    {modes.map((x) => (
                      <label
                        key={x.name}
                        className={mode === x.name ? 'selected' : ''}
                      >
                        <input
                          type="radio"
                          name="project-focus"
                          value={x.name}
                          checked={mode === x.name}
                          onChange={() => setMode(x.name)}
                        />
                        <span className="choice-icon" aria-hidden="true">
                          {x.symbol}
                        </span>
                        <span>
                          <b>{x.name}</b>
                          <small>{x.detail}</small>
                        </span>
                        <span className="choice-check" aria-hidden="true">
                          {mode === x.name ? '✓' : ''}
                        </span>
                      </label>
                    ))}
                  </fieldset>
                ) : step === 1 ? (
                  <form
                    id="studio-details"
                    noValidate
                    onSubmit={(e) => {
                      e.preventDefault();
                      if (!name.trim()) {
                        setError('Add a project name to continue.');
                        document.getElementById('studio-name')?.focus();
                        return;
                      }
                      setName(name.trim());
                      setError('');
                      setStep(2);
                    }}
                  >
                    <label className="studio-field" htmlFor="studio-name">
                      Project name
                    </label>
                    <input
                      id="studio-name"
                      maxLength={60}
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        if (error) setError('');
                      }}
                      placeholder="e.g. Account settings redesign"
                      aria-invalid={!!error}
                      aria-describedby={error ? 'studio-error' : 'studio-hint'}
                    />
                    {error ? (
                      <p
                        id="studio-error"
                        className="studio-error"
                        role="alert"
                      >
                        {error}
                      </p>
                    ) : (
                      <p id="studio-hint" className="caption">
                        A descriptive name makes the work easier to find.
                      </p>
                    )}
                    <div className="studio-empty">
                      <span aria-hidden="true">＋</span>
                      <b>No files attached</b>
                      <p>This focused demo needs only a project name.</p>
                    </div>
                  </form>
                ) : (
                  <>
                    <dl className="studio-review">
                      <div>
                        <dt>Project name</dt>
                        <dd>{name}</dd>
                      </div>
                      <div>
                        <dt>Design focus</dt>
                        <dd>{mode}</dd>
                      </div>
                    </dl>
                    <label className="studio-simulation">
                      <input
                        type="checkbox"
                        checked={simulate}
                        disabled={status === 'saving'}
                        onChange={(e) => setSimulate(e.target.checked)}
                      />
                      Simulate a save error to try recovery
                    </label>
                    {status === 'failed' && (
                      <div className="studio-failure" role="alert">
                        <b>The demo save didn’t go through.</b>
                        <p>
                          Your details are still here. Try again to complete the
                          flow.
                        </p>
                      </div>
                    )}
                  </>
                )}
                <div className="studio-actions">
                  {step > 0 ? (
                    <button
                      className="studio-back"
                      disabled={status === 'saving'}
                      onClick={() => {
                        setStep(step - 1);
                        setStatus('idle');
                      }}
                    >
                      ← Back
                    </button>
                  ) : (
                    <span>About a minute to explore</span>
                  )}
                  {step === 0 ? (
                    <button
                      className="button studio-primary"
                      onClick={() => setStep(1)}
                    >
                      Continue <span>→</span>
                    </button>
                  ) : step === 1 ? (
                    <button
                      className="button studio-primary"
                      type="submit"
                      form="studio-details"
                    >
                      Review project →
                    </button>
                  ) : (
                    <button
                      className="button studio-primary"
                      disabled={status === 'saving'}
                      onClick={save}
                    >
                      {status === 'saving'
                        ? 'Saving…'
                        : status === 'failed'
                          ? 'Try again ↻'
                          : 'Create demo project ↗'}
                    </button>
                  )}
                </div>
                <output className="sr-only" aria-live="polite">
                  {status === 'saving' ? 'Saving demo project.' : ''}
                </output>
              </>
            )}
          </div>
          <footer>
            <span>Clear choices. Recoverable actions.</span>
            <span>Local demo · No account required</span>
          </footer>
        </div>
      </div>
    </section>
  );
}
