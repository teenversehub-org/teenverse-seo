import {
  AlertTriangle,
  BadgeCheck,
  Briefcase,
  CheckCircle2,
  ShieldCheck,
  TrendingUp,
  Zap,
  ArrowRight,
  Mail,
  MapPin,
  MessageSquare,
  Send,
  MessageCircle,
  HelpCircle,
  Users,
  Handshake,
} from 'lucide-react'

import { SITE, buildMetadata } from '../lib/site'
import StructuredData from '../components/StructuredData'
import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'

export const metadata = buildMetadata({
  title: 'Contact TeenVerseHub | Support, Questions, Partnerships, and Help',
  description:
    'Contact TeenVerseHub for support, teen account questions, guardian questions, safety concerns, partnerships, creator inquiries, and platform help.',
  path: '/contact',
  keywords: [
    'contact TeenVerseHub',
    'TeenVerseHub support',
    'TeenVerseHub contact',
    'TeenVerse Hub help',
    'TeenVerseHub platform',
    'teen platform support',
    'teen freelancing support',
    'safe online jobs for teens',
    'teen digital skills',
    'student earning platform',
    'TeenVerseHub guardian questions',
    'TeenVerseHub partnership',
  ],
})

const pageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  headline: 'Contact TeenVerseHub | Support, Questions, Partnerships, and Help',
  name: 'Contact TeenVerseHub | Support, Questions, Partnerships, and Help',
  description:
    'Contact TeenVerseHub for support, teen account questions, guardian questions, safety concerns, partnerships, creator inquiries, and platform help.',
  author: {
    '@type': 'Organization',
    name: SITE.shortName,
  },
  publisher: {
    '@type': 'Organization',
    name: SITE.shortName,
  },
  mainEntityOfPage: `${SITE.baseUrl}/contact`,
}

const contactCards = [
  {
    icon: <Mail className="h-8 w-8" />,
    title: 'Email Support',
    description:
      'For support, feedback, account questions, platform issues, or general inquiries, email the TeenVerseHub team.',
    value: SITE.supportEmail || 'support@teenversehub.in',
    href: `mailto:${SITE.supportEmail || 'support@teenversehub.in'}`,
    span: 'md:col-span-7',
    glow: 'bg-blue-600/30',
    ring: 'ring-blue-500/20',
  },
  {
    icon: <MapPin className="h-8 w-8" />,
    title: 'Location',
    description:
      'TeenVerseHub is legally operated from Mahoba, Uttar Pradesh, India.',
    value: 'Mahoba, Uttar Pradesh, India',
    href: null,
    span: 'md:col-span-5',
    glow: 'bg-emerald-600/30',
    ring: 'ring-emerald-500/20',
  },
  {
    icon: <MessageCircle className="h-8 w-8" />,
    title: 'Questions and Help',
    description:
      'If you are unsure where to start, read the FAQ first. It explains common TeenVerseHub questions in simple language.',
    value: 'Read FAQ',
    href: '/faq',
    span: 'md:col-span-5',
    glow: 'bg-fuchsia-600/30',
    ring: 'ring-fuchsia-500/20',
  },
  {
    icon: <ShieldCheck className="h-8 w-8" />,
    title: 'Safety Concerns',
    description:
      'For safety-related questions, share clear written details so the team can understand the issue properly.',
    value: 'Safety Guide',
    href: '/safety',
    span: 'md:col-span-7',
    glow: 'bg-amber-600/30',
    ring: 'ring-amber-500/20',
  },
]

const supportTopics = [
  'Teen account and profile questions',
  'Guardian or parent questions',
  'Platform support and feedback',
  'Creator, startup, or partnership inquiries',
  'Safety concerns or unclear activity',
  'Questions about skills, portfolios, and beginner opportunities',
]

const responseTips = [
  'Use a clear subject line',
  'Mention your account email if relevant',
  'Explain the issue in simple words',
  'Add screenshots only if needed',
  'For safety concerns, write URGENT in the subject',
  'Avoid sharing sensitive personal information unless required',
]

