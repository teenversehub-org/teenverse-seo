'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRef, useState, useEffect } from 'react'
import {
  ArrowRight,
  ArrowLeft,
  BadgeCheck,
  Briefcase,
  CheckCircle2,
  CircleDollarSign,
  Code2,
  Fingerprint,
  FileText,
  LockKeyhole,
  MessageSquareText,
  Play,
  Search,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  UsersRound,
  WandSparkles,
  Zap,
  Globe,
  Award,
  ChevronDown,
  Eye,
  Layers,
  Shield,
  Building,
  Lock
} from 'lucide-react'
import { motion, useReducedMotion, useScroll, useSpring, useTransform, useMotionValue, useVelocity, AnimatePresence } from 'framer-motion'

import MarketingShell from './components/MarketingShell'
import { SITE } from './lib/site'

const loginUrl = SITE.appUrl

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
    icon: UsersRound,
    title: 'Students',
    kicker: 'Build early momentum',
    desc: 'Turn sample projects into verified proof of work. Showcase your real digital capabilities on a clean public profile, pick up beginner tasks from fast-growing startups, and earn in a safe, structured space tailored to your learning curve.'
  },
  {
    id: 'guardians',
    icon: Shield,
    title: 'Guardians',
    kicker: 'Complete safety overview',
    desc: 'Step into a workspace designed with full family clarity. Track identity checks, review protected onboarding tracks, approve custom consent milestones, and follow secure, transparent wallets with absolute visibility.'
  },
  {
    id: 'startups',
    icon: Building,
    title: 'Startups',
    kicker: 'Access raw platform talent',
    desc: 'Sourced directly from native short-form builders, frontend experimenters, and digital researchers. Source capable student talent for micro-projects and modular workflows without messy freelance contracts.'
  }
]

const platformFeatures = [
  { title: 'Portfolio Builder', text: 'Turn skills and sample work into a simple public profile.', icon: FileText, span: 'md:col-span-7' },
  { title: 'Beginner Projects', text: 'Find starter work in content, design, video, research, and web support.', icon: Briefcase, span: 'md:col-span-5' },
  { title: 'Safe Messaging', text: 'Keep project conversations clearer and easier to review.', icon: MessageSquareText, span: 'md:col-span-5' },
  { title: 'Teen Verification', text: 'Use age-aware checks and guardian consent where needed.', icon: Fingerprint, span: 'md:col-span-7' },
  { title: 'Earnings Clarity', text: 'Understand fees, wallet activity, and project payment status.', icon: CircleDollarSign, span: 'md:col-span-6' },
  { title: 'Skill Roadmap', text: 'Move from first skill to stronger proof with guided next steps.', icon: TrendingUp, span: 'md:col-span-6' },
]

const timelineSteps = [
  { id: '01', title: 'Create Your Profile', desc: 'Show your skills, interests, experience, and best work so clients can discover your talent.' },
  { id: '02', title: 'Verify Your Account', desc: 'Complete age verification and guardian approval where required to keep the platform safe and trusted.' },
  { id: '03', title: 'Build Your Portfolio', desc: 'Upload projects, designs, websites, videos, or other work samples to prove your abilities.' },
  { id: '04', title: 'Get Discovered', desc: 'Businesses and startups can find talented teens and invite them to suitable projects.' },
  { id: '05', title: 'Start Working', desc: 'Agree on project goals, deadlines, deliverables, and payment terms before work begins.' },
  { id: '06', title: 'Get Paid Securely', desc: 'Complete the project, receive approval, and get paid safely through the platform.' }
]

const carouselProjects = [
  { id: 1, title: 'Reel Subtitle Editing', creator: 'Alex M., 17', skill: 'Video Production', company: 'SaaS Engine Corp', detail: 'Assembled raw b-roll clips, synced dynamic audio subtitles, and generated short-form creator engagement.' },
  { id: 2, title: 'Landing Page UI Fix', creator: 'Sarah L., 19', skill: 'Web Frontend', company: 'GrowthKit Startup', detail: 'Identified layout breakage variables and converted standard mockups into fluid Tailwind components.' },
  { id: 3, title: 'Canva Thumbnail Design', creator: 'David K., 16', skill: 'Digital Design', company: 'VentureLabs App', detail: 'Crafted structured visual identity assets for client stakeholder presentation tracks.' },
  { id: 4, title: 'Blog Draft Generation', creator: 'Maya R., 18', skill: 'Content Strategy', company: 'MedTech Digital', detail: 'Compiled structural copy logs, outlined high traffic terminology, and organized draft summaries.' },
  { id: 5, title: 'Product Feedback Report', creator: 'James O., 20', skill: 'Web Support', company: 'ShopFlow Inc', detail: 'Audited mobile checkout steps, compiled bugs, and structured user optimization notes.' }
]

