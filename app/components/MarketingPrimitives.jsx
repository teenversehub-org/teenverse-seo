'use client'

import { cloneElement, isValidElement, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Check, Plus, Zap, Sparkles, MoveRight, ArrowUpRight } from 'lucide-react'
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  animate,
  AnimatePresence,
} from 'framer-motion'

// ─── UTILITIES ────────────────────────────────────────────────────────────────
function cx(...classes) { return classes.filter(Boolean).join(' ') }
function isExternal(href) { return href?.startsWith('http') || href?.startsWith('mailto:') }

// ─── VARIANTS ─────────────────────────────────────────────────────────────────
const STAGGER = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}
const RISE = {
  hidden: { opacity: 0, y: 40, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 150, damping: 20 } },
}
const FADE = {
  hidden: { opacity: 0, filter: 'blur(10px)' },
  show: { opacity: 1, filter: 'blur(0px)', transition: { duration: 0.5, ease: 'easeOut' } },
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
  return <span className="tabular-nums tracking-tighter">{disp}</span>
}

// ─── HIGH-END SPOTLIGHT GLASS CARD ────────────────────────────────────────────
export function SpotlightCard({ children, className = '' }) {
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  return (
    <motion.div
      className={cx(
        'group relative overflow-hidden backdrop-blur-2xl rounded-[2rem]',
        'bg-white/40 dark:bg-[#141414]/40',
        'border border-white/50 dark:border-white/10',
        'shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.5)]',
        className
      )}
      onMouseMove={({ currentTarget, clientX, clientY }) => {
        const { left, top } = currentTarget.getBoundingClientRect()
        mx.set(clientX - left)
        my.set(clientY - top)
      }}
      variants={RISE}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[inherit] opacity-0 transition-opacity duration-500 group-hover:opacity-100 mix-blend-overlay"
        style={{
          background: useTransform(
            [mx, my],
            ([x, y]) => `radial-gradient(600px circle at ${x}px ${y}px, rgba(255,255,255,0.2), transparent 40%)`
          ),
        }}
      />
      {children}
    </motion.div>
  )
}

// ─── NEO-BRUTALIST TILT CARD ──────────────────────────────────────────────────
export function TiltCard({ children, className = '', intensity = 15 }) {
  const ref = useRef(null)
  const x = useMotionValue(0.5)
  const y = useMotionValue(0.5)
  const cfg = { damping: 20, stiffness: 200, mass: 0.5 }
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
      whileHover={{ scale: 1.02 }}
      className={cx('relative', className)}
    >
      {children}
    </motion.div>
  )
}

