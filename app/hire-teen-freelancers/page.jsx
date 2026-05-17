import {
  AlertTriangle,
  BadgeCheck,
  Briefcase,
  CheckCircle2,
  ShieldCheck,
  TrendingUp,
  Zap,
  ArrowRight,
  Users,
  Video,
  FileText,
  Layout,
  Target,
  MessageSquare,
  Lightbulb,
  Handshake,
  Clock,
  Search,
  Star,
} from 'lucide-react'

import { SITE, buildMetadata } from '../lib/site'
import StructuredData from '../components/StructuredData'
import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'

export const metadata = buildMetadata({
  title:
    'Hire Teen Freelancers | Student Digital Talent for Startups and Creators',
  description:
    'Hire teen freelancers and student digital talent through TeenVerseHub for video editing, thumbnails, content writing, design, social media support, research, creator work, and beginner-friendly digital projects.',
  path: '/hire-teen-freelancers',
  keywords: [
    'hire teen freelancers',
    'hire student freelancers',
    'student talent for startups',
    'teen digital services',
    'TeenVerseHub',
    'TeenVerse Hub',
    'teen freelancing platform India',
    'hire young creators',
    'hire teen video editors',
    'hire student content writers',
    'hire student designers',
    'teen portfolio platform',
    'digital skills for teenagers',
    'student earning platform',
    'startup support from students',
    'creator support freelancers',
    'teen freelance marketplace',
    'freelance jobs for teens',
    'safe online jobs for teens',
  ],
})

const pageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  headline:
    'Hire Teen Freelancers | Student Digital Talent for Startups and Creators',
  name: 'Hire Teen Freelancers | Student Digital Talent for Startups and Creators',
  description:
    'Hire teen freelancers and student digital talent through TeenVerseHub for video editing, content writing, design, social media support, research, creator work, and beginner-friendly digital projects.',
  author: {
    '@type': 'Organization',
    name: SITE.shortName,
  },
  publisher: {
    '@type': 'Organization',
    name: SITE.shortName,
  },
  mainEntityOfPage: `${SITE.baseUrl}/hire-teen-freelancers`,
}

const pageFeatures = [
  {
    icon: <BadgeCheck className="h-8 w-8" />,
    title: 'Portfolio-Based Talent',
    description:
      'TeenVerseHub focuses on helping teens show their skills through profiles, sample work, service descriptions, and portfolio proof instead of only claiming experience.',
    span: 'md:col-span-6',
    glow: 'bg-indigo-600/30',
    ring: 'ring-indigo-500/20',
  },
  {
    icon: <Briefcase className="h-8 w-8" />,
    title: 'Startup-Friendly Digital Services',
    description:
      'Startups and creators can look for support in video editing, thumbnails, content writing, design, research, social media tasks, creator support, and simple website-related work.',
    span: 'md:col-span-6',
    glow: 'bg-blue-600/30',
    ring: 'ring-blue-500/20',
  },
  {
    icon: <ShieldCheck className="h-8 w-8" />,
    title: 'Responsible Teen Collaboration',
    description:
      'TeenVerseHub encourages clear communication, reviewable work, fair expectations, and age-aware project planning when clients collaborate with young freelancers.',
    span: 'md:col-span-5',
    glow: 'bg-emerald-600/30',
    ring: 'ring-emerald-500/20',
  },
  {
    icon: <TrendingUp className="h-8 w-8" />,
    title: 'Fresh Student Perspective',
    description:
      'Teen talent can bring platform-native creativity, short-form content instincts, gaming culture knowledge, social media awareness, and strong willingness to learn.',
    span: 'md:col-span-7',
    glow: 'bg-fuchsia-600/30',
    ring: 'ring-fuchsia-500/20',
  },
]

