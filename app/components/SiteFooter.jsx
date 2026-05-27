'use client'

import Link from 'next/link'
import { Mail, MapPin, ShieldCheck } from 'lucide-react'
import { footerGroups, SITE } from '../lib/site'

export default function SiteFooter() {
  return (
    <footer className="relative mt-20 border-t border-[#21142f]/5 bg-[#fffaf0]/30 dark:border-white/5 dark:bg-[#070b10] tracking-tight">
      {/* Precision Top Highlight Line */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-[#5b245e]/40 via-[#073b3a]/30 to-[#c79a4b]/20" />

      <div className="mx-auto w-full max-w-7xl px-6 py-12 lg:px-12">
        
        {/* Main Interface Canvas (Liquid Glass Shell) */}
        <div className="relative overflow-hidden rounded-[2rem] border-t border-l border-white/70 border-b border-r border-white/20 bg-white/40 p-8 shadow-[0_12px_40px_-12px_rgba(33,20,47,0.04),inset_0_1px_3px_rgba(255,255,255,0.7)] backdrop-blur-md dark:border-white/5 dark:border-b-white/0 dark:bg-white/[0.01] dark:shadow-none">
          
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-4">
            
            {/* Left Column Block: Brand & Meta Architecture */}
            <div className="lg:col-span-3 flex flex-col justify-between space-y-6">
              <div>
                <Link href="/" className="inline-flex items-center gap-3 group">
                  {/* Claymorphic Volumetric Icon Emblem */}
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-sm font-bold text-[#21142f] shadow-[0_4px_10px_rgba(33,20,47,0.06),inset_1.5px_1.5px_3px_rgba(255,255,255,0.9),inset_-1.5px_-1.5px_3px_rgba(33,20,47,0.02)] transition-transform duration-200 group-hover:scale-[1.02] dark:bg-white/5 dark:text-white dark:shadow-none">
                    T
                  </div>
                  <p className="text-base font-bold tracking-tight text-[#21142f] dark:text-white whitespace-nowrap">
                    {SITE.name}
                  </p>
                </Link>

                <p className="mt-4 text-xs leading-relaxed text-[#5c5360] dark:text-slate-400 max-w-[240px]">
                  A verification framework constructed for young professionals, fast startup teams, and family oversight parameters.
                </p>
              </div>

              {/* Minimal Linear Metadata Rows */}
              <div className="space-y-2.5 border-t border-[#21142f]/5 pt-5 dark:border-white/5 text-[11px] font-medium text-[#5c5360] dark:text-slate-400">
                <div className="flex items-center gap-2.5 whitespace-nowrap">
                  <MapPin className="h-3.5 w-3.5 text-[#073b3a] dark:text-[#f4d58d] shrink-0" />
                  <span className="truncate">{SITE.location}</span>
                </div>

                <div className="flex items-center gap-2.5 whitespace-nowrap">
                  <ShieldCheck className="h-3.5 w-3.5 text-[#5b245e] dark:text-purple-400 shrink-0" />
                  <span className="truncate">Operator: {SITE.operator}</span>
                </div>

                {SITE.email && (
                  <div className="flex items-center gap-2.5 whitespace-nowrap">
                    <Mail className="h-3.5 w-3.5 text-slate-400 shrink-0" />
                    <span className="truncate">{SITE.email}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Right Column Block: Expanded Link Grid Container to exactly 5 columns */}
            <div className="lg:col-span-9 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-5 lg:pl-6">
              {footerGroups.map((group) => (
                <div key={group.title} className="flex flex-col space-y-4 min-w-0">
                  <h3 className="text-[10px] font-bold uppercase tracking-wider text-[#073b3a] dark:text-[#f4d58d] whitespace-nowrap truncate">
                    {group.title}
                  </h3>

                  <ul className="space-y-2.5">
                    {group.links.map((link) => (
                      <li key={link.href} className="whitespace-nowrap">
                        <Link
                          href={link.href}
                          className="inline-block text-xs text-[#5c5360] transition-colors duration-150 hover:text-[#5b245e] dark:text-slate-400 dark:hover:text-white"
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
        </div>

        {/* Bottom Status Bar Block */}
        <div className="mt-6 flex flex-col gap-4 px-4 text-[11px] font-medium text-slate-400 dark:text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {SITE.name}. All dimensions verified.
          </p>

          <div className="flex items-center gap-1 whitespace-nowrap">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500/80" />
            <p>
              Founder: {SITE.founder} &bull; Trust-Led Infrastructure Setup
            </p>
          </div>
        </div>

      </div>
    </footer>
  )
}