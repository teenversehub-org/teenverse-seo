'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRef, useState, useEffect, isValidElement, cloneElement } from 'react'
import {
  AlertTriangle,
  BadgeCheck,
  Briefcase,
  CheckCircle2,
  Layout,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Zap,
  ArrowRight,
  MonitorPlay,
  FileText,
  Video,
  PenTool,
  Palette,
  Search,
  Users,
  Target,
  Star,
  MessageSquare,
  ChevronDown,
  Eye,
  Lock,
  Award,
  Shield,
  Building,
  Clock,
  Handshake
} from 'lucide-react'
import { motion, useReducedMotion, useScroll, useSpring, useTransform, useMotionValue, useVelocity, AnimatePresence } from 'framer-motion'

import SiteFooter from '../components/SiteFooter'
import SiteHeader from '../components/SiteHeader'
import StructuredData from '../components/StructuredData'
import { SITE } from '../lib/site'

const loginUrl = SITE.appUrl

// ─── ICON REGISTRY MATRIX (ELIMINATES SERIALIZATION BUGS) ─────────────────────
const ICON_REGISTRY = {
  monitorPlay: MonitorPlay,
  layout: Layout,
  fileText: FileText,
  zap: Zap,
  video: Video,
  palette: Palette,
  penTool: PenTool,
  search: Search,
  users: Users,
  trendingUp: TrendingUp,
  target: Target,
  clock: Clock,
  handshake: Handshake,
  star: Star
}

// ─── DATA CONFIGURATIONS ──────────────────────────────────────────────────────
const proofPoints = [
  ['14-21', 'student creators', 'Vetted age profiles'],
  ['8+', 'starter skills', 'No prior experience needed'],
  ['Under 18', 'guardian-aware flow', 'Safety-first verification'],
  ['10%', 'basic plan fee', 'Transparent platform terms'],
]

const audienceFunnels = [
  {
    id: 'students',
    icon: Users,
    title: 'Students',
    kicker: 'Build your proof',
    desc: 'Turn sample projects into verified proof of work. Showcase your real digital capabilities on a clean public profile, discover beginner tasks from fast-growing startups, and earn in a safe, structured space built around your workflow.'
  },
  {
    id: 'guardians',
    icon: Shield,
    title: 'Guardians',
    kicker: 'Complete safety controls',
    desc: 'Step into a marketplace designed with family clarity. Follow verification requests, review parent-aware consent loops, and track ecosystem wallet activity with full monitoring privileges.'
  },
  {
    id: 'startups',
    icon: Building,
    title: 'Startups',
    kicker: 'Source native builders',
    desc: 'Connect with platform-native video editors, frontend learners, and design builders. Hire teen talent for small digital tasks and creative operations without complex contract friction.'
  }
]

const pageFeatures = [
  { icon: 'monitorPlay', title: 'Creative Services', description: 'Teens can explore beginner-friendly creative services such as short-form video editing, thumbnails, simple graphics, posters, presentation layouts, and creator assets.', span: 'md:col-span-7', glow: 'from-blue-500/10 via-blue-500/5 to-transparent' },
  { icon: 'layout', title: 'Basic Tech and Web Services', description: 'Students interested in tech can build portfolio projects around landing pages, frontend basics, simple website edits, basic UI ideas, and beginner-friendly digital support.', span: 'md:col-span-5', glow: 'from-emerald-500/10 via-emerald-500/5 to-transparent' },
  { icon: 'fileText', title: 'Content Services', description: 'Teen freelancers can offer captions, blog drafts, SEO-friendly writing, scripts, newsletters, social media content, research notes, and content repurposing.', span: 'md:col-span-5', glow: 'from-fuchsia-500/10 via-fuchsia-500/5 to-transparent' },
  { icon: 'zap', title: 'Creator and Gaming Support', description: 'Teens who understand gaming, streaming, YouTube, reels, shorts, and creator culture can support clips, content ideas, channel assets, and simple creator operations.', span: 'md:col-span-7', glow: 'from-amber-500/10 via-amber-500/5 to-transparent' },
]

const serviceCategories = [
  { icon: 'video', title: 'Video Editing', description: 'Short-form edits, reels, YouTube Shorts, gaming highlights, creator clips, subtitles, simple transitions, and basic content cleanup.' },
  { icon: 'palette', title: 'Design and Visuals', description: 'Thumbnails, posters, social media graphics, presentation layouts, simple branding ideas, and creator asset design.' },
  { icon: 'penTool', title: 'Writing and Captions', description: 'Captions, scripts, blog drafts, product descriptions, SEO-friendly outlines, newsletters, and content repurposing.' },
  { icon: 'search', title: 'Research and Digital Tasks', description: 'Topic research, list building, competitor notes, content organization, startup research, and small digital support tasks.' },
  { icon: 'layout', title: 'Basic Web Support', description: 'Landing page ideas, simple website sections, frontend practice projects, portfolio pages, and basic layout improvements.' },
  { icon: 'users', title: 'Social Media Support', description: 'Content ideas, posting support, creator research, caption planning, hashtag research, and simple community tasks.' },
]

const expandedSkillsGrid = serviceCategories.map((category, index) => {
  return {
    ...category,
    desc: category.description,
    icon: ICON_REGISTRY[category.icon],
    angle: index * 60,
  }
})

const teenBenefits = [
  'Build real portfolio proof instead of only learning theory',
  'Start with small digital tasks that are easier to complete',
  'Learn communication, deadlines, feedback, and revisions',
  'Improve one skill at a time instead of chasing every trend',
  'Create samples that can help with future freelance or career opportunities',
  'Gain confidence by turning practice work into useful services',
]

const clientBenefits = [
  'Discover young talent with fresh digital instincts',
  'Find help for small creative, content, and startup tasks',
  'Review service descriptions and portfolio samples before working',
  'Start with beginner-friendly tasks instead of large complex projects',
  'Support teenagers while getting useful digital work completed',
  'Work with teens who understand social media and creator culture',
]

