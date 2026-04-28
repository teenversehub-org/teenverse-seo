import {
  CheckCircle2,
  Flag,
  Lock,
  ShieldCheck,
  Users,
} from 'lucide-react'

import MarketingShell from '../components/MarketingShell'
import {
  CtaBand,
  FeatureGrid,
  Hero,
  Section,
  SectionHeading,
  ComparisonList,
} from '../components/MarketingPrimitives'
import { buildMetadata } from '../lib/site'

export const metadata = buildMetadata({
  title: 'Trust and Safety',
  description:
    'See how TeenVerse Hub frames trust and safety for teenagers, startups, and guardians through category guardrails, protected workflows, reporting paths, and clearer operating rules.',
  path: '/safety',
  keywords: [
    'teenverse hub safety',
    'safe freelance platform for teens',
    'guardian aware freelance platform',
    'protected teen marketplace',
  ],
})

const pillars = [
  {
    icon: ShieldCheck,
    title: 'Identity and eligibility controls',
    description:
      'Verification and eligibility checks should be tied to the moments where trust matters most, especially for payouts and restricted actions.',
  },
  {
    icon: Lock,
    title: 'Protected communication and payment flows',
    description:
      'The marketplace should keep work conversations and approvals inside the intended platform experience instead of normalizing off-platform shortcuts.',
  },
  {
    icon: Users,
    title: 'Guardian-aware transparency',
    description:
      'Under-18 workflows need visible consent, support references, and policies a parent or guardian can actually read and understand.',
  },
  {
    icon: Flag,
    title: 'Reporting and escalation',
    description:
      'Suspicious jobs, unsafe behavior, and rule violations need obvious reporting paths and clear follow-up expectations.',
  },
]

const safetyViews = [
  {
    title: 'What teen freelancers need to know',
    points: [
      'Stay inside approved payment and communication flows.',
      'Avoid vague jobs, urgency pressure, and promises that sound too good.',
      'Use smaller projects to learn how professional delivery works.',
      'Ask a parent or guardian to review the trust pages if needed.',
    ],
  },
  {
    title: 'What clients and guardians need to see',
    points: [
      'Who is behind the platform and how support works.',
      'How verification, eligibility, and payouts are handled.',
      'Which work categories are encouraged and which are restricted.',
      'How to report an issue and what happens after a report is sent.',
    ],
  },
]

export default function SafetyPage() {
  return (
    <MarketingShell>
      <Hero
        eyebrow="Trust and safety"
        title="A teen marketplace only works if the safeguards are easy to see."
        description="TeenVerse Hub should not treat safety as a buried policy page. It should be part of the buying journey, the signup journey, and the guardian journey from the first visit onward."
        primaryAction={{ href: '/guardian-guide', label: 'Read the guardian guide' }}
        secondaryAction={{ href: '/verification-process', label: 'View verification details' }}
        proof={[
          'Restricted work categories',
          'Clear reporting paths',
          'Visible support and company details',
        ]}
        image="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=1400"
        imageAlt="People in a team discussion about trust and planning"
      />

      <Section className="pt-0">
        <SectionHeading
          eyebrow="Safety pillars"
          title="The trust story needs to be operational."
          description="These are the kinds of safeguards that make a cautious user stay on the page instead of bouncing because the company feels too new or too vague."
        />
        <div className="mt-10">
          <FeatureGrid items={pillars} columns={4} />
        </div>
      </Section>

      <Section className="bg-white/70">
        <SectionHeading
          eyebrow="What different users need"
          title="Safety questions are not the same for every audience."
          description="That is why trust pages should speak directly to teens, startups, and guardians instead of hiding behind generic reassurance."
        />
        <div className="mt-10">
          <ComparisonList items={safetyViews} />
        </div>
      </Section>

      <Section>
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-800">
            <CheckCircle2 className="h-4 w-4" />
            Trust pages should answer the risk before the signup form appears.
          </div>
          <p className="mt-5 max-w-3xl text-base leading-7 text-slate-600">
            TeenVerse Hub should link its safety page, payments page, verification page,
            and guardian guide from the homepage, footer, FAQ, and all money pages. On a
            trust-sensitive startup, those pages are not support content. They are conversion content.
          </p>
        </div>
      </Section>

      <Section className="bg-white/70">
        <CtaBand
          title="Keep the trust model visible everywhere."
          description="The strongest marketplace pages connect safety, payments, and company identity instead of treating them like separate departments."
          primaryAction={{ href: '/payments-protection', label: 'See payments and protection' }}
          secondaryAction={{ href: '/contact', label: 'Report or ask a question' }}
        />
      </Section>
    </MarketingShell>
  )
}