const serviceCategories = [
  {
    icon: <Video className="h-7 w-7" />,
    title: 'Video Editing and Creator Clips',
    description:
      'Hire teens for short-form edits, creator clips, gaming highlights, reels, YouTube Shorts, and basic editing support.',
  },
  {
    icon: <FileText className="h-7 w-7" />,
    title: 'Content Writing and Research',
    description:
      'Get help with captions, blog drafts, simple SEO content, topic research, scripts, summaries, and content repurposing.',
  },
  {
    icon: <Layout className="h-7 w-7" />,
    title: 'Design and Website Support',
    description:
      'Work with students on basic design tasks, landing page ideas, simple UI concepts, thumbnails, graphics, and portfolio-style website help.',
  },
  {
    icon: <MessageSquare className="h-7 w-7" />,
    title: 'Social Media and Community Help',
    description:
      'Find support for content planning, post ideas, community tasks, creator operations, simple moderation assistance, and online research.',
  },
]

const clientBenefits = [
  'Access young digital talent that understands modern internet culture',
  'Find students interested in creative, tech, content, and creator work',
  'Review profile details, service descriptions, and portfolio samples',
  'Start with small tasks before moving to larger projects',
  'Support teenagers in building real-world experience',
  'Get beginner-friendly help for startup and creator workflows',
]

const hiringTips = [
  'Choose a clear service category before reaching out',
  'Explain the project goal in simple language',
  'Share deadline, deliverables, budget, and revision expectations',
  'Start with a small project if the freelancer is new',
  'Give feedback respectfully and professionally',
  'Avoid unclear tasks, adult work, illegal requests, or exploitative work',
]

const goodProjectExamples = [
  'Edit 5 short-form videos from raw clips',
  'Create 3 YouTube thumbnail concepts',
  'Write 10 social media captions for a startup page',
  'Research 20 creator partnership leads',
  'Draft a simple SEO blog outline',
  'Design basic graphics for a student-led campaign',
  'Organize content ideas for a YouTube or Instagram page',
  'Help improve a simple portfolio or landing page layout',
]

const roadmapSteps = [
  {
    title: 'Before Hiring',
    theme: 'indigo',
    icon: <Zap className="h-6 w-6 text-indigo-400" />,
    points: [
      'Review the teen freelancer profile and portfolio samples',
      'Choose a clear service category',
      'Define deliverables, deadline, and revision scope',
      'Start with a small beginner-friendly project',
    ],
  },
  {
    title: 'During Work',
    theme: 'fuchsia',
    icon: <TrendingUp className="h-6 w-6 text-fuchsia-400" />,
    points: [
      'Keep communication clear and professional',
      'Give specific feedback instead of vague criticism',
      'Avoid changing the scope without discussing it',
      'Leave useful feedback that helps the teen improve',
    ],
  },
]

const trustPoints = [
  {
    icon: <Target className="h-7 w-7" />,
    title: 'Clear Scope',
    description:
      'A clear project scope helps both the client and teen freelancer understand exactly what needs to be delivered.',
  },
  {
    icon: <Clock className="h-7 w-7" />,
    title: 'Realistic Deadlines',
    description:
      'Teen freelancers may balance school, learning, and projects, so realistic timelines create better results.',
  },
  {
    icon: <Handshake className="h-7 w-7" />,
    title: 'Respectful Collaboration',
    description:
      'TeenVerseHub encourages respectful, professional collaboration between clients and young digital talent.',
  },
  {
    icon: <Star className="h-7 w-7" />,
    title: 'Portfolio Growth',
    description:
      'Completed work can help teens build stronger portfolios, confidence, and early professional experience.',
  },
]

