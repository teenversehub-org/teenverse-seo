import {
  AlertTriangle,
  Briefcase,
  CheckCircle2,
  PenTool,
  Video,
  WalletCards,
  Zap,
} from 'lucide-react'

import MarketingShell from '../components/MarketingShell'
import {
  CtaBand,
  Hero,
  Section,
  SectionHeading,
} from '../components/MarketingPrimitives'
import StructuredData from '../components/StructuredData'
import { SITE, buildMetadata } from '../lib/site'

export const metadata = buildMetadata({
  title: 'How to Earn Money as a Teenager Safely',
  description:
    'A practical guide for teenagers who want to earn money online safely through freelancing, digital skills, portfolios, and beginner-friendly projects.',
  path: '/how-to-earn-money-as-a-teenager',
  keywords: [
    'how to earn money as a teenager',
    'how to make money as a teen',
    'earn money online as a teenager',
    'safe ways for teens to earn money',
    'teen freelancing',
  ],
})

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How to Earn Money as a Teenager Safely',
  description:
    'A practical guide for teenagers who want to earn money online safely through digital skills and freelance projects.',
  author: {
    '@type': 'Organization',
    name: SITE.name,
  },
  publisher: {
    '@type': 'Organization',
    name: SITE.name,
  },
  mainEntityOfPage: `${SITE.baseUrl}/how-to-earn-money-as-a-teenager`,
}

const methods = [
  {
    icon: <Video />,
    title: 'Edit short-form videos',
    description:
      'A strong starter skill for teens who already understand reels, shorts, gaming edits, or creator content.',
    glow: 'bg-blue-500/20',
    iconTheme: 'bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400',
  },
  {
    icon: <PenTool />,
    title: 'Write and repurpose content',
    description:
      'Turn research, captions, newsletters, and blog drafts into simple paid services for small teams.',
    glow: 'bg-fuchsia-500/20',
    iconTheme: 'bg-fuchsia-50 text-fuchsia-600 dark:bg-fuchsia-500/10 dark:text-fuchsia-400',
  },
  {
    icon: <Briefcase />,
    title: 'Help startups with digital tasks',
    description:
      'Offer focused work like list building, social support, basic design, or research instead of vague "anything" services.',
    glow: 'bg-indigo-500/20',
    iconTheme: 'bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400',
  },
  {
    icon: <WalletCards />,
    title: 'Learn payments and pricing',
    description:
      'Earning safely means understanding scope, approvals, revisions, payout timing, and guardian-aware rules.',
    glow: 'bg-emerald-500/20',
    iconTheme: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400',
  },
]

const path = [
  {
    title: 'Smart path for teens',
    theme: 'emerald',
    icon: <CheckCircle2 className="h-6 w-6 text-emerald-400" />,
    points: [
      'Pick one skill that can be shown with samples.',
      'Create 3 to 5 portfolio examples before chasing clients.',
      'Start with small projects that are easy to review.',
      'Keep payment, communication, and expectations clear.',
    ],
  },
  {
    title: 'What to avoid',
    theme: 'rose',
    icon: <AlertTriangle className="h-6 w-6 text-rose-400" />,
    points: [
      'Jobs that promise fast money with no skill or effort.',
      'Requests to move payments or conversations off-platform too early.',
      'Vague work with no deliverable, deadline, or budget.',
      'Anything that makes a parent or guardian uncomfortable to review.',
    ],
  },
]

