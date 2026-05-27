import {
  AlertTriangle,
  BadgeCheck,
  Briefcase,
  CheckCircle2,
  ShieldCheck,
  TrendingUp,
  Zap,
  ArrowRight,
  FileText
} from 'lucide-react'
import { SITE, buildMetadata } from '../lib/site'
import StructuredData from '../components/StructuredData'
import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'

export const metadata = buildMetadata({
  title: "Payments and Protection | Teen-Safe Payouts and Escrow-Like Workflows",
  description: "Understand TeenVerseHub payment protection, teen-safe payout design, Indian and international payment vision, approval steps, refunds, and dispute handling.",
  path: "/payments-protection",
  keywords: [
    "teen safe payments",
    "freelance payment protection teens",
    "TeenVerseHub platform",
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
  '@type': "WebPage",
  headline: "Payments and Protection | Teen-Safe Payouts and Escrow-Like Workflows",
  name: "Payments and Protection | Teen-Safe Payouts and Escrow-Like Workflows",
  description: "Understand TeenVerseHub payment protection, teen-safe payout design, Indian and international payment vision, approval steps, refunds, and dispute handling.",
  author: { '@type': 'Organization', name: SITE.shortName },
  publisher: { '@type': 'Organization', name: SITE.shortName },
  mainEntityOfPage: `${SITE.baseUrl}/payments-protection`,
}

const pageFeatures = [
  {
    icon: <Briefcase className="h-8 w-8" />,
    title: "Client Pays Platform",
    description: "The client funds the project through approved platform payment rails before work begins, helping reduce unclear payment promises.",
    span: "md:col-span-6",
    glow: "bg-indigo-600/30",
    ring: "ring-indigo-500/20"
  },
  {
    icon: <FileText className="h-8 w-8" />,
    title: "Clear Work Approval",
    description: "The teen submits work against defined deliverables, the client reviews the output, and approval or revision expectations stay visible.",
    span: "md:col-span-6",
    glow: "bg-blue-600/30",
    ring: "ring-blue-500/20"
  },
  {
    icon: <ShieldCheck className="h-8 w-8" />,
    title: "Protected Release",
    description: "Money can be released to a teen wallet, bank, or guardian-aware payout path after approval, with refund and dispute systems when needed.",
    span: "md:col-span-5",
    glow: "bg-emerald-600/30",
    ring: "ring-emerald-500/20"
  },
  {
    icon: <TrendingUp className="h-8 w-8" />,
    title: "India First, Global Next",
    description: "The vision includes Indian payments such as UPI, Cashfree, and Razorpay, plus future international gateways such as Dodo Payments or Stripe-compatible systems.",
    span: "md:col-span-7",
    glow: "bg-fuchsia-600/30",
    ring: "ring-fuchsia-500/20"
  }
]

const roadmapSteps = [
  {
    title: "Project Setup",
    theme: "indigo",
    icon: <Zap className="h-6 w-6 text-indigo-400" />,
    points: [
      "Define scope, deadline, and deliverables",
      "Client funds the project through approved rails",
      "Teen completes work inside clear expectations",
      "Communication stays inside platform systems"
    ]
  },
  {
    title: "Approval and Release",
    theme: "fuchsia",
    icon: <TrendingUp className="h-6 w-6 text-fuchsia-400" />,
    points: [
      "Client reviews submitted work",
      "Revisions or approval are documented",
      "Payment releases through safe payout flow",
      "Disputes and refunds follow platform rules"
    ]
  }
]

export default function PaymentsProtectionPage() {
  return (
    <>
      <StructuredData data={pageSchema} />
      <SiteHeader />

      <main className="tvh-page-shell selection:bg-[#5b245e] selection:text-white">
        <section className="relative isolate flex min-h-[90vh] flex-col items-center justify-center overflow-hidden px-6 pb-20 pt-32">
          <div className="tv-grid-mesh pointer-events-none absolute inset-0 opacity-80" />
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-[100%] bg-indigo-600/20 opacity-70 blur-[120px] tv-orbit" />
          <div className="pointer-events-none absolute right-[-10%] top-[-10%] h-[500px] w-[500px] rounded-[100%] bg-fuchsia-600/20 opacity-60 blur-[100px] tv-orbit [animation-delay:-7s]" />

          <div className="tv-reveal relative z-10 mx-auto max-w-5xl text-center">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white/80 px-5 py-2 text-sm font-bold uppercase tracking-widest text-indigo-700 shadow-xl shadow-indigo-100/70 backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:text-indigo-300 dark:shadow-2xl">
              <BadgeCheck className="h-4 w-4" />
              {"Teen-Safe Payment Layer"}
            </div>
            <h1 className="text-4xl font-black leading-[1.08] tracking-tighter text-slate-950 dark:text-white sm:text-7xl md:text-8xl">
              {"Payment Protection"} <br className="hidden md:block" />
              <span className="bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-emerald-400 bg-clip-text text-transparent">
                {"For Teen Workflows"}
              </span>
            </h1>
            <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-slate-600 dark:text-slate-400 md:text-xl">
              {"TeenVerseHub aims to support safer earning through protected platform payment flows where clients pay through approved systems, work is submitted clearly, approvals are tracked, and payouts can move through teen-safe channels."}
            </p>
            <div className="mt-12 flex w-full flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
              <a href={"/freelance-jobs-for-teens"} className="group relative inline-flex w-full max-w-sm items-center justify-center gap-3 overflow-hidden rounded-full bg-slate-950 px-8 py-4 text-base font-black text-white shadow-xl shadow-slate-300/50 transition-transform hover:scale-105 active:scale-95 dark:bg-white dark:text-slate-950 dark:shadow-none sm:w-auto">
                {"Explore Teen Services"}
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
              <a href={"/safety"} className="inline-flex w-full max-w-sm items-center justify-center gap-3 rounded-full border border-indigo-200 bg-white/70 px-8 py-4 text-base font-bold text-slate-900 shadow-sm backdrop-blur-lg transition-colors hover:bg-white dark:border-white/20 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 dark:hover:text-white sm:w-auto">
                <ShieldCheck className="h-5 w-5" />
                {"Review Safety"}
              </a>
            </div>
          </div>

          <div className="tv-reveal relative z-10 mt-20 grid w-full max-w-4xl grid-cols-1 gap-px overflow-hidden rounded-3xl border border-indigo-100 bg-indigo-100/70 shadow-[0_24px_80px_rgba(79,70,229,0.12)] backdrop-blur-2xl dark:border-white/10 dark:bg-white/10 dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)] sm:mt-24 sm:grid-cols-3">
            {[
              { label: "Client pays", value: "Platform Workflow" },
              { label: "Work submits", value: "Approval Step" },
              { label: "Teen payout", value: "Protected Release" },
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
                {"A safer payment model for young freelancers."}
              </h2>
              <p className="mt-6 text-xl leading-relaxed text-slate-600 dark:text-slate-400">
                {"The payment vision supports Indian and future international workflows while keeping project scope, client approval, refunds, fraud monitoring, and dispute handling visible."}
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
                <h2 className="text-4xl font-black leading-tight tracking-tight text-slate-950 dark:text-white sm:text-5xl">{"Teen earning needs clarity before payout."}</h2>
                <p className="mt-6 text-lg leading-relaxed text-slate-600 dark:text-slate-400">{"TeenVerseHub is designed around payment expectations that are understandable for teens, guardians, and clients: fund the project, submit the work, approve clearly, release safely, and handle disputes fairly."}</p>
              </div>
              <div className="flex flex-col gap-8 lg:col-span-7">
                <div className="tv-card-motion tv-reveal relative rounded-[2rem] border border-indigo-100 bg-gradient-to-br from-indigo-50 to-white p-7 shadow-2xl shadow-indigo-100/70 backdrop-blur-xl dark:border-indigo-500/20 dark:bg-gradient-to-br dark:from-indigo-950/40 dark:to-slate-900/40 dark:shadow-2xl sm:rounded-[2.5rem] sm:p-10">
                  <div className="mb-6 flex items-center gap-4 border-b border-slate-200 pb-6 dark:border-white/10"><Briefcase className="h-8 w-8 text-indigo-400" /><h3 className="text-2xl font-black text-slate-950 dark:text-white">{"Payment Flow"}</h3></div>
                  <ul className="space-y-4">{[
                    "Client pays through platform systems",
                    "Funds are held while work is completed",
                    "Work is submitted for client review",
                    "Payment releases after approval"
                  ].map((item, idx) => (<li key={idx} className="flex items-start gap-4"><CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-indigo-400" /><span className="text-lg text-slate-700 dark:text-slate-300">{item}</span></li>))}</ul>
                </div>
                <div className="tv-card-motion tv-reveal relative rounded-[2rem] border border-emerald-100 bg-gradient-to-br from-emerald-50 to-white p-7 shadow-2xl shadow-emerald-100/70 backdrop-blur-xl dark:border-emerald-500/20 dark:bg-gradient-to-br dark:from-emerald-950/40 dark:to-slate-900/40 dark:shadow-2xl sm:rounded-[2.5rem] sm:p-10">
                  <div className="mb-6 flex items-center gap-4 border-b border-slate-200 pb-6 dark:border-white/10"><TrendingUp className="h-8 w-8 text-emerald-400" /><h3 className="text-2xl font-black text-slate-950 dark:text-white">{"Protection Features"}</h3></div>
                  <p className="mb-6 text-lg text-slate-700 dark:text-slate-300">{"Payments should support real work while reducing fraud, confusion, and pressure on young freelancers."}</p>
                  <ul className="space-y-4">{[
                    "Escrow-like project protection",
                    "Refund and dispute handling",
                    "Fraud monitoring",
                    "Teen wallet or bank payout pathways"
                  ].map((item, idx) => (<li key={idx} className="flex items-start gap-4"><Zap className="mt-1 h-5 w-5 shrink-0 text-emerald-400" /><span className="text-lg text-slate-700 dark:text-slate-300">{item}</span></li>))}</ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative isolate mx-auto my-24 max-w-[1300px] overflow-hidden rounded-[3rem] border border-white/10 bg-[#090e1a] px-6 py-24 shadow-[0_40px_100px_rgba(0,0,0,0.6)] sm:my-32 sm:px-16 sm:py-32">
          <div className="pointer-events-none absolute inset-0"><div className="absolute -left-[20%] top-[10%] h-[600px] w-[600px] rounded-full bg-indigo-600/10 blur-[150px]" /><div className="absolute -right-[20%] bottom-[10%] h-[600px] w-[600px] rounded-full bg-fuchsia-600/10 blur-[150px]" /></div>
          <div className="tv-reveal relative z-10 mx-auto max-w-3xl text-center"><h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl">{"Payment roadmap for safer teen earning."}</h2><p className="mt-6 text-xl leading-relaxed text-slate-400">{"Clear payment steps help make online work safer, more professional, and easier to understand."}</p></div>
          <div className="relative z-10 mt-16 grid grid-cols-1 gap-6 lg:mt-20 lg:grid-cols-2 lg:gap-12">
            {roadmapSteps.map((step, i) => (<div key={i} className={`tv-card-motion tv-reveal relative overflow-hidden rounded-[2rem] border p-7 backdrop-blur-2xl transition-all hover:z-10 hover:shadow-2xl sm:rounded-[2.5rem] sm:p-12 ${step.theme === 'indigo' ? 'border-indigo-500/20 bg-indigo-950/20' : 'border-fuchsia-500/20 bg-fuchsia-950/20'}`}><div className="flex items-center gap-5 border-b border-white/10 pb-6"><div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${step.theme === 'indigo' ? 'bg-indigo-500/20' : 'bg-fuchsia-500/20'}`}>{step.icon}</div><h3 className="text-3xl font-black text-white">{step.title}</h3></div><ul className="mt-8 flex flex-col gap-6">{step.points.map((point, idx) => (<li key={idx} className="flex items-start gap-4"><div className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${step.theme === 'indigo' ? 'bg-indigo-400' : 'bg-fuchsia-400'}`} /><span className="text-lg leading-relaxed text-slate-300">{point}</span></li>))}</ul></div>))}
          </div>
          <div className="tv-reveal relative z-10 mt-12 rounded-[2rem] border border-rose-500/20 bg-rose-950/20 p-10 backdrop-blur-md"><div className="flex flex-col items-start gap-8 sm:flex-row sm:items-center"><div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-rose-500/20 text-rose-400"><AlertTriangle className="h-8 w-8" /></div><div><h4 className="text-2xl font-black text-white">{"Payment Principle"}</h4><p className="mt-2 text-lg text-slate-400">{"Teen-friendly payments should make the work, approval, payout, refund, and dispute path visible before a project starts."}</p></div></div></div>
        </section>

        <section className="relative overflow-hidden bg-gradient-to-t from-[#0f172a] to-[#030712] px-6 py-24 text-center sm:py-32">
          <div className="tv-reveal relative z-10 mx-auto max-w-4xl"><h2 className="text-4xl font-black tracking-tight text-white sm:text-6xl">{"Make teen earning clearer and safer."}</h2><p className="mx-auto mt-8 max-w-2xl text-xl leading-relaxed text-slate-400">{"The payment protection vision helps teens, guardians, and clients understand how money moves from project funding to approval and release."}</p><div className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row"><a href={SITE.appUrl} className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-indigo-500 px-10 py-5 text-lg font-black text-white transition-all hover:bg-indigo-400 hover:shadow-[0_0_40px_rgba(99,102,241,0.4)] active:scale-95 sm:w-auto">{"Open the Platform"}</a><a href={"/guardian-guide"} className="inline-flex w-full items-center justify-center gap-3 rounded-full border border-white/20 bg-white/5 px-10 py-5 text-lg font-bold text-white backdrop-blur-lg transition-colors hover:bg-white/10 sm:w-auto">{"Guardian Guide"}</a></div></div>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}
