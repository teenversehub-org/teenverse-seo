import {
  AlertTriangle,
  CheckCircle2,
  Layout,
  PenTool,
  Search,
  Video,
  XCircle,
  Zap,
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
  title: 'Online Jobs for Teens That Build Real Experience',
  description:
    'A practical guide to online jobs for teens that build skills, portfolios, and confidence through safer digital work like editing, writing, design, and research.',
  path: '/online-jobs-for-teens',
  keywords: [
    'online jobs for teens',
    'online jobs for students',
    'remote jobs for teens',
    'beginner online jobs for teens',
  ],
})

// --- THE CURE: Icons as JSX + Premium Glow Data ---
const jobs = [
  {
    icon: <Video />,
    title: 'Video editor',
    description: 'Great for short-form content, creator support, podcast clips, and startup social posts.',
    glow: 'bg-blue-500/20',
    iconTheme: 'bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400',
  },
  {
    icon: <PenTool />,
    title: 'Content assistant',
    description: 'Useful for captions, drafts, research summaries, newsletters, and content repurposing.',
    glow: 'bg-fuchsia-500/20',
    iconTheme: 'bg-fuchsia-50 text-fuchsia-600 dark:bg-fuchsia-500/10 dark:text-fuchsia-400',
  },
  {
    icon: <Layout />,
    title: 'Design helper',
    description: 'Good for thumbnails, carousels, simple brand assets, deck cleanup, and campaign graphics.',
    glow: 'bg-indigo-500/20',
    iconTheme: 'bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400',
  },
  {
    icon: <Search />,
    title: 'Research assistant',
    description: 'Strong fit for competitor research, lead lists, data gathering, and simple market scans.',
    glow: 'bg-emerald-500/20',
    iconTheme: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400',
  },
]

const guide = [
  {
    title: 'Best online jobs for teens',
    theme: 'emerald',
    icon: <CheckCircle2 className="h-6 w-6 text-emerald-400" />,
    points: [
      'Jobs tied to a clear digital skill.',
      'Jobs with simple samples you can show before you are hired.',
      'Jobs that create portfolio proof after delivery.',
      'Jobs that can be reviewed by a parent, guardian, or mentor.',
    ],
  },
  {
    title: 'Jobs to be careful with',
    theme: 'rose',
    icon: <XCircle className="h-6 w-6 text-rose-400" />,
    points: [
      'Any job with unclear pay, unclear scope, or unclear identity.',
      'Any work that asks for private information too early.',
      'Any "daily pay" promise that sounds too easy.',
      'Any request that moves too fast for an adult to review.',
    ],
  },
]

export default function OnlineJobsForTeensPage() {
  return (
    <MarketingShell>
      {/* ── 1. TYPOGRAPHY-LED HERO ── */}
      <Hero
        eyebrow="Online Jobs for Teens"
        title="The best online jobs build skills, proof, and confidence."
        description="TeenVerse Hub focuses on digital work that can become real portfolio proof: editing, writing, design, research, and social support. Stop searching for random gigs and start building a career."
        primaryAction={{ href: '/freelance-jobs-for-teens', label: 'Explore freelance jobs' }}
        secondaryAction={{ href: '/safe-online-jobs-for-teens', label: 'Read safety guide' }}
        proof={[
          'Beginner-friendly categories',
          'Portfolio-first work',
          'Trust-led marketplace path',
        ]}
      />

      {/* ── 2. STAGGERED WATERFALL LAYOUT (Job Categories) ── */}
      <Section className="pt-0">
        <SectionHeading
          eyebrow="Job categories"
          title="Start where your work can be seen."
          description="Searchers want job ideas, but TeenVerse Hub goes one step further to show which options build useful proof and repeatable income."
        />
        <div className="mx-auto mt-16 grid w-full max-w-[1000px] grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-10">
          {jobs.map((method, i) => (
            <div 
              key={i} 
              className={`group relative flex flex-col overflow-hidden rounded-[32px] bg-white/60 p-10 shadow-sm ring-1 ring-slate-900/5 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:bg-white hover:shadow-xl dark:bg-white/[0.03] dark:ring-white/10 dark:hover:bg-white/[0.06] ${
                i % 2 !== 0 ? 'sm:mt-20' : ''
              }`}
            >
              <div className={`pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full blur-[60px] transition-transform duration-700 group-hover:scale-150 ${method.glow}`} />
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

      {/* ── 3. DARK SPOTLIGHT BREAKOUT (Decision Guide) ── */}
      <section className="relative mx-auto my-32 max-w-[1300px] overflow-hidden rounded-[3rem] bg-[#070b14] px-6 py-24 shadow-[0_40px_80px_rgba(0,0,0,0.4)] ring-1 ring-white/10 sm:px-16 sm:py-32">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-[20%] top-[10%] h-[500px] w-[500px] rounded-full bg-emerald-600/15 blur-[120px]" />
          <div className="absolute -right-[20%] bottom-[10%] h-[500px] w-[500px] rounded-full bg-rose-600/15 blur-[120px]" />
        </div>

        <div className="relative z-10 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.25em] text-white ring-1 ring-white/20 backdrop-blur-md">
            Decision Guide
          </div>
          <h2 className="mt-6 text-3xl font-black tracking-tight text-white sm:text-5xl">
            Not every online job is a good first job.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-[1.1rem] leading-[1.8] text-slate-300">
            A good teen job is clear, skill-based, reviewable, and safe enough to explain to a parent or guardian before it starts.
          </p>
        </div>

        <div className="relative z-10 mt-20 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          {guide.map((col, i) => (
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

      {/* ── 4. CTA SECTION ── */}
      <Section className="pt-0">
        <CtaBand
          title="Turn job searching into skill-building."
          description="TeenVerse Hub is built to be more specific, more useful, and more trust-aware than generic online job lists. Start building your portfolio today."
          primaryAction={{ href: '/how-to-earn-money-as-a-teenager', label: 'Read earning guide' }}
          secondaryAction={{ href: '/how-to-start-freelancing-as-a-teen', label: 'Start freelancing' }}
        />
      </Section>
    </MarketingShell>
  )
}