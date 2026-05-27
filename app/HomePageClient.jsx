'use client'

import { useState, useEffect, useSyncExternalStore } from 'react'
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

// ─── Precision Responsive Animation Helpers ──────────────────────────────────

function subscribeViewport(callback) {
  window.addEventListener('resize', callback)
  return () => window.removeEventListener('resize', callback)
}

function getViewportIsMobile() {
  return window.innerWidth < 768
}

function useFadeUp(yDistance = 16) {
  const prefersReduced = useReducedMotion()
  const isMobile = useSyncExternalStore(subscribeViewport, getViewportIsMobile, () => false)

  if (prefersReduced) {
    return {
      hidden: { opacity: 0 },
      show: { opacity: 1, transition: { duration: 0.25 } },
    }
  }

  const y = isMobile ? yDistance * 0.5 : yDistance

  return {
    hidden: { opacity: 0, y },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.19, 1, 0.22, 1] },
    },
  }
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.02 } },
}

// ─── Data Arrays ─────────────────────────────────────────────────────────────

const skills = [
  ['Video editing', 'Shorts, reels, and creator clips', Play],
  ['AI-assisted design', 'Thumbnails, posts, and pitch visuals', WandSparkles],
  ['Frontend development', 'Landing pages and simple websites', Code2],
  ['Content writing', 'Blogs, captions, scripts, and SEO drafts', MessageSquareText],
]

const routes = [
  {
    title: 'Teen creators',
    text: 'Create a portfolio, show your skills, and take your first steps toward real projects.',
    href: '/freelance-jobs-for-teens',
    image: '/graphics/gemini-svg.svg',
    color: 'from-[#fffaf0] to-[#f8f5ef] dark:from-[#21142f]/30 dark:to-[#070b10]',
  },
  {
    title: 'Startup teams',
    text: 'Discover young digital talent for content, design, research, social media, and web support.',
    href: '/hire-teen-freelancers',
    image: '/graphics/gemini-svg (1).svg',
    color: 'from-[#eef4e8] to-[#f8f5ef] dark:from-[#073b3a]/20 dark:to-[#070b10]',
  },
  {
    title: 'Guardians',
    text: 'See how TeenVerseHub thinks about consent, safety, verification, messaging, and payments.',
    href: '/guardian-guide',
    image: '/graphics/gemini-svg (2).svg',
    color: 'from-[#fffaf0] to-[#eef4e8] dark:from-[#5b245e]/20 dark:to-[#070b10]',
  },
]

const seoLinks = [
  ['Teen digital skills', '/teen-digital-skills'],
  ['Teen portfolio builder', '/teen-portfolio-builder'],
  ['Student talent marketplace', '/student-talent-marketplace'],
  ['AI tools for teen freelancers', '/ai-tools-for-teen-freelancers'],
]

const platformStats = [
  ['14–21', 'Student and teen talent'],
  ['8+', 'Beginner-friendly skill areas'],
  ['Under 18', 'Guardian-aware onboarding'],
  ['10%', 'Basic plan platform fee'],
]

const howItWorks = [
  ['01', 'Create your profile', 'Add your skills, interests, and basic details.', UsersRound],
  ['02', 'Verify your account', 'Complete age-aware checks and build trust.', Fingerprint],
  ['03', 'Find projects', 'Explore beginner-friendly work that matches your skills.', Search],
  ['04', 'Work with guidance', 'Use safer messaging, clear scopes, and protected workflows.', ShieldCheck],
]

const comparisonRows = [
  ['Not made for teenagers', 'Built for students, teenagers, and young creators'],
  ['Generic profiles with little proof', 'Portfolio-first profiles with real skill samples'],
  ['Open communication can feel risky', 'Safer messaging, reporting, and guardian-aware onboarding'],
  ['Hard for beginners to start', 'Beginner-friendly projects and simple steps'],
  ['One-size-fits-all marketplace', 'Focused on teen skills, portfolios, learning, and trust'],
]