const expandedSkillsGrid = [
  { title: 'Video Editing', desc: 'Shorts, reels, creator clips, and subtitles.', icon: Play, angle: 0 },
  { title: 'Graphic Design', desc: 'Thumbnails, posts, mockups, and pitch assets.', icon: WandSparkles, angle: 45 },
  { title: 'Frontend UI', desc: 'Landing pages, UI segments, and small adjustments.', icon: Code2, angle: 90 },
  { title: 'Content Writing', desc: 'Blogs, outlines, scripts, and drafts.', icon: FileText, angle: 135 },
  { title: 'Social Media', desc: 'Post curation, caption structures, and platform logs.', icon: MessageSquareText, angle: 180 },
  { title: 'Research Support', desc: 'Market analysis data points and brand profiling.', icon: Search, angle: 225 },
  { title: 'AI-assisted tasks', desc: 'Prompt verification and database optimization.', icon: Zap, angle: 270 },
  { title: 'Testing & Feedback', desc: 'User experience path checks and interface reports.', icon: Layers, angle: 315 }
]

const comparisonRows = [
  ['Generic freelance marketplaces', 'Built around students, teens, guardians, and first projects'],
  ['Profiles without proof', 'Portfolio-first profiles with samples and skill signals'],
  ['Open-ended communication', 'Safer messaging, reporting, and clearer project boundaries'],
  ['Hard for beginners to start', 'Beginner-friendly categories and guided onboarding'],
]

