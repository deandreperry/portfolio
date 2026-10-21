import Image from 'next/image';
export function PolishPatrolCover() {
  return (
    <div className="polish-cover">
      <div className="polish-cover-heading">
        <span>CLIENT WEBSITE / SERVICE & BOOKING UX</span>
        <strong>Polish Patrol</strong>
        <p>
          The right service.
          <br />
          The right next step.
        </p>
      </div>
      <div className="polish-cover-desktop">
        <Image
          src="/projects/polish-patrol/home.webp"
          width={1440}
          height={1000}
          alt="Polish Patrol homepage with service introduction, pricing and booking actions"
        />
      </div>
      <div className="polish-cover-mobile">
        <Image
          src="/projects/polish-patrol/mobile.webp"
          width={390}
          height={844}
          alt="Mobile pricing layout with stacked service options"
        />
      </div>
      <span className="polish-cover-caption">
        Service selection → Clear pricing → Booking
      </span>
    </div>
  );
}
