import {
  AlertTriangle,
  Briefcase,
  CheckCircle2,
  Globe,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Zap,
} from 'lucide-react'

import MarketingShell from '../components/MarketingShell'
import {
  CtaBand,
  Hero,
  Section,
} from '../components/MarketingPrimitives'
import StructuredData from '../components/StructuredData'
import { SITE, buildMetadata } from '../lib/site'

export const metadata = buildMetadata({
  title: 'About TeenVerse Hub',
  description:
    'Learn what TeenVerse Hub is building, why it exists, and how the company is positioning safer first work experience for teen freelancers and startup teams.',
  path: '/about',
  keywords: [
    'about teenverse hub',
    'teenverse hub founder',
    'teen freelance platform company',
    'teen startup marketplace',
  ],
})

// --- ORIGINAL POLICY DATA PRESERVED ---
const principles = [
  {
    icon: <ShieldCheck className="h-6 w-6 text-indigo-400" />,
    title: 'Safety before scale',
    description: 'A teen marketplace has to earn trust operationally before it earns volume. That shapes product, messaging, and policy work.',
  },
  {
    icon: <Briefcase className="h-6 w-6 text-fuchsia-400" />,
    title: 'Real work over hype',
    description: 'The platform should focus on actual projects, repeatable services, and visible delivery habits rather than oversized startup claims.',
  },
  {
    icon: <Users className="h-6 w-6 text-emerald-400" />,
    title: 'Clarity for every stakeholder',
    description: 'Teen freelancers, clients, and guardians each need different audiences. Great marketplace pages give each group those answers quickly.',
  },
  {
    icon: <Sparkles className="h-6 w-6 text-amber-400" />,
    title: 'Experience as the product',
    description: 'The long-term value is not only earnings. It is confidence, process, portfolio proof, and a better path into modern work.',
  },
]

// --- NEW CREATIVE DATA BLOCKS ---
const storyNodes = [
  {
    step: '01 / THE PROBLEM',
    title: 'Existing platforms ignore teenagers.',
    description: 'As a 15-year-old student, I saw firsthand how difficult it was for young people to find safe digital opportunities. Most freelance platforms are highly competitive and built exclusively for adults. Teenagers with real talent were completely ignored or vulnerable to being scammed.',
    theme: 'rose',
  },
  {
    step: '02 / THE SOLO BUILD',
    title: 'I built it from scratch.',
    description: 'I realized no one was going to build a solution for us, so I decided to do it myself. Using my coding skills, I designed, developed, and deployed the entire first version of TeenVerseHub from my bedroom—creating a secure ecosystem where parents could trust the platform, and teens could start earning.',
    theme: 'amber',
  },
  {
    step: '03 / GROWING THE VISION',
    title: 'Bringing on a brilliant team.',
    description: 'Once the foundation was solid and the platform started to grow, I knew I could not scale it alone. I brought on my incredibly talented co-founders, Subodh and Aditya. Together, we are transforming TeenVerseHub into the ultimate global launchpad for young digital creators.',
    theme: 'indigo',
  },
]

const teamMembers = [
  { name: 'Kashif Khan', role: 'Founder & CEO', desc: 'A 15-year-old developer and visionary. Kashif completely built the initial TeenVerseHub platform from the ground up to create safe digital opportunities for teenagers everywhere.', initial: 'K', color: 'bg-indigo-500 text-indigo-50' },
  { name: 'Subodh', role: 'Co-founder', desc: 'Leading technical development and driving platform growth to ensure a seamless experience for all creators.', initial: 'S', color: 'bg-fuchsia-500 text-fuchsia-50' },
  { name: 'Aditya', role: 'Co-founder', desc: 'Supporting daily operations, execution, and making sure the entire ecosystem runs smoothly and securely.', initial: 'A', color: 'bg-blue-500 text-blue-50' },
]

const aboutSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About TeenVerse Hub',
  url: `${SITE.baseUrl}/about`,
  mainEntity: {
    '@type': 'Person',
    name: SITE.founder,
    jobTitle: 'Founder',
  },
}

