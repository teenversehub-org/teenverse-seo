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
    icon: <Mail className="h-6 w-6" />,
    title: 'General Support',
    description: `Reach out to ${SITE.supportEmail} for account assistance, platform guidance, and active policy clarification.`,
  },
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: 'Trust & Safety',
    description:
      'Report suspicious activity, verify guardian controls, and review marketplace rules with our dedicated safety team.',
  },
  {
    icon: <MessageSquare className="h-6 w-6" />,
    title: 'Partnerships & Press',
    description:
      'Connect with us for startup collaborations, community outreach, founder interviews, and official press inquiries.',
  },
  {
    icon: <AlertTriangle className="h-6 w-6" />,
    title: 'Reporting Concerns',
    description:
      'Flag inappropriate content, escalate urgent safety concerns, and help us maintain strict platform integrity.',
  },
]

export default function ContactPage() {
  return (
    <MarketingShell>
      <Hero
        eyebrow="Get in Touch"
        title="Support that builds trust. Communication that scales."
        description="We believe in transparent communication. Whether you need technical assistance, partnership details, or safety support, our team is directly accessible."
        primaryAction={{ href: `mailto:${SITE.supportEmail}`, label: 'Email Support' }}
        secondaryAction={{ href: '/faq', label: 'Read the FAQ' }}
        proof={[
          `Support: ${SITE.supportEmail}`,
          `Location: ${SITE.location}`,
          `Operator: ${SITE.operator}`,
        ]}
        image="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=1200"
        imageAlt="Support team working together in a modern office"
      />

      <Section className="pt-0">
        <SectionHeading
          eyebrow="Select Your Support Path"
          title="Find the exact channel for your inquiry."
          description="To ensure the fastest resolution time, please select the communication route that best matches your current needs."
        />
        <div className="mt-12">
          <FeatureGrid items={contactCards} columns={2} />
        </div>
      </Section>

      <Section className="bg-slate-50/70 dark:bg-slate-900/30">
        <div className="mx-auto max-w-4xl rounded-lg border border-slate-200 bg-white p-6 text-center shadow-sm dark:border-white/10 dark:bg-slate-900 sm:p-8">
          <p className="text-xs font-black uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
            Our Commitment to You
          </p>
          <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-black tracking-normal text-slate-950 dark:text-white">
            Clear expectations. Reliable responses. Unwavering support.
          </h2>
          
          <ul className="mx-auto mt-10 flex max-w-2xl flex-col gap-5 text-left text-sm leading-relaxed text-slate-600 dark:text-slate-400">
            <li className="flex items-start gap-4">
              <span className="mt-2 flex h-2 w-2 shrink-0 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
              <span><strong>Timely Resolutions:</strong> We aim to respond to all platform inquiries within one standard business day.</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="mt-2 flex h-2 w-2 shrink-0 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
              <span><strong>Direct Guidance:</strong> We provide direct links to the relevant trust, payment, and legal resources you need.</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="mt-2 flex h-2 w-2 shrink-0 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
              <span><strong>Radical Transparency:</strong> We maintain visible and accurate company details across all platform touchpoints.</span>
            </li>
          </ul>
        </div>
      </Section>

      <Section>
        <CtaBand
          title="Explore our foundational trust and safety policies."
          description="We prioritize radical transparency and security to ensure a safe, productive environment for every user."
          primaryAction={{ href: '/legal', label: 'Open Legal Center' }}
          secondaryAction={{ href: '/safety', label: 'Review Trust & Safety' }}
        />
      </Section>
    </MarketingShell>
  )
}
