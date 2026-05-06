import { 
  AlertTriangle, 
  BadgeCheck, 
  CheckCircle2, 
  Lock, 
  ShieldCheck, 
  XCircle, 
  Zap 
} from 'lucide-react'

import MarketingShell from '../components/MarketingShell'
import {
  CtaBand,
  Hero,
  Section,
  SectionHeading,
} from '../components/MarketingPrimitives'
import { buildMetadata } from '../lib/site'

export const metadata = buildMetadata({
  title: 'Safe Online Jobs for Teens',
  description:
    'Explore safe online jobs for teens, red flags to avoid, and beginner-friendly digital work that helps students build experience without unnecessary risk.',
  path: '/safe-online-jobs-for-teens',
  keywords: [
    'safe online jobs for teens',
    'legit online jobs for teens',
    'safe jobs for teenagers online',
    'teen online work safety',
  ],
})

// --- THE CURE: Icons passed as JSX elements + Creative Styling Data ---
const safetyCards = [
  {
    icon: <ShieldCheck />,
    title: 'Clear deliverables',
    description: 'Safe online work has a defined task, deadline, review process, and payout expectation.',
    glow: 'bg-emerald-500/20',
    iconTheme: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400'
  },
  {
    icon: <Lock />,
    title: 'Protected communication',
    description: 'Teens should avoid work that immediately pushes them into private channels without a clear reason.',
    glow: 'bg-blue-500/20',
    iconTheme: 'bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400'
  },
  {
    icon: <BadgeCheck />,
    title: 'Reviewable by adults',
    description: 'If a parent or guardian cannot understand the job, the scope, or the payment flow, pause before accepting it.',
    glow: 'bg-indigo-500/20',
    iconTheme: 'bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400'
  },
  {
    icon: <AlertTriangle />,
    title: 'No too-good promises',
    description: 'Fast money with no skill, no work, or urgent pressure is usually a signal to slow down.',
    glow: 'bg-rose-500/20',
    iconTheme: 'bg-rose-50 text-rose-600 dark:bg-rose-500/10 dark:text-rose-400'
  },
]

const lists = [
  {
    title: 'Safer teen-friendly online work',
    theme: 'emerald',
    icon: <CheckCircle2 className="h-6 w-6 text-emerald-400" />,
    points: [
      'Short-form video editing for creators or startups.',
      'Writing captions, blog drafts, and newsletters.',
      'Social media support and content repurposing.',
      'Research, list building, and simple digital operations.',
    ],
  },
  {
    title: 'Red flags to avoid',
    theme: 'rose',
    icon: <XCircle className="h-6 w-6 text-rose-400" />,
    points: [
      'Requests for payment before you can start working.',
      'Jobs that require private personal information too early.',
      'No clear client, scope, budget, or approval process.',
      'Pressure to hide the work from a parent or guardian.',
    ],
  },
]

export default function SafeOnlineJobsForTeensPage() {
  return (
    <MarketingShell>
      {/* ── 1. TYPOGRAPHY-LED HERO ── */}
      <Hero
        eyebrow="Safety-first earning"
        title="Safe online jobs should feel clear before you start."
        description="The best teen online work is specific, skill-based, reviewable, and built around clear expectations. That is the category TeenVerse Hub is designed to own."
        primaryAction={{ href: '/freelance-jobs-for-teens', label: 'Explore teen freelance jobs' }}
        secondaryAction={{ href: '/guardian-guide', label: 'Read guardian guide' }}
        proof={[
          'Clear scopes',
          'Safer payment framing',
          'Parent-reviewable trust pages',
        ]}
      />

      {/* ── 2. STAGGERED WATERFALL LAYOUT (Safety Criteria) ── */}
      <Section className="pt-0">
        <SectionHeading
          eyebrow="Safety criteria"
          title="A job is safer when the rules are easy to explain."
          description="TeenVerse Hub is built to be more practical and more trustworthy than generic online job lists by enforcing these core criteria."
        />
        <div className="mx-auto mt-16 grid w-full max-w-[1000px] grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-10">
          {safetyCards.map((method, i) => (
            <div 
              key={i} 
              className={`group relative flex flex-col overflow-hidden rounded-[32px] bg-white/60 p-8 shadow-sm ring-1 ring-slate-900/5 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:bg-white hover:shadow-xl dark:bg-white/[0.03] dark:ring-white/10 dark:hover:bg-white/[0.06] ${
                i % 2 !== 0 ? 'sm:mt-16' : ''
              }`}
            >
              <div className={`pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full blur-[50px] transition-transform duration-700 group-hover:scale-150 ${method.glow}`} />
              <div className={`mb-8 flex h-14 w-14 items-center justify-center rounded-[20px] ring-1 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 ${method.iconTheme}`}>
                {method.icon}
              </div>
              <h3 className="text-xl font-black tracking-tight text-slate-900 dark:text-white">{method.title}</h3>
              <p className="mt-4 flex-1 text-[0.95rem] leading-[1.8] text-slate-600 dark:text-slate-400">{method.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── 3. DARK SPOTLIGHT BREAKOUT (Do's vs Don'ts) ── */}
      <section className="relative mx-auto my-32 max-w-[1300px] overflow-hidden rounded-[3rem] bg-[#070b14] px-6 py-24 shadow-[0_40px_80px_rgba(0,0,0,0.4)] ring-1 ring-white/10 sm:px-16 sm:py-32">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-[10%] top-[20%] h-[500px] w-[500px] rounded-full bg-emerald-600/15 blur-[120px]" />
          <div className="absolute -right-[10%] bottom-[20%] h-[500px] w-[500px] rounded-full bg-rose-600/15 blur-[120px]" />
        </div>
        <div className="relative z-10 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.25em] text-white backdrop-blur-md">
            What to choose
          </div>
          <h2 className="mt-6 text-3xl font-black tracking-tight text-white sm:text-5xl">
            Choose work that builds proof, not risk.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-[1.1rem] leading-[1.8] text-slate-300">
            Good teen work creates portfolio proof and practical confidence. Risky work creates confusion and unnecessary pressure.
          </p>
        </div>
        
        <div className="relative z-10 mt-20 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          {lists.map((col, i) => (
            <div key={i} className={`relative overflow-hidden rounded-[32px] p-8 backdrop-blur-xl sm:p-12 ${col.theme === 'emerald' ? 'bg-emerald-950/20 ring-1 ring-emerald-500/20' : 'bg-rose-950/20 ring-1 ring-rose-500/20'}`}>
              <div className="flex items-center gap-4 border-b border-white/10 pb-6">
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${col.theme === 'emerald' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-rose-500/20 text-rose-400'}`}>
                  {col.icon}
                </div>
                <h3 className="text-2xl font-black text-white">{col.title}</h3>
              </div>
              <ul className="mt-8 flex flex-col gap-6">
                {col.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <Zap className={`mt-1.5 h-4 w-4 shrink-0 ${col.theme === 'emerald' ? 'text-emerald-400' : 'text-rose-400'}`} />
                    <span className="text-[1.05rem] leading-[1.8] text-slate-300">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── 4. CTA SECTION ── */}
      <Section className="pt-0">
        <CtaBand
          title="Use safety as a conversion advantage."
          description="For TeenVerse Hub, trust content is not just compliance. It is the reason teens, clients, and parents decide to move forward."
          primaryAction={{ href: '/safety', label: 'Open trust and safety' }}
          secondaryAction={{ href: '/payments-protection', label: 'Understand payments' }}
        />
      </Section>
    </MarketingShell>
  )
}