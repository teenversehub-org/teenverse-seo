'use client'

import { useRef, useState, useEffect, isValidElement, cloneElement } from 'react'
import Link from 'next/link'
import {
  AlertTriangle,
  BadgeCheck,
  Briefcase,
  CheckCircle2,
  ShieldCheck,
  TrendingUp,
  Zap,
  ArrowRight,
  Users,
  Video,
  FileText,
  Layout,
  Target,
  MessageSquare,
  Lightbulb,
  Handshake,
  Clock,
  Search,
  Star,
  ChevronDown
} from 'lucide-react'
import { motion, useReducedMotion, useMotionValue, useTransform, useSpring, useScroll, useVelocity, AnimatePresence } from 'framer-motion'

import { SITE, buildMetadata } from '../lib/site'
import StructuredData from '../components/StructuredData'
import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'

// ─── DATA CONFIGURATIONS ──────────────────────────────────────────────────────
const pageFeatures = [
  {
    icon: <BadgeCheck className="h-8 w-8" />,
    title: 'Portfolio-Based Talent',
    description:
      'TeenVerseHub focuses on helping teens show their skills through profiles, sample work, service descriptions, and portfolio proof instead of only claiming experience.',
    span: 'md:col-span-6',
    glow: 'from-indigo-500/10 via-indigo-500/5 to-transparent',
  },
  {
    icon: <Briefcase className="h-8 w-8" />,
    title: 'Startup-Friendly Digital Services',
    description:
      'Startups and creators can look for support in video editing, thumbnails, content writing, design, research, social media tasks, creator support, and simple website-related work.',
    span: 'md:col-span-6',
    glow: 'from-blue-500/10 via-blue-500/5 to-transparent',
  },
  {
    icon: <ShieldCheck className="h-8 w-8" />,
    title: 'Responsible Teen Collaboration',
    description:
      'TeenVerseHub encourages clear communication, reviewable work, fair expectations, and age-aware project planning when clients collaborate with young freelancers.',
    span: 'md:col-span-5',
    glow: 'from-emerald-500/10 via-emerald-500/5 to-transparent',
  },
  {
    icon: <TrendingUp className="h-8 w-8" />,
    title: 'Fresh Student Perspective',
    description:
      'Teen talent can bring platform-native creativity, short-form content instincts, gaming culture knowledge, social media awareness, and strong willingness to learn.',
    span: 'md:col-span-7',
    glow: 'from-fuchsia-500/10 via-fuchsia-500/5 to-transparent',
  },
]

const serviceCategories = [
  {
    icon: <Video className="h-7 w-7" />,
    title: 'Video Editing and Creator Clips',
    description:
      'Hire teens for short-form edits, creator clips, gaming highlights, reels, YouTube Shorts, and basic editing support.',
  },
  {
    icon: <FileText className="h-7 w-7" />,
    title: 'Content Writing and Research',
    description:
      'Get help with captions, blog drafts, simple SEO content, topic research, scripts, summaries, and content repurposing.',
  },
  {
    icon: <Layout className="h-7 w-7" />,
    title: 'Design and Website Support',
    description:
      'Work with students on basic design tasks, landing page ideas, simple UI concepts, thumbnails, graphics, and portfolio-style website help.',
  },
  {
    icon: <MessageSquare className="h-7 w-7" />,
    title: 'Social Media and Community Help',
    description:
      'Find support for content planning, post ideas, community tasks, creator operations, simple moderation assistance, and online research.',
  },
]

const clientBenefits = [
  'Access young digital talent that understands modern internet culture',
  'Find students interested in creative, tech, content, and creator work',
  'Review profile details, service descriptions, and portfolio samples',
  'Start with small tasks before moving to larger projects',
  'Support teenagers in building real-world experience',
  'Get beginner-friendly help for startup and creator workflows',
]