const roadmapSteps = [
  {
    title: 'Before You Contact',
    theme: 'indigo',
    icon: <Zap className="h-6 w-6 text-indigo-400" />,
    points: [
      'Check the FAQ for common answers',
      'Write your question clearly',
      'Mention whether you are a teen, guardian, client, or partner',
      'Use the correct support email',
    ],
  },
  {
    title: 'After You Contact',
    theme: 'fuchsia',
    icon: <TrendingUp className="h-6 w-6 text-fuchsia-400" />,
    points: [
      'Wait for the support team response',
      'Keep the conversation professional',
      'Share extra details if the team asks',
      'Do not send repeated messages for the same issue',
    ],
  },
]

const formFields = [
  {
    label: 'Your Name',
    name: 'name',
    type: 'text',
    placeholder: 'Enter your name',
  },
  {
    label: 'Email Address',
    name: 'email',
    type: 'email',
    placeholder: 'you@example.com',
  },
  {
    label: 'Subject',
    name: 'subject',
    type: 'text',
    placeholder: 'How can we help?',
  },
]

export default function ContactPage() {
  const supportEmail = SITE.supportEmail || 'support@teenversehub.in'

  return (
    <>
      <StructuredData data={pageSchema} />
      <SiteHeader />

      <main className="min-h-screen bg-[#f7f9ff] text-slate-950 selection:bg-indigo-200 selection:text-slate-950 transition-colors duration-500 dark:bg-[#030712] dark:text-white dark:selection:bg-indigo-500/30 dark:selection:text-indigo-200">
        {/* HERO */}
        <section className="relative isolate flex min-h-[90vh] flex-col items-center justify-center overflow-hidden px-6 pb-20 pt-32 text-center">
          <div className="tv-grid-mesh pointer-events-none absolute inset-0 opacity-80" />
          <div className="tv-orbit pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-[100%] bg-indigo-600/20 opacity-70 blur-[120px]" />
          <div className="tv-orbit pointer-events-none absolute right-[-10%] top-[-10%] h-[500px] w-[500px] rounded-[100%] bg-fuchsia-600/20 opacity-60 blur-[100px] [animation-delay:-7s]" />

          <div className="tv-reveal relative z-10 mx-auto max-w-5xl">
            <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-indigo-100 text-indigo-600 shadow-2xl shadow-indigo-200 dark:bg-indigo-500/20 dark:text-indigo-300 dark:shadow-indigo-500/20">
              <MessageSquare className="h-11 w-11" />
            </div>

            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white/80 px-5 py-2 text-sm font-bold uppercase tracking-widest text-indigo-700 shadow-xl shadow-indigo-100/70 backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:text-indigo-300 dark:shadow-2xl">
              <BadgeCheck className="h-4 w-4" />
              Support and Contact
            </div>

            <h1 className="text-4xl font-black leading-[1.08] tracking-tighter text-slate-950 dark:text-white sm:text-7xl md:text-8xl">
              Contact <br className="hidden md:block" />
              <span className="bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-emerald-400 bg-clip-text text-transparent">
                TeenVerseHub Support
              </span>
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-slate-600 dark:text-slate-400 md:text-xl">
              Whether you have a question, need help, want to report a concern,
              or want to discuss a partnership, the TeenVerseHub team is here to
              help with clear and responsible support.
            </p>

            <div className="mt-12 flex w-full flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
              <a
                href={`mailto:${supportEmail}`}
                className="group relative inline-flex w-full max-w-sm items-center justify-center gap-3 overflow-hidden rounded-full bg-slate-950 px-8 py-4 text-base font-black text-white shadow-xl shadow-slate-300/50 transition-transform hover:scale-105 active:scale-95 dark:bg-white dark:text-slate-950 dark:shadow-none sm:w-auto"
              >
                Email Support
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="/faq"
                className="inline-flex w-full max-w-sm items-center justify-center gap-3 rounded-full border border-indigo-200 bg-white/70 px-8 py-4 text-base font-bold text-slate-900 shadow-sm backdrop-blur-lg transition-colors hover:bg-white dark:border-white/20 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 dark:hover:text-white sm:w-auto"
              >
                <HelpCircle className="h-5 w-5" />
                Read FAQ
              </a>
            </div>
          </div>

          <div className="tv-reveal relative z-10 mt-20 grid w-full max-w-4xl grid-cols-1 gap-px overflow-hidden rounded-3xl border border-indigo-100 bg-indigo-100/70 shadow-[0_24px_80px_rgba(79,70,229,0.12)] backdrop-blur-2xl dark:border-white/10 dark:bg-white/10 dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)] sm:mt-24 sm:grid-cols-3">
            {[
              { label: 'Support', value: 'Email First' },
              { label: 'Location', value: 'India Based' },
              { label: 'Help', value: 'FAQ + Safety' },
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

        {/* CONTACT CARDS */}
        <section className="relative overflow-hidden px-6 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="tv-reveal max-w-3xl">
              <h2 className="text-4xl font-black tracking-tight text-slate-950 dark:text-white sm:text-5xl">
                Get help through the right support path.
              </h2>

              <p className="mt-6 text-xl leading-relaxed text-slate-600 dark:text-slate-400">
                TeenVerseHub support is for teenagers, guardians, creators,
                clients, and partners who need clear answers about the platform,
                accounts, safety, opportunities, or collaboration.
              </p>
            </div>

            <div className="tv-mobile-depth mt-16 grid grid-cols-1 gap-6 md:mt-20 md:grid-cols-12 md:auto-rows-fr md:gap-8">
              {contactCards.map((card, i) => (
                <div
                  key={i}
                  className={`tv-card-motion tv-reveal group relative z-0 flex min-h-[280px] flex-col overflow-hidden rounded-[2rem] border border-white/70 bg-white/70 p-7 shadow-[0_20px_60px_rgba(79,70,229,0.10)] backdrop-blur-3xl transition-[transform,box-shadow,background-color] duration-500 hover:z-10 hover:bg-white dark:border-white/10 dark:bg-white/[0.03] dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)] dark:hover:bg-white/[0.06] dark:hover:shadow-[0_16px_64px_rgba(0,0,0,0.5)] sm:rounded-[2.5rem] sm:p-10 ${card.span}`}
                >
                  <div
                    className={`pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full blur-[80px] transition-all duration-700 group-hover:scale-150 group-hover:opacity-80 ${card.glow}`}
                  />
                  <div
                    className={`relative z-10 mb-8 inline-flex h-16 w-16 items-center justify-center rounded-3xl border border-white/80 bg-slate-950 text-white shadow-2xl backdrop-blur-xl ring-1 dark:border-white/20 dark:bg-white/10 sm:h-20 sm:w-20 ${card.ring}`}
                  >
                    {card.icon}
                  </div>

                  <h3 className="relative z-10 text-2xl font-black tracking-tight text-slate-950 dark:text-white sm:text-3xl">
                    {card.title}
                  </h3>

                  <p className="relative z-10 mt-6 flex-1 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                    {card.description}
                  </p>

                  {card.href ? (
                    <a
                      href={card.href}
                      className="relative z-10 mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-indigo-600 px-6 py-3 font-black text-white transition-colors hover:bg-indigo-700"
                    >
                      {card.value}
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  ) : (
                    <div className="relative z-10 mt-8 font-mono text-base font-black text-indigo-600 dark:text-indigo-300">
                      {card.value}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT FORM STYLE SECTION */}
        <section className="relative overflow-hidden border-y border-indigo-100 bg-white/70 px-6 py-24 dark:border-white/5 dark:bg-[#070b14] sm:py-32">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-32">
                <h2 className="text-4xl font-black tracking-tight text-slate-950 dark:text-white sm:text-5xl">
                  Send a clear message.
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
                  The fastest way to get useful help is to include clear context:
                  who you are, what page or account the issue is about, and what
                  you need from the TeenVerseHub team.
                </p>

                <div className="mt-10 space-y-6">
                  <div className="rounded-[2rem] border border-indigo-100 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.04]">
                    <div className="flex items-start gap-5">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-indigo-600 dark:bg-white/10 dark:text-indigo-300">
                        <Mail className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-black text-slate-950 dark:text-white">
                          Email Us
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                          For support, feedback, and general inquiries.
                        </p>
                        <a
                          href={`mailto:${supportEmail}`}
                          className="mt-3 block break-all font-mono text-lg font-black text-indigo-600 hover:underline dark:text-indigo-300"
                        >
                          {supportEmail}
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-[2rem] border border-indigo-100 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.04]">
                    <div className="flex items-start gap-5">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-indigo-600 dark:bg-white/10 dark:text-indigo-300">
                        <MapPin className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-black text-slate-950 dark:text-white">
                          Headquarters
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                          TeenVerseHub Proprietorship
                          <br />
                          Mahoba, Uttar Pradesh
                          <br />
                          India
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="relative overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white p-8 shadow-2xl shadow-indigo-100/50 dark:border-white/10 dark:bg-white/[0.04] dark:shadow-none md:p-12">
                <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-indigo-500/10 blur-[80px]" />

                <div className="relative z-10">
                  <h3 className="text-3xl font-black text-slate-950 dark:text-white">
                    Contact Message Format
                  </h3>

                  <p className="mt-4 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                    Use this format when emailing TeenVerseHub support. It keeps
                    your message clear and easier to review.
                  </p>

                  <form
                    action={`mailto:${supportEmail}`}
                    method="post"
                    encType="text/plain"
                    className="mt-8 space-y-6"
                  >
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                      {formFields.slice(0, 2).map((field) => (
                        <div key={field.name} className="space-y-2">
                          <label className="ml-1 text-sm font-bold text-slate-700 dark:text-slate-300">
                            {field.label}
                          </label>
                          <input
                            type={field.type}
                            name={field.name}
                            placeholder={field.placeholder}
                            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 dark:border-white/10 dark:bg-black dark:text-white dark:placeholder:text-slate-600 dark:focus:border-indigo-300 dark:focus:ring-indigo-300"
                          />
                        </div>
                      ))}
                    </div>

                    {formFields.slice(2).map((field) => (
                      <div key={field.name} className="space-y-2">
                        <label className="ml-1 text-sm font-bold text-slate-700 dark:text-slate-300">
                          {field.label}
                        </label>
                        <input
                          type={field.type}
                          name={field.name}
                          placeholder={field.placeholder}
                          className="w-full rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 dark:border-white/10 dark:bg-black dark:text-white dark:placeholder:text-slate-600 dark:focus:border-indigo-300 dark:focus:ring-indigo-300"
                        />
                      </div>
                    ))}

                    <div className="space-y-2">
                      <label className="ml-1 text-sm font-bold text-slate-700 dark:text-slate-300">
                        Message
                      </label>
                      <textarea
                        name="message"
                        rows={6}
                        placeholder="Write your question, issue, or partnership message here..."
                        className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 dark:border-white/10 dark:bg-black dark:text-white dark:placeholder:text-slate-600 dark:focus:border-indigo-300 dark:focus:ring-indigo-300"
                      />
                    </div>

                    <button
                      type="submit"
                      className="inline-flex w-full items-center justify-center gap-3 rounded-xl bg-indigo-600 px-8 py-5 text-sm font-black uppercase tracking-widest text-white shadow-lg shadow-indigo-500/30 transition-all hover:bg-indigo-700 hover:shadow-indigo-500/50"
                    >
                      <Send className="h-5 w-5" />
                      Open Email App
                    </button>
                  </form>

                  <p className="mt-5 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                    This opens your email app with the message details. You can
                    also email us directly at{' '}
                    <a
                      href={`mailto:${supportEmail}`}
                      className="font-bold text-indigo-600 hover:underline dark:text-indigo-300"
                    >
                      {supportEmail}
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SUPPORT TOPICS */}
        <section className="relative overflow-hidden px-6 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-24">
              <div className="tv-reveal lg:sticky lg:top-32 lg:col-span-5 lg:h-max">
                <h2 className="text-4xl font-black leading-tight tracking-tight text-slate-950 dark:text-white sm:text-5xl">
                  Support should understand teens, guardians, and partners.
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
                  TeenVerseHub support is designed for different kinds of
                  questions, from beginner teen profiles to guardian concerns,
                  creator work, and partnership conversations.
                </p>
              </div>

              <div className="flex flex-col gap-8 lg:col-span-7">
                <div className="tv-card-motion tv-reveal relative rounded-[2rem] border border-indigo-100 bg-gradient-to-br from-indigo-50 to-white p-7 shadow-2xl shadow-indigo-100/70 backdrop-blur-xl dark:border-indigo-500/20 dark:bg-gradient-to-br dark:from-indigo-950/40 dark:to-slate-900/40 dark:shadow-2xl sm:rounded-[2.5rem] sm:p-10">
                  <div className="mb-6 flex items-center gap-4 border-b border-slate-200 pb-6 dark:border-white/10">
                    <Briefcase className="h-8 w-8 text-indigo-400" />
                    <h3 className="text-2xl font-black text-slate-950 dark:text-white">
                      Support Topics
                    </h3>
                  </div>

                  <ul className="space-y-4">
                    {supportTopics.map((item, idx) => (
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
                      Helpful Message Tips
                    </h3>
                  </div>

                  <p className="mb-6 text-lg text-slate-700 dark:text-slate-300">
                    Clear written details make support faster and more useful.
                  </p>

                  <ul className="space-y-4">
                    {responseTips.map((item, idx) => (
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
              How to reach the right support path.
            </h2>

            <p className="mt-6 text-xl leading-relaxed text-slate-400">
              Clear categories make support faster and more useful.
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
                  Support Note
                </h4>

                <p className="mt-2 text-lg text-slate-400">
                  For urgent safety concerns, account questions, guardian
                  questions, or platform issues, use clear written details so
                  the support team can review responsibly.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PARTNERSHIP / FINAL CTA */}
        <section className="relative overflow-hidden bg-gradient-to-t from-[#0f172a] to-[#030712] px-6 py-24 text-center sm:py-32">
          <div className="tv-reveal relative z-10 mx-auto max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-black uppercase tracking-widest text-indigo-200">
              <Handshake className="h-4 w-4" />
              Contact TeenVerseHub
            </div>

            <h2 className="text-4xl font-black tracking-tight text-white sm:text-6xl">
              Reach out with clear context.
            </h2>

            <p className="mx-auto mt-8 max-w-2xl text-xl leading-relaxed text-slate-400">
              Contact TeenVerseHub for support, safety questions, account help,
              platform questions, creator inquiries, or partnership
              conversations.
            </p>

            <div className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row">
              <a
                href={`mailto:${supportEmail}`}
                className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-indigo-500 px-10 py-5 text-lg font-black text-white transition-all hover:bg-indigo-400 hover:shadow-[0_0_40px_rgba(99,102,241,0.4)] active:scale-95 sm:w-auto"
              >
                Email Support
              </a>

              <a
                href="/faq"
                className="inline-flex w-full items-center justify-center gap-3 rounded-full border border-white/20 bg-white/5 px-10 py-5 text-lg font-bold text-white backdrop-blur-lg transition-colors hover:bg-white/10 sm:w-auto"
              >
                Read FAQ
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}