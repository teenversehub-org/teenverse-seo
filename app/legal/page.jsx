import { FileText, Lock, Scale, ShieldCheck } from 'lucide-react'

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
  title: 'Legal Center and Policy Pages',
  description:
    'Review the TeenVerse Hub legal center, including terms, privacy, disputes, verification, and payment-related policy guidance.',
  path: '/legal',
  keywords: [
    'teenverse hub legal',
    'teenverse hub terms',
    'teen freelance platform privacy policy',
    'teenverse hub dispute policy',
  ],
})

const legalCards = [
  {
    icon: FileText,
    title: 'Terms and marketplace rules',
    description:
      'TeenVerse Hub operates as a technology platform connecting clients and freelancers rather than acting as the direct employer or service provider.',
  },
  {
    icon: Lock,
    title: 'Privacy and data use',
    description:
      'Privacy language should explain age-aware data handling, limited profile visibility, verification context, and how support or payout information is used.',
  },
  {
    icon: Scale,
    title: 'Payments, disputes, and cancellations',
    description:
      'A clear legal center reduces confusion around platform fees, payment partners, project disputes, and what happens if a workflow breaks down.',
  },
  {
    icon: ShieldCheck,
    title: 'Verification and guardian safeguards',
    description:
      'TeenVerse Hub needs dedicated pages for verification, payments, and guardian guidance because those topics are trust-critical and highly searchable.',
  },
]

export default function LegalPage() {
  return (
    <MarketingShell>
      <Hero
        eyebrow="Legal center"
        title="The legal pages should make the marketplace feel more real, not more intimidating."
        description="TeenVerse Hub needs a visible policy center because trust-sensitive users look for rules, accountability, and clarity before they commit to a brand-new platform."
        primaryAction={{ href: '/verification-process', label: 'Read the verification page' }}
        secondaryAction={{ href: '/payments-protection', label: 'Open payments and protection' }}
        proof={[
          'Terms and privacy context',
          'Trust and payout references',
          'Dedicated support and safety paths',
        ]}
        image="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1400"
        imageAlt="Professional reviewing legal documents on a desk"
      />

      <Section className="pt-0">
        <SectionHeading
          eyebrow="Policy overview"
          title="Users should be able to understand the operating model quickly."
          description="Clear legal summaries are especially important on a platform involving younger users, new freelancers, and cautious buyers."
        />
        <div className="mt-10">
          <FeatureGrid items={legalCards} columns={2} />
        </div>
      </Section>

      <Section className="bg-white/70">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
            Core legal themes
          </p>
          <div className="mt-5 grid gap-8 lg:grid-cols-3">
            <div>
              <h2 className="text-xl font-semibold text-slate-950">Terms of service</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Explain platform status, eligibility, prohibited behavior, account responsibility,
                and the fact that TeenVerse Hub facilitates connections rather than directly providing
                freelance services.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-slate-950">Privacy policy</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Explain what data is collected, what is visible to clients, how verification context
                is handled, and how long core records may be retained.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-slate-950">Disputes and payments</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Clarify platform fees, payout steps, dispute review expectations, and why off-platform
                payment behavior works against the trust model.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <CtaBand
          title="Use the legal center as part of the sales journey."
          description="For TeenVerse Hub, strong policy pages are not a compliance afterthought. They are one of the reasons cautious users decide the company is real."
          primaryAction={{ href: '/guardian-guide', label: 'Open the guardian guide' }}
          secondaryAction={{ href: '/contact', label: 'Ask a policy question' }}
        />
      </Section>
    </MarketingShell>
  )
}
