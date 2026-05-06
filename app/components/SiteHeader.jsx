'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ArrowUpRight, ChevronRight, Menu, Moon, Sparkles, Sun, X } from 'lucide-react'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'

import { SITE, primaryNav } from '../lib/site'

// ─── MICRO-COMPONENTS ────────────────────────────────────────────────────────

function LogoMark() {
  return (
    <motion.div 
      whileHover={{ scale: 1.05, rotate: 5 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-teal-500 text-base font-black text-white shadow-[0_0_20px_rgba(79,70,229,0.3)] dark:from-indigo-400 dark:to-emerald-400 dark:text-slate-950 dark:shadow-[0_0_20px_rgba(52,211,153,0.2)]"
    >
      <div className="absolute inset-0 rounded-xl border border-white/20 dark:border-black/10"></div>
      T
    </motion.div>
  )
}

// ─── ANIMATION VARIANTS ──────────────────────────────────────────────────────

const mobileMenuVariants = {
  hidden: { opacity: 0, backdropFilter: "blur(0px)" },
  visible: { 
    opacity: 1, 
    backdropFilter: "blur(16px)",
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1], staggerChildren: 0.05, delayChildren: 0.1 }
  },
  exit: { 
    opacity: 0, 
    backdropFilter: "blur(0px)",
    transition: { duration: 0.3, staggerChildren: 0.05, staggerDirection: -1 } 
  }
}

const mobileItemVariants = {
  hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { type: "spring", stiffness: 300, damping: 24 } },
  exit: { opacity: 0, y: 10, filter: "blur(2px)", transition: { duration: 0.2 } }
}

const themeIconVariants = {
  initial: { scale: 0.5, opacity: 0, rotate: -45 },
  animate: { scale: 1, opacity: 1, rotate: 0, transition: { type: "spring", stiffness: 300, damping: 20 } },
  exit: { scale: 0.5, opacity: 0, rotate: 45, transition: { duration: 0.2 } }
}

// ─── MAIN COMPONENT ──────────────────────────────────────────────────────────

