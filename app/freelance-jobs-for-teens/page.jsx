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
  FileText
} from 'lucide-react'
import { SITE, buildMetadata } from '../lib/site'
import StructuredData from '../components/StructuredData'
import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'

export const metadata = buildMetadata({
  title: "Freelance Jobs for Teens | Creative, Tech, Content, Gaming, and AI Services",
  description: "Explore freelance jobs for teens across video editing, design, coding, AI services, content writing, gaming support, and social media work with TeenVerseHub safety systems.",
  path: "/freelance-jobs-for-teens",
  keywords: [
    "freelance jobs for teens",
    "teen freelance services",
    "video editing jobs for teens",
    "AI services for students",
    "teen content writing jobs",
    "TeenVerseHub",
    "TeenVerse Hub",
    "teen freelancing platform India",
    "safe online jobs for teens",
    "teen talent ecosystem",
    "AI powered teen platform",
    "teen digital skills",
    "guardian consent teen platform",
    "verified teen freelancers",
    "student earning platform"
  ],
})

const pageSchema = {
  '@context': 'https://schema.org',
  '@type': "Article",
  headline: "Freelance Jobs for Teens | Creative, Tech, Content, Gaming, and AI Services",
  name: "Freelance Jobs for Teens | Creative, Tech, Content, Gaming, and AI Services",
  description: "Explore freelance jobs for teens across video editing, design, coding, AI services, content writing, gaming support, and social media work with TeenVerseHub safety systems.",
  author: { '@type': 'Organization', name: SITE.shortName },
  publisher: { '@type': 'Organization', name: SITE.shortName },
  mainEntityOfPage: `${SITE.baseUrl}/freelance-jobs-for-teens`,
}

const pageFeatures = [
  {
    icon: <MonitorPlay className="h-8 w-8" />,
    title: "Creative Services",
    description: "Graphic design, thumbnail creation, video editing, motion graphics, logo design, UI/UX design, posters, presentation layouts, and creator assets.",
    span: "md:col-span-7",
    glow: "bg-blue-600/30",
    ring: "ring-blue-500/20"
  },
  {
    icon: <Layout className="h-8 w-8" />,
    title: "Tech Services",
    description: "Website development, frontend development, Discord bots, AI integrations, app development, automation tools, and simple product prototypes.",
    span: "md:col-span-5",
    glow: "bg-emerald-600/30",
    ring: "ring-emerald-500/20"
  },
  {
    icon: <FileText className="h-8 w-8" />,
    title: "Content Services",
    description: "Script writing, copywriting, SEO content writing, social media management, YouTube management, captions, newsletters, and content repurposing.",
    span: "md:col-span-5",
    glow: "bg-fuchsia-600/30",
    ring: "ring-fuchsia-500/20"
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: "Gaming and AI Services",
    description: "Gaming coaching, Minecraft server setup, esports editing, streaming assets, prompt engineering, AI-assisted design, resume generation, and AI workflow setup.",
    span: "md:col-span-7",
    glow: "bg-amber-600/30",
    ring: "ring-amber-500/20"
  }
]

const roadmapSteps = [
  {
    title: "Choose a Service",
    theme: "indigo",
    icon: <Zap className="h-6 w-6 text-indigo-400" />,
    points: [
      "Pick one skill category first",
      "Create three strong sample projects",
      "Write a clear service description",
      "Set beginner-friendly project boundaries"
    ]
  },
  {
    title: "Build Trust",
    theme: "fuchsia",
    icon: <TrendingUp className="h-6 w-6 text-fuchsia-400" />,
    points: [
      "Complete skill checks when available",
      "Use platform communication systems",
      "Deliver small projects consistently",
      "Save ratings, reviews, and portfolio updates"
    ]
  }
]

