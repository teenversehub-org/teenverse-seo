import Link from 'next/link'
import { ArrowRight, CheckCircle2, Clapperboard, ShieldCheck, Sparkles } from 'lucide-react'

import SiteFooter from '../../components/SiteFooter'
import SiteHeader from '../../components/SiteHeader'
import StructuredData from '../../components/StructuredData'
import { SITE, absoluteUrl, buildMetadata } from '../../lib/site'

export const metadata = buildMetadata({
  title: 'Video Editing for Students | TeenVerseHub Skill Guide',
  description:
    'A student-friendly guide to video editing for reels, Shorts, subtitles, gaming clips, creator support, portfolio samples, and safer beginner freelance projects.',
  path: '/skills/video-editing-for-students',
  keywords: [
    'video editing for students',
    'video editing jobs for students',
    'video editing for teens',
    'freelance video editing for students',
    'student video editor portfolio',
    'TeenVerseHub video editing',
  ],
})

const pageUrl = absoluteUrl('/skills/video-editing-for-students')

const schema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${pageUrl}#webpage`,
  name: 'Video Editing for Students | TeenVerseHub Skill Guide',
  description:
    'A TeenVerseHub long-tail skill page for students who want to learn video editing, build proof, and find safer beginner projects.',
  url: pageUrl,
  audience: {
    '@type': 'PeopleAudience',
    name: SITE.audience,
    suggestedMinAge: SITE.minimumAge,
    suggestedMaxAge: SITE.maximumAge,
  },
  about: ['student video editing', 'teen freelancing', 'portfolio samples'],
  publisher: { '@id': `${SITE.baseUrl}/#organization` },
}

const services = [
  'Short-form reels and YouTube Shorts editing',
  'Subtitles, captions, jump cuts, and pacing cleanup',
  'Gaming highlights and creator clip packages',
  'Thumbnail concepts and simple content repurposing',
]

const portfolioSamples = [
  'A 20-second before-and-after reel edit',
  'A subtitle and pacing sample for a talking-head clip',
  'A gaming highlight with title card and sound cleanup',
  'A creator pack with three Shorts and two thumbnail concepts',
]

export default function VideoEditingForStudentsPage() {
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
                <Clapperboard className="h-4 w-4" />
                Student skill page
              </div>
              <h1 className="tvh-display max-w-5xl">
                Video editing for students
                <span className="tvh-title-accent block">who want visible proof.</span>
              </h1>
              <p className="tvh-copy mt-7 max-w-3xl">
                Video editing is one of the clearest student freelance skills because
                clients can review the output quickly. TeenVerseHub helps students
                turn reels, Shorts, captions, creator clips, and portfolio samples
                into beginner-friendly project readiness.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a href={SITE.appUrl} className="tvh-primary group w-full sm:w-auto">
                  Create video editor profile
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </a>
                <Link href="/portfolios" className="tvh-secondary w-full sm:w-auto">
                  Browse portfolios
                </Link>
              </div>
            </div>

            <aside className="tvh-panel p-6 sm:p-8">
              <Sparkles className="h-7 w-7 text-[#073b3a] dark:text-[#f4d58d]" />
              <p className="tvh-kicker mt-5">Direct answer</p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-[#21142f] dark:text-white">
                Students can start video editing by making 3 to 5 short, reviewable samples.
              </h2>
              <p className="tvh-copy mt-4">
                The safest early projects are small, specific, age-appropriate, and
                easy for a guardian or client to understand.
              </p>
            </aside>
          </div>
        </section>

        <section className="tvh-section">
          <div className="tvh-section-inner grid gap-6 lg:grid-cols-2">
            <article className="tvh-panel p-6 sm:p-8">
              <h2 className="text-2xl font-bold tracking-tight text-[#21142f] dark:text-white">
                Beginner services to target
              </h2>
              <ul className="mt-6 grid gap-4">
                {services.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-6 text-[#5c5360] dark:text-slate-300">
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#073b3a] dark:text-[#f4d58d]" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>

            <article className="tvh-panel p-6 sm:p-8">
              <h2 className="text-2xl font-bold tracking-tight text-[#21142f] dark:text-white">
                Portfolio samples to publish first
              </h2>
              <ul className="mt-6 grid gap-4">
                {portfolioSamples.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-6 text-[#5c5360] dark:text-slate-300">
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#5b245e] dark:text-[#f4d58d]" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section className="tvh-section tvh-section-ink">
          <div className="tvh-section-inner grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <ShieldCheck className="h-8 w-8 text-[#f4d58d]" />
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white">
                Keep student video work safe and scoped.
              </h2>
            </div>
            <p className="text-sm leading-7 text-white/75">
              Students should avoid vague editing offers, adult or illegal content,
              unpaid trials with no limit, and pressure to move communication
              off-platform. A good first brief names the video count, length,
              style, deadline, revision limit, and payment terms.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
