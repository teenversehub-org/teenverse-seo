'use client'

import { useEffect, useState, useSyncExternalStore } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  ArrowUpRight,
  ChevronRight,
  Menu,
  Moon,
  Sparkles,
  Sun,
  X,
} from 'lucide-react'
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from 'framer-motion'

import { SITE, primaryNav } from '../lib/site'

const APP_URL = SITE.appUrl || 'https://app.teenversehub.in/login'

function LogoMark() {
  return (
    <motion.div
      whileHover={{ scale: 1.05, rotate: 5 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-teal-500 text-base font-black text-white shadow-[0_0_20px_rgba(79,70,229,0.3)] dark:from-indigo-400 dark:to-emerald-400 dark:text-slate-950 dark:shadow-[0_0_20px_rgba(52,211,153,0.2)]"
    >
      <div className="absolute inset-0 rounded-xl border border-white/20 dark:border-black/10" />
      T
    </motion.div>
  )
}

const mobileMenuVariants = {
  hidden: { opacity: 0, backdropFilter: 'blur(0px)' },
  visible: {
    opacity: 1,
    backdropFilter: 'blur(16px)',
    transition: {
      duration: 0.35,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.045,
      delayChildren: 0.08,
    },
  },
  exit: {
    opacity: 0,
    backdropFilter: 'blur(0px)',
    transition: {
      duration: 0.25,
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
}

const mobileItemVariants = {
  hidden: { opacity: 0, y: 18, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { type: 'spring', stiffness: 300, damping: 24 },
  },
  exit: {
    opacity: 0,
    y: 10,
    filter: 'blur(2px)',
    transition: { duration: 0.18 },
  },
}

const themeIconVariants = {
  initial: { scale: 0.5, opacity: 0, rotate: -45 },
  animate: {
    scale: 1,
    opacity: 1,
    rotate: 0,
    transition: { type: 'spring', stiffness: 300, damping: 20 },
  },
  exit: {
    scale: 0.5,
    opacity: 0,
    rotate: 45,
    transition: { duration: 0.2 },
  },
}

function getThemeSnapshot() {
  if (typeof window === 'undefined') return false

  const storedTheme = window.localStorage.getItem('tvh-theme')
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

  return storedTheme === 'dark' || (!storedTheme && prefersDark)
}

function subscribeTheme(callback) {
  if (typeof window === 'undefined') return () => {}

  const media = window.matchMedia('(prefers-color-scheme: dark)')
  const notify = () => callback()

  window.addEventListener('tvh-theme-change', notify)
  window.addEventListener('storage', notify)
  media.addEventListener('change', notify)

  return () => {
    window.removeEventListener('tvh-theme-change', notify)
    window.removeEventListener('storage', notify)
    media.removeEventListener('change', notify)
  }
}

export default function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const darkMode = useSyncExternalStore(subscribeTheme, getThemeSnapshot, () => false)
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 20)
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
    document.documentElement.style.colorScheme = darkMode ? 'dark' : 'light'
  }, [darkMode])

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  const toggleTheme = () => {
    const nextTheme = !darkMode
    window.localStorage.setItem('tvh-theme', nextTheme ? 'dark' : 'light')
    document.documentElement.classList.toggle('dark', nextTheme)
    document.documentElement.style.colorScheme = nextTheme ? 'dark' : 'light'
    window.dispatchEvent(new Event('tvh-theme-change'))
  }

  return (
    <>
      <motion.header
        layout
        className={`fixed inset-x-0 top-0 z-50 flex justify-center px-3 transition-[padding] duration-500 sm:px-4 lg:px-6 ${
          scrolled ? 'pt-3' : 'pt-4 sm:pt-5'
        }`}
      >
        <motion.div
          layout
          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
          className={`flex w-full min-w-0 items-center justify-between gap-2 rounded-full border border-white/40 px-2.5 py-2 shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-xl transition-colors duration-500 dark:border-white/10 dark:shadow-[0_8px_30px_rgb(0,0,0,0.4)] sm:px-3 ${
            scrolled
              ? 'max-w-5xl bg-white/85 dark:bg-slate-950/85'
              : 'max-w-7xl bg-white/60 dark:bg-slate-950/60'
          }`}
        >
          <Link
            href="/"
            className="group flex min-w-0 items-center gap-2 pl-1 pr-1 sm:gap-3 sm:pr-2"
            onClick={() => setOpen(false)}
          >
            <LogoMark />
            <span className="truncate text-sm font-bold tracking-tight text-slate-900 transition-colors dark:text-white sm:text-base">
              {SITE.shortName}
            </span>
          </Link>

          <nav className="hidden min-w-0 items-center lg:flex">
            <div className="flex max-w-[620px] items-center gap-1 overflow-hidden rounded-full bg-slate-100/60 p-1 ring-1 ring-slate-200/50 dark:bg-white/[0.03] dark:ring-white/10">
              {primaryNav.map((item) => {
                const active =
                  pathname === item.href ||
                  (item.href !== '/' && pathname?.startsWith(`${item.href}/`))

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="relative shrink-0 rounded-full px-3 py-1.5 text-sm font-medium outline-none transition-colors hover:text-slate-900 dark:hover:text-white xl:px-4"
                  >
                    {active && (
                      <motion.div
                        layoutId="active-nav-pill"
                        className="absolute inset-0 z-0 rounded-full bg-white shadow-sm ring-1 ring-black/5 dark:bg-white/10 dark:ring-white/10"
                        transition={{
                          type: 'spring',
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}

                    <span
                      className={`relative z-10 whitespace-nowrap ${
                        active
                          ? 'text-slate-900 dark:text-white'
                          : 'text-slate-600 dark:text-slate-400'
                      }`}
                    >
                      {item.label}
                    </span>
                  </Link>
                )
              })}
            </div>
          </nav>

          <div className="hidden shrink-0 items-center gap-2 lg:flex xl:gap-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className="relative flex h-9 w-9 items-center justify-center rounded-full bg-slate-100/60 text-slate-600 ring-1 ring-slate-200/50 transition-colors hover:bg-slate-200/60 hover:text-slate-900 dark:bg-white/[0.03] dark:text-slate-400 dark:ring-white/10 dark:hover:bg-white/10 dark:hover:text-white"
              aria-label="Toggle dark mode"
              type="button"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={darkMode ? 'dark' : 'light'}
                  variants={themeIconVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  {darkMode ? (
                    <Sun className="h-4 w-4" />
                  ) : (
                    <Moon className="h-4 w-4" />
                  )}
                </motion.div>
              </AnimatePresence>
            </motion.button>

            <Link
              href="/hire-teen-freelancers"
              className="hidden items-center justify-center rounded-full px-3 py-2 text-sm font-semibold text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-300 dark:hover:text-white xl:flex"
            >
              For Startups
            </Link>

            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-9 items-center justify-center gap-2 rounded-full bg-slate-900 pl-4 pr-3 text-sm font-semibold text-white shadow-md transition-colors hover:bg-slate-800 dark:bg-emerald-400 dark:text-slate-950 dark:hover:bg-emerald-300"
              aria-label="Open TeenVerseHub app"
            >
              Open App
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </motion.a>
          </div>

          <div className="flex shrink-0 items-center gap-2 pr-1 lg:hidden">
            <motion.a
              whileTap={{ scale: 0.95 }}
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden h-9 items-center justify-center rounded-full bg-slate-900 px-3 text-xs font-bold text-white shadow-sm dark:bg-emerald-400 dark:text-slate-950 sm:flex"
              aria-label="Open TeenVerseHub app"
            >
              App
            </motion.a>

            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100/60 text-slate-600 ring-1 ring-slate-200/50 dark:bg-white/[0.03] dark:text-slate-400 dark:ring-white/10"
              aria-label="Toggle dark mode"
              type="button"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={darkMode ? 'dark' : 'light'}
                  variants={themeIconVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  {darkMode ? (
                    <Sun className="h-4 w-4" />
                  ) : (
                    <Moon className="h-4 w-4" />
                  )}
                </motion.div>
              </AnimatePresence>
            </motion.button>

            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setOpen((value) => !value)}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-900"
              aria-label={open ? 'Close navigation' : 'Open navigation'}
              aria-expanded={open}
              type="button"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={open ? 'close' : 'menu'}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </div>
        </motion.div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-40 overflow-y-auto bg-slate-100/90 px-4 pb-6 pt-24 dark:bg-slate-950/90 lg:hidden"
          >
            <div className="mx-auto flex min-h-[calc(100dvh-7.5rem)] w-full max-w-md flex-col">
              <motion.div
                variants={mobileItemVariants}
                className="mb-5 rounded-3xl bg-white p-5 shadow-2xl shadow-slate-200/50 ring-1 ring-slate-100 dark:bg-slate-900 dark:shadow-black/50 dark:ring-white/5"
              >
                <div className="mb-4 flex items-center gap-2 rounded-2xl bg-indigo-50/60 px-4 py-3 dark:bg-emerald-400/10">
                  <Sparkles className="h-5 w-5 text-indigo-600 dark:text-emerald-400" />
                  <p className="text-sm font-semibold text-indigo-900 dark:text-emerald-300">
                    TeenVerseHub
                  </p>
                </div>

                <p className="px-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  Guides, services, and platform pages for teen freelancing,
                  portfolios, safety, and startup hiring.
                </p>
              </motion.div>

              <nav className="mb-5 flex flex-col gap-1">
                {primaryNav.map((item) => {
                  const active =
                    pathname === item.href ||
                    (item.href !== '/' && pathname?.startsWith(`${item.href}/`))

                  return (
                    <motion.div variants={mobileItemVariants} key={item.href}>
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className={`group flex items-center justify-between rounded-2xl px-4 py-4 text-lg font-semibold transition-all ${
                          active
                            ? 'bg-white text-indigo-700 shadow-sm dark:bg-slate-900 dark:text-emerald-300'
                            : 'text-slate-900 hover:bg-white hover:shadow-sm dark:text-white dark:hover:bg-slate-900'
                        }`}
                      >
                        {item.label}
                        <ChevronRight className="h-5 w-5 text-slate-400 transition-transform group-hover:translate-x-1 dark:text-slate-500" />
                      </Link>
                    </motion.div>
                  )
                })}
              </nav>

              <motion.div variants={mobileItemVariants} className="mt-auto grid gap-3">
                <Link
                  href="/hire-teen-freelancers"
                  onClick={() => setOpen(false)}
                  className="flex h-14 w-full items-center justify-center rounded-2xl border border-slate-200 bg-white px-4 text-base font-semibold text-slate-900 shadow-sm transition-all active:scale-[0.98] dark:border-white/10 dark:bg-slate-900 dark:text-white"
                >
                  Explore Startup Path
                </Link>

                <a
                  href={APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="flex h-14 w-full items-center justify-center gap-2 rounded-2xl bg-slate-900 px-4 text-base font-semibold text-white shadow-lg shadow-slate-900/20 transition-all active:scale-[0.98] dark:bg-emerald-400 dark:text-slate-950 dark:shadow-emerald-400/20"
                >
                  Open App
                  <ArrowUpRight className="h-5 w-5" />
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}