import {
  AlertTriangle,
  BadgeCheck,
  Briefcase,
  CheckCircle2,
  ShieldCheck,
  TrendingUp,
  Zap,
  ArrowRight,
  MousePointerClick,
  FileText,
  Lock,
  DollarSign,
  UserCheck,
  Scale,
  Gavel,
  CheckCircle,
} from 'lucide-react'

import { SITE, buildMetadata } from '../lib/site'
import StructuredData from '../components/StructuredData'
import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'

export const metadata = buildMetadata({
  title: 'TeenVerseHub Legal Center | Terms, Privacy, Guardian Consent, Verification, Fees, and Disputes',
  description:
    'Review TeenVerseHub legal information including terms of service, privacy policy, guardian agreement, identity verification, fees, payment rules, dispute resolution, and intellectual property.',
  path: '/legal',
  keywords: [
    'TeenVerseHub legal',
    'TeenVerseHub terms',
    'TeenVerseHub privacy policy',
    'TeenVerseHub guardian agreement',
    'TeenVerseHub verification',
    'TeenVerseHub fees',
    'TeenVerseHub dispute resolution',
    'TeenVerseHub payments',
    'teen platform terms privacy',
    'teen online safety',
    'minor protection platform',
    'TeenVerse Hub',
    'teen freelancing platform India',
    'safe online jobs for teens',
    'student earning platform',
  ],
})

const pageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  headline:
    'TeenVerseHub Legal Center | Terms, Privacy, Guardian Consent, Verification, Fees, and Disputes',
  name: 'TeenVerseHub Legal Center | Terms, Privacy, Guardian Consent, Verification, Fees, and Disputes',
  description:
    'Review TeenVerseHub legal information including terms, privacy, guardian consent, verification, fees, payments, disputes, and intellectual property.',
  author: {
    '@type': 'Organization',
    name: SITE.shortName,
  },
  publisher: {
    '@type': 'Organization',
    name: SITE.shortName,
  },
  mainEntityOfPage: `${SITE.baseUrl}/legal`,
}

const pageFeatures = [
  {
    icon: <ShieldCheck className="h-8 w-8" />,
    title: 'Guardian Consent Flow',
    description:
      'TeenVerseHub legal policies explain how users aged 14–17 may participate only under a verified parent or legal guardian account, with payments processed to the guardian financial account.',
    span: 'md:col-span-7',
    glow: 'bg-emerald-600/30',
    ring: 'ring-emerald-500/20',
  },
  {
    icon: <AlertTriangle className="h-8 w-8" />,
    title: 'Platform Rules and Prohibited Activity',
    description:
      'The rules restrict unsafe activity such as payment circumvention, illegal services, adult content, gambling, academic dishonesty, and off-platform misuse.',
    span: 'md:col-span-5',
    glow: 'bg-rose-600/30',
    ring: 'ring-rose-500/20',
  },
  {
    icon: <BadgeCheck className="h-8 w-8" />,
    title: 'Identity and Verification',
    description:
      'Verification policies explain DigiLocker consent, guardian verification for minors, purpose-limited verification, document references, retention, and audit logs.',
    span: 'md:col-span-5',
    glow: 'bg-indigo-600/30',
    ring: 'ring-indigo-500/20',
  },
  {
    icon: <MousePointerClick className="h-8 w-8" />,
    title: 'Privacy, Payments, and Disputes',
    description:
      'The Legal Center covers privacy, platform fees, payment settlement rules, chargebacks, refund eligibility, dispute handling, and intellectual property transfer.',
    span: 'md:col-span-7',
    glow: 'bg-amber-600/30',
    ring: 'ring-amber-500/20',
  },
]

