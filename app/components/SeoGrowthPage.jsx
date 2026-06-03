'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  Code2,
  FileSearch,
  FileText,
  HelpCircle,
  LayoutDashboard,
  Search,
  ShieldCheck,
  Sparkles,
  UsersRound,
  Video,
  WandSparkles,
} from 'lucide-react'
import { motion, useReducedMotion, useMotionValue, useTransform, useSpring, useScroll, useVelocity, AnimatePresence } from 'framer-motion'

import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'
import StructuredData from './StructuredData'
import { SITE } from '../lib/site'

// ─── ICON SERIALIZATION MAP ──────────────────────────────────────────────────
const ICON_REGISTRY = {
  badge: BadgeCheck,
  video: Video,
  code: Code2,
  fileSearch: FileSearch,
  fileText: FileText,
  layoutDashboard: LayoutDashboard,
  search: Search,
  shield: ShieldCheck,
  users: UsersRound,
  wand: WandSparkles,
}

function LiquidMorphBackground() {
  const prefersReducedMotion = useReducedMotion()
  if (prefersReducedMotion) return null

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-0 opacity-30 dark:opacity-20">
      <svg className="absolute -left-20 -top-20 w-[800px] h-[800px] blur-3xl" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <motion.path
          fill="url(#seo-grad-mesh)"
          animate={{
            d: [
              "M42,-65.2C54.3,-57.3,64.1,-44.4,69.5,-29.5C74.9,-14.6,75.9,2.4,71.1,17.5C66.4,32.5,55.9,45.6,42.5,54.2C29.2,62.8,13.1,66.9,-3.1,71.4C-19.3,75.9,-35.5,80.8,-48,73.1C-60.5,65.4,-69.2,45,-73.4,27.2C-77.5,9.3,-77.1,-6,-71.6,-21C-66.2,-36,-55.7,-50.7,-42.5,-58.6C-29.3,-66.5,-13.1,-67.7,2.4,-71.2C17.9,-74.7,31.8,-69.5,42,-65.2Z",
              "M35.9,-50.5C47.6,-43.2,56.9,-31.6,62.1,-17.9C67.3,-4.2,68.4,11.6,63.3,25.5C58.1,39.3,46.7,51.2,33.3,59.3C19.9,67.4,4.5,71.7,-10.8,70.1C-26,68.4,-41.2,60.8,-52.5,49.5C-63.8,38.2,-71.4,23.1,-73.4,7.2C-75.4,-8.7,-72,-25.4,-62.5,-35.8C-53,-46.2,-37.5,-50.3,-23.4,-54.5C-9.3,-58.7,3.4,-63,16.9,-61.4C30.4,-59.9,24.2,-57.8,35.9,-50.5Z"
            ]
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          transform="translate(100 100)"
        />
        <defs>
          <linearGradient id="seo-grad-mesh" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#818cf8" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#96d6bf" stopOpacity="0" />
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

  const baseStyles = "relative overflow-hidden inline-flex h-11 w-full items-center justify-center gap-2 rounded-full px-6 text-sm font-bold transition-all duration-300 shadow-sm sm:w-auto z-10 text-center"
  const primaryTheme = "bg-zinc-950 text-white dark:bg-white dark:text-zinc-950"
  const secondaryTheme = "border border-zinc-200 bg-white/80 text-zinc-900 backdrop-blur-md dark:border-white/10 dark:bg-white/5 dark:text-white"

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
                isPrimary ? "bg-white/20" : "bg-indigo-500/10"
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

  const { scrollY } = useScroll()
  const scrollVelocity = useVelocity(scrollY)
  const rawSkew = useTransform(scrollVelocity, [-2000, 2000], [-4, 4])
  const skewSpring = useSpring(rawSkew, { damping: 25, stiffness: 220 })

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
      style={{ rotateX, rotateY, skewY: skewSpring, transformStyle: 'preserve-3d' }}
      className={`${className} relative overflow-hidden rounded-[2rem] bg-transparent`}
      variants={{
        hidden: { opacity: 0, y: 35, x: direction * 25, scale: 0.94 },
        show: { opacity: 1, y: 0, x: 0, scale: 1, transition: { type: 'spring', damping: 20, stiffness: 90 } }
      }}
      whileHover={{ scale: 1.02, z: 12 }}
    >
      <motion.div 
        style={{ left: glowX, top: glowY, background: 'radial-gradient(circle, rgba(150,214,191,0.12) 0%, transparent 65%)' }}
        className="absolute -translate-x-1/2 -translate-y-1/2 w-64 h-64 pointer-events-none z-0"
      />
      <div style={{ transform: 'translateZ(20px)', transformStyle: 'preserve-3d' }} className="h-full w-full relative z-10">
        {children}
      </div>
    </motion.div>
  )
}

export default function SeoGrowthPage({
  schema,
  eyebrow,
  title,
  accent,
  description,
  primaryKeyword,
  sections,
  checklist,
  relatedLinks,
}) {
  return (
    <>
      <StructuredData data={schema} />
      <SiteHeader />
      
      <main className="tvh-page-shell relative min-h-screen bg-[#fbfaf7] text-[#191724] dark:bg-[#070b10] dark:text-white transition-colors duration-300 overflow-x-hidden">
        
        <LiquidMorphBackground />

        <section className="relative z-10 px-4 pb-16 pt-32 sm:px-6 sm:pt-40 lg:px-8">
          <div className="tv-grid-mesh pointer-events-none absolute inset-0 -z-10 opacity-40 dark:opacity-20" />
          <div className="mx-auto max-w-7xl grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            
            <div className="text-left flex flex-col items-start">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: 'spring', damping: 15 }}
                className="tvh-eyebrow mb-6 inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-white shadow-sm dark:border-white/10 dark:bg-white/[0.04] text-xs font-semibold uppercase tracking-wider text-[#2f7259] dark:text-[#96d6bf]"
              >
                <Sparkles className="h-3.5 w-3.5" />
                {eyebrow}
              </motion.div>

              <SplitTextHeading className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-zinc-900 dark:text-white leading-[1.12]">
                {title}
              </SplitTextHeading>
              
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, type: 'spring', damping: 15 }}
                className="block text-2xl font-semibold text-[#2f7259] dark:text-[#96d6bf] mt-2 tracking-tight"
              >
                {accent}
              </motion.span>

              <motion.p 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="mt-6 max-w-2xl text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed font-medium"
              >
                {description}
              </motion.p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row items-center w-full sm:w-auto">
                <CircleHoverButton href={SITE.appUrl} isPrimary={true}>
                  <span>Login to TeenVerseHub</span>
                  <ArrowRight className="h-4 w-4" />
                </CircleHoverButton>
                <CircleHoverButton href="/safety" isPrimary={false}>
                  <span>Safety systems</span>
                </CircleHoverButton>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: 'spring', damping: 20, delay: 0.2 }}
              className="rounded-[2rem] border border-zinc-200/80 bg-white/70 p-6 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-white/[0.03] sm:p-8"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-100 text-zinc-800 dark:bg-white/10 dark:text-[#f4d58d] shadow-inner">
                <BadgeCheck className="h-5 w-5" />
              </div>
              <p className="font-mono mt-5 text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">Search intent</p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">{primaryKeyword}</h2>
              <p className="mt-4 text-sm font-medium leading-relaxed text-zinc-600 dark:text-zinc-400">
                This page is written to connect high-intent discovery traffic back to the platform login, trust pages, and relevant TeenVerseHub service paths.
              </p>
            </motion.div>

          </div>
        </section>

        <section className="relative z-10 px-4 py-20 sm:px-6 lg:px-8">
          <SpreadGroup className="mx-auto max-w-7xl grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sections.map((section, index) => {
              // Dynamically resolve the component matching our serializable string reference key
              const TargetIconComponent = ICON_REGISTRY[section.icon] || HelpCircle
              return (
                <SpreadItem key={section.title} direction={(index % 3) - 1} className="h-full">
                  <div className="h-full rounded-2xl border border-zinc-200/80 bg-white/80 p-6 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-white/[0.03] flex flex-col">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#eff7f2] text-[#245846] dark:bg-[#96d6bf]/10 dark:text-[#96d6bf] shadow-sm">
                      <TargetIconComponent className="h-5 w-5" />
                    </div>
                    <h2 className="mt-5 text-lg font-bold tracking-tight text-zinc-900 dark:text-white">{section.title}</h2>
                    <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400 font-medium flex-1">{section.text}</p>
                  </div>
                </SpreadItem>
              )
            })}
          </SpreadGroup>
        </section>

        <section className="relative z-10 border-y border-zinc-200 bg-white/50 px-4 py-20 dark:border-zinc-800 dark:bg-[#070b14]/40 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ type: 'spring', damping: 20 }}
            >
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-zinc-900 text-[#ccff00] dark:bg-white/10 dark:text-[#f4d58d] shadow-sm">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h2 className="mt-4 text-2xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-3xl">What this means inside TeenVerseHub</h2>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-zinc-500 dark:text-zinc-400 font-medium">
                The goal is not only ranking. Each page needs to move people toward a safer, clearer product action.
              </p>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-2">
              {checklist.map((item, index) => {
                return (
                  <motion.div 
                    key={item}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ type: 'spring', damping: 18, delay: index * 0.05 }}
                    className="flex gap-3 rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-white/5 dark:bg-[#070b10]"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#2f7259] dark:text-[#96d6bf]" />
                    <p className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-300 font-medium">{item}</p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        <section className="relative z-10 px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-zinc-200 bg-white/80 p-8 shadow-sm dark:border-white/10 dark:bg-white/[0.02] sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div className="text-left">
                <p className="font-mono text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">Related TeenVerseHub pages</p>
                <h2 className="mt-2 text-2xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl leading-tight">Keep moving through the funnel.</h2>
              </div>
              
              <div className="grid gap-3 sm:grid-cols-2 w-full">
                {relatedLinks.map((link) => {
                  return (
                    <Link 
                      key={link.href} 
                      href={link.href} 
                      className="group flex items-center justify-between rounded-xl border border-zinc-200 bg-white px-5 py-4 text-sm font-semibold text-zinc-800 transition hover:bg-zinc-50 dark:border-white/5 dark:bg-white/[0.03] dark:text-slate-300 dark:hover:bg-white/[0.06]"
                    >
                      <span>{link.label}</span>
                      <ArrowRight className="h-4 w-4 transition transform group-hover:translate-x-1.5" />
                    </Link>
                  )
                })}
                
                <a 
                  href={SITE.appUrl} 
                  className="group flex items-center justify-between rounded-xl bg-[#191724] px-5 py-4 text-sm font-semibold text-white transition hover:bg-[#2a2636] dark:bg-white dark:text-[#191724] dark:hover:bg-zinc-100"
                >
                  <span>Login page</span>
                  <ArrowRight className="h-4 w-4 transition transform group-hover:translate-x-1.5" />
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>
      
      <SiteFooter />
    </>
  )
}