export default function AboutPage() {
  return (
    <>
      <StructuredData data={aboutSchema} />
      <MarketingShell>
        
        {/* ── TYPOGRAPHY-LED HERO ── */}
        <Hero
          eyebrow="The Story of TeenVerseHub"
          title="We believe age should never limit talent."
          description="Founded by a 15-year-old, TeenVerseHub is a platform built to help teenagers learn, earn, and grow in a safe, transparent, and beginner-friendly environment."
          primaryAction={{ href: '/safety', label: 'Review the trust model' }}
          secondaryAction={{ href: '/contact', label: 'Contact the team' }}
        />

        {/* ── CREATIVE LAYOUT 1: STICKY TIMELINE (HOW IT BEGAN) ── */}
        <Section className="border-t border-slate-900/5 pt-24 dark:border-white/5">
          <div className="mx-auto max-w-[1200px]">
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:items-start">
              
              {/* Sticky Header */}
              <div className="lg:sticky lg:top-40 lg:col-span-5">
                <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.25em] text-slate-600 ring-1 ring-slate-900/5 dark:bg-white/5 dark:text-slate-300 dark:ring-white/10">
                  <Globe className="h-3 w-3" />
                  Origin Story
                </div>
                <h2 className="mt-6 text-[3rem] font-black leading-[1.1] tracking-tight text-slate-950 dark:text-white sm:text-6xl">
                  How it <br className="hidden lg:block" />
                  <span className="text-indigo-600 dark:text-indigo-400">Began.</span>
                </h2>
                <p className="mt-6 text-[1.15rem] leading-[1.8] text-slate-600 dark:text-slate-400">
                  The vision of a 15-year-old developer to change the way teenagers start their careers.
                </p>
              </div>

              {/* Scrolling Nodes */}
              <div className="flex flex-col gap-12 lg:col-span-7">
                {storyNodes.map((node, i) => (
                  <div 
                    key={i} 
                    className={`relative overflow-hidden rounded-[2.5rem] border p-10 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl sm:p-14 ${
                      node.theme === 'indigo' 
                        ? 'border-indigo-500/30 bg-indigo-600 text-white shadow-indigo-200 dark:border-indigo-400/20 dark:bg-indigo-900/50 dark:shadow-none' 
                        : 'border-slate-200 bg-white shadow-slate-100 dark:border-white/10 dark:bg-[#0b1120] dark:shadow-none'
                    }`}
                  >
                    {/* Decorative Gradient Line */}
                    <div className={`absolute right-0 top-0 h-full w-1.5 ${
                      node.theme === 'rose' ? 'bg-gradient-to-b from-rose-500 to-transparent' : 
                      node.theme === 'amber' ? 'bg-gradient-to-b from-amber-500 to-transparent' : 
                      'bg-gradient-to-b from-indigo-300 to-transparent'
                    }`} />
                    
                    <span className={`block font-mono text-[11px] font-bold tracking-widest sm:text-xs ${
                      node.theme === 'rose' ? 'text-rose-500 dark:text-rose-400' : 
                      node.theme === 'amber' ? 'text-amber-500 dark:text-amber-400' : 
                      'text-indigo-200 dark:text-indigo-300'
                    }`}>
                      {node.step}
                    </span>
                    
                    <h3 className={`mt-6 text-2xl font-black sm:text-3xl ${node.theme === 'indigo' ? 'text-white' : 'text-slate-950 dark:text-white'}`}>
                      {node.title}
                    </h3>
                    
                    <p className={`mt-6 text-[1.05rem] leading-[1.8] ${node.theme === 'indigo' ? 'text-indigo-50 dark:text-indigo-100' : 'text-slate-600 dark:text-slate-400'}`}>
                      {/* Bolding specific names/terms dynamically */}
                      {node.description.split(/(Kashif Khan|TeenVerseHub|Subodh|Aditya)/g).map((part, idx) => 
                        ['Kashif Khan', 'TeenVerseHub', 'Subodh', 'Aditya'].includes(part) 
                          ? <strong key={idx} className={node.theme === 'indigo' ? 'text-white' : 'text-slate-900 dark:text-white'}>{part}</strong> 
                          : part
                      )}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </Section>

        {/* ── CREATIVE LAYOUT 2: IMMERSIVE SPLIT BLOCK (MISSION & VISION) ── */}
        <Section>
          <div className="mx-auto grid max-w-[1300px] grid-cols-1 gap-6 lg:grid-cols-2">
            
            {/* Dark Accent Block (Mission) */}
            <div className="relative flex flex-col justify-between overflow-hidden rounded-[3rem] bg-slate-950 p-10 text-white shadow-2xl dark:bg-[#070b14] dark:ring-1 dark:ring-white/10 sm:p-16">
              <div className="relative z-10">
                <Target className="mb-8 h-10 w-10 text-indigo-400 opacity-80" />
                <h3 className="text-4xl font-black tracking-tight sm:text-5xl">Our Mission</h3>
                <p className="mt-4 text-[1.1rem] font-medium text-slate-400">Creating opportunities for every teenager.</p>
              </div>
              
              <ul className="relative z-10 mt-16 space-y-6">
                {['Explore your raw skills', 'Earn your first actual income', 'Gain real-world project experience', 'Build confidence for the future'].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-[1.05rem] font-bold">
                    <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.8)]" /> 
                    {item}
                  </li>
                ))}
              </ul>
              {/* Background Glow */}
              <div className="pointer-events-none absolute -bottom-32 -right-32 h-[500px] w-[500px] rounded-full bg-indigo-600/30 blur-[100px]" />
            </div>

            {/* Light Glass Block (Vision) */}
            <div className="relative flex flex-col justify-center overflow-hidden rounded-[3rem] border border-slate-200 bg-white p-10 shadow-xl dark:border-white/10 dark:bg-white/[0.02] sm:p-16">
              <Sparkles className="mb-8 h-10 w-10 text-indigo-600 dark:text-indigo-400" />
              <h3 className="text-4xl font-black tracking-tight text-slate-950 dark:text-white sm:text-5xl">Our Vision</h3>
              <p className="mt-8 text-[1.2rem] leading-[1.8] text-slate-600 dark:text-slate-400">
                We envision a world where teenagers don’t have to wait to start their journey. 
                <br/><br/>
                We are building a global platform where young individuals can turn their skills into real opportunities — <strong className="text-slate-950 dark:text-white">safely, confidently, and independently.</strong>
              </p>
            </div>
            
          </div>
        </Section>

        {/* ── CREATIVE LAYOUT 3: DARK SPOTLIGHT (TRUST PRINCIPLES) ── */}
        <section className="relative mx-auto my-32 max-w-[1300px] overflow-hidden rounded-[3rem] bg-[#070b14] px-6 py-24 shadow-[0_40px_80px_rgba(0,0,0,0.3)] ring-1 ring-white/10 sm:px-16 sm:py-32">
          {/* Immersive Aurora Backgrounds */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-[10%] -top-[10%] h-[500px] w-[500px] rounded-full bg-indigo-600/20 blur-[120px]" />
            <div className="absolute -bottom-[10%] -right-[10%] h-[500px] w-[500px] rounded-full bg-fuchsia-600/20 blur-[120px]" />
          </div>

          <div className="relative z-10 text-center">
            <h2 className="text-4xl font-black tracking-tight text-white sm:text-6xl">
              Trust is our <span className="text-indigo-400">Currency.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-[1.15rem] leading-[1.8] text-slate-300">
              We understand that trust is the foundation—not just for teenagers, but for their guardians. Safety isn't a feature, it's the entire infrastructure.
            </p>
          </div>

          <div className="relative z-10 mt-20 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((principle, i) => (
              <div key={i} className="group flex flex-col rounded-[2rem] bg-white/[0.03] p-8 ring-1 ring-white/10 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:bg-white/[0.06]">
                <div className="mb-6 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10">
                  {principle.icon}
                </div>
                <h4 className="text-xl font-black text-white">{principle.title}</h4>
                <p className="mt-4 text-[0.95rem] leading-[1.8] text-slate-400">{principle.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── CREATIVE LAYOUT 4: MEET THE TEAM (MINIMALIST ROWS) ── */}
        <Section className="pt-0">
          <div className="mx-auto max-w-[1000px]">
            <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end md:mb-24">
              <div>
                <h2 className="text-4xl font-black tracking-tight text-slate-950 dark:text-white sm:text-6xl">
                  Built by <span className="text-indigo-600 dark:text-indigo-400">Young Minds.</span>
                </h2>
                <p className="mt-4 text-[1.15rem] font-medium text-slate-600 dark:text-slate-400">
                  A passionate team with a clear vision for the next generation.
                </p>
              </div>
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 font-mono text-[11px] font-bold uppercase tracking-widest text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
                <AlertTriangle className="h-3 w-3 text-indigo-600 dark:text-indigo-400" />
                Registered under Mohd Asif
              </div>
            </div>

            <div className="border-t border-slate-900/5 dark:border-white/5">
              {teamMembers.map((member, i) => (
                <div 
                  key={i} 
                  className="group flex cursor-pointer flex-col justify-between border-b border-slate-900/5 py-10 transition-colors hover:bg-slate-50 dark:border-white/5 dark:hover:bg-white/[0.02] md:flex-row md:items-center md:py-12"
                >
                  <div className="mb-6 flex flex-col gap-6 sm:flex-row sm:items-center md:mb-0 md:gap-8 px-4">
                    <div className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-full text-2xl font-black shadow-lg transition-transform duration-500 group-hover:scale-110 md:h-20 md:w-20 ${member.color}`}>
                      {member.initial}
                    </div>
                    <div>
                      <h3 className="text-3xl font-black tracking-tight text-slate-950 dark:text-white md:text-4xl">
                        {member.name}
                      </h3>
                      <div className="mt-2 font-mono text-[11px] font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
                        {member.role}
                      </div>
                    </div>
                  </div>
                  <div className="px-4 md:w-1/2">
                    <p className="text-[1.05rem] leading-[1.8] text-slate-500 transition-colors group-hover:text-slate-800 dark:text-slate-400 dark:group-hover:text-slate-200">
                      {member.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* ── ORIGINAL FOUNDER NOTE BOX ── */}
        <Section>
          <div className="mx-auto flex w-full max-w-[1000px] flex-col items-center overflow-hidden rounded-[32px] bg-white/60 p-10 text-center shadow-sm ring-1 ring-slate-900/5 backdrop-blur-2xl dark:bg-white/[0.03] dark:ring-white/10 sm:p-16">
            <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-5 py-2 text-[12px] font-black uppercase tracking-[0.25em] text-indigo-600 ring-1 ring-indigo-500/10 dark:bg-indigo-500/10 dark:text-indigo-400 dark:ring-indigo-400/20">
              <Zap className="h-4 w-4" />
              Conversion Strategy
            </div>
            <h2 className="mt-8 max-w-3xl text-3xl font-black leading-[1.2] tracking-tight text-slate-950 dark:text-white sm:text-4xl">
              A founder story helps, but only when the trust system is stronger than the headline.
            </h2>
            <p className="mt-8 max-w-3xl text-[1.15rem] leading-[1.8] text-slate-600 dark:text-slate-300">
              TeenVerse Hub can absolutely use its founder story for press and community
              building. On conversion pages, though, the company leads with verification, safety, and product clarity first.
            </p>
            <div className="mt-10 flex items-center gap-3 rounded-2xl bg-slate-50 px-6 py-4 font-bold text-slate-700 ring-1 ring-slate-900/5 dark:bg-white/5 dark:text-slate-200">
              <CheckCircle2 className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
              Real work, real rules, and visible accountability.
            </div>
          </div>
        </Section>

        <Section className="pt-0">
          <CtaBand
            title="The fastest trust win is consistency."
            description="Keep the company story, safety story, and conversion story aligned across the homepage, hiring pages, support pages, and company profiles."
            primaryAction={{ href: '/legal', label: 'Open the legal center' }}
            secondaryAction={{ href: '/faq', label: 'Read common questions' }}
          />
        </Section>
      </MarketingShell>
    </>
  )
}