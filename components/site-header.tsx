'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

const links = [
  { href: '/work', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: '/experience', label: 'Experience' },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    document.body.dataset.menuOpen = 'true';
    const onKey = (event: KeyboardEvent) => event.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => {
      delete document.body.dataset.menuOpen;
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <header className="site-header">
      <nav className="nav shell" aria-label="Primary navigation">
        <Link href="/" className="brand" aria-label="De'Andre Perry, home">
          <Image src="/brandmark.png" alt="" width={72} height={72} priority />
          <span>De&apos;Andre Perry</span>
        </Link>
        <div className="nav-links desktop-nav">
          {links.map((link) => (
            <Link key={link.href} href={link.href} aria-current={pathname.startsWith(link.href) ? 'page' : undefined}>{link.label}</Link>
          ))}
          <Link href="/contact" className="button button-primary" data-event="contact-click">Let&apos;s talk <span aria-hidden="true">↗</span></Link>
        </div>
        <button className="menu-trigger" type="button" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(true)}>
          <span>Menu</span><i aria-hidden="true" /><i aria-hidden="true" />
        </button>
      </nav>
      {open && (
        <dialog className="mobile-menu" id="mobile-menu" open aria-modal="true" aria-label="Navigation menu">
          <div className="mobile-menu-top shell">
            <span className="eyebrow">Navigate</span>
            <button ref={closeRef} className="menu-close" type="button" onClick={() => setOpen(false)} aria-label="Close menu">×</button>
          </div>
          <div className="mobile-menu-links shell">
            {[{ href: '/', label: 'Home' }, ...links, { href: '/contact', label: 'Contact' }].map((link, index) => (
              <Link key={link.href} href={link.href} onClick={() => setOpen(false)}><span>0{index + 1}</span>{link.label}<i aria-hidden="true">↗</i></Link>
            ))}
          </div>
          <p className="mobile-menu-note shell">Research-led product design, accessibility, systems thinking, and implementation.</p>
        </dialog>
      )}
    </header>
  );
}
