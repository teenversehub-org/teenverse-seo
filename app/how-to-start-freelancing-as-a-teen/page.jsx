import {
  ArrowRight,
  BadgeCheck,
  Briefcase,
  CheckCircle2,
  FileText,
  Layout,
  MonitorPlay,
  ShieldCheck,
  TrendingUp,
  Zap,
} from 'lucide-react'

import { SITE, buildMetadata } from '../lib/site'
import StructuredData from '../components/StructuredData'
import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'

export const metadata = buildMetadata({
  title: 'How to Start Freelancing as a Teen | TeenVerse Hub',
  description:
    'Learn how teens can start freelancing with digital skills, portfolio samples, beginner-friendly services, and safer online work habits through TeenVerse Hub.',
  path: '/how-to-start-freelancing-as-a-teen',
  keywords: [
    'how to start freelancing as a teen',
    'teen freelancing',
    'freelance jobs for teens',
    'earn money online as a teen',
    'digital skills for teenagers',
    'TeenVerse Hub',
    'TeenVerseHub',
    'student freelancing platform',
    'teen portfolio',
    'online work for students',
  ],
})

const pageSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How to Start Freelancing as a Teen',
  description:
    'A practical guide for teens who want to start freelancing with skills, portfolio samples, and beginner-friendly online work.',
  author: {
    '@type': 'Organization',
    name: SITE.name,
  },
  publisher: {
    '@type': 'Organization',
    name: SITE.name,
  },
  mainEntityOfPage: `${SITE.baseUrl}/how-to-start-freelancing-as-a-teen`,
}

const freelanceSkills = [
  {
    icon: <MonitorPlay className="h-8 w-8" />,
    title: 'Video Editing and Creator Work',
    description:
      'Teens can start with short-form video editing, thumbnails, gaming clips, creator content, and simple visual content support.',
  },
  {
    icon: <FileText className="h-8 w-8" />,
    title: 'Writing and Content Support',
    description:
      'Beginner services can include captions, scripts, blog drafts, research notes, social media content, and simple SEO-friendly writing.',
  },
  {
    icon: <Layout className="h-8 w-8" />,
    title: 'Design and Web Basics',
    description:
      'Teens interested in tech can build portfolio samples around landing pages, basic websites, UI ideas, simple graphics, or beginner design work.',
  },
  {
    icon: <Briefcase className="h-8 w-8" />,
    title: 'Startup and Digital Tasks',
    description:
      'Small teams often need help with research, content organization, social media support, basic design, and other clear digital tasks.',
  },
]

const roadmap = [
  {
    title: 'Choose One Skill',
    description:
      'Start with one service instead of trying everything. A focused skill is easier to practice, explain, and show in a portfolio.',
  },
  {
    title: 'Create Sample Work',
    description:
      'Before applying for projects, create 3 to 5 samples such as edited videos, captions, blog drafts, designs, or simple websites.',
  },
  {
    title: 'Build a Clear Profile',
    description:
      'Your profile should explain what you can do, show your samples, and make it easy for others to understand your service.',
  },
  {
    title: 'Start with Small Projects',
    description:
      'Begin with simple, beginner-friendly work. Small projects help you learn communication, deadlines, revisions, and client expectations.',
  },
]

const safetyPoints = [
  'Avoid jobs that promise fast money without real work.',
  'Do not accept vague work with no clear task or deadline.',
  'Keep communication professional and easy to review.',
  'Start with skills and proof instead of unrealistic earning claims.',
]