export default function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()

  // Track scroll for dynamic header sizing
  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 20)
  })

  // Initialization & Theme setup
  useEffect(() => {
    const storedTheme = window.localStorage.getItem('tvh-theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const isDark = storedTheme === 'dark' || (!storedTheme && prefersDark)
    
    setMounted(true)
    setDarkMode(isDark)
    document.documentElement.classList.toggle('dark', isDark)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = 'unset'
    return () => { document.body.style.overflow = 'unset' }
  }, [open])

  const toggleTheme = () => {
    const nextTheme = !darkMode
    setDarkMode(nextTheme)
    window.localStorage.setItem('tvh-theme', nextTheme ? 'dark' : 'light')
    document.documentElement.classList.toggle('dark', nextTheme)
  }

  return (
    <>
      <motion.header 
        layout
        className={`fixed inset-x-0 top-0 z-50 flex justify-center px-4 transition-[padding] duration-500 sm:px-6 ${
          scrolled ? 'pt-3 sm:pt-4' : 'pt-5 sm:pt-6'
        }`}
      >
        <motion.div
          layout
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
          className={`flex w-full items-center justify-between gap-4 rounded-full border border-white/40 px-3 py-2.5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-xl transition-colors duration-500 dark:border-white/10 dark:shadow-[0_8px_30px_rgb(0,0,0,0.4)] ${
            scrolled ? 'bg-white/80 max-w-4xl dark:bg-slate-950/80' : 'bg-white/50 max-w-6xl dark:bg-slate-950/50'
          }`}
        >
          {/* Logo Section */}
          <Link href="/" className="group flex items-center gap-3 pl-1 pr-2" onClick={() => setOpen(false)}>
            <LogoMark />
            <span className="text-sm font-bold tracking-tight text-slate-900 transition-colors dark:text-white sm:text-base">
              {SITE.shortName}
            </span>
          </Link>

          {/* Desktop Navigation (Framer Motion Shared Layout) */}
          <nav className="hidden items-center md:flex">
            <div className="flex items-center gap-1 rounded-full bg-slate-100/50 p-1 ring-1 ring-slate-200/50 dark:bg-white/[0.03] dark:ring-white/10">
              {primaryNav.map((item) => {
                const active = pathname === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="relative rounded-full px-4 py-1.5 text-sm font-medium outline-none transition-colors hover:text-slate-900 dark:hover:text-white"
                  >
                    {active && (
                      <motion.div
                        layoutId="active-nav-pill"
                        className="absolute inset-0 z-0 rounded-full bg-white shadow-sm ring-1 ring-black/5 dark:bg-white/10 dark:ring-white/10"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className={`relative z-10 ${active ? 'text-slate-900 dark:text-white' : 'text-slate-600 dark:text-slate-400'}`}>
                      {item.label}
                    </span>
                  </Link>
                )
              })}
            </div>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-3 md:flex pr-1">
            {mounted ? (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleTheme}
                className="relative flex h-9 w-9 items-center justify-center rounded-full bg-slate-100/50 text-slate-600 ring-1 ring-slate-200/50 transition-colors hover:bg-slate-200/50 hover:text-slate-900 dark:bg-white/[0.03] dark:text-slate-400 dark:ring-white/10 dark:hover:bg-white/10 dark:hover:text-white"
                aria-label="Toggle dark mode"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div key={darkMode ? "dark" : "light"} variants={themeIconVariants} initial="initial" animate="animate" exit="exit">
                    {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                  </motion.div>
                </AnimatePresence>
              </motion.button>
            ) : (
              <div className="h-9 w-9" />
            )}
            
            <Link 
              href="/hire-teen-freelancers" 
              className="hidden lg:flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
            >
              For Startups
            </Link>
            
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={SITE.appUrl} 
              className="group flex h-9 items-center justify-center gap-2 rounded-full bg-slate-900 pl-4 pr-3 text-sm font-semibold text-white shadow-md transition-colors hover:bg-slate-800 dark:bg-emerald-400 dark:text-slate-950 dark:hover:bg-emerald-300"
            >
              Open App
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </motion.a>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-2 md:hidden pr-1">
            {mounted && (
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={toggleTheme}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100/50 text-slate-600 ring-1 ring-slate-200/50 dark:bg-white/[0.03] dark:text-slate-400 dark:ring-white/10"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div key={darkMode ? "dark" : "light"} variants={themeIconVariants} initial="initial" animate="animate" exit="exit">
                    {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                  </motion.div>
                </AnimatePresence>
              </motion.button>
            )}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setOpen((value) => !value)}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-900"
              aria-label="Open navigation"
            >
              <AnimatePresence mode="wait">
                <motion.div key={open ? "close" : "menu"} initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </div>
        </motion.div>
      </motion.header>

      {/* Mobile Menu Overlay (Staggered Animations) */}
      <AnimatePresence>
        {open && (
          <motion.div 
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-40 flex flex-col justify-end bg-slate-100/80 px-4 pb-6 pt-24 dark:bg-slate-950/80 md:hidden"
          >
            <div className="mx-auto w-full max-w-md flex-1 flex flex-col justify-center">
              
              <motion.div variants={mobileItemVariants} className="mb-8 rounded-3xl bg-white p-6 shadow-2xl shadow-slate-200/50 ring-1 ring-slate-100 dark:bg-slate-900 dark:shadow-black/50 dark:ring-white/5">
                <div className="mb-6 flex items-center gap-2 rounded-2xl bg-indigo-50/50 px-4 py-3 dark:bg-emerald-400/10">
                  <Sparkles className="h-5 w-5 text-indigo-600 dark:text-emerald-400" />
                  <p className="text-sm font-semibold text-indigo-900 dark:text-emerald-300">
                    Why TeenVerse?
                  </p>
                </div>
                <p className="px-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  We help teen freelancers build real proof, while giving startups a safer, trusted hub to hire fresh digital talent.
                </p>
              </motion.div>

              <nav className="mb-8 flex flex-col gap-1 px-2">
                {primaryNav.map((item) => (
                  <motion.div variants={mobileItemVariants} key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="group flex items-center justify-between rounded-2xl px-4 py-4 text-lg font-semibold text-slate-900 transition-all hover:bg-white hover:shadow-sm dark:text-white dark:hover:bg-slate-900"
                    >
                      {item.label}
                      <ChevronRight className="h-5 w-5 text-slate-400 transition-transform group-hover:translate-x-1 dark:text-slate-500" />
                    </Link>
                  </motion.div>
                ))}
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
                  href={SITE.appUrl} 
                  className="flex h-14 w-full items-center justify-center gap-2 rounded-2xl bg-slate-900 px-4 text-base font-semibold text-white shadow-lg shadow-slate-900/20 transition-all active:scale-[0.98] dark:bg-emerald-400 dark:text-slate-950 dark:shadow-emerald-400/20"
                >
                  Open Application
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