const platformPreviews = [
  { title: 'Profile Preview', kicker: 'Public Talent Proof', text: 'Displays active micro-credentials, sample asset paths, and parental identity confirmation stamps.' },
  { title: 'Project Dashboard', kicker: 'Guardrail Workspace', text: 'Keeps task milestones tracking transparent, files logged, and payment stages locked safely.' },
  { title: 'Guardian Safety View', kicker: 'Parent Tracking Deck', text: 'Provides real-time pipeline clarity over platform activity, verification requests, and wallet balances.' }
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

const seoLinks = [
  ['Browse creative portfolios', '/portfolios'],
  ['Teen digital skills', '/teen-digital-skills'],
  ['Video editing for students', '/skills/video-editing-for-students'],
  ['Graphic design gigs under 18', '/skills/graphic-design-gigs-under-18'],
  ['Teen portfolio builder', '/teen-portfolio-builder'],
  ['Student talent marketplace', '/student-talent-marketplace'],
  ['TeenVerseHub vs Funngro', '/versus/funngro'],
  ['AI tools for teen freelancers', '/ai-tools-for-teen-freelancers'],
]

const useCaseQuotes = [
  { type: 'Student Perspective', quote: 'For a 16-year-old creator, the hardest part is proving skill. TeenVerseHub makes portfolio proof the starting point.', context: 'Active Video Editor' },
  { type: 'Guardian Perspective', quote: 'Knowing my child is inside a workspace with clear boundaries and identity protocols gives us complete peace of mind.', context: 'Parent of 15yo Creator' },
  { type: 'Startup Perspective', quote: 'We can source platform-native builders for shorts and UI testing instantly without handling messy external proposal flows.', context: 'Founder, SaaS Engine' }
]

const faqs = [
  [
    'What is TeenVerseHub?',
    'TeenVerseHub is a student talent marketplace where teenagers can build portfolios, learn skills, and find beginner-friendly projects.',
  ],
  [
    'Who can use TeenVerseHub?',
    'TeenVerseHub is built for students and young creators aged 14 to 21, plus startups looking for young digital talent.',
  ],
  [
    'Can users under 18 join?',
    'Yes. Users under 18 follow a guardian-aware onboarding and consent flow before key platform features.',
  ],
  [
    'What can teens do on TeenVerseHub?',
    'Teens can create a profile, showcase skills, discover projects, message safely, and grow their work experience.',
  ],
]

// ─── HOISTED COMPONENT REPOSITORIES ───────────────────────────────────────────
function AmbientGlowField() {
  const prefersReducedMotion = useReducedMotion()
  if (prefersReducedMotion) return null

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-0 opacity-20 dark:opacity-15">
      <motion.div 
        animate={{
          scale: [1, 1.15, 0.95, 1],
          x: [0, 45, -30, 0],
          y: [0, -50, 25, 0]
        }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -right-40 top-10 h-[650px] w-[650px] rounded-full bg-gradient-to-tr from-[#96d6bf] to-transparent blur-[130px]"
      />
      <motion.div 
        animate={{
          scale: [1, 0.93, 1.07, 1],
          x: [0, -25, 35, 0],
          y: [0, 35, -35, 0]
        }}
        transition={{ duration: 28, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        className="absolute -left-40 top-1/3 h-[750px] w-[750px] rounded-full bg-gradient-to-br from-[#818cf8]/25 to-transparent blur-[150px]"
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

  const baseStyles = "relative overflow-hidden inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg px-6 text-sm font-semibold transition-all duration-300 shadow-sm sm:w-auto z-10 text-center"
  const primaryTheme = "bg-[#191724] text-white dark:bg-white dark:text-[#191724]"
  const secondaryTheme = "border border-slate-200 bg-white text-[#191724] dark:border-white/10 dark:bg-white/5 dark:text-white"

  return (
    <motion.div whileHover={{ scale: 1.02, y: -1.5 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
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
              animate={{ scale: 2.6 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.38, ease: "easeOut" }}
              style={{ left: mousePosition.x, top: mousePosition.y }}
              className={`absolute w-32 h-32 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none mix-blend-difference ${
                isPrimary ? "bg-white/25" : "bg-[#2f7259]/15"
              }`}
            />
          )}
        </AnimatePresence>
        <span className="relative z-10 flex items-center justify-center gap-2 w-full">{children}</span>
      </Link>
    </motion.div>
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
      <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#191724] sm:text-4xl dark:text-white">
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

function SplitTextHeading({ children, className = "" }) {
  const words = children.split(" ")
  return (
    <h1 className={className}>
      {words.map((word, i) => {
        return (
          <span key={i} className="inline-block overflow-hidden mr-[0.22em] pb-1">
            <motion.span
              className="inline-block"
              initial={{ y: "105%" }}
              animate={{ y: 0 }}
              transition={{ type: "spring", damping: 24, stiffness: 140, delay: i * 0.04 }}
            >
              {word}
            </motion.span>
          </span>
        )
      })}
    </h1>
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
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
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
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
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
  const isInterrupted = useRef(false)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    if (isInterrupted.current) return
    const interval = setInterval(() => {
      setActiveSkill((current) => {
        return (current + 1) % 4 
      })
    }, 4000)
    return () => {
      return clearInterval(interval)
    }
  }, [])

  const selectSkill = (idx) => {
    isInterrupted.current = true
    setActiveSkill(idx)
  }

  const CurrentIcon = expandedSkillsGrid[activeSkill].icon

  return (
    <div className="relative flex h-[400px] w-full items-center justify-center overflow-visible py-4">
      <div className="absolute h-[280px] w-[280px] rounded-full border border-dashed border-slate-300/60 dark:border-white/10" />
      
      <motion.div 
        animate={prefersReducedMotion ? {} : { rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute h-[180px] w-[180px] rounded-full border border-slate-200 bg-gradient-to-tr from-white/10 to-transparent shadow-inner dark:border-white/5"
      />

      <motion.div 
        key={activeSkill}
        initial={{ scale: 0.82, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', damping: 14 }}
        className="z-10 flex h-40 w-40 flex-col items-center justify-center rounded-full bg-white p-4 text-center shadow-xl ring-2 ring-[#96d6bf]/20 dark:bg-[#10151d] dark:ring-[#2f7259]/30"
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#eff7f2] text-[#245846] dark:bg-[#96d6bf]/10 dark:text-[#96d6bf]">
          <CurrentIcon className="h-5 w-5" />
        </div>
        <h4 className="mt-2 text-xs font-bold text-[#191724] dark:text-white leading-tight">{expandedSkillsGrid[activeSkill].title}</h4>
      </motion.div>

      {expandedSkillsGrid.slice(0, 4).map((skill, index) => {
        const rad = (skill.angle * Math.PI) / 180
        const radius = 140 
        const x = Math.cos(rad) * radius
        const y = Math.sin(rad) * radius
        const IconComponent = skill.icon

        return (
          <motion.button
            key={skill.title}
            onClick={() => {
              return selectSkill(index)
            }}
            style={{ x, y }}
            className={`absolute z-20 flex h-11 w-11 items-center justify-center rounded-full border shadow-md ${
              activeSkill === index
                ? 'border-[#2f7259] bg-[#191724] text-white dark:border-[#96d6bf] dark:bg-white dark:text-[#191724]'
                : 'border-slate-200 bg-white text-slate-600 hover:border-slate-400 dark:border-white/10 dark:bg-[#070b10] dark:text-slate-300 dark:hover:border-white/30'
            }`}
            whileHover={{ scale: 1.18, y: -2 }}
            whileTap={{ scale: 0.93 }}
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
              whileHover={index === 0 ? { y: verticalOffset - 6, scale: 1.01 } : {}}
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
            whileHover={{ y: -6, scale: 1.01 }}
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

// ─── MASTER PAGE HOOK ─────────────────────────────────────────────────────────
export default function HomePage() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 25, restDelta: 0.001 })

  return (
    <MarketingShell>
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2f7259] to-[#96d6bf] z-50 transform-origin-0" style={{ scaleX }} />

      <div className="tvh-simple-home relative overflow-x-hidden bg-[#fbfaf7] text-[#191724] dark:bg-[#070b10] dark:text-white transition-colors duration-300">
        
        <AmbientGlowField />

        {/* 1. HERO SECTION - SPECIALLY ADJUSTED FOR STUNNING MOBILE VIEWPORTS */}
        <section className="relative z-10 px-4 pb-12 pt-24 sm:px-6 sm:pt-36 lg:px-8">
          <div className="mx-auto grid max-w-7xl min-w-0 gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="min-w-0 max-w-full text-center lg:text-left flex flex-col items-center lg:items-start">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: 'spring', damping: 15 }}
                className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-slate-700 shadow-sm dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-200"
              >
                <ShieldCheck className="h-4 w-4 text-[#2f7259]" />
                Parent-aware teen freelancing
              </motion.div>

              {/* Tighter line heights and centered text block matching phone flow */}
              <SplitTextHeading className="mt-5 max-w-full text-4xl font-extrabold tracking-tight text-[#191724] sm:max-w-4xl sm:text-6xl lg:text-7xl dark:text-white leading-[1.1] sm:leading-[1.05]">
                Build your portfolio. Find real projects.
              </SplitTextHeading>

              <p className="mt-5 max-w-xl text-base sm:text-lg leading-relaxed text-slate-600 dark:text-slate-300 font-medium px-2 sm:px-0">
                TeenVerseHub helps students and teenagers show their skills, discover beginner-friendly work, and collaborate with startups in a safer guided space.
              </p>

              {/* Dynamic button blocks stacking perfectly on tiny screens */}
              <div className="mt-8 flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto px-4 sm:px-0">
                <CircleHoverButton href={loginUrl} isPrimary={true}>
                  <span>Create profile</span>
                  <ArrowRight className="h-4 w-4" />
                </CircleHoverButton>
                <CircleHoverButton href="/hire-teen-freelancers" isPrimary={false}>
                  <span>For startups</span>
                </CircleHoverButton>
              </div>

              {/* Balanced trust row grid layout mapping across viewports */}
              <div className="mt-12 grid max-w-2xl grid-cols-2 gap-x-4 gap-y-3 border-t border-slate-200 pt-6 text-left w-full dark:border-white/10">
                {[
                  ['Portfolio profiles', BadgeCheck],
                  ['Guardian-aware onboarding', ShieldCheck],
                  ['Safe messaging', LockKeyhole],
                  ['Payment clarity', CircleDollarSign],
                ].map(([label, Icon]) => {
                  return (
                    <div key={label} className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300">
                      <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#2f7259] dark:text-[#96d6bf] shrink-0" />
                      <span className="truncate">{label}</span>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Extra breathing space top for mockup preview container when stacked on mobile viewports */}
            <div className="min-w-0 max-w-full relative mt-8 lg:mt-0">
              <DashboardPreview />
            </div>
          </div>
        </section>

        {/* 2. GENTLE MARQUEE TICKER TRACK */}
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

        {/* 3. PROOF STATS BAR */}
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

        {/* 4. WHO IS THIS FOR SECTION */}
        <section className="relative z-10 px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Ecosystem Alignment"
              title="Who is TeenVerseHub for?"
              text="Our workspace builds independent, secure verification tracks customized entirely for three specific core target profiles."
            />
            <AudienceFunnelExplorer />
          </div>
        </section>

        {/* 5. PLATFORM FEATURES BENTO GRID ARCHITECTURE */}
        <section className="relative z-10 px-4 py-20 sm:px-6 lg:px-8 bg-zinc-50/50 dark:bg-[#070b14]/20 border-y border-slate-200/60 dark:border-white/5">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Product Parameters"
              title="Everything a first project needs"
              text="Keep the important parts in one place: profile proof, project discovery, communication, guidance, and payment clarity."
            />

            <SpreadGroup className="mt-10 grid gap-5 md:grid-cols-12 md:auto-rows-[160px]">
              {platformFeatures.map((feat, index) => {
                const IconComponent = feat.icon
                return (
                  <SpreadItem key={feat.title} direction={(index % 3) - 1} className={feat.span}>
                    <div className="h-full rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-[#0b1017] flex flex-col justify-between">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#eff7f2] text-[#245846] dark:bg-[#96d6bf]/10 dark:text-[#96d6bf]">
                        <IconComponent className="h-4 w-4" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-[#191724] dark:text-white leading-tight">{feat.title}</h3>
                        <p className="mt-1 text-xs leading-relaxed text-slate-500 dark:text-slate-400 font-medium">{feat.text}</p>
                      </div>
                    </div>
                  </SpreadItem>
                )
              })}
            </SpreadGroup>
          </div>
        </section>

        {/* 6. HOW IT WORKS TIMELINE */}
        <section className="relative z-10 px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Verification Paths"
              title="A simple path from profile to project"
              text="Our workspace designs a highly structured journey map that keeps family consent, portfolios, and deliverables verified."
            />
            <ScrollPathTrackTimeline />
          </div>
        </section>

        {/* 7. PROJECT EXAMPLES SHUFFLE DECK MODULE */}
        <section className="relative z-10 px-4 py-20 sm:px-6 lg:px-8 bg-zinc-50/50 dark:bg-[#070b14]/20 border-y border-slate-200/60 dark:border-white/5">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <SectionHeader
                  eyebrow="Deliverable Assets"
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

        {/* 8. FEATURED SKILL CATEGORIES GRID */}
        <section className="relative z-10 px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <SectionHeader
                  eyebrow="Capabilities Framework"
                  title="Skills students can start with"
                  text="Focused skill specifications students learn, implement, and track on verified portfolios. Click nodes to review operational milestones inside our core canvas ecosystem loops."
                />
                
                <div className="grid gap-4 sm:grid-cols-2 mt-8">
                  {expandedSkillsGrid.slice(0, 4).map((skill) => {
                    const SkillIcon = skill.icon
                    return (
                      <div key={skill.title} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-white/[0.02]">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#eff7f2] text-[#245846] dark:bg-[#96d6bf]/10 dark:text-[#96d6bf]">
                          <SkillIcon className="h-4 w-4" />
                        </div>
                        <h3 className="mt-3 text-sm font-bold text-[#191724] dark:text-white">{skill.title}</h3>
                        <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 font-medium">{skill.desc}</p>
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

        {/* 9. SAFETY / GUARDIAN TRUST — SINGLE ACCENTED DARK ROW */}
        <section className="relative z-10 bg-[#191724] px-4 py-20 text-white sm:px-6 lg:px-8 dark:bg-[#10151d]">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#96d6bf]">Clarity Ecosystem</p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Clarity before access.</h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-300">
                For teen work, simplicity is safety. TeenVerseHub puts consent, verification, boundaries, and reporting into the core workflow.
              </p>
              <div className="mt-6">
                <CircleHoverButton href="/guardian-guide" isPrimary={false}>
                  <span>Read guardian guide</span>
                </CircleHoverButton>
              </div>
            </div>

            <div className="grid gap-4">
              {[
                ['Guardian-aware onboarding', 'Under-18 users follow consent-first steps so families understand what is happening.'],
                ['Profile proof', 'Age, identity, and portfolio signals help make profiles more credible.'],
                ['Moderation and reporting', 'Reporting tools and review systems help keep the platform more responsible.'],
                ['Protected workflows', 'Clear scopes, safer communication, and payment clarity reduce confusion.'],
              ].map(([title, text]) => {
                return (
                  <div key={title} className="rounded-xl border border-white/10 bg-white/[0.04] p-5 shadow-sm">
                    <div className="flex items-center gap-2">
                      <Award className="h-4 w-4 text-[#96d6bf]" />
                      <h3 className="text-base font-bold text-white">{title}</h3>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-slate-300 font-medium">{text}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* 10. MARKETPLACE COMPARISON MATRIX */}
        <section className="relative z-10 px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <SectionHeader
              eyebrow="Platform Disparity"
              title="Built for teen talent, not generic freelancing"
              text="The experience is focused on trust, proof, family clarity, and beginner-friendly work."
            />

            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-white/10 dark:bg-white/[0.02]">
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

        {/* 11. DECONSTRUCTED PRODUCT PREVIEWS */}
        <section className="relative z-10 px-4 py-20 sm:px-6 lg:px-8 bg-zinc-50/50 dark:bg-[#070b14]/20 border-y border-slate-200/60 dark:border-white/5">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Platform Preview"
              title="Explore the platform dashboard environment"
              text="Subtle, clean operational layouts mapping core dashboard environments built directly around transparency paths."
            />
            <DeconstructedProductPreview />
          </div>
        </section>

        {/* 12. USE-CASE TESTIMONIAL CLARITY LOOPS */}
        <section className="relative z-10 px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Intended Frameworks"
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

        {/* 13. TARGET AUDIENCE ROUTING PATHS */}
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

        {/* 14. SUPPLEMENTARY LINKS TRACK */}
        <section className="relative z-10 px-4 py-20 sm:px-6 lg:px-8 bg-zinc-50/40 dark:bg-white/[0.005] border-t border-slate-200/60 dark:border-white/5">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
            <SectionHeader
              eyebrow="Funnel Links"
              title="Helpful informational resources"
              text="Direct routes into dedicated guides, comparison matrix frameworks, and talent skill pages."
            />

            <div className="grid gap-3 sm:grid-cols-2">
              {seoLinks.map(([label, href]) => {
                return (
                  <Link
                    key={href}
                    href={href}
                    className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white px-5 py-3.5 text-sm font-semibold text-[#191724] shadow-sm transition hover:border-slate-300 dark:border-white/10 dark:bg-white/[0.02] dark:text-white dark:hover:bg-white/[0.05]"
                  >
                    <span>{label}</span>
                    <ArrowRight className="h-4 w-4 text-[#2f7259] transition-transform duration-300 group-hover:translate-x-1 dark:text-[#96d6bf]" />
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        {/* 15. FAQ ACCORDION PANEL */}
        <section className="relative z-10 border-t border-slate-200 bg-white px-4 py-20 sm:px-6 lg:px-8 dark:border-white/10 dark:bg-white/[0.01]">
          <div className="mx-auto max-w-4xl">
            <SectionHeader
              eyebrow="Platform Support"
              title="Simple answers"
              text="A quick overview overview matrix for student builders, guardians, and enterprise client tracks."
            />

            <div className="mt-10 p-6 rounded-2xl border border-slate-200 bg-[#fbfaf7] shadow-sm dark:border-white/10 dark:bg-[#070b10]">
              {faqs.map(([question, answer]) => {
                return (
                  <FAQAccordionItem key={question} question={question} answer={answer} />
                )
              })}
            </div>
          </div>
        </section>

        {/* 16. FINAL CALL TO ACTION BANNER */}
        <section className="relative z-10 px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center relative z-10 flex flex-col items-center">
            <Sparkles className="h-6 w-6 text-[#2f7259] dark:text-[#96d6bf]" />
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#191724] sm:text-5xl dark:text-white">
              Ready to build your first proof of work?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-300 font-medium">
              Create a TeenVerseHub profile and start turning your skills into portfolio-ready work.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row items-center w-full sm:w-auto">
              <CircleHoverButton href={loginUrl} isPrimary={true}>
                <span>Create profile</span>
                <ArrowRight className="h-4 w-4" />
              </CircleHoverButton>
              <CircleHoverButton href="/about" isPrimary={false}>
                <span>Learn more</span>
              </CircleHoverButton>
            </div>
          </div>
        </section>

        <GlobalStickyBottomStrip />

      </div>
    </MarketingShell>
  )
}