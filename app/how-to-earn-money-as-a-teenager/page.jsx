'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import {
  AlertTriangle,
  BadgeCheck,
  Briefcase,
  CheckCircle2,
  Layout,
  ShieldCheck,
  TrendingUp,
  Zap,
  ArrowRight,
  MonitorPlay,
  FileText,
  Sparkles,
  Award
} from 'lucide-react'
import { motion, useReducedMotion, useScroll, useSpring, useTransform, useMotionValue, AnimatePresence } from 'framer-motion'

import { SITE } from '../lib/site'
import StructuredData from '../components/StructuredData'
import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'

const loginUrl = SITE.appUrl

// ─── ICON REGISTRY MATRIX (ELIMINATES SERIALIZATION BUGS) ─────────────────────
const ICON_REGISTRY = {
  monitorPlay: MonitorPlay,
  layout: Layout,
  fileText: FileText,
  shieldCheck: ShieldCheck,
  zap: Zap,
  trendingUp: TrendingUp,
  alertTriangle: AlertTriangle
}

// ─── DATA CONFIGURATIONS ──────────────────────────────────────────────────────
const pageFeatures = [
  {
    icon: 'monitorPlay',
    title: "Creative and Creator Work",
    description: "Video editing, thumbnails, motion graphics, logo design, UI/UX basics, creator clips, streaming assets, and visual content support.",
    span: "md:col-span-7",
    glow: "from-blue-500/10 via-blue-500/5 to-transparent"
  },
  {
    icon: 'layout',
    title: "Tech and AI Work",
    description: "Website development, frontend tasks, Discord bots, AI integrations, app prototypes, automation tools, prompt engineering, and AI workflow setup.",
    span: "md:col-span-5",
    glow: "from-emerald-500/10 via-emerald-500/5 to-transparent"
  },
  {
    icon: 'fileText',
    title: "Writing and Social Work",
    description: "Script writing, copywriting, SEO content writing, captions, social media management, YouTube support, newsletters, and research tasks.",
    span: "md:col-span-5",
    glow: "from-fuchsia-500/10 via-fuchsia-500/5 to-transparent"
  },
  {
    icon: 'shieldCheck',
    title: "Safe Platform Systems",
    description: "Guardian consent, verification, moderation, reporting, protected payments, and portfolio-based trust help teens avoid unsafe informal work.",
    span: "md:col-span-7",
    glow: "from-amber-500/10 via-amber-500/5 to-transparent"
  }
]

const roadmapSteps = [
  {
    title: "Start Focused",
    theme: "indigo",
    icon: "zap",
    iconColor: "text-indigo-500 dark:text-indigo-400",
    points: [
      "Choose one service category",
      "Create portfolio samples",
      "Set clear beginner deliverables",
      "Complete consent or verification steps"
    ]
  },
  {
    title: "Grow Responsibly",
    theme: "fuchsia",
    icon: "trendingUp",
    iconColor: "text-fuchsia-500 dark:text-fuchsia-400",
    points: [
      "Apply for small projects",
      "Use platform communication",
      "Save reviews and completed work",
      "Improve pricing and skill depth over time"
    ]
  }
]