const roadmapSteps = [
  {
    title: 'Choose a Service',
    theme: 'indigo',
    icon: 'zap',
    iconColor: 'text-indigo-500 dark:text-indigo-400',
    points: [
      'Pick one skill category first',
      'Create three to five sample projects',
      'Write a clear service description',
      'Set beginner-friendly project boundaries',
    ],
  },
  {
    title: 'Build Trust',
    theme: 'fuchsia',
    icon: 'trendingUp',
    iconColor: 'text-fuchsia-500 dark:text-fuchsia-400',
    points: [
      'Use portfolio samples as proof',
      'Communicate clearly and professionally',
      'Deliver small projects consistently',
      'Update your portfolio after completed work',
    ],
  },
]

const timelineSteps = [
  {
    id: '01',
    title: 'Choose one starter skill',
    desc: 'Pick a focused service such as video editing, thumbnails, captions, research, or simple web support.',
  },
  {
    id: '02',
    title: 'Create portfolio proof',
    desc: 'Build three to five sample projects so clients can review actual work before trusting a beginner profile.',
  },
  {
    id: '03',
    title: 'Define a simple service',
    desc: 'Explain deliverables, turnaround time, revision limits, and project boundaries in clear language.',
  },
  {
    id: '04',
    title: 'Start with guided projects',
    desc: 'Use safer communication, clear scope, and guardian-aware habits while completing small beginner-friendly tasks.',
  },
]

const portfolioServices = [
  'Short-form video edits and creator clips',
  'Thumbnails, graphics, and simple brand assets',
  'Landing page sections and portfolio website samples',
  'SEO writing, scripts, captions, and social content',
  'Research notes, list building, and startup support tasks',
  'Gaming highlights, stream assets, and creator content ideas',
]

const trustFlow = [
  'Clear service descriptions',
  'Visible portfolio examples',
  'Beginner-friendly deliverables',
  'Simple pricing expectations',
  'Professional communication',
  'Reviewable project scope',
]

const projectExamples = [
  'Edit 3 reels from raw clips',
  'Design 5 YouTube thumbnail ideas',
  'Write 10 Instagram captions',
  'Create a blog outline for a startup topic',
  'Build a simple personal portfolio page',
  'Research 20 creator collaboration leads',
  'Create a presentation layout for a startup project',
  'Organize content ideas for a YouTube channel',
]

const carouselProjects = [
  {
    id: 1,
    skill: 'Video editing',
    company: 'Creator studio',
    creator: 'Teen editor',
    title: 'Edit three short-form reels from raw clips',
    detail: 'Cut talking-head footage into punchy reels with captions, simple transitions, and clear export notes for review.',
  },
  {
    id: 2,
    skill: 'Design',
    company: 'Startup launch',
    creator: 'Teen designer',
    title: 'Create five thumbnail concepts for a YouTube series',
    detail: 'Design a small batch of thumbnail directions using consistent type, simple visual hierarchy, and reusable layout ideas.',
  },
  {
    id: 3,
    skill: 'Writing',
    company: 'Local brand',
    creator: 'Student writer',
    title: 'Draft captions and blog outlines for a campaign',
    detail: 'Prepare short captions, content angles, and SEO-friendly outlines that a client can refine before publishing.',
  },
  {
    id: 4,
    skill: 'Research',
    company: 'SaaS team',
    creator: 'Teen researcher',
    title: 'Research competitor notes for a product page',
    detail: 'Collect public examples, summarize patterns, and organize simple recommendations for a landing-page update.',
  },
]

const comparisonRows = [
  ['Generic freelance marketplaces', 'Built around teens, guardians, portfolios, and first projects'],
  ['Profiles without proof', 'Portfolio-first profiles with samples and service clarity'],
  ['Open-ended communication', 'Safer messaging, reporting, and clearer project boundaries'],
  ['Hard for beginners to start', 'Beginner-friendly categories and guided skill paths'],
]

const routes = [
  {
    title: 'For teen creators',
    text: 'Build your profile, show your work, and take your first project steps.',
    href: '/freelance-jobs-for-teens',
    image: '/graphics/gemini-svg.svg',
  },
  {
    title: 'For startup teams',
    text: 'Find young digital talent for content, design, research, and web support.',
    href: '/hire-teen-freelancers',
    image: '/graphics/gemini-svg (1).svg',
  },
  {
    title: 'For guardians',
    text: 'Understand consent, safety, verification, messaging, and payments.',
    href: '/guardian-guide',
    image: '/graphics/gemini-svg (2).svg',
  },
]

const safetyTips = [
  'Avoid jobs promising fast money with no real work',
  'Do not accept vague tasks without clear deliverables',
  'Avoid adult, illegal, or uncomfortable work requests',
  'Do not share sensitive personal information unnecessarily',
  'Keep work expectations clear before starting',
  'Ask a guardian or trusted adult when something feels unsafe',
]

const seoFaqs = [
  {
    question: 'What are good freelance jobs for teens?',
    answer:
      'Good freelance jobs for teens include video editing, thumbnails, content writing, captions, social media support, basic design, research tasks, simple website work, and creator support. These jobs are easier to show through portfolio samples and beginner-friendly deliverables.',
  },
  {
    question: 'Can beginners start freelancing on TeenVerseHub?',
    answer:
      'Yes. TeenVerseHub is designed for teenagers and students who may be starting as beginners. The best path is to choose one skill, create sample work, build a simple profile, and start with small projects.',
  },
  {
    question: 'Does TeenVerseHub guarantee freelance jobs or income?',
    answer:
      'No. TeenVerseHub does not guarantee jobs, clients, income, or project success. Results depend on skill quality, portfolio proof, communication, demand, and client decisions.',
  },
  {
    question: 'What should teens put in their portfolio?',
    answer:
      'Teens should add 3 to 5 strong samples related to one service. Examples include edited videos, thumbnails, captions, blog drafts, landing page mockups, graphics, or research samples.',
  },
  {
    question: 'How can teens stay safer while freelancing online?',
    answer:
      'Teens should avoid fast-money promises, vague work, adult or illegal tasks, unnecessary personal information sharing, and projects that are not clear enough for a guardian to review.',
  },
  {
    question: 'Why are digital skills useful for teenagers?',
    answer:
      'Digital skills help teenagers build confidence, portfolios, communication skills, and real-world experience. Skills like editing, writing, design, research, and basic web work can grow into future freelance or career opportunities.',
  },
]

const pageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  headline: 'Freelance Jobs for Teens',
  description:
    'A TeenVerseHub guide to beginner-friendly freelance jobs for teens, including video editing, design, writing, research, basic web support, portfolios, and safer online work habits.',
  author: { '@type': 'Organization', name: SITE.shortName },
  publisher: { '@type': 'Organization', name: SITE.shortName },
  mainEntityOfPage: `${SITE.baseUrl}/freelance-jobs-for-teens`,
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: seoFaqs.map((faq) => {
    return {
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    }
  }),
}

const platformPreviews = [
  { title: 'Profile Preview', kicker: 'Public Talent Proof', text: 'Displays active micro-credentials, sample asset paths, and parental identity confirmation stamps.' },
  { title: 'Project Dashboard', kicker: 'Guardrail Workspace', text: 'Keeps task milestones tracking transparent, files logged, and payment stages locked safely.' },
  { title: 'Guardian Safety View', kicker: 'Parent Tracking Deck', text: 'Provides real-time pipeline clarity over platform activity, verification requests, and wallet balances.' }
]

const useCaseQuotes = [
  { type: 'Student Perspective', quote: 'For a 16-year-old creator, the hardest part is proving skill. TeenVerseHub makes portfolio proof the starting point.', context: 'Active Video Editor' },
  { type: 'Guardian Perspective', quote: 'Knowing my child is inside a workspace with clear boundaries and identity protocols gives us complete peace of mind.', context: 'Parent of 15yo Creator' },
  { type: 'Startup Perspective', quote: 'We can source platform-native builders for shorts and UI testing instantly without handling messy external proposal flows.', context: 'Founder, SaaS Engine' }
]

// ─── HIGH-QUALITY TRANSITION HOOKS ────────────────────────────────────────────
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

function AudienceFunnelExplorer() {
  const [activeTab, setActiveTab] = useState('students')

  return (
    <div className="w-full grid gap-8 lg:grid-cols-[0.4fr_0.6fr] items-start mt-12">
      <div className="flex flex-col gap-2 border-l border-slate-200 dark:border-zinc-800 pl-4">
        {audienceFunnels.map((tab) => {
          const TabIcon = tab.icon
          const isSelected = activeTab === tab.id
          return (
            <button
              key={tab.id}
              onClick={() => { return setActiveTab(tab.id) }}
              className={`flex items-center gap-3.5 py-3.5 px-4 rounded-xl text-left transition-all duration-300 relative ${
                isSelected 
                  ? 'text-[#2f7259] dark:text-[#96d6bf] font-bold' 
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 font-medium'
              }`}
            >
              {isSelected && (
                <motion.div 
                  layoutId="activeAudienceTab" 
                  className="absolute inset-0 bg-[#eff7f2] dark:bg-[#96d6bf]/5 rounded-xl -z-10 border-l-2 border-[#2f7259] dark:border-[#96d6bf]"
                />
              )}
              <TabIcon className="h-4 w-4 shrink-0" />
              <span className="text-sm tracking-tight">{tab.title}</span>
            </button>
          )
        })}
      </div>

      <div className="min-h-[220px] rounded-2xl border border-slate-200/80 bg-white/70 p-8 backdrop-blur-md dark:border-white/10 dark:bg-white/[0.02] flex flex-col justify-between">
        <AnimatePresence mode="wait">
          {audienceFunnels.map((tab) => {
            if (tab.id !== activeTab) return null
            return (
              <motion.div
                key={tab.id}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
              >
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{tab.kicker}</span>
                <h3 className="text-2xl font-bold text-[#191724] dark:text-white mt-1">{tab.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-slate-500 dark:text-slate-400 font-medium">{tab.desc}</p>
              </motion.div>
            )
          })}
        </AnimatePresence>
        
        <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/5 flex justify-end">
          <Link href="/about" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2f7259] dark:text-[#96d6bf] group">
            <span>Learn about our operational framework</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  )
}

function ScrollPathTrackTimeline() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  const pathScaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 25 })

  return (
    <div ref={containerRef} className="relative mt-12 max-w-4xl mx-auto overflow-visible pl-8 sm:pl-12">
      <div className="absolute left-3.5 sm:left-[1.35rem] top-2 bottom-2 w-0.5 bg-slate-200 dark:bg-zinc-800 z-0">
        <motion.div 
          style={{ scaleY: pathScaleY, transformOrigin: "top center" }} 
          className="w-full h-full bg-[#2f7259] dark:bg-[#96d6bf]" 
        />
      </div>

      <div className="space-y-10 relative z-10">
        {timelineSteps.map((step) => {
          return (
            <motion.div 
              key={step.id} 
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.45 }}
              className="relative group"
            >
              <div className="absolute -left-[2.35rem] sm:-left-[2.65rem] top-0.5 flex h-6 w-6 items-center justify-center rounded-full border-2 border-slate-200 bg-white text-[10px] font-bold text-slate-400 dark:border-zinc-800 dark:bg-[#070b10] group-hover:border-[#2f7259] dark:group-hover:text-[#96d6bf] transition-colors duration-300">
                {step.id}
              </div>
              <h3 className="text-base font-bold text-[#191724] dark:text-white tracking-tight">{step.title}</h3>
              <p className="mt-1 text-xs leading-relaxed text-slate-500 dark:text-slate-400 font-medium max-w-2xl">{step.desc}</p>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

function SkillOrbitDisplay() {
  const [activeSkill, setActiveSkill] = useState(0)
  const wasManuallySelected = useRef(false)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    if (wasManuallySelected.current) return

    const interval = setInterval(() => {
      setActiveSkill((current) => {
        return (current + 1) % expandedSkillsGrid.length
      })
    }, 3600)

    return () => {
      clearInterval(interval)
    }
  }, [])

  const currentSkill = expandedSkillsGrid[activeSkill]
  const CurrentIcon = currentSkill.icon

  return (
    <div className="relative mx-auto flex h-[360px] w-full max-w-[360px] items-center justify-center overflow-visible py-6">
      <div className="absolute h-[280px] w-[280px] rounded-full border border-dashed border-slate-300/70 dark:border-white/10" />
      <motion.div
        animate={prefersReducedMotion ? {} : { rotate: 360 }}
        transition={{ duration: 64, repeat: Infinity, ease: 'linear' }}
        className="absolute h-[210px] w-[210px] rounded-full border border-slate-200 bg-white/50 dark:border-white/5 dark:bg-white/[0.02]"
      />

      <motion.div
        key={currentSkill.title}
        initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: 'spring', damping: 16, stiffness: 150 }}
        className="z-10 flex h-40 w-40 flex-col items-center justify-center rounded-full border border-slate-200 bg-white p-4 text-center shadow-sm dark:border-white/10 dark:bg-[#10151d]"
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#eff7f2] text-[#245846] dark:bg-[#96d6bf]/10 dark:text-[#96d6bf]">
          <CurrentIcon className="h-5 w-5" />
        </div>
        <h4 className="mt-3 text-sm font-bold leading-tight text-[#191724] dark:text-white">{currentSkill.title}</h4>
      </motion.div>

      {expandedSkillsGrid.map((skill, index) => {
        const IconComponent = skill.icon
        const radians = (skill.angle * Math.PI) / 180
        const radius = 140
        const x = Math.cos(radians) * radius
        const y = Math.sin(radians) * radius

        return (
          <motion.button
            key={skill.title}
            type="button"
            onClick={() => {
              wasManuallySelected.current = true
              setActiveSkill(index)
            }}
            style={{ x, y }}
            className={`absolute z-20 flex h-11 w-11 items-center justify-center rounded-full border shadow-sm transition-colors ${
              activeSkill === index
                ? 'border-[#2f7259] bg-[#191724] text-white dark:border-[#96d6bf] dark:bg-white dark:text-[#191724]'
                : 'border-slate-200 bg-white text-slate-600 hover:border-slate-400 dark:border-white/10 dark:bg-[#070b10] dark:text-slate-300 dark:hover:border-white/30'
            }`}
            whileHover={prefersReducedMotion ? {} : { scale: 1.12, y: y - 2 }}
            whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
            aria-label={`Show ${skill.title}`}
          >
            <IconComponent className="h-4 w-4" />
          </motion.button>
        )
      })}
    </div>
  )
}

