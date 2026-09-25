import Image from 'next/image';
export function NeuroModeCover() {
  return (
    <div className="neuro-cover">
      <div className="neuro-cover-copy">
        <span className="eyebrow">NEUROMODE / NATIVE iOS</span>
        <strong>
          A smaller start.
          <br />A way back.
        </strong>
        <p>
          Support that makes room
          <br />
          for the person.
        </p>
        <span className="neuro-cover-note">
          Initiation · Sensory comfort · Continuity
        </span>
      </div>
      <div className="neuro-cover-screens">
        <Image
          className="neuro-cover-main"
          src="/projects/neuromode/screens/today-dark-verified.webp"
          width={1170}
          height={2532}
          alt="NeuroMode Today: direct actions for starting, focus, and less stimulation."
        />
        <Image
          className="neuro-cover-quiet"
          src="/projects/neuromode/screens/quiet-room.webp"
          width={1206}
          height={2622}
          alt="Quiet Room opens with optional comforts collapsed and a clear Finish control."
        />
      </div>
    </div>
  );
}