const platformFeatures = [
  ['AI skill assistant', 'Get simple suggestions to improve your skills and profile.', Sparkles],
  ['Portfolio builder', 'Show your projects, samples, and skills in one trusted profile.', FileText],
  ['Project matching', 'Find startups looking for design, content, development, and creative help.', Briefcase],
  ['Safe messaging', 'Chat about work inside the platform with clearer boundaries.', MessageSquareText],
  ['Teen verification', 'Age-aware checks with guardian consent for users under 18.', Fingerprint],
  ['Earnings tracker', 'Track wallet balance, project progress, subscriptions, and reputation.', CircleDollarSign],
  ['Learning roadmap', 'Guide new creators from first skill to a stronger portfolio.', TrendingUp],
  ['Guardian clarity', 'Help families understand consent, safety, and project boundaries.', ShieldCheck],
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
  ['Guardian-aware onboarding', 'Users under 18 follow a consent-first flow so families understand what is happening.'],
  ['Verification and profile proof', 'Age, identity, and portfolio signals help make profiles more credible.'],
  ['Moderation and reporting', 'Reporting tools, limits, and review systems help keep the platform more responsible.'],
  ['Protected workflows', 'Clear project scopes, safer communication, and payment clarity help reduce confusion.'],
]

const storyCards = [
  ['Teen video editor', 'Shows reels, short-form edits, and creator-style samples in one portfolio.'],
  ['Teen UI designer', 'Shares landing page concepts and dashboard screens as proof of skill.'],
  ['Student frontend developer', 'Builds React pages, simple websites, and startup support projects.'],
]

const roadmapItems = [
  ['Mobile app', 'A smoother TeenVerseHub experience on phones.'],
  ['AI mentor', 'Personal guidance for skills, profile quality, and project readiness.'],
  ['Team collaboration', 'Better tools for startups and teen collaborators.'],
  ['International payments', 'Future support for global teen talent opportunities.'],
  ['Teen learning academy', 'Guided learning paths connected to portfolio proof.'],
]

// ─── Sleuomorphic Adaptive Clickables ────────────────────────────────────────

function PrimaryButton({ href, children }) {
  return (
    <a
      href={href}
      className="group inline-flex w-full sm:w-auto h-12 items-center justify-center gap-2 rounded-xl bg-[#21142f] px-6 text-sm font-semibold text-white transition-all duration-150 active:scale-[0.97] sm:h-13 border-t border-white/20 shadow-[0_4px_12px_rgba(33,20,47,0.25),inset_0_1px_2px_rgba(255,255,255,0.2),inset_0_-2px_0_rgba(0,0,0,0.3)] hover:shadow-[0_6px_16px_rgba(33,20,47,0.35),inset_0_1px_2px_rgba(255,255,255,0.3)] dark:bg-[#f8f5ef] dark:text-[#21142f] dark:border-t-white/60"
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
    </a>
  )
}

function SecondaryButton({ href, children }) {
  return (
    <Link
      href={href}
      className="inline-flex w-full sm:w-auto h-12 items-center justify-center gap-2 rounded-xl border border-[#21142f]/10 bg-white/70 px-6 text-sm font-semibold text-[#21142f] backdrop-blur-md transition-all duration-150 active:scale-[0.97] sm:h-13 shadow-[0_2px_6px_rgba(33,20,47,0.04),inset_0_1px_1px_rgba(255,255,255,0.9),inset_0_-1px_1px_rgba(0,0,0,0.05)] hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-white dark:shadow-none"
    >
      {children}
    </Link>
  )
}

// ─── Liquid Glass Adaptive Panel ─────────────────────────────────────────────

