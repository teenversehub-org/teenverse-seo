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
  foundingLocation: {
    '@type': 'Place',
    name: SITE.location,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Mahoba',
      addressRegion: 'Uttar Pradesh',
      addressCountry: 'IN',
    },
  },
  description: SITE.description,
  knowsAbout: [
    'teen freelancing',
    'student talent marketplaces',
    'safe online jobs for teens',
    'student portfolio building',
    'guardian consent for teen platforms',
    'startup hiring for student creators',
  ],
  slogan:
    'A safer student talent marketplace for teen portfolios, skills, and startup projects.',
  audience: {
    '@type': 'PeopleAudience',
    name: SITE.audience,
    suggestedMinAge: SITE.minimumAge,
    suggestedMaxAge: SITE.maximumAge,
    geographicArea: {
      '@type': 'Country',
      name: 'India',
    },
  },
  areaServed: [
    {
      '@type': 'Country',
      name: 'India',
    },
    {
      '@type': 'AdministrativeArea',
      name: 'Uttar Pradesh',
    },
  ],
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

const webApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  '@id': `${SITE.baseUrl}/#webapplication`,
  name: SITE.name,
  alternateName: SITE.shortName,
  url: SITE.baseUrl,
  applicationCategory: SITE.appCategory,
  operatingSystem: 'Web browser',
  browserRequirements: 'Requires a modern mobile or desktop web browser.',
  description: SITE.description,
  inLanguage: 'en-IN',
  isAccessibleForFree: true,
  audience: {
    '@type': 'PeopleAudience',
    name: SITE.audience,
    suggestedMinAge: SITE.minimumAge,
    suggestedMaxAge: SITE.maximumAge,
    geographicArea: {
      '@type': 'Country',
      name: 'India',
    },
  },
  contentRating: 'Ages 14-21 with guardian consent required for users under 18',
  featureList: SITE.features,
  offers: {
    '@type': 'Offer',
    category: 'Student freelancing and portfolio platform',
    availability: 'https://schema.org/OnlineOnly',
    eligibleRegion: {
      '@type': 'Country',
      name: 'India',
    },
  },
  publisher: {
    '@id': `${SITE.baseUrl}/#organization`,
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
    <html
      lang="en"
      className="scroll-smooth"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body className="tvh-unified-theme antialiased">
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <StructuredData
          data={[organizationSchema, webApplicationSchema, websiteSchema]}
        />
        {children}
      </body>
    </html>
  )
}
