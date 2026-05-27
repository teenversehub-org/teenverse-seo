import Link from 'next/link'
import {
  ArrowRight,
  BookOpen,
  FileText,
  Rss,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Users,
  Briefcase,
  PenTool,
  Target,
  Lightbulb,
  GraduationCap,
  Layers,
  Newspaper,
} from 'lucide-react'

import SiteFooter from '../components/SiteFooter'
import SiteHeader from '../components/SiteHeader'
import StructuredData from '../components/StructuredData'
import { getAllBlogPosts, getBlogPostUrl } from '../lib/blog'
import { SITE, absoluteUrl, buildMetadata } from '../lib/site'

export const metadata = buildMetadata({
  title: 'TeenVerseHub Blog | Teen Freelancing, Digital Skills, and Safe Online Work',
  description:
    'Read TeenVerseHub blog guides about teen freelancing, safe online jobs, student digital skills, portfolio building, startup hiring, creator work, and guardian awareness.',
  path: '/blog',
  keywords: [
    'TeenVerseHub blog',
    'TeenVerse Hub blog',
    'teen freelancing blog',
    'safe online jobs for teens',
    'digital skills for teenagers',
    'freelance jobs for teens',
    'how to earn money as a teenager',
    'student freelance guides',
    'teen portfolio tips',
    'guardian guide for teen freelancing',
    'hire teen freelancers',
    'teen creator economy',
  ],
})

const topicCards = [
  {
    icon: ShieldCheck,
    label: 'Safety Guides',
    text: 'Safer online work habits, guardian awareness, scam avoidance, and responsible teen freelancing basics.',
  },
  {
    icon: TrendingUp,
    label: 'Earning Guides',
    text: 'Practical ways teenagers can build digital skills, create portfolio proof, and start with small projects.',
  },
  {
    icon: Briefcase,
    label: 'Freelance Work',
    text: 'Beginner-friendly teen services like editing, writing, design, research, social media, and creator support.',
  },
]

const learningTracks = [
  {
    icon: PenTool,
    title: 'Build a Skill',
    text: 'Start with one digital skill such as video editing, writing, design, research, or basic web work.',
  },
  {
    icon: Target,
    title: 'Create Proof',
    text: 'Turn practice into portfolio samples so clients and collaborators can understand what you can do.',
  },
  {
    icon: Users,
    title: 'Work Responsibly',
    text: 'Use clear communication, realistic deadlines, safe boundaries, and guardian awareness when needed.',
  },
]

const audienceCards = [
  {
    icon: GraduationCap,
    title: 'For Teens',
    text: 'Guides that help teenagers learn digital skills, build confidence, and start freelancing without chasing fake shortcuts.',
  },
  {
    icon: ShieldCheck,
    title: 'For Guardians',
    text: 'Simple explanations around online work, safety, responsible earning, and how teens can explore opportunities carefully.',
  },
  {
    icon: Briefcase,
    title: 'For Clients',
    text: 'Helpful content for startups, creators, and small teams that want to work with young digital talent responsibly.',
  },
]

