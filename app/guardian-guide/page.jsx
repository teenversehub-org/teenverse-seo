import { CheckCircle2, Eye, ShieldCheck, Users } from 'lucide-react'

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
  title: 'Parent and Guardian Guide',
  description:
    'Read the TeenVerse Hub parent and guardian guide covering safety, visibility, consent, payouts, and what families should review before a teen starts freelancing.',
  path: '/guardian-guide',
  keywords: [
    'parent guide teen freelancing',
    'guardian consent freelance platform',
    'safe teen freelance marketplace for parents',
  ],
})

const guardianCards = [
  {
    // THE CURE: Icons passed as JSX elements
    icon: <ShieldCheck />,
    title: 'Start with the trust pages',
    description:
      'Parents and guardians should be able to review safety, payments, verification, and contact information without needing insider knowledge of freelance platforms.',
  },
  {
    icon: <Eye />,
    title: 'Visibility matters',
    description:
      'A trustworthy teen platform explains what activity is visible, how support works, and what happens if a problem is reported.',
  },
  {
    icon: <Users />,
    title: 'Consent should be explicit',
    description:
      'Under-18 participation should be framed through clear consent and payout expectations rather than vague assumptions that families will figure it out later.',
  },
  {
    icon: <CheckCircle2 />,
    title: 'Small first projects work best',
    description:
      'Families gain confidence faster when teens start with clear, limited digital tasks that can be reviewed and discussed openly.',
  },
]

export default function GuardianGuidePage() {
  return (
    <MarketingShell>
      {/* HERO SECTION - Updated with a premium 'Collaborative Trust' image */}
      <Hero
        eyebrow="Guardian Resources"
        title="Clear trust for the whole family."
        description="TeenVerse Hub helps families understand how the marketplace is meant to work, what the safeguards are, and where to go if they need more clarity."
        primaryAction={{ href: '/safety', label: 'Read trust and safety' }}
        secondaryAction={{ href: '/verification-process', label: 'Review verification' }}
        proof={[
          'Explicit consent model',
          'Transparent payment flows',
          'Direct human support path',
        ]}
        image="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=1200"
        imageAlt="Parent and teenager discussing digital work safely at home"
      />

      <Section className="pt-0">
        <SectionHeading
          eyebrow="What families need"
          title="The guide should answer practical questions, not just make promises."
          description="We use plain language about consent, visibility, payments, platform rules, and reporting instead of relying on brand tone alone."
        />
        <div className="mt-16">
          {/* Removed columns={2} for better fluid alignment */}
          <FeatureGrid items={guardianCards} />
        </div>
      </Section>

      {/* SECTION TRANSITION - Using the premium Aurora border-y theme */}
      <Section className="border-y border-slate-900/5 bg-slate-50/50 dark:border-white/5 dark:bg-white/[0.02]">
        <CtaBand
          title="A strong guardian page increases signups on both sides."
          description="When families trust the system, teens are more likely to join and clients are more likely to believe the platform takes its responsibilities seriously."
          primaryAction={{ href: '/freelance-jobs-for-teens', label: 'See the freelancer path' }}
          secondaryAction={{ href: '/contact', label: 'Ask a question' }}
        />
      </Section>
    </MarketingShell>
  )
}