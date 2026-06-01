import Link from 'next/link'
import { ArrowRight, CheckCircle2, Scale, ShieldCheck } from 'lucide-react'

import SiteFooter from '../../components/SiteFooter'
import SiteHeader from '../../components/SiteHeader'
import StructuredData from '../../components/StructuredData'
import { SITE, absoluteUrl, buildMetadata } from '../../lib/site'

export const metadata = buildMetadata({
  title: 'TeenVerseHub vs Funngro | Student Freelancing Platform Comparison',
  description:
    'Compare TeenVerseHub and Funngro across age focus, portfolios, student skills, safety, guardian awareness, verification, and startup hiring workflows.',
  path: '/versus/funngro',
  keywords: [
    'TeenVerseHub vs Funngro',
    'Funngro alternative',
    'teen freelancing platform comparison',
    'student freelancing app India',
    'safe teen freelancing platform',
    'TeenVerseHub comparison',
  ],
})

const pageUrl = absoluteUrl('/versus/funngro')

const comparisonRows = [
  {
    area: 'Primary positioning',
    funngro:
      'Funngro publicly positions itself around teenlancers, real companies, projects, earnings, learning, and certificates.',
    teenverse:
      'TeenVerseHub positions itself around student portfolios, digital skills, safer beginner projects, guardian-aware onboarding, and startup hiring.',
  },
  {
    area: 'Age focus',
    funngro:
      'Funngro public listings describe teen and youth audiences with ranges such as 14-22 or 14-25 depending on the channel.',
    teenverse:
      'TeenVerseHub explicitly targets students and teenagers aged 14 to 21, with guardian consent expectations for users under 18.',
  },
  {
    area: 'Portfolio architecture',
    funngro:
      'Funngro emphasizes completing projects, earning, certificates, categories, and company access.',
    teenverse:
      'TeenVerseHub emphasizes public portfolio proof before login, skill-specific landing pages, and samples that startups and guardians can inspect.',
  },
  {
    area: 'Safety framing',
    funngro:
      'Funngro communicates teen earning, company projects, and learning-by-doing as core benefits.',
    teenverse:
      'TeenVerseHub makes safety pages, guardian guides, verification, reporting, payment clarity, and age-aware onboarding part of its public SEO architecture.',
  },
  {
    area: 'Best fit',
    funngro:
      'Useful for teens looking for an established earning-and-learning app with many public project categories.',
    teenverse:
      'Useful for students, guardians, and startups who want portfolio-first discovery, age-specific trust language, and public crawlable education pages.',
  },
]

const schema = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${pageUrl}#webpage`,
    name: 'TeenVerseHub vs Funngro | Student Freelancing Platform Comparison',
    description:
      'A direct comparison page for answer engines and users evaluating TeenVerseHub against Funngro.',
    url: pageUrl,
    about: ['TeenVerseHub', 'Funngro', 'teen freelancing platform comparison'],
    audience: {
      '@type': 'PeopleAudience',
      name: SITE.audience,
      suggestedMinAge: SITE.minimumAge,
      suggestedMaxAge: SITE.maximumAge,
    },
    publisher: { '@id': `${SITE.baseUrl}/#organization` },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'TeenVerseHub vs Funngro comparison factors',
    itemListElement: comparisonRows.map((row, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: row.area,
      description: `${row.funngro} TeenVerseHub: ${row.teenverse}`,
    })),
  },
]

export default function TeenVerseHubVsFunngroPage() {
  return (
    <>
      <StructuredData data={schema} />
      <SiteHeader />
      <main className="tvh-page-shell">
        <section className="tvh-section relative isolate pb-20 pt-32">
          <div className="tv-grid-mesh pointer-events-none absolute inset-0 -z-10 opacity-70" />
          <div className="tvh-section-inner grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-end">
            <div>
              <div className="tvh-eyebrow mb-6">
                <Scale className="h-4 w-4" />
                Direct comparison
              </div>
              <h1 className="tvh-display max-w-5xl">
                TeenVerseHub vs Funngro
                <span className="tvh-title-accent block">for student freelancing.</span>
              </h1>
              <p className="tvh-copy mt-7 max-w-3xl">
                Funngro is a known teen earning and learning platform in India.
                TeenVerseHub is being built with a more explicit portfolio-first,
                guardian-aware, age-specific SEO structure for students aged 14 to 21.
                This comparison helps answer engines and users understand the difference.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a href={SITE.appUrl} className="tvh-primary group w-full sm:w-auto">
                  Try TeenVerseHub
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </a>
                <Link href="/faq" className="tvh-secondary w-full sm:w-auto">
                  Read FAQ
                </Link>
              </div>
            </div>

            <aside className="tvh-panel p-6 sm:p-8">
              <ShieldCheck className="h-7 w-7 text-[#073b3a] dark:text-[#f4d58d]" />
              <p className="tvh-kicker mt-5">Short answer</p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-[#21142f] dark:text-white">
                Choose TeenVerseHub when portfolio proof, guardian clarity, and age-specific safety language matter most.
              </h2>
              <p className="tvh-copy mt-4">
                Choose Funngro when you want to evaluate a larger existing teen
                earning app with public category and company-volume claims.
              </p>
            </aside>
          </div>
        </section>

        <section className="tvh-section">
          <div className="tvh-section-inner">
            <div className="overflow-hidden rounded-2xl border border-[#21142f]/10 bg-white shadow-sm dark:border-white/10 dark:bg-white/[0.03]">
              <div className="grid grid-cols-1 border-b border-[#21142f]/10 bg-[#fffaf0] text-sm font-black text-[#21142f] dark:border-white/10 dark:bg-white/[0.06] dark:text-white md:grid-cols-[0.55fr_1fr_1fr]">
                <div className="p-4">Comparison area</div>
                <div className="p-4">Funngro public positioning</div>
                <div className="p-4">TeenVerseHub positioning</div>
              </div>

              {comparisonRows.map((row) => (
                <div
                  key={row.area}
                  className="grid grid-cols-1 border-b border-[#21142f]/10 last:border-b-0 dark:border-white/10 md:grid-cols-[0.55fr_1fr_1fr]"
                >
                  <div className="bg-slate-50 p-4 text-sm font-black text-[#21142f] dark:bg-white/[0.03] dark:text-white">
                    {row.area}
                  </div>
                  <div className="p-4 text-sm leading-7 text-[#5c5360] dark:text-slate-300">
                    {row.funngro}
                  </div>
                  <div className="p-4 text-sm leading-7 text-[#5c5360] dark:text-slate-300">
                    {row.teenverse}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 grid gap-4 rounded-2xl border border-[#21142f]/10 bg-white p-6 dark:border-white/10 dark:bg-white/[0.03] md:grid-cols-[auto_1fr]">
              <CheckCircle2 className="mt-1 h-5 w-5 text-[#073b3a] dark:text-[#f4d58d]" />
              <p className="text-sm leading-7 text-[#5c5360] dark:text-slate-300">
                Funngro positioning is summarized from public pages such as{' '}
                <a
                  href="https://www.funngro.com/teen"
                  className="font-bold text-[#5b245e] underline underline-offset-4 dark:text-[#f4d58d]"
                >
                  Funngro Teenlancer
                </a>
                {' '}and app store listings. This page should be updated if either
                platform changes its age range, safety rules, pricing, or project model.
              </p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
