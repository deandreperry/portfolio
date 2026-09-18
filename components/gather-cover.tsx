import Image from 'next/image';
export function GatherCover() {
  return <div className="gather-cover">
    <div className="gather-cover-copy"><span className="eyebrow">01 / FEATURED · NATIVE iOS</span><strong>Gather</strong><p>Less debating.<br />More together.</p><span className="gather-cover-caption">Private choices. One shared plan.</span></div>
    <div className="gather-cover-screens">
      {['Home','Voting','Final'].map((screen) => <Image key={screen} src={`/projects/gather/assets/Portfolio-${screen}.png`} width={1206} height={2622} alt={`Gather ${screen.toLowerCase()} interface, captured in the iPhone Simulator`} />)}
    </div>
  </div>;
}
