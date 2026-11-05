import { AccessibilityWidget } from '@/components/accessibility-widget';
import type { Metadata } from 'next';
import '@fontsource-variable/plus-jakarta-sans';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { BackToTop } from '@/components/back-to-top';
import { siteConfig } from '@/data/site';
import './globals.css';
import './editorial.css';
import './case-art-direction.css';
import './neuromode.css';
import './fundraiser.css';
import './polish-patrol.css';
import './sbf.css';
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: 'De’Andre Perry — UX Designer & Researcher',
    template: '%s — De’Andre Perry, UX Designer & Researcher',
  },
  description:
    'De’Andre Perry is a UX Designer & Researcher working across research planning, interaction design, accessibility, and visual systems.',
  alternates: { canonical: '/' },
  icons: { icon: '/favicon.png', apple: '/brandmark.png' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'De’Andre Perry — UX Designer & Researcher',
    description: 'Understand the people. Design with intention.',
    type: 'website',
    url: '/',
    images: [
      {
        url: '/social-preview.png',
        width: 1200,
        height: 630,
        alt: 'De’Andre Perry — UX Designer & Researcher',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'De’Andre Perry — UX Designer & Researcher',
    description:
      'Research planning, thoughtful design, and accessible experiences.',
    images: ['/social-preview.png'],
  },
};
const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: siteConfig.name,
  url: siteConfig.url,
  jobTitle: siteConfig.role,
  sameAs: [siteConfig.linkedin],
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
        <BackToTop />
        <AccessibilityWidget />
      </body>
    </html>
  );
}
