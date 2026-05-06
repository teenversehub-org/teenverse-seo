import { CheckCircle2, DollarSign, Lock, ShieldCheck } from 'lucide-react'

import MarketingShell from '../components/MarketingShell'
import {
  CtaBand,
  FeatureGrid,
  Hero,
  Section,
  SectionHeading,
} from '../components/MarketingPrimitives'
import { buildMetadata } from '../lib/site'

export const metadata = buildMetadata({
  title: 'Payments and Protection',
  description:
    'Learn how TeenVerse Hub positions payment protection, payout expectations, dispute handling, and safer transaction flows for teen freelancers and startup clients.',
  path: '/payments-protection',
  keywords: [
    'teenverse hub payments',
    'teen freelance payment protection',
    'safe payments for teen freelancers',
  ],
})

const paymentCards = [
  {
    // THE CURE: Plain JSX elements for icons to prevent Server-to-Client errors
    icon: <DollarSign />,
    title: 'Clear transaction framing',
    description:
      'New marketplaces gain trust when users can understand who pays, how money flows, when payouts happen, and what the platform fee covers.',
  },
  {
    icon: <ShieldCheck />,
    title: 'Protected workflows',
    description:
      'Payment trust gets stronger when project scope, approvals, and communication happen through the same platform story instead of scattered side channels.',
  },
  {
    icon: <Lock />,
    title: 'Safe platform standards',
    description:
      'The site explains why off-platform payments undermine safety, accountability, and dispute visibility for everyone involved.',
  },
  {
    icon: <CheckCircle2 />,
    title: 'Connect payments to disputes',
    description:
      'If something goes wrong, users should know where to read the rules and who to contact before the problem becomes a trust collapse.',
  },
]

export default function PaymentsProtectionPage() {
  return (
    <MarketingShell>
      {/* HERO SECTION - Updated with a high-reliability 'Secure Finance' image */}
      <Hero
        eyebrow="Payments and Protection"
        title="Payment clarity makes a marketplace feel real."
        description="TeenVerse Hub needs a dedicated payments page because teens, startups, and guardians all want to know how money is handled before they trust anything else on the site."
        primaryAction={{ href: '/legal', label: 'Open the legal center' }}
        secondaryAction={{ href: '/contact', label: 'Ask a payment question' }}
        proof={[
          'Transparent payment flows',
          'Clear platform fee logic',
          'Integrated dispute support',
        ]}
        // NEW IMAGE: Known reliable financial/security visual
        image="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1200"
        imageAlt="Secure digital payment and financial transaction security graphic"
      />

      <Section className="pt-0">
        <SectionHeading
          eyebrow="Trust Work"
          title="Visitors do not trust vague money language."
          description="We explain expectations clearly so that cautious users stay on the site instead of leaving to search for reassurance somewhere else."
        />
        <div className="mt-16">
          <FeatureGrid items={paymentCards} />
        </div>
      </Section>

      <Section className="border-y border-slate-900/5 bg-slate-50/50 dark:border-white/5 dark:bg-white/[0.02]">
        <CtaBand
          title="Connect payment clarity to buyer confidence."
          description="When startups know how approval and payment steps work, they are much more likely to test a new marketplace with a small paid project."
          primaryAction={{ href: '/hire-teen-freelancers', label: 'See the startup path' }}
          secondaryAction={{ href: '/verification-process', label: 'Review verification' }}
        />
      </Section>
    </MarketingShell>
  )
}