export default function FreelanceJobsForTeensPage() {
  return (
    <>
      <StructuredData data={pageSchema} />
      <SiteHeader />

      <main className="min-h-screen bg-[#f7f9ff] text-slate-950 selection:bg-indigo-200 selection:text-slate-950 transition-colors duration-500 dark:bg-[#030712] dark:text-white dark:selection:bg-indigo-500/30 dark:selection:text-indigo-200">
        <section className="relative isolate flex min-h-[90vh] flex-col items-center justify-center overflow-hidden px-6 pb-20 pt-32">
          <div className="tv-grid-mesh pointer-events-none absolute inset-0 opacity-80" />
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-[100%] bg-indigo-600/20 opacity-70 blur-[120px] tv-orbit" />
          <div className="pointer-events-none absolute right-[-10%] top-[-10%] h-[500px] w-[500px] rounded-[100%] bg-fuchsia-600/20 opacity-60 blur-[100px] tv-orbit [animation-delay:-7s]" />

          <div className="tv-reveal relative z-10 mx-auto max-w-5xl text-center">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white/80 px-5 py-2 text-sm font-bold uppercase tracking-widest text-indigo-700 shadow-xl shadow-indigo-100/70 backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:text-indigo-300 dark:shadow-2xl">
              <BadgeCheck className="h-4 w-4" />
              {"Teen Service Marketplace"}
            </div>
            <h1 className="text-4xl font-black leading-[1.08] tracking-tighter text-slate-950 dark:text-white sm:text-7xl md:text-8xl">
              {"Freelance Jobs"} <br className="hidden md:block" />
              <span className="bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-emerald-400 bg-clip-text text-transparent">
                {"Built for Teen Skills"}
              </span>
            </h1>
            <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-slate-600 dark:text-slate-400 md:text-xl">
              {"TeenVerseHub helps teenagers turn real digital ability into structured service opportunities. Teens can build portfolios, verify skills, offer beginner-friendly services, and work toward safe earning through platform workflows designed for younger talent."}
            </p>
            <div className="mt-12 flex w-full flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
              <a href={"/how-to-start-freelancing-as-a-teen"} className="group relative inline-flex w-full max-w-sm items-center justify-center gap-3 overflow-hidden rounded-full bg-slate-950 px-8 py-4 text-base font-black text-white shadow-xl shadow-slate-300/50 transition-transform hover:scale-105 active:scale-95 dark:bg-white dark:text-slate-950 dark:shadow-none sm:w-auto">
                {"Start Freelancing Guide"}
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
              <a href={"/payments-protection"} className="inline-flex w-full max-w-sm items-center justify-center gap-3 rounded-full border border-indigo-200 bg-white/70 px-8 py-4 text-base font-bold text-slate-900 shadow-sm backdrop-blur-lg transition-colors hover:bg-white dark:border-white/20 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 dark:hover:text-white sm:w-auto">
                <ShieldCheck className="h-5 w-5" />
                {"Payment Protection"}
              </a>
            </div>
          </div>

          <div className="tv-reveal relative z-10 mt-20 grid w-full max-w-4xl grid-cols-1 gap-px overflow-hidden rounded-3xl border border-indigo-100 bg-indigo-100/70 shadow-[0_24px_80px_rgba(79,70,229,0.12)] backdrop-blur-2xl dark:border-white/10 dark:bg-white/10 dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)] sm:mt-24 sm:grid-cols-3">
            {[
              { label: "Creative work", value: "Design + Editing" },
              { label: "Tech work", value: "Web + AI" },
              { label: "Content work", value: "Writing + Social" },
            ].map((stat, idx) => (
              <div key={idx} className="bg-white/85 p-8 text-center backdrop-blur-xl dark:bg-[#0f172a]/80">
                <div className="text-sm font-bold uppercase tracking-widest text-slate-500">{stat.label}</div>
                <div className="mt-2 text-2xl font-black text-slate-950 dark:text-white">{stat.value}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="relative overflow-hidden px-6 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="tv-reveal max-w-3xl">
              <h2 className="text-4xl font-black tracking-tight text-slate-950 dark:text-white sm:text-5xl">
                {"Teen freelance categories with real market demand."}
              </h2>
              <p className="mt-6 text-xl leading-relaxed text-slate-600 dark:text-slate-400">
                {"The marketplace vision supports services teenagers already learn online, while adding structure, trust, and skill proof so clients can hire young talent with more confidence."}
              </p>
            </div>

            <div className="tv-mobile-depth mt-16 grid grid-cols-1 gap-6 md:mt-20 md:grid-cols-12 md:auto-rows-fr md:gap-8">
              {pageFeatures.map((feature, i) => (
                <div key={i} className={`tv-card-motion tv-reveal group relative z-0 flex min-h-[280px] flex-col overflow-hidden rounded-[2rem] border border-white/70 bg-white/70 p-7 shadow-[0_20px_60px_rgba(79,70,229,0.10)] backdrop-blur-3xl transition-[transform,box-shadow,background-color] duration-500 hover:z-10 hover:bg-white dark:border-white/10 dark:bg-white/[0.03] dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)] dark:hover:bg-white/[0.06] dark:hover:shadow-[0_16px_64px_rgba(0,0,0,0.5)] sm:rounded-[2.5rem] sm:p-10 ${feature.span}`}>
                  <div className={`pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full blur-[80px] transition-all duration-700 group-hover:scale-150 group-hover:opacity-80 ${feature.glow}`} />
                  <div className={`relative z-10 mb-8 inline-flex h-16 w-16 items-center justify-center rounded-3xl border border-white/80 bg-slate-950 text-white shadow-2xl backdrop-blur-xl ring-1 dark:border-white/20 dark:bg-white/10 sm:h-20 sm:w-20 ${feature.ring}`}>{feature.icon}</div>
                  <h3 className="relative z-10 text-2xl font-black tracking-tight text-slate-950 dark:text-white sm:text-3xl">{feature.title}</h3>
                  <p className="relative z-10 mt-6 flex-1 text-lg leading-relaxed text-slate-600 dark:text-slate-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden border-y border-indigo-100 bg-white/70 px-6 py-24 dark:border-white/5 dark:bg-[#070b14] sm:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-24">
              <div className="tv-reveal lg:sticky lg:top-32 lg:col-span-5 lg:h-max">
                <h2 className="text-4xl font-black leading-tight tracking-tight text-slate-950 dark:text-white sm:text-5xl">{"The best teen freelance job starts with proof, not hype."}</h2>
                <p className="mt-6 text-lg leading-relaxed text-slate-600 dark:text-slate-400">{"TeenVerseHub encourages teenagers to create samples, pass practical assessments, improve portfolios, and communicate clearly before taking on bigger projects. This creates a healthier path for beginners and better expectations for clients."}</p>
              </div>
              <div className="flex flex-col gap-8 lg:col-span-7">
                <div className="tv-card-motion tv-reveal relative rounded-[2rem] border border-indigo-100 bg-gradient-to-br from-indigo-50 to-white p-7 shadow-2xl shadow-indigo-100/70 backdrop-blur-xl dark:border-indigo-500/20 dark:bg-gradient-to-br dark:from-indigo-950/40 dark:to-slate-900/40 dark:shadow-2xl sm:rounded-[2.5rem] sm:p-10">
                  <div className="mb-6 flex items-center gap-4 border-b border-slate-200 pb-6 dark:border-white/10"><Briefcase className="h-8 w-8 text-indigo-400" /><h3 className="text-2xl font-black text-slate-950 dark:text-white">{"Portfolio-Ready Services"}</h3></div>
                  <ul className="space-y-4">{[
                    "Short-form video edits and creator clips",
                    "Thumbnails, graphics, and brand basics",
                    "Landing pages, bots, and automations",
                    "SEO writing, scripts, and social support"
                  ].map((item, idx) => (<li key={idx} className="flex items-start gap-4"><CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-indigo-400" /><span className="text-lg text-slate-700 dark:text-slate-300">{item}</span></li>))}</ul>
                </div>
                <div className="tv-card-motion tv-reveal relative rounded-[2rem] border border-emerald-100 bg-gradient-to-br from-emerald-50 to-white p-7 shadow-2xl shadow-emerald-100/70 backdrop-blur-xl dark:border-emerald-500/20 dark:bg-gradient-to-br dark:from-emerald-950/40 dark:to-slate-900/40 dark:shadow-2xl sm:rounded-[2.5rem] sm:p-10">
                  <div className="mb-6 flex items-center gap-4 border-b border-slate-200 pb-6 dark:border-white/10"><TrendingUp className="h-8 w-8 text-emerald-400" /><h3 className="text-2xl font-black text-slate-950 dark:text-white">{"Trust-First Marketplace Flow"}</h3></div>
                  <p className="mb-6 text-lg text-slate-700 dark:text-slate-300">{"Every service category benefits from transparent scope, visible samples, approved communication, and payment expectations that are easier for teens, clients, and guardians to understand."}</p>
                  <ul className="space-y-4">{[
                    "Skill tags and availability",
                    "Practical tests and verified badges",
                    "Clear deliverables and review steps",
                    "Saved work history for future credibility"
                  ].map((item, idx) => (<li key={idx} className="flex items-start gap-4"><Zap className="mt-1 h-5 w-5 shrink-0 text-emerald-400" /><span className="text-lg text-slate-700 dark:text-slate-300">{item}</span></li>))}</ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative isolate mx-auto my-24 max-w-[1300px] overflow-hidden rounded-[3rem] border border-white/10 bg-[#090e1a] px-6 py-24 shadow-[0_40px_100px_rgba(0,0,0,0.6)] sm:my-32 sm:px-16 sm:py-32">
          <div className="pointer-events-none absolute inset-0"><div className="absolute -left-[20%] top-[10%] h-[600px] w-[600px] rounded-full bg-indigo-600/10 blur-[150px]" /><div className="absolute -right-[20%] bottom-[10%] h-[600px] w-[600px] rounded-full bg-fuchsia-600/10 blur-[150px]" /></div>
          <div className="tv-reveal relative z-10 mx-auto max-w-3xl text-center"><h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl">{"How teens can move from skill to service."}</h2><p className="mt-6 text-xl leading-relaxed text-slate-400">{"Freelancing works better when the service is focused, measurable, and supported by proof of work."}</p></div>
          <div className="relative z-10 mt-16 grid grid-cols-1 gap-6 lg:mt-20 lg:grid-cols-2 lg:gap-12">
            {roadmapSteps.map((step, i) => (<div key={i} className={`tv-card-motion tv-reveal relative overflow-hidden rounded-[2rem] border p-7 backdrop-blur-2xl transition-all hover:z-10 hover:shadow-2xl sm:rounded-[2.5rem] sm:p-12 ${step.theme === 'indigo' ? 'border-indigo-500/20 bg-indigo-950/20' : 'border-fuchsia-500/20 bg-fuchsia-950/20'}`}><div className="flex items-center gap-5 border-b border-white/10 pb-6"><div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${step.theme === 'indigo' ? 'bg-indigo-500/20' : 'bg-fuchsia-500/20'}`}>{step.icon}</div><h3 className="text-3xl font-black text-white">{step.title}</h3></div><ul className="mt-8 flex flex-col gap-6">{step.points.map((point, idx) => (<li key={idx} className="flex items-start gap-4"><div className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${step.theme === 'indigo' ? 'bg-indigo-400' : 'bg-fuchsia-400'}`} /><span className="text-lg leading-relaxed text-slate-300">{point}</span></li>))}</ul></div>))}
          </div>
          <div className="tv-reveal relative z-10 mt-12 rounded-[2rem] border border-rose-500/20 bg-rose-950/20 p-10 backdrop-blur-md"><div className="flex flex-col items-start gap-8 sm:flex-row sm:items-center"><div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-rose-500/20 text-rose-400"><AlertTriangle className="h-8 w-8" /></div><div><h4 className="text-2xl font-black text-white">{"Safety Reminder"}</h4><p className="mt-2 text-lg text-slate-400">{"Teen freelancers should avoid off-platform pressure, suspicious easy-money offers, unclear payment promises, and private communication channels that remove protection."}</p></div></div></div>
        </section>

        <section className="relative overflow-hidden bg-gradient-to-t from-[#0f172a] to-[#030712] px-6 py-24 text-center sm:py-32">
          <div className="tv-reveal relative z-10 mx-auto max-w-4xl"><h2 className="text-4xl font-black tracking-tight text-white sm:text-6xl">{"Start with one skill and build real proof."}</h2><p className="mx-auto mt-8 max-w-2xl text-xl leading-relaxed text-slate-400">{"TeenVerseHub is designed to help teenagers grow from early samples into verified, trusted digital service providers."}</p><div className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row"><a href={SITE.appUrl} className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-indigo-500 px-10 py-5 text-lg font-black text-white transition-all hover:bg-indigo-400 hover:shadow-[0_0_40px_rgba(99,102,241,0.4)] active:scale-95 sm:w-auto">{"Join the Platform"}</a><a href={"/guardian-guide"} className="inline-flex w-full items-center justify-center gap-3 rounded-full border border-white/20 bg-white/5 px-10 py-5 text-lg font-bold text-white backdrop-blur-lg transition-colors hover:bg-white/10 sm:w-auto">{"Read Safety Guide"}</a></div></div>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}
