import {
  AlertTriangle,
  BadgeCheck,
  Briefcase,
  CheckCircle2,
  ShieldCheck,
  TrendingUp,
  Zap,
  ArrowRight,
  Globe,
  Target,
  Sparkles,
  Users,
  Rocket,
} from 'lucide-react'
import Link from 'next/link'

import { SITE, buildMetadata } from '../lib/site'
import StructuredData from '../components/StructuredData'
import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'

export const metadata = buildMetadata({
  title: 'About TeenVerseHub | Teen Skills, Work, and Growth Platform',
  description:
    'Learn about TeenVerseHub, a teen-focused platform founded by Kashif Khan to help teenagers learn digital skills, build portfolios, explore work opportunities, and grow safely.',
  path: '/about',
  keywords: [
    'about TeenVerseHub',
    'TeenVerseHub',
    'TeenVerse Hub',
    'Kashif Khan TeenVerseHub',
    'teen freelancing platform India',
    'safe online jobs for teens',
    'teen digital skills',
    'student earning platform',
    'teen talent platform',
    'teen creator platform',
    'teen portfolio platform',
    'teen entrepreneurship India',
    'digital skills for teenagers',
    'young freelancer platform',
  ],
})

const pageSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  headline: 'About TeenVerseHub | Teen Skills, Work, and Growth Platform',
  name: 'About TeenVerseHub | Teen Skills, Work, and Growth Platform',
  description:
    'TeenVerseHub is a teen-focused digital platform founded by Kashif Khan to help teenagers learn, build skills, showcase portfolios, explore opportunities, and grow safely.',
  author: {
    '@type': 'Organization',
    name: SITE.shortName,
  },
  publisher: {
    '@type': 'Organization',
    name: SITE.shortName,
  },
  mainEntityOfPage: `${SITE.baseUrl}/about`,
}

const pageFeatures = [
  {
    icon: <BadgeCheck className="h-8 w-8" />,
    title: 'Complete Teen Ecosystem',
    description:
      'TeenVerseHub helps teenagers move from learning a digital skill to proving it, showcasing it, and building a visible professional identity.',
    span: 'md:col-span-6',
    glow: 'bg-indigo-600/30',
    ring: 'ring-indigo-500/20',
  },
  {
    icon: <Briefcase className="h-8 w-8" />,
    title: 'Bridge to Real Work',
    description:
      'The platform gives young talent a structured gateway into beginner-friendly projects, creators, startups, and future entrepreneurship instead of scattered informal DMs.',
    span: 'md:col-span-6',
    glow: 'bg-fuchsia-600/30',
    ring: 'ring-fuchsia-500/20',
  },
  {
    icon: <ShieldCheck className="h-8 w-8" />,
    title: 'Safety-Focused Thinking',
    description:
      'TeenVerseHub is built around safer online work habits, clear communication, guardian awareness, and a more beginner-friendly environment for young people.',
    span: 'md:col-span-5',
    glow: 'bg-emerald-600/30',
    ring: 'ring-emerald-500/20',
  },
  {
    icon: <TrendingUp className="h-8 w-8" />,
    title: 'Long-Term Growth',
    description:
      'The long-term goal is to help young creators, students, developers, and founders build skills, confidence, portfolios, and real-world digital experience.',
    span: 'md:col-span-7',
    glow: 'bg-amber-600/30',
    ring: 'ring-amber-500/20',
  },
]

const roadmapSteps = [
  {
    title: 'Foundation',
    theme: 'indigo',
    icon: <Zap className="h-6 w-6 text-indigo-400" />,
    points: [
      'Create a profile and skill identity',
      'Add portfolio proof and service clarity',
      'Learn safer communication habits',
      'Start with beginner-friendly opportunities',
    ],
  },
  {
    title: 'Expansion',
    theme: 'fuchsia',
    icon: <TrendingUp className="h-6 w-6 text-fuchsia-400" />,
    points: [
      'Work with creators, startups, and small teams',
      'Build reviews and repeatable workflows',
      'Keep improving skill quality over time',
      'Prepare for future founder or career paths',
    ],
  },
]

