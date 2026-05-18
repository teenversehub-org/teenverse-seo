import Link from 'next/link'
import { Mail, MapPin, ShieldCheck } from 'lucide-react'

import { footerGroups, SITE } from '../lib/site'

export default function SiteFooter() {
  return (
    <footer className="relative mt-12 border-t border-[#21142f]/10 bg-[#fffaf0] dark:border-white/10 dark:bg-[#070b10]">
      <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,#5b245e,#073b3a,#c79a4b)]" />

      <div className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-6 lg:px-8 lg:py-12">
        <div
          className="
            grid overflow-hidden rounded-[28px]
            border border-[#21142f]/10 bg-white/40
            dark:border-white/10 dark:bg-white/[0.04]

            sm:grid-cols-2
            lg:grid-cols-[1.55fr_repeat(5,minmax(130px,1fr))]
          "
        >
          {/* Brand Section */}
          <div
            className="
              min-w-0 border-b border-[#21142f]/10
              p-6 sm:col-span-2 sm:p-7
              dark:border-white/10
              lg:col-span-1 lg:border-b-0 lg:border-r
              xl:p-8
            "
          >
            <Link href="/" className="flex w-fit max-w-full items-center gap-3">
              <div
                className="
                  flex h-10 w-10 shrink-0 items-center justify-center rounded-xl
                  bg-[linear-gradient(135deg,#5b245e,#073b3a)]
                  text-xs font-black text-white
                  dark:bg-[linear-gradient(135deg,#f8f5ef,#d8b4fe_55%,#6ee7b7)]
                  dark:text-[#21142f]
                "
              >
                T
              </div>

              <p className="truncate text-lg font-black leading-none tracking-tight text-[#21142f] dark:text-white">
                {SITE.name}
              </p>
            </Link>

            <p className="mt-5 max-w-sm text-left text-sm leading-6 text-[#5f5363] dark:text-slate-300">
              Safer first work experience for teen talent, startup teams, and
              families who want a more credible path into digital work.
            </p>

            <div
              className="
                mt-6 divide-y divide-[#21142f]/10 rounded-2xl
                border border-[#21142f]/10 bg-white/60
                text-sm text-[#5f5363]
                dark:divide-white/10 dark:border-white/10
                dark:bg-white/[0.05] dark:text-slate-300
              "
            >
              <div className="flex min-w-0 items-start gap-3 px-5 py-3.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#073b3a] dark:text-emerald-300" />
                <span className="min-w-0 break-words leading-5">
                  {SITE.location}
                </span>
              </div>

              <div className="flex min-w-0 items-start gap-3 px-5 py-3.5">
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#c79a4b]" />
                <span className="min-w-0 break-words leading-5">
                  Operator: {SITE.operator}
                </span>
              </div>

              {SITE.email && (
                <div className="flex min-w-0 items-start gap-3 px-5 py-3.5">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#5b245e] dark:text-[#d8b4fe]" />
                  <span className="min-w-0 break-all leading-5">
                    {SITE.email}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Footer Groups */}
          {footerGroups.map((group) => (
            <div
              key={group.title}
              className="
                min-w-0 border-b border-[#21142f]/10
                p-6 dark:border-white/10
                sm:p-7
                sm:[&:nth-child(odd)]:border-r
                lg:border-b-0 lg:border-r
                lg:last:border-r-0
                xl:p-8
              "
            >
              <h3
                className="
                  text-left text-[11px] font-black uppercase leading-none
                  tracking-[0.22em] text-[#8a6d32]
                  dark:text-[#f4d58d]
                "
              >
                {group.title}
              </h3>

              <ul className="mt-5 space-y-3">
                {group.links.map((link) => (
                  <li key={link.href} className="min-w-0 leading-none">
                    <Link
                      href={link.href}
                      className="
                        block min-w-0 break-words text-left text-sm
                        font-medium leading-5 text-[#5f5363]
                        transition hover:text-[#5b245e]
                        dark:text-slate-300 dark:hover:text-[#d8b4fe]
                      "
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div
          className="
            mt-5 flex flex-col gap-3 rounded-2xl
            border border-[#21142f]/10 bg-white/40
            px-5 py-4 text-left text-sm text-[#736675]
            dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-400

            md:flex-row md:items-center md:justify-between
          "
        >
          <p className="leading-5">
            &copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>

          <p className="leading-5">
            Founder: {SITE.founder}. Trust-first marketplace positioning.
          </p>
        </div>
      </div>
    </footer>
  )
}