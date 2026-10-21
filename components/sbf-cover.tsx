import Image from 'next/image';
export function SbfCover() {
  return (
    <div className="sbf-cover">
      <div className="sbf-cover-heading">
        <span>SOCIAL BUTTERFLIES FOUNDATION</span>
        <strong>
          Two ways
          <br />
          to support.
        </strong>
        <p>Apparel discovery & resource access</p>
      </div>
      <div className="sbf-cover-main">
        <Image
          src="/projects/sbf/apparel.webp"
          width={1440}
          height={1000}
          alt="SBF apparel design with a purple hero and custom jacket"
        />
      </div>
      <div className="sbf-cover-detail">
        <Image
          src="/projects/sbf/resources.webp"
          width={1440}
          height={1000}
          alt="Resource Center showing assistance categories and organization cards"
        />
      </div>
    </div>
  );
}