const storyNodes = [
  {
    label: '01 / The Problem',
    title: 'Existing platforms ignore teenagers.',
    color: 'rose',
    description:
      'As a 15-year-old student, Kashif Khan saw how difficult it was for young people to find safe and beginner-friendly digital opportunities. Most freelance platforms are highly competitive and mainly built for adults, while teenagers with real talent often struggle to get a trusted starting point.',
  },
  {
    label: '02 / The Solo Build',
    title: 'TeenVerseHub started from a real teen problem.',
    color: 'amber',
    description:
      'Instead of waiting for someone else to build the solution, Kashif started building TeenVerseHub himself. The first version was designed to create a more focused space where teenagers could showcase skills, explore opportunities, and start their digital journey with more structure.',
  },
  {
    label: '03 / Growing the Vision',
    title: 'Building a platform for young digital talent.',
    color: 'indigo',
    description:
      'The vision grew beyond one page or one idea. TeenVerseHub is now being shaped as a launchpad for young creators, developers, freelancers, and students who want to build practical skills and real-world confidence before adulthood.',
  },
]

const missionPoints = [
  'Explore raw digital skills',
  'Build portfolio-ready proof',
  'Find beginner-friendly opportunities',
  'Gain real-world project experience',
  'Build confidence for the future',
]

const beliefPoints = [
  'Teenagers are not only future talent',
  'Digital skills should open real doors earlier',
  'Safety and opportunity should grow together',
  'Portfolio quality should matter more than age',
]

const buildingPoints = [
  'Profiles, skills, portfolios, and service clarity',
  'Beginner-friendly project discovery',
  'Creator, startup, and digital work opportunities',
  'Learning, collaboration, and future startup pathways',
]

const trustPoints = [
  {
    title: 'Safer Work Habits',
    description:
      'TeenVerseHub encourages clear communication, reviewable work, and responsible online earning habits for teenagers.',
  },
  {
    title: 'Guardian Awareness',
    description:
      'The platform is built with the understanding that parents and guardians need transparency when teens start online work.',
  },
  {
    title: 'Beginner-Friendly Space',
    description:
      'TeenVerseHub focuses on helping young people start with skills, portfolios, and small opportunities instead of unsafe shortcuts.',
  },
]

const teamMembers = [
  {
    name: 'Kashif Khan',
    role: 'Founder & CEO',
    description:
      'A 15-year-old developer and founder of TeenVerseHub. Kashif started the platform to create safer and more practical digital opportunities for teenagers.',
    initial: 'K',
    color: 'bg-indigo-500',
  },
  {
    name: 'Subodh',
    role: 'Co-founder',
    description:
      'Supporting the platform vision, development direction, and growth of TeenVerseHub as a better place for young digital talent.',
    initial: 'S',
    color: 'bg-purple-500',
  },
  {
    name: 'Aditya',
    role: 'Co-founder',
    description:
      'Supporting operations, execution, and the long-term mission of making TeenVerseHub useful for teenagers, creators, and clients.',
    initial: 'A',
    color: 'bg-blue-500',
  },
]

