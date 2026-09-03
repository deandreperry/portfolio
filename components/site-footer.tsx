import Image from 'next/image';
import Link from 'next/link';

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-cta shell">
        <p className="eyebrow">Open to thoughtful teams</p>
        <h2>Have a complex product problem worth making clearer?</h2>
        <Link className="button button-primary" href="/contact">Start a conversation <span aria-hidden="true">↗</span></Link>
      </div>
      <div className="footer-base shell">
        <Link href="/" className="brand" aria-label="De'Andre Perry, home"><Image src="/brandmark.png" alt="" width={72} height={72} /><span>De&apos;Andre Perry</span></Link>
        <p>UX Designer · UX Design Engineer</p>
        <div><Link href="/work">Work</Link><Link href="/about">About</Link><Link href="/experience">Experience</Link></div>
        <small>© 2026 De&apos;Andre Perry. Designed and built with care.</small>
      </div>
    </footer>
  );
}
