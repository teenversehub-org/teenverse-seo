import { HelpCircle, Mail, ShieldCheck } from 'lucide-react'

import MarketingShell from '../components/MarketingShell'
import {
  CtaBand,
  FaqList,
  FeatureGrid,
  Hero,
  Section,
  SectionHeading,
} from '../components/MarketingPrimitives'
import StructuredData from '../components/StructuredData'
import { SITE, buildMetadata, faqItems } from '../lib/site'

export const metadata = buildMetadata({
  title: 'Frequently Asked Questions',
  description:
    'Read the most common questions about TeenVerse Hub, including safety, payments, age rules, beginner freelancing, startup hiring, and guardian visibility.',
  path: '/faq',
  keywords: [
    'teenverse hub faq',
    'is teenverse hub safe',
    'freelance platform for teens faq',
    'guardian consent teen marketplace',
  ],
})

const questionCategories = [
  {
    // THE CURE: JSX element for icons to prevent Server-to-Client errors
    icon: <HelpCircle />,
    title: 'Getting started',
    description:
      'What TeenVerse Hub is, who it is for, and how new freelancers or clients should approach the platform.',
  },
  {
    // THE CURE: JSX element for icons
    icon: <ShieldCheck />,
    title: 'Trust and safety',
    description:
      'Why the site emphasizes verification, reporting, restricted work categories, and guardian-aware pages.',
  },
  {
    // THE CURE: JSX element for icons
    icon: <Mail />,
    title: 'Support and next steps',
    description:
      `If something is still unclear, users should be able to contact ${SITE.supportEmail} and get routed to the right trust page quickly.`,
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
}

export default function FaqPage() {
  return (
    <>
      <StructuredData data={faqSchema} />
      <MarketingShell>
        {/* HERO SECTION - Removed image for a high-impact, typography-led full display look */}
        <Hero
          eyebrow="Common questions"
          title="The FAQ should reduce hesitation, not just list random answers."
          description="TeenVerse Hub needs FAQ answers that directly address safety, legitimacy, how work starts, how payments are framed, and what parents or guardians should review first."
          primaryAction={{ href: '/safety', label: 'Read trust and safety' }}
          secondaryAction={{ href: '/contact', label: 'Contact support' }}
          proof={[
            'Safety questions answered clearly',
            'Payment questions linked to trust pages',
            'Support route visible for cautious users',
          ]}
        />

        <Section className="pt-0">
          <SectionHeading
            eyebrow="Coverage"
            title="Answer the risk questions first."
            description="When people land on the FAQ, they are often looking for reassurance more than information. The structure should reflect that."
          />
          <div className="mt-16">
            <FeatureGrid items={questionCategories} />
          </div>
        </Section>

        {/* SECTION TRANSITION - Using premium Aurora border logic */}
        <Section className="border-y border-slate-900/5 bg-slate-50/50 dark:border-white/5 dark:bg-white/[0.02]">
          <SectionHeading
            eyebrow="FAQ"
            title="Questions users are most likely to ask before they trust the platform"
            description="These answers are designed to keep users moving instead of forcing them to hunt across multiple pages."
          />
          <div className="mt-16">
            <FaqList items={faqItems} />
          </div>
        </Section>

        <Section>
          <CtaBand
            title="Still have a trust question?"
            description="Direct people to the exact page that matches their concern instead of making them interpret generic marketplace language."
            primaryAction={{ href: '/guardian-guide', label: 'Open the guardian guide' }}
            secondaryAction={{ href: '/payments-protection', label: 'See payment details' }}
          />
        </Section>
      </MarketingShell>
    </>
  )
}