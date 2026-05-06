'use client'

import { cloneElement, isValidElement, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Check, Plus, Zap } from 'lucide-react'
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  animate,
  AnimatePresence,
  useScroll,
} from 'framer-motion'

// ─── UTILITIES ────────────────────────────────────────────────────────────────
function cx(...classes) { return classes.filter(Boolean).join(' ') }
function isExternal(href) { return href?.startsWith('http') || href?.startsWith('mailto:') }

// ─── VARIANTS ─────────────────────────────────────────────────────────────────
const STAGGER = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.06 } },
}
const RISE = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 200, damping: 26 } },
}
const FADE = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}

// ─── GLOBAL STYLES ────────────────────────────────────────────────────────────
export function GlobalStyles() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,600;0,9..144,700;0,9..144,800;1,9..144,400&family=Plus+Jakarta+Sans:wght@300;400;500;600&display=swap');

      :root {
        --bg:           #f8f7f4;
        --bg-card:      rgba(255,255,255,0.8);
        --bg-card-h:    rgba(255,255,255,0.97);
        --border:       rgba(0,0,0,0.07);
        --border-mid:   rgba(0,0,0,0.11);

        /* General Gradients */
        --grad-hero:      linear-gradient(135deg, #0e0e14 0%, #3730a3 100%);
        --grad-features:  linear-gradient(135deg, #0c1a2e 0%, #1d4ed8 100%);
        --grad-cta:       linear-gradient(135deg, #fff 0%, #c7d2fe 100%);

        --indigo:   #4338ca;
        --indigo-l: #818cf8;
        --blue:     #2563eb;
      }

      .dark {
        --bg:         #09090f;
        --bg-card:    rgba(20,18,35,0.75);
        --bg-card-h:  rgba(28,24,48,0.9);
        --border:     rgba(255,255,255,0.07);
        --border-mid: rgba(255,255,255,0.12);
        
        /* General Gradients */
        --grad-features: linear-gradient(135deg, #fff 0%, #bae6fd 100%);
        --grad-cta:      linear-gradient(135deg, #fff 0%, #c7d2fe 100%);
      }

      html { scroll-behavior: smooth }

      body {
        font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
        background: var(--bg);
        color: #0e0e14; /* Fallback */
        -webkit-font-smoothing: antialiased;
        background-image:
          radial-gradient(ellipse 70% 55% at 15% 0%, rgba(99,102,241,0.07) 0%, transparent 65%),
          radial-gradient(ellipse 60% 45% at 85% 100%, rgba(251,191,36,0.04) 0%, transparent 60%);
        background-attachment: fixed;
      }
      
      /* Force body color in dark mode natively */
      .dark body { color: #f0eeff; }

      h1,h2,h3,h4 {
        font-family: 'Fraunces', Georgia, serif;
        letter-spacing: -0.025em;
      }

      /* ─── H1 Custom Line Gradient Styling ─── */
      .hero-title {
        /* Light Mode: Sky Blue to Purple-Red */
        background: linear-gradient(135deg, #38bdf8 0%, #c026d3 100%); 
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        color: transparent;
      }
      .hero-title::first-line {
        /* Light Mode: First line Black */
        -webkit-text-fill-color: #0e0e14;
        color: #0e0e14;
      }
      
      .dark .hero-title {
        /* Dark Mode: Neon Lime to Green */
        background: linear-gradient(135deg, #ccff00 0%, #22c55e 100%); 
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        color: transparent;
      }
      .dark .hero-title::first-line {
        /* Dark Mode: First line White */
        -webkit-text-fill-color: #ffffff;
        color: #ffffff;
      }

      /* gradient text helpers */
      .g-hero { background: var(--grad-hero); -webkit-background-clip: text; background-clip: text; color: transparent; display: inline }
      .g-feat { background: var(--grad-features); -webkit-background-clip: text; background-clip: text; color: transparent; display: inline }
      .g-cta  { background: var(--grad-cta);  -webkit-background-clip: text; background-clip: text; color: transparent; display: inline }

      @keyframes pulse-dot { 0%,100% { opacity:0.5; transform:scale(1) } 50% { opacity:1; transform:scale(1.4) } }
      @keyframes shimmer { 0% { background-position:-200% center } 100% { background-position:200% center } }

      .dot-pulse { animation: pulse-dot 2.4s ease-in-out infinite }
      .shimmer-btn { background-size: 250% auto; animation: shimmer 3.5s linear infinite }

      p { margin: 0 }
      img,svg,video { display:block; max-width:100% }
      ::selection { background: rgba(99,102,241,0.14); color: inherit }
      *:focus-visible { outline: 2px solid rgba(99,102,241,0.65); outline-offset: 3px }
      ::-webkit-scrollbar { width: 8px }
      ::-webkit-scrollbar-track { background: transparent }
      ::-webkit-scrollbar-thumb { background: rgba(99,102,241,0.18); border-radius: 999px; border: 2px solid var(--bg) }
      ::-webkit-scrollbar-thumb:hover { background: rgba(99,102,241,0.32) }
    `}</style>
  )
}

// ─── ANIMATED COUNTER ─────────────────────────────────────────────────────────
function AnimCounter({ value, duration = 2 }) {
  const [disp, setDisp] = useState('0')
  useEffect(() => {
    const raw = value.replace(/[^0-9.]/g, '')
    const pre = value.replace(/[0-9.,]+.*/, '')
    const suf = value.replace(/.*?[0-9.,]+/, '')
    const end = parseFloat(raw) || 0
    const dec = (raw.split('.')[1] || '').length
    const ctrl = animate(0, end, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: v => setDisp(pre + v.toFixed(dec) + suf),
    })
    return () => ctrl.stop()
  }, [value, duration])
  return <span className="tabular-nums">{disp}</span>
}

// ─── SPOTLIGHT CARD (hover glow) ──────────────────────────────────────────────
export function SpotlightCard({ children, className = '' }) {
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  return (
    <motion.div
      className={cx('group relative overflow-hidden', className)}
      onMouseMove={({ currentTarget, clientX, clientY }) => {
        const { left, top } = currentTarget.getBoundingClientRect()
        mx.set(clientX - left)
        my.set(clientY - top)
      }}
      variants={RISE}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[inherit] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: useTransform(
            [mx, my],
            ([x, y]) => `radial-gradient(420px circle at ${x}px ${y}px, rgba(99,102,241,0.1), transparent 72%)`
          ),
        }}
      />
      {children}
    </motion.div>
  )
}

// ─── TILT CARD ────────────────────────────────────────────────────────────────
export function TiltCard({ children, className = '', intensity = 10 }) {
  const ref = useRef(null)
  const x = useMotionValue(0.5)
  const y = useMotionValue(0.5)
  const cfg = { damping: 24, stiffness: 280, mass: 0.5 }
  const xs = useSpring(x, cfg)
  const ys = useSpring(y, cfg)
  const rX = useTransform(ys, [0, 1], [intensity, -intensity])
  const rY = useTransform(xs, [0, 1], [-intensity, intensity])
  return (
    <motion.div
      ref={ref}
      onMouseMove={e => {
        if (!ref.current) return
        const r = ref.current.getBoundingClientRect()
        x.set((e.clientX - r.left) / r.width)
        y.set((e.clientY - r.top) / r.height)
      }}
      onMouseLeave={() => { x.set(0.5); y.set(0.5) }}
      style={{ rotateX: rX, rotateY: rY, transformStyle: 'preserve-3d' }}
      whileHover={{ scale: 1.015 }}
      className={cx('relative', className)}
    >
      {children}
    </motion.div>
  )
}

// ─── ACTION LINK ──────────────────────────────────────────────────────────────
export function ActionLink({ href = '#', children, variant = 'primary', className = '' }) {
  const base = 'group inline-flex min-h-[3rem] items-center justify-center gap-2.5 rounded-full px-7 py-3 text-[14.5px] font-semibold tracking-tight transition-all duration-300'
  const styles = {
    primary: cx(
      base,
      'text-white shimmer-btn',
      'bg-[linear-gradient(135deg,#3730a3,#4f46e5,#818cf8,#3730a3)]',
      'shadow-[0_6px_24px_-6px_rgba(67,56,202,0.55)]',
      'hover:shadow-[0_10px_32px_-6px_rgba(67,56,202,0.7)] hover:-translate-y-0.5',
    ),
    secondary: cx(
      base,
      'bg-[var(--bg-card)] text-slate-900 dark:text-white ring-1 ring-[var(--border-mid)] backdrop-blur-xl',
      'hover:bg-[var(--bg-card-h)] hover:ring-[rgba(99,102,241,0.35)] hover:shadow-md hover:-translate-y-0.5',
    ),
    ghost: cx(
      'group inline-flex items-center gap-1.5 text-[14px] font-semibold',
      'bg-gradient-to-r from-[var(--indigo)] to-[var(--blue)] bg-clip-text text-transparent',
    ),
  }
  const isExt = isExternal(href)
  const Comp = isExt ? 'a' : Link
  return (
    <motion.div whileTap={{ scale: 0.96 }} className="inline-flex">
      <Comp href={href} className={cx(styles[variant], className)}>
        {children}
        <ArrowRight className={cx(
          'h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1',
          variant === 'ghost' ? 'text-[var(--blue)]' : ''
        )} />
      </Comp>
    </motion.div>
  )
}

// ─── SECTION ──────────────────────────────────────────────────────────────────
export function Section({ id, className = '', children }) {
  return (
    <section id={id} className={cx('relative isolate overflow-hidden px-6 py-24 sm:px-10 lg:px-16 lg:py-32', className)}>
      <div className="mx-auto flex w-full max-w-[1160px] flex-col items-center">{children}</div>
    </section>
  )
}

// ─── EYEBROW ──────────────────────────────────────────────────────────────────
function Eyebrow({ children }) {
  return (
    <motion.span variants={RISE} className={cx(
      'mb-6 inline-flex items-center gap-2.5 rounded-full px-4 py-1.5',
      'text-[11px] font-bold uppercase tracking-[0.25em] text-indigo-600',
      'bg-white/85 ring-1 ring-[var(--border-mid)] backdrop-blur-xl shadow-sm',
      'dark:bg-white/5 dark:text-indigo-400 dark:ring-white/10',
    )}>
      <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 dot-pulse" />
      {children}
    </motion.span>
  )
}

// ─── SECTION HEADING ──────────────────────────────────────────────────────────
export function SectionHeading({ eyebrow, title, description, align = 'center', page = 'hero' }) {
  // Map page names to specific gradient classes defined in globals.css
  const pageClass = {
    hero: '',
    features: 'feat',
    cta: 'cta',
    faq: 'faq'
  }[page] || ''

  const isCentered = align === 'center'
  
  return (
    <motion.div
      initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }}
      variants={STAGGER}
      className={cx('w-full', isCentered ? 'mx-auto max-w-[760px] text-center' : 'max-w-[640px]')}
    >
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      
      <motion.h2 
        variants={RISE} 
        className={cx(
          'section-title', // Custom CSS Class for First-Line logic
          pageClass,       // Modifier for specific gradients (feat, cta, faq)
          'text-[2.4rem] font-bold leading-[1.06] sm:text-5xl lg:text-[3.2rem]',
          '[text-wrap:balance]',
        )}
      >
        {title}
      </motion.h2>

      {description && (
        <motion.p 
          variants={FADE} 
          className={cx(
            'mt-5 text-[1.05rem] leading-[1.9]',
            /* Force secondary text color using your DM Sans tokens */
            'text-[#4a455c] dark:text-[#fcfbff]', 
            isCentered ? 'mx-auto max-w-xl' : 'max-w-lg',
          )}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  )
}

// ─── HERO ─────────────────────────────────────────────────────────────────────
export function Hero({ eyebrow, title, description, primaryAction, secondaryAction, proof = [], image, imageAlt, children }) {
  const { scrollY } = useScroll()
  const blobY = useTransform(scrollY, [0, 600], [0, 100])

  return (
    <section className="relative isolate overflow-hidden px-6 pb-24 pt-32 sm:px-10 lg:px-16 lg:pb-32 lg:pt-48">
      {/* Ambient blobs – Colors forced to match the H1 gradient themes */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <motion.div style={{ y: blobY }}
          className="absolute -top-24 left-[10%] h-[480px] w-[480px] rounded-full bg-sky-400/10 dark:bg-[#ccff00]/10 blur-[120px]" />
        <motion.div style={{ y: blobY }}
          className="absolute top-0 right-[5%] h-[360px] w-[360px] rounded-full bg-pink-500/10 dark:bg-green-500/10 blur-[100px]" />
      </div>

      <motion.div
        initial="hidden" animate="show" variants={STAGGER}
        className={cx(
          'relative mx-auto w-full max-w-[1160px]',
          image
            ? 'grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center'
            : 'flex flex-col items-center text-center',
        )}
      >
        <div className={cx('w-full', image ? 'max-w-[600px] lg:mx-0' : 'mx-auto max-w-5xl')}>

          {/* Eyebrow */}
          {eyebrow && (
            <motion.div variants={RISE} className={cx(
              'mb-8 inline-flex items-center gap-2.5 rounded-full px-4 py-2',
              'text-[11px] font-bold uppercase tracking-[0.25em] text-indigo-600',
              'bg-white/90 ring-1 ring-[var(--border-mid)] backdrop-blur-xl shadow-sm',
              'dark:bg-white/5 dark:text-indigo-400 dark:ring-white/10',
            )}>
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 dot-pulse" />
              {eyebrow}
            </motion.div>
          )}

          {/* H1 — First line solid, subsequent lines gradient */}
<motion.h1 
  variants={RISE} 
  className={cx(
    'hero-title', // This triggers the CSS we wrote above
    'font-bold leading-[1.03]',
    'text-[3.4rem] sm:text-[4.4rem] lg:text-[5.6rem]',
    '[text-wrap:balance]',
    image ? 'max-w-[14ch]' : 'mx-auto max-w-[16ch]',
  )}
>
  {title}
</motion.h1>

          {/* Description — Fixed using the .hero-description class */}
<motion.p 
  variants={FADE} 
  className={cx(
    'hero-description mt-7 text-[1.12rem] leading-[1.9]',
    image ? 'max-w-[500px]' : 'mx-auto max-w-[600px]',
  )}
>
  {description}
</motion.p>

          {/* CTAs */}
          <motion.div variants={FADE} className={cx(
            'mt-10 flex flex-col gap-3.5 sm:flex-row',
            image ? 'lg:justify-start' : 'justify-center',
          )}>
            <ActionLink href={primaryAction.href}>{primaryAction.label}</ActionLink>
            {secondaryAction && (
              <ActionLink href={secondaryAction.href} variant="secondary">{secondaryAction.label}</ActionLink>
            )}
          </motion.div>

          {/* Proof pills */}
          {proof.length > 0 && (
            <motion.ul variants={STAGGER} className={cx(
              'mt-12 grid gap-3 text-sm',
              proof.length >= 3 ? 'sm:grid-cols-3' : 'sm:grid-cols-2',
              image ? '' : 'max-w-3xl mx-auto',
            )}>
              {proof.map(item => (
                <motion.li variants={RISE} key={item} className={cx(
                  'flex items-center gap-3 rounded-2xl px-4 py-3.5',
                  'bg-white/70 text-slate-900 font-medium ring-1 ring-[var(--border)] backdrop-blur-lg',
                  'dark:bg-white/4 dark:text-slate-200 dark:ring-white/7', // FIXED TO NATIVE TAILWIND
                )}>
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900/40">
                    <Check className="h-3 w-3 text-indigo-600 dark:text-indigo-400" strokeWidth={3} />
                  </span>
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          )}
          {children}
        </div>

        {/* Hero image — Pushed to the right using translations */}
        {image && (
          <motion.div variants={RISE} className="mx-auto w-full max-w-lg lg:justify-self-end lg:translate-x-10 xl:translate-x-16">
            <TiltCard intensity={10}>
              <div className={cx(
                'relative overflow-hidden p-[2px]',
                'rounded-[52px]',
                'bg-[linear-gradient(135deg,#4338ca,#818cf8,#6366f1)]',
                'shadow-[0_24px_64px_-12px_rgba(67,56,202,0.4)]',
              )}>
                <div className={cx(
                  'relative overflow-hidden rounded-[50px]',
                  'bg-white/50 p-2.5 backdrop-blur-2xl dark:bg-[#09090f]/90',
                )}>
                  <div className="flex items-center gap-1.5 px-3 py-2">
                    <span className="h-2 w-2 rounded-full bg-red-400" />
                    <span className="h-2 w-2 rounded-full bg-amber-400" />
                    <span className="h-2 w-2 rounded-full bg-green-400" />
                  </div>
                  <div className="overflow-hidden rounded-[42px] bg-[#09090f]">
                    <Image
                      src={image} alt={imageAlt}
                      width={1200} height={900}
                      className="h-[300px] w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-[400px] lg:h-[480px]"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </TiltCard>
          </motion.div>
        )}
      </motion.div>
    </section>
  )
}

// ─── FEATURE BENTO ────────────────────────────────────────────────────────────
export function FeatureBentoSection({ bigCard, smallCards }) {
  return (
    <section className="relative isolate overflow-hidden px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
      <motion.div
        initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }}
        variants={STAGGER}
        className="mx-auto w-full max-w-[1160px]"
      >
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-12 lg:gap-6">

          {/* Big card – deep indigo */}
          <motion.div variants={RISE} className="flex flex-col lg:col-span-5">
            <div className={cx(
              'group relative flex h-full flex-col justify-between overflow-hidden',
              'rounded-[40px] p-9 sm:p-11',
              'bg-[linear-gradient(150deg,#1e1b4b_0%,#1e1440_40%,#0c1220_100%)]',
              'ring-1 ring-white/8 shadow-[0_32px_64px_-16px_rgba(67,56,202,0.4)]',
              'transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_40px_80px_-16px_rgba(67,56,202,0.55)]',
            )}>
              {/* Inner glow */}
              <div className="pointer-events-none absolute -top-16 -left-8 h-64 w-64 rounded-full bg-indigo-500/10 blur-[80px]" />

              <div className="relative z-10">
                <span className={cx(
                  'mb-7 inline-flex items-center gap-2 rounded-full px-3.5 py-1',
                  'text-[10px] font-bold uppercase tracking-[0.28em] text-indigo-300',
                  'bg-white/7 ring-1 ring-white/12',
                )}>
                  <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
                  {bigCard?.eyebrow || 'Feature'}
                </span>
                <h2 className="text-[1.9rem] font-bold leading-[1.1] text-white sm:text-[2.1rem]">
                  {bigCard?.title}
                </h2>
                <p className="mt-4 text-[1rem] leading-[1.85] text-indigo-200/70">
                  {bigCard?.description}
                </p>
                {bigCard?.points && (
                  <ul className="mt-7 space-y-3.5">
                    {bigCard.points.map((pt, i) => (
                      <motion.li whileHover={{ x: 4 }} key={i}
                        className="flex items-start gap-3.5 text-[0.93rem] leading-[1.8] text-indigo-100/80">
                        <span className="mt-1.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-indigo-500/25 ring-1 ring-indigo-400/30">
                          <Zap className="h-2.5 w-2.5 text-indigo-400" />
                        </span>
                        {pt}
                      </motion.li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="relative z-10 mt-9">
                <ActionLink href={bigCard?.link?.href || '#'}>{bigCard?.link?.label || 'Learn more'}</ActionLink>
              </div>
            </div>
          </motion.div>

          {/* Small cards – frosted glass */}
          <div className="lg:col-span-7">
            <div className="grid h-full grid-cols-1 gap-5 sm:grid-cols-2">
              {smallCards.map((item, index) => {
                const Icon = item.icon
                const icon = isValidElement(Icon)
                  ? cloneElement(Icon, { className: 'h-5 w-5' })
                  : Icon ? <Icon className="h-5 w-5" /> : null

                const accents = [
                  { bg: 'bg-indigo-50 dark:bg-indigo-900/25 ring-indigo-100 dark:ring-indigo-500/15', color: 'text-indigo-600 dark:text-indigo-400' },
                  { bg: 'bg-sky-50 dark:bg-sky-900/25 ring-sky-100 dark:ring-sky-500/15',              color: 'text-sky-600 dark:text-sky-400' },
                  { bg: 'bg-amber-50 dark:bg-amber-900/25 ring-amber-100 dark:ring-amber-500/15',   color: 'text-amber-600 dark:text-amber-400' },
                  { bg: 'bg-emerald-50 dark:bg-emerald-900/25 ring-emerald-100 dark:ring-emerald-500/15', color: 'text-emerald-600 dark:text-emerald-400' },
                ]
                const a = accents[index % accents.length]

                return (
                  <SpotlightCard key={index} className={cx(
                    'flex h-full flex-col rounded-[30px] p-7',
                    'bg-white/70 ring-1 ring-[var(--border)] shadow-sm backdrop-blur-2xl',
                    'transition-all duration-400 hover:-translate-y-1.5 hover:bg-white/90 hover:shadow-lg',
                    'dark:bg-[rgba(24,18,42,0.65)] dark:ring-white/7 dark:hover:bg-[rgba(32,24,56,0.8)]',
                    index % 2 !== 0 && 'sm:mt-8',
                  )}>
                    {icon && (
                      <div className={cx(
                        'mb-5 flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] ring-1',
                        'transition-transform duration-400 group-hover:scale-110 group-hover:-rotate-6',
                        a.bg, a.color,
                      )}>
                        {cloneElement(icon, { className: cx('h-5 w-5', a.color) })}
                      </div>
                    )}
                    <h3 className="text-[1.1rem] font-semibold tracking-tight text-slate-900 dark:text-white">{item.title}</h3>
                    <p className="mt-3 flex-1 text-[0.92rem] leading-[1.85] text-slate-600 dark:text-slate-300">{item.description}</p>
                  </SpotlightCard>
                )
              })}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

// ─── STAT GRID ────────────────────────────────────────────────────────────────
export function StatGrid({ items }) {
  const numGrads = [
    'bg-[linear-gradient(135deg,#3730a3,#818cf8)] bg-clip-text text-transparent',
    'bg-[linear-gradient(135deg,#1d4ed8,#38bdf8)] bg-clip-text text-transparent',
    'bg-[linear-gradient(135deg,#065f46,#34d399)] bg-clip-text text-transparent',
    'bg-[linear-gradient(135deg,#92400e,#fbbf24)] bg-clip-text text-transparent',
  ]
  return (
    <motion.div
      initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }}
      variants={STAGGER}
      className="mx-auto grid w-full max-w-[1160px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
    >
      {items.map((item, i) => (
        <SpotlightCard key={item.label} className={cx(
          'relative flex flex-col rounded-[28px] p-8 overflow-hidden',
          'bg-white/70 ring-1 ring-[var(--border)] shadow-sm backdrop-blur-2xl',
          'transition-all duration-400 hover:shadow-lg hover:bg-white/90 hover:-translate-y-1.5',
          'dark:bg-[rgba(24,18,42,0.65)] dark:ring-white/7',
          i % 2 !== 0 && 'lg:translate-y-8',
        )}>
          <div className={cx(
            'pointer-events-none absolute -top-6 -right-6 h-24 w-24 rounded-full opacity-15 blur-2xl',
            ['bg-indigo-400','bg-sky-400','bg-emerald-400','bg-amber-400'][i % 4],
          )} />
          <p className="relative text-[10px] font-bold uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400">{item.label}</p>
          <p className={cx('relative mt-3 text-[2.4rem] font-bold leading-tight', numGrads[i % numGrads.length])}>
            <AnimCounter value={item.value} />
          </p>
          <p className="relative mt-3 flex-1 text-[0.92rem] leading-[1.85] text-slate-600 dark:text-slate-300">{item.detail}</p>
        </SpotlightCard>
      ))}
    </motion.div>
  )
}

// ─── FEATURE GRID ─────────────────────────────────────────────────────────────
export function FeatureGrid({ items }) {
  const palettes = [
    { grad: 'from-indigo-500 to-violet-600', glow: 'bg-indigo-400/10' },
    { grad: 'from-sky-500 to-cyan-500',      glow: 'bg-sky-400/10' },
    { grad: 'from-rose-500 to-pink-500',     glow: 'bg-rose-400/10' },
    { grad: 'from-amber-500 to-orange-400',  glow: 'bg-amber-400/10' },
  ]
  const gridClass = items.length === 4 ? 'sm:grid-cols-2 lg:grid-cols-4' : 'sm:grid-cols-2 lg:grid-cols-3'

  return (
    <motion.div
      initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }}
      variants={STAGGER}
      className={cx('mx-auto grid w-full max-w-[1160px] gap-5', gridClass)}
    >
      {items.map((item, i) => {
        const p = palettes[i % palettes.length]
        const Icon = item.icon
        const icon = isValidElement(Icon)
          ? cloneElement(Icon, { className: 'h-5 w-5 text-white' })
          : Icon ? <Icon className="h-5 w-5 text-white" /> : null

        return (
          <SpotlightCard key={item.title} className={cx(
            'group flex h-full flex-col items-start rounded-[28px] p-7',
            'bg-white/70 ring-1 ring-[var(--border)] shadow-sm backdrop-blur-2xl',
            'transition-all duration-400 hover:-translate-y-1.5 hover:bg-white/90 hover:shadow-xl',
            'dark:bg-[rgba(24,18,42,0.65)] dark:ring-white/7',
          )}>
            <div className={cx('pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500', p.glow)} />
            {icon && (
              <div className={cx(
                'relative mb-6 flex h-11 w-11 shrink-0 items-center justify-center rounded-[13px]',
                'bg-gradient-to-br shadow-md ring-1 ring-white/15',
                'transition-all duration-400 group-hover:scale-110 group-hover:-rotate-6',
                p.grad,
              )}>
                {icon}
              </div>
            )}
            <h3 className="relative text-[1.1rem] font-semibold tracking-tight text-slate-900 dark:text-white">{item.title}</h3>
            <p className="relative mt-3 flex-1 text-[0.92rem] leading-[1.85] text-slate-600 dark:text-slate-300">{item.description}</p>
            {item.link && (
              <div className="relative mt-5">
                <ActionLink href={item.link.href} variant="ghost">{item.link.label}</ActionLink>
              </div>
            )}
          </SpotlightCard>
        )
      })}
    </motion.div>
  )
}

// ─── COMPARISON LIST ──────────────────────────────────────────────────────────
export function ComparisonList({ items }) {
  return (
    <motion.div
      initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }}
      variants={STAGGER}
      className="mx-auto grid w-full max-w-[960px] gap-6 md:grid-cols-2"
    >
      {items.map((item, i) => (
        <SpotlightCard key={item.title} className={cx(
          'flex h-full flex-col rounded-[32px] p-9 sm:p-10',
          'bg-white/70 ring-1 ring-[var(--border)] shadow-sm backdrop-blur-2xl',
          'transition-all duration-400 hover:shadow-xl hover:bg-white/90',
          'dark:bg-[rgba(24,18,42,0.65)] dark:ring-white/7',
          i === 1 && 'md:translate-y-8',
        )}>
          <div className="relative flex items-center gap-4">
            <motion.div
              whileHover={{ scale: 1.08, rotate: 6 }}
              className={cx(
                'flex h-10 w-10 shrink-0 items-center justify-center rounded-[12px]',
                'text-[0.9rem] font-bold text-white shadow-md',
                i === 0
                  ? 'bg-gradient-to-br from-indigo-600 to-violet-600'
                  : 'bg-gradient-to-br from-sky-500 to-cyan-500',
              )}
            >
              {i + 1}
            </motion.div>
            <h3 className="text-[1.25rem] font-bold tracking-tight text-slate-900 dark:text-white">{item.title}</h3>
          </div>
          <ul className="relative mt-8 space-y-4 text-[0.97rem] leading-[1.85] text-slate-600 dark:text-slate-300">
            {item.points.map(pt => (
              <li key={pt} className="flex items-start gap-3.5">
                <span className={cx(
                  'mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full',
                  i === 0 ? 'bg-indigo-500' : 'bg-sky-500',
                )} />
                {pt}
              </li>
            ))}
          </ul>
        </SpotlightCard>
      ))}
    </motion.div>
  )
}

// ─── CTA BAND ─────────────────────────────────────────────────────────────────
export function CtaBand({ title, description, primaryAction, secondaryAction }) {
  return (
    <motion.div
      initial="hidden" whileInView="show" viewport={{ once: true }}
      variants={RISE}
      className={cx(
        'relative mx-auto w-full max-w-[1100px] overflow-hidden rounded-[36px]',
        'px-10 py-16 sm:px-16 sm:py-20',
        'bg-[linear-gradient(150deg,#1e1b4b_0%,#1a1035_40%,#0c1220_100%)]',
        'ring-1 ring-white/8 shadow-[0_40px_100px_-20px_rgba(67,56,202,0.45)]',
      )}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-1/2 -left-1/4 h-[600px] w-[600px] rounded-full bg-indigo-600/12 blur-[100px]" />
        <div className="absolute -bottom-1/2 -right-1/4 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[90px]" />
      </div>

      <div className="relative z-10 flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-[560px]">
          <h2 className="text-[2.2rem] font-bold leading-[1.08] tracking-[-0.025em] sm:text-[2.8rem]">
            <span className="g-cta">{title}</span>
          </h2>
          <p className="mt-4 text-[1.05rem] leading-[1.85] text-indigo-200/65">{description}</p>
        </div>
        <div className="flex shrink-0 flex-col gap-3.5 sm:flex-row">
          <ActionLink href={primaryAction.href}>{primaryAction.label}</ActionLink>
          {secondaryAction && (
            <motion.div whileTap={{ scale: 0.96 }} className="inline-flex">
              <Link href={secondaryAction.href} className={cx(
                'inline-flex min-h-[3rem] items-center gap-2 rounded-full px-7 py-3',
                'text-[14.5px] font-semibold text-indigo-200 tracking-tight',
                'bg-white/7 ring-1 ring-white/12 backdrop-blur-xl',
                'transition-all duration-300 hover:bg-white/12 hover:text-white',
              )}>
                {secondaryAction.label}
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  )
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────
export function FaqList({ items }) {
  const [open, setOpen] = useState(0)
  return (
    <motion.div
      initial="hidden" whileInView="show" viewport={{ once: true }}
      variants={STAGGER}
      className="mx-auto w-full max-w-[760px] space-y-3"
    >
      {items.map((item, i) => {
        const isOpen = open === i
        return (
          <motion.div variants={FADE} key={item.question} className={cx(
            'overflow-hidden rounded-[20px] ring-1 backdrop-blur-2xl transition-all duration-300',
            isOpen
              ? 'bg-white/90 ring-indigo-500/20 shadow-md dark:bg-[rgba(32,24,56,0.85)]'
              : 'bg-white/65 ring-[var(--border)] hover:bg-white/80 dark:bg-[rgba(24,18,42,0.55)] dark:ring-white/7',
          )}>
            <button
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="flex w-full cursor-pointer items-center justify-between gap-5 px-6 py-5 text-left text-[1rem] font-semibold tracking-tight text-slate-900 dark:text-white sm:px-7"
            >
              <span>{item.question}</span>
              <motion.span
                animate={{
                  rotate: isOpen ? 45 : 0,
                  background: isOpen
                    ? 'linear-gradient(135deg,#4338ca,#818cf8)'
                    : 'rgba(238,235,255,0.8)',
                }}
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full ring-1 ring-black/8 dark:ring-white/8"
              >
                <Plus className={cx('h-3.5 w-3.5 transition-colors duration-200', isOpen ? 'text-white' : 'text-indigo-600 dark:text-indigo-400')} />
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-6 text-[0.95rem] leading-[1.9] text-slate-600 dark:text-slate-300 pr-12 sm:px-7 sm:pb-7">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )
      })}
    </motion.div>
  )
}