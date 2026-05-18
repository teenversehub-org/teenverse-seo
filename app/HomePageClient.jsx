'use client'

import { useState, useEffect } from 'react'
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
  X
} from 'lucide-react'
import { motion, useReducedMotion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { useRef } from 'react'

import MarketingShell from './components/MarketingShell'
import { SITE } from './lib/site'

const loginUrl = SITE.appUrl

// ─── Responsive animation helpers ───────────────────────────────────────────

function useFadeUp(yDistance = 28) {
  const prefersReduced = useReducedMotion()
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // This only runs on the client *after* initial hydration
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    
    checkMobile() // Set initial client state
    
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  if (prefersReduced) {
    return {
      hidden: { opacity: 0 },
      show: { opacity: 1, transition: { duration: 0.4 } },
    }
  }

  // During SSR and the very first client render, `isMobile` is false.
  // This guarantees the server HTML matches the client HTML.
  // Immediately after hydration, it updates to true on mobile devices.
  const y = isMobile ? yDistance * 0.55 : yDistance
  const blur = isMobile ? 0 : 10

  return {
    hidden: { opacity: 0, y, filter: `blur(${blur}px)` },
    show: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] },
    },
  }
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.08 } },
}

const staggerFast = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
}

// ─── Data ────────────────────────────────────────────────────────────────────

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

// ─── Shared button components ────────────────────────────────────────────────

function PrimaryButton({ href, children }) {
  return (
    <a
      href={href}
      className="group inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-[#21142f] px-8 py-3 text-base font-black text-white shadow-[0_18px_55px_rgba(33,20,47,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#321747] hover:shadow-[0_24px_65px_rgba(33,20,47,0.30)] active:scale-[0.97] dark:bg-[#f8f5ef] dark:text-[#21142f] sm:h-16 sm:flex-1"
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
    </a>
  )
}

function SecondaryButton({ href, children }) {
  return (
    <Link
      href={href}
      className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full border border-[#21142f]/10 bg-white/70 px-8 py-3 text-base font-black text-[#21142f] shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-[#21142f]/20 hover:bg-white active:scale-[0.97] dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/15 sm:h-16 sm:flex-1"
    >
      {children}
    </Link>
  )
}

// ─── Dashboard preview ────────────────────────────────────────────────────────

function DashboardPreview({ priority = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 34, rotate: -2, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto w-full max-w-[170px] min-[390px]:max-w-[190px] sm:max-w-[280px] lg:max-w-[340px] xl:max-w-[380px]"
    >
      <div className="absolute -inset-3 rounded-[2rem] bg-[radial-gradient(circle_at_30%_10%,rgba(168,85,247,0.20),transparent_38%),radial-gradient(circle_at_80%_70%,rgba(16,185,129,0.14),transparent_38%)] blur-xl dark:bg-[radial-gradient(circle_at_30%_10%,rgba(168,85,247,0.24),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(45,212,191,0.14),transparent_42%)] sm:-inset-8 sm:rounded-[3rem] sm:blur-3xl" />

      <motion.div
        animate={{ y: [0, -12, 0], rotate: [0, -1.3, 0] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
        className="relative overflow-hidden rounded-[1.55rem] border border-slate-200 bg-white p-1.5 shadow-[0_28px_80px_rgba(33,20,47,0.20)] dark:border-slate-800 dark:bg-[#0b1118] dark:shadow-[0_28px_90px_rgba(0,0,0,0.38)] sm:rounded-[2.2rem] sm:p-2"
      >
        <Image
          src="/graphics/dashboard-light.png"
          alt="TeenVerseHub light mode dashboard"
          width={797}
          height={1536}
          priority={priority}
          className="block h-auto w-full rounded-[1.2rem] dark:hidden sm:rounded-[1.75rem]"
        />
        <Image
          src="/graphics/dashboard-dark.png"
          alt="TeenVerseHub dark mode dashboard"
          width={797}
          height={1536}
          priority={priority}
          className="hidden h-auto w-full rounded-[1.2rem] dark:block sm:rounded-[1.75rem]"
        />
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
        className="absolute -bottom-3 -left-3 rounded-lg border border-emerald-200 bg-emerald-50 px-2.5 py-1.5 shadow-2xl dark:border-emerald-900 dark:bg-[#061d1b] sm:-bottom-5 sm:-left-2 sm:rounded-2xl sm:px-4 sm:py-3"
      >
        <p className="text-[8px] font-black uppercase tracking-[0.16em] text-emerald-700 dark:text-emerald-400 sm:text-[10px] sm:tracking-[0.2em]">Verified</p>
        <p className="mt-0.5 text-[10px] font-black text-[#101827] dark:text-white sm:mt-1 sm:text-sm">Identity secured</p>
      </motion.div>

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5.4, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
        className="absolute -right-3 top-8 rounded-lg border border-violet-200 bg-white px-2.5 py-1.5 shadow-2xl dark:border-violet-900 dark:bg-[#130f2a] sm:-right-3 sm:top-16 sm:rounded-2xl sm:px-4 sm:py-3"
      >
        <p className="text-[8px] font-black uppercase tracking-[0.16em] text-violet-600 dark:text-violet-400 sm:text-[10px] sm:tracking-[0.2em]">Energy</p>
        <p className="mt-0.5 text-[10px] font-black text-[#101827] dark:text-white sm:mt-1 sm:text-sm">277 points</p>
      </motion.div>
    </motion.div>
  )
}

// ─── Stat card ────────────────────────────────────────────────────────────────

function StatCard({ value, label }) {
  const fadeUp = useFadeUp()
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -4, transition: { duration: 0.25, ease: 'easeOut' } }}
      className="rounded-[1.5rem] border border-[#21142f]/10 bg-white/75 p-6 shadow-sm backdrop-blur-xl transition-shadow duration-300 hover:shadow-md dark:border-white/10 dark:bg-slate-800/50"
    >
      <p className="text-4xl font-black text-[#21142f] dark:text-white">{value}</p>
      <p className="mt-3 text-sm font-bold leading-6 text-[#687386] dark:text-slate-300">{label}</p>
    </motion.div>
  )
}