export default function EarnMoneyAsTeenPage() {
  return (
    <>
      <StructuredData data={articleSchema} />
      <MarketingShell>
        
        <Hero
          eyebrow="Teen Earning Guide"
          title="Earn money as a teenager without random-job chaos."
          description="The safest path is not chasing every side hustle. It is choosing one digital skill, building proof, starting small, and working through clear rules."
          primaryAction={{ href: '/freelance-jobs-for-teens', label: 'Find teen freelance work' }}
          secondaryAction={{ href: '/guardian-guide', label: 'Show parent guide' }}
          proof={[
            'Beginner-friendly earning ideas',
            'Built around safety and proof',
            'Better than vague side-hustle lists',
          ]}
        />

        {/* ── CREATIVE LAYOUT 1: THE STAGGERED WATERFALL ── */}
        <Section className="pt-0">
          <SectionHeading
            eyebrow="Best Earning Paths"
            title="Start with skills that become visible proof."
            description="Teens rank, convert, and earn better when the service is easy to explain and easy for a client to review."
          />
          <div className="mx-auto mt-16 grid w-full max-w-[1000px] grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-10">
            {methods.map((method, i) => (
              <div 
                key={i} 
                className={`group relative flex flex-col overflow-hidden rounded-[32px] bg-white/60 p-10 shadow-sm ring-1 ring-slate-900/5 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:bg-white/80 hover:shadow-xl dark:bg-white/[0.03] dark:ring-white/10 dark:hover:bg-white/[0.06] ${i % 2 !== 0 ? 'sm:mt-20' : ''}`}
              >
                {/* Custom glowing orb for each card */}
                <div className={`pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full blur-[60px] transition-all duration-700 group-hover:scale-150 ${method.glow}`} />
                
                <div className={`mb-8 flex h-16 w-16 items-center justify-center rounded-[20px] ring-1 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 ${method.iconTheme}`}>
                  {method.icon}
                </div>
                <h3 className="text-2xl font-black tracking-tight text-slate-900 dark:text-white">
                  {method.title}
                </h3>
                <p className="mt-4 flex-1 text-[1.05rem] leading-[1.8] text-slate-600 dark:text-slate-400">
                  {method.description}
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* ── CREATIVE LAYOUT 2: THE "DO VS DON'T" DARK SPOTLIGHT ── */}
        <section className="relative mx-auto my-32 max-w-[1300px] overflow-hidden rounded-[3rem] bg-[#070b14] px-6 py-24 shadow-[0_40px_80px_rgba(0,0,0,0.4)] ring-1 ring-white/10 sm:px-16 sm:py-32">
          {/* Deep Immersive Aurora Backgrounds */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-[20%] top-[10%] h-[500px] w-[500px] rounded-full bg-emerald-600/15 blur-[120px]" />
            <div className="absolute -right-[20%] bottom-[10%] h-[500px] w-[500px] rounded-full bg-rose-600/15 blur-[120px]" />
          </div>

          <div className="relative z-10 text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.25em] text-white ring-1 ring-white/20 backdrop-blur-md">
              Safe Earning Framework
            </div>
            <h2 className="mt-6 text-3xl font-black tracking-tight text-white sm:text-5xl">
              Earning money online should feel reviewable.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-[1.1rem] leading-[1.8] text-slate-300">
              The point is not just income. It is building experience without stepping into risky, vague, or adult-first work environments.
            </p>
          </div>

          <div className="relative z-10 mt-20 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
            {path.map((col, i) => (
              <div 
                key={i} 
                className={`relative overflow-hidden rounded-[32px] p-8 backdrop-blur-xl sm:p-12 ${col.theme === 'emerald' ? 'bg-emerald-950/20 ring-1 ring-emerald-500/20' : 'bg-rose-950/20 ring-1 ring-rose-500/20'}`}
              >
                <div className="flex items-center gap-4 border-b border-white/10 pb-6">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${col.theme === 'emerald' ? 'bg-emerald-500/20' : 'bg-rose-500/20'}`}>
                    {col.icon}
                  </div>
                  <h3 className="text-2xl font-black text-white">
                    {col.title}
                  </h3>
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

        <Section className="pt-0">
          <CtaBand
            title="Turn the first skill into the first real project."
            description="TeenVerse Hub is built to make the path from sample work to client work feel clearer, safer, and more professional."
            primaryAction={{ href: '/how-to-start-freelancing-as-a-teen', label: 'Start freelancing as a teen' }}
            secondaryAction={{ href: '/safe-online-jobs-for-teens', label: 'Read safety guide' }}
          />
        </Section>
      </MarketingShell>
    </>
  )
}