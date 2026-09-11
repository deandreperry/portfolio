type ProjectVisualProps = { slug: string; compact?: boolean };
export function ProjectVisual({ slug }: ProjectVisualProps) {
  return (
    <figure className={`project-visual visual-${slug}`}>
      <figcaption className="visual-label">
        ILLUSTRATIVE DESIGN STUDY · NOT PROJECT EVIDENCE
      </figcaption>
      {slug === 'product-experience' ? (
        <div className="product-composition">
          <div className="product-note">
            <span>THE INTENT</span>
            <p className="visual-title">
              Make the next
              <br />
              step obvious.
            </p>
            <p>Context → Choice → Action</p>
            <div className="note-line" />
          </div>
          <div className="product-phone">
            <div className="phone-top">
              <b>
                path<span> /</span>
              </b>
              <span>•••</span>
            </div>
            <small>LET’S FIND YOUR DIRECTION</small>
            <p className="visual-title">
              A little clarity.
              <br />A way forward.
            </p>
            <div className="phone-progress">
              <i />
              <i />
              <i />
            </div>
            <div className="phone-option">
              <span>01</span>
              <div>
                <b>Explore the possibilities</b>
                <small>Start with an open question</small>
              </div>
              <i>↗</i>
            </div>
            <div className="phone-option">
              <span>02</span>
              <div>
                <b>Build on an idea</b>
                <small>Turn a thought into a direction</small>
              </div>
              <i>↗</i>
            </div>
            <div className="phone-bottom">
              Your next step starts here <span>→</span>
            </div>
          </div>
          <span className="composition-caption">
            A simple path through a complex decision.
          </span>
        </div>
      ) : slug === 'research-and-insight' ? (
        <div className="research-composition">
          <div className="research-title">
            <span>RESEARCH → DIRECTION</span>
            <p className="visual-title">
              Make the
              <br />
              patterns visible.
            </p>
          </div>
          <div className="research-board">
            <div className="research-column">
              <span>01 / OBSERVE</span>
              <div>
                What people do<small>Capture the context.</small>
              </div>
              <div>
                Where friction appears<small>Keep the evidence.</small>
              </div>
            </div>
            <span className="board-arrow">→</span>
            <div className="research-column">
              <span>02 / INTERPRET</span>
              <div>
                What it means<small>Identify a pattern.</small>
              </div>
              <div>
                Why it matters<small>Connect to a need.</small>
              </div>
            </div>
            <span className="board-arrow">→</span>
            <div className="research-column final-column">
              <span>03 / INFORM</span>
              <div>
                A clearer decision
                <small>
                  Define what to change
                  <br />
                  and what to test.
                </small>
                <b>↗</b>
              </div>
            </div>
          </div>
        </div>
      ) : slug === 'complex-workflows' ? (
        <div className="workflow-composition">
          <div className="workflow-sidebar">
            <b>workspace /</b>
            <span>Overview</span>
            <span className="selected">
              Requests <i>↗</i>
            </span>
            <span>Activity</span>
            <span>Settings</span>
          </div>
          <div className="workflow-main">
            <div className="workflow-heading">
              <span>WORKSPACE / REQUESTS</span>
              <span>View workflow ↗</span>
            </div>
            <p className="visual-title">
              The right detail.
              <br />
              At the right time.
            </p>
            <div className="workflow-steps">
              <span className="complete">✓ Context</span>
              <i>→</i>
              <span className="current">02 Review</span>
              <i>→</i>
              <span>03 Confirm</span>
            </div>
            <div className="workflow-detail">
              <span className="tiny-label">READY FOR REVIEW</span>
              <p className="visual-subtitle">Keep the decision in focus.</p>
              <div>
                <span>Essential information</span>
                <b>Visible</b>
              </div>
              <div>
                <span>Supporting context</span>
                <b>One step away ↗</b>
              </div>
              <p>
                Review request <span>→</span>
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="system-composition">
          <div className="type-specimen">
            <span>FOUNDATIONS / TYPOGRAPHY</span>
            <p className="visual-title">
              Aa<span>.</span>
            </p>
            <b>Clarity in every character.</b>
            <p>
              Plus Jakarta Sans
              <br />
              Regular · Medium · Semibold
            </p>
          </div>
          <div className="component-specimen">
            <span>COMPONENTS / STATES</span>
            <div className="specimen-buttons">
              <b>
                Continue <i>↗</i>
              </b>
              <b>
                Secondary <i>↗</i>
              </b>
            </div>
            <div className="specimen-input">
              <span>Email address</span>
              <div>
                name@example.com <b>✓</b>
              </div>
              <small>A clear label. A meaningful state.</small>
            </div>
            <div className="swatches">
              {['#172d26', '#246956', '#b6d0c4', '#e7eee9', '#ffffff'].map(
                (c) => (
                  <i key={c} style={{ background: c }} />
                ),
              )}
            </div>
            <div className="spacing-specimen">
              <span>4</span>
              <span>8</span>
              <span>16</span>
              <span>24</span>
              <span>32</span>
              <span>48</span>
            </div>
          </div>
        </div>
      )}
    </figure>
  );
}
