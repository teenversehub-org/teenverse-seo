import { AlertTriangle, Mail, MessageSquare, ShieldCheck } from 'lucide-react'

import MarketingShell from '../components/MarketingShell'
import {
  CtaBand,
  FeatureGrid,
  Hero,
  Section,
  SectionHeading,
} from '../components/MarketingPrimitives'
import { SITE, buildMetadata } from '../lib/site'

export const metadata = buildMetadata({
  title: 'Contact TeenVerse Hub',
  description:
    'Contact TeenVerse Hub for support, partnerships, hiring questions, safety concerns, or general company inquiries.',
  path: '/contact',
  keywords: [
    'contact teenverse hub',
    'teenverse hub support',
    'teen freelance marketplace contact',
  ],
})

const contactCards = [
  {
    icon: Mail,
    title: 'General support',
    description: `Email ${SITE.supportEmail} for help with the platform, account questions, or clarification on policies and pages.`,
  },
  {
    icon: ShieldCheck,
    title: 'Trust and safety questions',
    description:
      'Use this route for questions about verification, guardian visibility, suspicious activity, or marketplace rules.',
  },
  {
    icon: MessageSquare,
    title: 'Partnerships and press',
    description:
      'Use the contact path for startup partnerships, school or community outreach, founder interviews, and company updates.',
  },
  {
    icon: AlertTriangle,
    title: 'Reporting concerns',
    description:
      'If a user sees unsafe behavior or a potentially risky listing, the site should make the reporting route obvious and easy to act on.',
  },
]

export default function ContactPage() {
  return (
    <MarketingShell>
      <Hero
        eyebrow="Contact the team"
        title="Real marketplaces should be easy to reach."
        description="TeenVerse Hub builds trust faster when visitors can find an email address, operator details, relevant help pages, and a clear escalation path without digging through the footer."
        primaryAction={{ href: `mailto:${SITE.supportEmail}`, label: 'Email support' }}
        secondaryAction={{ href: '/faq', label: 'Read the FAQ first' }}
        proof={[
          `Support: ${SITE.supportEmail}`,
          `Location: ${SITE.location}`,
          `Operator: ${SITE.operator}`,
        ]}
        image="https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&q=80&w=1400"
        imageAlt="Customer support conversation at a laptop"
      />

      <Section className="pt-0">
        <SectionHeading
          eyebrow="Where to route users"
          title="Support becomes part of credibility when it is easy to understand."
          description="This page should make it obvious which path to use for general help, trust issues, partnerships, or safety reporting."
        />
        <div className="mt-10">
          <FeatureGrid items={contactCards} columns={2} />
        </div>
      </Section>

      <Section className="bg-white/70">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
            Suggested support standard
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">
            Set clear expectations before trust turns into frustration.
          </h2>
          <ul className="mt-6 space-y-3 text-sm leading-7 text-slate-600">
            <li className="flex gap-3">
              <span className="mt-2 h-2.5 w-2.5 rounded-full bg-emerald-500" />
              <span>Reply to support requests within one business day whenever possible.</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-2.5 w-2.5 rounded-full bg-emerald-500" />
              <span>Link users to the exact trust, payment, or legal page that answers their issue.</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-2.5 w-2.5 rounded-full bg-emerald-500" />
              <span>Keep the same company details visible here, in the footer, and on trust pages.</span>
            </li>
          </ul>
        </div>
      </Section>

      <Section>
        <CtaBand
          title="The contact page should reinforce the whole trust stack."
          description="Users trust new marketplaces faster when support, policies, and identity details all tell the same story."
          primaryAction={{ href: '/legal', label: 'Open the legal center' }}
          secondaryAction={{ href: '/safety', label: 'Review trust and safety' }}
        />
      </Section>
    </MarketingShell>
  )
}