const seoFaqs = [
  {
    question: 'Can startups hire teen freelancers on TeenVerseHub?',
    answer:
      'Yes. TeenVerseHub is built to help startups, creators, and small teams discover teen digital talent for beginner-friendly tasks such as editing, content, design, research, and creator support.',
  },
  {
    question: 'What type of teen freelancers can clients find?',
    answer:
      'Clients can look for teens interested in video editing, thumbnails, writing, social media support, design, simple web work, creator operations, and digital research tasks.',
  },
  {
    question: 'Does TeenVerseHub guarantee freelancer quality?',
    answer:
      'No. TeenVerseHub does not guarantee the quality of work, project success, earnings, or client results. Clients should review profiles, samples, scope, and communication before starting work.',
  },
  {
    question: 'What is the safest way to hire a teen freelancer?',
    answer:
      'The safest approach is to start with a small project, keep the scope clear, use professional communication, avoid vague requests, and ensure the work is appropriate for a teenager.',
  },
  {
    question: 'Why should clients hire student freelancers?',
    answer:
      'Student freelancers can bring fresh ideas, strong interest in digital tools, social media awareness, creator culture knowledge, and willingness to learn through real projects.',
  },
  {
    question: 'What should clients avoid when working with teen freelancers?',
    answer:
      'Clients should avoid unclear work, unrealistic deadlines, unpaid trial work, adult or illegal tasks, exploitative requests, and communication that would not be appropriate for a guardian to review.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: seoFaqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
}

export default function HireTeenFreelancersPage() {
  return (
    <>
      <StructuredData data={pageSchema} />
      <StructuredData data={faqSchema} />
      <SiteHeader />

      <main className="min-h-screen bg-[#f7f9ff] text-slate-950 selection:bg-indigo-200 selection:text-slate-950 transition-colors duration-500 dark:bg-[#030712] dark:text-white dark:selection:bg-indigo-500/30 dark:selection:text-indigo-200">
        {/* HERO */}
        <section className="relative isolate flex min-h-[90vh] flex-col items-center justify-center overflow-hidden px-6 pb-20 pt-32">
          <div className="tv-grid-mesh pointer-events-none absolute inset-0 opacity-80" />
          <div className="tv-orbit pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-[100%] bg-indigo-600/20 opacity-70 blur-[120px]" />
          <div className="tv-orbit pointer-events-none absolute right-[-10%] top-[-10%] h-[500px] w-[500px] rounded-[100%] bg-fuchsia-600/20 opacity-60 blur-[100px] [animation-delay:-7s]" />

          <div className="tv-reveal relative z-10 mx-auto max-w-5xl text-center">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white/80 px-5 py-2 text-sm font-bold uppercase tracking-widest text-indigo-700 shadow-xl shadow-indigo-100/70 backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:text-indigo-300 dark:shadow-2xl">
              <BadgeCheck className="h-4 w-4" />
              For Startups, Creators, and Small Teams
            </div>

            <h1 className="text-4xl font-black leading-[1.08] tracking-tighter text-slate-950 dark:text-white sm:text-7xl md:text-8xl">
              Hire Teen <br className="hidden md:block" />
              <span className="bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-emerald-400 bg-clip-text text-transparent">
                Digital Talent
              </span>
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-slate-600 dark:text-slate-400 md:text-xl">
              TeenVerseHub helps startups, creators, and small teams discover
              young digital talent for beginner-friendly projects. Hire teen
              freelancers for creative, content, social media, design, research,
              and simple tech-related work while keeping expectations clear and
              collaboration responsible.
            </p>

            <div className="mt-12 flex w-full flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
              <a
                href="/freelance-jobs-for-teens"
                className="group relative inline-flex w-full max-w-sm items-center justify-center gap-3 overflow-hidden rounded-full bg-slate-950 px-8 py-4 text-base font-black text-white shadow-xl shadow-slate-300/50 transition-transform hover:scale-105 active:scale-95 dark:bg-white dark:text-slate-950 dark:shadow-none sm:w-auto"
              >
                View Service Categories
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="/safety"
                className="inline-flex w-full max-w-sm items-center justify-center gap-3 rounded-full border border-indigo-200 bg-white/70 px-8 py-4 text-base font-bold text-slate-900 shadow-sm backdrop-blur-lg transition-colors hover:bg-white dark:border-white/20 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 dark:hover:text-white sm:w-auto"
              >
                <ShieldCheck className="h-5 w-5" />
                Review Safety
              </a>
            </div>
          </div>

          <div className="tv-reveal relative z-10 mt-20 grid w-full max-w-4xl grid-cols-1 gap-px overflow-hidden rounded-3xl border border-indigo-100 bg-indigo-100/70 shadow-[0_24px_80px_rgba(79,70,229,0.12)] backdrop-blur-2xl dark:border-white/10 dark:bg-white/10 dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)] sm:mt-24 sm:grid-cols-3">
            {[
              { label: 'Talent Signal', value: 'Portfolio First' },
              { label: 'Workflow', value: 'Clear Scope' },
              { label: 'Best For', value: 'Startups + Creators' },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="bg-white/85 p-8 text-center backdrop-blur-xl dark:bg-[#0f172a]/80"
              >
                <div className="text-sm font-bold uppercase tracking-widest text-slate-500">
                  {stat.label}
                </div>
                <div className="mt-2 text-2xl font-black text-slate-950 dark:text-white">
                  {stat.value}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FEATURE CARDS */}
        <section className="relative overflow-hidden px-6 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="tv-reveal max-w-3xl">
              <h2 className="text-4xl font-black tracking-tight text-slate-950 dark:text-white sm:text-5xl">
                A cleaner way to work with young digital talent.
              </h2>

              <p className="mt-6 text-xl leading-relaxed text-slate-600 dark:text-slate-400">
                Instead of searching through random social media DMs or unclear
                offers, TeenVerseHub gives clients a more focused way to explore
                teen freelancers, understand what they can do, and start with
                simple, clearly defined projects.
              </p>
            </div>

            <div className="tv-mobile-depth mt-16 grid grid-cols-1 gap-6 md:mt-20 md:grid-cols-12 md:auto-rows-fr md:gap-8">
              {pageFeatures.map((feature, i) => (
                <div
                  key={i}
                  className={`tv-card-motion tv-reveal group relative z-0 flex min-h-[280px] flex-col overflow-hidden rounded-[2rem] border border-white/70 bg-white/70 p-7 shadow-[0_20px_60px_rgba(79,70,229,0.10)] backdrop-blur-3xl transition-[transform,box-shadow,background-color] duration-500 hover:z-10 hover:bg-white dark:border-white/10 dark:bg-white/[0.03] dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)] dark:hover:bg-white/[0.06] dark:hover:shadow-[0_16px_64px_rgba(0,0,0,0.5)] sm:rounded-[2.5rem] sm:p-10 ${feature.span}`}
                >
                  <div
                    className={`pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full blur-[80px] transition-all duration-700 group-hover:scale-150 group-hover:opacity-80 ${feature.glow}`}
                  />
                  <div
                    className={`relative z-10 mb-8 inline-flex h-16 w-16 items-center justify-center rounded-3xl border border-white/80 bg-slate-950 text-white shadow-2xl backdrop-blur-xl ring-1 dark:border-white/20 dark:bg-white/10 sm:h-20 sm:w-20 ${feature.ring}`}
                  >
                    {feature.icon}
                  </div>

                  <h3 className="relative z-10 text-2xl font-black tracking-tight text-slate-950 dark:text-white sm:text-3xl">
                    {feature.title}
                  </h3>

                  <p className="relative z-10 mt-6 flex-1 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICE CATEGORIES */}
        <section className="border-y border-indigo-100 bg-white/70 px-6 py-24 dark:border-white/5 dark:bg-[#070b14] sm:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-4xl text-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-5 py-2 text-sm font-black uppercase tracking-widest text-indigo-700 dark:border-white/10 dark:bg-white/5 dark:text-indigo-300">
                <Search className="h-4 w-4" />
                Hire by Skill Category
              </div>

              <h2 className="text-4xl font-black tracking-tight text-slate-950 dark:text-white sm:text-6xl">
                Digital services teen freelancers can support.
              </h2>

              <p className="mx-auto mt-8 max-w-3xl text-xl leading-relaxed text-slate-600 dark:text-slate-400">
                TeenVerseHub is useful for clients who need small, clear,
                digital tasks completed by motivated students. These categories
                are easier to explain, review, and improve through portfolio
                work.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {serviceCategories.map((category, index) => (
                <div
                  key={index}
                  className="rounded-[2rem] border border-indigo-100 bg-white p-8 shadow-xl shadow-indigo-100/50 transition-all hover:-translate-y-1 hover:shadow-2xl dark:border-white/10 dark:bg-white/[0.04] dark:shadow-none"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-white dark:bg-white/10">
                    {category.icon}
                  </div>

                  <h3 className="text-2xl font-black text-slate-950 dark:text-white">
                    {category.title}
                  </h3>

                  <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-300">
                    {category.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BENEFITS + HOW TO HIRE */}
        <section className="relative overflow-hidden px-6 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-24">
              <div className="tv-reveal lg:sticky lg:top-32 lg:col-span-5 lg:h-max">
                <h2 className="text-4xl font-black leading-tight tracking-tight text-slate-950 dark:text-white sm:text-5xl">
                  Young talent needs structure. Clients need clarity.
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
                  TeenVerseHub aims to reduce uncertainty for both sides by
                  making skills visible, expectations clearer, and project
                  communication easier to understand before work begins.
                </p>

                <p className="mt-5 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
                  For startups and creators, this means hiring teen freelancers
                  for smaller digital tasks without turning every project into a
                  complex hiring process. For students, it means building real
                  experience one project at a time.
                </p>
              </div>

              <div className="flex flex-col gap-8 lg:col-span-7">
                <div className="tv-card-motion tv-reveal relative rounded-[2rem] border border-indigo-100 bg-gradient-to-br from-indigo-50 to-white p-7 shadow-2xl shadow-indigo-100/70 backdrop-blur-xl dark:border-indigo-500/20 dark:bg-gradient-to-br dark:from-indigo-950/40 dark:to-slate-900/40 dark:shadow-2xl sm:rounded-[2.5rem] sm:p-10">
                  <div className="mb-6 flex items-center gap-4 border-b border-slate-200 pb-6 dark:border-white/10">
                    <Users className="h-8 w-8 text-indigo-400" />
                    <h3 className="text-2xl font-black text-slate-950 dark:text-white">
                      Why Clients Use TeenVerseHub
                    </h3>
                  </div>

                  <ul className="space-y-4">
                    {clientBenefits.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-4">
                        <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-indigo-400" />
                        <span className="text-lg text-slate-700 dark:text-slate-300">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="tv-card-motion tv-reveal relative rounded-[2rem] border border-emerald-100 bg-gradient-to-br from-emerald-50 to-white p-7 shadow-2xl shadow-emerald-100/70 backdrop-blur-xl dark:border-emerald-500/20 dark:bg-gradient-to-br dark:from-emerald-950/40 dark:to-slate-900/40 dark:shadow-2xl sm:rounded-[2.5rem] sm:p-10">
                  <div className="mb-6 flex items-center gap-4 border-b border-slate-200 pb-6 dark:border-white/10">
                    <Lightbulb className="h-8 w-8 text-emerald-400" />
                    <h3 className="text-2xl font-black text-slate-950 dark:text-white">
                      How to Hire Responsibly
                    </h3>
                  </div>

                  <p className="mb-6 text-lg text-slate-700 dark:text-slate-300">
                    Hiring teen freelancers works best when the project is
                    clear, age-appropriate, and easy to review.
                  </p>

                  <ul className="space-y-4">
                    {hiringTips.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-4">
                        <Zap className="mt-1 h-5 w-5 shrink-0 text-emerald-400" />
                        <span className="text-lg text-slate-700 dark:text-slate-300">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECT EXAMPLES */}
        <section className="border-y border-indigo-100 bg-white/70 px-6 py-24 dark:border-white/5 dark:bg-[#070b14] sm:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="text-4xl font-black tracking-tight text-slate-950 dark:text-white sm:text-6xl">
                Project examples that fit teen freelancers.
              </h2>

              <p className="mx-auto mt-8 max-w-3xl text-xl leading-relaxed text-slate-600 dark:text-slate-400">
                The best teen freelance projects are specific, limited in scope,
                and easy to review. These examples are useful for startups,
                creators, student communities, and small teams looking for
                beginner-friendly digital support.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {goodProjectExamples.map((example, index) => (
                <div
                  key={index}
                  className="rounded-[2rem] border border-indigo-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-100/60 dark:border-white/10 dark:bg-white/[0.04] dark:shadow-none"
                >
                  <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-300">
                    <span className="text-sm font-black">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <p className="text-lg font-bold leading-relaxed text-slate-700 dark:text-slate-300">
                    {example}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TRUST POINTS */}
        <section className="relative overflow-hidden px-6 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="text-4xl font-black tracking-tight text-slate-950 dark:text-white sm:text-6xl">
                Better hiring starts with better expectations.
              </h2>

              <p className="mx-auto mt-8 max-w-3xl text-xl leading-relaxed text-slate-600 dark:text-slate-400">
                TeenVerseHub is not about giving teenagers random work. The goal
                is to help clients and teens work around clear services,
                portfolio proof, beginner-friendly tasks, and respectful
                communication.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {trustPoints.map((point, index) => (
                <div
                  key={index}
                  className="rounded-[2rem] border border-indigo-100 bg-white p-8 shadow-xl shadow-indigo-100/50 dark:border-white/10 dark:bg-white/[0.04] dark:shadow-none"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-white dark:bg-white/10">
                    {point.icon}
                  </div>

                  <h3 className="text-2xl font-black text-slate-950 dark:text-white">
                    {point.title}
                  </h3>

                  <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-300">
                    {point.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ROADMAP */}
        <section className="relative isolate mx-auto my-24 max-w-[1300px] overflow-hidden rounded-[3rem] border border-white/10 bg-[#090e1a] px-6 py-24 shadow-[0_40px_100px_rgba(0,0,0,0.6)] sm:my-32 sm:px-16 sm:py-32">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-[20%] top-[10%] h-[600px] w-[600px] rounded-full bg-indigo-600/10 blur-[150px]" />
            <div className="absolute -right-[20%] bottom-[10%] h-[600px] w-[600px] rounded-full bg-fuchsia-600/10 blur-[150px]" />
          </div>

          <div className="tv-reveal relative z-10 mx-auto max-w-3xl text-center">
            <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
              Hire teen talent with clearer guardrails.
            </h2>

            <p className="mt-6 text-xl leading-relaxed text-slate-400">
              The hiring flow should make scope, responsibility, and expectations
              clear from the start.
            </p>
          </div>

          <div className="relative z-10 mt-16 grid grid-cols-1 gap-6 lg:mt-20 lg:grid-cols-2 lg:gap-12">
            {roadmapSteps.map((step, i) => (
              <div
                key={i}
                className={`tv-card-motion tv-reveal relative overflow-hidden rounded-[2rem] border p-7 backdrop-blur-2xl transition-all hover:z-10 hover:shadow-2xl sm:rounded-[2.5rem] sm:p-12 ${
                  step.theme === 'indigo'
                    ? 'border-indigo-500/20 bg-indigo-950/20'
                    : 'border-fuchsia-500/20 bg-fuchsia-950/20'
                }`}
              >
                <div className="flex items-center gap-5 border-b border-white/10 pb-6">
                  <div
                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${
                      step.theme === 'indigo'
                        ? 'bg-indigo-500/20'
                        : 'bg-fuchsia-500/20'
                    }`}
                  >
                    {step.icon}
                  </div>

                  <h3 className="text-3xl font-black text-white">
                    {step.title}
                  </h3>
                </div>

                <ul className="mt-8 flex flex-col gap-6">
                  {step.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <div
                        className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${
                          step.theme === 'indigo'
                            ? 'bg-indigo-400'
                            : 'bg-fuchsia-400'
                        }`}
                      />
                      <span className="text-lg leading-relaxed text-slate-300">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="tv-reveal relative z-10 mt-12 rounded-[2rem] border border-rose-500/20 bg-rose-950/20 p-10 backdrop-blur-md">
            <div className="flex flex-col items-start gap-8 sm:flex-row sm:items-center">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-rose-500/20 text-rose-400">
                <AlertTriangle className="h-8 w-8" />
              </div>

              <div>
                <h4 className="text-2xl font-black text-white">
                  Responsible Hiring
                </h4>
                <p className="mt-2 text-lg text-slate-400">
                  TeenVerseHub is built for real opportunities, not exploitative
                  work. Clients should respect age-aware expectations, clear
                  communication, fair project scope, and beginner-friendly
                  collaboration.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SEO TEXT SECTION */}
        <section className="relative overflow-hidden px-6 py-24 sm:py-32">
          <div className="mx-auto max-w-5xl">
            <div className="rounded-[3rem] border border-indigo-100 bg-white p-8 shadow-2xl shadow-indigo-100/50 dark:border-white/10 dark:bg-white/[0.04] dark:shadow-none sm:p-12">
              <h2 className="text-4xl font-black tracking-tight text-slate-950 dark:text-white sm:text-5xl">
                Why hiring teen freelancers can work well for digital teams
              </h2>

              <div className="mt-8 space-y-6 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                <p>
                  Many startups, creators, student communities, gaming pages,
                  and small businesses need digital help but do not always need
                  a full-time employee or a large agency. They may need a few
                  short videos edited, thumbnails designed, captions written,
                  content ideas organized, or research completed. These are the
                  kinds of beginner-friendly projects where teen freelancers can
                  learn while also creating useful value.
                </p>

                <p>
                  TeenVerseHub focuses on making this process more structured.
                  Instead of hiring young talent through random messages or
                  unclear informal arrangements, clients can think in terms of
                  services, portfolios, deliverables, and communication. This
                  makes the work easier to review and helps teenagers build
                  confidence with real project experience.
                </p>

                <p>
                  Hiring teen freelancers should always be done responsibly. The
                  work should be age-appropriate, clearly explained, and fair.
                  Clients should avoid vague tasks, unrealistic deadlines,
                  unpaid trial work, adult content, illegal services, or
                  anything that would be uncomfortable for a parent or guardian
                  to review. When projects are small, clear, and skill-focused,
                  young freelancers have a better chance to deliver good work
                  and improve over time.
                </p>

                <p>
                  For clients, TeenVerseHub can become a practical place to
                  discover young creators, student designers, beginner video
                  editors, content helpers, and digital learners. For teens, it
                  can become a place to move from sample work to real work while
                  building a stronger portfolio for future freelance, startup,
                  or career opportunities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="border-y border-indigo-100 bg-white/70 px-6 py-24 dark:border-white/5 dark:bg-[#070b14] sm:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="text-4xl font-black tracking-tight text-slate-950 dark:text-white sm:text-6xl">
                Questions about hiring teen freelancers
              </h2>

              <p className="mx-auto mt-8 max-w-3xl text-xl leading-relaxed text-slate-600 dark:text-slate-400">
                These answers help clients understand how to approach teen
                freelance work on TeenVerseHub responsibly.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-2">
              {seoFaqs.map((faq, index) => (
                <article
                  key={index}
                  className="rounded-[2rem] border border-indigo-100 bg-white p-8 shadow-xl shadow-indigo-100/50 dark:border-white/10 dark:bg-white/[0.04] dark:shadow-none"
                >
                  <h3 className="text-2xl font-black text-slate-950 dark:text-white">
                    {faq.question}
                  </h3>

                  <p className="mt-4 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                    {faq.answer}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="relative overflow-hidden bg-gradient-to-t from-[#0f172a] to-[#030712] px-6 py-24 text-center sm:py-32">
          <div className="tv-reveal relative z-10 mx-auto max-w-4xl">
            <h2 className="text-4xl font-black tracking-tight text-white sm:text-6xl">
              Find capable teen talent with clearer expectations.
            </h2>

            <p className="mx-auto mt-8 max-w-2xl text-xl leading-relaxed text-slate-400">
              TeenVerseHub helps startups and creators explore emerging digital
              skills while supporting more structured, respectful, and
              beginner-friendly work for teenagers.
            </p>

            <div className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row">
              <a
                href={SITE.appUrl}
                className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-indigo-500 px-10 py-5 text-lg font-black text-white transition-all hover:bg-indigo-400 hover:shadow-[0_0_40px_rgba(99,102,241,0.4)] active:scale-95 sm:w-auto"
              >
                Start Hiring
              </a>

              <a
                href="/safety"
                className="inline-flex w-full items-center justify-center gap-3 rounded-full border border-white/20 bg-white/5 px-10 py-5 text-lg font-bold text-white backdrop-blur-lg transition-colors hover:bg-white/10 sm:w-auto"
              >
                Review Safety
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}