export default function AboutPage() {
  return (
    <>
      <StructuredData data={pageSchema} />
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
              About TeenVerseHub
            </div>

            <h1 className="text-4xl font-black leading-[1.08] tracking-tighter text-slate-950 dark:text-white sm:text-7xl md:text-8xl">
              The Teen Economy <br className="hidden md:block" />
              <span className="bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-emerald-400 bg-clip-text text-transparent">
                Needs a Safer Platform
              </span>
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-slate-600 dark:text-slate-400 md:text-xl">
              TeenVerseHub is a teen-focused digital platform designed to help
              teenagers learn, build skills, showcase portfolios, explore work
              opportunities, and grow safely in the digital economy. Founded by
              Kashif Khan, the platform is built around one belief: age should
              never limit talent.
            </p>

            <div className="mt-12 flex w-full flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
              <a
                href="/freelance-jobs-for-teens"
                className="group relative inline-flex w-full max-w-sm items-center justify-center gap-3 overflow-hidden rounded-full bg-slate-950 px-8 py-4 text-base font-black text-white shadow-xl shadow-slate-300/50 transition-transform hover:scale-105 active:scale-95 dark:bg-white dark:text-slate-950 dark:shadow-none sm:w-auto"
              >
                Explore Teen Services
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="/guardian-guide"
                className="inline-flex w-full max-w-sm items-center justify-center gap-3 rounded-full border border-indigo-200 bg-white/70 px-8 py-4 text-base font-bold text-slate-900 shadow-sm backdrop-blur-lg transition-colors hover:bg-white dark:border-white/20 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 dark:hover:text-white sm:w-auto"
              >
                <ShieldCheck className="h-5 w-5" />
                Guardian Guide
              </a>
            </div>
          </div>

          <div className="tv-reveal relative z-10 mt-20 grid w-full max-w-4xl grid-cols-1 gap-px overflow-hidden rounded-3xl border border-indigo-100 bg-indigo-100/70 shadow-[0_24px_80px_rgba(79,70,229,0.12)] backdrop-blur-2xl dark:border-white/10 dark:bg-white/10 dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)] sm:mt-24 sm:grid-cols-3">
            {[
              { label: 'Mission', value: 'Future-Ready Teens' },
              { label: 'Market', value: 'India First, Global Next' },
              { label: 'Philosophy', value: 'Skills Over Age' },
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

        {/* FOUNDER STORY */}
        <section className="relative overflow-hidden border-y border-indigo-100 bg-white px-6 py-24 dark:border-white/5 dark:bg-[#070b14] sm:py-32">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-20">
            <div className="lg:sticky lg:top-32 lg:col-span-4 lg:h-max">
              <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-xs font-black uppercase tracking-widest text-indigo-700 dark:border-white/10 dark:bg-white/5 dark:text-indigo-300">
                <Globe className="h-4 w-4" />
                The Story
              </div>

              <h2 className="mt-6 text-4xl font-black tracking-tight text-slate-950 dark:text-white sm:text-5xl">
                How TeenVerseHub began.
              </h2>

              <p className="mt-6 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
                TeenVerseHub started from a simple problem: talented teenagers
                often have skills, but not a safe and focused place to begin
                their digital journey.
              </p>
            </div>

            <div className="flex flex-col gap-8 lg:col-span-8">
              {storyNodes.map((node, index) => (
                <div
                  key={index}
                  className={`relative overflow-hidden rounded-[2rem] border p-8 shadow-xl backdrop-blur-xl sm:p-10 ${
                    node.color === 'indigo'
                      ? 'border-indigo-200 bg-indigo-600 text-white shadow-indigo-200/60 dark:border-indigo-500/20 dark:bg-indigo-950/30'
                      : 'border-slate-200 bg-slate-50 text-slate-950 shadow-slate-100 dark:border-white/10 dark:bg-white/[0.04] dark:text-white'
                  }`}
                >
                  <span
                    className={`text-xs font-black uppercase tracking-[0.25em] ${
                      node.color === 'rose'
                        ? 'text-rose-500'
                        : node.color === 'amber'
                          ? 'text-amber-500'
                          : 'text-indigo-100'
                    }`}
                  >
                    {node.label}
                  </span>

                  <h3 className="mt-4 text-2xl font-black sm:text-3xl">
                    {node.title}
                  </h3>

                  <p
                    className={`mt-5 text-lg leading-relaxed ${
                      node.color === 'indigo'
                        ? 'text-indigo-50'
                        : 'text-slate-600 dark:text-slate-300'
                    }`}
                  >
                    {node.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PLATFORM FEATURES */}
        <section className="relative overflow-hidden px-6 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="tv-reveal max-w-3xl">
              <h2 className="text-4xl font-black tracking-tight text-slate-950 dark:text-white sm:text-5xl">
                TeenVerseHub connects the parts teens usually have to solve
                alone.
              </h2>

              <p className="mt-6 text-xl leading-relaxed text-slate-600 dark:text-slate-400">
                The platform is not just a simple job page. It is built around
                identity, skills, portfolios, beginner-friendly work,
                responsible growth, and a safer mindset for teen digital
                opportunities.
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

        {/* MISSION AND VISION */}
        <section className="relative overflow-hidden px-6 py-24 sm:py-32">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="relative flex min-h-[520px] flex-col justify-between overflow-hidden rounded-[3rem] bg-indigo-950 p-10 text-white shadow-2xl shadow-indigo-200/50 dark:bg-[#ccff00] dark:text-black sm:p-16">
              <div className="relative z-10">
                <Target className="mb-8 h-10 w-10 opacity-90" />
                <h2 className="text-4xl font-black sm:text-5xl">
                  Our Mission
                </h2>
                <p className="mt-6 text-xl font-semibold opacity-90">
                  Creating opportunities for every teenager.
                </p>
              </div>

              <ul className="relative z-10 mt-10 space-y-5">
                {missionPoints.map((point, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-4 text-lg font-bold"
                  >
                    <span className="h-2 w-2 rounded-full bg-[#ccff00] dark:bg-black" />
                    {point}
                  </li>
                ))}
              </ul>

              <div className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-white/20 blur-[80px]" />
            </div>

            <div className="relative flex min-h-[520px] flex-col justify-center overflow-hidden rounded-[3rem] border border-indigo-100 bg-white p-10 shadow-xl shadow-indigo-100/60 dark:border-white/10 dark:bg-white/[0.04] sm:p-16">
              <Sparkles className="mb-8 h-10 w-10 text-indigo-600 dark:text-indigo-300" />

              <h2 className="text-4xl font-black text-slate-950 dark:text-white sm:text-5xl">
                Our Vision
              </h2>

              <p className="mt-6 text-xl font-medium leading-relaxed text-slate-600 dark:text-slate-300">
                We envision a world where teenagers do not have to wait until
                adulthood to start building their journey.
                <br />
                <br />
                TeenVerseHub is being built as a platform where young people can
                turn skills into real opportunities safely, confidently, and
                independently.
              </p>
            </div>
          </div>
        </section>

        {/* BELIEF AND BUILDING */}
        <section className="relative overflow-hidden border-y border-indigo-100 bg-white/70 px-6 py-24 dark:border-white/5 dark:bg-[#070b14] sm:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-24">
              <div className="tv-reveal lg:sticky lg:top-32 lg:col-span-5 lg:h-max">
                <h2 className="text-4xl font-black leading-tight tracking-tight text-slate-950 dark:text-white sm:text-5xl">
                  Teenagers are already creating real value.
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
                  Many teenagers can build apps, edit videos, design graphics,
                  manage communities, use AI tools, create content channels, or
                  start brands. TeenVerseHub exists to give that ability a more
                  focused and safer path.
                </p>
              </div>

              <div className="flex flex-col gap-8 lg:col-span-7">
                <div className="tv-card-motion tv-reveal relative rounded-[2rem] border border-indigo-100 bg-gradient-to-br from-indigo-50 to-white p-7 shadow-2xl shadow-indigo-100/70 backdrop-blur-xl dark:border-indigo-500/20 dark:bg-gradient-to-br dark:from-indigo-950/40 dark:to-slate-900/40 dark:shadow-2xl sm:rounded-[2.5rem] sm:p-10">
                  <div className="mb-6 flex items-center gap-4 border-b border-slate-200 pb-6 dark:border-white/10">
                    <Briefcase className="h-8 w-8 text-indigo-400" />
                    <h3 className="text-2xl font-black text-slate-950 dark:text-white">
                      What We Believe
                    </h3>
                  </div>

                  <ul className="space-y-4">
                    {beliefPoints.map((item, idx) => (
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
                      What We Are Building
                    </h3>
                  </div>

                  <p className="mb-6 text-lg text-slate-700 dark:text-slate-300">
                    TeenVerseHub is being built as a practical growth platform
                    where teens can create profiles, show skills, build
                    portfolios, and discover beginner-friendly digital
                    opportunities.
                  </p>

                  <ul className="space-y-4">
                    {buildingPoints.map((item, idx) => (
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

        {/* ROADMAP */}
        <section className="relative isolate mx-auto my-24 max-w-[1300px] overflow-hidden rounded-[3rem] border border-white/10 bg-[#090e1a] px-6 py-24 shadow-[0_40px_100px_rgba(0,0,0,0.6)] sm:my-32 sm:px-16 sm:py-32">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-[20%] top-[10%] h-[600px] w-[600px] rounded-full bg-indigo-600/10 blur-[150px]" />
            <div className="absolute -right-[20%] bottom-[10%] h-[600px] w-[600px] rounded-full bg-fuchsia-600/10 blur-[150px]" />
          </div>

          <div className="tv-reveal relative z-10 mx-auto max-w-3xl text-center">
            <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
              From student skill to real-world confidence.
            </h2>
            <p className="mt-6 text-xl leading-relaxed text-slate-400">
              The ecosystem is designed to help teens grow step by step instead
              of chasing unsafe shortcuts.
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
                  One-Line Summary
                </h4>
                <p className="mt-2 text-lg text-slate-400">
                  TeenVerseHub is a teen-focused platform where young people can
                  learn, showcase skills, collaborate, and explore real-world
                  digital opportunities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* TRUST */}
        <section className="border-y border-indigo-100 bg-slate-50 px-6 py-24 dark:border-white/5 dark:bg-[#050505] sm:py-32">
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="text-4xl font-black tracking-tight text-slate-950 dark:text-white sm:text-6xl">
              Trust is our{' '}
              <span className="text-indigo-600 dark:text-indigo-300">
                foundation.
              </span>
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-xl font-medium leading-relaxed text-slate-600 dark:text-slate-400">
              We understand that trust matters not only for teenagers, but also
              for parents and guardians. TeenVerseHub is built with safety,
              transparency, and beginner-friendly growth in mind.
            </p>

            <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
              {trustPoints.map((point, index) => (
                <div key={index} className="text-center">
                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white text-indigo-600 shadow-lg shadow-indigo-100 dark:bg-white/5 dark:text-indigo-300 dark:shadow-none">
                    <ShieldCheck className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-black text-slate-950 dark:text-white">
                    {point.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-slate-500 dark:text-slate-400">
                    {point.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TEAM */}
        <section className="bg-white px-6 py-24 dark:bg-[#0a0a0a] sm:py-32">
          <div className="mx-auto max-w-6xl">
            <div className="mb-16 flex flex-col justify-between gap-6 md:mb-24 md:flex-row md:items-end">
              <div>
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-xs font-black uppercase tracking-widest text-indigo-700 dark:border-white/10 dark:bg-white/5 dark:text-indigo-300">
                  <Users className="h-4 w-4" />
                  Team
                </div>

                <h2 className="text-4xl font-black text-slate-950 dark:text-white sm:text-6xl">
                  Built by{' '}
                  <span className="text-indigo-600 dark:text-indigo-300">
                    young minds.
                  </span>
                </h2>

                <p className="mt-5 text-lg font-medium text-slate-500 dark:text-slate-400 sm:text-xl">
                  A passionate team with a clear vision for the next generation.
                </p>
              </div>

              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-xs font-bold text-amber-700 dark:border-white/10 dark:bg-white/5 dark:text-amber-300">
                <AlertTriangle className="h-4 w-4" />
                Registered under Mohd Asif
              </div>
            </div>

            <div className="border-t border-slate-200 dark:border-white/10">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="group flex flex-col justify-between gap-6 border-b border-slate-200 py-10 transition-colors hover:bg-slate-50 dark:border-white/10 dark:hover:bg-white/[0.02] md:flex-row md:items-center md:py-12"
                >
                  <div className="flex flex-col gap-6 sm:flex-row sm:items-center md:gap-8">
                    <div
                      className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-full text-2xl font-black text-white shadow-lg transition-transform group-hover:scale-110 md:h-20 md:w-20 ${member.color}`}
                    >
                      {member.initial}
                    </div>

                    <div>
                      <h3 className="text-3xl font-black text-slate-950 dark:text-white sm:text-4xl">
                        {member.name}
                      </h3>
                      <div className="mt-2 text-xs font-black uppercase tracking-[0.25em] text-indigo-600 dark:text-indigo-300">
                        {member.role}
                      </div>
                    </div>
                  </div>

                  <p className="text-base leading-relaxed text-slate-500 transition-colors group-hover:text-slate-700 dark:text-slate-400 dark:group-hover:text-slate-300 md:w-1/2 md:text-lg">
                    {member.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SUPPORT TEASERS */}
        <section className="border-t border-indigo-100 bg-white px-6 py-24 dark:border-white/5 dark:bg-[#0a0a0a]">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2">
            <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-[2.5rem] border border-emerald-100 bg-emerald-50 p-8 dark:border-emerald-500/20 dark:bg-emerald-950/20 md:p-12">
              <div>
                <ShieldCheck className="mb-6 h-9 w-9 text-emerald-600 dark:text-emerald-300" />
                <h3 className="text-3xl font-black text-slate-950 dark:text-white">
                  Trust & Support
                </h3>
                <p className="mt-5 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
                  Got questions? Want to understand how TeenVerseHub thinks
                  about safer teen work? Explore our safety and FAQ pages.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="/safety"
                  className="rounded-xl bg-emerald-200/70 px-6 py-3 font-bold text-emerald-800 transition-colors hover:bg-emerald-200 dark:bg-emerald-500/20 dark:text-emerald-300 dark:hover:bg-emerald-500/30"
                >
                  Safety Hub
                </a>
                <a
                  href="/faq"
                  className="rounded-xl bg-blue-200/70 px-6 py-3 font-bold text-blue-800 transition-colors hover:bg-blue-200 dark:bg-blue-500/20 dark:text-blue-300 dark:hover:bg-blue-500/30"
                >
                  Read FAQs
                </a>
              </div>
            </div>

            <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-[2.5rem] border border-indigo-100 bg-indigo-50 p-8 dark:border-indigo-500/20 dark:bg-indigo-950/20 md:p-12">
              <div>
                <Globe className="mb-6 h-9 w-9 text-indigo-600 dark:text-indigo-300" />
                <h3 className="text-3xl font-black text-slate-950 dark:text-white">
                  Ready to explore?
                </h3>
                <p className="mt-5 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
                  Head back to our main platform to discover talented teenagers
                  or to start your own digital journey today.
                </p>
              </div>

              <div className="mt-8">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 rounded-xl bg-indigo-200/70 px-6 py-3 font-bold text-indigo-800 transition-colors hover:bg-indigo-200 dark:bg-indigo-500/20 dark:text-indigo-300 dark:hover:bg-indigo-500/30"
                >
                  Back to Main Page <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="relative overflow-hidden bg-gradient-to-t from-[#0f172a] to-[#030712] px-6 py-24 text-center sm:py-32">
          <div className="tv-reveal relative z-10 mx-auto max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-black uppercase tracking-widest text-indigo-200">
              <Rocket className="h-4 w-4" />
              Be Part of the Journey
            </div>

            <h2 className="text-4xl font-black tracking-tight text-white sm:text-6xl">
              A safer launchpad for teen creators, developers, and founders.
            </h2>

            <p className="mx-auto mt-8 max-w-2xl text-xl leading-relaxed text-slate-400">
              TeenVerseHub exists to unlock opportunity while building trust for
              teens, guardians, creators, startups, and the wider digital
              economy.
            </p>

            <div className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row">
              <a
                href={SITE.appUrl}
                className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-indigo-500 px-10 py-5 text-lg font-black text-white transition-all hover:bg-indigo-400 hover:shadow-[0_0_40px_rgba(99,102,241,0.4)] active:scale-95 sm:w-auto"
              >
                Start Exploring
              </a>

              <a
                href="/safety"
                className="inline-flex w-full items-center justify-center gap-3 rounded-full border border-white/20 bg-white/5 px-10 py-5 text-lg font-bold text-white backdrop-blur-lg transition-colors hover:bg-white/10 sm:w-auto"
              >
                View Safety Model
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}
