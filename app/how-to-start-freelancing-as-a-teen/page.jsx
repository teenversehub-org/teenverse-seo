import {
  AlertTriangle,
  BadgeCheck,
  Briefcase,
  CheckCircle2,
  PenTool,
  ShieldCheck,
  TrendingUp,
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
  title: 'How to Start Freelancing as a Teen',
  description:
    'Learn how to start freelancing as a teen with one clear skill, a small portfolio, safer workflows, and beginner-friendly project ideas.',
  path: '/how-to-start-freelancing-as-a-teen',
  keywords: [
    'how to start freelancing as a teen',
    'teen freelancing guide',
    'freelancing for teenagers',
    'beginner freelance jobs for students',
  ],
})

// --- THE CURE: Icons as JSX + Premium Glow Data ---
const steps = [
  {
    icon: <PenTool />,
    title: 'Package one skill',
    description: 'Pick a service like video editing, captions, design support, or research and make the offer easy to understand.',
    glow: 'bg-blue-500/20',
    iconTheme: 'bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400',
  },
  {
    icon: <BadgeCheck />,
    title: 'Create visible proof',
    description: 'Make sample work first. Clients trust examples faster than big claims from a beginner profile.',
    glow: 'bg-fuchsia-500/20',
    iconTheme: 'bg-fuchsia-50 text-fuchsia-600 dark:bg-fuchsia-500/10 dark:text-fuchsia-400',
  },
  {
    icon: <Briefcase />,
    title: 'Start with a small project',
    description: 'Your first project should have a clear outcome, deadline, revision limit, and approval step.',
    glow: 'bg-indigo-500/20',
    iconTheme: 'bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400',
  },
  {
    icon: <ShieldCheck />,
    title: 'Use safer rules',
    description: 'Keep communication, payment expectations, and guardian visibility clear from the start.',
    glow: 'bg-emerald-500/20',
    iconTheme: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400',
  },
]

const roadmap = [
  {
    title: 'Week one',
    theme: 'blue',
    icon: <CheckCircle2 className="h-6 w-6 text-blue-400" />,
    points: [
      'Choose one service category.',
      'Write a one-sentence offer.',
      'Create three portfolio samples.',
      'Ask for feedback before selling.',
    ],
  },
  {
    title: 'Week two and beyond',
    theme: 'fuchsia',
    icon: <TrendingUp className="h-6 w-6 text-fuchsia-400" />,
    points: [
      'Apply to small projects that match your samples.',
      'Use simple scopes and clear deadlines.',
      'Save every finished project as portfolio proof.',
      'Improve pricing after you have repeatable delivery.',
    ],
  },
]

export default function StartFreelancingAsTeenPage() {
  return (
    <MarketingShell>
      {/* ── 1. TYPOGRAPHY-LED HERO ── */}
      <Hero
        eyebrow="Teen freelancing guide"
        title="Start freelancing with one skill and one clear offer."
        description="The fastest path is not doing everything. It is packaging one service, proving it with samples, and taking small projects that build confidence."
        primaryAction={{ href: '/freelance-jobs-for-teens', label: 'Explore teen freelance jobs' }}
        secondaryAction={{ href: '/safe-online-jobs-for-teens', label: 'Read safety guide' }}
        proof={[
          'One skill',
          'Three samples',
          'Small first projects',
        ]}
        image="/graphics/teen-earning-map.png"
        imageAlt="How to start freelancing as a teen graphic"
      />

      {/* ── 2. STAGGERED WATERFALL LAYOUT (Starter Framework) ── */}
      <Section className="pt-0">
        <SectionHeading
          eyebrow="Starter framework"
          title="A beginner needs proof more than polish."
          description="Professional-looking samples, clear service language, and safer project rules are enough to start learning with real work."
        />
        <div className="mx-auto mt-16 grid w-full max-w-[1000px] grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-10">
          {steps.map((step, i) => (
            <div 
              key={i} 
              className={`group relative flex flex-col overflow-hidden rounded-[32px] bg-white/60 p-10 shadow-sm ring-1 ring-slate-900/5 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:bg-white hover:shadow-xl dark:bg-white/[0.03] dark:ring-white/10 dark:hover:bg-white/[0.06] ${
                i % 2 !== 0 ? 'sm:mt-20' : ''
              }`}
            >
              <div className={`pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full blur-[60px] transition-transform duration-700 group-hover:scale-150 ${step.glow}`} />
              <div className={`mb-8 flex h-16 w-16 items-center justify-center rounded-[20px] ring-1 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 ${step.iconTheme}`}>
                {step.icon}
              </div>
              <h3 className="text-2xl font-black tracking-tight text-slate-900 dark:text-white">
                {step.title}
              </h3>
              <p className="mt-4 flex-1 text-[1.05rem] leading-[1.8] text-slate-600 dark:text-slate-400">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── 3. DARK SPOTLIGHT BREAKOUT (Simple Roadmap) ── */}
      <section className="relative mx-auto my-32 max-w-[1300px] overflow-hidden rounded-[3rem] bg-[#070b14] px-6 py-24 shadow-[0_40px_80px_rgba(0,0,0,0.4)] ring-1 ring-white/10 sm:px-16 sm:py-32">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-[20%] top-[10%] h-[500px] w-[500px] rounded-full bg-blue-600/15 blur-[120px]" />
          <div className="absolute -right-[20%] bottom-[10%] h-[500px] w-[500px] rounded-full bg-fuchsia-600/15 blur-[120px]" />
        </div>

        <div className="relative z-10 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.25em] text-white backdrop-blur-md">
            Simple Roadmap
          </div>
          <h2 className="mt-6 text-3xl font-black tracking-tight text-white sm:text-5xl">
            Make the first two weeks practical.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-[1.1rem] leading-[1.8] text-slate-300">
            This path is designed to help you avoid the confusion of a crowded marketplace, sending you straight toward creating value and proof.
          </p>
        </div>

        <div className="relative z-10 mt-20 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          {roadmap.map((col, i) => (
            <div 
              key={i} 
              className={`relative overflow-hidden rounded-[32px] p-8 backdrop-blur-xl sm:p-12 ${col.theme === 'blue' ? 'bg-blue-950/20 ring-1 ring-blue-500/20' : 'bg-fuchsia-950/20 ring-1 ring-fuchsia-500/20'}`}
            >
              <div className="flex items-center gap-4 border-b border-white/10 pb-6">
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${col.theme === 'blue' ? 'bg-blue-500/20' : 'bg-fuchsia-500/20'}`}>
                  {col.icon}
                </div>
                <h3 className="text-2xl font-black text-white">
                  {col.title}
                </h3>
              </div>
              
              <ul className="mt-8 flex flex-col gap-6">
                {col.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <Zap className={`mt-1.5 h-4 w-4 shrink-0 ${col.theme === 'blue' ? 'text-blue-400' : 'text-fuchsia-400'}`} />
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
          title="Your first client starts with your first proof."
          description="TeenVerse Hub helps teen freelancers turn beginner skills into safer, clearer, portfolio-building projects."
          primaryAction={{ href: '/freelance-jobs-for-teens', label: 'Start the creator path' }}
          secondaryAction={{ href: '/guardian-guide', label: 'Show parent guide' }}
        />
      </Section>
    </MarketingShell>
  )
}