import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Clock3,
  FileText,
  ShieldCheck,
  Sparkles,
  UserRound,
  BookOpen,
  GraduationCap,
} from 'lucide-react'

import SiteFooter from '../../components/SiteFooter'
import SiteHeader from '../../components/SiteHeader'
import StructuredData from '../../components/StructuredData'
import {
  getAllBlogPosts,
  getBlogFaqSchema,
  getBlogPost,
  getBlogPostSchema,
  getRelatedBlogPosts,
} from '../../lib/blog'
import { SITE, absoluteUrl, buildMetadata } from '../../lib/site'

export function generateStaticParams() {
  return getAllBlogPosts().map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const post = getBlogPost(slug)

  if (!post) {
    return {
      title: 'Blog post not found',
    }
  }

  return buildMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    keywords: post.keywords,
    type: 'article',
  })
}

function formatDate(value) {
  return new Intl.DateTimeFormat('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(new Date(value))
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params
  const post = getBlogPost(slug)

  if (!post) notFound()

  const relatedPosts = getRelatedBlogPosts(post.slug)

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: SITE.baseUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: absoluteUrl('/blog'),
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: absoluteUrl(`/blog/${post.slug}`),
      },
    ],
  }

  return (
    <>
      <StructuredData
        data={[getBlogPostSchema(post), getBlogFaqSchema(post), breadcrumbSchema]}
      />
      <SiteHeader />

      <main className="tvh-page-shell">
        <article>
          {/* ARTICLE HERO */}
          <header className="relative isolate overflow-hidden px-4 pb-16 pt-32 sm:px-6 lg:px-8">
            <div className="absolute inset-x-0 top-0 -z-10 h-[620px] bg-[radial-gradient(circle_at_18%_8%,rgba(79,70,229,0.18),transparent_34%),radial-gradient(circle_at_80%_10%,rgba(16,185,129,0.16),transparent_28%),linear-gradient(180deg,#eef6ff,rgba(248,251,255,0))] dark:bg-[radial-gradient(circle_at_18%_8%,rgba(99,102,241,0.25),transparent_32%),radial-gradient(circle_at_78%_10%,rgba(45,212,191,0.13),transparent_30%),linear-gradient(180deg,#09111f,rgba(4,7,13,0))]" />

            <div className="mx-auto max-w-5xl">
              <Link
                href="/blog"
                className="mb-8 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm font-bold text-slate-700 shadow-lg shadow-slate-200/60 backdrop-blur-xl transition hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:bg-white/10"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to blog
              </Link>

              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white/80 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-indigo-700 shadow-lg shadow-indigo-100/70 backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:text-emerald-300">
                <Sparkles className="h-4 w-4" />
                TeenVerseHub Guide
              </div>

              <div className="flex flex-wrap items-center gap-3 text-xs font-black uppercase tracking-[0.18em] text-indigo-700 dark:text-emerald-300">
                <span className="rounded-full bg-indigo-50 px-3 py-1 dark:bg-emerald-300/10">
                  {post.category}
                </span>

                <span className="inline-flex items-center gap-1.5">
                  <CalendarDays className="h-4 w-4" />
                  {formatDate(post.publishedAt)}
                </span>

                <span className="inline-flex items-center gap-1.5">
                  <Clock3 className="h-4 w-4" />
                  {post.readingTime}
                </span>
              </div>

              <h1 className="mt-8 max-w-5xl text-4xl font-black leading-[1.03] tracking-tight text-slate-950 dark:text-white sm:text-6xl lg:text-7xl">
                {post.title}
              </h1>

              <p className="mt-7 max-w-3xl text-xl leading-9 text-slate-600 dark:text-slate-300">
                {post.description}
              </p>

              <div className="mt-10 grid gap-4 rounded-[2rem] border border-white/70 bg-white/80 p-5 shadow-2xl shadow-indigo-100/60 backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.04] dark:shadow-black/40 sm:grid-cols-3">
                {[
                  ['Topic', post.category, BookOpen],
                  ['Audience', 'Teens, guardians, and clients', ShieldCheck],
                  ['Guide style', 'Practical and beginner-friendly', FileText],
                ].map(([label, value, Icon]) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-slate-100 bg-slate-50 p-4 dark:border-white/10 dark:bg-white/[0.04]"
                  >
                    <Icon className="mb-3 h-5 w-5 text-indigo-600 dark:text-emerald-300" />
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                      {label}
                    </p>
                    <p className="mt-2 text-sm font-bold leading-6 text-slate-950 dark:text-white">
                      {value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </header>

          {/* ARTICLE BODY */}
          <div className="px-4 pb-24 sm:px-6 lg:px-8">
            <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start">
              <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-2xl shadow-slate-200/70 dark:border-white/10 dark:bg-white/[0.04] dark:shadow-black/40 sm:p-10 lg:p-12">
                <section className="mb-12 rounded-[1.5rem] border border-indigo-100 bg-indigo-50/70 p-6 dark:border-emerald-300/10 dark:bg-emerald-300/[0.04]">
                  <h2 className="text-2xl font-black tracking-tight text-slate-950 dark:text-white">
                    Key takeaways
                  </h2>

                  <ul className="mt-6 grid gap-4">
                    {post.takeaways.map((takeaway) => (
                      <li
                        key={takeaway}
                        className="flex gap-3 text-base font-semibold leading-7 text-slate-700 dark:text-slate-300"
                      >
                        <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-indigo-600 dark:text-emerald-300" />
                        {takeaway}
                      </li>
                    ))}
                  </ul>
                </section>

                <div className="space-y-12">
                  {post.sections.map((section) => (
                    <section key={section.heading}>
                      <h2 className="text-3xl font-black leading-tight tracking-tight text-slate-950 dark:text-white sm:text-4xl">
                        {section.heading}
                      </h2>

                      <div className="mt-5 space-y-5">
                        {section.body.map((paragraph) => (
                          <p
                            key={paragraph}
                            className="text-lg leading-9 text-slate-600 dark:text-slate-300"
                          >
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </section>
                  ))}
                </div>

                <section className="mt-14 rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6 dark:border-white/10 dark:bg-white/[0.04]">
                  <h2 className="text-3xl font-black tracking-tight text-slate-950 dark:text-white">
                    Frequently asked questions
                  </h2>

                  <div className="mt-6 grid gap-4">
                    {post.faq.map((item) => (
                      <div
                        key={item.question}
                        className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-white/[0.04]"
                      >
                        <h3 className="text-xl font-black text-slate-950 dark:text-white">
                          {item.question}
                        </h3>

                        <p className="mt-3 text-base leading-7 text-slate-600 dark:text-slate-300">
                          {item.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              {/* SIDEBAR */}
              <aside className="lg:sticky lg:top-28">
                <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/70 dark:border-white/10 dark:bg-white/[0.04] dark:shadow-black/40">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white dark:bg-white dark:text-slate-950">
                    <UserRound className="h-6 w-6" />
                  </div>

                  <h2 className="text-lg font-black text-slate-950 dark:text-white">
                    About this guide
                  </h2>

                  <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                    This TeenVerseHub guide is written for teenagers, guardians,
                    creators, and startups who want simple information about
                    teen freelancing, digital skills, portfolios, and safer
                    online work.
                  </p>
                </div>

                <div className="mt-5 rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/70 dark:border-white/10 dark:bg-white/[0.04] dark:shadow-black/40">
                  <h2 className="text-lg font-black text-slate-950 dark:text-white">
                    Topics covered
                  </h2>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {post.keywords.slice(0, 8).map((keyword) => (
                      <span
                        key={keyword}
                        className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-bold text-slate-600 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-5 rounded-[1.5rem] border border-slate-200 bg-slate-950 p-6 text-white shadow-xl shadow-slate-300/60 dark:border-white/10 dark:bg-emerald-300 dark:text-slate-950 dark:shadow-black/40">
                  <h2 className="text-lg font-black">
                    Start with the basics
                  </h2>

                  <p className="mt-3 text-sm font-medium leading-6 text-slate-300 dark:text-slate-800">
                    New to teen freelancing? Learn how teenagers can start with
                    one digital skill, build proof, and avoid unsafe shortcuts.
                  </p>

                  <Link
                    href="/how-to-earn-money-as-a-teenager"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-black"
                  >
                    Open earning guide
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>

                <div className="mt-5 rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/70 dark:border-white/10 dark:bg-white/[0.04] dark:shadow-black/40">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-600 text-white dark:bg-emerald-300 dark:text-slate-950">
                    <GraduationCap className="h-5 w-5" />
                  </div>

                  <h2 className="text-lg font-black text-slate-950 dark:text-white">
                    TeenVerseHub learning path
                  </h2>

                  <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                    <li>Choose one skill.</li>
                    <li>Create 3 to 5 samples.</li>
                    <li>Build a clear portfolio.</li>
                    <li>Start with small projects.</li>
                    <li>Keep safety and guardian awareness in mind.</li>
                  </ul>
                </div>
              </aside>
            </div>
          </div>
        </article>

        {/* RELATED GUIDES */}
        {relatedPosts.length > 0 && (
          <section className="border-t border-slate-200 bg-white/75 px-4 py-20 dark:border-white/10 dark:bg-white/[0.03] sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <div className="max-w-3xl">
                <h2 className="text-3xl font-black tracking-tight text-slate-950 dark:text-white sm:text-4xl">
                  Related TeenVerseHub guides
                </h2>

                <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-300">
                  Continue learning about teen freelancing, safe online work,
                  student digital skills, portfolios, and responsible hiring.
                </p>
              </div>

              <div className="mt-8 grid gap-5 md:grid-cols-2">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.slug}
                    href={`/blog/${relatedPost.slug}`}
                    className="group rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/60 transition hover:-translate-y-1 dark:border-white/10 dark:bg-white/[0.04] dark:shadow-black/30"
                  >
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-indigo-700 dark:text-emerald-300">
                      {relatedPost.category}
                    </p>

                    <h3 className="mt-4 text-2xl font-black leading-tight tracking-tight text-slate-950 transition group-hover:text-indigo-700 dark:text-white dark:group-hover:text-emerald-300">
                      {relatedPost.title}
                    </h3>

                    <p className="mt-3 text-base leading-7 text-slate-600 dark:text-slate-300">
                      {relatedPost.summary}
                    </p>

                    <div className="mt-5 inline-flex items-center gap-2 text-sm font-black text-indigo-700 dark:text-emerald-300">
                      Read guide
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* FINAL CTA */}
        <section className="px-4 py-24 text-center sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl rounded-[2rem] bg-slate-950 px-8 py-14 text-white shadow-2xl shadow-slate-950/20 dark:bg-white dark:text-slate-950">
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 dark:bg-slate-950/10">
              <ShieldCheck className="h-7 w-7" />
            </div>

            <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
              Learn first. Earn responsibly.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/75 dark:text-slate-600">
              TeenVerseHub guides help teenagers understand digital skills,
              portfolios, safe online work, beginner freelance services, and
              responsible growth before jumping into random online jobs.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={SITE.appUrl}
                className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-black uppercase tracking-wide text-slate-950 transition hover:-translate-y-0.5 dark:bg-slate-950 dark:text-white"
              >
                Create TeenVerseHub profile
                <ArrowRight className="h-4 w-4" />
              </a>

              <Link
                href="/blog"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-white/20 px-7 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:-translate-y-0.5 dark:border-slate-950/15 dark:text-slate-950"
              >
                Explore more guides
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}
