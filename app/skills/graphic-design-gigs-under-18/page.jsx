import Link from 'next/link'
import { ArrowRight, Brush, CheckCircle2, Palette, ShieldCheck } from 'lucide-react'

import SiteFooter from '../../components/SiteFooter'
import SiteHeader from '../../components/SiteHeader'
import StructuredData from '../../components/StructuredData'
import { SITE, absoluteUrl, buildMetadata } from '../../lib/site'

export const metadata = buildMetadata({
  title: 'Graphic Design Gigs Under 18 | Safe Student Design Work',
  description:
    'A TeenVerseHub guide to graphic design gigs for students under 18, including thumbnails, social posts, portfolios, safe scopes, and guardian awareness.',
  path: '/skills/graphic-design-gigs-under-18',
  keywords: [
    'graphic design gigs under 18',
    'graphic design jobs for teens',
    'design gigs for students',
    'freelance design for minors',
    'teen graphic designer portfolio',
    'TeenVerseHub design gigs',
  ],
})

const pageUrl = absoluteUrl('/skills/graphic-design-gigs-under-18')

const schema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${pageUrl}#webpage`,
  name: 'Graphic Design Gigs Under 18 | Safe Student Design Work',
  description:
    'A TeenVerseHub long-tail page for under-18 students exploring safe beginner graphic design gigs and portfolio-first work.',
  url: pageUrl,
  audience: {
    '@type': 'PeopleAudience',
    name: 'Students under 18 with parent or guardian awareness',
    suggestedMinAge: SITE.minimumAge,
    suggestedMaxAge: 17,
  },
  about: ['graphic design gigs under 18', 'teen design portfolios', 'safe student freelancing'],
  publisher: { '@id': `${SITE.baseUrl}/#organization` },
}

const goodGigs = [
  'YouTube thumbnail concepts for creators',
  'Instagram post sets and simple social media templates',
  'Event posters, club graphics, and student community visuals',
  'Landing page mockups and basic brand boards',
]

const safeguards = [
  'Keep every brief clear enough for a guardian to review',
  'Avoid adult, illegal, misleading, or impersonation-based design work',
  'Agree on file types, number of concepts, and revision limits before starting',
  'Use portfolio samples honestly and label practice projects clearly',
]

export default function GraphicDesignGigsUnder18Page() {
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
                <Palette className="h-4 w-4" />
                Under-18 design guide
              </div>
              <h1 className="tvh-display max-w-5xl">
                Graphic design gigs under 18
                <span className="tvh-title-accent block">with safer starter scopes.</span>
              </h1>
              <p className="tvh-copy mt-7 max-w-3xl">
                Under-18 students can begin with design work that has visible,
                reviewable outputs: thumbnails, social posts, posters, simple
                mockups, and brand boards. TeenVerseHub keeps the focus on
                portfolio proof, guardian awareness, and realistic beginner work.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a href={SITE.appUrl} className="tvh-primary group w-full sm:w-auto">
                  Create design profile
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </a>
                <Link href="/guardian-guide" className="tvh-secondary w-full sm:w-auto">
                  Guardian guide
                </Link>
              </div>
            </div>

            <aside className="tvh-panel p-6 sm:p-8">
              <Brush className="h-7 w-7 text-[#073b3a] dark:text-[#f4d58d]" />
              <p className="tvh-kicker mt-5">Direct answer</p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-[#21142f] dark:text-white">
                The safest design gigs under 18 are small, age-appropriate, and easy to review.
              </h2>
              <p className="tvh-copy mt-4">
                Students should start with clear deliverables, visible samples,
                guardian awareness, and no vague off-platform pressure.
              </p>
            </aside>
          </div>
        </section>

        <section className="tvh-section">
          <div className="tvh-section-inner grid gap-6 lg:grid-cols-2">
            <article className="tvh-panel p-6 sm:p-8">
              <h2 className="text-2xl font-bold tracking-tight text-[#21142f] dark:text-white">
                Good first design gigs
              </h2>
              <ul className="mt-6 grid gap-4">
                {goodGigs.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-6 text-[#5c5360] dark:text-slate-300">
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#073b3a] dark:text-[#f4d58d]" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>

            <article className="tvh-panel p-6 sm:p-8">
              <h2 className="text-2xl font-bold tracking-tight text-[#21142f] dark:text-white">
                Safety rules for minors
              </h2>
              <ul className="mt-6 grid gap-4">
                {safeguards.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-6 text-[#5c5360] dark:text-slate-300">
                    <ShieldCheck className="mt-1 h-4 w-4 shrink-0 text-[#5b245e] dark:text-[#f4d58d]" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
