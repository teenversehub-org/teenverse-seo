import {
  CheckCircle2,
  Flag,
  Lock,
  ShieldCheck,
  Users,
  Zap,
} from 'lucide-react'

import MarketingShell from '../components/MarketingShell'
import {
  CtaBand,
  Hero,
  Section,
  ActionLink, // imported to use in custom dark section
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
    icon: <ShieldCheck />, // THE CURE: JSX Syntax
    title: 'Identity and eligibility controls',
    description:
      'Verification and eligibility checks should be tied to the moments where trust matters most, especially for payouts and restricted actions.',
  },
  {
    icon: <Lock />,
    title: 'Protected communication and payment flows',
    description:
      'The marketplace should keep work conversations and approvals inside the intended platform experience instead of normalizing off-platform shortcuts.',
  },
  {
    icon: <Users />,
    title: 'Guardian-aware transparency',
    description:
      'Under-18 workflows need visible consent, support references, and policies a parent or guardian can actually read and understand.',
  },
  {
    icon: <Flag />,
    title: 'Reporting and escalation',
    description:
      'Suspicious jobs, unsafe behavior, and rule violations need obvious reporting paths and clear follow-up expectations.',
  },
]

const safetyViews = [
  {
    title: 'What teen freelancers need to know',
    theme: 'blue',
    points: [
      'Stay inside approved payment and communication flows.',
      'Avoid vague jobs, urgency pressure, and promises that sound too good.',
      'Use smaller projects to learn how professional delivery works.',
      'Ask a parent or guardian to review the trust pages if needed.',
    ],
  },
  {
    title: 'What clients and guardians need to see',
    theme: 'fuchsia',
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
        eyebrow="Trust and Safety"
        title="A teen marketplace only works if the safeguards are easy to see."
        description="TeenVerse Hub should not treat safety as a buried policy page. It should be part of the buying journey, the signup journey, and the guardian journey from the first visit onward."
        primaryAction={{ href: '/guardian-guide', label: 'Read the guardian guide' }}
        secondaryAction={{ href: '/verification-process', label: 'View verification details' }}
        proof={[
          'Restricted categories',
          'Clear reporting paths',
          'Visible support details',
        ]}
        image="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1200"
        imageAlt="Security and trust workflow on a laptop"
      />

      {/* ── NEW CREATIVE LAYOUT 1: THE STICKY TIMELINE ── */}
      <Section className="pt-0">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:items-start lg:gap-8">
            
            {/* Left Side: Sticky Header */}
            <div className="lg:sticky lg:top-40 lg:col-span-5">
              <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.25em] text-indigo-600 ring-1 ring-indigo-500/10 dark:bg-indigo-500/10 dark:text-indigo-400 dark:ring-indigo-400/20">
                <span className="h-2 w-2 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.8)]" />
                Safety Pillars
              </div>
              <h2 className="mt-6 text-[2.5rem] font-black leading-[1.1] tracking-tight text-slate-950 dark:text-white sm:text-5xl">
                The trust story needs to be operational.
              </h2>
              <p className="mt-6 text-[1.1rem] leading-[1.8] text-slate-600 dark:text-slate-300">
                These are the kinds of safeguards that make a cautious user stay on the page instead of bouncing because the company feels too new or too vague.
              </p>
            </div>

            {/* Right Side: Scrolling Offset Cards */}
            <div className="lg:col-span-7 lg:pl-10">
              <div className="flex flex-col gap-8 sm:gap-12">
                {pillars.map((pillar, index) => (
                  <div 
                    key={index} 
                    className="group relative flex flex-col gap-6 rounded-[32px] bg-white p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] ring-1 ring-slate-900/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] dark:bg-white/[0.02] dark:ring-white/10 sm:flex-row sm:items-start sm:p-10"
                  >
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-50 to-blue-50 text-indigo-600 ring-1 ring-indigo-500/10 dark:from-indigo-500/10 dark:to-blue-500/10 dark:text-indigo-400 dark:ring-indigo-400/20">
                      {pillar.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-black tracking-tight text-slate-950 dark:text-white">
                        {pillar.title}
                      </h3>
                      <p className="mt-4 text-[1.05rem] leading-[1.8] text-slate-600 dark:text-slate-400">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </Section>

      {/* ── NEW CREATIVE LAYOUT 2: THE DARK SPOTLIGHT BREAKOUT ── */}
      <section className="relative mx-auto my-32 max-w-[1300px] overflow-hidden rounded-[3rem] bg-[#070b14] px-6 py-24 shadow-[0_40px_80px_rgba(0,0,0,0.3)] ring-1 ring-white/10 sm:px-16 sm:py-32">
        {/* Immersive Aurora Backgrounds */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-[20%] -top-[20%] h-[600px] w-[600px] rounded-full bg-blue-600/20 blur-[120px]" />
          <div className="absolute -bottom-[20%] -right-[20%] h-[600px] w-[600px] rounded-full bg-fuchsia-600/20 blur-[120px]" />
        </div>

        <div className="relative z-10 text-center">
          <h2 className="text-3xl font-black tracking-tight text-white sm:text-5xl">
            Safety questions are not the same for every audience.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-[1.1rem] leading-[1.8] text-slate-300">
            That is why trust pages should speak directly to teens, startups, and guardians instead of hiding behind generic reassurance.
          </p>
        </div>

        <div className="relative z-10 mt-20 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          {safetyViews.map((view, i) => (
            <div 
              key={i} 
              className="group relative overflow-hidden rounded-[32px] bg-white/[0.03] p-8 ring-1 ring-white/10 backdrop-blur-xl transition-all duration-500 hover:bg-white/[0.06] sm:p-12"
            >
              {/* Dynamic Theme Glow */}
              <div className={`absolute -right-20 -top-20 h-40 w-40 rounded-full blur-[60px] ${view.theme === 'blue' ? 'bg-blue-500/30' : 'bg-fuchsia-500/30'}`} />
              
              <h3 className="text-2xl font-black text-white">
                {view.title}
              </h3>
              
              <ul className="mt-10 flex flex-col gap-6">
                {view.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <div className={`mt-1.5 flex h-2 w-2 shrink-0 rounded-full shadow-[0_0_10px_currentColor] ${view.theme === 'blue' ? 'text-blue-400 bg-blue-400' : 'text-fuchsia-400 bg-fuchsia-400'}`} />
                    <span className="text-[1.05rem] leading-[1.8] text-slate-300">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── THE CONVERSION CALLOUT ── */}
      <Section className="pt-0">
        <div className="mx-auto flex w-full max-w-[1000px] flex-col items-center overflow-hidden rounded-[32px] bg-white/60 p-10 text-center shadow-sm ring-1 ring-slate-900/5 backdrop-blur-2xl dark:bg-white/[0.03] dark:ring-white/10 sm:p-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-5 py-2 text-[12px] font-black uppercase tracking-[0.25em] text-emerald-600 ring-1 ring-emerald-500/10 dark:bg-emerald-500/10 dark:text-emerald-400 dark:ring-emerald-400/20">
            <CheckCircle2 className="h-4 w-4" />
            Conversion through Clarity
          </div>
          <p className="mt-8 max-w-[800px] text-[1.15rem] leading-[1.8] text-slate-600 dark:text-slate-300">
            TeenVerse Hub should link its safety page, payments page, verification page,
            and guardian guide from the homepage, footer, FAQ, and all money pages. On a
            trust-sensitive startup, those pages are not support content. <strong className="text-slate-900 dark:text-white">They are conversion content.</strong>
          </p>
        </div>
      </Section>

      <Section className="pt-0">
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