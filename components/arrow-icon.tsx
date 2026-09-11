export function ArrowIcon({ down = false }: { down?: boolean }) {
  return <svg aria-hidden="true" focusable="false" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0, transform: down ? 'rotate(90deg)' : undefined }}><path d="M5 19 19 5M5 5h14v14" /></svg>;
}
