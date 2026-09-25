export function NeuroModeWalkthrough() {
  return (
    <div id="walkthrough" className="neuro-walkthrough">
      <div className="neuro-walkthrough-layout">
        <div>
          <p className="eyebrow">65 SECONDS / PRODUCT WALKTHROUGH</p>
          <h3>See the way back in motion.</h3>
          <p>
            Start with “Fold laundry,” make the action smaller, and carry it
            into focus. Save a stopping point, return to the paused session,
            then choose a quieter space.
          </p>
          <p className="caption" id="walkthrough-description">
            Actual simulator recording with fictional data, operated through
            UI-test automation. Silent video with optional English
            design-commentary captions.
          </p>
          <p className="caption">
            This demonstrates state retention during navigation in an in-memory
            test store—not recovery after app termination or participant
            usability results.
          </p>
          <a
            className="text-link"
            href="/projects/neuromode/video/neuromode-walkthrough.mp4"
          >
            Open video separately
          </a>
        </div>
        <video
          controls
          playsInline
          preload="metadata"
          width="884"
          height="1920"
          poster="/projects/neuromode/video/poster.png"
          aria-label="NeuroMode: start, save, return, and find sensory space"
          aria-describedby="walkthrough-description"
        >
          <source
            src="/projects/neuromode/video/neuromode-walkthrough.mp4"
            type="video/mp4"
          />
          <track
            kind="captions"
            src="/projects/neuromode/video/neuromode-walkthrough.vtt"
            srcLang="en"
            label="English design commentary"
          />
          Your browser does not support embedded video. Use the separate video
          link or read the transcript below.
        </video>
      </div>
      <details className="evidence-details">
        <summary>Read the video transcript</summary>
        <ol className="neuro-transcript">
          <li>
            <span>00:00</span>
            <p>Start with the support needed now. Check-in is optional.</p>
          </li>
          <li>
            <span>00:08</span>
            <p>Name an activity. NeuroMode offers a concrete first step.</p>
          </li>
          <li>
            <span>00:11</span>
            <p>Make it smaller: the action changes from five items to one.</p>
          </li>
          <li>
            <span>00:15</span>
            <p>
              Starting a step does not require completing the whole activity.
            </p>
          </li>
          <li>
            <span>00:20</span>
            <p>
              Focus carries the activity and step forward. Time remains
              adjustable.
            </p>
          </li>
          <li>
            <span>00:25</span>
            <p>The next action stays visible. The countdown is hidden.</p>
          </li>
          <li>
            <span>00:31</span>
            <p>Save a stopping point before leaving the activity.</p>
          </li>
          <li>
            <span>00:36</span>
            <p>Save and pause retains the next step and pauses the session.</p>
          </li>
          <li>
            <span>00:40</span>
            <p>Return to Today, then open focus support again.</p>
          </li>
          <li>
            <span>00:44</span>
            <p>The same next step is waiting in the paused session.</p>
          </li>
          <li>
            <span>00:47</span>
            <p>Resume when ready, then end the session on your own terms.</p>
          </li>
          <li>
            <span>00:55</span>
            <p>
              Quiet Room begins in silence, without automatic breathing cues.
            </p>
          </li>
          <li>
            <span>01:01</span>
            <p>Breathing and ambient audio are separate, optional choices.</p>
          </li>
        </ol>
      </details>
    </div>
  );
}
