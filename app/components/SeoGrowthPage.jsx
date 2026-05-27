import Link from 'next/link'
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'

import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'
import StructuredData from './StructuredData'
import { SITE } from '../lib/site'

export default function SeoGrowthPage({
  schema,
  eyebrow,
  title,
  accent,
  description,
  primaryKeyword,
  sections,
  checklist,
  relatedLinks,
}) {
  return (
    <>
      <StructuredData data={schema} />
      <SiteHeader />
      <main className="tvh-page-shell">
        <section className="tvh-section relative isolate pb-20 pt-32">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,rgba(7,59,58,0.03),transparent_45%),radial-gradient(ellipse_at_bottom_right,rgba(91,36,94,0.04),transparent_50%)] dark:bg-none" />
          <div className="tv-grid-mesh pointer-events-none absolute inset-0 -z-10 opacity-70" />
          <div className="tvh-section-inner grid gap-10 lg:grid-cols-[1fr_0.78fr] lg:items-end">
            <div>
              <div className="tvh-eyebrow mb-6">
                <Sparkles className="h-4 w-4" />
                {eyebrow}
              </div>
              <h1 className="tvh-display max-w-5xl">
                {title}
                <span className="tvh-title-accent block">
                  {accent}
                </span>
              </h1>
              <p className="tvh-copy mt-7 max-w-3xl">
                {description}
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a href={SITE.appUrl} className="tvh-primary group w-full sm:w-auto">
                  Login to TeenVerseHub
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </a>
                <Link href="/safety" className="tvh-secondary w-full sm:w-auto">
                  Safety systems
                </Link>
              </div>
            </div>
            <div className="tvh-panel p-6 sm:p-8">
              <BadgeCheck className="h-7 w-7 text-[#073b3a] dark:text-[#f4d58d]" />
              <p className="tvh-kicker mt-5">Search intent</p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-[#21142f] dark:text-white sm:text-3xl">{primaryKeyword}</h2>
              <p className="tvh-copy mt-4">
                This page is written to connect high-intent discovery traffic back to the platform login, trust pages, and relevant TeenVerseHub service paths.
              </p>
            </div>
          </div>
        </section>

        <section className="tvh-section">
          <div className="tvh-section-inner grid gap-4 lg:grid-cols-3">
            {sections.map(({ icon: Icon, title, text }) => (
              <article key={title} className="tvh-card p-5 sm:p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#21142f] shadow-[0_2px_6px_rgba(33,20,47,0.05),inset_0_1px_2px_rgba(255,255,255,0.9)] dark:bg-white/5 dark:text-[#f4d58d] dark:shadow-none">
                  <Icon className="h-5 w-5" />
                </div>
                <h2 className="mt-4 text-base font-bold tracking-tight text-[#21142f] dark:text-white">{title}</h2>
                <p className="mt-2 text-sm leading-7 text-[#5c5360] dark:text-slate-400">{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="tvh-section tvh-section-ink">
          <div className="tvh-section-inner grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-[#f4d58d]">
                <ShieldCheck className="h-4 w-4" />
              </div>
              <h2 className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl">What this means inside TeenVerseHub</h2>
              <p className="mt-2 max-w-md text-sm leading-7 text-[#f8f5ef]/70">
                The goal is not only ranking. Each page needs to move people toward a safer, clearer product action.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {checklist.map((item) => (
                <div key={item} className="flex gap-3 rounded-xl border border-white/5 bg-white/[0.03] p-4">
                  <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#f4d58d]" />
                  <p className="text-sm leading-6 text-white/80">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="tvh-section">
          <div className="tvh-section-inner tvh-panel p-6 sm:p-8">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div>
                <p className="tvh-kicker">Related TeenVerseHub pages</p>
                <h2 className="mt-3 text-2xl font-bold tracking-tight text-[#21142f] dark:text-white sm:text-4xl">Keep moving through the funnel.</h2>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {relatedLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="group flex items-center justify-between rounded-xl border border-[#21142f]/10 bg-white/60 p-4 text-sm font-semibold text-[#21142f] transition hover:bg-white dark:border-white/5 dark:bg-white/[0.03] dark:text-slate-300 dark:hover:bg-white/[0.06]">
                    {link.label}
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </Link>
                ))}
                <a href={SITE.appUrl} className="group flex items-center justify-between rounded-xl bg-[#21142f] p-4 text-sm font-semibold text-white transition hover:bg-[#321747] dark:bg-white dark:text-[#21142f]">
                  Login page
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
