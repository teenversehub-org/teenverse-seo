'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import {
  Code2,
  ShieldCheck,
  Video,
  BadgeCheck,
  ArrowRight,
  Check,
  Sparkles
} from 'lucide-react'
import { motion, useReducedMotion, useMotionValue, useTransform, useSpring, useScroll, AnimatePresence } from 'framer-motion'

import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'
import StructuredData from '../components/StructuredData'
import { SITE, absoluteUrl, buildMetadata } from '../lib/site'

// ─── AMBIENT LIQUID BACKDROP ──────────────────────────────────────────────────
function LiquidMorphBackground() {
  const prefersReducedMotion = useReducedMotion()
  if (prefersReducedMotion) return null

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-0 opacity-40 dark:opacity-25">
      <svg className="absolute -left-20 -top-20 w-[800px] h-[800px] blur-3xl" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <motion.path
          fill="url(#skill-mesh-grad)"
          animate={{
            d: [
              "M47.5,-67.2C59.6,-59.3,66.4,-42.4,70.5,-26.5C74.6,-10.6,76,4.4,71.4,17.5C66.8,30.5,56.3,41.6,43.5,50.2C30.8,58.8,15.4,65,-1.1,66.5C-17.6,68,-35.1,64.9,-47.5,55.7C-59.9,46.5,-67.1,31.2,-71.4,15.2C-75.7,-0.7,-77,-17.3,-71.1,-31.2C-65.2,-45.2,-52.1,-56.4,-38.5,-63.6C-24.9,-70.7,-12.5,-73.7,2.4,-77.1C17.4,-80.4,35.3,-75.2,47.5,-67.2Z",
              "M39.9,-54.5C51.6,-47.2,60.9,-35.6,66.1,-21.9C71.3,-8.2,72.4,7.6,67.3,21.5C62.1,35.3,50.7,47.2,37.3,55.3C23.9,63.4,8.5,67.7,-6.8,66.1C-22,64.4,-37.2,56.8,-48.5,45.5C-59.8,34.2,-67.4,19.1,-69.4,3.2C-71.4,-12.7,-68,-29.4,-58.5,-39.8C-49,-50.2,-33.5,-54.3,-19.4,-58.5C-5.3,-62.7,7.4,-67,19.9,-65.4C32.4,-63.9,28.2,-56.5,39.9,-54.5Z"
            ]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          transform="translate(100 100)"
        />
        <defs>
          <linearGradient id="skill-mesh-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#96d6bf" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#2f7259" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

// ─── HIGH-END INTERACTIVE BUTTONS ─────────────────────────────────────────────
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

  const baseStyles = "relative overflow-hidden inline-flex h-11 w-full items-center justify-center gap-2 rounded-full px-6 text-sm font-bold transition-all duration-300 shadow-sm sm:w-auto z-10"
  const primaryTheme = "bg-[#191724] text-white dark:bg-white dark:text-[#191724]"
  const secondaryTheme = "border border-zinc-200 bg-white/80 text-[#191724] backdrop-blur-md dark:border-white/10 dark:bg-white/5 dark:text-white"

  return (
    <motion.div whileHover={{ scale: 1.02, y: -1 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
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
              transition={{ duration: 0.4, ease: "easeOut" }}
              style={{ left: mousePosition.x, top: mousePosition.y }}
              className={`absolute w-32 h-32 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none mix-blend-difference ${
                isPrimary ? "bg-white/25" : "bg-[#2f7259]/10"
              }`}
            />
          )}
        </AnimatePresence>
        <span className="relative z-10 flex items-center gap-2">{children}</span>
      </Link>
    </motion.div>
  )
}

// ─── STAGGER TEXT REVEALS WITH MANAGEABLE CONTROLS ─────────────────────────────
function SplitTextHeading({ children, className = "" }) {
  const words = children.split(" ")
  return (
    <h1 className={className}>
      {words.map((word, i) => {
        return (
          <span key={i} className="inline-block overflow-hidden mr-[0.22em] pb-1.5">
            <motion.span
              className="inline-block"
              initial={{ y: "115%" }}
              animate={{ y: 0 }}
              transition={{ type: "spring", damping: 22, stiffness: 120, delay: i * 0.05 }}
            >
              {word}
            </motion.span>
          </span>
        )
      })}
    </h1>
  )
}

// ─── MOTION INTERACTION STRUCTS ───────────────────────────────────────────────
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

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const mouseXSpring = useSpring(x, { damping: 30, stiffness: 300 })
  const mouseYSpring = useSpring(y, { damping: 30, stiffness: 300 })

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [8, -8])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-8, 8])
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
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      className={`${className} relative overflow-hidden rounded-xl bg-transparent`}
      variants={{
        hidden: { opacity: 0, y: 35, x: direction * 20, scale: 0.95 },
        show: { opacity: 1, y: 0, x: 0, scale: 1, transition: { type: 'spring', damping: 20, stiffness: 90 } }
      }}
      whileHover={{ scale: 1.02, z: 12 }}
    >
      <motion.div 
        style={{ left: glowX, top: glowY, background: 'radial-gradient(circle, rgba(150,214,191,0.15) 0%, transparent 65%)' }}
        className="absolute -translate-x-1/2 -translate-y-1/2 w-64 h-64 pointer-events-none z-0"
      />
      <div style={{ transform: 'translateZ(20px)', transformStyle: 'preserve-3d' }} className="h-full w-full relative z-10">
        {children}
      </div>
    </motion.div>
  )
}

