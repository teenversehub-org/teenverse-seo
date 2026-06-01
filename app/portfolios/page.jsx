import Link from 'next/link'
import { ArrowRight, BadgeCheck, Code2, FileText, PenTool, Video } from 'lucide-react'

import SiteFooter from '../components/SiteFooter'
import SiteHeader from '../components/SiteHeader'
import StructuredData from '../components/StructuredData'
import { SITE, absoluteUrl, buildMetadata } from '../lib/site'

export const metadata = buildMetadata({
  title: 'Browse Creative Student Portfolios | TeenVerseHub',
  description:
    'Browse TeenVerseHub public portfolio categories for teen video editors, designers, writers, frontend learners, and student creators in India.',
  path: '/portfolios',
  keywords: [
    'browse student portfolios',
    'teen creative portfolios',
    'student freelancer portfolios',
    'teen video editor portfolio',
    'student designer portfolio',
    'TeenVerseHub portfolios',
  ],
})

const portfolioTypes = [
  {
    icon: Video,
    title: 'Teen video editors',
    text: 'Short-form edits, subtitles, gaming clips, creator reels, and before-after editing samples.',
    href: '/skills/video-editing-for-students',
  },
  {
    icon: PenTool,
    title: 'Student designers',
    text: 'Thumbnails, social media posts, posters, landing page mockups, and beginner brand boards.',
    href: '/skills/graphic-design-gigs-under-18',
  },
  {
    icon: FileText,
    title: 'Teen writers',
    text: 'Captions, scripts, blog drafts, research notes, outlines, and SEO-friendly writing samples.',
    href: '/blog/content-writing-jobs-for-teens',
  },
  {
    icon: Code2,
    title: 'Frontend learners',
    text: 'Landing pages, UI sections, small tools, portfolio sites, and student web experiments.',
    href: '/teen-digital-skills',
  },
]

const pageUrl = absoluteUrl('/portfolios')

const schema = [
  {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${pageUrl}#collection`,
    name: 'Browse Creative Student Portfolios',
    description:
      'A public, crawlable TeenVerseHub portfolio index for student creators and teen freelancers.',
    url: pageUrl,
    isAccessibleForFree: true,
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
    itemListElement: portfolioTypes.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.title,
      url: absoluteUrl(item.href),
    })),
  },
]

export default function PortfoliosPage() {
  return (
    <>
      <StructuredData data={schema} />
      <SiteHeader />
      <main className="tvh-page-shell">
        <section className="tvh-section relative isolate pb-20 pt-32">
          <div className="tv-grid-mesh pointer-events-none absolute inset-0 -z-10 opacity-70" />
          <div className="tvh-section-inner max-w-5xl">
            <div className="tvh-eyebrow mb-6">
              <BadgeCheck className="h-4 w-4" />
              Public portfolio index
            </div>
            <h1 className="tvh-display">
              Browse creative student portfolios
              <span className="tvh-title-accent block">before logging in.</span>
            </h1>
            <p className="tvh-copy mt-7 max-w-3xl">
              This public index keeps TeenVerseHub portfolio discovery crawlable.
              Startups, creators, parents, and students can explore the main
              student talent categories without needing a private dashboard.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href={SITE.appUrl} className="tvh-primary group w-full sm:w-auto">
                Create a portfolio
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </a>
              <Link href="/hire-teen-freelancers" className="tvh-secondary w-full sm:w-auto">
                Hire student talent
              </Link>
            </div>
          </div>
        </section>

        <section className="tvh-section">
          <div className="tvh-section-inner grid gap-5 md:grid-cols-2">
            {portfolioTypes.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group tvh-card p-6 transition hover:-translate-y-1 sm:p-8"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#21142f] text-white dark:bg-white dark:text-[#21142f]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h2 className="mt-5 text-2xl font-bold tracking-tight text-[#21142f] dark:text-white">
                    {item.title}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-[#5c5360] dark:text-slate-300">
                    {item.text}
                  </p>
                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-black text-[#5b245e] dark:text-[#f4d58d]">
                    Open category
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </div>
                </Link>
              )
            })}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
