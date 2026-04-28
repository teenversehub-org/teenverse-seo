import {
  Briefcase,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  Users,
} from 'lucide-react'

import MarketingShell from '../components/MarketingShell'
import {
  CtaBand,
  FeatureGrid,
  Hero,
  Section,
  SectionHeading,
  StatGrid,
} from '../components/MarketingPrimitives'
import StructuredData from '../components/StructuredData'
import { SITE, buildMetadata } from '../lib/site'

export const metadata = buildMetadata({
  title: 'About TeenVerse Hub',
  description:
    'Learn what TeenVerse Hub is building, why the platform exists, and how the company is positioning safer first work experience for teen freelancers and startup teams.',
  path: '/about',
  keywords: [
    'about teenverse hub',
    'teenverse hub founder',
    'teen freelance platform company',
    'teen startup marketplace',
  ],
})

const companyFacts = [
  {
    label: 'Positioning',
    value: 'Trust first',
    detail: 'The company promise is built around safer first work experience and clearer buying confidence.',
  },
  {
    label: 'Audience',
    value: 'Two-sided',
    detail: 'Teen freelancers need skill-building and startups need affordable digital execution that still feels legitimate.',
  },
  {
    label: 'Market',
    value: 'India first',
    detail: 'The current positioning works best as India-first and global-ready instead of trying to look universal too early.',
  },
  {
    label: 'Company signal',
    value: 'Real operators',
    detail: 'Founder identity, operator details, support email, and policy pages should stay visible across the site.',
  },
]

const principles = [
  {
    icon: ShieldCheck,
    title: 'Safety before scale',
    description:
      'A teen marketplace has to earn trust operationally before it earns volume. That shapes product, messaging, and policy work.',
  },
  {
    icon: Briefcase,
    title: 'Real work over hype',
    description:
      'The platform should focus on actual projects, repeatable services, and visible delivery habits rather than oversized startup claims.',
  },
  {
    icon: Users,
    title: 'Clarity for every stakeholder',
    description:
      'Teen freelancers, clients, and guardians each need different answers. Great marketplace pages give each group those answers quickly.',
  },
  {
    icon: Sparkles,
    title: 'Experience as the product',
    description:
      'The long-term value is not only earnings. It is confidence, process, portfolio proof, and a better path into modern work.',
  },
]

const aboutSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About TeenVerse Hub',
  url: `${SITE.baseUrl}/about`,
  mainEntity: {
    '@type': 'Person',
    name: SITE.founder,
    jobTitle: 'Founder',
  },
}

export default function AboutPage() {
  return (
    <>
      <StructuredData data={aboutSchema} />
      <MarketingShell>
        <Hero
          eyebrow="Company story"
          title="TeenVerse Hub is building a more credible first-work marketplace for young talent."
          description="The company exists because teenagers often have real digital skills long before most platforms know how to serve them safely. TeenVerse Hub is trying to close that gap for freelancers, startups, and guardians at the same time."
          primaryAction={{ href: '/safety', label: 'Review the trust model' }}
          secondaryAction={{ href: '/contact', label: 'Contact the team' }}
          proof={[
            `Founder: ${SITE.founder}`,
            `Operator: ${SITE.operator}`,
            `Support: ${SITE.supportEmail}`,
          ]}
          image="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1400"
          imageAlt="Young team discussing product strategy"
        />

        <Section className="pt-0">
          <StatGrid items={companyFacts} />
        </Section>

        <Section className="bg-white/70">
          <SectionHeading
            eyebrow="Operating principles"
            title="The company should look more like trust infrastructure than a concept page."
            description="That means clearer policies, calmer design, stronger route intent, and less dependence on founder-story novelty alone."
          />
          <div className="mt-10">
            <FeatureGrid items={principles} />
          </div>
        </Section>

        <Section>
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
              Founder note
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">
              A founder story helps, but only when the trust system is stronger than the headline.
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
              TeenVerse Hub can absolutely use its founder story for press, community building,
              and founder-brand content. On conversion pages, though, the company should lead with
              verification, safety, payments, and product clarity first, then let the story deepen
              belief instead of carrying the whole argument by itself.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-700">
              <CheckCircle2 className="h-4 w-4 text-emerald-600" />
              Built for real work, real rules, and visible accountability.
            </div>
          </div>
        </Section>

        <Section className="bg-white/70">
          <CtaBand
            title="The fastest trust win is consistency."
            description="Keep the company story, safety story, and conversion story aligned across the homepage, hiring pages, support pages, and company profiles."
            primaryAction={{ href: '/legal', label: 'Open the legal center' }}
            secondaryAction={{ href: '/faq', label: 'Read common questions' }}
          />
        </Section>
      </MarketingShell>
    </>
  )
}
