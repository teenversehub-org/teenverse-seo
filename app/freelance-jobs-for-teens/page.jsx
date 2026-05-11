import {
  AlertTriangle,
  BadgeCheck,
  Briefcase,
  CheckCircle2,
  Layout,
  ShieldCheck,
  TrendingUp,
  Zap,
  ArrowRight,
  MonitorPlay,
  FileText,
  Video,
  PenTool,
  Palette,
  Search,
  Users,
  Target,
  Star,
  Clock,
  MessageSquare,
  Lightbulb,
} from 'lucide-react'

import { SITE, buildMetadata } from '../lib/site'
import StructuredData from '../components/StructuredData'
import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'

export const metadata = buildMetadata({
  title:
    'Freelance Jobs for Teens | Digital Skills, Creative Work, Content, and Student Services',
  description:
    'Explore freelance jobs for teens on TeenVerseHub including video editing, thumbnails, content writing, social media support, design, research, basic web work, and beginner-friendly digital services.',
  path: '/freelance-jobs-for-teens',
  keywords: [
    'freelance jobs for teens',
    'teen freelance services',
    'online jobs for teens',
    'safe online jobs for teens',
    'teen video editing jobs',
    'video editing jobs for teens',
    'teen content writing jobs',
    'teen design jobs',
    'student freelancing platform',
    'digital skills for teenagers',
    'TeenVerseHub',
    'TeenVerse Hub',
    'teen freelancing platform India',
    'student earning platform',
    'teen portfolio platform',
    'freelancing for students',
    'beginner freelance jobs for teens',
    'teen creator support jobs',
  ],
})

const pageSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'Freelance Jobs for Teens | Digital Skills, Creative Work, Content, and Student Services',
  name: 'Freelance Jobs for Teens | Digital Skills, Creative Work, Content, and Student Services',
  description:
    'Explore freelance jobs for teens on TeenVerseHub including video editing, thumbnails, content writing, social media support, design, research, basic web work, and beginner-friendly digital services.',
  author: {
    '@type': 'Organization',
    name: SITE.shortName,
  },
  publisher: {
    '@type': 'Organization',
    name: SITE.shortName,
  },
  mainEntityOfPage: `${SITE.baseUrl}/freelance-jobs-for-teens`,
}

const pageFeatures = [
  {
    icon: <MonitorPlay className="h-8 w-8" />,
    title: 'Creative Services',
    description:
      'Teens can explore beginner-friendly creative services such as short-form video editing, thumbnails, simple graphics, posters, presentation layouts, and creator assets.',
    span: 'md:col-span-7',
    glow: 'bg-blue-600/30',
    ring: 'ring-blue-500/20',
  },
  {
    icon: <Layout className="h-8 w-8" />,
    title: 'Basic Tech and Web Services',
    description:
      'Students interested in tech can build portfolio projects around landing pages, frontend basics, simple website edits, basic UI ideas, and beginner-friendly digital support.',
    span: 'md:col-span-5',
    glow: 'bg-emerald-600/30',
    ring: 'ring-emerald-500/20',
  },
  {
    icon: <FileText className="h-8 w-8" />,
    title: 'Content Services',
    description:
      'Teen freelancers can offer captions, blog drafts, SEO-friendly writing, scripts, newsletters, social media content, research notes, and content repurposing.',
    span: 'md:col-span-5',
    glow: 'bg-fuchsia-600/30',
    ring: 'ring-fuchsia-500/20',
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: 'Creator and Gaming Support',
    description:
      'Teens who understand gaming, streaming, YouTube, reels, shorts, and creator culture can support clips, content ideas, channel assets, and simple creator operations.',
    span: 'md:col-span-7',
    glow: 'bg-amber-600/30',
    ring: 'ring-amber-500/20',
  },
]

const serviceCategories = [
  {
    icon: <Video className="h-7 w-7" />,
    title: 'Video Editing',
    description:
      'Short-form edits, reels, YouTube Shorts, gaming highlights, creator clips, subtitles, simple transitions, and basic content cleanup.',
  },
  {
    icon: <Palette className="h-7 w-7" />,
    title: 'Design and Visuals',
    description:
      'Thumbnails, posters, social media graphics, presentation layouts, simple branding ideas, and creator asset design.',
  },
  {
    icon: <PenTool className="h-7 w-7" />,
    title: 'Writing and Captions',
    description:
      'Captions, scripts, blog drafts, product descriptions, SEO-friendly outlines, newsletters, and content repurposing.',
  },
  {
    icon: <Search className="h-7 w-7" />,
    title: 'Research and Digital Tasks',
    description:
      'Topic research, list building, competitor notes, content organization, startup research, and small digital support tasks.',
  },
  {
    icon: <Layout className="h-7 w-7" />,
    title: 'Basic Web Support',
    description:
      'Landing page ideas, simple website sections, frontend practice projects, portfolio pages, and basic layout improvements.',
  },
  {
    icon: <Users className="h-7 w-7" />,
    title: 'Social Media Support',
    description:
      'Content ideas, posting support, creator research, caption planning, hashtag research, and simple community tasks.',
  },
]

