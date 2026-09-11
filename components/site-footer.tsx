import Link from 'next/link';
import { siteConfig } from '@/data/site';
export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-cta shell">
        <div>
          <p className="eyebrow">LET’S MAKE SOMETHING MAKE SENSE.</p>
          <h2>
            Have a product problem
            <br />
            worth solving? <span>Let’s talk.</span>
          </h2>
        </div>
        <Link href="/contact" className="button button-primary">
          Get in touch <span aria-hidden="true">↗</span>
        </Link>
      </div>
      <div className="footer-base shell">
        <p>© 2026 {siteConfig.name}</p>
        <p>Thoughtfully designed. Carefully built.</p>
        <div>
          <Link href="/work">Work</Link>
          <Link href="/about">About</Link>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn ↗
          </a>
          <a href={siteConfig.github} target="_blank" rel="noopener noreferrer">
            GitHub ↗
          </a>
          <Link href={siteConfig.resume || '/resume'}>Resume ↗</Link>
        </div>
      </div>
    </footer>
  );
}