const roadmapSteps = [
  {
    title: 'Consent and Identity',
    theme: 'indigo',
    icon: <Zap className="h-6 w-6 text-indigo-400" />,
    points: [
      'Users aged 14–17 participate through a parent or legal guardian account',
      'Guardian documents are used for verification and payout eligibility where required',
      'DigiLocker access requires explicit user action and consent',
      'Verification records are retained only as required for legal, accounting, or regulatory purposes',
    ],
  },
  {
    title: 'Rules and Protection',
    theme: 'fuchsia',
    icon: <TrendingUp className="h-6 w-6 text-fuchsia-400" />,
    points: [
      'Users must not bypass the payment system',
      'Users must not post illegal, abusive, or sexually explicit content',
      'Disputes may be reviewed through dashboard tickets and evidence',
      'Refunds are processed through the payment gateway according to applicable policies',
    ],
  },
]

const legalDocuments = [
  {
    id: 'terms',
    title: 'Terms of Service',
    icon: <FileText className="h-7 w-7" />,
    intro:
      'These Terms explain the platform relationship between TeenVerseHub, freelancers, clients, guardians, and users.',
    sections: [
      {
        heading: 'Effective Date',
        body: 'January 1, 2026',
      },
      {
        heading: '1. Intermediary Status',
        body: 'TeenVerseHub operates solely as a technology intermediary connecting Freelancers and Clients. TeenVerseHub is not an employer, recruiting agency, or contracting agent. TeenVerseHub does not control, supervise, or guarantee the quality of work delivered by Freelancers.',
      },
      {
        heading: 'Important Note',
        body: 'TeenVerseHub does not determine pricing, scope, or delivery of services between Clients and Freelancers. TeenVerseHub does not guarantee job availability, earnings, or client engagement.',
      },
      {
        heading: '2. Eligibility and Account Security',
        list: [
          'TeenVerseHub accounts may only be created by individuals aged 18 or above.',
          'Users aged 14–17 may participate only under a verified parent or legal guardian account.',
          'All payments for users aged 14–17 are processed to the guardian financial account.',
          'Users are responsible for all activity under their account.',
          'TeenVerseHub is not liable for loss caused by unauthorized account use.',
        ],
      },
      {
        heading: '3. Prohibited Activities',
        body: 'Users agree not to misuse the platform or participate in unsafe, illegal, or prohibited activity.',
        list: [
          'Do not circumvent the payment system, including sharing phone numbers or UPI details to pay offline.',
          'Do not post illegal, abusive, or sexually explicit content.',
          'Do not use the platform for academic dishonesty, including doing homework for others.',
          'Do not offer services involving illegal goods, adult content, gambling, or activity prohibited under Indian law.',
        ],
      },
      {
        heading: '4. Limitation of Liability',
        body: 'TeenVerseHub shall not be liable for indirect, incidental, or consequential damages arising from the use of the platform.',
      },
      {
        heading: '5. Platform Availability',
        body: 'TeenVerseHub does not guarantee uninterrupted or error-free operation of the platform. Maintenance, updates, or technical issues may cause temporary unavailability.',
      },
      {
        heading: '6. Force Majeure',
        body: 'TeenVerseHub shall not be liable for failure or delay caused by events beyond reasonable control including natural disasters, internet outages, or regulatory actions.',
      },
    ],
  },
  {
    id: 'verification',
    title: 'Identity and Verification',
    icon: <CheckCircle className="h-7 w-7" />,
    intro:
      'This section explains how identity verification, DigiLocker consent, guardian verification, and verification records are handled.',
    sections: [
      {
        heading: '1. DigiLocker Consent',
        body: 'By proceeding with verification, the user explicitly consents to TeenVerseHub requesting and accessing government-issued documents such as PAN or Aadhaar XML, where legally permitted, via DigiLocker solely for identity verification and regulatory compliance.',
      },
      {
        heading: 'User-Initiated Access',
        body: 'Access to DigiLocker is initiated only by the user through an explicit verification request. TeenVerseHub does not access documents automatically or without user action.',
      },
      {
        heading: 'Aadhaar and Biometric Data',
        body: 'TeenVerseHub does not store Aadhaar numbers or biometric information. Only document references and verification status are stored.',
      },
      {
        heading: 'Alternative Verification',
        body: 'Where DigiLocker is unavailable, TeenVerseHub may offer alternative lawful verification methods with equivalent consent protections.',
      },
      {
        heading: '2. Minors and Guardian Verification',
        body: 'Users below the age of 18 are required to complete verification through their parent or legal guardian. TeenVerseHub does not access or verify government documents of minors directly. Only guardian documents are used for verification and payout eligibility.',
      },
      {
        heading: '3. Purpose-Limited Use',
        body: 'Verification is performed only when required for financial actions such as payouts or paid engagements. TeenVerseHub does not perform identity verification at the time of signup.',
      },
      {
        heading: '4. Data Retention and Audits',
        body: 'Verification records are retained only as long as required for legal, accounting, or regulatory purposes. Users may request deletion of their data where permitted by law. All verification access is logged with timestamps for audit and compliance purposes.',
      },
      {
        heading: 'Verification Notice',
        body: 'Verification confirms identity and eligibility for payouts and does not constitute endorsement, certification, or employment by TeenVerseHub.',
      },
    ],
  },
  {
    id: 'privacy',
    title: 'Privacy Policy',
    icon: <Lock className="h-7 w-7" />,
    intro:
      'TeenVerseHub respects user privacy and explains how personal data, KYC data, financial data, and retention are handled.',
    sections: [
      {
        heading: 'Privacy Commitment',
        body: 'TeenVerseHub respects user privacy. This policy outlines how data is handled in compliance with the Digital Personal Data Protection Act, 2023 in India.',
      },
      {
        heading: '1. Data Collection',
        list: [
          'Personal data may include name, email, phone, and date of birth for age verification.',
          'KYC data may include government-issued documents voluntarily shared by the user via DigiLocker for identity verification.',
          'Financial data may include bank account or UPI details for payouts.',
        ],
      },
      {
        heading: '2. Data Usage and Minors',
        body: 'TeenVerseHub strictly limits the visibility of creator data. Clients only see first name, skills, and portfolio. TeenVerseHub does not sell data to third-party advertisers.',
      },
      {
        heading: '3. Data Retention',
        body: 'TeenVerseHub retains account data for as long as the account is active. Upon deletion request, data is removed within 30 days, except where retention is required by law, such as transaction logs for tax audits.',
      },
    ],
  },
{
  id: 'fees',
  title: 'Fees and Payments',
  icon: <DollarSign className="h-7 w-7" />,
  intro:
    'This section explains TeenVerseHub platform fees, plan-based deductions, settlement, chargebacks, tax liability, and GST status.',
  sections: [
    {
      heading: '1. Platform Fees',
      body: 'TeenVerseHub charges a platform fee on successful transactions. For users on the Basic Plan, the platform fee is 10% of the project amount. Users on higher or upgraded plans may receive reduced platform deductions according to the plan active on their account at the time of the transaction.',
    },
    {
      heading: 'Plan-Based Deduction',
      body: 'The exact deduction may vary depending on the user plan, subscription status, promotional offer, or pricing rules shown inside the TeenVerseHub platform. The applicable platform fee will be displayed before or during the transaction wherever required.',
    },
    {
      heading: 'Revenue Limitation',
      body: 'TeenVerseHub revenue is limited to its platform facilitation fee and any applicable plan or subscription charges. TeenVerseHub does not guarantee job availability, earnings, or client engagement.',
    },
    {
      heading: 'Basic Plan Example',
      list: [
        'Project Cost: ₹1,000',
        'TeenVerseHub Basic Plan Fee at 10%: ₹100',
        'Freelancer Receives: ₹900 before any applicable payment gateway charges or taxes',
      ],
    },
    {
      heading: 'Reduced Fee Example',
      body: 'If a user is on a plan with a lower platform deduction than the Basic Plan, the freelancer payout will be calculated according to that plan’s applicable fee rate. For example, if a higher plan offers a lower deduction, the final amount received by the freelancer will be higher than the Basic Plan payout for the same project value.',
    },
    {
      heading: '2. Settlement Policy',
      body: 'All payments are processed and held by the payment gateway partner in accordance with their settlement and escrow-like mechanisms. TeenVerseHub does not hold or store customer funds. If a Client does not respond within 7 days of submission, the payment gateway may release funds to the Freelancer according to its settlement and dispute policies.',
    },
    {
      heading: '3. Chargebacks and Payment Disputes',
      body: 'If a payment is reversed due to a bank dispute or chargeback initiated by a Client, TeenVerseHub reserves the right to recover the corresponding amount from the freelancer balance.',
    },
    {
      heading: '4. Tax Liability and TDS',
      body: 'Freelancers are solely responsible for reporting income and paying applicable taxes. TeenVerseHub does not deduct TDS at present. TeenVerseHub does not act as an e-commerce operator for tax collection at source unless mandated under applicable law.',
    },
    {
      heading: '5. GST Status',
      body: 'TeenVerseHub is currently not registered under the Goods and Services Tax Act. If registration becomes mandatory under Indian law, applicable taxes will be charged accordingly.',
    },
  ],
},
  {
    id: 'disputes',
    title: 'Dispute Resolution',
    icon: <Gavel className="h-7 w-7" />,
    intro:
      'This section explains how disagreements, refund eligibility, evidence, and payment gateway dispute handling may work.',
    sections: [
      {
        heading: 'Dispute Handling',
        body: 'In the event of a disagreement between Client and Freelancer, TeenVerseHub encourages mutual resolution. If that fails, TeenVerseHub may assist in facilitating dispute resolution between Clients and Freelancers.',
      },
      {
        heading: '1. Dispute Resolution Process',
        list: [
          'User raises a dispute ticket via the Dashboard.',
          'Funds are frozen immediately by the payment gateway pending review.',
          'Both parties submit evidence such as chat logs and file deliverables.',
          'TeenVerseHub may assist in facilitating dispute resolution between users based on provided evidence.',
        ],
      },
      {
        heading: 'Legal Resolution',
        body: 'The final legal resolution remains subject to applicable laws and courts. Any formal legal dispute shall be conducted in accordance with applicable Indian law.',
      },
      {
        heading: '2. Refund Eligibility',
        body: 'Refunds, if applicable, are processed through the payment gateway according to their refund and settlement policies.',
        list: [
          'Full refund may apply if the Freelancer delivered nothing or missed a strict deadline.',
          'Partial refund may apply if work was delivered but incomplete or low quality.',
          'No refund may apply if the Client changes their mind after work has already been completed according to specifications.',
        ],
      },
    ],
  },
  {
    id: 'guardian',
    title: 'Parent / Guardian Agreement',
    icon: <UserCheck className="h-7 w-7" />,
    intro:
      'This section explains the responsibilities of a parent or legal guardian when approving a teen account.',
    sections: [
      {
        heading: 'Critical Notice',
        body: 'By approving an account, the parent or legal guardian legally binds themselves to these terms.',
      },
      {
        heading: '1. Financial Responsibility',
        body: 'As the Guardian, you acknowledge that the financial account linked for withdrawals legally belongs to you or is authorized by you. You are responsible for any tax implications of earnings generated under this account.',
      },
      {
        heading: '2. Supervision',
        body: 'While TeenVerseHub employs safety filters, the Guardian agrees to supervise the account online interactions. TeenVerseHub is not liable for interactions that occur off-platform.',
      },
      {
        heading: '3. Right to Revoke',
        body: 'The Guardian retains the right to revoke consent at any time. Upon revocation, TeenVerseHub will freeze the account and process any pending payouts to the guardian bank account before deletion.',
      },
    ],
  },
  {
    id: 'ip',
    title: 'Intellectual Property',
    icon: <Briefcase className="h-7 w-7" />,
    intro:
      'This section explains ownership transfer and portfolio rights for completed work.',
    sections: [
      {
        heading: '1. Ownership Transfer',
        body: 'Unless otherwise agreed in writing, before payment, the Freelancer retains full copyright and ownership of all work. After payment, upon successful release of funds, full ownership and IP rights transfer exclusively to the Client.',
      },
      {
        heading: '2. Portfolio Rights',
        body: 'Freelancers retain a non-exclusive license to display completed work in their TeenVerseHub portfolio for self-promotion purposes only, unless a Non-Disclosure Agreement was signed.',
      },
    ],
  },
]

