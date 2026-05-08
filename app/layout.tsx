import type { Metadata } from 'next'
import StructuredData from './components/StructuredData'
import { SITE } from './lib/site'
import './globals.css'

const themeInitScript = `
(() => {
  try {
    const storedTheme = window.localStorage.getItem('tvh-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = storedTheme === 'dark' || (!storedTheme && prefersDark);
    document.documentElement.classList.toggle('dark', isDark);
    document.documentElement.style.colorScheme = isDark ? 'dark' : 'light';
  } catch (_) {}
})();
`

export const metadata: Metadata = {
  metadataBase: new URL(SITE.baseUrl),
  title: {
    default: 'TeenVerse Hub | Safer Teen Freelancing and Startup Hiring',
    template: '%s | TeenVerse Hub',
  },
  description: SITE.description,
  applicationName: SITE.name,
  authors: [{ name: SITE.founder }],
  creator: SITE.founder,
  publisher: SITE.name,
  category: 'business',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    siteName: SITE.name,
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE.baseUrl}/#organization`,
  name: SITE.name,
  alternateName: SITE.shortName,
  url: SITE.baseUrl,
  logo: `${SITE.baseUrl}/icon.svg`,
  email: SITE.supportEmail,
  founder: {
    '@type': 'Person',
    name: SITE.founder,
  },
  description: SITE.description,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Mahoba',
    addressRegion: 'Uttar Pradesh',
    addressCountry: 'IN',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer support',
    email: SITE.supportEmail,
    areaServed: 'IN',
    availableLanguage: ['en', 'hi'],
  },
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE.baseUrl}/#website`,
  name: SITE.name,
  alternateName: SITE.shortName,
  url: SITE.baseUrl,
  description: SITE.description,
  publisher: {
    '@id': `${SITE.baseUrl}/#organization`,
  },
  inLanguage: 'en-IN',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="antialiased">
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <StructuredData data={[organizationSchema, websiteSchema]} />
        {children}
      </body>
    </html>
  )
}