export default function StartFreelancingAsTeenPage() {
  return (
    <>
      <StructuredData data={pageSchema} />
      <SiteHeader />

      <main className="min-h-screen bg-[#f7f9ff] text-slate-950 dark:bg-[#030712] dark:text-white">
        <section className="relative isolate overflow-hidden px-6 pb-20 pt-32 text-center">
          <div className="mx-auto max-w-5xl">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white/80 px-5 py-2 text-sm font-bold uppercase tracking-widest text-indigo-700 shadow-xl shadow-indigo-100/70 backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:text-indigo-300">
              <BadgeCheck className="h-4 w-4" />
              Teen Freelancing Guide
            </div>

            <h1 className="text-4xl font-black leading-[1.08] tracking-tighter text-slate-950 dark:text-white sm:text-7xl">
              How to Start Freelancing as a Teen
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-slate-600 dark:text-slate-400 md:text-xl">
              TeenVerse Hub helps teens explore freelancing through digital
              skills, portfolio building, beginner-friendly services, and safer
              online work habits. The best way to start is simple: pick one
              skill, create proof, and begin with small projects.
            </p>

            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="/freelance-jobs-for-teens"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-slate-950 px-8 py-4 text-base font-black text-white transition-transform hover:scale-105 dark:bg-white dark:text-slate-950"
              >
                Explore Teen Freelance Work
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="/safe-online-jobs-for-teens"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-indigo-200 bg-white/70 px-8 py-4 text-base font-bold text-slate-900 backdrop-blur-lg transition-colors hover:bg-white dark:border-white/20 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
              >
                <ShieldCheck className="h-5 w-5" />
                Read Safety Guide
              </a>
            </div>
          </div>
        </section>

        <section className="px-6 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <h2 className="text-4xl font-black tracking-tight text-slate-950 dark:text-white sm:text-5xl">
                Best freelancing skills for teens
              </h2>
              <p className="mt-6 text-xl leading-relaxed text-slate-600 dark:text-slate-400">
                Teen freelancing works best when the service is clear, useful,
                and easy to show through sample work.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
              {freelanceSkills.map((skill, index) => (
                <div
                  key={index}
                  className="rounded-[2rem] border border-indigo-100 bg-white/80 p-8 shadow-xl shadow-indigo-100/50 backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.04]"
                >
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-950 text-white dark:bg-white/10">
                    {skill.icon}
                  </div>
                  <h3 className="text-2xl font-black text-slate-950 dark:text-white">
                    {skill.title}
                  </h3>
                  <p className="mt-4 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-indigo-100 bg-white/70 px-6 py-24 dark:border-white/5 dark:bg-[#070b14] sm:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <h2 className="text-4xl font-black leading-tight tracking-tight text-slate-950 dark:text-white sm:text-5xl">
                  A simple roadmap to start freelancing
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
                  You do not need to be perfect before starting. You need one
                  skill, a few samples, clear communication, and a willingness to
                  improve with each project.
                </p>
              </div>

              <div className="grid gap-6 lg:col-span-7">
                {roadmap.map((step, index) => (
                  <div
                    key={index}
                    className="rounded-[2rem] border border-indigo-100 bg-white p-7 shadow-xl shadow-indigo-100/60 dark:border-white/10 dark:bg-white/[0.04]"
                  >
                    <div className="flex items-start gap-5">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-300">
                        <CheckCircle2 className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-black text-slate-950 dark:text-white">
                          {step.title}
                        </h3>
                        <p className="mt-3 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto my-24 max-w-[1300px] overflow-hidden rounded-[3rem] bg-[#090e1a] px-6 py-24 text-white shadow-[0_40px_100px_rgba(0,0,0,0.45)] sm:px-16 sm:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
              Freelancing should start with skills, not shortcuts
            </h2>
            <p className="mt-6 text-xl leading-relaxed text-slate-400">
              TeenVerse Hub focuses on helping teens build real digital ability,
              show proof through portfolios, and approach online work in a more
              careful and professional way.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-[2rem] border border-emerald-500/20 bg-emerald-950/20 p-8">
              <div className="mb-6 flex items-center gap-4">
                <TrendingUp className="h-8 w-8 text-emerald-400" />
                <h3 className="text-2xl font-black">What teens should do</h3>
              </div>
              <ul className="space-y-4 text-lg text-slate-300">
                <li>Pick one useful digital skill.</li>
                <li>Create portfolio samples before applying.</li>
                <li>Start with small and clear projects.</li>
                <li>Improve quality after every project.</li>
              </ul>
            </div>

            <div className="rounded-[2rem] border border-rose-500/20 bg-rose-950/20 p-8">
              <div className="mb-6 flex items-center gap-4">
                <Zap className="h-8 w-8 text-rose-400" />
                <h3 className="text-2xl font-black">What teens should avoid</h3>
              </div>
              <ul className="space-y-4 text-lg text-slate-300">
                {safetyPoints.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-t from-[#0f172a] to-[#030712] px-6 py-24 text-center sm:py-32">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-4xl font-black tracking-tight text-white sm:text-6xl">
              Start your teen freelancing journey with TeenVerse Hub
            </h2>
            <p className="mx-auto mt-8 max-w-2xl text-xl leading-relaxed text-slate-400">
              Build your skills, create portfolio proof, explore beginner
              opportunities, and grow step by step as a young digital freelancer.
            </p>

            <div className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row">
              <a
                href={SITE.appUrl}
                className="inline-flex items-center justify-center gap-3 rounded-full bg-indigo-500 px-10 py-5 text-lg font-black text-white transition-all hover:bg-indigo-400 active:scale-95"
              >
                Open TeenVerse Hub
              </a>

              <a
                href="/freelance-jobs-for-teens"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-white/20 bg-white/5 px-10 py-5 text-lg font-bold text-white backdrop-blur-lg transition-colors hover:bg-white/10"
              >
                Explore Freelance Jobs
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}