'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { siteConfig } from '@/data/site';
const links = [
  { href: '/work', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: '/resume', label: 'Resume' },
  { href: '/contact', label: 'Contact' },
];
export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const trigger = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        trigger.current?.focus();
      }
    };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, []);
  return (
    <header className="site-header">
      <nav className="nav shell" aria-label="Primary navigation">
        <Link href="/" className="brand" aria-label="De’Andre Perry, home">
          <Image src="/brandmark.png" alt="" width={44} height={44} priority />
          <span>De’Andre Perry</span>
        </Link>
        <button
          ref={trigger}
          type="button"
          className="menu-trigger"
          aria-expanded={open}
          aria-controls="nav-links"
          onClick={() => setOpen(!open)}
        >
          {open ? 'Close −' : 'Menu +'}
        </button>
        <div id="nav-links" className={`nav-links ${open ? 'is-open' : ''}`}>
          {links.map((x) => (
            <Link
              href={
                x.label === 'Resume' && siteConfig.resume
                  ? siteConfig.resume
                  : x.href
              }
              key={x.label}
              aria-current={pathname === x.href || pathname.startsWith(`${x.href}/`)
                  ? 'page'
                  : undefined}
              className={x.label === 'Contact' ? 'nav-contact' : ''}
              onClick={() => setOpen(false)}
            >
              {x.label}
              {x.label === 'Contact' && <span aria-hidden="true">↗</span>}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