function TrueCardShuffleDeck() {
  const [deck, setDeck] = useState(carouselProjects)
  const [isShuffling, setIsShuffling] = useState(false)

  const processShuffleNext = () => {
    if (isShuffling) return
    setIsShuffling(true)

    setDeck((currentDeck) => {
      const updated = [...currentDeck]
      const cardMovedToBack = updated.shift()
      updated.push(cardMovedToBack)
      return updated
    })

    setTimeout(() => {
      return setIsShuffling(false)
    }, 350)
  }

  return (
    <div className="relative w-full overflow-visible flex flex-col items-center">
      <div className="relative h-[330px] w-[290px] sm:w-[370px] perspective-1000">
        {deck.map((project, index) => {
          const cardStackDepth = deck.length - index
          const verticalOffset = index * -8
          const sizeScale = 1 - index * 0.035

          return (
            <motion.div
              key={project.id}
              style={{ transformOrigin: "bottom center" }}
              animate={{
                y: verticalOffset,
                scale: sizeScale,
                zIndex: cardStackDepth,
                opacity: index >= 3 ? 0 : 1 - index * 0.15,
              }}
              transition={{ type: "spring", damping: 22, stiffness: 120 }}
              className="absolute inset-0 rounded-2xl border border-slate-200 bg-white p-6 shadow-md dark:border-white/10 dark:bg-[#0b1017] flex flex-col justify-between select-none cursor-pointer"
              onClick={index === 0 ? processShuffleNext : undefined}
            >
              <div>
                <div className="flex items-center justify-between border-b border-slate-100 pb-3 dark:border-white/5">
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#2f7259] dark:text-[#96d6bf]">{project.skill}</span>
                    <h4 className="text-xs font-medium text-slate-400 mt-0.5">{project.company}</h4>
                  </div>
                  <span className="text-[11px] font-semibold bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 px-2 py-0.5 rounded-md">{project.creator}</span>
                </div>
                <h3 className="text-base font-bold text-[#191724] dark:text-white mt-4 leading-snug">{project.title}</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed line-clamp-4">{project.detail}</p>
              </div>
              
              <div className="flex items-center justify-between mt-2">
                <span className="text-[11px] font-medium text-[#2f7259] dark:text-[#96d6bf]">
                  {index === 0 ? "Click to shuffle card deck" : "Stacked payload"}
                </span>
                <span className="text-[10px] text-slate-300 font-mono">0{project.id}</span>
              </div>
            </motion.div>
          )
        })}
      </div>

      <div className="mt-6 relative z-30">
        <button
          onClick={processShuffleNext}
          disabled={isShuffling}
          className="flex h-10 px-6 items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white text-xs font-bold tracking-wider text-slate-700 uppercase shadow-sm transition hover:bg-slate-50 disabled:opacity-50 dark:border-white/10 dark:bg-[#070b10] dark:text-slate-300"
        >
          <span>Shuffle Card Deck</span>
          <ArrowRight className="h-3 w-3" />
        </button>
      </div>
    </div>
  )
}

