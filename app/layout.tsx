import type { Metadata } from 'next';
import '@fontsource-variable/plus-jakarta-sans';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://deandre-perry-ux.info636875.chatgpt.site'),
  title: { default: "De'Andre Perry — UX Design Engineer", template: "%s — De'Andre Perry" },
  description: 'UX designer and design engineer translating research, systems thinking, and accessible interaction design into digital products.',
  alternates: { canonical: '/' },
  icons: { icon: '/favicon.png', apple: '/brandmark.png' },
  openGraph: { title: "De'Andre Perry — UX Design Engineer", description: 'Research-led product design, accessibility, systems thinking, and implementation.', type: 'website', url: '/' },
  twitter: { card: 'summary', title: "De'Andre Perry — UX Design Engineer", description: 'Research-led product design, accessibility, systems thinking, and implementation.' },
};

const personSchema = {
  '@context': 'https://schema.org', '@type': 'Person', name: "De'Andre Perry", url: 'https://deandre-perry-ux.info636875.chatgpt.site',
  jobTitle: 'UX Designer and UX Design Engineer', knowsAbout: ['UX research', 'Product design', 'Accessibility', 'Design systems', 'Front-end prototyping'],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
        <a href="#main-content" className="skip-link">Skip to content</a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
