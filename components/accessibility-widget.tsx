'use client';
import { useEffect } from 'react';
declare global {
  interface Window {
    acsbJS?: { init: () => void };
    portfolioAcsbInitialized?: boolean;
  }
}
export function AccessibilityWidget() {
  useEffect(() => {
    const initialize = () => {
      if (!window.portfolioAcsbInitialized && window.acsbJS) {
        window.portfolioAcsbInitialized = true;
        window.acsbJS.init();
      }
    };
    if (window.acsbJS) {
      initialize();
      return;
    }
    let script = document.querySelector<HTMLScriptElement>(
      'script[src="https://acsbapp.com/apps/app/dist/js/app.js"]',
    );
    if (!script) {
      script = document.createElement('script');
      script.src = 'https://acsbapp.com/apps/app/dist/js/app.js';
      script.async = true;
      script.id = 'portfolio-accessibility-widget';
      script.addEventListener('load', initialize, { once: true });
      document.head.appendChild(script);
    } else {
      script.addEventListener('load', initialize, { once: true });
    }
    return () => script?.removeEventListener('load', initialize);
  }, []);
  return null;
}