const teenBenefits = [
  'Build real portfolio proof instead of only learning theory',
  'Start with small digital tasks that are easier to complete',
  'Learn communication, deadlines, feedback, and revisions',
  'Improve one skill at a time instead of chasing every trend',
  'Create samples that can help with future freelance or career opportunities',
  'Gain confidence by turning practice work into useful services',
]

const clientBenefits = [
  'Discover young talent with fresh digital instincts',
  'Find help for small creative, content, and startup tasks',
  'Review service descriptions and portfolio samples before working',
  'Start with beginner-friendly tasks instead of large complex projects',
  'Support teenagers while getting useful digital work completed',
  'Work with teens who understand social media and creator culture',
]

const roadmapSteps = [
  {
    title: 'Choose a Service',
    theme: 'indigo',
    icon: <Zap className="h-6 w-6 text-indigo-400" />,
    points: [
      'Pick one skill category first',
      'Create three to five sample projects',
      'Write a clear service description',
      'Set beginner-friendly project boundaries',
    ],
  },
  {
    title: 'Build Trust',
    theme: 'fuchsia',
    icon: <TrendingUp className="h-6 w-6 text-fuchsia-400" />,
    points: [
      'Use portfolio samples as proof',
      'Communicate clearly and professionally',
      'Deliver small projects consistently',
      'Update your portfolio after completed work',
    ],
  },
]

const portfolioServices = [
  'Short-form video edits and creator clips',
  'Thumbnails, graphics, and simple brand assets',
  'Landing page sections and portfolio website samples',
  'SEO writing, scripts, captions, and social content',
  'Research notes, list building, and startup support tasks',
  'Gaming highlights, stream assets, and creator content ideas',
]

const trustFlow = [
  'Clear service descriptions',
  'Visible portfolio examples',
  'Beginner-friendly deliverables',
  'Simple pricing expectations',
  'Professional communication',
  'Reviewable project scope',
]

const projectExamples = [
  'Edit 3 reels from raw clips',
  'Design 5 YouTube thumbnail ideas',
  'Write 10 Instagram captions',
  'Create a blog outline for a startup topic',
  'Build a simple personal portfolio page',
  'Research 20 creator collaboration leads',
  'Create a presentation layout for a school or startup project',
  'Organize content ideas for a YouTube channel',
]

const safetyTips = [
  'Avoid jobs promising fast money with no real work',
  'Do not accept vague tasks without clear deliverables',
  'Avoid adult, illegal, or uncomfortable work requests',
  'Do not share sensitive personal information unnecessarily',
  'Keep work expectations clear before starting',
  'Ask a guardian or trusted adult when something feels unsafe',
]

