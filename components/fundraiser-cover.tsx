import Image from 'next/image';
export function FundraiserCover() {
  return (
    <div className="fundraiser-cover">
      <div className="fundraiser-cover-copy">
        <span className="eyebrow">FUNDRAISER STUDIO / WEB CONCEPT</span>
        <strong>
          From willing to help
          <br />
          to ready to share.
        </strong>
        <p>
          One next step.
          <br />A reason to act.
        </p>
        <span className="fundraiser-cover-label">
          Strategy · Guidance · Donor trust
        </span>
      </div>
      <div className="fundraiser-cover-screen">
        <Image
          src="/projects/fundraiser-studio/dashboard.webp"
          width={1440}
          height={1000}
          alt="Fundraiser Studio dashboard prioritizing a personal story and campaign-readiness checklist."
        />
      </div>
    </div>
  );
}
