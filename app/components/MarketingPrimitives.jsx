'use client'

import { cloneElement, isValidElement, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Check, Plus, Zap, Sparkles, MoveRight, ArrowUpRight, ChevronDown } from 'lucide-react'
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  animate,
  AnimatePresence,
} from 'framer-motion'

// ─── UTILITIES ────────────────────────────────────────────────────────────────
function cx(...classes) { 
  return classes.filter(Boolean).join(' ') 
}

function isExternal(href) { 
  return href?.startsWith('http') || href?.startsWith('mailto:') 
}

// ─── SPRING CONFIGURATIONS ────────────────────────────────────────────────────
const PREMIUM_SPRING = { type: 'spring', stiffness: 120, damping: 22, mass: 0.8 }

// ─── ANIMATION VARIANTS ───────────────────────────────────────────────────────
const STAGGER = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
}

const RISE = {
  hidden: { opacity: 0, y: 35, scale: 0.97 },
  show: { opacity: 1, y: 0, scale: 1, transition: PREMIUM_SPRING },
}

const FADE = {
  hidden: { opacity: 0, filter: 'blur(8px)' },
  show: { opacity: 1, filter: 'blur(0px)', transition: { duration: 0.45, ease: 'easeOut' } },
}

// ─── ANIMATED COUNTER ─────────────────────────────────────────────────────────
function AnimCounter({ value, duration = 1.8 }) {
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
      onUpdate: (v) => {
        return setDisp(pre + v.toFixed(dec) + suf)
      },
    })
    return () => {
      return ctrl.stop()
    }
  }, [value, duration])
  return <span className="tabular-nums tracking-tighter">{disp}</span>
}

// ─── HIGH-END SPOTLIGHT GLASS CARD ────────────────────────────────────────────
export function SpotlightCard({ children, className = '' }) {
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  
  // Custom spring wrapper ensuring physics smoothness on mouse movement tracks
  const mxs = useSpring(mx, { damping: 25, stiffness: 250 })
  const mys = useSpring(my, { damping: 25, stiffness: 250 })

  return (
    <motion.div
      className={cx(
        'group relative overflow-hidden backdrop-blur-xl rounded-[2rem] transition-colors duration-300',
        'bg-white/70 dark:bg-zinc-900/40',
        'border border-zinc-200/80 dark:border-zinc-800/50',
        'shadow-[0_8px_30px_rgb(0,0,0,0.03)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.4)]',
        className
      )}
      onMouseMove={({ currentTarget, clientX, clientY }) => {
        const { left, top } = currentTarget.getBoundingClientRect()
        mx.set(clientX - left)
        my.set(clientY - top)
      }}
      variants={RISE}
    >
      {/* Smart adaptive spotlight layer that renders a crisp dark highlight tint in light mode and vibrant glow overlay in dark mode */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[inherit] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: useTransform(
            [mxs, mys],
            ([x, y]) => {
              return `radial-gradient(450px circle at ${x}px ${y}px, rgba(36,88,70,0.06), rgba(150,214,191,0.15), transparent 50%)`
            }
          ),
        }}
      />
      <div className="relative z-10 h-full w-full">{children}</div>
    </motion.div>
  )
}

// ─── NEO-BRUTALIST TILT CARD ──────────────────────────────────────────────────
export function TiltCard({ children, className = '', intensity = 12 }) {
  const ref = useRef(null)
  const x = useMotionValue(0.5)
  const y = useMotionValue(0.5)
  const cfg = { damping: 25, stiffness: 220, mass: 0.5 }
  const xs = useSpring(x, cfg)
  const ys = useSpring(y, cfg)
  const rX = useTransform(ys, [0, 1], [intensity, -intensity])
  const rY = useTransform(xs, [0, 1], [-intensity, intensity])
  
  return (
    <motion.div
      ref={ref}
      onMouseMove={(e) => {
        if (!ref.current) return
        const r = ref.current.getBoundingClientRect()
        x.set((e.clientX - r.left) / r.width)
        y.set((e.clientY - r.top) / r.height)
      }}
      onMouseLeave={() => { 
        x.set(0.5)
        y.set(0.5) 
      }}
      style={{ rotateX: rX, rotateY: rY, transformStyle: 'preserve-3d' }}
      whileHover={{ scale: 1.015 }}
      transition={PREMIUM_SPRING}
      className={cx('relative', className)}
    >
      {children}
    </motion.div>
  )
}