const riskAreas = [
  'Fake accounts and suspicious clients',
  'Off-platform pressure and unclear payments',
  'Inappropriate messages or harassment',
  'Payment circumvention attempts',
  'Scam offers promising easy money',
  'Academic dishonesty or prohibited work',
]

const trustSystems = [
  'Guardian account requirement for users aged 14–17',
  'DigiLocker or lawful alternative verification where required',
  'Payment gateway settlement and dispute workflows',
  'Account suspension for prohibited activity',
  'Data retention rules and deletion requests where permitted by law',
  'Legal disclaimer and India-based governing law',
]

export default function LegalPage() {
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
              Trust and Safety Layer
            </div>

            <h1 className="text-4xl font-black leading-[1.08] tracking-tighter text-slate-950 dark:text-white sm:text-7xl md:text-8xl">
              Legal Center <br className="hidden md:block" />
              <span className="bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-emerald-400 bg-clip-text text-transparent">
                For Trust and Compliance
              </span>
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-slate-600 dark:text-slate-400 md:text-xl">
              TeenVerseHub is designed around the reality that many users are
              teenagers, so consent, platform rules, privacy, verification,
              payment clarity, dispute handling, and guardian responsibility
              must be explained clearly instead of hidden in confusing legal
              language.
            </p>

            <div className="mt-12 flex w-full flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
              <a
                href="/guardian-guide"
                className="group relative inline-flex w-full max-w-sm items-center justify-center gap-3 overflow-hidden rounded-full bg-slate-950 px-8 py-4 text-base font-black text-white shadow-xl shadow-slate-300/50 transition-transform hover:scale-105 active:scale-95 dark:bg-white dark:text-slate-950 dark:shadow-none sm:w-auto"
              >
                Guardian Guide
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#official-documents"
                className="inline-flex w-full max-w-sm items-center justify-center gap-3 rounded-full border border-indigo-200 bg-white/70 px-8 py-4 text-base font-bold text-slate-900 shadow-sm backdrop-blur-lg transition-colors hover:bg-white dark:border-white/20 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 dark:hover:text-white sm:w-auto"
              >
                <ShieldCheck className="h-5 w-5" />
                Read Legal Documents
              </a>
            </div>
          </div>

          <div className="tv-reveal relative z-10 mt-20 grid w-full max-w-4xl grid-cols-1 gap-px overflow-hidden rounded-3xl border border-indigo-100 bg-indigo-100/70 shadow-[0_24px_80px_rgba(79,70,229,0.12)] backdrop-blur-2xl dark:border-white/10 dark:bg-white/10 dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)] sm:mt-24 sm:grid-cols-3">
            {[
              { label: 'Consent', value: 'Guardian Terms' },
              { label: 'Protection', value: 'Rules + Disputes' },
              { label: 'Trust', value: 'Privacy + Verification' },
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
                Teen safety requires clear legal systems.
              </h2>
              <p className="mt-6 text-xl leading-relaxed text-slate-600 dark:text-slate-400">
                The Legal Center brings together the rules that matter most for
                a teen-focused digital platform: eligibility, guardian
                responsibility, verification, privacy, payment rules, disputes,
                refunds, and intellectual property.
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

        {/* RISK + TRUST */}
        <section className="relative overflow-hidden border-y border-indigo-100 bg-white/70 px-6 py-24 dark:border-white/5 dark:bg-[#070b14] sm:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-24">
              <div className="tv-reveal lg:sticky lg:top-32 lg:col-span-5 lg:h-max">
                <h2 className="text-4xl font-black leading-tight tracking-tight text-slate-950 dark:text-white sm:text-5xl">
                  Protection has to be built before scale.
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
                  Because TeenVerseHub serves teenagers and digital workers, the
                  platform must treat consent, verification, prohibited conduct,
                  privacy, disputes, payments, and IP ownership as core trust
                  areas.
                </p>
              </div>

              <div className="flex flex-col gap-8 lg:col-span-7">
                <div className="tv-card-motion tv-reveal relative rounded-[2rem] border border-indigo-100 bg-gradient-to-br from-indigo-50 to-white p-7 shadow-2xl shadow-indigo-100/70 backdrop-blur-xl dark:border-indigo-500/20 dark:bg-gradient-to-br dark:from-indigo-950/40 dark:to-slate-900/40 dark:shadow-2xl sm:rounded-[2.5rem] sm:p-10">
                  <div className="mb-6 flex items-center gap-4 border-b border-slate-200 pb-6 dark:border-white/10">
                    <Briefcase className="h-8 w-8 text-indigo-400" />
                    <h3 className="text-2xl font-black text-slate-950 dark:text-white">
                      Risk Areas We Address
                    </h3>
                  </div>

                  <ul className="space-y-4">
                    {riskAreas.map((item, idx) => (
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
                      Trust Systems
                    </h3>
                  </div>

                  <p className="mb-6 text-lg text-slate-700 dark:text-slate-300">
                    A safer platform depends on multiple policies and processes
                    working together, not only warning text on a page.
                  </p>

                  <ul className="space-y-4">
                    {trustSystems.map((item, idx) => (
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
              Safety roadmap for teen work.
            </h2>
            <p className="mt-6 text-xl leading-relaxed text-slate-400">
              The safer the foundation, the more confidently teens, guardians,
              clients, and freelancers can participate.
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
                  Safety Principle
                </h4>
                <p className="mt-2 text-lg text-slate-400">
                  Teen online work should never depend on blind trust. It needs
                  consent, clear terms, privacy rules, dispute workflows,
                  identity controls, and payment clarity.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* OFFICIAL LEGAL DOCUMENTS */}
        <section
          id="official-documents"
          className="relative overflow-hidden px-6 py-24 sm:py-32"
        >
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-4xl text-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-5 py-2 text-sm font-black uppercase tracking-widest text-indigo-700 dark:border-white/10 dark:bg-white/5 dark:text-indigo-300">
                <Scale className="h-4 w-4" />
                Official Legal Documents
              </div>

              <h2 className="text-4xl font-black tracking-tight text-slate-950 dark:text-white sm:text-6xl">
                Terms, privacy, payments, verification, and disputes.
              </h2>

              <p className="mx-auto mt-8 max-w-3xl text-xl leading-relaxed text-slate-600 dark:text-slate-400">
                These sections make the legal center useful for users,
                guardians, clients, and freelancers by explaining the core
                platform rules in one place.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-8">
              {legalDocuments.map((doc, index) => (
                <article
                  key={doc.id}
                  className="overflow-hidden rounded-[2.5rem] border border-indigo-100 bg-white shadow-2xl shadow-indigo-100/50 dark:border-white/10 dark:bg-white/[0.04] dark:shadow-none"
                >
                  <div className="border-b border-indigo-100 bg-gradient-to-br from-indigo-50 to-white p-8 dark:border-white/10 dark:bg-gradient-to-br dark:from-indigo-950/30 dark:to-slate-950/30 sm:p-10">
                    <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
                      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-white dark:bg-white/10">
                        {doc.icon}
                      </div>

                      <div>
                        <div className="text-xs font-black uppercase tracking-[0.25em] text-indigo-600 dark:text-indigo-300">
                          Document {String(index + 1).padStart(2, '0')}
                        </div>

                        <h3 className="mt-2 text-3xl font-black tracking-tight text-slate-950 dark:text-white sm:text-4xl">
                          {doc.title}
                        </h3>

                        <p className="mt-4 max-w-4xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                          {doc.intro}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-6 p-8 sm:p-10 lg:grid-cols-2">
                    {doc.sections.map((section, sectionIndex) => (
                      <div
                        key={sectionIndex}
                        className={`rounded-[2rem] border p-6 ${
                          section.heading.toLowerCase().includes('critical') ||
                          section.heading.toLowerCase().includes('important') ||
                          section.heading.toLowerCase().includes('notice')
                            ? 'border-amber-200 bg-amber-50 dark:border-amber-500/20 dark:bg-amber-950/20'
                            : 'border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-white/[0.03]'
                        }`}
                      >
                        <h4 className="text-xl font-black text-slate-950 dark:text-white">
                          {section.heading}
                        </h4>

                        {section.body && (
                          <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-300">
                            {section.body}
                          </p>
                        )}

                        {section.list && (
                          <ul className="mt-4 space-y-3">
                            {section.list.map((item, itemIndex) => (
                              <li
                                key={itemIndex}
                                className="flex items-start gap-3 text-base leading-relaxed text-slate-600 dark:text-slate-300"
                              >
                                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-indigo-500 dark:text-indigo-300" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* LEGAL DISCLAIMER */}
        <section className="border-y border-indigo-100 bg-white/80 px-6 py-16 dark:border-white/10 dark:bg-[#070b14]">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-8 rounded-[2.5rem] border border-slate-200 bg-slate-50 p-8 dark:border-white/10 dark:bg-white/[0.03] lg:grid-cols-12 lg:p-10">
              <div className="lg:col-span-8">
                <div className="flex items-start gap-5">
                  <Scale className="mt-1 h-8 w-8 shrink-0 text-indigo-600 dark:text-indigo-300" />
                  <div>
                    <h2 className="text-3xl font-black text-slate-950 dark:text-white">
                      Legal Disclaimer
                    </h2>

                    <p className="mt-4 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                      The information provided on this page constitutes a
                      binding agreement between you and TeenVerseHub. However,
                      summaries and examples are for convenience only. In case
                      of any discrepancy, the formal legal text prevails.
                    </p>

                    <p className="mt-4 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                      These Terms shall be governed by and interpreted in
                      accordance with the laws of India. Any disputes shall be
                      subject to the exclusive jurisdiction of the courts located
                      in New Delhi, India.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-[2rem] border border-slate-200 bg-white p-6 font-mono text-sm text-slate-600 dark:border-white/10 dark:bg-slate-950 dark:text-slate-300 lg:col-span-4">
                <p className="font-black text-slate-950 dark:text-white">
                  Legal Entity:
                </p>
                <p className="mt-2">TeenVerseHub Proprietorship</p>
                <p className="mt-2">
                  <strong>Operator:</strong> Mohd Asif
                </p>
                <p className="mt-2">
                  <strong>Location:</strong> Mahoba, Uttar Pradesh, India
                </p>
                <p className="mt-2">
                  <strong>Contact:</strong> support@teenversehub.in
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="relative overflow-hidden bg-gradient-to-t from-[#0f172a] to-[#030712] px-6 py-24 text-center sm:py-32">
          <div className="tv-reveal relative z-10 mx-auto max-w-4xl">
            <h2 className="text-4xl font-black tracking-tight text-white sm:text-6xl">
              Build opportunity on top of safety.
            </h2>

            <p className="mx-auto mt-8 max-w-2xl text-xl leading-relaxed text-slate-400">
              TeenVerseHub is built to help teenagers grow in the digital
              economy while guardians, clients, and platform rules stay part of
              the trust layer.
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