// ─── DATA PARAMETERS ──────────────────────────────────────────────────────────
const pageUrl = absoluteUrl('/teen-digital-skills')
const schema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  headline: 'Teen Digital Skills | Skills Teenagers Can Learn and Earn With',
  description: 'A TeenVerseHub guide to practical teen digital skills for portfolio building, safe online work, and beginner-friendly earning paths.',
  author: { '@type': 'Organization', name: SITE.shortName },
  publisher: { '@type': 'Organization', name: SITE.shortName },
  mainEntityOfPage: pageUrl,
}

const skillSections = [
  {
    icon: Video,
    title: 'Creative execution',
    text: 'Video editing, thumbnails, captions, short-form content, and creator support are practical first skills because teens can build proof quickly and improve through feedback.',
  },
  {
    icon: Code2,
    title: 'Tech and AI workflows',
    text: 'Simple websites, landing page support, automation ideas, AI-assisted research, and prompt-based workflows help students turn curiosity into marketable output.',
  },
  {
    icon: ShieldCheck,
    title: 'Safe work habits',
    text: 'TeenVerseHub connects skill growth with safer communication, guardian awareness, clear scope, payment clarity, and responsible project boundaries.',
  },
]

const checklistItems = [
  'Choose one service category before chasing every skill at once',
  'Create portfolio samples even before the first client arrives',
  'Use clear deliverables, deadlines, and revision limits',
  'Keep communication and payment expectations structured',
]

const relatedLinks = [
  { href: '/how-to-earn-money-as-a-teenager', label: 'How teens earn' },
  { href: '/freelance-jobs-for-teens', label: 'Freelance jobs for teens' },
  { href: '/teen-portfolio-builder', label: 'Teen portfolio builder' },
  { href: '/safe-online-jobs-for-teens', label: 'Safe online jobs' },
]

export default function TeenDigitalSkillsPage() {
  return (
    <>
      <StructuredData data={schema} />
      <SiteHeader />
      
      <main className="tvh-page-shell relative min-h-screen bg-[#fbfaf7] text-[#191724] dark:bg-[#070b10] dark:text-white transition-colors duration-300 overflow-x-hidden">
        
        <LiquidMorphBackground />

        <section className="relative z-10 px-4 pb-16 pt-32 sm:px-6 sm:pt-40 lg:px-8">
          <div className="mx-auto max-w-4xl text-center flex flex-col items-center">
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring', damping: 15 }}
              className="mb-6 inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#2f7259] dark:border-white/10 dark:bg-white/[0.04] dark:text-[#96d6bf] shadow-sm"
            >
              <BadgeCheck className="h-4 w-4" />
              Skill discovery
            </motion.div>

            <SplitTextHeading className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-zinc-900 dark:text-white leading-[1.15]">
              Teen digital skills
            </SplitTextHeading>
            
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, type: 'spring', damping: 15 }}
              className="block text-2xl font-semibold text-[#2f7259] dark:text-[#96d6bf] mt-2 tracking-tight"
            >
              that can become real proof.
            </motion.span>

            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.5 }}
              className="mt-6 max-w-2xl text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed font-medium"
            >
              TeenVerseHub helps teenagers move from scattered learning to visible skills: sample work, profile clarity, beginner services, safer project habits, and a path toward real digital experience.
            </motion.p>
          </div>
        </section>

        <section className="relative z-10 px-4 pb-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <SpreadGroup className="grid gap-6 md:grid-cols-3">
              {skillSections.map((section, index) => {
                const IconComponent = section.icon
                return (
                  <SpreadItem key={section.title} direction={(index % 3) - 1} className="h-full">
                    <div className="h-full rounded-2xl border border-zinc-200/80 bg-white/80 p-6 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-white/[0.03] flex flex-col">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#eff7f2] text-[#245846] dark:bg-[#96d6bf]/10 dark:text-[#96d6bf] shadow-sm">
                        <IconComponent className="h-5 w-5" />
                      </div>
                      <h3 className="mt-5 text-xl font-bold tracking-tight text-zinc-900 dark:text-white">
                        {section.title}
                      </h3>
                      <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400 font-medium flex-1">
                        {section.text}
                      </p>
                    </div>
                  </SpreadItem>
                )
              })}
            </SpreadGroup>
          </div>
        </section>

        <section className="relative z-10 border-y border-zinc-200 bg-white/50 px-4 py-20 dark:border-zinc-800 dark:bg-[#070b14]/40 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', damping: 20 }}
              className="text-center mb-12"
            >
              <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#eff7f2] text-[#245846] dark:bg-[#96d6bf]/10 dark:text-[#96d6bf] mb-4 shadow-inner">
                <Sparkles className="h-4 w-4" />
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-3xl">
                Strategic Checklist for Earning
              </h2>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-2">
              {checklistItems.map((item, index) => {
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -15 : 15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ type: 'spring', damping: 18, delay: index * 0.05 }}
                    className="flex items-start gap-3 rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-white/5 dark:bg-[#070b10]"
                  >
                    <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-400">
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </div>
                    <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 leading-relaxed">
                      {item}
                    </span>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        <section className="relative z-10 px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center flex flex-col items-center">
            <h2 className="text-xl font-bold tracking-tight text-zinc-400 dark:text-zinc-500 uppercase tracking-wider text-xs">
              Continue Navigation Track
            </h2>
            
            <SpreadGroup className="mt-8 flex flex-wrap justify-center gap-3 w-full">
              {relatedLinks.map((link) => {
                return (
                  <SpreadItem key={link.href} direction={0} className="w-full sm:w-auto">
                    <CircleHoverButton href={link.href} isPrimary={false}>
                      <span className="font-semibold">{link.label}</span>
                      <ArrowRight className="h-4 w-4" />
                    </CircleHoverButton>
                  </SpreadItem>
                )
              })}
            </SpreadGroup>
          </div>
        </section>

      </main>
      
      <SiteFooter />
    </>
  )
}