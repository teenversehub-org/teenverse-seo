import HomePageClient from './HomePageClient'
import { buildMetadata } from './lib/site'

export const metadata = buildMetadata({
  title: 'TeenVerseHub | Teen Talent Marketplace and Safer Digital Work OS',
  description:
    'TeenVerseHub is a premium teen talent marketplace and work OS for verified profiles, portfolio proof, guardian-aware trust, safer communication, and startup-ready teen digital services.',
  path: '/',
  keywords: [
    'TeenVerseHub',
    'TeenVerse Hub',
    'teen talent marketplace',
    'teen freelancing platform',
    'student talent marketplace',
    'safe online jobs for teens',
    'teen digital skills',
    'hire teen freelancers',
    'AI tools for teen freelancers',
    'teen portfolio builder',
  ],
})

export default function HomePage() {
  return <HomePageClient />
}
