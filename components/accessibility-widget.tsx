'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
/** Shared layout renders the vendor bootstrap immediately before </body>. */
export function AccessibilityWidget() {
  const pathname = usePathname();
  useEffect(() => {
    // Restore the vendor loader if client navigation reconciles the document head.
    const existing = document.querySelector('script[src="https://acsbapp.com/apps/app/dist/js/app.js"]');
    if (existing) {
      if (existing.parentElement !== document.body) document.body.appendChild(existing);
      return;
    }
    const script = document.createElement('script');
    script.src = 'https://acsbapp.com/apps/app/dist/js/app.js';
    script.async = true;
    script.onload = () => {
      const vendor = window as Window & {
        acsbJS?: { init: () => void };
        portfolioAcsbInitialized?: boolean;
      };
      if (!vendor.portfolioAcsbInitialized && vendor.acsbJS) {
        vendor.acsbJS.init();
        vendor.portfolioAcsbInitialized = true;
      }
    };
    document.body.appendChild(script);
  }, [pathname]);
  return (
    <script
      id="portfolio-accessibility-bootstrap"
      dangerouslySetInnerHTML={{
        __html: `(function(){
  if (document.querySelector('script[src="https://acsbapp.com/apps/app/dist/js/app.js"]')) return;
  var s = document.createElement('script');
  var h = document.querySelector('head') || document.body;
  s.src = 'https://acsbapp.com/apps/app/dist/js/app.js';
  s.async = true;
  s.onload = function(){
    if (!window.portfolioAcsbInitialized && window.acsbJS) {
      window.acsbJS.init();
      window.portfolioAcsbInitialized = true;
    }
  };
  h.appendChild(s);
})();`,
      }}
    />
  );
}
