
export default function NotFound() {
  return (
    <main id="main-content" tabIndex={-1} className="not-found shell">
      <span>404</span>
      <p className="eyebrow">Wrong turn, clear recovery</p>
      <h1>This route doesn’t lead to a case study.</h1>
      <p>The work is still close by.</p>
      <div>
        <a className="button button-primary" href="/work">
          View selected work
        </a>
        <a className="button button-secondary" href="/">
          Return home
        </a>
      </div>
    </main>
  );
}