const hiringTips = [
  'Choose a clear service category before reaching out',
  'Explain the project goal in simple language',
  'Share deadline, deliverables, budget, and revision expectations',
  'Start with a small project if the freelancer is new',
  'Give feedback respectfully and professionally',
  'Avoid unclear tasks, adult work, illegal requests, or exploitative work',
]

const goodProjectExamples = [
  'Edit 5 short-form videos from raw clips',
  'Create 3 YouTube thumbnail concepts',
  'Write 10 social media captions for a startup page',
  'Research 20 creator partnership leads',
  'Draft a simple SEO blog outline',
  'Design basic graphics for a student-led campaign',
  'Organize content ideas for a YouTube or Instagram page',
  'Help improve a simple portfolio or landing page layout',
]

const roadmapSteps = [
  {
    title: 'Before Hiring',
    theme: 'indigo',
    icon: <Zap className="h-6 w-6 text-indigo-500 dark:text-indigo-400" />,
    points: [
      'Review the teen freelancer profile and portfolio samples',
      'Choose a clear service category',
      'Define deliverables, deadline, and revision scope',
      'Start with a small beginner-friendly project',
    ],
  },
  {
    title: 'During Work',
    theme: 'fuchsia',
    icon: <TrendingUp className="h-6 w-6 text-fuchsia-500 dark:text-fuchsia-400" />,
    points: [
      'Keep communication clear and professional',
      'Give specific feedback instead of vague criticism',
      'Avoid changing the scope without discussing it',
      'Leave useful feedback that helps the teen improve',
    ],
  },
]

const trustPoints = [
  {
    icon: <Target className="h-7 w-7" />,
    title: 'Clear Scope',
    description:
      'A clear project scope helps both the client and teen freelancer understand exactly what needs to be delivered.',
  },
  {
    icon: <Clock className="h-7 w-7" />,
    title: 'Realistic Deadlines',
    description:
      'Teen freelancers may balance school, learning, and projects, so realistic timelines create better results.',
  },
  {
    icon: <Handshake className="h-7 w-7" />,
    title: 'Respectful Collaboration',
    description:
      'TeenVerseHub encourages respectful, professional collaboration between clients and young digital talent.',
  },
  {
    icon: <Star className="h-7 w-7" />,
    title: 'Portfolio Growth',
    description:
      'Completed work can help teens build stronger portfolios, confidence, and early professional experience.',
  },
]

const seoFaqs = [
  {
    question: 'Can startups hire teen freelancers on TeenVerseHub?',
    answer:
      'Yes. TeenVerseHub is built to help startups, creators, and small teams discover teen digital talent for beginner-friendly tasks such as editing, content, design, research, and creator support.',
  },
  {
    question: 'What type of teen freelancers can clients find?',
    answer:
      'Clients can look for teens interested in video editing, thumbnails, writing, social media support, design, simple web work, creator operations, and digital research tasks.',
  },
  {
    question: 'Does TeenVerseHub guarantee freelancer quality?',
    answer:
      'No. TeenVerseHub does not guarantee the quality of work, project success, earnings, or client results. Clients should review profiles, samples, scope, and communication before starting work.',
  },
  {
    question: 'What is the safest way to hire a teen freelancer?',
    answer:
      'The safest approach is to start with a small project, keep the scope clear, use professional communication, avoid vague requests, and ensure the work is appropriate for a teenager.',
  },
  {
    question: 'Why should clients hire student freelancers?',
    answer:
      'Student freelancers can bring fresh ideas, strong interest in digital tools, social media awareness, creator culture knowledge, and willingness to learn through real projects.',
  },
  {
    question: 'What should clients avoid when working with teen freelancers?',
    answer:
      'Clients should avoid unclear work, unrealistic deadlines, unpaid trial work, adult or illegal tasks, exploitative requests, and communication that would not be appropriate for a guardian to review.',
  },
]

