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
      <main className="min-h-screen overflow-hidden bg-[#f8f5ef] text-[#21142f] dark:bg-[#070b10] dark:text-white">
        <section className="relative isolate px-5 pb-20 pt-32 sm:px-8 lg:px-12">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_0%,rgba(91,36,94,0.20),transparent_34%),radial-gradient(circle_at_88%_8%,rgba(7,59,58,0.18),transparent_30%)]" />
          <div className="tv-grid-mesh pointer-events-none absolute inset-0 -z-10 opacity-70" />
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.78fr] lg:items-end">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#5b245e]/15 bg-white/70 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#5b245e] shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/10 dark:text-[#d8b4fe]">
                <Sparkles className="h-4 w-4" />
                {eyebrow}
              </div>
              <h1 className="max-w-5xl text-5xl font-black leading-[0.98] tracking-normal sm:text-7xl">
                {title}
                <span className="block bg-[linear-gradient(120deg,#5b245e_0%,#073b3a_52%,#c79a4b_100%)] bg-clip-text text-transparent dark:bg-[linear-gradient(120deg,#f8f5ef_0%,#d8b4fe_48%,#6ee7b7_100%)] dark:bg-clip-text">
                  {accent}
                </span>
              </h1>
              <p className="mt-7 max-w-3xl text-lg leading-8 text-[#5c5360] dark:text-slate-300">
                {description}
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a href={SITE.appUrl} className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#21142f] px-6 py-3 text-sm font-black text-white shadow-[0_18px_55px_rgba(33,20,47,0.22)] transition hover:-translate-y-0.5 dark:bg-[#f8f5ef] dark:text-[#21142f]">
                  Login to TeenVerseHub
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </a>
                <Link href="/safety" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#21142f]/15 bg-white/70 px-6 py-3 text-sm font-bold text-[#21142f] backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-white dark:border-white/15 dark:bg-white/10 dark:text-white">
                  Safety systems
                </Link>
              </div>
            </div>
            <div className="rounded-[2rem] border border-[#21142f]/10 bg-white/70 p-6 shadow-[0_30px_90px_rgba(33,20,47,0.12)] backdrop-blur-2xl dark:border-white/10 dark:bg-white/[0.06]">
              <BadgeCheck className="h-8 w-8 text-[#073b3a] dark:text-emerald-300" />
              <p className="mt-5 text-sm font-black uppercase tracking-[0.18em] text-[#8a6d32] dark:text-[#f4d58d]">Search intent</p>
              <h2 className="mt-3 text-3xl font-black">{primaryKeyword}</h2>
              <p className="mt-4 leading-7 text-[#5c5360] dark:text-slate-300">
                This page is written to connect high-intent discovery traffic back to the platform login, trust pages, and relevant TeenVerseHub service paths.
              </p>
            </div>
          </div>
        </section>

        <section className="px-5 py-16 sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
            {sections.map(({ icon: Icon, title, text }) => (
              <article key={title} className="rounded-[1.5rem] border border-[#21142f]/10 bg-white/75 p-7 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.06]">
                <Icon className="h-7 w-7 text-[#5b245e] dark:text-[#d8b4fe]" />
                <h2 className="mt-5 text-2xl font-black">{title}</h2>
                <p className="mt-4 leading-7 text-[#5c5360] dark:text-slate-300">{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-[#21142f] px-5 py-20 text-white dark:bg-[#0d1117] sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <ShieldCheck className="h-10 w-10 text-[#f4d58d]" />
              <h2 className="mt-6 text-4xl font-black tracking-normal sm:text-5xl">What this means inside TeenVerseHub</h2>
              <p className="mt-5 text-lg leading-8 text-white/72">
                The goal is not only ranking. Each page needs to move people toward a safer, clearer product action.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {checklist.map((item) => (
                <div key={item} className="flex gap-3 rounded-2xl border border-white/10 bg-white/8 p-5 backdrop-blur-xl">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#f4d58d]" />
                  <p className="leading-7 text-white/82">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-16 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl rounded-[2rem] border border-[#21142f]/10 bg-[#fffaf0] p-8 shadow-[0_35px_110px_rgba(91,36,94,0.12)] dark:border-white/10 dark:bg-white/[0.06] sm:p-12">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.22em] text-[#5b245e] dark:text-[#d8b4fe]">Related TeenVerseHub pages</p>
                <h2 className="mt-4 text-3xl font-black sm:text-5xl">Keep moving through the funnel.</h2>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {relatedLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="group flex items-center justify-between rounded-2xl border border-[#21142f]/10 bg-white/70 p-5 font-black transition hover:bg-white dark:border-white/10 dark:bg-white/10 dark:hover:bg-white/15">
                    {link.label}
                    <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
                  </Link>
                ))}
                <a href={SITE.appUrl} className="group flex items-center justify-between rounded-2xl bg-[#21142f] p-5 font-black text-white transition hover:-translate-y-0.5 dark:bg-white dark:text-[#21142f]">
                  Login page
                  <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
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
