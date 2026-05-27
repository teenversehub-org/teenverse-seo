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
  HelpCircle,
  MessageCircle,
  DollarSign,
  UserCheck,
  Lock,
} from 'lucide-react'

import { SITE, buildMetadata } from '../lib/site'
import StructuredData from '../components/StructuredData'
import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'

export const metadata = buildMetadata({
  title: 'TeenVerseHub FAQ | Teen Freelancing, Skills, Safety, Payments, and Guardians',
  description:
    'Simple answers to TeenVerseHub questions about teen freelancing, digital skills, portfolios, beginner opportunities, platform fees, safety awareness, and guardian involvement.',
  path: '/faq',
  keywords: [
    'TeenVerseHub FAQ',
    'TeenVerseHub questions',
    'teen freelancing questions',
    'TeenVerseHub platform',
    'TeenVerseHub payments',
    'TeenVerseHub basic plan 10 percent fee',
    'TeenVerseHub platform deduction',
    'TeenVerseHub plan fees',
    'TeenVerseHub guardian',
    'TeenVerse Hub',
    'teen freelancing platform India',
    'safe online jobs for teens',
    'teen digital skills',
    'student earning platform',
  ],
})

const faqItems = [
  {
    question: 'What is TeenVerseHub?',
    answer:
      'TeenVerseHub is a teen-focused digital platform that helps teenagers explore digital skills, create portfolio proof, and discover beginner-friendly online work opportunities.',
  },
  {
    question: 'Who can use TeenVerseHub?',
    answer:
      'TeenVerseHub is mainly built for teenagers and young students who want to learn skills, showcase their work, and start their digital journey in a more structured way.',
  },
  {
    question: 'Is TeenVerseHub only a freelancing website?',
    answer:
      'No. TeenVerseHub is not only a freelancing website. It focuses on teen skills, portfolios, beginner-friendly opportunities, digital services, and long-term growth.',
  },
  {
    question: 'Do I need experience to start?',
    answer:
      'No. You can start as a beginner. The best way to begin is to choose one skill, create sample work, build a simple profile, and apply for small projects.',
  },
  {
    question: 'What kind of work can teens do?',
    answer:
      'Teens can explore digital work like video editing, thumbnails, content writing, captions, design, social media support, basic website work, research tasks, and creator support.',
  },
  {
    question: 'How can I start earning on TeenVerseHub?',
    answer:
      'You can start by creating your profile, choosing one service category, adding portfolio samples, and applying for suitable beginner-friendly opportunities.',
  },
  {
    question: 'Does TeenVerseHub guarantee jobs or income?',
    answer:
      'No. TeenVerseHub does not guarantee jobs, clients, income, or project success. Your results depend on your skills, portfolio quality, communication, and client demand.',
  },
  {
    question: 'Is TeenVerseHub safe for teenagers?',
    answer:
      'TeenVerseHub is built with a safety-first mindset. Teens should keep communication professional, avoid unclear offers, and choose work that is easy to understand and review.',
  },
  {
    question: 'Can parents or guardians be involved?',
    answer:
      'Yes. TeenVerseHub encourages guardian awareness because online work can involve communication, payments, deadlines, and responsibility.',
  },
  {
    question: 'How do payments and platform fees work?',
    answer:
      'TeenVerseHub charges a platform deduction on successful transactions. For the Basic Plan, the platform fee is 10% of the project amount. Higher plans may reduce the deduction according to the active plan.',
  },
  {
    question: 'Is there any fee to join TeenVerseHub?',
    answer:
      'TeenVerseHub may offer basic access and plan-based features. Any applicable plan fee or platform deduction should be checked on the platform before using paid features.',
  },
  {
    question: 'What should teens avoid while freelancing online?',
    answer:
      'Teens should avoid fast-money promises, vague work, adult or illegal tasks, unsafe communication, and projects that are not clear enough for a parent or guardian to review.',
  },
  {
    question: 'How does TeenVerseHub help beginners look professional?',
    answer:
      'TeenVerseHub encourages teens to create skill-based profiles, add portfolio samples, explain services clearly, start with small projects, and improve over time.',
  },
  {
    question: 'What is the best way to start as a teen freelancer?',
    answer:
      'Start with one skill, create 3 to 5 portfolio samples, write a clear service description, apply for small projects, and improve after every completed task.',
  },
]

const pageSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  headline:
    'TeenVerseHub FAQ | Teen Freelancing, Skills, Safety, Payments, and Guardians',
  name: 'TeenVerseHub FAQ | Teen Freelancing, Skills, Safety, Payments, and Guardians',
  description:
    'Simple answers to TeenVerseHub questions about teen freelancing, digital skills, portfolios, beginner opportunities, platform fees, safety awareness, and guardian involvement.',
  author: {
    '@type': 'Organization',
    name: SITE.shortName,
  },
  publisher: {
    '@type': 'Organization',
    name: SITE.shortName,
  },
  mainEntityOfPage: `${SITE.baseUrl}/faq`,
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
}

const pageFeatures = [
  {
    icon: <MonitorPlay className="h-8 w-8" />,
    title: 'Creative Work',
    description:
      'Teens can explore beginner-friendly services like video editing, thumbnails, short-form clips, creator support, and simple visual content.',
    span: 'md:col-span-7',
    glow: 'bg-blue-600/30',
    ring: 'ring-blue-500/20',
  },
  {
    icon: <Layout className="h-8 w-8" />,
    title: 'Tech and Digital Skills',
    description:
      'Students interested in tech can build portfolio projects around websites, frontend basics, simple tools, and beginner technical support.',
    span: 'md:col-span-5',
    glow: 'bg-emerald-600/30',
    ring: 'ring-emerald-500/20',
  },
  {
    icon: <FileText className="h-8 w-8" />,
    title: 'Writing and Social Support',
    description:
      'Teens can offer captions, scripts, research notes, blog drafts, SEO-friendly content, and social media support.',
    span: 'md:col-span-5',
    glow: 'bg-fuchsia-600/30',
    ring: 'ring-fuchsia-500/20',
  },
  {
    icon: <ShieldCheck className="h-8 w-8" />,
    title: 'Safety Awareness',
    description:
      'TeenVerseHub encourages safer work habits, clear communication, guardian awareness, and avoiding vague or risky online work.',
    span: 'md:col-span-7',
    glow: 'bg-amber-600/30',
    ring: 'ring-amber-500/20',
  },
]

const roadmapSteps = [
  {
    title: 'Start Focused',
    theme: 'indigo',
    icon: <Zap className="h-6 w-6 text-indigo-400" />,
    points: [
      'Choose one service category',
      'Create portfolio samples',
      'Set clear beginner deliverables',
      'Keep communication simple and professional',
    ],
  },
  {
    title: 'Grow Responsibly',
    theme: 'fuchsia',
    icon: <TrendingUp className="h-6 w-6 text-fuchsia-400" />,
    points: [
      'Apply for small projects',
      'Build proof through completed work',
      'Improve skill quality over time',
      'Understand platform fees before accepting paid work',
    ],
  },
]

const platformBasics = [
  'TeenVerseHub is teen-focused',
  'The platform supports digital skills and portfolios',
  'It helps teens explore beginner-friendly opportunities',
  'It is not only a basic freelancing website',
]

const differentPoints = [
  'Skill-first teen profiles',
  'Portfolio-based growth',
  'Beginner-friendly digital service categories',
  'Guardian-aware online work mindset',
]

