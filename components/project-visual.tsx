type ProjectVisualProps = { slug: string; compact?: boolean };

export function ProjectVisual({ slug, compact = false }: ProjectVisualProps) {
  const label = compact ? 'Compact product interface concept' : 'Product interface concept';
  if (slug === 'carebridge') return (
    <figure className="visual-frame visual-care" aria-label={`CareBridge ${label}`}>
      <div className="browser-mock">
        <div className="browser-bar"><i /><i /><i /><span>carebridge / find-care</span></div>
        <div className="care-layout"><aside><b>CB</b><span>Find care</span><span>Appointments</span><span>Messages</span></aside><section><small>GUIDED CARE DISCOVERY</small><h3>What can we help with?</h3><p>Choose the option that best describes what you need today.</p><div className="choice-grid"><article className="selected"><b>New symptom</b><span>Get guidance</span></article><article><b>Primary care</b><span>Routine visits</span></article><article><b>Specialist</b><span>Known care type</span></article></div><div className="availability"><span><b>18</b> in-network options</span><span><b>3</b> available today</span></div></section></div>
      </div>
    </figure>
  );
  if (slug === 'northstar') return (
    <figure className="visual-frame visual-system" aria-label={`Northstar ${label}`}>
      <div className="system-canvas"><div className="system-head"><span>NORTHSTAR / INPUT</span><b>Component anatomy</b></div><div className="system-demo"><span className="mock-label">Email address</span><div className="fake-input">name@example.com</div><small>We&apos;ll only use this for account access.</small></div><div className="system-tokens"><span><i className="blue" />Focus</span><span><i />Rest</span><span><i className="error" />Error</span></div><div className="system-code">&lt;Input label=&quot;Email address&quot; required /&gt;</div></div>
    </figure>
  );
  if (slug === 'orbit-ai') return (
    <figure className="visual-frame visual-orbit" aria-label={`Orbit AI ${label}`}>
      <div className="orbit-ui"><aside><b>ORBIT</b><span>Sources</span><span>Tasks</span><span>Outputs</span></aside><section><div className="orbit-top"><span>Research synthesis</span><i>3 sources connected</i></div><div className="orbit-answer"><small>GENERATED BRIEF · EDITABLE</small><h3>Three themes are shaping adoption</h3><p>Teams value predictable recovery more than conversational polish.<sup> 1</sup></p><p>Source visibility supports both trust and editing.<sup> 2</sup></p><div className="source-chip">2 · Trust research / Interview set</div></div></section></div>
    </figure>
  );
  if (slug === 'atlas-finance') return (
    <figure className="visual-frame visual-atlas" aria-label={`Atlas Finance ${label}`}>
      <div className="finance-ui"><div className="finance-head"><b>September overview</b><span>On track</span></div><article><small>WHAT CHANGED</small><h3>You spent 27% more on dining</h3><p>Most of the increase happened across two weekends.</p><div className="bars"><i /><i /><i /><i /><i /><i /></div><span className="mock-button">See the 8 transactions</span></article><aside><span><small>Available</small><b>$2,840</b></span><span><small>Goal progress</small><b>68%</b></span></aside></div>
    </figure>
  );
  if (slug === 'giveforward') return (
    <figure className="visual-frame visual-give" aria-label={`GiveForward ${label}`}>
      <div className="donation-ui"><div className="donation-impact"><small>YOUR IMPACT</small><b>$50</b><p>Funds two weeks of after-school meals.</p></div><div className="donation-form"><span className="steps">1 Impact <i /> 2 Details <i /> 3 Confirm</span><h3>Choose your support</h3><div className="amounts"><b>$25</b><b className="active">$50</b><b>$100</b></div><div className="cadence"><span className="active">One time</span><span>Monthly</span></div><span className="mock-button">Continue securely →</span></div></div>
    </figure>
  );
  return (
    <figure className="visual-frame visual-move" aria-label={`MoveCity ${label}`}>
      <div className="transit-ui"><div className="map-grid" aria-hidden="true" /><div className="route-line" aria-hidden="true"><i /><i /><i /><i /></div><aside><small>BEST MATCH</small><h3>Blue + 14 bus</h3><p>42 min · 1 transfer · 6 min walk</p><div className="route-tags"><span>Most reliable</span><span>Step-free</span></div><div className="route-step"><b>8:12</b><span>Blue Line<br /><small>Elevator operating</small></span></div><div className="route-step"><b>8:31</b><span>Transfer at Central<br /><small>7 min · same level</small></span></div></aside></div>
    </figure>
  );
}
