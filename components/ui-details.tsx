import Link from 'next/link';
export function UIDetails() {
  return (
    <section className="ui-details shell" aria-labelledby="ui-details-title">
      <div className="detail-intro">
        <div>
          <p className="eyebrow">Interface details / Original demonstration</p>
          <h2 id="ui-details-title">Clarity, close up.</h2>
        </div>
        <Link className="text-link" href="#interaction-studio">
          Try the complete interaction study ↗
        </Link>
      </div>
      <div className="detail-pair">
        <figure>
          <div className="detail-surface">
            <span className="detail-context">Project / Review</span>
            <p className="detail-title">Check the essentials.</p>
            <div className="detail-data">
              <span>Project name</span>
              <b>Account settings redesign</b>
              <span>Design focus</span>
              <b>Interface review</b>
            </div>
            <div className="detail-action" aria-hidden="true">
              Create demo project <span>↗</span>
            </div>
          </div>
          <figcaption>
            <span>01 / Hierarchy</span>
            <p>
              Context stays quiet. The decision gets emphasis. One primary
              action completes the review.
            </p>
          </figcaption>
        </figure>
        <figure>
          <div className="detail-surface detail-recovery">
            <span className="detail-context">Project / Recovery</span>
            <p className="detail-title">Keep the work intact.</p>
            <div className="detail-preserved">
              <span>Project name</span>
              <b>Account settings redesign</b>
            </div>
            <div className="detail-error">
              <b>The demo save didn’t go through.</b>
              <p>
                Your details are still here. Try again to complete the flow.
              </p>
            </div>
            <div className="detail-retry" aria-hidden="true">
              Try again <span>↻</span>
            </div>
          </div>
          <figcaption>
            <span>02 / Recovery</span>
            <p>
              The error explains the next step, preserves the input, and offers
              a direct retry.
            </p>
          </figcaption>
        </figure>
      </div>
      <p className="caption">
        Enlarged views of the working demonstration below. These are UI studies,
        not client-project evidence.
      </p>
    </section>
  );
}
