import {
  Search,
  ShieldCheck,
  UsersRound,
} from 'lucide-react'

import SeoGrowthPage from '../components/SeoGrowthPage'
import { SITE, buildMetadata } from '../lib/site'

export const metadata = buildMetadata({
  title: 'Student Talent Marketplace | Hire Teen and Student Digital Talent',
  description:
    'TeenVerseHub is a student talent marketplace for startups and creators looking for teen digital services, portfolio proof, safer communication, and responsible project workflows.',
  path: '/student-talent-marketplace',
  keywords: [
    'student talent marketplace',
    'teen talent marketplace',
    'hire student digital talent',
    'student freelancers for startups',
    'TeenVerseHub marketplace',
    'verified teen talent',
  ],
})

const schema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  headline: 'Student Talent Marketplace | Hire Teen and Student Digital Talent',
  description:
    'A TeenVerseHub page for startups and creators exploring student talent, teen freelancers, and safer beginner-friendly digital project workflows.',
  author: { '@type': 'Organization', name: SITE.shortName },
  publisher: { '@type': 'Organization', name: SITE.shortName },
  mainEntityOfPage: `${SITE.baseUrl}/student-talent-marketplace`,
}

export default function StudentTalentMarketplacePage() {
  return (
    <SeoGrowthPage
      schema={schema}
      eyebrow="Marketplace positioning"
      title="Student talent marketplace"
      accent="for modern startup work."
      description="TeenVerseHub gives startups and creators a more focused way to discover young digital talent for small, clear, beginner-friendly projects without relying on noisy open marketplaces."
      primaryKeyword="student talent marketplace"
      sections={[
        {
          icon: Search,
          title: 'Focused discovery',
          text: 'Clients can think in categories such as video edits, social content, research, writing, design support, websites, AI tasks, and creator operations.',
        },
        {
          icon: UsersRound,
          title: 'Student-first profiles',
          text: 'Instead of forcing teens to compete like senior freelancers, TeenVerseHub can emphasize samples, interests, learning stage, and clear service boundaries.',
        },
        {
          icon: ShieldCheck,
          title: 'Responsible hiring',
          text: 'A student talent marketplace needs scope clarity, respectful feedback, safer communication, age-aware rules, and protected payment expectations.',
        },
      ]}
      checklist={[
        'Start with a small test project before larger work',
        'Share deliverables, deadline, budget, and feedback style',
        'Review portfolio samples instead of expecting years of experience',
        'Use platform login and trust pages before starting collaboration',
      ]}
      relatedLinks={[
        { href: '/hire-teen-freelancers', label: 'Hire teen freelancers' },
        { href: '/payments-protection', label: 'Payments and protection' },
        { href: '/verification-process', label: 'Verification process' },
        { href: '/teen-digital-skills', label: 'Teen digital skills' },
      ]}
    />
  )
}