// ─── SCHEMAS ──────────────────────────────────────────────────────────────────
const pageUrl = `${SITE.baseUrl}/hire-teen-freelancers`
const pageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  headline: 'Hire Teen Freelancers | Student Digital Talent for Startups and Creators',
  name: 'Hire Teen Freelancers | Student Digital Talent for Startups and Creators',
  description: 'Hire teen freelancers and student digital talent through TeenVerseHub for video editing, content writing, design, social media support, research, creator work, and beginner-friendly digital projects.',
  author: { '@type': 'Organization', name: SITE.shortName },
  publisher: { '@type': 'Organization', name: SITE.shortName },
  mainEntityOfPage: pageUrl,
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: seoFaqs.map((faq) => {
    return {
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    }
  }),
}

// ─── hyper-smooth CORE INTERACTIVE COMPONENTS ─────────────────────────────────
function LiquidMorphBackground() {
  const prefersReducedMotion = useReducedMotion()
  if (prefersReducedMotion) return null

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-0 opacity-40 dark:opacity-20">
      <svg className="absolute -right-20 -top-20 w-[900px] h-[900px] blur-3xl" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <motion.path
          fill="url(#gradient-mesh)"
          animate={{
            d: [
              "M42,-65.2C54.3,-57.3,64.1,-44.4,69.5,-29.5C74.9,-14.6,75.9,2.4,71.1,17.5C66.4,32.5,55.9,45.6,42.5,54.2C29.2,62.8,13.1,66.9,-3.1,71.4C-19.3,75.9,-35.5,80.8,-48,73.1C-60.5,65.4,-69.2,45,-73.4,27.2C-77.5,9.3,-77.1,-6,-71.6,-21C-66.2,-36,-55.7,-50.7,-42.5,-58.6C-29.3,-66.5,-13.1,-67.7,2.4,-71.2C17.9,-74.7,31.8,-69.5,42,-65.2Z",
              "M35.9,-50.5C47.6,-43.2,56.9,-31.6,62.1,-17.9C67.3,-4.2,68.4,11.6,63.3,25.5C58.1,39.3,46.7,51.2,33.3,59.3C19.9,67.4,4.5,71.7,-10.8,70.1C-26,68.4,-41.2,60.8,-52.5,49.5C-63.8,38.2,-71.4,23.1,-73.4,7.2C-75.4,-8.7,-72,-25.4,-62.5,-35.8C-53,-46.2,-37.5,-50.3,-23.4,-54.5C-9.3,-58.7,3.4,-63,16.9,-61.4C30.4,-59.9,24.2,-57.8,35.9,-50.5Z",
              "M46.1,-58.9C59.4,-50.4,68.5,-35.2,72.5,-18.9C76.4,-2.7,75.3,14.6,68.9,29C62.6,43.4,51.1,55,37.3,62.3C23.5,69.7,7.3,72.9,-8.8,71.7C-24.9,70.5,-40.9,65,-53.2,54.8C-65.5,44.7,-74.1,29.9,-77.3,13.6C-80.5,-2.8,-78.3,-20.7,-69.4,-34.1C-60.5,-47.4,-44.8,-56.2,-29.4,-62.4C-14.1,-68.6,1,-72.2,15.4,-70.4C29.9,-68.5,32.8,-67.3,46.1,-58.9Z"
            ]
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          transform="translate(100 100)"
        />
        <defs>
          <linearGradient id="gradient-mesh" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#818cf8" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#ec4899" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
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

  const baseStyles = "relative overflow-hidden inline-flex h-12 w-full items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-bold transition-all duration-300 shadow-md sm:w-auto z-10"
  const primaryTheme = "bg-slate-950 text-white dark:bg-white dark:text-slate-950"
  const secondaryTheme = "border border-zinc-200 bg-white/70 text-slate-900 backdrop-blur-lg dark:border-white/20 dark:bg-white/5 dark:text-white"

  return (
    <motion.div whileHover={{ scale: 1.03, y: -1 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
      <a
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
              transition={{ duration: 0.4, ease: "easeOut" }}
              style={{ left: mousePosition.x, top: mousePosition.y }}
              className={`absolute w-32 h-32 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none mix-blend-difference ${
                isPrimary ? "bg-white/20" : "bg-indigo-500/10"
              }`}
            />
          )}
        </AnimatePresence>
        <span className="relative z-10 flex items-center gap-2">{children}</span>
      </a>
    </motion.div>
  )
}

function PerCharacterWave({ children, className = "" }) {
  const words = children.split(" ")
  return (
    <h1 className={className}>
      {words.map((word, wordIdx) => {
        return (
          <span key={wordIdx} className="inline-block whitespace-nowrap mr-[0.22em]">
            {word.split("").map((char, charIdx) => {
              return (
                <span key={charIdx} className="inline-block overflow-hidden pb-1">
                  <motion.span
                    className="inline-block"
                    initial={{ y: "115%" }}
                    animate={{ y: 0 }}
                    transition={{
                      type: "spring",
                      damping: 18,
                      stiffness: 130,
                      delay: (wordIdx * 3 + charIdx) * 0.02
                    }}
                  >
                    {char}
                  </motion.span>
                </span>
              )
            })}
          </span>
        )
      })}
    </h1>
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
      viewport={{ once: true, amount: 0.08 }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.06 } }
      }}
    >
      {children}
    </motion.div>
  )
}

