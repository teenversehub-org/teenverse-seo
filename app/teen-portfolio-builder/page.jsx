import SeoGrowthPage from '../components/SeoGrowthPage'
import { SITE, buildMetadata } from '../lib/site'

export const metadata = buildMetadata({
  title: 'Teen Portfolio Builder | Build Proof Before First Freelance Work',
  description:
    'Build a teen portfolio with sample projects, skill proof, service clarity, profile trust, and safer first-work guidance through TeenVerseHub.',
  path: '/teen-portfolio-builder',
  keywords: [
    'teen portfolio builder',
    'portfolio for teen freelancers',
    'student portfolio platform',
    'TeenVerseHub portfolio',
    'build teen portfolio',
    'teen creator profile',
  ],
})

const schema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  headline: 'Teen Portfolio Builder | Build Proof Before First Freelance Work',
  description:
    'A guide for teenagers who want to build portfolio proof, service pages, and beginner-friendly freelance profiles through TeenVerseHub.',
  author: { '@type': 'Organization', name: SITE.shortName },
  publisher: { '@type': 'Organization', name: SITE.shortName },
  mainEntityOfPage: `${SITE.baseUrl}/teen-portfolio-builder`,
}

export default function TeenPortfolioBuilderPage() {
  return (
    <SeoGrowthPage
      schema={schema}
      eyebrow="Proof system"
      title="Teen portfolio builder"
      accent="for first-work credibility."
      description="A teen does not need a long resume to look credible. TeenVerseHub focuses on proof: sample projects, service descriptions, skill categories, safer communication habits, and guardian-aware trust signals."
      primaryKeyword="teen portfolio builder"
      sections={[
        {
          icon: 'fileText',
          title: 'Sample projects',
          text: 'A strong teen portfolio can start with mock edits, design concepts, writing samples, website sections, AI workflow demos, or research deliverables.',
        },
        {
          icon: 'layoutDashboard',
          title: 'Service clarity',
          text: 'Profiles should explain what the teen can deliver, what is included, what is not included, expected timelines, and how revisions work.',
        },
        {
          icon: 'badge',
          title: 'Trust signals',
          text: 'Portfolio proof becomes stronger when paired with verification, guardian consent where required, safer messaging, and protected payment expectations.',
        },
      ]}
      checklist={[
        'Add three portfolio samples for one focused service',
        'Write a short profile that sounds specific and human',
        'Explain tools, turnaround time, and revision limits',
        'Connect the profile to safety, verification, and login paths',
      ]}
      relatedLinks={[
        { href: '/teen-digital-skills', label: 'Teen digital skills' },
        { href: '/how-to-start-freelancing-as-a-teen', label: 'Start freelancing' },
        { href: '/verification-process', label: 'Verification process' },
        { href: '/guardian-guide', label: 'Guardian guide' },
      ]}
    />
  )
}