const seoFaqs = [
  {
    question: 'What are good freelance jobs for teens?',
    answer:
      'Good freelance jobs for teens include video editing, thumbnails, content writing, captions, social media support, basic design, research tasks, simple website work, and creator support. These jobs are easier to show through portfolio samples and beginner-friendly deliverables.',
  },
  {
    question: 'Can beginners start freelancing on TeenVerseHub?',
    answer:
      'Yes. TeenVerseHub is designed for teenagers and students who may be starting as beginners. The best path is to choose one skill, create sample work, build a simple profile, and start with small projects.',
  },
  {
    question: 'Does TeenVerseHub guarantee freelance jobs or income?',
    answer:
      'No. TeenVerseHub does not guarantee jobs, clients, income, or project success. Results depend on skill quality, portfolio proof, communication, demand, and client decisions.',
  },
  {
    question: 'What should teens put in their portfolio?',
    answer:
      'Teens should add 3 to 5 strong samples related to one service. Examples include edited videos, thumbnails, captions, blog drafts, landing page mockups, graphics, or research samples.',
  },
  {
    question: 'How can teens stay safer while freelancing online?',
    answer:
      'Teens should avoid fast-money promises, vague work, adult or illegal tasks, unnecessary personal information sharing, and projects that are not clear enough for a guardian to review.',
  },
  {
    question: 'Why are digital skills useful for teenagers?',
    answer:
      'Digital skills help teenagers build confidence, portfolios, communication skills, and real-world experience. Skills like editing, writing, design, research, and basic web work can grow into future freelance or career opportunities.',
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

export default function FreelanceJobsForTeensPage() {
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
              Teen Service Marketplace
            </div>

            <h1 className="text-4xl font-black leading-[1.08] tracking-tighter text-slate-950 dark:text-white sm:text-7xl md:text-8xl">
              Freelance Jobs <br className="hidden md:block" />
              <span className="bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-emerald-400 bg-clip-text text-transparent">
                Built for Teen Skills
              </span>
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-slate-600 dark:text-slate-400 md:text-xl">
              TeenVerseHub helps teenagers turn digital skills into structured
              freelance services. Teens can build portfolio samples, create
              service descriptions, explore beginner-friendly projects, and grow
              step by step through creative, content, social media, design,
              research, and basic tech work.
            </p>

            <div className="mt-12 flex w-full flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
              <a
                href="/how-to-start-freelancing-as-a-teen"
                className="group relative inline-flex w-full max-w-sm items-center justify-center gap-3 overflow-hidden rounded-full bg-slate-950 px-8 py-4 text-base font-black text-white shadow-xl shadow-slate-300/50 transition-transform hover:scale-105 active:scale-95 dark:bg-white dark:text-slate-950 dark:shadow-none sm:w-auto"
              >
                Start Freelancing Guide
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="/safe-online-jobs-for-teens"
                className="inline-flex w-full max-w-sm items-center justify-center gap-3 rounded-full border border-indigo-200 bg-white/70 px-8 py-4 text-base font-bold text-slate-900 shadow-sm backdrop-blur-lg transition-colors hover:bg-white dark:border-white/20 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 dark:hover:text-white sm:w-auto"
              >
                <ShieldCheck className="h-5 w-5" />
                Read Safety Guide
              </a>
            </div>
          </div>

          <div className="tv-reveal relative z-10 mt-20 grid w-full max-w-4xl grid-cols-1 gap-px overflow-hidden rounded-3xl border border-indigo-100 bg-indigo-100/70 shadow-[0_24px_80px_rgba(79,70,229,0.12)] backdrop-blur-2xl dark:border-white/10 dark:bg-white/10 dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)] sm:mt-24 sm:grid-cols-3">
            {[
              { label: 'Creative Work', value: 'Design + Editing' },
              { label: 'Content Work', value: 'Writing + Social' },
              { label: 'Proof', value: 'Portfolio First' },
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

        {/* MAIN FEATURES */}
        <section className="relative overflow-hidden px-6 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="tv-reveal max-w-3xl">
              <h2 className="text-4xl font-black tracking-tight text-slate-950 dark:text-white sm:text-5xl">
                Teen freelance categories with real digital use.
              </h2>

              <p className="mt-6 text-xl leading-relaxed text-slate-600 dark:text-slate-400">
                TeenVerseHub focuses on services teenagers can learn, practice,
                and prove through sample work. The goal is not random online
                jobs, but clear digital services that clients can understand and
                review.
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
                Freelance Job Categories
              </div>

              <h2 className="text-4xl font-black tracking-tight text-slate-950 dark:text-white sm:text-6xl">
                Beginner-friendly online jobs for teens.
              </h2>

              <p className="mx-auto mt-8 max-w-3xl text-xl leading-relaxed text-slate-600 dark:text-slate-400">
                The best freelance jobs for teens are specific, useful, and easy
                to show with portfolio samples. These categories help students
                start with real digital skills instead of vague side hustles.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
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

        {/* BENEFITS */}
        <section className="relative overflow-hidden px-6 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-24">
              <div className="tv-reveal lg:sticky lg:top-32 lg:col-span-5 lg:h-max">
                <h2 className="text-4xl font-black leading-tight tracking-tight text-slate-950 dark:text-white sm:text-5xl">
                  The best teen freelance job starts with proof, not hype.
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
                  TeenVerseHub encourages teenagers to create samples, improve
                  portfolios, explain services clearly, and communicate
                  professionally before taking on bigger projects. This creates a
                  healthier path for beginners and better expectations for
                  clients.
                </p>
              </div>

              <div className="flex flex-col gap-8 lg:col-span-7">
                <div className="tv-card-motion tv-reveal relative rounded-[2rem] border border-indigo-100 bg-gradient-to-br from-indigo-50 to-white p-7 shadow-2xl shadow-indigo-100/70 backdrop-blur-xl dark:border-indigo-500/20 dark:bg-gradient-to-br dark:from-indigo-950/40 dark:to-slate-900/40 dark:shadow-2xl sm:rounded-[2.5rem] sm:p-10">
                  <div className="mb-6 flex items-center gap-4 border-b border-slate-200 pb-6 dark:border-white/10">
                    <Briefcase className="h-8 w-8 text-indigo-400" />
                    <h3 className="text-2xl font-black text-slate-950 dark:text-white">
                      Why Teens Start Freelancing
                    </h3>
                  </div>

                  <ul className="space-y-4">
                    {teenBenefits.map((item, idx) => (
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
                    <TrendingUp className="h-8 w-8 text-emerald-400" />
                    <h3 className="text-2xl font-black text-slate-950 dark:text-white">
                      Why Clients Hire Teen Talent
                    </h3>
                  </div>

                  <p className="mb-6 text-lg text-slate-700 dark:text-slate-300">
                    Clients can use TeenVerseHub to discover young digital
                    talent for small, clear, beginner-friendly digital tasks.
                  </p>

                  <ul className="space-y-4">
                    {clientBenefits.map((item, idx) => (
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
                Project examples teens can start with.
              </h2>

              <p className="mx-auto mt-8 max-w-3xl text-xl leading-relaxed text-slate-600 dark:text-slate-400">
                Teen freelancing works best when the task is simple, specific,
                and easy to review. These examples are useful for portfolio
                building and beginner client work.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {projectExamples.map((example, index) => (
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

        {/* PORTFOLIO + TRUST */}
        <section className="relative overflow-hidden px-6 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-24">
              <div className="tv-reveal lg:sticky lg:top-32 lg:col-span-5 lg:h-max">
                <h2 className="text-4xl font-black leading-tight tracking-tight text-slate-950 dark:text-white sm:text-5xl">
                  Portfolio-first freelancing helps teens grow safely.
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
                  A teen freelancer should not depend on big promises. They need
                  examples of their work, a clear service, and simple projects
                  that prove what they can do.
                </p>
              </div>

              <div className="flex flex-col gap-8 lg:col-span-7">
                <div className="rounded-[2rem] border border-indigo-100 bg-white p-8 shadow-xl shadow-indigo-100/50 dark:border-white/10 dark:bg-white/[0.04] dark:shadow-none sm:p-10">
                  <div className="mb-6 flex items-center gap-4 border-b border-slate-200 pb-6 dark:border-white/10">
                    <Target className="h-8 w-8 text-indigo-500" />
                    <h3 className="text-2xl font-black text-slate-950 dark:text-white">
                      Portfolio-Ready Services
                    </h3>
                  </div>

                  <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    {portfolioServices.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Star className="mt-1 h-5 w-5 shrink-0 text-indigo-500" />
                        <span className="text-base leading-relaxed text-slate-700 dark:text-slate-300">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-[2rem] border border-emerald-100 bg-white p-8 shadow-xl shadow-emerald-100/50 dark:border-white/10 dark:bg-white/[0.04] dark:shadow-none sm:p-10">
                  <div className="mb-6 flex items-center gap-4 border-b border-slate-200 pb-6 dark:border-white/10">
                    <MessageSquare className="h-8 w-8 text-emerald-500" />
                    <h3 className="text-2xl font-black text-slate-950 dark:text-white">
                      What Builds Client Confidence
                    </h3>
                  </div>

                  <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    {trustFlow.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-emerald-500" />
                        <span className="text-base leading-relaxed text-slate-700 dark:text-slate-300">
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

        {/* ROADMAP */}
        <section className="relative isolate mx-auto my-24 max-w-[1300px] overflow-hidden rounded-[3rem] border border-white/10 bg-[#090e1a] px-6 py-24 shadow-[0_40px_100px_rgba(0,0,0,0.6)] sm:my-32 sm:px-16 sm:py-32">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-[20%] top-[10%] h-[600px] w-[600px] rounded-full bg-indigo-600/10 blur-[150px]" />
            <div className="absolute -right-[20%] bottom-[10%] h-[600px] w-[600px] rounded-full bg-fuchsia-600/10 blur-[150px]" />
          </div>

          <div className="tv-reveal relative z-10 mx-auto max-w-3xl text-center">
            <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
              How teens can move from skill to service.
            </h2>

            <p className="mt-6 text-xl leading-relaxed text-slate-400">
              Freelancing works better when the service is focused, measurable,
              and supported by proof of work.
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
                  Safety Reminder
                </h4>
                <p className="mt-2 text-lg text-slate-400">
                  Teen freelancers should avoid fast-money promises, vague work,
                  adult or illegal tasks, unsafe communication, and projects
                  that are not clear enough for a guardian to review.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SAFETY TIPS */}
        <section className="relative overflow-hidden px-6 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="text-4xl font-black tracking-tight text-slate-950 dark:text-white sm:text-6xl">
                Safer online work habits for teen freelancers.
              </h2>

              <p className="mx-auto mt-8 max-w-3xl text-xl leading-relaxed text-slate-600 dark:text-slate-400">
                TeenVerseHub encourages teenagers to treat freelancing as a
                serious digital skill path. Safety, clarity, and professionalism
                matter as much as earning.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {safetyTips.map((tip, index) => (
                <div
                  key={index}
                  className="rounded-[2rem] border border-rose-100 bg-white p-8 shadow-xl shadow-rose-100/50 dark:border-rose-500/20 dark:bg-white/[0.04] dark:shadow-none"
                >
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-100 text-rose-600 dark:bg-rose-500/20 dark:text-rose-300">
                    <AlertTriangle className="h-6 w-6" />
                  </div>

                  <p className="text-lg font-bold leading-relaxed text-slate-700 dark:text-slate-300">
                    {tip}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEO TEXT SECTION */}
        <section className="border-y border-indigo-100 bg-white/70 px-6 py-24 dark:border-white/5 dark:bg-[#070b14] sm:py-32">
          <div className="mx-auto max-w-5xl">
            <div className="rounded-[3rem] border border-indigo-100 bg-white p-8 shadow-2xl shadow-indigo-100/50 dark:border-white/10 dark:bg-white/[0.04] dark:shadow-none sm:p-12">
              <h2 className="text-4xl font-black tracking-tight text-slate-950 dark:text-white sm:text-5xl">
                Why freelance jobs for teens should be skill-first
              </h2>

              <div className="mt-8 space-y-6 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                <p>
                  Many teenagers want to earn money online, but random online
                  jobs can be confusing, unsafe, or unrealistic. A better path
                  is to start with one useful digital skill and turn it into a
                  clear service. TeenVerseHub focuses on this skill-first
                  approach so teenagers can build proof before chasing clients.
                </p>

                <p>
                  For example, a teen who enjoys editing videos can start by
                  creating three sample reels. A student who likes writing can
                  create sample captions, blog drafts, or scripts. A beginner
                  designer can create thumbnail examples or social media
                  graphics. These portfolio samples make the service easier to
                  explain and easier for clients to review.
                </p>

                <p>
                  Freelance jobs for teens should also be beginner-friendly.
                  Small projects such as editing clips, writing captions,
                  designing thumbnails, researching topics, or organizing content
                  ideas are easier to manage than large complicated projects.
                  They help teens learn deadlines, feedback, revisions, and
                  professional communication.
                </p>

                <p>
                  TeenVerseHub is built around the idea that age should not stop
                  talent, but young freelancers still need structure. Clear
                  service descriptions, portfolio proof, safe work habits, and
                  realistic expectations help teenagers grow with more confidence
                  and less chaos.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="relative overflow-hidden px-6 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="text-4xl font-black tracking-tight text-slate-950 dark:text-white sm:text-6xl">
                Questions about freelance jobs for teens
              </h2>

              <p className="mx-auto mt-8 max-w-3xl text-xl leading-relaxed text-slate-600 dark:text-slate-400">
                These answers help teens, guardians, and clients understand how
                teen freelancing can start in a more realistic and responsible
                way.
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
              Start with one skill and build real proof.
            </h2>

            <p className="mx-auto mt-8 max-w-2xl text-xl leading-relaxed text-slate-400">
              TeenVerseHub helps teenagers grow from practice work into clearer
              digital services through portfolios, beginner-friendly projects,
              and safer online work habits.
            </p>

            <div className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row">
              <a
                href={SITE.appUrl}
                className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-indigo-500 px-10 py-5 text-lg font-black text-white transition-all hover:bg-indigo-400 hover:shadow-[0_0_40px_rgba(99,102,241,0.4)] active:scale-95 sm:w-auto"
              >
                Join the Platform
              </a>

              <a
                href="/guardian-guide"
                className="inline-flex w-full items-center justify-center gap-3 rounded-full border border-white/20 bg-white/5 px-10 py-5 text-lg font-bold text-white backdrop-blur-lg transition-colors hover:bg-white/10 sm:w-auto"
              >
                Read Guardian Guide
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}