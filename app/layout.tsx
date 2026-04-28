import type { Metadata } from 'next'

import StructuredData from './components/StructuredData'
import { SITE } from './lib/site'
import './globals.css'

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
  name: SITE.name,
  alternateName: SITE.shortName,
  url: SITE.baseUrl,
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
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <StructuredData data={organizationSchema} />
        {children}
      </body>
    </html>
  )
}