function SpreadItem({ children, className = '', direction = 1 }) {
  const prefersReducedMotion = useReducedMotion()
  const cardRef = useRef(null)

  const { scrollY } = useScroll()
  const scrollVelocity = useVelocity(scrollY)
  const rawSkew = useTransform(scrollVelocity, [-2000, 2000], [-5, 5])
  const skewSpring = useSpring(rawSkew, { damping: 25, stiffness: 220 })

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const mouseXSpring = useSpring(x, { damping: 30, stiffness: 300 })
  const mouseYSpring = useSpring(y, { damping: 30, stiffness: 300 })

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [10, -10])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-10, 10])
  const glowX = useTransform(mouseXSpring, [-0.5, 0.5], ['0%', '100%'])
  const glowY = useTransform(mouseYSpring, [-0.5, 0.5], ['0%', '100%'])

  const handleMouseMove = (e) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left - width / 2
    const mouseY = e.clientY - rect.top - height / 2
    x.set(mouseX / width)
    y.set(mouseY / height)
  }

  if (prefersReducedMotion) return <div className={className}>{children}</div>

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ rotateX, rotateY, skewY: skewSpring, transformStyle: 'preserve-3d' }}
      className={`${className} relative overflow-hidden rounded-[2rem] bg-transparent`}
      variants={{
        hidden: { opacity: 0, y: 40, x: direction * 25, scale: 0.94 },
        show: { opacity: 1, y: 0, x: 0, scale: 1, transition: { type: 'spring', damping: 20, stiffness: 90 } }
      }}
      whileHover={{ scale: 1.02, z: 15 }}
    >
      <motion.div 
        style={{ left: glowX, top: glowY, background: 'radial-gradient(circle, rgba(129,140,248,0.12) 0%, transparent 65%)' }}
        className="absolute -translate-x-1/2 -translate-y-1/2 w-72 h-72 pointer-events-none z-0"
      />
      <div style={{ transform: 'translateZ(20px)', transformStyle: 'preserve-3d' }} className="h-full w-full relative z-10">
        {children}
      </div>
    </motion.div>
  )
}

function FAQAccordionItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-zinc-200 dark:border-zinc-800 last:border-b-0">
      <button
        onClick={() => { return setIsOpen(!isOpen) }}
        className="flex w-full items-center justify-between py-6 text-left font-bold text-slate-950 dark:text-white"
      >
        <span className="text-xl tracking-tight">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ type: "spring", damping: 15 }}
          className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-500"
        >
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: "spring", damping: 22, stiffness: 120 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-base leading-relaxed text-slate-600 dark:text-slate-400">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// ─── MASTER PAGE CONTAINER ────────────────────────────────────────────────────
export default function HireTeenFreelancersPage() {
  return (
    <>
      <StructuredData data={pageSchema} />
      <StructuredData data={faqSchema} />
      <SiteHeader />

      <main className="tvh-page-shell selection:bg-[#5b245e] selection:text-white relative min-h-screen bg-[#fbfaf7] text-slate-900 dark:bg-[#070b10] dark:text-white transition-colors duration-300 overflow-x-hidden">
        
        {/* HERO SECTION */}
        <section className="relative isolate flex min-h-[90vh] flex-col items-center justify-center overflow-hidden px-4 pb-20 pt-32 sm:px-6">
          <div className="tv-grid-mesh pointer-events-none absolute inset-0 opacity-40 dark:opacity-20" />
          <LiquidMorphBackground />

          <div className="relative z-10 mx-auto max-w-5xl text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring', damping: 15 }}
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white px-5 py-2 text-sm font-bold uppercase tracking-widest text-indigo-700 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-indigo-300"
            >
              <BadgeCheck className="h-4 w-4" />
              For Startups, Creators, and Small Teams
            </motion.div>

            <PerCharacterWave className="text-[2.75rem] font-black leading-[1.05] tracking-tight text-slate-950 dark:text-white sm:text-7xl md:text-8xl">
              Hire Teen Digital Talent
            </PerCharacterWave>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-slate-600 dark:text-slate-400 md:text-xl"
            >
              TeenVerseHub helps startups, creators, and small teams discover young digital talent for beginner-friendly projects. Hire teen freelancers for creative, content, social media, design, research, and simple tech-related work while keeping expectations clear and collaboration responsible.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-10 flex w-full flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <CircleHoverButton href="/freelance-jobs-for-teens" isPrimary={true}>
                <span>View Service Categories</span>
                <ArrowRight className="h-5 w-5" />
              </CircleHoverButton>

              <CircleHoverButton href="/safety" isPrimary={false}>
                <ShieldCheck className="h-5 w-5" />
                <span>Review Safety</span>
              </CircleHoverButton>
            </motion.div>
          </div>

          <SpreadGroup className="relative z-10 mt-20 grid w-full max-w-4xl grid-cols-1 gap-px overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-200/50 shadow-md dark:border-white/10 dark:bg-white/10 sm:mt-24 sm:grid-cols-3">
            {[
              { label: 'Talent Signal', value: 'Portfolio First' },
              { label: 'Workflow', value: 'Clear Scope' },
              { label: 'Best For', value: 'Startups + Creators' },
            ].map((stat, idx) => {
              return (
                <div key={idx} className="bg-white/90 p-8 text-center backdrop-blur-xl dark:bg-[#0f172a]/90">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                    {stat.label}
                  </div>
                  <div className="mt-2 text-2xl font-black text-slate-950 dark:text-white">
                    {stat.value}
                  </div>
                </div>
              )
            })}
          </SpreadGroup>
        </section>

        {/* FEATURE SECTIONS */}
        <section className="relative overflow-hidden px-4 py-24 sm:px-6 sm:py-32">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ type: 'spring', damping: 22, stiffness: 90 }}
              className="max-w-3xl"
            >
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
                A cleaner way to work with young digital talent.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
                Instead of searching through random social media DMs or unclear offers, TeenVerseHub gives clients a more focused way to explore teen freelancers, understand what they can do, and start with simple, clearly defined projects.
              </p>
            </motion.div>

            <SpreadGroup className="mt-16 grid grid-cols-1 gap-6 md:mt-20 md:grid-cols-12 md:auto-rows-fr md:gap-8">
              {pageFeatures.map((feature, i) => {
                return (
                  <SpreadItem key={i} direction={i % 2 === 0 ? -1 : 1} className={feature.span}>
                    <div className="h-full relative overflow-hidden rounded-[2rem] border border-zinc-200/80 bg-white/70 p-8 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.03] flex flex-col justify-between">
                      <div className={`pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full blur-[80px] bg-gradient-to-br ${feature.glow}`} />
                      <div>
                        <div className="relative z-10 mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#191724] text-white dark:bg-white dark:text-slate-950 shadow-md">
                          {feature.icon}
                        </div>
                        <h3 className="relative z-10 text-2xl font-bold tracking-tight text-slate-950 dark:text-white">
                          {feature.title}
                        </h3>
                        <p className="relative z-10 mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-300 font-medium">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </SpreadItem>
                )
              })}
            </SpreadGroup>
          </div>
        </section>

        {/* SERVICE CATEGORIES MODULE */}
        <section className="border-y border-zinc-200 bg-white/50 px-4 py-24 dark:border-zinc-800 dark:bg-[#070b14]/40 sm:px-6 sm:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-4xl text-center flex flex-col items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-zinc-300 shadow-sm"
              >
                <Search className="h-3.5 w-3.5" />
                Hire by Skill Category
              </motion.div>

              <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
                Digital services teen freelancers can support.
              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-600 dark:text-slate-400 font-medium">
                TeenVerseHub is useful for clients who need small, clear, digital tasks completed by motivated students. These categories are easier to explain, review, and improve through portfolio work.
              </p>
            </div>

            <SpreadGroup className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {serviceCategories.map((category, index) => {
                return (
                  <SpreadItem key={index} direction={(index % 4) - 1.5}>
                    <div className="h-full rounded-[2rem] border border-zinc-200 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-white/[0.04]">
                      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-950 text-white dark:bg-white/10 dark:text-white shadow-sm">
                        {category.icon}
                      </div>
                      <h3 className="text-xl font-bold text-slate-950 dark:text-white leading-tight">
                        {category.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300 font-medium">
                        {category.description}
                      </p>
                    </div>
                  </SpreadItem>
                )
              })}
            </SpreadGroup>
          </div>
        </section>

        {/* BENEFITS & PROTOCOLS GRID */}
        <section className="relative overflow-hidden px-4 py-24 sm:px-6 sm:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-24">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ type: 'spring', damping: 20 }}
                className="lg:sticky lg:top-32 lg:col-span-5 lg:h-max"
              >
                <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-950 dark:text-white sm:text-5xl">
                  Young talent needs structure. Clients need clarity.
                </h2>
                <p className="mt-6 text-base leading-relaxed text-slate-600 dark:text-slate-400 font-medium">
                  TeenVerseHub aims to reduce uncertainty for both sides by making skills visible, expectations clearer, and project communication easier to understand before work begins.
                </p>
                <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-400 font-medium">
                  For startups and creators, this means hiring teen freelancers for smaller digital tasks without turning every project into a complex hiring process. For students, it means building real experience one project at a time.
                </p>
              </motion.div>

              <div className="flex flex-col gap-8 lg:col-span-7">
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  className="relative rounded-[2rem] border border-zinc-200/80 bg-white/80 p-8 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.02]"
                >
                  <div className="mb-6 flex items-center gap-3 border-b border-zinc-100 pb-4 dark:border-zinc-800">
                    <Users className="h-6 w-6 text-indigo-500" />
                    <h3 className="text-xl font-bold text-slate-950 dark:text-white">
                      Why Clients Use TeenVerseHub
                    </h3>
                  </div>
                  <ul className="space-y-3.5">
                    {clientBenefits.map((item, idx) => {
                      return (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-indigo-500" />
                          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                            {item}
                          </span>
                        </li>
                      )
                    })}
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  className="relative rounded-[2rem] border border-zinc-200/80 bg-white/80 p-8 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.02]"
                >
                  <div className="mb-6 flex items-center gap-3 border-b border-zinc-100 pb-4 dark:border-zinc-800">
                    <Lightbulb className="h-6 w-6 text-emerald-500" />
                    <h3 className="text-xl font-bold text-slate-950 dark:text-white">
                      How to Hire Responsibly
                    </h3>
                  </div>
                  <p className="mb-4 text-sm font-medium text-slate-600 dark:text-slate-400">
                    Hiring teen freelancers works best when the project is clear, age-appropriate, and easy to review.
                  </p>
                  <ul className="space-y-3.5">
                    {hiringTips.map((item, idx) => {
                      return (
                        <li key={idx} className="flex items-start gap-3">
                          <Zap className="mt-1 h-4 w-4 shrink-0 text-emerald-500" />
                          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                            {item}
                          </span>
                        </li>
                      )
                    })}
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* SCOPE ALIGNMENT EXAMPLES */}
        <section className="border-y border-zinc-200 bg-white/50 px-4 py-24 dark:border-zinc-800 dark:bg-[#070b14]/40 sm:px-6 sm:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
                Project examples that fit teen freelancers.
              </h2>
              <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-600 dark:text-slate-400 font-medium">
                The best teen freelance projects are specific, limited in scope, and easy to review. These examples are useful for startups, creators, student communities, and small teams looking for beginner-friendly digital support.
              </p>
            </div>

            <SpreadGroup className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {goodProjectExamples.map((example, index) => {
                return (
                  <SpreadItem key={index} direction={index % 2 === 0 ? -1 : 1}>
                    <div className="h-full rounded-[2rem] border border-zinc-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.04]">
                      <div className="mb-5 flex h-9 w-9 items-center justify-center rounded-full bg-zinc-100 text-zinc-800 text-xs font-bold dark:bg-zinc-800 dark:text-zinc-300">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                      <p className="text-base font-bold leading-relaxed text-slate-800 dark:text-slate-200">
                        {example}
                      </p>
                    </div>
                  </SpreadItem>
                )
              })}
            </SpreadGroup>
          </div>
        </section>

        {/* CRITERIA ALIGNMENT MARGIN */}
        <section className="relative overflow-hidden px-4 py-24 sm:px-6 sm:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
                Better hiring starts with better expectations.
              </h2>
              <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-600 dark:text-slate-400 font-medium">
                TeenVerseHub is not about giving teenagers random work. The goal is to help clients and teens work around clear services, portfolio proof, beginner-friendly tasks, and respectful communication.
              </p>
            </div>

            <SpreadGroup className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {trustPoints.map((point, index) => {
                return (
                  <SpreadItem key={index} direction={(index % 4) - 1.5}>
                    <div className="h-full rounded-[2rem] border border-zinc-200 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-white/[0.04]">
                      <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl bg-slate-950 text-white dark:bg-white/10 shadow-sm">
                        {point.icon}
                      </div>
                      <h3 className="text-xl font-bold text-slate-950 dark:text-white leading-tight">
                        {point.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300 font-medium">
                        {point.description}
                      </p>
                    </div>
                  </SpreadItem>
                )
              })}
            </SpreadGroup>
          </div>
        </section>

        {/* WORKFLOW GUARDRAILS FRAMEWORK */}
        <section className="relative isolate mx-4 my-24 max-w-[1300px] overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#090e1a] px-6 py-20 shadow-xl sm:mx-auto sm:px-12 sm:py-28">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-[10%] top-[10%] h-[500px] w-[500px] rounded-full bg-indigo-500/10 blur-[120px]" />
            <div className="absolute -right-[10%] bottom-[10%] h-[500px] w-[500px] rounded-full bg-fuchsia-500/10 blur-[120px]" />
          </div>

          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
              Hire teen talent with clearer guardrails.
            </h2>
            <p className="mt-4 text-lg text-slate-400 font-medium">
              The hiring flow should make scope, responsibility, and expectations clear from the start.
            </p>
          </div>

          <SpreadGroup className="relative z-10 mt-16 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-10">
            {roadmapSteps.map((step, i) => {
              return (
                <SpreadItem key={i} direction={i === 0 ? -1 : 1}>
                  <div className={`h-full rounded-[2rem] border p-8 backdrop-blur-xl ${
                    step.theme === 'indigo' ? 'border-indigo-500/20 bg-indigo-950/20' : 'border-fuchsia-500/20 bg-fuchsia-950/20'
                  }`}>
                    <div className="flex items-center gap-4 border-b border-white/10 pb-5">
                      <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                        step.theme === 'indigo' ? 'bg-indigo-500/20' : 'bg-fuchsia-500/20'
                      }`}>
                        {step.icon}
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
                <h4 className="text-xl font-bold text-white">Responsible Hiring</h4>
                <p className="mt-1 text-sm text-slate-400 font-medium leading-relaxed">
                  TeenVerseHub is built for real opportunities, not exploitative work. Clients should respect age-aware expectations, clear communication, fair project scope, and beginner-friendly collaboration.
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* LONG-FORM VALUE ANALYTICS */}
        <section className="relative overflow-hidden px-4 py-24 sm:px-6 sm:py-32">
          <div className="mx-auto max-w-5xl">
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              className="rounded-[2.5rem] border border-zinc-200 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-white/[0.02] sm:p-12"
            >
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white sm:text-4xl">
                Why hiring teen freelancers can work well for digital teams
              </h2>

              <div className="mt-6 space-y-5 text-base sm:text-lg leading-relaxed text-slate-600 dark:text-slate-300 font-medium">
                <p>
                  Many startups, creators, student communities, gaming pages, and small businesses need digital help but do not always need a full-time employee or a large agency. They may need a few short videos edited, thumbnails designed, captions written, content ideas organized, or research completed. These are the kinds of beginner-friendly projects where teen freelancers can learn while also creating useful value.
                </p>
                <p>
                  TeenVerseHub focuses on making this process more structured. Instead of hiring young talent through random messages or unclear informal arrangements, clients can think in terms of services, portfolios, deliverables, and communication. This makes the work easier to review and helps teenagers build confidence with real project experience.
                </p>
                <p>
                  Hiring teen freelancers should always be done responsibly. The work should be age-appropriate, clearly explained, and fair. Clients should avoid vague tasks, unrealistic deadlines, unpaid trial work, adult content, illegal services, or anything that would be uncomfortable for a parent or guardian to review. When projects are small, clear, and skill-focused, young freelancers have a better chance to deliver good work and improve over time.
                </p>
                <p>
                  For clients, TeenVerseHub can become a practical place to discover young creators, student designers, beginner video editors, content helpers, and digital learners. For teens, it can become a place to move from sample work to real work while building a stronger portfolio for future freelance, startup, or career opportunities.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ACCORDION DISCLOSURE FAQS */}
        <section className="border-y border-zinc-200 bg-white/50 px-4 py-24 dark:border-zinc-800 dark:bg-[#070b14]/40 sm:px-6 sm:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
                Questions about hiring teen freelancers
              </h2>
              <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-600 dark:text-slate-400 font-medium">
                These answers help clients understand how to approach teen freelance work on TeenVerseHub responsibly.
              </p>
            </div>

            <motion.div 
              layout
              className="mt-16 max-w-4xl mx-auto p-6 rounded-[2rem] border border-zinc-200 bg-white shadow-sm dark:border-white/10 dark:bg-[#070b10]"
            >
              {seoFaqs.map((faq) => {
                return (
                  <FAQAccordionItem key={faq.question} question={faq.question} answer={faq.answer} />
                )
              })}
            </motion.div>
          </div>
        </section>

        {/* ACTION ENCHANTED FINAL CTA */}
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
              Find capable teen talent with clearer expectations.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-400 font-medium">
              TeenVerseHub helps startups and creators explore emerging digital skills while supporting more structured, respectful, and beginner-friendly work for teenagers.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <CircleHoverButton href={SITE.appUrl} isPrimary={true}>
                <span>Start Hiring</span>
              </CircleHoverButton>

              <CircleHoverButton href="/safety" isPrimary={false}>
                <span>Review Safety</span>
              </CircleHoverButton>
            </div>
          </motion.div>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}