// ─── NEXT-GEN ACTION LINK (HYBRID STYLES) ─────────────────────────────────────
export function ActionLink({ href = '#', children, variant = 'brutal', className = '' }) {
  const styles = {
    // Neo-Brutalist Solid Button
    brutal: cx(
      'group relative inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold uppercase tracking-wide transition-all duration-200',
      'bg-[#ccff00] dark:bg-[#ccff00] text-black border-2 border-black dark:border-white rounded-xl',
      'shadow-[6px_6px_0_0_#000] dark:shadow-[6px_6px_0_0_#fff]',
      'hover:shadow-[2px_2px_0_0_#000] dark:hover:shadow-[2px_2px_0_0_#fff] hover:translate-x-1 hover:translate-y-1'
    ),
    // High-End Glass Button
    glass: cx(
      'group relative inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold transition-all duration-300',
      'bg-white/5 backdrop-blur-md border border-zinc-300/50 dark:border-white/20 text-zinc-900 dark:text-zinc-50 rounded-full',
      'hover:bg-white/20 dark:hover:bg-white/10 hover:border-zinc-400 dark:hover:border-white/40 shadow-[0_4px_24px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.3)]'
    ),
    ghost: cx(
      'group inline-flex items-center gap-2 text-base font-bold text-zinc-900 dark:text-zinc-50 hover:text-pink-600 dark:hover:text-[#ccff00] transition-colors'
    ),
  }
  const isExt = isExternal(href)
  const Comp = isExt ? 'a' : Link
  return (
    <Comp href={href} className={cx(styles[variant], className)}>
      {children}
      {variant === 'ghost' ? (
        <MoveRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      ) : (
        <ArrowUpRight className="h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      )}
    </Comp>
  )
}

// ─── SECTION WRAPPER ──────────────────────────────────────────────────────────
export function Section({ id, className = '', children }) {
  return (
    <section id={id} className={cx('relative isolate overflow-hidden px-6 py-24 sm:px-10 lg:px-16 lg:py-32', className)}>
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center">{children}</div>
    </section>
  )
}

// ─── BRUTALIST EYEBROW ────────────────────────────────────────────────────────
function Eyebrow({ children }) {
  return (
    <motion.div variants={RISE} className="mb-6 inline-block">
      <div className="font-mono inline-flex items-center gap-2 border-2 border-black dark:border-white bg-purple-700 dark:bg-[#ccff00] px-4 py-1.5 text-xs font-bold uppercase text-white dark:text-black shadow-[4px_4px_0_0_#000] dark:shadow-[4px_4px_0_0_#fff] rounded-sm">
        <Sparkles className="h-3 w-3" />
        {children}
      </div>
    </motion.div>
  )
}

// ─── SECTION HEADING ──────────────────────────────────────────────────────────
export function SectionHeading({ eyebrow, title, description, align = 'center' }) {
  const isCentered = align === 'center'
  return (
    <motion.div
      initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }}
      variants={STAGGER}
      className={cx('w-full relative z-10', isCentered ? 'mx-auto max-w-[800px] text-center' : 'max-w-[700px]')}
    >
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <motion.h2 
        variants={RISE} 
        className="text-5xl font-black leading-[0.95] tracking-tighter md:text-6xl lg:text-7xl text-zinc-900 dark:text-white [text-wrap:balance]"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p 
          variants={FADE} 
          className={cx(
            'mt-6 text-lg md:text-xl font-medium leading-relaxed text-zinc-600 dark:text-zinc-400',
            isCentered ? 'mx-auto max-w-2xl' : 'max-w-xl'
          )}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  )
}