function DeconstructedProductPreview() {
  return (
    <div className="w-full grid gap-6 sm:grid-cols-3 mt-12 relative overflow-visible">
      {platformPreviews.map((preview) => {
        return (
          <motion.div
            key={preview.title}
            whileHover={{ y: -4 }}
            transition={{ type: "spring", damping: 18, stiffness: 220 }}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-[#070b10] flex flex-col justify-between group"
          >
            <div>
              <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400 bg-slate-100 dark:bg-white/5 px-2 py-0.5 rounded">{preview.kicker}</span>
              <h3 className="text-base font-bold text-[#191724] dark:text-white mt-3">{preview.title}</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-slate-500 dark:text-slate-400 font-medium">{preview.text}</p>
            </div>

            <div className="mt-6 rounded-xl border border-dashed border-slate-200/80 bg-zinc-50/50 p-4 flex flex-col justify-center gap-2 relative overflow-hidden h-28 dark:border-white/5 dark:bg-white/[0.005]">
              {preview.title === "Profile Preview" && (
                <div className="space-y-2 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="h-3 w-2/3 bg-slate-200 dark:bg-zinc-800 rounded animate-pulse" />
                  <div className="h-2 w-1/2 bg-slate-100 dark:bg-zinc-900 rounded" />
                  <div className="flex gap-1.5 mt-2">
                    <div className="h-4 w-12 bg-emerald-100 dark:bg-emerald-500/10 rounded-full" />
                    <div className="h-4 w-16 bg-indigo-100 dark:bg-indigo-500/10 rounded-full" />
                  </div>
                </div>
              )}
              {preview.title === "Project Dashboard" && (
                <div className="space-y-2 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center justify-between">
                    <div className="h-2.5 w-1/3 bg-slate-200 dark:bg-zinc-800 rounded" />
                    <div className="h-2 w-12 bg-blue-100 dark:bg-blue-500/20 rounded-full" />
                  </div>
                  <div className="w-full h-1.5 bg-slate-100 dark:bg-zinc-900 rounded-full overflow-hidden">
                    <div className="w-3/5 h-full bg-[#2f7259] rounded-full" />
                  </div>
                </div>
              )}
              {preview.title === "Guardian Safety View" && (
                <div className="flex items-center gap-3 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="p-1.5 rounded-lg bg-emerald-100 text-emerald-800 dark:bg-emerald-500/20 dark:text-emerald-400">
                    <Lock className="h-4 w-4" />
                  </div>
                  <div className="space-y-1">
                    <div className="h-2 w-24 bg-slate-200 dark:bg-zinc-800 rounded" />
                    <div className="h-2 w-16 bg-slate-100 dark:bg-zinc-900 rounded" />
                  </div>
                </div>
              )}
              <Eye className="absolute bottom-3 right-3 h-3.5 w-3.5 text-slate-300 group-hover:text-slate-400 transition-colors" />
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}

function DashboardPreview() {
  const { scrollYProgress } = useScroll()
  const prefersReducedMotion = useReducedMotion()

  const layerY = useTransform(scrollYProgress, [0, 1], [0, -25])
  const badgeY = useTransform(scrollYProgress, [0, 1], [0, -50])

  return (
    <div className="mx-auto w-full max-w-[300px] sm:max-w-sm lg:max-w-md relative">
      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-[#96d6bf] to-[#4f7b68] opacity-10 blur-md" />
      
      <motion.div 
        style={prefersReducedMotion ? {} : { y: layerY }}
        className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-1.5 shadow-xl dark:border-white/10 dark:bg-white/[0.04]"
      >
        <Image
          src="/graphics/dashboard-light.png"
          alt="Dashboard Workspace View"
          width={797}
          height={1536}
          priority
          className="block h-auto w-full rounded-lg dark:hidden"
        />
        <Image
          src="/graphics/dashboard-dark.png"
          alt="Dashboard Workspace View"
          width={797}
          height={1536}
          priority
          className="hidden h-auto w-full rounded-lg dark:block"
        />
      </motion.div>

      <motion.div
        style={prefersReducedMotion ? {} : { y: badgeY }}
        className="absolute -right-4 top-1/4 rounded-xl border border-slate-200/80 bg-white/95 p-3.5 shadow-lg backdrop-blur-sm dark:border-white/15 dark:bg-[#070b10]/95 max-w-[170px] hidden sm:block"
      >
        <div className="flex items-center gap-2">
          <div className="rounded-lg bg-[#eff7f2] p-1 text-[#245846] dark:bg-[#96d6bf]/15 dark:text-[#96d6bf]">
            <Award className="h-3.5 w-3.5" />
          </div>
          <div>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">Verification</p>
            <p className="text-xs font-bold text-[#191724] dark:text-white">Guardian Consent Vetted</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

function GlobalStickyBottomStrip() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScrollActivation = () => {
      if (window.scrollY > 550) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }
    window.addEventListener('scroll', handleScrollActivation, { passive: true })
    return () => { return window.removeEventListener('scroll', handleScrollActivation) }
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 180 }}
          className="fixed bottom-4 inset-x-4 z-50 mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white/95 p-4 shadow-xl backdrop-blur-md dark:border-white/10 dark:bg-[#070b10]/95 flex flex-col sm:flex-row items-center justify-between gap-4 transition-colors"
        >
          <div className="flex items-center gap-2.5 text-left">
            <div className="h-2 w-2 rounded-full bg-[#2f7259] dark:bg-[#96d6bf] animate-pulse" />
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">TeenVerseHub Onboarding</h4>
              <p className="text-sm font-semibold text-[#191724] dark:text-white">Start building your public profile</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <Link href={loginUrl} className="flex h-9 items-center justify-center rounded-lg bg-[#191724] text-white dark:bg-white dark:text-[#191724] px-4 text-xs font-bold shadow-sm w-full sm:w-auto text-center">
              Create profile
            </Link>
            <Link href="/guardian-guide" className="flex h-9 items-center justify-center rounded-lg border border-slate-200 bg-white px-4 text-xs font-bold text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 w-full sm:w-auto text-center">
              Guardian guide
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function FAQAccordionItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-slate-200 dark:border-white/10 last:border-b-0">
      <button
        onClick={() => { return setIsOpen(!isOpen) }}
        className="flex w-full items-center justify-between py-5 text-left font-semibold text-[#191724] dark:text-white"
      >
        <span className="text-base tracking-tight">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ type: "spring", damping: 15 }}
          className="text-slate-400"
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
            transition={{ type: "spring", damping: 20, stiffness: 120 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
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

// ─── MASTER LANDING PAGE EXPORT ───────────────────────────────────────────────
export default function FreelanceJobsForTeensPage() {
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

        {/* 1. HERO SECTION - MOBILE VETTED AND BALANCED */}
        <section className="relative z-10 px-4 pb-12 pt-24 sm:px-6 sm:pt-36 lg:px-8">
          <div className="mx-auto grid max-w-7xl min-w-0 gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="min-w-0 max-w-full text-center lg:text-left flex flex-col items-center lg:items-start">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: 'spring', damping: 15 }}
                className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-slate-700 shadow-sm dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-200"
              >
                <BadgeCheck className="h-4 w-4 text-[#2f7259]" />
                Teen Service Marketplace
              </motion.div>

              <SplitTextHeading className="mt-5 max-w-full text-4xl font-extrabold tracking-tight text-[#191724] sm:max-w-4xl sm:text-6xl lg:text-7xl dark:text-white leading-[1.1] sm:leading-[1.05]">
                Freelance Jobs Built for Teen Skills
              </SplitTextHeading>

              <p className="mt-5 max-w-xl text-base sm:text-lg leading-relaxed text-slate-600 dark:text-slate-300 font-medium px-2 sm:px-0">
                TeenVerseHub helps teenagers turn digital skills into structured freelance services. Teens can build portfolio samples, create service descriptions, explore beginner-friendly projects, and grow step by step.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto px-4 sm:px-0">
                <CircleHoverButton href="/how-to-start-freelancing-as-a-teen" isPrimary={true}>
                  <span>Start Freelancing Guide</span>
                  <ArrowRight className="h-4 w-4" />
                </CircleHoverButton>
                <CircleHoverButton href="/safe-online-jobs-for-teens" isPrimary={false}>
                  <ShieldCheck className="h-4 w-4" />
                  <span>Read Safety Guide</span>
                </CircleHoverButton>
              </div>

              <div className="mt-12 grid max-w-2xl grid-cols-3 gap-x-4 gap-y-2 border-t border-slate-200 pt-6 text-left w-full dark:border-white/10">
                {[
                  { label: 'Creative Work', value: 'Design + Editing' },
                  { label: 'Content Work', value: 'Writing + Social' },
                  { label: 'Proof Basis', value: 'Portfolio First' },
                ].map((stat, idx) => {
                  return (
                    <div key={idx} className="text-center sm:text-left">
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

            <div className="min-w-0 max-w-full relative mt-8 lg:mt-0">
              <DashboardPreview />
            </div>
          </div>
        </section>

        {/* 2. INFINITE TICKER DISPLAY TRACK */}
        <div className="relative w-full overflow-hidden bg-white/40 py-3.5 backdrop-blur-sm dark:bg-[#070b10]/40 border-y border-slate-200/60 dark:border-white/5">
          <motion.div 
            className="flex space-x-8 whitespace-nowrap min-w-full"
            animate={{ x: [0, "-33.33%"] }}
            transition={{ ease: "linear", duration: 24, repeat: Infinity }}
          >
            {[...expandedSkillsGrid, ...expandedSkillsGrid, ...expandedSkillsGrid].map((item, idx) => {
              const TrackIcon = item.icon
              return (
                <div key={idx} className="flex items-center space-x-3 text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                  <TrackIcon className="h-3.5 w-3.5 text-[#2f7259]" />
                  <span>{item.title}</span>
                  <span>•</span>
                </div>
              )
            })}
          </motion.div>
        </div>

        {/* 3. PROOF BAR METRICS */}
        <section className="relative z-10 border-b border-slate-200 bg-white px-4 sm:px-6 lg:px-8 dark:border-white/10 dark:bg-white/[0.01]">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-6 sm:grid-cols-4">
            {proofPoints.map(([value, label, subtext]) => {
              return (
                <div key={label} className="py-6 border-t border-slate-100 dark:border-white/5 first:border-t-0 sm:border-t-0">
                  <p className="text-3xl font-extrabold tracking-tight text-[#191724] dark:text-white">{value}</p>
                  <p className="mt-1 text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wide">{label}</p>
                  <p className="text-[11px] text-slate-400 mt-0.5">{subtext}</p>
                </div>
              )
            })}
          </div>
        </section>

        {/* 4. WHO IS THIS FOR MODULE */}
        <section className="relative z-10 px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Ecosystem Alignment"
              title="Who is TeenVerseHub for?"
              text="Our platform parameters deliver explicit, secure workflow tracks mapped out completely across distinct deployment categories."
            />
            <AudienceFunnelExplorer />
          </div>
        </section>

        {/* 5. MAIN FEATURES BENTO GRID SECTION */}
        <section className="relative z-10 px-4 py-20 sm:px-6 lg:px-8 bg-zinc-50/50 dark:bg-[#070b14]/20 border-y border-slate-200/60 dark:border-white/5">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Ecosystem Mapping"
              title="Teen freelance categories with real digital use"
              text="TeenVerseHub focuses on services teenagers can learn, practice, and prove through sample work. The goal is not random online jobs, but clear digital services."
            />

            <SpreadGroup className="mt-10 grid gap-5 md:grid-cols-12 md:auto-rows-[160px]">
              {pageFeatures.map((feature, index) => {
                const TargetIcon = ICON_REGISTRY[feature.icon]
                return (
                  <SpreadItem key={feature.title} direction={(index % 3) - 1} className={feature.span}>
                    <div className="h-full rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-[#0b1017] flex flex-col justify-between overflow-hidden relative group">
                      <div className={`pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full blur-3xl bg-gradient-to-br ${feature.glow}`} />
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-950 text-white dark:bg-white/10">
                        <TargetIcon className="h-4 w-4" />
                      </div>
                      <div>
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

        {/* 6. HOW IT WORKS PROGRESSION TIMELINE */}
        <section className="relative z-10 px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Verification Timelines"
              title="A clear progression map from skill to service"
              text="How our framework designs a highly balanced operational workflow track to move young builders cleanly through milestone completions."
            />
            <ScrollPathTrackTimeline />
          </div>
        </section>

        {/* 7. PROJECT EXAMPLES DATA MODULE GRID */}
        <section className="relative z-10 px-4 py-20 sm:px-6 lg:px-8 bg-zinc-50/50 dark:bg-[#070b14]/20 border-y border-slate-200/60 dark:border-white/5">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <SectionHeader
                  eyebrow="Deliverable Outlines"
                  title="Example starter projects"
                  text="Explore beginner-friendly project examples for content, design, web, and research work. See example starter projects that students can build for real portfolio proof."
                />
                
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {carouselProjects.map((proj) => {
                    return (
                      <div key={proj.id} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-white/5 dark:bg-[#070b10]">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#2f7259] dark:text-[#96d6bf]">{proj.skill}</span>
                        <h4 className="text-sm font-bold text-[#191724] dark:text-white mt-0.5">{proj.title}</h4>
                        <p className="text-xs text-slate-400 mt-0.5">{proj.company}</p>
                      </div>
                    )
                  })}
                </div>
              </div>

              <div className="flex justify-center overflow-visible py-4">
                <TrueCardShuffleDeck />
              </div>
            </div>
          </div>
        </section>

        {/* 8. FEATURED SKILL CATEGORIES TRACK GRID */}
        <section className="relative z-10 px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <SectionHeader
                  eyebrow="Operational Blocks"
                  title="Beginner-friendly online jobs for teens"
                  text="The best freelance jobs for teens are specific, useful, and easy to show with portfolio samples. These categories help students start with real digital skills instead of vague side hustles."
                />
                
                <div className="grid gap-4 sm:grid-cols-2 mt-8">
                  {serviceCategories.slice(0, 4).map((category) => {
                    const TargetItemIcon = ICON_REGISTRY[category.icon]
                    return (
                      <div key={category.title} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-white/[0.02]">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#eff7f2] text-[#245846] dark:bg-[#96d6bf]/10 dark:text-[#96d6bf]">
                          <TargetItemIcon className="h-4 w-4" />
                        </div>
                        <h3 className="mt-3 text-sm font-bold text-[#191724] dark:text-white leading-tight">{category.title}</h3>
                        <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 font-medium leading-relaxed">{category.description}</p>
                      </div>
                    )
                  })}
                </div>
              </div>

              <div className="relative overflow-visible">
                <SkillOrbitDisplay />
              </div>
            </div>
          </div>
        </section>

        {/* 9. SAFETY TACTICS - THE EXPLICIT STRATEGIC DARK SECTION */}
        <section className="relative z-10 bg-[#191724] px-4 py-20 text-white sm:px-6 lg:px-8 dark:bg-[#10151d]">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#96d6bf]">Habit Guardrails</p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Safer online work habits for teen freelancers</h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-300 font-medium">
                TeenVerseHub encourages teenagers to treat freelancing as a serious digital skill path. Safety, clarity, and professionalism matter as much as earning.
              </p>
              <div className="mt-6">
                <CircleHoverButton href="/safety" isPrimary={false}>
                  <span>Review full safety parameters</span>
                </CircleHoverButton>
              </div>
            </div>

            <div className="grid gap-4">
              {safetyTips.slice(0, 4).map((tip, index) => {
                return (
                  <div key={index} className="rounded-xl border border-white/10 bg-white/[0.04] p-5 shadow-sm flex items-start gap-3.5">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-rose-500/20 text-rose-400">
                      <AlertTriangle className="h-4 w-4" />
                    </div>
                    <p className="text-sm leading-relaxed text-slate-200 font-semibold">{tip}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* 10. MATRIX PAIRS DOUBLE TRACK BLOCKS */}
        <section className="relative z-10 px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-5 lg:sticky lg:top-32 lg:h-max">
                <SectionHeader
                  eyebrow="Structure Frameworks"
                  title="Portfolio-first freelancing helps teens grow safely"
                  text="A teen freelancer should not depend on big promises. They need examples of their work, a clear service, and simple projects that prove what they can do."
                />
              </div>

              <div className="flex flex-col gap-6 lg:col-span-7">
                <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.02] sm:p-8">
                  <div className="mb-6 flex items-center gap-3 border-b border-slate-100 pb-4 dark:border-white/5">
                    <Target className="h-5 w-5 text-indigo-500" />
                    <h3 className="text-xl font-bold text-[#191724] dark:text-white">Portfolio-Ready Services</h3>
                  </div>
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {portfolioServices.map((item, idx) => {
                      return (
                        <li key={idx} className="flex items-start gap-2.5">
                          <Star className="mt-1 h-3.5 w-3.5 shrink-0 text-indigo-500" />
                          <span className="text-xs font-semibold text-slate-600 dark:text-slate-400 leading-relaxed">{item}</span>
                        </li>
                      )
                    })}
                  </ul>
                </div>

                <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.02] sm:p-8">
                  <div className="mb-6 flex items-center gap-3 border-b border-slate-100 pb-4 dark:border-white/5">
                    <MessageSquare className="h-5 w-5 text-emerald-500" />
                    <h3 className="text-xl font-bold text-[#191724] dark:text-white">What Builds Client Confidence</h3>
                  </div>
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {trustFlow.map((item, idx) => {
                      return (
                        <li key={idx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="mt-1 h-3.5 w-3.5 shrink-0 text-emerald-500" />
                          <span className="text-xs font-semibold text-slate-600 dark:text-slate-400 leading-relaxed">{item}</span>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 11. DECONSTRUCTED PRODUCT DASHBOARD BLOCKS */}
        <section className="relative z-10 px-4 py-20 sm:px-6 lg:px-8 bg-zinc-50/50 dark:bg-[#070b14]/20 border-y border-slate-200/60 dark:border-white/5">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Blueprint Preview"
              title="Explore the platform dashboard environment"
              text="Subtle, clean operational layouts mapping core dashboard environments built directly around transparency paths."
            />
            <DeconstructedProductPreview />
          </div>
        </section>

        {/* 12. INTENDED USE CASE ALIGNMENTS */}
        <section className="relative z-10 px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Perspective Metrics"
              title="Platform use-case parameters"
              text="Evaluate structural deployment goals mapped accurately across multiple network viewpoints."
            />

            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {useCaseQuotes.map((node) => {
                return (
                  <div key={node.type} className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-white/[0.02] flex flex-col justify-between">
                    <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300 font-medium italic">“{node.quote}”</p>
                    <div className="mt-6 pt-3 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
                      <span className="text-xs font-bold text-[#191724] dark:text-white">{node.type}</span>
                      <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400">{node.context}</span>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* 13. MARKETPLACE STRATEGIC COMPARISON BLOCK */}
        <section className="relative z-10 border-t border-slate-200 bg-white px-4 py-20 sm:px-6 lg:px-8 dark:border-white/10 dark:bg-white/[0.01]">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <SectionHeader
              eyebrow="Marketplace Contrast"
              title="Built for teen talent, not generic freelancing"
              text="The experience is focused on trust, proof, family clarity, and beginner-friendly work."
            />

            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm w-full dark:border-white/10 dark:bg-white/[0.02]">
              <div className="grid grid-cols-2 border-b border-slate-200 bg-slate-50 px-5 py-3.5 text-sm font-bold text-slate-700 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-200">
                <span>Other options</span>
                <span>TeenVerseHub</span>
              </div>
              {comparisonRows.map(([other, teenverse]) => {
                return (
                  <div key={other} className="grid grid-cols-2 gap-4 border-b border-slate-100 px-5 py-4 last:border-b-0 dark:border-white/5">
                    <p className="text-sm leading-relaxed text-slate-500 font-medium">{other}</p>
                    <p className="flex items-start gap-2 text-sm font-bold leading-relaxed text-[#191724] dark:text-white">
                      <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#2f7259] dark:text-[#96d6bf]" />
                      {teenverse}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* 14. TARGET AUDIENCE ROUTING PATHS */}
        <section className="relative z-10 border-t border-slate-200 bg-white px-4 py-20 sm:px-6 lg:px-8 dark:border-white/10 dark:bg-white/[0.01]">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Funnels & Targets"
              title="One product, three audiences"
              text="Students, startups, and guardians each get a clear route into the platform."
            />

            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {routes.map((route) => {
                return (
                  <Link
                    key={route.title}
                    href={route.href}
                    className="group block h-full rounded-2xl border border-slate-200 bg-[#fbfaf7] p-6 shadow-sm transition hover:border-slate-300 hover:bg-white dark:border-white/10 dark:bg-[#070b10] dark:hover:bg-white/[0.04]"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-lg font-bold text-[#191724] dark:text-white group-hover:text-[#2f7259] dark:group-hover:text-[#96d6bf] transition-colors">{route.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400 font-medium">{route.text}</p>
                      </div>
                      <div className="hidden h-14 w-14 shrink-0 items-center justify-center sm:flex">
                        <Image src={route.image} alt="" width={56} height={56} className="max-h-14 object-contain" />
                      </div>
                    </div>
                    <span className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-[#2f7259] dark:text-[#96d6bf]">
                      Explore route
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        {/* 15. OPTIMIZED VALUE ANALYTICS EDITORIAL */}
        <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 bg-white/60 dark:bg-white/[0.005] border-t border-slate-200/60 dark:border-white/5">
          <div className="mx-auto max-w-5xl">
            <div className="rounded-[2.5rem] border border-slate-200 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-white/[0.02] sm:p-12">
              <h2 className="text-3xl font-extrabold tracking-tight text-[#191724] dark:text-white sm:text-4xl">
                Why freelance jobs for teens should be skill-first
              </h2>
              <div className="mt-6 space-y-5 text-base sm:text-lg leading-relaxed text-slate-600 dark:text-slate-300 font-medium">
                <p>Many teenagers want to earn money online, but random online jobs can be confusing, unsafe, or unrealistic. A better path is to start with one useful digital skill and turn it into a clear service. TeenVerseHub focuses on this skill-first approach so teenagers can build proof before chasing clients.</p>
                <p>For example, a teen who enjoys editing videos can start by creating three sample reels. A student who likes writing can create sample captions, blog drafts, or scripts. A beginner designer can create thumbnail examples or social media graphics. These portfolio samples make the service easier to explain and easier for clients to review.</p>
                <p>Freelance jobs for teens should also be beginner-friendly. Small projects such as editing clips, writing captions, designing thumbnails, researching topics, or organizing content ideas are easier to manage than large complicated projects. They help teens learn deadlines, feedback, revisions, and professional communication.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 16. DISCLOSURE ACCORDION FAQS */}
        <section className="border-y border-slate-200 bg-white px-4 py-20 dark:border-white/10 dark:bg-[#070b14]/40 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="text-center flex flex-col items-center mb-10">
              <SectionHeader
                eyebrow="Platform Support"
                title="Questions about freelance jobs for teens"
                text="These answers help teens, guardians, and clients understand how teen freelancing can start in a more realistic way."
              />
            </div>

            <div className="mt-10 p-6 rounded-2xl border border-slate-200 bg-[#fbfaf7] shadow-sm dark:border-white/10 dark:bg-[#070b10]">
              {seoFaqs.map((faq) => {
                return (
                  <FAQAccordionItem key={faq.question} question={faq.question} answer={faq.answer} />
                )
              })}
            </div>
          </div>
        </section>

        {/* 17. FINAL BANNER CTA */}
        <section className="relative z-10 px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center relative z-10 flex flex-col items-center">
            <Sparkles className="h-6 w-6 text-[#2f7259] dark:text-[#96d6bf]" />
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#191724] sm:text-5xl dark:text-white">
              Start with one skill and build real proof.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-300 font-medium">
              TeenVerseHub helps teenagers grow from practice work into clearer digital services through portfolios, beginner-friendly projects, and safer online work habits.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row items-center w-full sm:w-auto">
              <CircleHoverButton href={SITE.appUrl} isPrimary={true}>
                <span>Join the Platform</span>
                <ArrowRight className="h-4 w-4" />
              </CircleHoverButton>
              <CircleHoverButton href="/guardian-guide" isPrimary={false}>
                <span>Read Guardian Guide</span>
              </CircleHoverButton>
            </div>
          </div>
        </section>

        <GlobalStickyBottomStrip />

      </main>

      <SiteFooter />
    </>
  )
}
