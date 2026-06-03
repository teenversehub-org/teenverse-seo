'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, BadgeCheck, Code2, FileText, PenTool, Video } from 'lucide-react'
import { motion, useReducedMotion, useMotionValue, useTransform, useSpring, useScroll } from 'framer-motion'

import SiteFooter from '../components/SiteFooter'
import SiteHeader from '../components/SiteHeader'
import StructuredData from '../components/StructuredData'
import { SITE, absoluteUrl, buildMetadata } from '../lib/site'

// ─── BACKGROUND LAYERS ────────────────────────────────────────────────────────
function AmbientGlowCanvas() {
  const prefersReducedMotion = useReducedMotion()
  const { scrollYProgress } = useScroll()
  
  const blobRotate = useTransform(scrollYProgress, [0, 1], [0, 240])
  const blobScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.15, 0.95])

  if (prefersReducedMotion) return null

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-0 opacity-40 dark:opacity-20">
      <motion.div
        style={{ rotate: blobRotate, scale: blobScale }}
        className="absolute -right-20 top-20 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-[#96d6bf]/30 via-[#5b245e]/5 to-transparent blur-[100px]"
      />
      <motion.div
        animate={{ x: [0, -30, 20, 0], y: [0, 40, -20, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute left-10 top-1/3 h-[600px] w-[600px] rounded-full bg-gradient-to-tr from-[#eff7f2]/50 via-transparent to-[#5b245e]/10 blur-[120px]"
      />
    </div>
  )
}

// ─── TYPOGRAPHY ENGINE ────────────────────────────────────────────────────────
function SplitWordHeading({ children, className = "" }) {
  const words = children.split(" ")
  return (
    <h1 className={className}>
      {words.map((word, i) => {
        return (
          <span key={i} className="inline-block overflow-hidden mr-[0.25em] pb-1">
            <motion.span
              className="inline-block"
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ type: "spring", damping: 22, stiffness: 120, delay: i * 0.06 }}
            >
              {word}
            </motion.span>
          </span>
        )
      })}
    </h1>
  )
}

// ─── INTERACTIVE STAGGER & TILT SYSTEMS ───────────────────────────────────────
function SpreadGroup({ children, className = '' }) {
  const prefersReducedMotion = useReducedMotion()

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.05 }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.08,
          },
        },
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

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      className={`${className} relative overflow-hidden rounded-2xl bg-transparent`}
      variants={{
        hidden: {
          opacity: 0,
          y: 40,
          x: direction * 25,
          scale: 0.94,
        },
        show: {
          opacity: 1,
          y: 0,
          x: 0,
          scale: 1,
          transition: {
            type: 'spring',
            damping: 20,
            stiffness: 90,
          },
        },
      }}
      whileHover={{
        scale: 1.02,
        z: 15,
        transition: { type: 'spring', damping: 15, stiffness: 250 },
      }}
    >
      <motion.div 
        style={{ left: glowX, top: glowY, background: 'radial-gradient(circle, rgba(150,214,191,0.15) 0%, transparent 65%)' }}
        className="absolute -translate-x-1/2 -translate-y-1/2 w-72 h-72 pointer-events-none z-0"
      />
      <div style={{ transform: 'translateZ(20px)', transformStyle: 'preserve-3d' }} className="h-full w-full relative z-10">
        {children}
      </div>
    </motion.div>
  )
}

// ─── DATA & STRUCTURES ────────────────────────────────────────────────────────
const portfolioTypes = [
  {
    icon: Video,
    title: 'Teen video editors',
    text: 'Short-form edits, subtitles, gaming clips, creator reels, and before-after editing samples.',
    href: '/skills/video-editing-for-students',
  },
  {
    icon: PenTool,
    title: 'Student designers',
    text: 'Thumbnails, social media posts, posters, landing page mockups, and beginner brand boards.',
    href: '/skills/graphic-design-gigs-under-18',
  },
  {
    icon: FileText,
    title: 'Teen writers',
    text: 'Captions, scripts, blog drafts, research notes, outlines, and SEO-friendly writing samples.',
    href: '/blog/content-writing-jobs-for-teens',
  },
  {
    icon: Code2,
    title: 'Frontend learners',
    text: 'Landing pages, UI sections, small tools, portfolio sites, and student web experiments.',
    href: '/teen-digital-skills',
  },
]

const pageUrl = absoluteUrl('/portfolios')

