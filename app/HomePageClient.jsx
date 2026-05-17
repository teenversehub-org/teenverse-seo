'use client'

import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  BadgeCheck,
  Briefcase,
  CheckCircle2,
  CircleDollarSign,
  Code2,
  Fingerprint,
  FileText,
  LayoutDashboard,
  LockKeyhole,
  Rocket,
  Search,
  MessageSquareText,
  Play,
  ShieldCheck,
  Sparkles,
  Star,
  TrendingUp,
  UsersRound,
  WandSparkles,
} from 'lucide-react'
import { motion } from 'framer-motion'

import MarketingShell from './components/MarketingShell'
import { SITE } from './lib/site'

const loginUrl = SITE.appUrl

const fadeUp = {
  hidden: { opacity: 0, y: 28, filter: 'blur(10px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.08 } },
}

const skills = [
  ['Video edits', 'Shorts, reels, creator clips', Play],
  ['AI assisted design', 'Thumbnails, posts, pitch visuals', WandSparkles],
  ['Frontend support', 'Landing pages and simple sites', Code2],
  ['Content writing', 'SEO drafts, captions, scripts', MessageSquareText],
]

const routes = [
  {
    title: 'Teen creators',
    text: 'Build proof, price beginner-friendly services, and get guided toward safer first paid work.',
    href: '/freelance-jobs-for-teens',
    image: '/graphics/gemini-svg.svg',
    color: 'from-[#f4d58d] to-[#fffaf0]',
  },
  {
    title: 'Startup teams',
    text: 'Find Gen Z execution for lean creative, social, research, and web support without noisy open marketplaces.',
    href: '/hire-teen-freelancers',
    image: '/graphics/gemini-svg (1).svg',
    color: 'from-[#dcecff] to-[#eef7ff]',
  },
  {
    title: 'Guardians',
    text: 'Understand consent, moderation, verification, communication boundaries, and payment protection.',
    href: '/guardian-guide',
    image: '/graphics/gemini-svg (2).svg',
    color: 'from-[#e6fff5] to-[#f8fbff]',
  },
]

const seoLinks = [
  ['Teen digital skills', '/teen-digital-skills'],
  ['Portfolio builder', '/teen-portfolio-builder'],
  ['Student talent marketplace', '/student-talent-marketplace'],
  ['AI tools for teen freelancers', '/ai-tools-for-teen-freelancers'],
]

const platformStats = [
  ['14–21', 'Teen talent age focus'],
  ['8', 'Starter skill categories'],
  ['Under 18', 'Guardian-aware consent flow'],
  ['10%', 'Basic plan platform fee'],
]

const howItWorks = [
  ['01', 'Create a profile', 'Students build a clean profile with skills, age-aware details, and portfolio proof.', UsersRound],
  ['02', 'Verify identity and skills', 'Verification, consent rules, and sample work help make teen talent feel credible.', Fingerprint],
  ['03', 'Match with safer projects', 'Startups discover beginner-friendly teen talent for creative, content, and web tasks.', Search],
  ['04', 'Work with protection', 'Clear workflows, reporting, moderation, and payment clarity reduce scam risk.', ShieldCheck],
]

const comparisonRows = [
  ['Not designed for teenagers', 'Built specifically for teen and Gen Z talent'],
  ['Generic profiles with little proof', 'Portfolio-first profiles with skill samples'],
  ['Risky open communication', 'Guardian-aware safety and moderation thinking'],
  ['Hard for beginners to start', 'Guided first earning and beginner-friendly categories'],
  ['One-size-fits-all marketplace', 'Focused ecosystem for teen work, learning, and credibility'],
]

const platformFeatures = [
  ['AI skill assistant', 'Help teens understand what to improve and how to present their work.', Sparkles],
  ['Portfolio builder', 'Turn small projects, samples, and proof into a professional profile.', FileText],
  ['Startup matching', 'Connect startup needs with teen skills like editing, design, writing, and frontend.', Briefcase],
  ['Safe messaging', 'Keep project communication more structured, respectful, and reportable.', MessageSquareText],
  ['Teen verification', 'Age-aware checks with guardian consent for users under 18.', Fingerprint],
  ['Earnings tracker', 'Show wallet balance, subscriptions, missions, and reputation progress.', CircleDollarSign],
  ['Learning roadmap', 'Guide new creators from first skill to first credible portfolio.', TrendingUp],
  ['Guardian clarity', 'Explain consent, safety, and project boundaries before work starts.', ShieldCheck],
]

const opportunityCategories = [
  'Video editing',
  'Thumbnail design',
  'AI assisted design',
  'Frontend development',
  'Content writing',
  'Research assistance',
  'Social media support',
  'Short-form editing',
]

const safetyPillars = [
  ['Guardian-aware onboarding', 'Users under 18 follow a consent-first flow, so families understand what is happening.'],
  ['Verification and profile proof', 'Identity, age, and portfolio signals help make work more credible.'],
  ['Moderation and reporting', 'A safer marketplace needs reporting paths, limits, and review systems built into the product.'],
  ['Protected workflows', 'Clear scopes, communication boundaries, and payment clarity help reduce confusion and scams.'],
]

const storyCards = [
  ['Video editor from India', 'Building a portfolio with reels, short-form edits, and creator-style samples.'],
  ['Teen UI designer', 'Turning landing page concepts and dashboard screens into proof of skill.'],
  ['Student frontend developer', 'Practicing React pages, simple websites, and startup support tasks.'],
]

const roadmapItems = [
  ['Mobile app', 'A smoother teen creator experience on phone.'],
  ['AI mentor', 'Personal guidance for skills, profile quality, and project readiness.'],
  ['Team collaboration', 'Better tools for startup teams and teen collaborators.'],
  ['International payments', 'Future expansion for global teen talent opportunities.'],
  ['Teen learning academy', 'Guided learning paths connected to real portfolio proof.'],
]

function PrimaryButton({ href, children }) {
  return (
    <a
      href={href}
      className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#21142f] px-6 py-3 text-sm font-black text-white shadow-[0_18px_55px_rgba(33,20,47,0.22)] transition hover:-translate-y-0.5 hover:bg-[#321747] dark:bg-[#f8f5ef] dark:text-[#21142f]"
    >
      {children}
      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
    </a>
  )
}

function SecondaryButton({ href, children }) {
  return (
    <Link
      href={href}
      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#21142f]/15 bg-white/70 px-6 py-3 text-sm font-bold text-[#21142f] backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-white dark:border-white/15 dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
    >
      {children}
    </Link>
  )
}

function DashboardPreview({ priority = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 34, rotate: -2, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto w-full max-w-[420px]"
    >
      <div className="absolute -inset-8 rounded-[3rem] bg-[radial-gradient(circle_at_30%_10%,rgba(168,85,247,0.30),transparent_38%),radial-gradient(circle_at_80%_70%,rgba(16,185,129,0.22),transparent_38%)] blur-3xl dark:bg-[radial-gradient(circle_at_30%_10%,rgba(168,85,247,0.38),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(45,212,191,0.22),transparent_42%)]" />

      <motion.div
        animate={{ y: [0, -12, 0], rotate: [0, -1.3, 0] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
        className="relative overflow-hidden rounded-[2.2rem] border border-white/80 bg-white/55 p-2 shadow-[0_42px_130px_rgba(33,20,47,0.24)] backdrop-blur-2xl dark:border-white/10 dark:bg-white/[0.06] dark:shadow-[0_42px_130px_rgba(0,0,0,0.44)]"
      >
        <Image
          src="/graphics/dashboard-light.png"
          alt="TeenVerseHub light mode dashboard showing wallet balance, active missions, reputation, verified identity and marketplace metrics"
          width={797}
          height={1536}
          priority={priority}
          className="block h-auto w-full rounded-[1.75rem] dark:hidden"
        />
        <Image
          src="/graphics/dashboard-dark.png"
          alt="TeenVerseHub dark mode dashboard showing wallet balance, active missions, reputation, verified identity and marketplace metrics"
          width={797}
          height={1536}
          priority={priority}
          className="hidden h-auto w-full rounded-[1.75rem] dark:block"
        />
        <motion.div
          aria-hidden
          animate={{ x: ['-130%', '140%'] }}
          transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut', repeatDelay: 1.8 }}
          className="pointer-events-none absolute inset-y-2 w-1/2 rotate-6 bg-gradient-to-r from-transparent via-white/35 to-transparent dark:via-white/14"
        />
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
        className="absolute -bottom-5 -left-2 rounded-2xl border border-emerald-400/30 bg-emerald-50/95 px-4 py-3 shadow-2xl backdrop-blur-xl dark:border-emerald-300/20 dark:bg-[#061d1b]/95"
      >
        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-300">Verified</p>
        <p className="mt-1 text-sm font-black text-[#101827] dark:text-white">Identity secured</p>
      </motion.div>

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5.4, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
        className="absolute -right-3 top-16 rounded-2xl border border-violet-300/45 bg-white/90 px-4 py-3 shadow-2xl backdrop-blur-xl dark:border-violet-300/15 dark:bg-[#130f2a]/95"
      >
        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-violet-600 dark:text-violet-300">Energy</p>
        <p className="mt-1 text-sm font-black text-[#101827] dark:text-white">277 points</p>
      </motion.div>
    </motion.div>
  )
}

export default function HomePage() {
  return (
    <MarketingShell>
      <div className="overflow-hidden bg-[#f7f3ea] text-[#21142f] dark:bg-[#070b10] dark:text-white">
        <section className="relative isolate min-h-[96vh] overflow-hidden px-5 pb-16 pt-32 sm:px-8 lg:px-12">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_10%_0%,rgba(88,55,125,0.22),transparent_30%),radial-gradient(circle_at_88%_12%,rgba(9,74,70,0.18),transparent_30%),linear-gradient(135deg,#fbfaf6_0%,#eadcc5_46%,#d8eef0_100%)] dark:bg-[radial-gradient(circle_at_12%_2%,rgba(116,67,141,0.34),transparent_34%),radial-gradient(circle_at_92%_12%,rgba(19,89,83,0.24),transparent_30%),linear-gradient(135deg,#070b10_0%,#10151b_48%,#160b1f_100%)]" />
          <div className="tv-grid-mesh pointer-events-none absolute inset-0 -z-10 opacity-70" />
          <motion.div
            aria-hidden
            animate={{ y: [0, -18, 0], rotate: [0, 4, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute left-[6%] top-28 h-20 w-20 rounded-[28px] border border-white/70 bg-[#fffaf0]/70 shadow-2xl shadow-[#5b245e]/10 backdrop-blur-xl dark:border-white/10 dark:bg-white/10"
          />
          <motion.div
            aria-hidden
            animate={{ y: [0, 22, 0], rotate: [0, -6, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
            className="absolute bottom-20 right-[8%] h-28 w-28 rounded-full border border-white/60 bg-[#073b3a]/10 shadow-2xl backdrop-blur-xl dark:bg-[#d8b4fe]/10"
          />

          <div className="mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.02fr_0.98fr]">
            <motion.div initial="hidden" animate="show" variants={stagger}>
              <motion.div variants={fadeUp} className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#5b245e]/15 bg-white/70 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#5b245e] shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/10 dark:text-[#ead7ff]">
                <Sparkles className="h-4 w-4" />
                TeenVerseHub work OS
              </motion.div>

              <motion.h1 variants={fadeUp} className="max-w-5xl text-5xl font-black leading-[0.95] tracking-normal text-[#21142f] sm:text-7xl lg:text-8xl dark:text-white">
                TeenVerseHub
                <span className="mt-2 block bg-[linear-gradient(120deg,#5b245e_0%,#073b3a_48%,#c79a4b_100%)] bg-clip-text text-transparent dark:bg-[linear-gradient(120deg,#f8f5ef_0%,#d8b4fe_44%,#6ee7b7_100%)] dark:bg-clip-text">
                  makes teen talent feel credible.
                </span>
              </motion.h1>

              <motion.p variants={fadeUp} className="mt-7 max-w-2xl text-lg leading-8 text-[#4a3f50] sm:text-xl dark:text-slate-300">
                A safer platform where talented teenagers can build real portfolios, work with startups, and earn credibility online—with verification, guardian-aware flows, and protected project systems.
              </motion.p>

              <motion.div variants={fadeUp} className="mt-9 flex flex-col gap-3 sm:flex-row">
                <PrimaryButton href={loginUrl}>Login and start</PrimaryButton>
                <SecondaryButton href="/hire-teen-freelancers">Hire teen talent</SecondaryButton>
              </motion.div>

              <motion.div variants={fadeUp} className="mt-9 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
                {[
                  ['Guardian aware', ShieldCheck],
                  ['Verified profiles', BadgeCheck],
                  ['Payment clarity', CircleDollarSign],
                  ['AI moderation', LockKeyhole],
                ].map(([label, Icon]) => (
                  <div key={label} className="rounded-2xl border border-white/70 bg-white/55 p-4 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.06]">
                    <Icon className="h-5 w-5 text-[#073b3a] dark:text-emerald-300" />
                    <p className="mt-3 text-sm font-black">{label}</p>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 38, scale: 0.96 }} animate={{ opacity: 1, x: 0, scale: 1 }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }} className="relative">
              <div className="absolute -inset-8 rounded-[3rem] bg-[linear-gradient(135deg,rgba(91,36,94,0.20),rgba(7,59,58,0.12),rgba(199,154,75,0.14))] blur-3xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-white/60 p-3 shadow-[0_40px_120px_rgba(33,20,47,0.20)] backdrop-blur-2xl dark:border-white/10 dark:bg-white/[0.06]">
                <DashboardPreview priority />
                <motion.div
                  animate={{ x: ['-120%', '120%'] }}
                  transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', repeatDelay: 1.5 }}
                  className="pointer-events-none absolute inset-y-3 w-1/2 rotate-6 bg-gradient-to-r from-transparent via-white/45 to-transparent"
                />
              </div>
              <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }} className="absolute -bottom-7 left-7 rounded-2xl border border-white/70 bg-[#fffaf0]/90 px-5 py-4 shadow-2xl backdrop-blur-xl dark:border-white/10 dark:bg-[#160b1f]/90">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-[#8a6d32] dark:text-[#f4d58d]">Real dashboard</p>
                <p className="mt-1 text-sm font-bold">Light and dark mode ready</p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section className="px-5 py-16 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-100px' }} variants={stagger} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {platformStats.map(([value, label]) => (
                <motion.div key={label} variants={fadeUp} className="rounded-[1.5rem] border border-[#21142f]/10 bg-white/75 p-6 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.06]">
                  <p className="text-4xl font-black text-[#21142f] dark:text-white">{value}</p>
                  <p className="mt-3 text-sm font-bold leading-6 text-[#687386] dark:text-slate-400">{label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="px-5 py-20 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.22em] text-[#5b245e] dark:text-[#d8b4fe]">How it works</p>
                <h2 className="mt-4 text-4xl font-black tracking-normal sm:text-6xl">From first profile to safer first project.</h2>
              </div>
              <p className="max-w-2xl text-lg leading-8 text-[#5c5360] dark:text-slate-300">
                TeenVerseHub should feel simple the moment a user lands here. This flow explains what happens after signup for teens, guardians, and startup teams.
              </p>
            </div>
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-120px' }} variants={stagger} className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {howItWorks.map(([step, title, text, Icon]) => (
                <motion.div key={title} variants={fadeUp} className="relative overflow-hidden rounded-[1.75rem] border border-[#21142f]/10 bg-[#fffaf0]/80 p-6 shadow-sm backdrop-blur-xl transition hover:-translate-y-1 hover:shadow-2xl dark:border-white/10 dark:bg-white/[0.06]">
                  <div className="absolute right-5 top-5 text-5xl font-black text-[#21142f]/5 dark:text-white/5">{step}</div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#21142f] text-white dark:bg-white dark:text-[#21142f]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-7 text-xl font-black">{title}</h3>
                  <p className="mt-3 leading-7 text-[#5c5360] dark:text-slate-300">{text}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="bg-[#f8f5ef] px-5 py-20 dark:bg-[#0c1116] sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.22em] text-[#073b3a] dark:text-emerald-300">Why different</p>
              <h2 className="mt-4 text-4xl font-black tracking-normal sm:text-6xl">Not another generic freelance marketplace.</h2>
              <p className="mt-6 text-lg leading-8 text-[#5c5360] dark:text-slate-300">
                The strongest positioning is clear: TeenVerseHub is becoming a professional operating system for teen talent, not just a place to post gigs.
              </p>
            </div>
            <div className="overflow-hidden rounded-[2rem] border border-[#21142f]/10 bg-white shadow-sm dark:border-white/10 dark:bg-white/[0.06]">
              <div className="grid grid-cols-2 border-b border-[#21142f]/10 bg-[#21142f] px-5 py-4 text-sm font-black text-white dark:border-white/10">
                <span>Other platforms</span>
                <span>TeenVerseHub</span>
              </div>
              {comparisonRows.map(([other, teenverse]) => (
                <div key={other} className="grid grid-cols-2 gap-4 border-b border-[#21142f]/10 px-5 py-5 last:border-b-0 dark:border-white/10">
                  <p className="text-sm font-bold leading-6 text-[#687386] dark:text-slate-400">{other}</p>
                  <p className="flex gap-3 text-sm font-black leading-6 text-[#21142f] dark:text-white">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
                    {teenverse}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        

        <section className="px-5 py-20 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.22em] text-[#5b245e] dark:text-[#d8b4fe]">Platform features</p>
                <h2 className="mt-4 text-4xl font-black tracking-normal sm:text-6xl">A real product ecosystem, not just a landing page.</h2>
              </div>
              <p className="max-w-2xl text-lg leading-8 text-[#5c5360] dark:text-slate-300">
                The dashboard preview now connects to actual feature promises: portfolios, matching, safer messaging, verification, earnings, learning, and guardian clarity.
              </p>
            </div>
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-120px' }} variants={stagger} className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {platformFeatures.map(([title, text, Icon]) => (
                <motion.div key={title} variants={fadeUp} className="rounded-[1.5rem] border border-[#21142f]/10 bg-white/75 p-6 shadow-sm backdrop-blur-xl transition hover:-translate-y-1 hover:shadow-2xl dark:border-white/10 dark:bg-white/[0.06]">
                  <Icon className="h-7 w-7 text-[#5b245e] dark:text-[#d8b4fe]" />
                  <h3 className="mt-5 text-lg font-black">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#5c5360] dark:text-slate-300">{text}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="bg-[#fbfaf6] px-5 py-20 dark:bg-[#080c13] sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="sticky top-24 rounded-[2rem] border border-[#21142f]/10 bg-[#21142f] p-8 text-white shadow-[0_35px_100px_rgba(33,20,47,0.24)] dark:border-white/10">
              <ShieldCheck className="h-10 w-10 text-emerald-300" />
              <h2 className="mt-8 text-4xl font-black tracking-normal sm:text-5xl">Safety and trust are the product.</h2>
              <p className="mt-6 text-lg leading-8 text-white/75">
                For a teen marketplace, safety cannot be a small footer line. It needs to be visible, repeated, and explained for parents, clients, and young creators.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <PrimaryButton href={loginUrl}>Start safely</PrimaryButton>
                <SecondaryButton href="/guardian-guide">Guardian guide</SecondaryButton>
              </div>
            </div>
            <div className="grid gap-4">
              {safetyPillars.map(([title, text], index) => (
                <motion.div key={title} initial={{ opacity: 0, x: 28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ delay: index * 0.08, duration: 0.65, ease: [0.22, 1, 0.36, 1] }} className="rounded-[1.5rem] border border-[#21142f]/10 bg-white/80 p-6 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.06]">
                  <p className="text-sm font-black uppercase tracking-[0.18em] text-[#5b245e] dark:text-[#d8b4fe]">Trust layer {index + 1}</p>
                  <h3 className="mt-3 text-2xl font-black">{title}</h3>
                  <p className="mt-3 leading-7 text-[#5c5360] dark:text-slate-300">{text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-20 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.22em] text-[#5b245e] dark:text-[#d8b4fe]">Demand categories</p>
                <h2 className="mt-4 text-4xl font-black tracking-normal sm:text-6xl">Built around the work teens can actually start with.</h2>
              </div>
              <p className="max-w-2xl text-lg leading-8 text-[#5c5360] dark:text-slate-300">
                The site now speaks directly to search intent: teen digital skills, portfolio proof, startup hiring, safe online jobs, AI-assisted work, and guardian trust.
              </p>
            </div>

            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-120px' }} variants={stagger} className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {skills.map(([title, text, Icon]) => (
                <motion.div variants={fadeUp} key={title} className="group rounded-[1.5rem] border border-[#21142f]/10 bg-[#fffaf0]/75 p-6 shadow-sm backdrop-blur-xl transition hover:-translate-y-1 hover:shadow-2xl dark:border-white/10 dark:bg-white/[0.06]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#073b3a] text-white dark:bg-[#f8f5ef] dark:text-[#21142f]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 text-xl font-black">{title}</h3>
                  <p className="mt-3 leading-7 text-[#5c5360] dark:text-slate-300">{text}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="px-5 pb-20 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl rounded-[2rem] border border-[#21142f]/10 bg-[#fffaf0]/80 p-8 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.06] sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.22em] text-[#5b245e] dark:text-[#d8b4fe]">Opportunity categories</p>
                <h2 className="mt-4 text-3xl font-black tracking-normal sm:text-5xl">Clear starting points for teen creators.</h2>
              </div>
              <div className="flex flex-wrap gap-3">
                {opportunityCategories.map((category) => (
                  <span key={category} className="rounded-full border border-[#21142f]/10 bg-white/85 px-5 py-3 text-sm font-black text-[#21142f] shadow-sm dark:border-white/10 dark:bg-white/[0.08] dark:text-white">
                    {category}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f8f5ef] px-5 py-20 dark:bg-[#0c1116] sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-[#073b3a] dark:text-emerald-300">Connected journeys</p>
              <h2 className="mt-4 text-4xl font-black tracking-normal sm:text-6xl">Every audience gets a clear next step.</h2>
            </div>
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {routes.map((route, index) => (
                <motion.div
                  key={route.title}
                  initial={{ opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ delay: index * 0.08, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                  className="group overflow-hidden rounded-[2rem] border border-[#21142f]/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-2xl dark:border-white/10 dark:bg-white/[0.06]"
                >
                  <div className={`bg-gradient-to-br ${route.color} p-3`}>
                    <Image src={route.image} alt={`${route.title} TeenVerseHub visual`} width={1200} height={900} className="h-auto w-full rounded-[1.35rem]" />
                  </div>
                  <div className="p-7">
                    <h3 className="text-2xl font-black">{route.title}</h3>
                    <p className="mt-4 min-h-24 leading-7 text-[#5c5360] dark:text-slate-300">{route.text}</p>
                    <div className="mt-7 flex items-center justify-between gap-4">
                      <Link href={route.href} className="inline-flex items-center gap-2 text-sm font-black text-[#5b245e] dark:text-[#d8b4fe]">
                        Explore page
                        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                      </Link>
                      <a href={loginUrl} className="rounded-full bg-[#21142f] px-4 py-2 text-xs font-black text-white dark:bg-white dark:text-[#21142f]">
                        Login
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-20 sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="rounded-[2rem] border border-[#21142f]/10 bg-[#073b3a] p-8 text-white shadow-[0_35px_100px_rgba(7,59,58,0.22)] dark:border-white/10">
              <LayoutDashboard className="h-10 w-10 text-[#f4d58d]" />
              <h2 className="mt-8 text-4xl font-black tracking-normal sm:text-5xl">Professional enough for clients. Human enough for first-time earners.</h2>
              <p className="mt-6 text-lg leading-8 text-white/78">
                TeenVerseHub should not feel like a generic AI website. The new experience uses product-like screens, grounded safety language, and direct pathways that sound like real humans built them for real families and teams.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <PrimaryButton href={loginUrl}>Open login</PrimaryButton>
                <SecondaryButton href="/safety">View safety</SecondaryButton>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ['Identity', 'Verified profiles, portfolio proof, profile clarity.', Fingerprint],
                ['Trust', 'Guardian-aware onboarding and safer project rules.', ShieldCheck],
                ['Matching', 'Clear categories for creators and startup teams.', UsersRound],
                ['Growth', 'SEO pages that capture high-intent teen work searches.', TrendingUp],
              ].map(([title, text, Icon]) => (
                <div key={title} className="rounded-[1.5rem] border border-[#21142f]/10 bg-white/75 p-6 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.06]">
                  <Icon className="h-7 w-7 text-[#5b245e] dark:text-[#d8b4fe]" />
                  <h3 className="mt-5 text-xl font-black">{title}</h3>
                  <p className="mt-3 leading-7 text-[#5c5360] dark:text-slate-300">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden border-y border-[#21142f]/10 bg-[#21142f] px-5 py-20 text-white dark:border-white/10 sm:px-8 lg:px-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(216,180,254,0.18),transparent_34%),radial-gradient(circle_at_88%_40%,rgba(244,213,141,0.15),transparent_30%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.22em] text-[#f4d58d]">SEO growth pages</p>
              <h2 className="mt-4 text-4xl font-black tracking-normal sm:text-6xl">More relevant entry points for TeenVerseHub search.</h2>
              <p className="mt-6 text-lg leading-8 text-white/75">
                These pages connect search demand back to platform intent and every one includes a login path through the header and page CTA.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {seoLinks.map(([label, href]) => (
                <Link key={href} href={href} className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/8 p-5 font-black backdrop-blur-xl transition hover:bg-white/14">
                  {label}
                  <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-20 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-[#5b245e] dark:text-[#d8b4fe]">Early creator proof</p>
              <h2 className="mt-4 text-4xl font-black tracking-normal sm:text-6xl">Show the kind of teens this platform is built for.</h2>
              <p className="mt-6 text-lg leading-8 text-[#5c5360] dark:text-slate-300">
                Early TeenVerseHub creators can build portfolios in editing, AI design, writing, and frontend development. These cards keep the story honest without pretending the platform is bigger than it is.
              </p>
            </div>
            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {storyCards.map(([title, text], index) => (
                <motion.div key={title} initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ delay: index * 0.08, duration: 0.65, ease: [0.22, 1, 0.36, 1] }} className="rounded-[2rem] border border-[#21142f]/10 bg-white/75 p-7 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.06]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f4d58d]/55 text-[#8a5b09] dark:bg-white/10 dark:text-[#f4d58d]">
                    <Star className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 text-2xl font-black">{title}</h3>
                  <p className="mt-4 leading-7 text-[#5c5360] dark:text-slate-300">{text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#f8f5ef] px-5 py-20 dark:bg-[#0c1116] sm:px-8 lg:px-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(91,36,94,0.12),transparent_32%),radial-gradient(circle_at_86%_50%,rgba(7,59,58,0.12),transparent_32%)] dark:bg-[radial-gradient(circle_at_15%_20%,rgba(168,85,247,0.14),transparent_32%),radial-gradient(circle_at_86%_50%,rgba(45,212,191,0.10),transparent_32%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="rounded-[2rem] border border-[#21142f]/10 bg-white/80 p-8 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.06] sm:p-10">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-[#073b3a] dark:text-emerald-300">Founder mission</p>
              <h2 className="mt-4 text-4xl font-black tracking-normal sm:text-6xl">Why TeenVerseHub exists.</h2>
              <p className="mt-6 text-lg leading-8 text-[#5c5360] dark:text-slate-300">
                Teenagers already have talent, but the internet does not always give them credibility, structure, or safety. TeenVerseHub exists to help young creators prove their skills, find guided opportunities, and work in a system that parents and startups can understand.
              </p>
              <p className="mt-5 text-lg leading-8 text-[#5c5360] dark:text-slate-300">
                The mission is simple: make teen talent visible, trusted, and ready for real-world work without forcing beginners into unsafe or confusing marketplaces.
              </p>
            </div>
            <div className="rounded-[2rem] border border-[#21142f]/10 bg-[#21142f] p-8 text-white shadow-[0_35px_100px_rgba(33,20,47,0.22)] dark:border-white/10 sm:p-10">
              <Rocket className="h-10 w-10 text-[#f4d58d]" />
              <h3 className="mt-7 text-3xl font-black sm:text-5xl">Coming soon roadmap</h3>
              <div className="mt-8 grid gap-4">
                {roadmapItems.map(([title, text]) => (
                  <div key={title} className="rounded-2xl border border-white/10 bg-white/8 p-5 backdrop-blur-xl">
                    <p className="font-black">{title}</p>
                    <p className="mt-2 text-sm leading-6 text-white/68">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 py-20 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-[#21142f]/10 bg-[#fffaf0] p-8 shadow-[0_40px_120px_rgba(91,36,94,0.14)] dark:border-white/10 dark:bg-white/[0.06] sm:p-12 lg:p-16">
            <div className="grid gap-10 lg:grid-cols-[1fr_0.7fr] lg:items-center">
              <div>
                <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#f4d58d]/35 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#5b245e] dark:bg-white/10 dark:text-[#f4d58d]">
                  <Star className="h-4 w-4" />
                  Ready for launch
                </div>
                <h2 className="text-4xl font-black tracking-normal sm:text-6xl">Start with one profile, one skill, one safe project.</h2>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5c5360] dark:text-slate-300">
                  The product story is sharper now: teen talent can earn credibility, clients can hire responsibly, and guardians can understand the trust system before anyone moves forward.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <PrimaryButton href={loginUrl}>Go to login</PrimaryButton>
                <SecondaryButton href="/how-to-earn-money-as-a-teenager">Read earning guide</SecondaryButton>
              </div>
            </div>
          </div>
        </section>
      </div>
    </MarketingShell>
  )
}