function DashboardPreview({ priority = false }) {
  return (
    <div className="relative w-full max-w-[280px] sm:max-w-[310px] lg:max-w-[340px] px-2 sm:px-0">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-gradient-to-tr from-[#5b245e]/10 to-[#073b3a]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative overflow-hidden rounded-2xl border-t border-l border-white/60 border-b border-r border-white/20 bg-white/40 p-2 sm:p-2.5 shadow-[0_20px_50px_rgba(33,20,47,0.06),inset_0_1px_3px_rgba(255,255,255,0.7)] backdrop-blur-xl dark:border-white/10 dark:border-b-white/5 dark:bg-[#0b1118]/40">
        <div className="rounded-xl overflow-hidden border border-[#21142f]/5 bg-white dark:border-white/5">
          <Image
            src="/graphics/dashboard-light.png"
            alt="TeenVerseHub dashboard preview"
            width={797}
            height={1536}
            priority={priority}
            className="block h-auto w-full dark:hidden"
          />
          <Image
            src="/graphics/dashboard-dark.png"
            alt="TeenVerseHub dashboard preview"
            width={797}
            height={1536}
            priority={priority}
            className="hidden h-auto w-full dark:block"
          />
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 4, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -bottom-3 left-2 sm:-left-6 rounded-xl border border-[#21142f]/5 bg-white px-2.5 py-1.5 sm:px-3 sm:py-2 shadow-[0_8px_20px_rgba(33,20,47,0.04),inset_0_2px_4px_rgba(255,255,255,0.9)] dark:bg-[#111820] dark:border-white/5"
      >
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 rounded-full bg-emerald-500 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]" />
          <p className="text-[9px] sm:text-[10px] font-bold tracking-wider text-slate-500 dark:text-slate-400 uppercase whitespace-nowrap">Safer workspace</p>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 4.4, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
        className="absolute right-2 sm:-right-6 top-12 sm:top-16 rounded-xl border border-[#21142f]/5 bg-[#fffaf0] p-2 sm:p-3 shadow-[0_8px_20px_rgba(33,20,47,0.04),inset_0_2px_4px_rgba(255,255,255,0.9)] dark:bg-[#111820] dark:border-white/5"
      >
        <p className="text-[8px] sm:text-[9px] font-bold uppercase tracking-wider text-[#5b245e] dark:text-[#f4d58d] whitespace-nowrap">Profile XP</p>
        <p className="text-xs sm:text-sm font-black text-[#21142f] dark:text-white mt-0.5 whitespace-nowrap">277 XP</p>
      </motion.div>
    </div>
  )
}

function StatCard({ value, label }) {
  return (
    <div className="rounded-2xl border-t border-l border-white/60 border-b border-r border-white/20 bg-white/40 p-5 sm:p-6 shadow-[0_4px_12px_rgba(0,0,0,0.01),inset_0_1px_2px_rgba(255,255,255,0.8)] backdrop-blur-md dark:border-white/5 dark:bg-white/[0.01]">
      <p className="text-xl sm:text-2xl font-bold tracking-tight text-[#21142f] dark:text-white">{value}</p>
      <p className="mt-1 text-[11px] sm:text-xs text-[#5c5360] dark:text-slate-400 font-medium leading-tight">{label}</p>
    </div>
  )
}

function FeatureCard({ title, text, Icon }) {
  return (
    <div className="group rounded-2xl border-t border-l border-white/70 border-b border-r border-white/20 bg-white/50 p-5 sm:p-6 shadow-[0_10px_25px_-5px_rgba(33,20,47,0.03)] backdrop-blur-md transition-all duration-200 hover:bg-white dark:border-white/5 dark:bg-white/[0.02] dark:hover:bg-white/[0.04]">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-[0_2px_6px_rgba(33,20,47,0.05),inset_0_1px_2px_rgba(255,255,255,0.9)] text-[#21142f] dark:bg-white/5 dark:text-white dark:shadow-none">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-4 text-sm font-bold text-[#21142f] dark:text-white tracking-tight">{title}</h3>
      <p className="mt-1.5 text-xs leading-relaxed text-[#5c5360] dark:text-slate-400">{text}</p>
    </div>
  )
}

// ─── Main View Integration ──────────────────────────────────────────────────

export default function HomePage() {
  const [showPopup, setShowPopup] = useState(false)
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const heroBgY = useTransform(scrollYProgress, [0, 1], ['0%', '6%'])

  const fadeUp = useFadeUp()

  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(true), 4000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <MarketingShell>
      <div className="min-h-screen overflow-x-hidden bg-[#fffaf0]/40 text-[#21142f] selection:bg-[#5b245e] selection:text-white dark:bg-[#070b10] dark:text-white tracking-tight">

        {/* ═══════════════════ NOTIFICATION SYSTEM ═══════════════════ */}
        <AnimatePresence>
          {showPopup && (
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 8 }}
              className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 hidden w-[calc(100vw-2rem)] max-w-76 rounded-2xl border-t border-l border-white/80 border-b border-r border-white/20 bg-white/90 p-5 shadow-[0_20px_40px_rgba(33,20,47,0.12)] backdrop-blur-xl dark:border-white/10 dark:bg-[#0b1118]/90 sm:block"
            >
              <button onClick={() => setShowPopup(false)} className="absolute right-4 top-4 text-slate-400 hover:text-[#21142f] dark:hover:text-white">
                <X className="h-3.5 w-3.5" />
              </button>
              <div className="flex items-center gap-1.5 text-[#5b245e] dark:text-[#f4d58d]">
                <Star className="h-3.5 w-3.5 fill-current" />
                <span className="text-[10px] font-bold uppercase tracking-wider">Start your TeenVerse journey</span>
              </div>
              <h3 className="mt-2 text-xs font-bold text-[#21142f] dark:text-white">Create your space.</h3>
              <p className="mt-1 text-[11px] leading-relaxed text-[#5c5360] dark:text-slate-400">
                Create your profile, show your skills, and find projects that match your interests.
              </p>
              <div className="mt-4">
                <a href={loginUrl} className="flex h-8 items-center justify-center rounded-lg bg-[#21142f] text-[11px] font-medium text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] hover:bg-[#321747] dark:bg-white dark:text-[#21142f] w-full">
                  Create Profile
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ═══════════════════ HERO SECTION ═══════════════════ */}
        <section ref={heroRef} className="relative isolate px-4 sm:px-6 pt-24 pb-16 sm:pt-36 lg:px-12">
          <motion.div style={{ y: heroBgY }} className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,rgba(7,59,58,0.03),transparent_45%),radial-gradient(ellipse_at_bottom_right,rgba(91,36,94,0.04),transparent_50%)]" />
          
          <div className="mx-auto w-full max-w-7xl flex flex-col gap-8 sm:gap-12">
            
            {/* Fluid Heading Framework Row */}
            <motion.div 
              initial="hidden" 
              animate="show" 
              variants={stagger} 
              className="mx-auto flex w-full max-w-5xl flex-col items-center justify-center text-center px-2"
            >
              <motion.div 
                variants={fadeUp} 
                className="inline-flex items-center gap-2 rounded-full border border-[#21142f]/5 bg-white px-3.5 py-1.5 text-xs font-semibold text-[#5b245e] shadow-[0_4px_12px_rgba(33,20,47,0.03),inset_0_1.5px_2px_rgba(255,255,255,0.9)] dark:border-white/5 dark:bg-white/5 dark:text-[#f4d58d]"
              >
                <Sparkles className="h-3.5 w-3.5 text-[#073b3a] dark:text-[#f4d58d]" />
                Parent-aware onboarding
              </motion.div>

              <motion.h1
                variants={fadeUp}
                style={{ fontFamily: "'Josefin Sans', sans-serif" }}
                className="
                  mt-6 mx-auto w-full max-w-6xl px-4
                  text-center select-none font-bold tracking-tight
                  text-[#21142f] dark:text-white
                  text-[1.85rem] min-[360px]:text-[2.2rem] min-[410px]:text-[2.6rem]
                  sm:text-[4.2rem] md:text-[5.4rem]
                  lg:text-[6.4rem] xl:text-[7.2rem]
                  leading-[1.15] sm:leading-[0.9]
                "
              >
                {/* Fixed line mapping properties to handle adaptive scaling cleanly */}
                <span className="block text-center whitespace-normal sm:whitespace-nowrap break-words">
                  Build your portfolio.
                </span>

                <span
                  className="
                    mt-1.5 sm:mt-2 block whitespace-normal sm:whitespace-nowrap break-words
                    bg-gradient-to-r from-[#5b245e] to-[#073b3a]
                    bg-clip-text text-transparent
                    dark:from-[#f4d58d] dark:to-purple-300
                  "
                >
                  Find real projects.
                </span>
              </motion.h1>
            </motion.div>

            {/* Bottom Row Layout Architecture (Responsive 12-Column Map) */}
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center mt-6 sm:mt-12 lg:mt-16">
              
              {/* Informational Column Block */}
              <div className="lg:col-span-5 lg:col-start-2 flex flex-col justify-center order-2 lg:order-1 px-2 sm:px-0">
                <p className="text-sm sm:text-base leading-relaxed text-[#5c5360] dark:text-slate-300 sm:leading-relaxed max-w-xl text-center lg:text-left">
                  TeenVerseHub helps students and teenagers create portfolios, discover beginner-friendly projects, and work with startups in a safer, guided environment.
                </p>

                {/* Adaptive Click Target Stack */}
                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:max-w-md w-full mx-auto lg:mx-0">
                  <PrimaryButton href={loginUrl}>Create Profile</PrimaryButton>
                  <SecondaryButton href="/hire-teen-freelancers">Explore Projects</SecondaryButton>
                </div>

                {/* Grid List Rows */}
                <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-3 max-w-xl border-t border-[#21142f]/5 pt-6 dark:border-white/5">
                  {[
                    ['Parent-aware onboarding', ShieldCheck],
                    ['Portfolio profiles', BadgeCheck],
                    ['Secure payments', CircleDollarSign],
                    ['Safe messaging', LockKeyhole],
                  ].map(([label, Icon]) => (
                    <div key={label} className="flex items-center gap-2 text-xs font-semibold text-[#5c5360] dark:text-slate-300">
                      <Icon className="h-3.5 w-3.5 text-[#073b3a] dark:text-[#f4d58d] shrink-0" />
                      <span className="truncate leading-none">{label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Interface Interactive Showcase Display Panel Container */}
              <div className="lg:col-span-6 flex justify-center order-1 lg:order-2 mb-4 lg:mb-0">
                <DashboardPreview priority />
              </div>

            </div>

          </div>
        </section>

        {/* ═══════════════════ METRIC GRID ROWS ═══════════════════ */}
        <section className="px-4 sm:px-6 py-8 lg:px-12 border-y border-[#21142f]/5 bg-white/20 dark:border-white/5 dark:bg-white/[0.005]">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
              {platformStats.map(([value, label]) => (
                <StatCard key={label} value={value} label={label} />
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════ WHAT YOU CAN DO UTILITY AREA ═══════════════════ */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24 lg:px-12">
          
          <div className="max-w-xl border-l-2 border-[#073b3a] pl-4 sm:pl-6 dark:border-[#f4d58d]">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#21142f] dark:text-white">
              What you can do on TeenVerseHub
            </h2>
            <p className="mt-1.5 text-xs leading-relaxed text-[#5c5360] dark:text-slate-400">
              Create your profile, build a trusted portfolio, learn skills, and discover beginner-friendly projects.
            </p>
          </div>

          <div className="mt-10 sm:mt-16 grid grid-cols-1 gap-4 md:grid-cols-12">
            
            {/* Highlighted Left Feature Column Block (7-Col Split Matrix) */}
            <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {platformFeatures.slice(0, 4).map(([title, text, Icon]) => (
                <FeatureCard key={title} title={title} text={text} Icon={Icon} />
              ))}
            </div>

            {/* Visual Callout Matte Panel Block (5-Col Split Layout) */}
            <div className="md:col-span-5 flex flex-col justify-between rounded-[2rem] bg-[#f8f5ef]/50 p-6 sm:p-8 border border-[#21142f]/5 shadow-[inset_2px_2px_4px_rgba(255,255,255,0.6)] dark:bg-white/[0.01] dark:border-white/5">
              <div>
                <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-[#073b3a] dark:text-[#f4d58d]">
                  Guided Track
                </span>
                <h3 className="mt-2 text-base sm:text-lg font-bold text-[#21142f] dark:text-white tracking-tight">
                  A safer workspace for teens and startups.
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#5c5360] dark:text-slate-400">
                  TeenVerseHub keeps profiles, projects, chats, and payments in one guided place, so teens can work with more clarity and trust.
                </p>
              </div>

              <div className="mt-6 space-y-2 border-t border-[#21142f]/5 pt-4 sm:pt-6 dark:border-white/5">
                {[['Private by design', ShieldCheck], ['Payment clarity', CircleDollarSign]].map(([label, Icon]) => (
                  <div key={label} className="flex items-center gap-2 text-xs font-semibold text-[#21142f] dark:text-slate-300">
                    <Icon className="h-4 w-4 text-[#073b3a] dark:text-[#f4d58d]" />
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Remaining Features Base Matrix layout */}
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {platformFeatures.slice(4).map(([title, text, Icon]) => (
              <FeatureCard key={title} title={title} text={text} Icon={Icon} />
            ))}
          </div>

        </section>

        {/* ═══════════════════ HOW IT WORKS STEPS TIMELINE ═══════════════════ */}
        <section className="px-4 sm:px-6 py-16 sm:py-20 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-xl">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#21142f] dark:text-white">How TeenVerseHub works</h2>
            </div>
            
            <div className="mt-10 sm:mt-12 grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4 border-l border-[#21142f]/5 dark:border-white/5 pl-4 sm:pl-0 sm:border-l-0">
              {howItWorks.map(([step, title, text, Icon]) => (
                <div key={title} className="relative sm:border-t sm:border-[#21142f]/5 sm:pt-6 dark:sm:border-white/5">
                  <div className="text-xs font-mono font-bold text-[#073b3a] dark:text-[#f4d58d]">{step}</div>
                  <h3 className="mt-1.5 text-sm font-bold text-[#21142f] dark:text-white flex items-center gap-2">
                    <Icon className="h-4 w-4 text-slate-400" />
                    {title}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-[#5c5360] dark:text-slate-400">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════ WHY WE ARE DIFFERENT SPLIT MATRIX ═══════════════════ */}
        <section className="px-4 sm:px-6 py-16 sm:py-20 lg:px-12 bg-[#f8f5ef]/30 dark:bg-white/[0.005] border-y border-[#21142f]/5 dark:border-white/5">
          <div className="mx-auto max-w-7xl grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#21142f] dark:text-white">Why TeenVerseHub is different</h2>
              <p className="mt-1.5 text-xs leading-relaxed text-[#5c5360] dark:text-slate-400 max-w-sm">
                Built for teenagers, students, young creators, startups, and guardians.
              </p>
            </div>
            
            {/* Minimal Liquid Glass Matrix Container */}
            <div className="lg:col-span-7 overflow-hidden rounded-xl border border-[#21142f]/10 bg-white/60 backdrop-blur-md shadow-sm dark:border-white/5 dark:bg-[#0b1118]/60">
              <div className="grid grid-cols-2 bg-[#f8f5ef]/80 px-4 py-2.5 sm:px-5 text-[10px] font-bold tracking-wider text-[#21142f] dark:bg-[#111820] dark:text-slate-400 border-b border-[#21142f]/5 dark:border-white/5 uppercase">
                <span>General sites</span>
                <span>TeenVerseHub</span>
              </div>
              {comparisonRows.map(([other, teenverse]) => (
                <div key={other} className="grid grid-cols-2 gap-3 sm:gap-4 border-b border-slate-100 px-4 py-3.5 sm:px-5 last:border-b-0 dark:border-white/[0.02]">
                  <p className="text-xs text-slate-400 dark:text-slate-500 leading-normal">{other}</p>
                  <p className="flex items-start gap-1.5 text-xs font-semibold text-[#21142f] dark:text-slate-200 leading-normal">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#073b3a] dark:text-emerald-400 shrink-0 mt-0.5" />
                    {teenverse}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════ STICKY MONOLITH SYSTEM LAYERING ═══════════════════ */}
        <section className="px-4 sm:px-6 py-16 sm:py-20 lg:px-12 bg-[#21142f] text-white dark:bg-[#070b10] border-t border-[#21142f]/30">
          <div className="mx-auto max-w-7xl grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5 lg:sticky lg:top-24">
              <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 text-[#f4d58d] border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
                <ShieldCheck className="h-4 w-4" />
              </div>
              <h2 className="mt-4 text-2xl sm:text-3xl font-bold tracking-tight text-white">Safety comes first.</h2>
              <p className="mt-1.5 text-xs leading-relaxed text-[#f8f5ef]/60">
                TeenVerseHub is designed to help teens explore opportunities with clearer rules, guidance, and safety thinking.
              </p>
              <div className="mt-5">
                <Link href="/guardian-guide" className="inline-flex h-9 items-center justify-center rounded-lg bg-white px-4 text-xs font-semibold text-[#21142f] hover:bg-[#f8f5ef] transition-colors shadow-[0_2px_4px_rgba(0,0,0,0.2)]">
                  Learn about safety
                </Link>
              </div>
            </div>
            
            <div className="lg:col-span-7 grid gap-3">
              {safetyPillars.map(([title, text], idx) => (
                <div key={title} className="rounded-xl border border-white/5 bg-white/[0.02] p-5 sm:p-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.02)]">
                  <span className="text-[9px] font-mono font-bold tracking-wider text-[#f4d58d] uppercase">Safety Layer 0{idx + 1}</span>
                  <h3 className="mt-1 text-sm font-bold text-white tracking-tight">{title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-slate-300">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════ COMPETENCY PIPELINE DISCIPLINES ═══════════════════ */}
        <section className="px-4 sm:px-6 py-16 sm:py-20 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-xl">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#21142f] dark:text-white">Skills you can start with</h2>
            </div>
            
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {skills.map(([title, text, Icon]) => (
                <div key={title} className="rounded-xl border border-[#21142f]/5 bg-white p-5 dark:border-white/5 dark:bg-white/[0.01]">
                  <div className="text-[#073b3a] dark:text-[#f4d58d]">
                    <Icon className="h-4 w-4" />
                  </div>
                  <h3 className="mt-3 text-xs font-bold text-[#21142f] dark:text-white tracking-tight">{title}</h3>
                  <p className="mt-1 text-[11px] text-[#5c5360] dark:text-slate-500 leading-normal">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════ RECOGNIZED INDEX PILL MARGINS ═══════════════════ */}
        <section className="px-4 pb-16 sm:pb-20 lg:px-12">
          <div className="mx-auto max-w-7xl rounded-xl border border-[#21142f]/5 bg-white/40 p-5 sm:p-6 dark:border-white/5 dark:bg-white/[0.005]">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold text-[#21142f] dark:text-slate-400 mr-1 sm:mr-2">Popular skills on TeenVerseHub:</span>
              {opportunityCategories.map((category) => (
                <span key={category} className="rounded-lg border border-[#21142f]/10 bg-white px-2.5 py-1 text-xs font-medium text-[#21142f] dark:border-white/5 dark:bg-white/5 dark:text-slate-300 whitespace-nowrap">
                  {category}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════ SEGMENT CANVAS PATHS ═══════════════════ */}
        <section className="px-4 sm:px-6 py-16 sm:py-20 lg:px-12 bg-[#f8f5ef]/20 dark:bg-white/[0.005] border-t border-[#21142f]/5 dark:border-white/5">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-xl">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#21142f] dark:text-white">Choose your path</h2>
            </div>
            
            <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
              {routes.map((route) => (
                <div key={route.title} className="flex flex-col rounded-2xl border border-[#21142f]/10 bg-white shadow-sm overflow-hidden dark:border-white/5 dark:bg-[#0b1118]">
                  <div className={`bg-gradient-to-br ${route.color} h-40 relative border-b border-slate-100 dark:border-white/5`}>
                    <div className="absolute inset-0 flex items-center justify-center p-6 opacity-85">
                      <Image src={route.image} alt={route.title} width={160} height={120} className="object-contain max-h-full" />
                    </div>
                  </div>
                  <div className="p-5 sm:p-6 flex flex-1 flex-col justify-between">
                    <div>
                      <h3 className="text-sm font-bold text-[#21142f] dark:text-white tracking-tight">{route.title}</h3>
                      <p className="mt-1 text-xs leading-relaxed text-[#5c5360] dark:text-slate-400">{route.text}</p>
                    </div>
                    <div className="mt-5 pt-4 border-t border-slate-100 dark:border-white/5">
                      <Link href={route.href} className="inline-flex items-center gap-1.5 text-xs font-bold text-[#5b245e] dark:text-[#f4d58d] hover:text-[#21142f]">
                        Explore
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════ REGISTRY DIRECTORY LAYER ═══════════════════ */}
        <section className="px-4 sm:px-6 py-12 lg:px-12 border-y border-[#21142f]/10 bg-white dark:border-white/5 dark:bg-[#070b10]">
          <div className="mx-auto max-w-7xl grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-4">
              <h2 className="text-lg sm:text-xl font-bold tracking-tight text-[#21142f] dark:text-white">Helpful pages</h2>
            </div>
            <div className="lg:col-span-8 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {seoLinks.map(([label, href]) => (
                <Link key={href} href={href} className="flex items-center justify-between rounded-xl border border-[#21142f]/10 p-4 text-xs font-semibold text-[#21142f] bg-white/50 backdrop-blur-sm hover:bg-[#fffaf0] dark:border-white/5 dark:text-slate-300 dark:hover:bg-white/5">
                  {label}
                  <ArrowRight className="h-3.5 w-3.5 text-[#073b3a] dark:text-[#f4d58d]" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════ ACTIVE PROOF PROFILES ═══════════════════ */}
        <section className="px-4 sm:px-6 py-16 sm:py-20 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-xl">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#21142f] dark:text-white">Example teen profiles</h2>
            </div>
            
            <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
              {storyCards.map(([title, text]) => (
                <div key={title} className="rounded-xl border border-[#21142f]/10 bg-white/30 p-5 sm:p-6 shadow-sm backdrop-blur-sm dark:border-white/5 dark:bg-[#0b1118]/40">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#fffaf0] text-[#5b245e] dark:bg-white/5 dark:text-[#f4d58d]">
                    <Star className="h-3.5 w-3.5 fill-current" />
                  </div>
                  <h3 className="mt-4 text-sm font-bold text-[#21142f] dark:text-white tracking-tight">{title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-[#5c5360] dark:text-slate-400">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════ FAQ AREA ═══════════════════ */}
        <section className="px-4 sm:px-6 py-16 sm:py-20 lg:px-12 bg-[#f8f5ef]/20 dark:bg-white/[0.005] border-t border-[#21142f]/5 dark:border-white/5">
          <div className="mx-auto max-w-4xl">
            <div className="max-w-2xl">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#21142f] dark:text-white">TeenVerseHub FAQ</h2>
              <p className="mt-2 text-xs leading-relaxed text-[#5c5360] dark:text-slate-400">
                Simple answers for students, guardians, startups, and search engines.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-4">
              {[
                [
                  'What is TeenVerseHub?',
                  'TeenVerseHub is a student talent marketplace where teenagers can build portfolios, learn skills, and find beginner-friendly projects.',
                ],
                [
                  'Who can use TeenVerseHub?',
                  'TeenVerseHub is built for students and young creators aged 14 to 21, along with startups looking for young digital talent.',
                ],
                [
                  'Can users under 18 join TeenVerseHub?',
                  'Yes. Users under 18 follow a guardian-aware onboarding and consent flow before using important platform features.',
                ],
                [
                  'What can teens do on TeenVerseHub?',
                  'Teens can create a profile, showcase skills, build a portfolio, discover projects, message safely, and grow their work experience.',
                ],
                [
                  'Why is TeenVerseHub different?',
                  'TeenVerseHub focuses on teen talent, portfolio-first profiles, safer onboarding, beginner-friendly projects, and guided growth.',
                ],
              ].map(([question, answer]) => (
                <div
                  key={question}
                  className="rounded-xl border border-[#21142f]/10 bg-white/50 p-5 shadow-sm backdrop-blur-sm dark:border-white/5 dark:bg-white/[0.03]"
                >
                  <h3 className="text-sm font-bold text-[#21142f] dark:text-white">{question}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#5c5360] dark:text-slate-400">{answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════ HIGH VALUE BOTTOM FOOTER CTA ═══════════════════ */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 pb-16 sm:pb-20 lg:px-12">
          <div className="relative overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] border-t border-l border-white/60 border-b border-r border-white/20 bg-gradient-to-br from-white/60 to-[#fffaf0]/40 p-6 sm:p-10 text-center shadow-[0_20px_50px_rgba(33,20,47,0.03)] backdrop-blur-md dark:border-white/5 dark:from-[#0b1118]/60 dark:to-transparent">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#21142f] dark:text-white md:text-4xl">
              Ready to start?
            </h2>
            <p className="mx-auto mt-2.5 max-w-md text-xs sm:text-sm text-[#5c5360] dark:text-slate-400">
              Create your TeenVerseHub profile and start building your portfolio today.
            </p>
            <div className="mt-6 sm:mt-8 flex flex-col justify-center gap-3 sm:flex-row max-w-xs mx-auto sm:max-w-none w-full">
              <PrimaryButton href={loginUrl}>Create Profile</PrimaryButton>
              <SecondaryButton href="/about">Learn More</SecondaryButton>
            </div>
          </div>
        </section>

        {/* ═══════════════════ CORE STATEMENT & FUTURE ROADMAP ═══════════════════ */}
        <section className="px-4 sm:px-6 py-16 sm:py-20 lg:px-12 bg-[#21142f] text-white dark:bg-[#0b1118] border-t border-white/5 pb-32">
          <div className="mx-auto max-w-7xl grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
            
            <div className="lg:col-span-6 rounded-2xl border border-white/5 bg-white/[0.01] p-6 sm:p-8 backdrop-blur-md">
              <span className="text-[9px] font-mono font-bold tracking-wider text-slate-400 uppercase">Why TeenVerseHub exists</span>
              <h2 className="mt-1 text-2xl font-bold tracking-tight text-white">Why we built TeenVerseHub</h2>
              <p className="mt-2.5 text-xs leading-relaxed text-slate-300">
                We believe students and teenagers should have a clearer place to learn skills, build portfolios, and access beginner-friendly opportunities without feeling lost on large platforms.
              </p>
            </div>
            
            <div className="lg:col-span-6 rounded-2xl border border-white/5 bg-black/10 p-6 sm:p-8">
              <div className="flex items-center gap-2 text-[#f4d58d]">
                <Rocket className="h-4 w-4" />
                <h3 className="text-xs font-bold uppercase tracking-wider text-white">Future roadmap</h3>
              </div>
              <div className="mt-5 space-y-2">
                {roadmapItems.map(([title, text]) => (
                  <div key={title} className="rounded-lg border border-white/5 bg-white/5 p-4">
                    <p className="text-xs font-bold text-white tracking-tight">{title}</p>
                    <p className="mt-1 text-[11px] text-slate-400 leading-normal">{text}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

      </div>
    </MarketingShell>
  )
}