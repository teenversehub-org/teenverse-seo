'use client'

import Link from 'next/link'
import { Mail, MapPin, ShieldCheck } from 'lucide-react'
import { footerGroups, SITE } from '../lib/site'

export default function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white dark:border-white/10 dark:bg-[#070b10]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_2.2fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#191724] text-sm font-semibold text-white dark:bg-white dark:text-[#191724]">
                T
              </span>
              <span className="text-base font-semibold text-[#191724] dark:text-white">{SITE.name}</span>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-600 dark:text-slate-400">
              A safer student talent marketplace for teen portfolios, beginner projects, and startup collaboration.
            </p>

            <div className="mt-6 space-y-3 text-sm text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-[#2f7259] dark:text-[#96d6bf]" />
                <span>{SITE.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-[#2f7259] dark:text-[#96d6bf]" />
                <span>Operator: {SITE.operator}</span>
              </div>
              {SITE.supportEmail && (
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-[#2f7259] dark:text-[#96d6bf]" />
                  <span>{SITE.supportEmail}</span>
                </div>
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
            {footerGroups.map((group) => (
              <div key={group.title}>
                <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">
                  {group.title}
                </h3>
                <ul className="mt-4 space-y-3">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-slate-600 transition hover:text-[#191724] dark:text-slate-400 dark:hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-slate-200 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between dark:border-white/10 dark:text-slate-500">
          <p>&copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <p>Founder: {SITE.founder}</p>
        </div>
      </div>
    </footer>
  )
}
