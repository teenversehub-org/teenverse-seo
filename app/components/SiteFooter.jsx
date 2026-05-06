import Link from 'next/link'
import { Mail, MapPin, ShieldCheck } from 'lucide-react'

import { footerGroups, SITE } from '../lib/site'

export default function SiteFooter() {
  return (
    <footer className="relative mt-12 border-t border-slate-200 bg-white dark:border-white/10 dark:bg-slate-950">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-indigo-600 via-emerald-500 to-amber-400" />
      <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.25fr_repeat(4,minmax(0,0.75fr))]">
          <div>
            <Link href="/" className="flex w-fit items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[linear-gradient(135deg,#4f46e5,#0f766e)] text-xs font-black text-white dark:bg-[linear-gradient(135deg,#818cf8,#34d399)] dark:text-slate-950">
                TV
              </div>
              <p className="text-lg font-black tracking-normal text-slate-950 dark:text-white">
                {SITE.name}
              </p>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-600 dark:text-slate-300">
              Safer first work experience for teen talent, startup teams, and families who want a more credible path into digital work.
            </p>

            <div className="mt-6 grid max-w-md gap-3 text-sm text-slate-600 dark:text-slate-300">
              <a
                href={`mailto:${SITE.supportEmail}`}
                className="flex items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 font-semibold hover:bg-white dark:border-white/10 dark:bg-slate-900 dark:hover:bg-slate-800"
              >
                <Mail className="h-4 w-4 text-indigo-600 dark:text-emerald-300" />
                {SITE.supportEmail}
              </a>
              <div className="flex items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 dark:border-white/10 dark:bg-slate-900">
                <MapPin className="h-4 w-4 text-emerald-600 dark:text-emerald-300" />
                {SITE.location}
              </div>
              <div className="flex items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 dark:border-white/10 dark:bg-slate-900">
                <ShieldCheck className="h-4 w-4 text-amber-500" />
                Operator: {SITE.operator}
              </div>
            </div>
          </div>

          {footerGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-[11px] font-black uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                {group.title}
              </h3>
              <ul className="mt-5 space-y-3 text-sm">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="font-medium text-slate-600 transition hover:text-indigo-700 dark:text-slate-300 dark:hover:text-emerald-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-slate-200 pt-6 text-sm text-slate-500 dark:border-white/10 dark:text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <p>Founder: {SITE.founder}. Trust-first marketplace positioning.</p>
        </div>
      </div>
    </footer>
  )
}