// ─── HERO (Hybrid GenZ Aesthetic) ─────────────────────────────────────────────
export function Hero({ eyebrow, title, description, primaryAction, secondaryAction, proof = [], image, imageAlt, children }) {
  return (
    <section className="relative isolate min-h-[90vh] flex items-center justify-center overflow-hidden bg-zinc-100 dark:bg-[#050505] px-6 pt-32 pb-24 sm:px-10 lg:px-16 transition-colors duration-500">
      
      {/* Dynamic Background Blurs with Framer Motion (Replaces CSS animations) */}
      <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
        <motion.div 
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute h-[60vw] w-[60vw] max-h-[800px] max-w-[800px] rounded-full bg-pink-600 dark:bg-purple-600 opacity-10 dark:opacity-20 blur-[100px] mix-blend-screen" 
        />
        <motion.div 
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute right-0 top-0 h-[40vw] w-[40vw] max-h-[500px] max-w-[500px] rounded-full bg-purple-700 dark:bg-[#ccff00] opacity-10 dark:opacity-10 blur-[100px]" 
        />
      </div>

      <motion.div
        initial="hidden" animate="show" variants={STAGGER}
        className={cx(
          'relative z-10 mx-auto w-full max-w-[1280px]',
          image ? 'grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center' : 'flex flex-col items-center text-center'
        )}
      >
        <div className={cx('w-full', image ? 'max-w-[700px] lg:mx-0' : 'mx-auto max-w-5xl')}>
          {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}

          <motion.h1 
            variants={RISE} 
            className={cx(
              'font-black leading-[0.9] tracking-tighter',
              'text-[4rem] sm:text-[5.5rem] lg:text-[7rem]',
              '[text-wrap:balance]',
              'text-transparent bg-clip-text bg-gradient-to-br from-zinc-900 to-pink-600 dark:from-white dark:to-purple-500',
              !image && 'mx-auto'
            )}
          >
            {title}
          </motion.h1>

          <motion.p 
            variants={FADE} 
            className={cx(
              'mt-8 text-xl sm:text-2xl font-medium leading-relaxed text-zinc-600 dark:text-zinc-400',
              !image && 'mx-auto max-w-3xl'
            )}
          >
            {description}
          </motion.p>

          <motion.div variants={FADE} className={cx(
            'mt-10 flex flex-col gap-4 sm:flex-row',
            image ? 'lg:justify-start' : 'justify-center'
          )}>
            <ActionLink variant="brutal" href={primaryAction.href}>{primaryAction.label}</ActionLink>
            {secondaryAction && (
              <ActionLink variant="glass" href={secondaryAction.href}>{secondaryAction.label}</ActionLink>
            )}
          </motion.div>

          {/* Brutalist Proof Tags */}
          {proof.length > 0 && (
            <motion.div variants={STAGGER} className={cx(
              'mt-12 flex flex-wrap gap-3',
              image ? 'justify-start' : 'justify-center max-w-3xl mx-auto'
            )}>
              {proof.map(item => (
                <motion.span variants={RISE} key={item} className="font-mono inline-flex items-center gap-2 rounded-full border border-black dark:border-white bg-zinc-100 dark:bg-black px-4 py-2 text-sm font-bold shadow-[2px_2px_0_0_#000] dark:shadow-[2px_2px_0_0_#fff] text-zinc-900 dark:text-white">
                  <Check className="h-4 w-4 text-pink-600 dark:text-[#ccff00]" strokeWidth={3} />
                  {item}
                </motion.span>
              ))}
            </motion.div>
          )}
          {children}
        </div>

        {/* Hero Image (Glass/Brutal Mix) */}
        {image && (
          <motion.div variants={RISE} className="mx-auto w-full max-w-lg lg:max-w-none">
            <TiltCard intensity={5}>
              <div className="relative rounded-[2rem] border-4 border-black dark:border-white bg-zinc-100 dark:bg-[#050505] p-2 shadow-[8px_8px_0_0_#000] dark:shadow-[8px_8px_0_0_#fff]">
                {/* Fake Browser Top */}
                <div className="flex items-center gap-2 border-b-4 border-black dark:border-white pb-2 pt-1 px-3">
                  <span className="h-3 w-3 rounded-full bg-red-500 border border-black dark:border-black" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400 border border-black dark:border-black" />
                  <span className="h-3 w-3 rounded-full bg-green-500 border border-black dark:border-black" />
                </div>
                <div className="overflow-hidden rounded-b-xl relative">
                  {/* Glass overlay over image */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent mix-blend-overlay z-10 pointer-events-none" />
                  <Image
                    src={image} alt={imageAlt}
                    width={1000} height={800}
                    className="h-auto w-full object-cover grayscale-[20%] contrast-125 transition-transform duration-700 hover:scale-105 hover:grayscale-0"
                    priority
                  />
                </div>
              </div>
            </TiltCard>
          </motion.div>
        )}
      </motion.div>
    </section>
  )
}

// ─── FEATURE BENTO (Glass + Brutal Mix) ───────────────────────────────────────
export function FeatureBentoSection({ bigCard, smallCards }) {
  return (
    <section className="relative isolate overflow-hidden px-6 py-24 sm:px-10 lg:px-16 bg-zinc-100 dark:bg-[#050505]">
      <motion.div
        initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }}
        variants={STAGGER}
        className="mx-auto w-full max-w-[1280px]"
      >
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
          
          {/* Big Card - Neo Brutalist Solid */}
          <motion.div variants={RISE} className="flex flex-col lg:col-span-5">
            <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-[2.5rem] border-4 border-black dark:border-white bg-pink-600 dark:bg-purple-700 p-10 shadow-[8px_8px_0_0_#000] dark:shadow-[8px_8px_0_0_#fff] transition-transform hover:-translate-y-2 hover:shadow-[12px_12px_0_0_#000] dark:hover:shadow-[12px_12px_0_0_#fff]">
              <div className="relative z-10">
                <span className="font-mono mb-6 inline-block bg-black px-4 py-1 text-sm font-bold uppercase text-white shadow-[4px_4px_0_0_#fff] dark:shadow-[4px_4px_0_0_#000]">
                  {bigCard?.eyebrow || 'Feature'}
                </span>
                <h2 className="mt-4 text-4xl font-black leading-tight text-white md:text-5xl">
                  {bigCard?.title}
                </h2>
                <p className="mt-6 text-lg font-medium text-white/90">
                  {bigCard?.description}
                </p>
                {bigCard?.points && (
                  <ul className="mt-8 space-y-4">
                    {bigCard.points.map((pt, i) => (
                      <li key={i} className="flex items-start gap-4 text-lg font-bold text-white">
                        <Zap className="mt-1 h-6 w-6 shrink-0 fill-yellow-400 text-black" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="relative z-10 mt-12">
                <ActionLink variant="brutal" href={bigCard?.link?.href || '#'}>{bigCard?.link?.label || 'Learn more'}</ActionLink>
              </div>
            </div>
          </motion.div>

          {/* Small Cards - Deep Glassmorphism */}
          <div className="lg:col-span-7">
            <div className="grid h-full grid-cols-1 gap-6 sm:grid-cols-2">
              {smallCards.map((item, index) => {
                const Icon = item.icon
                const icon = isValidElement(Icon)
                  ? cloneElement(Icon, { className: 'h-6 w-6 text-pink-600 dark:text-[#ccff00]' })
                  : Icon ? <Icon className="h-6 w-6 text-pink-600 dark:text-[#ccff00]" /> : null

                return (
                  <SpotlightCard key={index} className={cx('flex flex-col p-8', index % 2 !== 0 && 'sm:mt-12')}>
                    {icon && (
                      <div className="mb-6 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-black/5 dark:bg-white/10 shadow-inner ring-1 ring-black/10 dark:ring-white/20 backdrop-blur-md">
                        {icon}
                      </div>
                    )}
                    <h3 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">{item.title}</h3>
                    <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400 font-medium leading-relaxed">{item.description}</p>
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

// ─── STAT GRID (Giant Typo Brutalism) ─────────────────────────────────────────
export function StatGrid({ items }) {
  return (
    <motion.div
      initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }}
      variants={STAGGER}
      className="mx-auto grid w-full max-w-[1280px] grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 px-6 py-12"
    >
      {items.map((item, i) => (
        <motion.div variants={RISE} key={item.label} className={cx(
          'relative flex flex-col justify-center p-8 text-center',
          'border-b-4 sm:border-b-0 sm:border-r-4 border-black dark:border-white border-dashed last:border-0'
        )}>
          <p className="text-[4rem] font-black leading-none tracking-tighter text-zinc-900 dark:text-white">
            <AnimCounter value={item.value} />
          </p>
          <p className="font-mono mt-4 text-sm font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">{item.label}</p>
          <p className="mt-2 text-base font-medium text-zinc-600 dark:text-zinc-400">{item.detail}</p>
        </motion.div>
      ))}
    </motion.div>
  )
}

// ─── FEATURE GRID (Glass Cards) ───────────────────────────────────────────────
export function FeatureGrid({ items }) {
  const gridClass = items.length === 4 ? 'sm:grid-cols-2 lg:grid-cols-4' : 'sm:grid-cols-2 lg:grid-cols-3'
  return (
    <motion.div
      initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }}
      variants={STAGGER}
      className={cx('mx-auto grid w-full max-w-[1280px] gap-6 px-6 py-12', gridClass)}
    >
      {items.map((item) => {
        const Icon = item.icon
        const icon = isValidElement(Icon)
          ? cloneElement(Icon, { className: 'h-6 w-6' })
          : Icon ? <Icon className="h-6 w-6" /> : null

        return (
          <SpotlightCard key={item.title} className="flex h-full flex-col p-8">
            {icon && (
              <div className="mb-6 flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-black shadow-[4px_4px_0_0_#db2777] dark:shadow-[4px_4px_0_0_#ccff00]">
                {icon}
              </div>
            )}
            <h3 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">{item.title}</h3>
            <p className="mt-4 flex-1 text-lg font-medium leading-relaxed text-zinc-600 dark:text-zinc-400">{item.description}</p>
            {item.link && (
              <div className="mt-8">
                <ActionLink variant="ghost" href={item.link.href}>{item.link.label}</ActionLink>
              </div>
            )}
          </SpotlightCard>
        )
      })}
    </motion.div>
  )
}

// ─── CTA BAND (Ultimate Brutalism Banner) ─────────────────────────────────────
export function CtaBand({ title, description, primaryAction, secondaryAction }) {
  return (
    <motion.div
      initial="hidden" whileInView="show" viewport={{ once: true }}
      variants={RISE}
      className={cx(
        'relative mx-auto w-full max-w-[1280px] overflow-hidden rounded-[2rem]',
        'border-4 border-black dark:border-white bg-purple-700 dark:bg-[#ccff00] px-8 py-16 sm:px-16 sm:py-24',
        'shadow-[12px_12px_0_0_#000] dark:shadow-[12px_12px_0_0_#fff]'
      )}
    >
      {/* Brutalist Pattern Overlay */}
      <div className="absolute inset-0 opacity-10 dark:opacity-20" style={{ backgroundImage: 'radial-gradient(circle, #000 2px, transparent 2px)', backgroundSize: '24px 24px' }} />

      <div className="relative z-10 flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <h2 className="text-5xl font-black leading-none tracking-tighter text-white dark:text-black md:text-6xl lg:text-7xl">
            {title}
          </h2>
          <p className="mt-6 text-xl font-bold text-white/90 dark:text-black/80">{description}</p>
        </div>
        <div className="flex shrink-0 flex-col gap-4 sm:flex-row">
          <Link href={primaryAction.href} className="group inline-flex items-center justify-center gap-2 border-4 border-black bg-white px-8 py-4 text-lg font-black uppercase text-black shadow-[6px_6px_0_0_#000] transition-transform hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0_0_#000]">
            {primaryAction.label}
            <ArrowUpRight className="h-6 w-6" />
          </Link>
          {secondaryAction && (
            <Link href={secondaryAction.href} className="group inline-flex items-center justify-center gap-2 border-4 border-black bg-transparent px-8 py-4 text-lg font-black uppercase text-white dark:text-black transition-colors hover:bg-black hover:text-white dark:hover:text-white">
              {secondaryAction.label}
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  )
}

// ─── FAQ LIST (Glass Accordion) ───────────────────────────────────────────────
export function FaqList({ items }) {
  const [open, setOpen] = useState(0)
  return (
    <motion.div
      initial="hidden" whileInView="show" viewport={{ once: true }}
      variants={STAGGER}
      className="mx-auto w-full max-w-[800px] space-y-4 px-6 py-12"
    >
      {items.map((item, i) => {
        const isOpen = open === i
        return (
          <SpotlightCard key={item.question} className={cx(
            'transition-all duration-300 rounded-[1.5rem]',
            isOpen ? 'ring-2 ring-pink-600 dark:ring-purple-500' : ''
          )}>
            <button
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="flex w-full cursor-pointer items-center justify-between gap-6 px-6 py-6 text-left sm:px-8"
            >
              <span className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white">{item.question}</span>
              <motion.div
                animate={{ rotate: isOpen ? 45 : 0 }}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-black dark:border-white bg-[#ccff00] dark:bg-purple-600 text-black dark:text-white shadow-[2px_2px_0_0_#000] dark:shadow-[2px_2px_0_0_#fff]"
              >
                <Plus className="h-5 w-5" strokeWidth={3} />
              </motion.div>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-8 text-lg font-medium text-zinc-600 dark:text-zinc-400 sm:px-8">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </SpotlightCard>
        )
      })}
    </motion.div>
  )
}