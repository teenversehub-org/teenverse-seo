import { CheckCircle2, FileCheck, ShieldCheck, Users } from 'lucide-react'

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
  title: 'Verification Process',
  description:
    'Understand how TeenVerse Hub frames verification, identity checks, payout eligibility, and guardian-aware onboarding for a safer teen freelance marketplace.',
  path: '/verification-process',
  keywords: [
    'teenverse hub verification',
    'teen freelance platform verification',
    'safe teen freelancing identity checks',
  ],
})

const verificationCards = [
  {
    // THE CURE: Passed as <ShieldCheck /> instead of ShieldCheck
    icon: <ShieldCheck />,
    title: 'Verification is trust work',
    description:
      'On a marketplace for younger users, verification is not cosmetic. It is part of how the company shows buyers and guardians that the platform takes accountability seriously.',
  },
  {
    // THE CURE: Passed as <FileCheck /> instead of FileCheck
    icon: <FileCheck />,
    title: 'Use verification when it matters',
    description:
      'The strongest use cases are payout eligibility, sensitive account actions, or trust-sensitive milestones rather than unnecessary friction at every step.',
  },
  {
    // THE CURE: Passed as <Users /> instead of Users
    icon: <Users />,
    title: 'Guardian-aware context',
    description:
      'When users are under 18, the verification and consent model should make it clear who is approving, who is visible, and how financial access is handled.',
  },
  {
    // THE CURE: Passed as <CheckCircle2 /> instead of CheckCircle2
    icon: <CheckCircle2 />,
    title: 'Keep the explanation simple',
    description:
      'A good verification page avoids jargon and tells users what is checked, when it is checked, and why the platform needs it.',
  },
]

export default function VerificationProcessPage() {
  return (
    <MarketingShell>
      <Hero
        eyebrow="Verification Process"
        title="Verification should reduce uncertainty, not create mystery."
        description="TeenVerse Hub needs a dedicated verification page because identity, eligibility, and guardian-aware safeguards are central to why the marketplace feels more legitimate than a generic platform."
        primaryAction={{ href: '/payments-protection', label: 'See payment protections' }}
        secondaryAction={{ href: '/guardian-guide', label: 'Read the guardian guide' }}
        proof={[
          'Explain what is checked',
          'Explain when checks happen',
          'Explain how under-18 workflows differ',
        ]}
        image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200"
        imageAlt="Verification dashboard and data review"
      />

      <Section className="pt-0">
        <SectionHeading
          eyebrow="What this page answers"
          title="Users should leave knowing exactly why verification exists."
          description="That clarity reduces drop-off and gives search engines a dedicated trust page tied to one very specific intent."
        />
        <div className="mt-16">
          <FeatureGrid items={verificationCards} />
        </div>
      </Section>

      <Section className="border-t border-slate-900/5 bg-slate-50/50 dark:border-white/5 dark:bg-white/[0.02]">
        <CtaBand
          title="Verification works best when it connects to the rest of the trust system."
          description="Link this page tightly with safety, payments, FAQs, and the parent guide so users can move from concern to confidence in one session."
          primaryAction={{ href: '/safety', label: 'Open trust and safety' }}
          secondaryAction={{ href: '/faq', label: 'Read common questions' }}
        />
      </Section>
    </MarketingShell>
  )
}