export default function BlogPage() {
  const posts = getAllBlogPosts()
  const featuredPost = posts[0]
  const otherPosts = posts.slice(1)

  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    '@id': `${absoluteUrl('/blog')}#blog`,
    name: `${SITE.name} Blog`,
    description:
      'TeenVerseHub blog guides for teen freelancing, safe online jobs, student digital skills, startup hiring, portfolios, and guardian awareness.',
    url: absoluteUrl('/blog'),
    publisher: {
      '@type': 'Organization',
      name: SITE.name,
      url: SITE.baseUrl,
    },
    blogPost: posts.map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      url: getBlogPostUrl(post.slug),
      datePublished: post.publishedAt,
      dateModified: post.updatedAt,
    })),
  }

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: posts.map((post, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      url: getBlogPostUrl(post.slug),
      name: post.title,
    })),
  }

  return (
    <>
      <StructuredData data={[blogSchema, itemListSchema]} />
      <SiteHeader />

      <main className="tvh-page-shell">
        {/* HERO */}
        <section className="relative isolate overflow-hidden px-4 pb-16 pt-32 sm:px-6 lg:px-8">
          <div className="absolute inset-x-0 top-0 -z-10 h-[560px] bg-[radial-gradient(circle_at_20%_10%,rgba(79,70,229,0.18),transparent_34%),radial-gradient(circle_at_78%_14%,rgba(16,185,129,0.16),transparent_30%),linear-gradient(180deg,#eef6ff,rgba(248,251,255,0))] dark:bg-[radial-gradient(circle_at_18%_8%,rgba(99,102,241,0.25),transparent_32%),radial-gradient(circle_at_78%_10%,rgba(45,212,191,0.13),transparent_30%),linear-gradient(180deg,#09111f,rgba(4,7,13,0))]" />

          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
              <div>
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white/80 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-indigo-700 shadow-lg shadow-indigo-100/70 backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:text-emerald-300">
                  <Sparkles className="h-4 w-4" />
                  TeenVerseHub Blog
                </div>

                <h1 className="max-w-4xl text-5xl font-black leading-[0.98] tracking-tight text-slate-950 dark:text-white sm:text-7xl">
                  Guides for teen freelancing, skills, and safer online work
                </h1>

                <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
                  The TeenVerseHub blog helps teenagers, guardians, creators,
                  and startups understand teen freelancing in a simple and
                  practical way. Read guides about digital skills, beginner
                  freelance services, portfolio building, safe online work, and
                  responsible ways for young people to grow in the digital
                  economy.
                </p>

                {featuredPost && (
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <Link
                      href={`/blog/${featuredPost.slug}`}
                      className="group inline-flex items-center justify-center gap-3 rounded-full bg-slate-950 px-7 py-4 text-sm font-black uppercase tracking-wide text-white shadow-xl shadow-slate-950/15 transition hover:-translate-y-0.5 dark:bg-emerald-300 dark:text-slate-950"
                    >
                      Read featured guide
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>

                    <Link
                      href="/blog/rss.xml"
                      className="inline-flex items-center justify-center gap-3 rounded-full border border-slate-200 bg-white/75 px-7 py-4 text-sm font-black uppercase tracking-wide text-slate-800 shadow-lg shadow-slate-200/60 backdrop-blur-xl transition hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
                    >
                      <Rss className="h-4 w-4" />
                      RSS feed
                    </Link>
                  </div>
                )}
              </div>

              <div className="grid gap-4 sm:grid-cols-3 lg:pb-2">
                {topicCards.map((item) => {
                  const Icon = item.icon
                  return (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-white/70 bg-white/75 p-5 shadow-xl shadow-indigo-100/60 backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.04] dark:shadow-black/30"
                    >
                      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-slate-950 text-white dark:bg-white dark:text-slate-950">
                        <Icon className="h-5 w-5" />
                      </div>

                      <h2 className="text-base font-black tracking-tight text-slate-950 dark:text-white">
                        {item.label}
                      </h2>

                      <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                        {item.text}
                      </p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* FEATURED + POSTS */}
        <section className="px-4 pb-24 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
            {featuredPost && (
              <div className="self-start lg:sticky lg:top-28">
                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="group relative block overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 shadow-2xl shadow-indigo-100/70 transition hover:-translate-y-1 dark:border-white/10 dark:bg-white/[0.04] dark:shadow-black/40 sm:p-8"
                >
                  <div className={`absolute inset-x-0 top-0 h-2 bg-gradient-to-r ${featuredPost.accent}`} />

                  <div className="flex flex-wrap items-center gap-3 text-xs font-black uppercase tracking-[0.18em] text-indigo-700 dark:text-emerald-300">
                    <span className="rounded-full bg-indigo-50 px-3 py-1 dark:bg-emerald-300/10">
                      Featured Guide
                    </span>
                    <span>{featuredPost.category}</span>
                    <span>{featuredPost.readingTime}</span>
                  </div>

                  <h2 className="mt-8 text-3xl font-black leading-tight tracking-tight text-slate-950 transition group-hover:text-indigo-700 dark:text-white dark:group-hover:text-emerald-300 sm:text-4xl">
                    {featuredPost.title}
                  </h2>

                  <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
                    {featuredPost.summary}
                  </p>

                  <div className="mt-8 grid gap-3">
                    {featuredPost.takeaways.slice(0, 3).map((takeaway) => (
                      <div
                        key={takeaway}
                        className="flex gap-3 rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3 text-sm font-semibold leading-6 text-slate-700 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300"
                      >
                        <FileText className="mt-1 h-4 w-4 shrink-0 text-indigo-600 dark:text-emerald-300" />
                        {takeaway}
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 inline-flex items-center gap-2 text-sm font-black uppercase tracking-wide text-slate-950 dark:text-white">
                    Open article
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>

                <div className="mt-5 rounded-[1.5rem] border border-indigo-100 bg-indigo-50/80 p-6 shadow-lg shadow-indigo-100/50 dark:border-white/10 dark:bg-white/[0.04] dark:shadow-black/30">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-600 text-white dark:bg-emerald-300 dark:text-slate-950">
                    <Layers className="h-5 w-5" />
                  </div>

                  <h3 className="text-xl font-black text-slate-950 dark:text-white">
                    Learn in the right order
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                    Start with a skill, create proof, understand safety, and then
                    explore beginner-friendly freelance work.
                  </p>
                </div>
              </div>
            )}

            <div className="min-w-0">
              <div className="mb-5 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 text-xs font-black uppercase tracking-[0.18em] text-slate-500 shadow-sm dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-400">
                    <Newspaper className="h-4 w-4" />
                    Latest Guides
                  </div>
                  <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 dark:text-white">
                    More TeenVerseHub articles
                  </h2>
                </div>

                <p className="max-w-sm text-sm leading-6 text-slate-500 dark:text-slate-400">
                  Practical guides for teen freelancing, safe online work,
                  portfolios, guardians, and digital skills.
                </p>
              </div>

              <div className="grid gap-5 xl:max-h-[820px] xl:overflow-y-auto xl:pr-2">
                {otherPosts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group rounded-[1.5rem] border border-slate-200 bg-white/85 p-6 shadow-xl shadow-slate-200/60 transition hover:-translate-y-1 hover:bg-white dark:border-white/10 dark:bg-white/[0.04] dark:shadow-black/30 dark:hover:bg-white/[0.07]"
                  >
                    <div className="flex flex-wrap items-center gap-3 text-xs font-black uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                      <span>{post.category}</span>
                      <span>{post.readingTime}</span>
                    </div>

                    <h2 className="mt-4 text-2xl font-black leading-tight tracking-tight text-slate-950 transition group-hover:text-indigo-700 dark:text-white dark:group-hover:text-emerald-300">
                      {post.title}
                    </h2>

                    <p className="mt-3 text-base leading-7 text-slate-600 dark:text-slate-300">
                      {post.summary}
                    </p>

                    <div className="mt-5 inline-flex items-center gap-2 text-sm font-black text-indigo-700 dark:text-emerald-300">
                      Read guide
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* BLOG PURPOSE */}
        <section className="border-y border-slate-200 bg-white/80 px-4 py-20 dark:border-white/10 dark:bg-white/[0.03] sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div className="self-start">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-white dark:bg-emerald-300 dark:text-slate-950">
                <BookOpen className="h-7 w-7" />
              </div>

              <h2 className="text-4xl font-black tracking-tight text-slate-950 dark:text-white">
                What you will learn on the TeenVerseHub blog
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
                TeenVerseHub publishes guides that help young people turn
                digital interest into practical skills. The blog focuses on
                realistic earning paths, safe online work, portfolio building,
                beginner-friendly services, and the responsibilities that come
                with freelancing as a teenager.
              </p>
            </div>

            <div className="grid auto-rows-fr gap-4 sm:grid-cols-3">
              {learningTracks.map((item) => {
                const Icon = item.icon

                return (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/60 dark:border-white/10 dark:bg-white/[0.04] dark:shadow-black/30"
                  >
                    <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-sm font-black text-white dark:bg-emerald-300 dark:text-slate-950">
                      <Icon className="h-5 w-5" />
                    </div>

                    <h3 className="text-lg font-black text-slate-950 dark:text-white">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                      {item.text}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* AUDIENCE SECTION */}
        <section className="px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white/80 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-indigo-700 shadow-lg shadow-indigo-100/70 backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:text-emerald-300">
                <Lightbulb className="h-4 w-4" />
                Built for the whole ecosystem
              </div>

              <h2 className="text-4xl font-black tracking-tight text-slate-950 dark:text-white sm:text-5xl">
                Helpful guides for teens, guardians, and clients
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
                Teen freelancing is not only about earning. It also involves
                learning, communication, trust, safety, expectations, and
                professional growth. The blog explains these topics in a simple,
                practical way.
              </p>
            </div>

            <div className="mt-14 grid auto-rows-fr gap-5 md:grid-cols-3">
              {audienceCards.map((item) => {
                const Icon = item.icon

                return (
                  <div
                    key={item.title}
                    className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-xl shadow-slate-200/60 dark:border-white/10 dark:bg-white/[0.04] dark:shadow-black/30"
                  >
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white dark:bg-white dark:text-slate-950">
                      <Icon className="h-6 w-6" />
                    </div>

                    <h3 className="text-2xl font-black text-slate-950 dark:text-white">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">
                      {item.text}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* SEO TEXT SECTION */}
        <section className="border-y border-slate-200 bg-white/80 px-4 py-20 dark:border-white/10 dark:bg-white/[0.03] sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-2xl shadow-indigo-100/60 dark:border-white/10 dark:bg-white/[0.04] dark:shadow-black/30 sm:p-10">
              <h2 className="text-4xl font-black tracking-tight text-slate-950 dark:text-white">
                Why TeenVerseHub publishes teen freelancing guides
              </h2>

              <div className="mt-7 space-y-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
                <p>
                  Many teenagers want to earn money online, but online earning
                  advice is often filled with unrealistic promises. TeenVerseHub
                  focuses on practical education instead: choose one skill,
                  create samples, build a portfolio, start with small projects,
                  and stay careful with communication and expectations.
                </p>

                <p>
                  The TeenVerseHub blog explains beginner-friendly online jobs
                  for teens such as video editing, thumbnails, content writing,
                  captions, research, social media support, design, and simple
                  web-related tasks. These services are easier to show through
                  sample work and easier for clients to review.
                </p>

                <p>
                  The blog also supports guardians and clients. Guardians can
                  learn what safer teen freelancing should look like, while
                  startups and creators can understand how to work responsibly
                  with young digital talent. Every guide is built around the same
                  idea: teenagers can create real value when the work is clear,
                  age-aware, and skill-focused.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="px-4 py-24 text-center sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl rounded-[2rem] bg-slate-950 px-8 py-14 text-white shadow-2xl shadow-slate-950/20 dark:bg-white dark:text-slate-950">
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 dark:bg-slate-950/10">
              <Sparkles className="h-7 w-7" />
            </div>

            <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
              Start learning before you start earning
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/75 dark:text-slate-600">
              Read TeenVerseHub guides to understand digital skills, teen
              freelancing, safe online work, portfolio building, and responsible
              growth.
            </p>

            {featuredPost && (
              <Link
                href={`/blog/${featuredPost.slug}`}
                className="mt-9 inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-black uppercase tracking-wide text-slate-950 transition hover:-translate-y-0.5 dark:bg-slate-950 dark:text-white"
              >
                Read latest guide
                <ArrowRight className="h-4 w-4" />
              </Link>
            )}
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}