const quickAnswerCards = [
  {
    icon: <HelpCircle className="h-8 w-8" />,
    title: 'For Teens',
    description:
      'Start with one digital skill, create portfolio samples, and apply for small opportunities that match your ability.',
  },
  {
    icon: <UserCheck className="h-8 w-8" />,
    title: 'For Guardians',
    description:
      'TeenVerseHub encourages guardian awareness so parents can understand how teens are exploring online work.',
  },
  {
    icon: <DollarSign className="h-8 w-8" />,
    title: 'For Payments',
    description:
      'The Basic Plan has a 10% platform fee. Higher plans may reduce the deduction according to the active plan.',
  },
  {
    icon: <Lock className="h-8 w-8" />,
    title: 'For Safety',
    description:
      'Teens should avoid vague work, unsafe shortcuts, off-platform pressure, and unrealistic earning promises.',
  },
]

export default function FaqPage() {
  return (
    <>
      <StructuredData data={pageSchema} />
      <SiteHeader />

      <main className="tvh-page-shell selection:bg-[#5b245e] selection:text-white">
        <section className="relative isolate flex min-h-[90vh] flex-col items-center justify-center overflow-hidden px-6 pb-20 pt-32">
          <div className="tv-grid-mesh pointer-events-none absolute inset-0 opacity-80" />
          <div className="tv-orbit pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-[100%] bg-indigo-600/20 opacity-70 blur-[120px]" />
          <div className="tv-orbit pointer-events-none absolute right-[-10%] top-[-10%] h-[500px] w-[500px] rounded-[100%] bg-fuchsia-600/20 opacity-60 blur-[100px] [animation-delay:-7s]" />

          <div className="tv-reveal relative z-10 mx-auto max-w-5xl text-center">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white/80 px-5 py-2 text-sm font-bold uppercase tracking-widest text-indigo-700 shadow-xl shadow-indigo-100/70 backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:text-indigo-300 dark:shadow-2xl">
              <BadgeCheck className="h-4 w-4" />
              TeenVerseHub Answers
            </div>

            <h1 className="text-4xl font-black leading-[1.08] tracking-tighter text-slate-950 dark:text-white sm:text-7xl md:text-8xl">
              Common Questions <br className="hidden md:block" />
              <span className="bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-emerald-400 bg-clip-text text-transparent">
                About TeenVerseHub
              </span>
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-slate-600 dark:text-slate-400 md:text-xl">
              TeenVerseHub helps teenagers explore digital skills, build
              portfolio proof, discover beginner-friendly opportunities, and
              understand safer online work. These answers explain the platform,
              payments, plans, guardians, safety, and teen freelancing in simple
              language.
            </p>

            <div className="mt-12 flex w-full flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
              <a
                href="/freelance-jobs-for-teens"
                className="group relative inline-flex w-full max-w-sm items-center justify-center gap-3 overflow-hidden rounded-full bg-slate-950 px-8 py-4 text-base font-black text-white shadow-xl shadow-slate-300/50 transition-transform hover:scale-105 active:scale-95 dark:bg-white dark:text-slate-950 dark:shadow-none sm:w-auto"
              >
                Explore Opportunities
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="/safety"
                className="inline-flex w-full max-w-sm items-center justify-center gap-3 rounded-full border border-indigo-200 bg-white/70 px-8 py-4 text-base font-bold text-slate-900 shadow-sm backdrop-blur-lg transition-colors hover:bg-white dark:border-white/20 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 dark:hover:text-white sm:w-auto"
              >
                <ShieldCheck className="h-5 w-5" />
                Read Safety Guide
              </a>
            </div>
          </div>

          <div className="tv-reveal relative z-10 mt-20 grid w-full max-w-4xl grid-cols-1 gap-px overflow-hidden rounded-3xl border border-indigo-100 bg-indigo-100/70 shadow-[0_24px_80px_rgba(79,70,229,0.12)] backdrop-blur-2xl dark:border-white/10 dark:bg-white/10 dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)] sm:mt-24 sm:grid-cols-3">
            {[
              { label: 'Skills', value: 'Creative + Tech' },
              { label: 'Proof', value: 'Portfolio First' },
              { label: 'Fees', value: 'Plan Based' },
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

        <section className="relative overflow-hidden px-6 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="tv-reveal max-w-3xl">
              <h2 className="text-4xl font-black tracking-tight text-slate-950 dark:text-white sm:text-5xl">
                Key TeenVerseHub questions, answered clearly.
              </h2>

              <p className="mt-6 text-xl leading-relaxed text-slate-600 dark:text-slate-400">
                These answers cover what TeenVerseHub is, how teens can start,
                what guardians should know, how platform fees work, and why
                safety matters.
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

        <section className="relative overflow-hidden border-y border-indigo-100 bg-white/70 px-6 py-24 dark:border-white/5 dark:bg-[#070b14] sm:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-24">
              <div className="tv-reveal lg:sticky lg:top-32 lg:col-span-5 lg:h-max">
                <h2 className="text-4xl font-black leading-tight tracking-tight text-slate-950 dark:text-white sm:text-5xl">
                  The platform vision is broader than basic freelancing.
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
                  TeenVerseHub is built to support teenagers as they learn,
                  build, collaborate, earn, and grow with more structure than
                  scattered informal online work.
                </p>
              </div>

              <div className="flex flex-col gap-8 lg:col-span-7">
                <div className="tv-card-motion tv-reveal relative rounded-[2rem] border border-indigo-100 bg-gradient-to-br from-indigo-50 to-white p-7 shadow-2xl shadow-indigo-100/70 backdrop-blur-xl dark:border-indigo-500/20 dark:bg-gradient-to-br dark:from-indigo-950/40 dark:to-slate-900/40 dark:shadow-2xl sm:rounded-[2.5rem] sm:p-10">
                  <div className="mb-6 flex items-center gap-4 border-b border-slate-200 pb-6 dark:border-white/10">
                    <Briefcase className="h-8 w-8 text-indigo-400" />
                    <h3 className="text-2xl font-black text-slate-950 dark:text-white">
                      Platform Basics
                    </h3>
                  </div>

                  <ul className="space-y-4">
                    {platformBasics.map((item, idx) => (
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
                      What Makes It Different
                    </h3>
                  </div>

                  <p className="mb-6 text-lg text-slate-700 dark:text-slate-300">
                    TeenVerseHub focuses on helping teenagers become more
                    professional through skill clarity, portfolio proof, safer
                    habits, and beginner-friendly digital opportunities.
                  </p>

                  <ul className="space-y-4">
                    {differentPoints.map((item, idx) => (
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

        <section className="relative isolate mx-auto my-24 max-w-[1300px] overflow-hidden rounded-[3rem] border border-white/10 bg-[#090e1a] px-6 py-24 shadow-[0_40px_100px_rgba(0,0,0,0.6)] sm:my-32 sm:px-16 sm:py-32">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-[20%] top-[10%] h-[600px] w-[600px] rounded-full bg-indigo-600/10 blur-[150px]" />
            <div className="absolute -right-[20%] bottom-[10%] h-[600px] w-[600px] rounded-full bg-fuchsia-600/10 blur-[150px]" />
          </div>

          <div className="tv-reveal relative z-10 mx-auto max-w-3xl text-center">
            <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
              How TeenVerseHub fits together.
            </h2>
            <p className="mt-6 text-xl leading-relaxed text-slate-400">
              TeenVerseHub connects several practical systems into one
              teen-first platform.
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
                  Core Philosophy
                </h4>
                <p className="mt-2 text-lg text-slate-400">
                  Teenagers are not future talent only. They are already capable
                  of creating real value today when the environment is safer,
                  guided, and skill-focused.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ ANSWERS SECTION */}
        <section className="relative overflow-hidden px-6 py-24 sm:py-32">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 lg:grid-cols-12">
            <div className="lg:sticky lg:top-32 lg:col-span-4 lg:h-max">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-5 py-2 text-sm font-black uppercase tracking-widest text-indigo-700 dark:border-white/10 dark:bg-white/5 dark:text-indigo-300">
                <HelpCircle className="h-4 w-4" />
                FAQ Desk
              </div>

              <h2 className="text-4xl font-black tracking-tight text-slate-950 dark:text-white sm:text-5xl">
                Frequently asked questions.
              </h2>

              <p className="mt-6 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
                Simple answers for teens, guardians, clients, and anyone
                exploring TeenVerseHub.
              </p>

              <div className="mt-8 rounded-[2rem] border border-indigo-100 bg-white p-8 shadow-xl shadow-indigo-100/50 dark:border-white/10 dark:bg-white/[0.04] dark:shadow-none">
                <MessageCircle className="mb-5 h-8 w-8 text-indigo-600 dark:text-indigo-300" />
                <h3 className="text-2xl font-black text-slate-950 dark:text-white">
                  Still have questions?
                </h3>
                <p className="mt-3 text-slate-600 dark:text-slate-400">
                  Visit the contact page or explore the safety guide for more
                  details.
                </p>

                <a
                  href="/contact"
                  className="mt-6 inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 font-bold text-white transition-colors hover:bg-indigo-700"
                >
                  Contact Us <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="grid gap-5 lg:col-span-8">
              {faqItems.map((faq, index) => (
                <article
                  key={index}
                  className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-100/50 dark:border-white/10 dark:bg-white/[0.04] dark:hover:shadow-none sm:p-8"
                >
                  <div className="flex items-start gap-5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-300">
                      <span className="text-sm font-black">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-xl font-black text-slate-950 dark:text-white sm:text-2xl">
                        {faq.question}
                      </h3>

                      <p className="mt-4 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* QUICK ANSWERS */}
        <section className="border-y border-indigo-100 bg-white/70 px-6 py-24 dark:border-white/5 dark:bg-[#070b14] sm:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-4xl font-black tracking-tight text-slate-950 dark:text-white sm:text-5xl">
                Quick answers for different users.
              </h2>

              <p className="mt-6 text-xl leading-relaxed text-slate-600 dark:text-slate-400">
                Whether you are a teen, guardian, client, or beginner
                freelancer, these are the main things to understand.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {quickAnswerCards.map((card, index) => (
                <div
                  key={index}
                  className="rounded-[2rem] border border-indigo-100 bg-white p-8 shadow-xl shadow-indigo-100/50 dark:border-white/10 dark:bg-white/[0.04] dark:shadow-none"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-white dark:bg-white/10">
                    {card.icon}
                  </div>

                  <h3 className="text-2xl font-black text-slate-950 dark:text-white">
                    {card.title}
                  </h3>

                  <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-300">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-gradient-to-t from-[#0f172a] to-[#030712] px-6 py-24 text-center sm:py-32">
          <div className="tv-reveal relative z-10 mx-auto max-w-4xl">
            <h2 className="text-4xl font-black tracking-tight text-white sm:text-6xl">
              TeenVerseHub helps teens start with skills and proof.
            </h2>

            <p className="mx-auto mt-8 max-w-2xl text-xl leading-relaxed text-slate-400">
              Build a profile, show your work, understand platform fees, stay
              careful online, and grow step by step.
            </p>

            <div className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row">
              <a
                href={SITE.appUrl}
                className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-indigo-500 px-10 py-5 text-lg font-black text-white transition-all hover:bg-indigo-400 hover:shadow-[0_0_40px_rgba(99,102,241,0.4)] active:scale-95 sm:w-auto"
              >
                Open the Platform
              </a>

              <a
                href="/guardian-guide"
                className="inline-flex w-full items-center justify-center gap-3 rounded-full border border-white/20 bg-white/5 px-10 py-5 text-lg font-bold text-white backdrop-blur-lg transition-colors hover:bg-white/10 sm:w-auto"
              >
                Guardian Guide
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}