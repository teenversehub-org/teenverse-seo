import Link from 'next/link'
import { Mail, MapPin, ShieldCheck } from 'lucide-react'

import { footerGroups, SITE } from '../lib/site'

export default function SiteFooter() {
  return (
    <footer className="relative mt-12 border-t border-[#21142f]/10 bg-[#fffaf0] dark:border-white/10 dark:bg-[#070b10]">
      <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,#5b245e,#073b3a,#c79a4b)]" />
      <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-3 xl:grid-cols-[1.2fr_repeat(5,minmax(0,0.72fr))]">
          <div>
            <Link href="/" className="flex w-fit items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[linear-gradient(135deg,#5b245e,#073b3a)] text-xs font-black text-white dark:bg-[linear-gradient(135deg,#f8f5ef,#d8b4fe_55%,#6ee7b7)] dark:text-[#21142f]">
                T
              </div>
              <p className="text-lg font-black tracking-normal text-[#21142f] dark:text-white">
                {SITE.name}
              </p>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-[#5f5363] dark:text-slate-300">
              Safer first work experience for teen talent, startup teams, and families who want a more credible path into digital work.
            </p>

            <div className="mt-6 grid max-w-md gap-3 text-sm text-[#5f5363] dark:text-slate-300">
              <a
                href={SITE.appUrl}
                className="flex items-center gap-3 rounded-lg border border-[#21142f]/10 bg-[#21142f] px-4 py-3 font-semibold text-white hover:bg-[#321747] dark:border-white/10 dark:bg-[#f8f5ef] dark:text-[#21142f] dark:hover:bg-white"
              >
                <ShieldCheck className="h-4 w-4" />
                Login to TeenVerseHub
              </a>
              <a
                href={`mailto:${SITE.supportEmail}`}
                className="flex items-center gap-3 rounded-lg border border-[#21142f]/10 bg-white/55 px-4 py-3 font-semibold hover:bg-white dark:border-white/10 dark:bg-white/[0.06] dark:hover:bg-white/[0.1]"
              >
                <Mail className="h-4 w-4 text-[#5b245e] dark:text-[#d8b4fe]" />
                {SITE.supportEmail}
              </a>
              <div className="flex items-center gap-3 rounded-lg border border-[#21142f]/10 bg-white/55 px-4 py-3 dark:border-white/10 dark:bg-white/[0.06]">
                <MapPin className="h-4 w-4 text-[#073b3a] dark:text-emerald-300" />
                {SITE.location}
              </div>
              <div className="flex items-center gap-3 rounded-lg border border-[#21142f]/10 bg-white/55 px-4 py-3 dark:border-white/10 dark:bg-white/[0.06]">
                <ShieldCheck className="h-4 w-4 text-[#c79a4b]" />
                Operator: {SITE.operator}
              </div>
            </div>
          </div>

          {footerGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-[11px] font-black uppercase tracking-[0.18em] text-[#8a6d32] dark:text-[#f4d58d]">
                {group.title}
              </h3>
              <ul className="mt-5 space-y-3 text-sm">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="font-medium text-[#5f5363] transition hover:text-[#5b245e] dark:text-slate-300 dark:hover:text-[#d8b4fe]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-[#21142f]/10 pt-6 text-sm text-[#736675] dark:border-white/10 dark:text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <p>Founder: {SITE.founder}. Trust-first marketplace positioning.</p>
        </div>
      </div>
    </footer>
  )
}
