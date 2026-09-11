import { ArrowIcon } from '@/components/arrow-icon';
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
        <a href="/contact" className="button button-primary">
          Get in touch <span aria-hidden="true"><ArrowIcon /></span>
        </a>
      </div>
      <div className="footer-base shell">
        <p>© 2026 {siteConfig.name}</p>
        <p>Thoughtfully designed. Carefully built.</p>
        <div>
          <a href="/work">Work</a>
          <a href="/about">About</a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn <ArrowIcon />
          </a>
          <a href={siteConfig.github} target="_blank" rel="noopener noreferrer">
            GitHub <ArrowIcon />
          </a>
          <a href={siteConfig.resume || '/resume'}>Resume <ArrowIcon /></a>
        </div>
      </div>
    </footer>
  );
}
