'use client'

import { useEffect, useState, useSyncExternalStore } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ArrowUpRight, Menu, Moon, Sun, X } from 'lucide-react'

import { SITE, primaryNav } from '../lib/site'

const APP_URL = SITE.appUrl || 'https://app.teenversehub.in/login'

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

function LogoMark() {
  return (
    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#191724] text-sm font-semibold text-white dark:bg-white dark:text-[#191724]">
      T
    </span>
  )
}

function NavLink({ item, active, onClick }) {
  return (
    <Link
      href={item.href}
      onClick={onClick}
      className={`rounded-lg px-3 py-2 text-sm font-medium transition ${
        active
          ? 'bg-slate-100 text-[#191724] dark:bg-white/10 dark:text-white'
          : 'text-slate-600 hover:bg-slate-100 hover:text-[#191724] dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white'
      }`}
    >
      {item.label}
    </Link>
  )
}

export default function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const darkMode = useSyncExternalStore(subscribeTheme, getThemeSnapshot, () => false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
    document.documentElement.style.colorScheme = darkMode ? 'dark' : 'light'
  }, [darkMode])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const toggleTheme = () => {
    const nextTheme = !darkMode
    window.localStorage.setItem('tvh-theme', nextTheme ? 'dark' : 'light')
    document.documentElement.classList.toggle('dark', nextTheme)
    document.documentElement.style.colorScheme = nextTheme ? 'dark' : 'light'
    window.dispatchEvent(new Event('tvh-theme-change'))
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-[#fbfaf7]/90 backdrop-blur-md dark:border-white/10 dark:bg-[#070b10]/90">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex min-w-0 items-center gap-3" onClick={() => setOpen(false)}>
          <LogoMark />
          <span className="truncate text-sm font-semibold text-[#191724] dark:text-white sm:text-base">
            {SITE.shortName}
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {primaryNav.map((item) => {
            const active = pathname === item.href || (item.href !== '/' && pathname?.startsWith(`${item.href}/`))
            return <NavLink key={item.href} item={item} active={active} />
          })}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <button
            onClick={toggleTheme}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 transition hover:bg-slate-50 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:bg-white/10"
            aria-label="Toggle dark mode"
            type="button"
          >
            {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          <Link
            href="/hire-teen-freelancers"
            className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-[#191724] dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white"
          >
            For startups
          </Link>

          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 items-center justify-center gap-2 rounded-lg bg-[#191724] px-4 text-sm font-semibold text-white transition hover:bg-[#2a2636] dark:bg-white dark:text-[#191724] dark:hover:bg-slate-100"
          >
            dashboard
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={toggleTheme}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
            aria-label="Toggle dark mode"
            type="button"
          >
            {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          <button
            onClick={() => setOpen((value) => !value)}
            className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#191724] text-white dark:bg-white dark:text-[#191724]"
            aria-label={open ? 'Close navigation' : 'Open navigation'}
            aria-expanded={open}
            type="button"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-x-0 top-16 z-40 border-b border-slate-200 bg-[#fbfaf7] px-4 pb-5 pt-3 shadow-sm dark:border-white/10 dark:bg-[#070b10] lg:hidden">
          <nav className="mx-auto flex max-w-md flex-col gap-1" aria-label="Mobile navigation">
            {primaryNav.map((item) => {
              const active = pathname === item.href || (item.href !== '/' && pathname?.startsWith(`${item.href}/`))
              return <NavLink key={item.href} item={item} active={active} onClick={() => setOpen(false)} />
            })}
          </nav>

          <div className="mx-auto mt-4 grid max-w-md gap-2">
            <Link
              href="/hire-teen-freelancers"
              onClick={() => setOpen(false)}
              className="flex h-11 items-center justify-center rounded-lg border border-slate-200 bg-white text-sm font-semibold text-[#191724] dark:border-white/10 dark:bg-white/5 dark:text-white"
            >
              For startups
            </Link>
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="flex h-11 items-center justify-center gap-2 rounded-lg bg-[#191724] text-sm font-semibold text-white dark:bg-white dark:text-[#191724]"
            >
              dashboard
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