// ─── HOISTED INTERACTIVE ANIMATIONS ───────────────────────────────────────────
function AmbientGlowField() {
  const prefersReducedMotion = useReducedMotion()
  if (prefersReducedMotion) return null

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-0 opacity-20 dark:opacity-15">
      <motion.div 
        animate={{ scale: [1, 1.1, 0.95, 1], x: [0, 30, -20, 0], y: [0, -40, 20, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -right-40 top-10 h-[600px] w-[600px] rounded-full bg-gradient-to-tr from-[#96d6bf] to-transparent blur-[140px]"
      />
      <motion.div 
        animate={{ scale: [1, 0.95, 1.05, 1], x: [0, -20, 30, 0], y: [0, 30, -30, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute -left-40 top-1/3 h-[700px] w-[700px] rounded-full bg-gradient-to-br from-[#818cf8]/25 to-transparent blur-[160px]"
      />
    </div>
  )
}

function CircleHoverButton({ href, isPrimary, children }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const buttonRef = useRef(null)

  const handleMouseMove = (e) => {
    if (!buttonRef.current) return
    const rect = buttonRef.current.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    })
  }

  const baseStyles = "relative overflow-hidden inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg px-6 text-sm font-semibold transition-all duration-300 shadow-sm sm:w-auto z-10"
  const primaryTheme = "bg-[#191724] text-white dark:bg-white dark:text-[#191724]"
  const secondaryTheme = "border border-slate-200 bg-white text-[#191724] dark:border-white/10 dark:bg-white/5 dark:text-white"

  return (
    <motion.div whileHover={{ scale: 1.015, y: -1 }} whileTap={{ scale: 0.985 }} className="w-full sm:w-auto">
      <Link
        href={href}
        ref={buttonRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => { return setIsHovered(true) }}
        onMouseLeave={() => { return setIsHovered(false) }}
        className={`${baseStyles} ${isPrimary ? primaryTheme : secondaryTheme}`}
      >
        <AnimatePresence>
          {isHovered && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 2.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              style={{ left: mousePosition.x, top: mousePosition.y }}
              className={`absolute w-32 h-32 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none mix-blend-difference ${
                isPrimary ? "bg-white/20" : "bg-[#2f7259]/10"
              }`}
            />
          )}
        </AnimatePresence>
        <span className="relative z-10 flex items-center justify-center gap-2 w-full">{children}</span>
      </Link>
    </motion.div>
  )
}

function SplitTextHeading({ children, className = "" }) {
  const words = children.split(" ")
  return (
    <h1 className={className}>
      {words.map((word, i) => {
        return (
          <span key={i} className="inline-block overflow-hidden mr-[0.22em] pb-1">
            <motion.span
              className="inline-block"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ type: "spring", damping: 22, stiffness: 130, delay: i * 0.04 }}
            >
              {word}
            </motion.span>
          </span>
        )
      })}
    </h1>
  )
}

function SectionHeader({ eyebrow, title, text }) {
  return (
    <div className="max-w-3xl text-left">
      {eyebrow && (
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#4f7b68] dark:text-[#96d6bf]">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#191724] sm:text-4xl dark:text-white leading-tight">
        {title}
      </h2>
      {text && (
        <p className="mt-3 text-base leading-relaxed text-slate-500 dark:text-slate-400 font-medium">
          {text}
        </p>
      )}
    </div>
  )
}

function SpreadGroup({ children, className = '' }) {
  const prefersReducedMotion = useReducedMotion()
  if (prefersReducedMotion) return <div className={className}>{children}</div>

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.05 } }
      }}
    >
      {children}
    </motion.div>
  )
}

function SpreadItem({ children, className = '', direction = 1 }) {
  const prefersReducedMotion = useReducedMotion()
  if (prefersReducedMotion) return <div className={className}>{children}</div>

  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 25, x: direction * 15, scale: 0.96 },
        show: { opacity: 1, y: 0, x: 0, scale: 1, transition: { type: 'spring', damping: 18, stiffness: 100 } }
      }}
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', damping: 15, stiffness: 200 }}
    >
      <div className="h-full w-full relative">
        {children}
      </div>
    </motion.div>
  )
}