const schema = [
  {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${pageUrl}#collection`,
    name: 'Browse Creative Student Portfolios',
    description: 'A public, crawlable TeenVerseHub portfolio index for student creators and teen freelancers.',
    url: pageUrl,
    isAccessibleForFree: true,
    audience: {
      '@type': 'PeopleAudience',
      name: SITE.audience,
      suggestedMinAge: SITE.minimumAge,
      suggestedMaxAge: SITE.maximumAge,
    },
    publisher: { '@id': `${SITE.baseUrl}/#organization` },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: portfolioTypes.map((item, index) => {
      return {
        '@type': 'ListItem',
        position: index + 1,
        name: item.title,
        url: absoluteUrl(item.href),
      }
    }),
  },
]

export default function PortfoliosPage() {
  return (
    <>
      <StructuredData data={schema} />
      <SiteHeader />
      <main className="tvh-page-shell relative min-h-screen bg-[#fbfaf7] text-[#21142f] dark:bg-[#070b10] dark:text-white transition-colors duration-300 overflow-x-hidden">
        
        <AmbientGlowCanvas />

        <section className="tvh-section relative z-10 isolate pb-16 pt-32 sm:pt-40">
          <div className="tv-grid-mesh pointer-events-none absolute inset-0 -z-10 opacity-40 dark:opacity-20" />
          <div className="tvh-section-inner max-w-5xl px-4 sm:px-6 lg:px-8">
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring', damping: 15 }}
              className="tvh-eyebrow inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-zinc-200 bg-white shadow-sm dark:border-white/10 dark:bg-white/[0.04] text-xs font-semibold uppercase tracking-wider text-[#2f7259] dark:text-[#96d6bf]"
            >
              <BadgeCheck className="h-4 w-4" />
              Public portfolio index
            </motion.div>

            <SplitWordHeading className="tvh-display mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-zinc-900 dark:text-white leading-[1.1]">
              Browse creative student portfolios before logging in.
            </SplitWordHeading>

            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="tvh-copy mt-6 max-w-3xl text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed"
            >
              This public index keeps TeenVerseHub portfolio discovery crawlable.
              Startups, creators, parents, and students can explore the main
              student talent categories without needing a private dashboard.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <motion.a 
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                href={SITE.appUrl} 
                className="tvh-primary group inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-[#191724] px-5 text-sm font-semibold text-white transition shadow-md hover:bg-[#2a2636] w-full sm:w-auto dark:bg-white dark:text-[#191724] dark:hover:bg-slate-100"
              >
                <span>Create a portfolio</span>
                <ArrowRight className="h-4 w-4 transition transform group-hover:translate-x-1" />
              </motion.a>
              
              <motion.div whileHover={{ scale: 1.02, y: -1 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
                <Link 
                  href="/hire-teen-freelancers" 
                  className="tvh-secondary inline-flex h-11 w-full items-center justify-center rounded-lg border border-zinc-200 bg-white px-5 text-sm font-semibold text-[#191724] shadow-sm transition hover:border-zinc-300 hover:bg-zinc-50 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
                >
                  Hire student talent
                </Link>
              </motion.div>
            </motion.div>

          </div>
        </section>

        <section className="tvh-section relative z-10 px-4 pb-24 sm:px-6 lg:px-8">
          <SpreadGroup className="tvh-section-inner max-w-5xl grid gap-6 sm:grid-cols-2">
            {portfolioTypes.map((item, index) => {
              const Icon = item.icon
              return (
                <SpreadItem key={item.title} direction={index % 2 === 0 ? -1 : 1} className="h-full">
                  <Link
                    href={item.href}
                    className="group flex flex-col justify-between h-full rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-sm transition-colors duration-300 hover:border-zinc-300 dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-white/20 sm:p-8"
                  >
                    <div>
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#21142f] text-white dark:bg-white dark:text-[#21142f] shadow-sm">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h2 className="mt-5 text-2xl font-bold tracking-tight text-[#21142f] dark:text-white">
                        {item.title}
                      </h2>
                      <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400 font-medium">
                        {item.text}
                      </p>
                    </div>
                    
                    <div className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#5b245e] dark:text-[#f4d58d]">
                      <span>Open category</span>
                      <ArrowRight className="h-4 w-4 transition transform group-hover:translate-x-1.5" />
                    </div>
                  </Link>
                </SpreadItem>
              )
            })}
          </SpreadGroup>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}