// ─── Feature card ─────────────────────────────────────────────────────────────

function FeatureCard({ title, text, Icon }) {
  const fadeUp = useFadeUp()
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -6, transition: { duration: 0.25, ease: 'easeOut' } }}
      className="group rounded-[1.5rem] border border-[#21142f]/10 bg-white/75 p-6 shadow-sm backdrop-blur-xl transition-shadow duration-300 hover:shadow-xl dark:border-white/10 dark:bg-slate-800/50"
    >
      <motion.div
        whileHover={{ scale: 1.08 }}
        transition={{ duration: 0.2 }}
        className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#21142f] text-white dark:bg-white dark:text-[#21142f]"
      >
        <Icon className="h-6 w-6" />
      </motion.div>
      <h3 className="mt-5 text-lg font-black text-[#21142f] dark:text-white">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-[#5c5360] dark:text-slate-300">{text}</p>
    </motion.div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function HomePage() {
  const [showPopup, setShowPopup] = useState(false)
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const heroBgY = useTransform(scrollYProgress, [0, 1], ['0%', '12%'])

  const fadeUp = useFadeUp()

  // Trigger popup after a delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true)
    }, 2500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <MarketingShell>
      <div className="overflow-x-clip overflow-y-visible bg-[radial-gradient(circle_at_top_left,#f2e8ff_0%,transparent_35%),linear-gradient(135deg,#fffaf0_0%,#f7f1df_45%,#eef4e8_100%)] text-[#21142f] dark:bg-[radial-gradient(circle_at_top_left,#2b1646_0%,transparent_38%),linear-gradient(135deg,#11091f_0%,#071018_55%,#07130f_100%)] dark:text-white">

        {/* ═══════════════════ POPUP CTA (Right side) ═══════════════════ */}
        <AnimatePresence>
          {showPopup && (
            <motion.div
              initial={{ opacity: 0, x: 60, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              exit={{ opacity: 0, x: 60, y: 20 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="fixed bottom-5 right-5 z-50 hidden w-[calc(100vw-3rem)] max-w-[320px] rounded-[1.75rem] border border-[#21142f]/10 bg-white p-6 shadow-[0_20px_60px_rgba(33,20,47,0.15)] dark:border-white/10 dark:bg-slate-900 sm:block"
            >
              <button
                onClick={() => setShowPopup(false)}
                aria-label="Close"
                className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition-colors hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-[#f4d58d]/35 px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-[#5b245e] dark:bg-amber-900/40 dark:text-[#f4d58d]">
                <Star className="h-3 w-3" />
                Ready for launch
              </div>

              <h3 className="text-[1.35rem] font-black leading-tight text-[#21142f] dark:text-white">Start with one profile, one skill.</h3>
              <p className="mt-2 text-sm leading-6 text-[#5c5360] dark:text-slate-300">
                Build proof and safely earn credibility online without the noise.
              </p>

              <div className="mt-6 flex flex-col gap-2.5">
                <a
                  href={loginUrl}
                  className="group inline-flex w-full min-h-11 items-center justify-center gap-2 rounded-full bg-[#21142f] px-5 py-2 text-sm font-black text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#321747] dark:bg-white dark:text-[#21142f]"
                >
                  Go to login
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <Link
                  href="/how-to-earn-money-as-a-teenager"
                  className="inline-flex w-full min-h-11 items-center justify-center gap-2 rounded-full border border-[#21142f]/15 bg-transparent px-5 py-2 text-[13px] font-bold text-[#21142f] transition hover:bg-slate-50 dark:border-white/15 dark:text-white dark:hover:bg-slate-800"
                >
                  Read earning guide
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ═══════════════════ HERO ═══════════════════ */}
        <section
          ref={heroRef}
          className="relative isolate overflow-visible px-5 pb-14 pt-28 sm:px-6 sm:pb-16 sm:pt-32 lg:min-h-[calc(100vh-2rem)] lg:overflow-hidden lg:px-8"
        >
          {/* Parallax bg */}
          <motion.div
            style={{ y: heroBgY }}
            className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,#f2e8ff_0%,transparent_35%),linear-gradient(135deg,#fffaf0_0%,#f7f1df_45%,#eef4e8_100%)] dark:bg-[radial-gradient(circle_at_top_left,#2b1646_0%,transparent_38%),linear-gradient(135deg,#11091f_0%,#071018_55%,#07130f_100%)]"
          />
          <div className="tv-grid-mesh pointer-events-none absolute inset-0 -z-10 opacity-70" />

          {/* Floating orbs */}
          <motion.div
            aria-hidden
            animate={{ y: [0, -18, 0], rotate: [0, 4, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute left-[6%] top-28 h-14 w-14 rounded-[20px] border border-white/70 bg-[#fffaf0]/70 shadow-2xl shadow-[#5b245e]/10 backdrop-blur-xl dark:border-white/10 dark:bg-white/10 sm:h-20 sm:w-20 sm:rounded-[28px]"
          />
          <motion.div
            aria-hidden
            animate={{ y: [0, 22, 0], rotate: [0, -6, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
            className="absolute bottom-20 right-[8%] h-20 w-20 rounded-full border border-white/60 bg-[#073b3a]/10 shadow-2xl backdrop-blur-xl dark:bg-[#d8b4fe]/10 sm:h-28 sm:w-28"
          />
          <motion.div
            aria-hidden
            animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
            className="absolute right-[28%] top-1/2 hidden h-10 w-10 rounded-full border border-[#f4d58d]/50 bg-[#f4d58d]/20 backdrop-blur-xl lg:block"
          />

          {/* Grid: copy + mockup */}
          <div className="mx-auto grid w-full max-w-7xl items-center gap-10 text-left lg:grid-cols-[0.98fr_0.78fr] lg:gap-14">

            {/* LEFT: copy */}
            <motion.div
              initial="hidden"
              animate="show"
              variants={stagger}
              className="max-w-4xl"
            >
              {/* Badge */}
              <motion.div
                variants={fadeUp}
                className="mb-8 inline-flex w-fit max-w-full items-center gap-3 rounded-full border border-[#21142f]/10 bg-white/70 px-5 py-3 text-[10px] font-black uppercase tracking-[0.18em] text-[#5b245e] shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/10 dark:text-white/80 sm:px-6 sm:text-xs sm:tracking-[0.24em]"
              >
                <Sparkles className="h-5 w-5 shrink-0" />
                Teens #1 choice for safer online work
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="tvh-home-title max-w-5xl text-left text-[2.8rem] font-black leading-[0.98] tracking-[-0.035em] text-[#21142f] min-[390px]:text-[3.05rem] sm:text-6xl md:text-7xl lg:text-8xl dark:text-white"
              >
                <span className="block">TeenVerseHub</span>
                <span className="tvh-home-title-gradient block bg-[linear-gradient(120deg,#5b245e_0%,#1f2937_45%,#c79a4b_100%)] bg-clip-text text-transparent dark:bg-[linear-gradient(120deg,#ffffff_0%,#d8b4fe_45%,#6ee7b7_100%)] dark:bg-clip-text">
                  makes teen talent
                </span>
                <span className="tvh-home-title-gradient block bg-[linear-gradient(120deg,#5b245e_0%,#073b3a_45%,#c79a4b_100%)] bg-clip-text text-transparent dark:bg-[linear-gradient(120deg,#c7d2fe_0%,#a7f3d0_100%)] dark:bg-clip-text">
                  feel credible.
                </span>
              </motion.h1>

              {/* Body */}
              <motion.p
                variants={fadeUp}
                className="mt-7 max-w-2xl text-left text-lg leading-8 text-[#5f5363] dark:text-slate-300 sm:text-xl sm:leading-9"
              >
                A safer platform where talented teenagers can build real portfolios, work with startups, and earn credibility online—with verification, guardian-aware flows, and protected project systems.
              </motion.p>

              {/* CTAs */}
              <motion.div
                variants={fadeUp}
                className="mt-10 flex w-full flex-col gap-4 sm:max-w-xl sm:flex-row"
              >
                {/* LOGIN BUTTON #1 */}
                <PrimaryButton href={loginUrl}>Login and start</PrimaryButton>
                <SecondaryButton href="/hire-teen-freelancers">Hire teen talent</SecondaryButton>
              </motion.div>

              {/* Trust chips */}
              <motion.div
                variants={staggerFast}
                initial="hidden"
                animate="show"
                className="mt-12 grid gap-4 sm:grid-cols-2 lg:max-w-3xl"
              >
                {[
                  ['Guardian aware', ShieldCheck],
                  ['Verified profiles', BadgeCheck],
                  ['Payment clarity', CircleDollarSign],
                  ['AI moderation', LockKeyhole],
                ].map(([label, Icon]) => (
                  <motion.div
                    key={label}
                    variants={fadeUp}
                    whileHover={{ y: -3, scale: 1.02, transition: { duration: 0.2 } }}
                    className="flex items-center gap-4 rounded-3xl border border-[#21142f]/10 bg-white/65 px-5 py-5 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/[0.06]"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-500/10">
                      <Icon className="h-6 w-6 text-emerald-500" />
                    </div>
                    <p className="text-base font-black text-[#21142f] dark:text-white">{label}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* RIGHT: mockup */}
            <motion.div
              initial={{ opacity: 0, x: 38, scale: 0.96 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="relative mx-auto w-full max-w-[230px] min-[390px]:max-w-[250px] sm:max-w-md lg:max-w-none"
            >
              <div className="absolute -inset-3 rounded-[2rem] bg-[linear-gradient(135deg,rgba(91,36,94,0.13),rgba(7,59,58,0.08),rgba(199,154,75,0.10))] blur-xl sm:-inset-8 sm:rounded-[3rem] sm:blur-3xl" />
              <div className="relative overflow-visible rounded-[1.35rem] border border-slate-200 bg-white p-1.5 shadow-[0_22px_70px_rgba(33,20,47,0.14)] dark:border-slate-800 dark:bg-[#0b1118] sm:rounded-[2rem] sm:p-3 lg:overflow-hidden">
                <DashboardPreview priority />
              </div>

              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-4 left-1/2 w-max -translate-x-1/2 rounded-lg border border-slate-200 bg-white px-3 py-2 shadow-2xl dark:border-slate-700 dark:bg-[#160b1f] sm:-bottom-7 sm:left-7 sm:translate-x-0 sm:rounded-2xl sm:px-5 sm:py-4"
              >
                <p className="text-[9px] font-black uppercase tracking-[0.16em] text-[#8a6d32] dark:text-[#f4d58d] sm:text-xs sm:tracking-[0.2em]">Real dashboard</p>
                <p className="mt-0.5 text-xs font-bold text-slate-800 dark:text-slate-200 sm:mt-1 sm:text-sm">Light and dark mode ready</p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ═══════════════════ STATS ═══════════════════ */}
        <section className="px-5 py-16 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-100px' }}
              variants={stagger}
              className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
            >
              {platformStats.map(([value, label]) => (
                <StatCard key={label} value={value} label={label} />
              ))}
            </motion.div>
          </div>
        </section>

        {/* ═══════════════════ HOW IT WORKS ═══════════════════ */}
        <section className="px-5 py-20 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.22em] text-[#5b245e] dark:text-[#d8b4fe]">How it works</p>
                <h2 className="mt-4 text-4xl font-black tracking-normal text-[#21142f] dark:text-white sm:text-6xl">From first profile to safer first project.</h2>
              </div>
              <p className="max-w-2xl text-lg leading-8 text-[#5c5360] dark:text-slate-300">
                TeenVerseHub should feel simple the moment a user lands here. This flow explains what happens after signup for teens, guardians, and startup teams.
              </p>
            </div>
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-120px' }}
              variants={stagger}
              className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4"
            >
              {howItWorks.map(([step, title, text, Icon]) => (
                <motion.div
                  key={title}
                  variants={fadeUp}
                  whileHover={{ y: -6, transition: { duration: 0.25, ease: 'easeOut' } }}
                  className="relative overflow-hidden rounded-[1.75rem] border border-[#21142f]/10 bg-[#fffaf0]/80 p-6 shadow-sm backdrop-blur-xl transition-shadow duration-300 hover:shadow-2xl dark:border-white/10 dark:bg-slate-800/50"
                >
                  <div className="absolute right-5 top-5 select-none text-5xl font-black text-[#21142f]/5 dark:text-white/5">{step}</div>
                  <motion.div
                    whileHover={{ rotate: 8, scale: 1.1, transition: { duration: 0.2 } }}
                    className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#21142f] text-white dark:bg-white dark:text-[#21142f]"
                  >
                    <Icon className="h-6 w-6" />
                  </motion.div>
                  <h3 className="mt-7 text-xl font-black text-[#21142f] dark:text-white">{title}</h3>
                  <p className="mt-3 leading-7 text-[#5c5360] dark:text-slate-300">{text}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ═══════════════════ COMPARISON ═══════════════════ */}
        <section className="bg-[#f8f5ef] px-5 py-20 dark:bg-[#0c1116] sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.22em] text-[#073b3a] dark:text-emerald-400">Why different</p>
              <h2 className="mt-4 text-4xl font-black tracking-normal text-[#21142f] dark:text-white sm:text-6xl">Not another generic freelance marketplace.</h2>
              <p className="mt-6 text-lg leading-8 text-[#5c5360] dark:text-slate-300">
                The strongest positioning is clear: TeenVerseHub is becoming a professional operating system for teen talent, not just a place to post gigs.
              </p>
            </div>
            <div className="overflow-hidden rounded-[2rem] border border-[#21142f]/10 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <div className="grid grid-cols-2 border-b border-[#21142f]/10 bg-[#21142f] px-5 py-4 text-sm font-black text-white dark:border-slate-800 dark:bg-slate-950">
                <span>Other platforms</span>
                <span>TeenVerseHub</span>
              </div>
              {comparisonRows.map(([other, teenverse], i) => (
                <motion.div
                  key={other}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ delay: i * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="grid grid-cols-2 gap-4 border-b border-[#21142f]/10 px-5 py-5 last:border-b-0 dark:border-slate-800"
                >
                  <p className="text-sm font-bold leading-6 text-[#687386] dark:text-slate-400">{other}</p>
                  <p className="flex gap-3 text-sm font-black leading-6 text-[#21142f] dark:text-slate-100">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
                    {teenverse}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════ PLATFORM FEATURES ═══════════════════ */}
        <section className="px-5 py-20 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.22em] text-[#5b245e] dark:text-[#d8b4fe]">Platform features</p>
                <h2 className="mt-4 text-4xl font-black tracking-normal text-[#21142f] dark:text-white sm:text-6xl">A real product ecosystem, not just a landing page.</h2>
              </div>
              <p className="max-w-2xl text-lg leading-8 text-[#5c5360] dark:text-slate-300">
                The dashboard preview now connects to actual feature promises: portfolios, matching, safer messaging, verification, earnings, learning, and guardian clarity.
              </p>
            </div>
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-120px' }}
              variants={stagger}
              className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4"
            >
              {platformFeatures.map(([title, text, Icon]) => (
                <FeatureCard key={title} title={title} text={text} Icon={Icon} />
              ))}
            </motion.div>
          </div>
        </section>

        {/* ═══════════════════ SAFETY ═══════════════════ */}
        <section className="bg-[#fbfaf6] px-5 py-20 dark:bg-[#080c13] sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="sticky top-24 rounded-[2rem] border border-[#21142f]/10 bg-[#21142f] p-8 text-white shadow-[0_35px_100px_rgba(33,20,47,0.24)] dark:border-slate-800 dark:bg-slate-900">
              <motion.div
                animate={{ rotate: [0, 6, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', repeatDelay: 3 }}
              >
                <ShieldCheck className="h-10 w-10 text-emerald-400" />
              </motion.div>
              <h2 className="mt-8 text-4xl font-black tracking-normal text-white sm:text-5xl">Safety and trust are the product.</h2>
              <p className="mt-6 text-lg leading-8 text-white/80 dark:text-slate-300">
                For a teen marketplace, safety cannot be a small footer line. It needs to be visible, repeated, and explained for parents, clients, and young creators.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <PrimaryButton href="/guardian-guide">Read Guardian Guide</PrimaryButton>
              </div>
            </div>
            <div className="grid gap-4">
              {safetyPillars.map(([title, text], index) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, x: 28 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ delay: index * 0.08, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ x: 4, transition: { duration: 0.2 } }}
                  className="rounded-[1.5rem] border border-[#21142f]/10 bg-white/80 p-6 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-slate-800/50"
                >
                  <p className="text-sm font-black uppercase tracking-[0.18em] text-[#5b245e] dark:text-[#d8b4fe]">Trust layer {index + 1}</p>
                  <h3 className="mt-3 text-2xl font-black text-[#21142f] dark:text-white">{title}</h3>
                  <p className="mt-3 leading-7 text-[#5c5360] dark:text-slate-300">{text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════ SKILLS / DEMAND ═══════════════════ */}
        <section className="px-5 py-20 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.22em] text-[#5b245e] dark:text-[#d8b4fe]">Demand categories</p>
                <h2 className="mt-4 text-4xl font-black tracking-normal text-[#21142f] dark:text-white sm:text-6xl">Built around the work teens can actually start with.</h2>
              </div>
              <p className="max-w-2xl text-lg leading-8 text-[#5c5360] dark:text-slate-300">
                The site now speaks directly to search intent: teen digital skills, portfolio proof, startup hiring, safe online jobs, AI-assisted work, and guardian trust.
              </p>
            </div>
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-120px' }}
              variants={stagger}
              className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4"
            >
              {skills.map(([title, text, Icon]) => (
                <motion.div
                  variants={fadeUp}
                  key={title}
                  whileHover={{ y: -6, transition: { duration: 0.25, ease: 'easeOut' } }}
                  className="group rounded-[1.5rem] border border-[#21142f]/10 bg-[#fffaf0]/75 p-6 shadow-sm backdrop-blur-xl transition-shadow duration-300 hover:shadow-xl dark:border-white/10 dark:bg-slate-800/50"
                >
                  <motion.div
                    whileHover={{ rotate: -8, scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                    className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#073b3a] text-white dark:bg-emerald-100 dark:text-emerald-950"
                  >
                    <Icon className="h-6 w-6" />
                  </motion.div>
                  <h3 className="mt-6 text-xl font-black text-[#21142f] dark:text-white">{title}</h3>
                  <p className="mt-3 leading-7 text-[#5c5360] dark:text-slate-300">{text}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ═══════════════════ OPPORTUNITY TAGS ═══════════════════ */}
        <section className="px-5 pb-20 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-[#21142f]/10 bg-[#fffaf0]/80 p-8 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-slate-800/50 sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.22em] text-[#5b245e] dark:text-[#d8b4fe]">Opportunity categories</p>
                <h2 className="mt-4 text-3xl font-black tracking-normal text-[#21142f] dark:text-white sm:text-5xl">Clear starting points for teen creators.</h2>
              </div>
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={staggerFast}
                className="flex flex-wrap gap-3"
              >
                {opportunityCategories.map((category, i) => (
                  <motion.span
                    key={category}
                    variants={{
                      hidden: { opacity: 0, scale: 0.88 },
                      show: { opacity: 1, scale: 1, transition: { delay: i * 0.05, duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
                    }}
                    whileHover={{ scale: 1.06, y: -2, transition: { duration: 0.18 } }}
                    className="cursor-default rounded-full border border-[#21142f]/10 bg-white/85 px-5 py-3 text-sm font-black text-[#21142f] shadow-sm dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
                  >
                    {category}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ═══════════════════ ROUTES ═══════════════════ */}
        <section className="bg-[#f8f5ef] px-5 py-20 dark:bg-[#0c1116] sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-[#073b3a] dark:text-emerald-400">Connected journeys</p>
              <h2 className="mt-4 text-4xl font-black tracking-normal text-[#21142f] dark:text-white sm:text-6xl">Every audience gets a clear next step.</h2>
            </div>
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {routes.map((route, index) => (
                <motion.div
                  key={route.title}
                  initial={{ opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ delay: index * 0.08, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -6, transition: { duration: 0.25, ease: 'easeOut' } }}
                  className="group overflow-hidden rounded-[2rem] border border-[#21142f]/10 bg-white shadow-sm transition-shadow duration-300 hover:shadow-2xl dark:border-slate-800 dark:bg-slate-900"
                >
                  <div className={`bg-gradient-to-br ${route.color} p-3`}>
                    <Image src={route.image} alt={`${route.title} TeenVerseHub visual`} width={1200} height={900} className="h-auto w-full rounded-[1.35rem]" />
                  </div>
                  <div className="p-7">
                    <h3 className="text-2xl font-black text-[#21142f] dark:text-white">{route.title}</h3>
                    <p className="mt-4 min-h-24 leading-7 text-[#5c5360] dark:text-slate-300">{route.text}</p>
                    <div className="mt-7 flex items-center justify-between gap-4">
                      <Link href={route.href} className="inline-flex items-center gap-2 text-sm font-black text-[#5b245e] dark:text-[#d8b4fe]">
                        Explore page
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════ BRAND IDENTITY ═══════════════════ */}
        <section className="px-5 py-20 sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="rounded-[2rem] border border-[#21142f]/10 bg-[#073b3a] p-8 text-white shadow-[0_35px_100px_rgba(7,59,58,0.22)] dark:border-slate-800 dark:bg-slate-900">
              <LayoutDashboard className="h-10 w-10 text-[#f4d58d]" />
              <h2 className="mt-8 text-4xl font-black tracking-normal text-white sm:text-5xl">Professional enough for clients. Human enough for first-time earners.</h2>
              <p className="mt-6 text-lg leading-8 text-white/80 dark:text-slate-300">
                TeenVerseHub should not feel like a generic AI website. The new experience uses product-like screens, grounded safety language, and direct pathways that sound like real humans built them for real families and teams.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <PrimaryButton href="/safety">View safety features</PrimaryButton>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ['Identity', 'Verified profiles, portfolio proof, profile clarity.', Fingerprint],
                ['Trust', 'Guardian-aware onboarding and safer project rules.', ShieldCheck],
                ['Matching', 'Clear categories for creators and startup teams.', UsersRound],
                ['Growth', 'SEO pages that capture high-intent teen work searches.', TrendingUp],
              ].map(([title, text, Icon], i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="rounded-[1.5rem] border border-[#21142f]/10 bg-white/75 p-6 shadow-sm backdrop-blur-xl transition-shadow duration-300 hover:shadow-lg dark:border-white/10 dark:bg-slate-800/50"
                >
                  <Icon className="h-7 w-7 text-[#5b245e] dark:text-[#d8b4fe]" />
                  <h3 className="mt-5 text-xl font-black text-[#21142f] dark:text-white">{title}</h3>
                  <p className="mt-3 leading-7 text-[#5c5360] dark:text-slate-300">{text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════ SEO LINKS ═══════════════════ */}
        <section className="relative overflow-hidden border-y border-[#21142f]/10 bg-[#21142f] px-5 py-20 text-white dark:border-slate-800 dark:bg-slate-950 sm:px-8 lg:px-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(216,180,254,0.18),transparent_34%),radial-gradient(circle_at_88%_40%,rgba(244,213,141,0.15),transparent_30%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.22em] text-[#f4d58d]">SEO growth pages</p>
              <h2 className="mt-4 text-4xl font-black tracking-normal text-white sm:text-6xl">More relevant entry points for TeenVerseHub search.</h2>
              <p className="mt-6 text-lg leading-8 text-white/80 dark:text-slate-300">
                These pages connect search demand back to platform intent and every one includes a login path through the header and page CTA.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {seoLinks.map(([label, href], i) => (
                <motion.div
                  key={href}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    href={href}
                    className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/10 p-5 font-black text-white backdrop-blur-xl transition-all duration-200 hover:border-white/20 hover:bg-white/15 active:scale-[0.98] dark:border-slate-700 dark:bg-slate-800"
                  >
                    {label}
                    <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════ STORY CARDS ═══════════════════ */}
        <section className="px-5 py-20 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-[#5b245e] dark:text-[#d8b4fe]">Early creator proof</p>
              <h2 className="mt-4 text-4xl font-black tracking-normal text-[#21142f] dark:text-white sm:text-6xl">Show the kind of teens this platform is built for.</h2>
              <p className="mt-6 text-lg leading-8 text-[#5c5360] dark:text-slate-300">
                Early TeenVerseHub creators can build portfolios in editing, AI design, writing, and frontend development. These cards keep the story honest without pretending the platform is bigger than it is.
              </p>
            </div>
            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {storyCards.map(([title, text], index) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ delay: index * 0.08, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -5, transition: { duration: 0.22 } }}
                  className="rounded-[2rem] border border-[#21142f]/10 bg-white/75 p-7 shadow-sm backdrop-blur-xl transition-shadow duration-300 hover:shadow-xl dark:border-white/10 dark:bg-slate-800/50"
                >
                  <motion.div
                    whileHover={{ rotate: 12, scale: 1.12 }}
                    transition={{ duration: 0.2 }}
                    className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f4d58d]/55 text-[#8a5b09] dark:bg-amber-900/40 dark:text-[#f4d58d]"
                  >
                    <Star className="h-6 w-6" />
                  </motion.div>
                  <h3 className="mt-6 text-2xl font-black text-[#21142f] dark:text-white">{title}</h3>
                  <p className="mt-4 leading-7 text-[#5c5360] dark:text-slate-300">{text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════ MISSION + ROADMAP ═══════════════════ */}
        <section className="relative overflow-hidden bg-[#f8f5ef] px-5 py-20 dark:bg-[#0c1116] sm:px-8 lg:px-12 pb-32">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(91,36,94,0.12),transparent_32%),radial-gradient(circle_at_86%_50%,rgba(7,59,58,0.12),transparent_32%)] dark:bg-[radial-gradient(circle_at_15%_20%,rgba(168,85,247,0.14),transparent_32%),radial-gradient(circle_at_86%_50%,rgba(45,212,191,0.10),transparent_32%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="rounded-[2rem] border border-[#21142f]/10 bg-white/80 p-8 shadow-sm backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/80 sm:p-10">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-[#073b3a] dark:text-emerald-400">Founder mission</p>
              <h2 className="mt-4 text-4xl font-black tracking-normal text-[#21142f] dark:text-white sm:text-6xl">Why TeenVerseHub exists.</h2>
              <p className="mt-6 text-lg leading-8 text-[#5c5360] dark:text-slate-300">
                Teenagers already have talent, but the internet does not always give them credibility, structure, or safety. TeenVerseHub exists to help young creators prove their skills, find guided opportunities, and work in a system that parents and startups can understand.
              </p>
              <p className="mt-5 text-lg leading-8 text-[#5c5360] dark:text-slate-300">
                The mission is simple: make teen talent visible, trusted, and ready for real-world work without forcing beginners into unsafe or confusing marketplaces.
              </p>
            </div>
            <div className="rounded-[2rem] border border-[#21142f]/10 bg-[#21142f] p-8 text-white shadow-[0_35px_100px_rgba(33,20,47,0.22)] dark:border-slate-800 dark:bg-slate-950 sm:p-10">
              <Rocket className="h-10 w-10 text-[#f4d58d]" />
              <h3 className="mt-7 text-3xl font-black text-white sm:text-5xl">Coming soon roadmap</h3>
              <div className="mt-8 grid gap-4">
                {roadmapItems.map(([title, text], i) => (
                  <motion.div
                    key={title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-xl transition-colors duration-200 hover:bg-white/[0.14] dark:border-slate-800 dark:bg-slate-900"
                  >
                    <p className="font-black text-white">{title}</p>
                    <p className="mt-2 text-sm leading-6 text-white/80 dark:text-slate-400">{text}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

      </div>
    </MarketingShell>
  )
}