// ─── MASTER PAGE MODULE ───────────────────────────────────────────────────────
export default function HowToEarnMoneyAsTeenagerPage({ pageSchema, faqSchema }) {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 25, restDelta: 0.001 })

  return (
    <>
      <StructuredData data={pageSchema} />
      <StructuredData data={faqSchema} />
      <SiteHeader />

      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2f7259] to-[#96d6bf] z-50 transform-origin-0" style={{ scaleX }} />

      <main className="tvh-page-shell selection:bg-[#5b245e] selection:text-white relative min-h-screen bg-[#fbfaf7] text-[#191724] dark:bg-[#070b10] dark:text-white transition-colors duration-300 overflow-x-hidden">
        
        <AmbientGlowField />

        {/* 1. HERO SECTION - TYPOGRAPHY DRIVEN TEXT LAYOUT */}
        <section className="relative z-10 px-4 pb-16 pt-28 sm:px-6 sm:pt-40 lg:px-8">
          <div className="mx-auto max-w-4xl text-center flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring', damping: 15 }}
              className="mb-6 inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-slate-700 shadow-sm dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-200"
            >
              <BadgeCheck className="h-4 w-4 text-[#2f7259]" />
              Teen Digital Opportunity
            </motion.div>

            <SplitTextHeading className="text-4xl font-extrabold tracking-tight text-[#191724] sm:text-6xl lg:text-7xl dark:text-white leading-[1.1] sm:leading-[1.05]">
              Safe Ways Teens Can Earn With Digital Skills
            </SplitTextHeading>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.5 }}
              className="mt-6 max-w-3xl text-base sm:text-lg leading-relaxed text-slate-600 dark:text-slate-400 font-medium px-2 sm:px-0"
            >
              Teenagers can earn money more safely when they focus on real digital skills, visible portfolios, small projects, verified opportunities, guardian-aware workflows, and payment systems that reduce scam risk.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.5 }}
              className="mt-8 flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto px-4 sm:px-0"
            >
              <CircleHoverButton href="/freelance-jobs-for-teens" isPrimary={true}>
                <span>Explore Opportunities</span>
                <ArrowRight className="h-4 w-4" />
              </CircleHoverButton>
              <CircleHoverButton href="/safety" isPrimary={false}>
                <ShieldCheck className="h-4 w-4" />
                <span>Read Safety Guide</span>
              </CircleHoverButton>
            </motion.div>

            <div className="mt-16 grid w-full max-w-3xl grid-cols-3 gap-x-4 border-t border-slate-200 pt-6 text-center dark:border-white/10">
              {[
                { label: "Skills", value: "Creative + Tech" },
                { label: "Proof basis", value: "Portfolio First" },
                { label: "Growth scale", value: "Real Experience" },
              ].map((stat, idx) => {
                return (
                  <div key={idx} className="text-center">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                      {stat.label}
                    </div>
                    <div className="mt-1 text-sm sm:text-base font-extrabold text-slate-950 dark:text-white">
                      {stat.value}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* 2. PLATFORM FEATURES Bento LAYOUT */}
        <section className="relative z-10 px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Ecosystem Matrix"
              title="Skill-based teen opportunities with structure"
              text="TeenVerseHub supports categories teenagers already understand while turning them into clearer, safer, portfolio-based online work options."
            />

            <SpreadGroup className="mt-10 grid gap-5 md:grid-cols-12 md:auto-rows-[160px]">
              {pageFeatures.map((feature, index) => {
                const FeatureIcon = ICON_REGISTRY[feature.icon]
                return (
                  <SpreadItem key={feature.title} direction={(index % 3) - 1} className={feature.span}>
                    <div className="h-full rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-[#0b1017] flex flex-col justify-between overflow-hidden relative group">
                      <div className={`pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full blur-3xl bg-gradient-to-br ${feature.glow}`} />
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-950 text-white dark:bg-white/10 shadow-sm relative z-10">
                        <FeatureIcon className="h-4 w-4" />
                      </div>
                      <div className="relative z-10">
                        <h3 className="text-base font-bold text-[#191724] dark:text-white leading-tight">{feature.title}</h3>
                        <p className="mt-1 text-xs leading-relaxed text-slate-500 dark:text-slate-400 font-medium">{feature.description}</p>
                      </div>
                    </div>
                  </SpreadItem>
                )
              })}
            </SpreadGroup>
          </div>
        </section>

        {/* 3. CORE PROTOCOLS BLOCKS */}
        <section className="relative z-10 border-y border-slate-200 bg-white/50 px-4 py-20 dark:border-zinc-800 dark:bg-[#070b14]/40 sm:px-6 sm:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ type: 'spring', damping: 20 }}
                className="lg:col-span-5 lg:sticky lg:top-32 lg:h-max"
              >
                <SectionHeader
                  eyebrow="Execution Protocols"
                  title="Real earning starts with real skills and visible proof"
                  text="The safest way for teenagers to earn online is to avoid random offers and build around skills that can be shown, tested, reviewed, and improved over time."
                />
              </motion.div>

              <div className="flex flex-col gap-6 lg:col-span-7">
                <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.02] sm:p-8">
                  <div className="mb-6 flex items-center gap-3 border-b border-slate-100 pb-4 dark:border-white/5">
                    <Briefcase className="h-5 w-5 text-indigo-500" />
                    <h3 className="text-xl font-bold text-[#191724] dark:text-white">Teen-Friendly Work Types</h3>
                  </div>
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {[
                      "Video editing and thumbnails",
                      "Web, bots, and AI automations",
                      "Writing, SEO, and social media",
                      "Gaming, streaming, and creator support"
                    ].map((item, idx) => {
                      return (
                        <li key={idx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="mt-1 h-3.5 w-3.5 shrink-0 text-indigo-400" />
                          <span className="text-sm font-semibold text-slate-700 dark:text-slate-300 leading-relaxed">{item}</span>
                        </li>
                      )
                    })}
                  </ul>
                </div>

                <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.02] sm:p-8">
                  <div className="mb-6 flex items-center gap-3 border-b border-slate-100 pb-4 dark:border-white/5">
                    <TrendingUp className="h-5 w-5 text-emerald-500" />
                    <h3 className="text-xl font-bold text-[#191724] dark:text-white">How TeenVerseHub Helps</h3>
                  </div>
                  <p className="mb-4 text-xs font-semibold text-slate-500 dark:text-slate-400">The platform turns skills into structured profiles, safer service listings, verified trust signals, and clearer project workflows.</p>
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {[
                      "Profiles with skills and portfolios",
                      "AI matching and job recommendations",
                      "Guardian consent and verification",
                      "Protected communication and payments"
                    ].map((item, idx) => {
                      return (
                        <li key={idx} className="flex items-start gap-2.5">
                          <Zap className="mt-1 h-3.5 w-3.5 shrink-0 text-emerald-400" />
                          <span className="text-sm font-semibold text-slate-700 dark:text-slate-300 leading-relaxed">{item}</span>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. WORKFLOW ROADMAP TRACK */}
        <section className="relative isolate mx-4 my-24 max-w-[1300px] overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#090e1a] px-6 py-20 shadow-xl sm:mx-auto sm:px-12 sm:py-28">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-[10%] top-[10%] h-[500px] w-[500px] rounded-full bg-indigo-500/10 blur-[120px]" />
            <div className="absolute -right-[10%] bottom-[10%] h-[500px] w-[500px] rounded-full bg-fuchsia-500/10 blur-[120px]" />
          </div>

          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">A practical path from skill to earning</h2>
            <p className="mt-4 text-lg text-slate-400 font-medium">TeenVerseHub encourages teenagers to grow through focused skills, small projects, and responsible systems.</p>
          </div>

          <SpreadGroup className="relative z-10 mt-16 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-10">
            {roadmapSteps.map((step, i) => {
              const StepIcon = ICON_REGISTRY[step.icon]
              return (
                <SpreadItem key={i} direction={i === 0 ? -1 : 1}>
                  <div className={`h-full rounded-[2rem] border p-8 backdrop-blur-xl ${
                    step.theme === 'indigo' ? 'border-indigo-500/20 bg-indigo-950/20' : 'border-fuchsia-500/20 bg-fuchsia-950/20'
                  }`}>
                    <div className="flex items-center gap-4 border-b border-white/10 pb-5">
                      <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                        step.theme === 'indigo' ? 'bg-indigo-500/20' : 'bg-fuchsia-500/20'
                      }`}>
                        <StepIcon className={`h-5 w-5 ${step.iconColor}`} />
                      </div>
                      <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                    </div>

                    <ul className="mt-6 space-y-4">
                      {step.points.map((point, idx) => {
                        return (
                          <li key={idx} className="flex items-start gap-3">
                            <div className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${
                              step.theme === 'indigo' ? 'bg-indigo-400' : 'bg-fuchsia-400'
                            }`} />
                            <span className="text-base text-slate-300 font-medium leading-relaxed">{point}</span>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                </SpreadItem>
              )
            })}
          </SpreadGroup>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-10 mt-10 rounded-[2rem] border border-rose-500/20 bg-rose-950/20 p-8 backdrop-blur-md"
          >
            <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-rose-500/20 text-rose-400 shadow-sm">
                <AlertTriangle className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white">Teen Earning Principle</h4>
                <p className="mt-1 text-sm text-slate-400 font-medium leading-relaxed">TeenVerseHub promotes practical experience, legal and safer earning systems, and skill-first growth instead of unsafe shortcuts.</p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* 5. FINAL CALL TO ACTION */}
        <section className="relative overflow-hidden bg-gradient-to-t from-[#0f172a] to-[#030712] px-4 py-24 text-center sm:px-6 sm:py-32">
          <motion.div 
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', damping: 20 }}
            className="relative z-10 mx-auto max-w-4xl"
          >
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-48 h-48 bg-indigo-500/10 rounded-full blur-2xl" />
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-6xl">
              Start with skills, proof, and protection.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-400 font-medium">
              TeenVerseHub helps teenagers turn digital skills into safer online opportunities with profiles, portfolios, verification, and platform workflows.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <CircleHoverButton href={SITE.appUrl} isPrimary={true}>
                <span>Open the Platform</span>
              </CircleHoverButton>

              <CircleHoverButton href="/guardian-guide" isPrimary={false}>
                <span>Guardian Guide</span>
              </CircleHoverButton>
            </div>
          </motion.div>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}