// ─── NEXT-GEN ACTION LINK ─────────────────────────────────────────────────────
export function ActionLink({ href = '#', children, variant = 'brutal', className = '' }) {
  const styles = {
    brutal: cx(
      'group relative inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold uppercase tracking-wide transition-all duration-300',
      'bg-[#ccff00] text-black border-2 border-zinc-900 dark:border-white rounded-xl',
      'shadow-[5px_5px_0_0_#18181b] dark:shadow-[5px_5px_0_0_#ffffff]',
      'hover:shadow-[1px_1px_0_0_#18181b] dark:hover:shadow-[1px_1px_0_0_#ffffff] hover:translate-x-1 hover:translate-y-1'
    ),
    glass: cx(
      'group relative inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold transition-all duration-300',
      'bg-white/80 dark:bg-zinc-900/50 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-100 rounded-full',
      'hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 shadow-sm'
    ),
    ghost: cx(
      'group inline-flex items-center gap-2 text-base font-bold text-zinc-800 dark:text-zinc-100 hover:text-[#2f7259] dark:hover:text-[#96d6bf] transition-colors'
    ),
  }
  const isExt = isExternal(href)
  const Comp = isExt ? 'a' : Link
  return (
    <Comp href={href} className={cx(styles[variant], className)}>
      {children}
      {variant === 'ghost' ? (
        <MoveRight className="h-4 w-4 transition-transform group-hover:translate-x-1.5" />
      ) : (
        <ArrowUpRight className="h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      )}
    </Comp>
  )
}

// ─── SECTION WRAPPER ──────────────────────────────────────────────────────────
export function Section({ id, className = '', children }) {
  return (
    <section id={id} className={cx('relative isolate overflow-hidden px-6 py-24 sm:px-10 lg:px-16 lg:py-32 bg-[#fbfaf7] dark:bg-[#070b10] transition-colors duration-300', className)}>
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center">{children}</div>
    </section>
  )
}

// ─── BRUTALIST EYEBROW ────────────────────────────────────────────────────────
function Eyebrow({ children }) {
  return (
    <motion.div variants={RISE} className="mb-6 inline-block">
      <div className="font-mono inline-flex items-center gap-2 border-2 border-zinc-900 dark:border-white bg-[#191724] dark:bg-[#ccff00] px-4 py-1.5 text-xs font-bold uppercase text-white dark:text-black shadow-[3px_3px_0_0_#2f7259] dark:shadow-[3px_3px_0_0_#ffffff] rounded-md">
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
      initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}
      variants={STAGGER}
      className={cx('w-full relative z-10 mb-12', isCentered ? 'mx-auto max-w-[800px] text-center' : 'max-w-[700px]')}
    >
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <motion.h2 
        variants={RISE} 
        className="text-4xl font-black leading-[1.02] tracking-tight md:text-5xl lg:text-6xl text-zinc-900 dark:text-white"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p 
          variants={FADE} 
          className={cx(
            'mt-5 text-base md:text-lg font-medium leading-relaxed text-zinc-600 dark:text-zinc-400',
            isCentered ? 'mx-auto max-w-2xl' : 'max-w-xl'
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
  return (
    <section className="relative isolate min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#fbfaf7] dark:bg-[#070b10] px-6 pt-32 pb-24 sm:px-10 lg:px-16 transition-colors duration-500">
      
      {/* Ambient Radial Mesh Background Canvas */}
      <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center overflow-hidden">
        <motion.div 
          animate={{ scale: [1, 1.08, 1], rotate: [0, 45, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute h-[60vw] w-[60vw] max-h-[700px] max-w-[700px] rounded-full bg-[#96d6bf]/10 dark:bg-[#2f7259]/15 blur-[120px]" 
        />
        <motion.div 
          animate={{ scale: [1, 0.92, 1], rotate: [0, -45, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute right-10 top-10 h-[40vw] w-[40vw] max-h-[450px] max-w-[450px] rounded-full bg-[#eff7f2]/40 dark:bg-[#ccff00]/5 blur-[100px]" 
        />
      </div>

      <motion.div
        initial="hidden" animate="show" variants={STAGGER}
        className={cx(
          'relative z-10 mx-auto w-full max-w-[1280px]',
          image ? 'grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center' : 'flex flex-col items-center text-center'
        )}
      >
        <div className={cx('w-full', image ? 'max-w-[720px] lg:mx-0' : 'mx-auto max-w-5xl')}>
          {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}

          <motion.h1 
            variants={RISE} 
            className={cx(
              'font-black leading-[1.02] tracking-tight text-[3.25rem] sm:text-[4.75rem] lg:text-[5.75rem]',
              'text-zinc-900 dark:text-white',
              !image && 'mx-auto'
            )}
          >
            {title}
          </motion.h1>

          <motion.p 
            variants={FADE} 
            className={cx(
              'mt-6 text-lg sm:text-xl font-medium leading-relaxed text-zinc-600 dark:text-zinc-400',
              !image && 'mx-auto max-w-3xl'
            )}
          >
            {description}
          </motion.p>

          <motion.div variants={FADE} className={cx(
            'mt-8 flex flex-col gap-4 sm:flex-row items-center',
            image ? 'lg:justify-start' : 'justify-center'
          )}>
            <ActionLink variant="brutal" href={primaryAction.href}>{primaryAction.label}</ActionLink>
            {secondaryAction && (
              <ActionLink variant="glass" href={secondaryAction.href}>{secondaryAction.label}</ActionLink>
            )}
          </motion.div>

          {proof.length > 0 && (
            <motion.div variants={STAGGER} className={cx(
              'mt-12 flex flex-wrap gap-3',
              image ? 'justify-start' : 'justify-center max-w-3xl mx-auto'
            )}>
              {proof.map((item) => {
                return (
                  <motion.span 
                    variants={RISE} 
                    key={item} 
                    className="font-mono inline-flex items-center gap-2 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 px-4 py-2 text-sm font-bold shadow-sm text-zinc-800 dark:text-zinc-200"
                  >
                    <Check className="h-4 w-4 text-[#2f7259] dark:text-[#96d6bf]" strokeWidth={3} prefix="" />
                    {item}
                  </motion.span>
                )
              })}
            </motion.div>
          )}
          {children}
        </div>

        {image && (
          <motion.div variants={RISE} className="mx-auto w-full max-w-lg lg:max-w-none">
            <TiltCard intensity={4}>
              <div className="relative rounded-[2rem] border-2 border-zinc-200 dark:border-zinc-800 bg-white p-2 shadow-xl dark:bg-zinc-900/40">
                <div className="flex items-center gap-1.5 border-b border-zinc-100 dark:border-zinc-800 pb-2 pt-1 px-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                  <span className="h-2.5 w-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                  <span className="h-2.5 w-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                </div>
                <div className="overflow-hidden rounded-b-2xl relative">
                  <Image
                    src={image} alt={imageAlt}
                    width={1000} height={800}
                    className="h-auto w-full object-cover transition-transform duration-700 hover:scale-102"
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

// ─── FEATURE BENTO ────────────────────────────────────────────────────────────
export function FeatureBentoSection({ bigCard, smallCards }) {
  return (
    <section className="relative z-10 px-4 py-24 sm:px-6 lg:px-8 bg-[#fbfaf7] dark:bg-[#070b10]">
      <motion.div
        initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }}
        variants={STAGGER}
        className="mx-auto w-full max-w-[1280px]"
      >
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
          
          {/* Big Solid Contrast Card */}
          <motion.div variants={RISE} className="flex flex-col lg:col-span-5">
            <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-[2.5rem] bg-[#191724] dark:bg-[#10151d] border border-zinc-800 p-10 shadow-lg transition-transform duration-300 hover:-translate-y-1">
              <div className="relative z-10">
                <span className="font-mono mb-4 inline-block bg-white/10 px-3 py-1 rounded-md text-xs font-bold uppercase text-[#96d6bf]">
                  {bigCard?.eyebrow || 'Feature'}
                </span>
                <h2 className="mt-4 text-3xl font-black leading-tight text-white md:text-4xl">
                  {bigCard?.title}
                </h2>
                <p className="mt-4 text-sm text-zinc-300">
                  {bigCard?.description}
                </p>
                {bigCard?.points && (
                  <ul className="mt-8 space-y-4">
                    {bigCard.points.map((pt, i) => {
                      return (
                        <li key={i} className="flex items-start gap-3 text-base font-semibold text-zinc-100">
                          <Zap className="mt-1 h-5 w-5 shrink-0 fill-[#ccff00] text-[#191724]" />
                          {pt}
                        </li>
                      )
                    })}
                  </ul>
                )}
              </div>
              <div className="relative z-10 mt-12">
                <ActionLink variant="brutal" href={bigCard?.link?.href || '#'}>{bigCard?.link?.label || 'Learn more'}</ActionLink>
              </div>
            </div>
          </motion.div>

          {/* Grid of Micro Glass Cards */}
          <div className="lg:col-span-7">
            <div className="grid h-full grid-cols-1 gap-6 sm:grid-cols-2">
              {smallCards.map((item, index) => {
                const Icon = item.icon
                const icon = isValidElement(Icon)
                  ? cloneElement(Icon, { className: 'h-5 w-5 text-[#2f7259] dark:text-[#96d6bf]' })
                  : Icon ? <Icon className="h-5 w-5 text-[#2f7259] dark:text-[#96d6bf]" /> : null

                return (
                  <SpotlightCard key={index} className={cx('flex flex-col p-8', index % 2 !== 0 && 'sm:mt-8')}>
                    {icon && (
                      <div className="mb-6 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700">
                        {icon}
                      </div>
                    )}
                    <h3 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white">{item.title}</h3>
                    <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400 font-medium leading-relaxed">{item.description}</p>
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
  return (
    <motion.div
      initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}
      variants={STAGGER}
      className="mx-auto grid w-full max-w-[1280px] grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 px-6 py-12"
    >
      {items.map((item) => {
        return (
          <motion.div 
            variants={RISE} 
            key={item.label} 
            className="relative flex flex-col justify-center p-8 text-center border-b border-zinc-200 dark:border-zinc-800 sm:border-b-0 sm:border-r last:border-0 border-dashed"
          >
            <p className="text-[3.75rem] font-extrabold leading-none tracking-tight text-zinc-900 dark:text-white">
              <AnimCounter value={item.value} />
            </p>
            <p className="font-mono mt-4 text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">{item.label}</p>
            <p className="mt-1 text-sm font-medium text-zinc-600 dark:text-zinc-400">{item.detail}</p>
          </motion.div>
        )
      })}
    </motion.div>
  )
}

// ─── FEATURE GRID ─────────────────────────────────────────────────────────────
export function FeatureGrid({ items }) {
  const gridClass = items.length === 4 ? 'sm:grid-cols-2 lg:grid-cols-4' : 'sm:grid-cols-2 lg:grid-cols-3'
  return (
    <motion.div
      initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }}
      variants={STAGGER}
      className={cx('mx-auto grid w-full max-w-[1280px] gap-6 px-6 py-12', gridClass)}
    >
      {items.map((item) => {
        const Icon = item.icon
        const icon = isValidElement(Icon)
          ? cloneElement(Icon, { className: 'h-5 w-5 text-white dark:text-black' })
          : Icon ? <Icon className="h-5 w-5 text-white dark:text-black" /> : null

        return (
          <SpotlightCard key={item.title} className="flex h-full flex-col p-8">
            {icon && (
              <div className="mb-6 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#191724] dark:bg-white text-white dark:text-black shadow-md">
                {icon}
              </div>
            )}
            <h3 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white">{item.title}</h3>
            <p className="mt-3 flex-1 text-sm font-medium leading-relaxed text-zinc-600 dark:text-zinc-400">{item.description}</p>
            {item.link && (
              <div className="mt-6">
                <ActionLink variant="ghost" href={item.link.href}>{item.link.label}</ActionLink>
              </div>
            )}
          </SpotlightCard>
        )
      })}
    </motion.div>
  )
}

// ─── CTA BAND ─────────────────────────────────────────────────────────────────
export function CtaBand({ title, description, primaryAction, secondaryAction }) {
  return (
    <div className="px-4 sm:px-6 lg:px-8 bg-[#fbfaf7] dark:bg-[#070b10] py-12">
      <motion.div
        initial="hidden" whileInView="show" viewport={{ once: true }}
        variants={RISE}
        className={cx(
          'relative mx-auto w-full max-w-[1280px] overflow-hidden rounded-[2.5rem] p-10 sm:p-16 lg:p-20',
          'bg-[#191724] dark:bg-[#10151d] border border-zinc-800 shadow-xl'
        )}
      >
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle, #fff 1.5px, transparent 1.5px)', backgroundSize: '20px 20px' }} />

        <div className="relative z-10 flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl">
              {title}
            </h2>
            <p className="mt-4 text-base text-zinc-300 font-medium">{description}</p>
          </div>
          <div className="flex shrink-0 flex-col gap-4 sm:flex-row items-center w-full sm:w-auto">
            <Link href={primaryAction.href} className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 text-sm font-bold uppercase text-black shadow-md transition-transform hover:-translate-y-0.5">
              <span>{primaryAction.label}</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            {secondaryAction && (
              <Link href={secondaryAction.href} className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-zinc-700 bg-white/5 px-7 py-3.5 text-sm font-bold uppercase text-white transition-colors hover:bg-white/10">
                <span>{secondaryAction.label}</span>
              </Link>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

// ─── FAQ LIST ─────────────────────────────────────────────────────────────────
export function FaqList({ items }) {
  const [open, setOpen] = useState(0)
  return (
    <motion.div
      initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}
      variants={STAGGER}
      className="mx-auto w-full max-w-[840px] space-y-4 px-6 py-12"
    >
      {items.map((item, i) => {
        const isOpen = open === i
        return (
          <SpotlightCard key={item.question} className={cx(
            'transition-all duration-300 rounded-2xl border',
            isOpen ? 'border-[#2f7259] dark:border-[#96d6bf]' : 'border-zinc-200/80 dark:border-zinc-800/50'
          )}>
            <button
              onClick={() => {
                return setOpen(isOpen ? -1 : i)
              }}
              className="flex w-full cursor-pointer items-center justify-between gap-6 px-6 py-5 text-left sm:px-8"
            >
              <span className="text-lg font-bold tracking-tight text-zinc-900 dark:text-white">{item.question}</span>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ type: 'spring', damping: 15 }}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400"
              >
                <ChevronDown className="h-4 w-4" />
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
                  <p className="px-6 pb-6 text-sm font-medium text-zinc-600 dark:text-zinc-400 sm:px-8">
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