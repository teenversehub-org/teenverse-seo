

import {
  Briefcase,
  CheckCircle,
  DollarSign,
  FileText,
  Gavel,
  Lock,
  Scale,
  UserCheck,
  Zap,
} from 'lucide-react'

import MarketingShell from '../components/MarketingShell'
import {
  CtaBand,
  FeatureGrid,
  Hero,
  Section,
  SectionHeading,
} from '../components/MarketingPrimitives'
import StructuredData from '../components/StructuredData'
import { SITE, buildMetadata } from '../lib/site'

export const metadata = buildMetadata({
  title: 'Legal Center, Terms, Privacy, and Guardian Policies',
  description:
    'Review the official TeenVerseHub legal center, including terms of service, identity verification, privacy, fees, disputes, parent or guardian agreement, and IP rights.',
  path: '/legal',
  keywords: [
    'teenversehub legal',
    'teenversehub terms of service',
    'teenversehub privacy policy',
    'teenversehub fees and payments',
    'teenversehub parent guardian agreement',
    'teen freelance platform legal policies',
  ],
})

const legalCards = [
  {
    icon: <FileText />,
    title: 'Terms of Service',
    description: 'The operating rules for eligibility, account responsibility, and prohibited activity.',
    link: { href: '#terms', label: 'Read terms' },
  },
  {
    icon: <CheckCircle />,
    title: 'Identity & Verification',
    description: 'Consent, DigiLocker usage, and guardian verification for minors.',
    link: { href: '#verification', label: 'Read verification' },
  },
  {
    icon: <Lock />,
    title: 'Privacy Policy',
    description: 'How we collect, use, limit visibility of, and retain user and financial data.',
    link: { href: '#privacy', label: 'Read privacy' },
  },
  {
    icon: <DollarSign />,
    title: 'Fees and Payments',
    description: 'Platform fees, settlement policy, and tax responsibility.',
    link: { href: '#fees', label: 'Read payments' },
  },
  {
    icon: <Gavel />,
    title: 'Dispute Resolution',
    description: 'How project disputes, evidence review, and escalation are handled.',
    link: { href: '#disputes', label: 'Read disputes' },
  },
  {
    icon: <UserCheck />,
    title: 'Guardian Agreement',
    description: 'Financial responsibility and supervision for minor accounts.',
    link: { href: '#parent-agreement', label: 'Read guardian terms' },
  },
  {
    icon: <Briefcase />,
    title: 'Intellectual Property',
    description: 'Ownership transfer after payment and portfolio display rights.',
    link: { href: '#ip-rights', label: 'Read IP policy' },
  },
  {
    icon: <Scale />,
    title: 'Legal Entity',
    description: 'Proprietorship details, governing law, and jurisdiction.',
    link: { href: '#legal-disclaimer', label: 'Read entity details' },
  },
]

const documents = [
  {
    id: 'terms',
    title: 'Terms of Service',
    icon: <FileText />,
    kicker: 'Effective Date: January 1, 2026',
    intro: 'Welcome to TeenVerseHub. By accessing or using our platform, you ("User") agree to be bound by these Terms.',
    sections: [
      {
        title: '1. Intermediary Status',
        paragraphs: [
          'TeenVerseHub operates solely as a technology intermediary connecting Freelancers and Clients. We are not an employer, recruiting agency, or contracting agent. We do not control, supervise, or guarantee the quality of work delivered by Freelancers.'
        ],
        note: 'TeenVerseHub does not determine pricing, scope, or delivery of services between Clients and Freelancers. TeenVerseHub does not guarantee job availability, earnings, or client engagement.'
      },
      {
        title: '2. Eligibility & Account Security',
        bullets: [
          'Age Requirement: TeenVerseHub accounts may only be created by individuals aged 18 or above. Users aged 14–17 may participate only under a verified parent or legal guardian account. All payments are processed to the guardian\'s financial account.',
          'Account Responsibility: You are responsible for all activity under your account. TeenVerseHub is not liable for loss caused by unauthorized use of your account.'
        ]
      },
      {
        title: '3. Prohibited Activities',
        paragraphs: ['You agree NOT to:'],
        bullets: [
          'Circumvent our payment system (e.g., sharing phone numbers/UPI to pay offline).',
          'Post illegal, abusive, or sexually explicit content.',
          'Use the platform for academic dishonesty (e.g., doing homework for others).',
          'Offer services involving illegal goods, adult content, gambling, or any activity prohibited under Indian law.'
        ],
        warning: 'Violation may result in suspension or termination of the account. Any remaining funds will be handled according to applicable laws and payment provider policies.'
      },
      {
        title: '4. Limitation of Liability',
        paragraphs: [
          'TeenVerseHub shall not be liable for indirect, incidental, or consequential damages arising from the use of the platform.'
        ]
      },
      {
        title: '5. Platform Availability',
        paragraphs: [
          'TeenVerseHub does not guarantee uninterrupted or error-free operation of the platform. Maintenance, updates, or technical issues may cause temporary unavailability.'
        ]
      },
      {
        title: '6. Force Majeure',
        paragraphs: [
          'TeenVerseHub shall not be liable for failure or delay caused by events beyond reasonable control including natural disasters, internet outages, or regulatory actions.'
        ]
      }
    ]
  },
  {
    id: 'verification',
    title: 'Identity & Verification',
    icon: <CheckCircle />,
    intro: 'This section outlines our strict protocols regarding identity verification and DigiLocker usage.',
    sections: [
      {
        title: '1. DigiLocker Consent',
        paragraphs: [
          'By proceeding with verification, you explicitly consent to TeenVerseHub requesting and accessing your government-issued documents (such as PAN or Aadhaar XML, where legally permitted) via DigiLocker, solely for the purpose of identity verification and regulatory compliance.',
          'Access to DigiLocker is initiated only by the user through an explicit verification request. TeenVerseHub does not access documents automatically or without user action.',
          'TeenVerseHub does not store your Aadhaar number or biometric information. Only document references and verification status are stored.',
          'Where DigiLocker is unavailable, TeenVerseHub may offer alternative lawful verification methods with equivalent consent protections.'
        ]
      },
      {
        title: '2. Minors and Guardian Verification',
        paragraphs: [
          'Users below the age of 18 are required to complete verification through their parent or legal guardian. TeenVerseHub does not access or verify government documents of minors directly. Only guardian documents are used for verification and payout eligibility.'
        ]
      },
      {
        title: '3. Purpose-Limited Use',
        paragraphs: [
          'Verification is performed only when required for financial actions such as payouts or paid engagements. TeenVerseHub does not perform identity verification at the time of signup.'
        ]
      },
      {
        title: '4. Data Retention & Audits',
        paragraphs: [
          'Verification records are retained only as long as required for legal, accounting, or regulatory purposes. Users may request deletion of their data where permitted by law.',
          'All verification access is logged with timestamps for audit and compliance purposes.',
          'Verification confirms identity and eligibility for payouts and does not constitute endorsement, certification, or employment by TeenVerseHub.'
        ]
      }
    ]
  },
  {
    id: 'privacy',
    title: 'Privacy Policy',
    icon: <Lock />,
    intro: 'TeenVerseHub respects your privacy. This policy outlines how we handle your data in compliance with the Digital Personal Data Protection Act, 2023 (India).',
    sections: [
      {
        title: '1. Data Collection',
        bullets: [
          'Personal Data: Name, Email, Phone, Date of Birth (for age verification).',
          'KYC Data: Government-issued documents voluntarily shared by the user via DigiLocker are used for identity verification but strictly adhere to our Identity & Verification policy.',
          'Financial Data: Bank account or UPI details for payouts.'
        ]
      },
      {
        title: '2. Data Usage & Minors',
        paragraphs: [
          "We strictly limit the visibility of creators' data. Clients only see: First Name, Skills, and Portfolio. We strictly NEVER sell data to third-party advertisers."
        ]
      },
      {
        title: '3. Data Retention',
        paragraphs: [
          'We retain account data for as long as the account is active. Upon deletion request, data is removed within 30 days, except where retention is required by law (e.g., transaction logs for tax audits).'
        ]
      }
    ]
  },
  {
    id: 'fees',
    title: 'Fees & Payments',
    icon: <DollarSign />,
    sections: [
      {
        title: '1. Service Fees',
        paragraphs: [
          'TeenVerseHub charges a flat 5% Platform Fee on all successful transactions. The Platform Fee is a facilitation charge and is exclusive of any applicable taxes. TeenVerseHub shall levy such taxes only if and when required under applicable law. All amounts displayed are exclusive of any taxes unless expressly stated otherwise.',
          'TeenVerseHub’s revenue is limited strictly to its platform facilitation fee.'
        ],
        example: [
          'Example: Project Cost ₹1,000',
          'TeenVerse Fee (5%): -₹50',
          'Freelancer Receives: ₹950'
        ]
      },
      {
        title: '2. Settlement Policy',
        paragraphs: [
          'All payments are processed and held by the payment gateway partner in accordance with their settlement and escrow-like mechanisms. TeenVerseHub does not hold or store customer funds. If a Client does not respond within 7 days of submission, the payment gateway may release the funds to the Freelancer according to its settlement and dispute policies.'
        ]
      },
      {
        title: '3. Chargebacks & Payment Disputes',
        paragraphs: [
          "If a payment is reversed due to a bank dispute or chargeback initiated by a Client, TeenVerseHub reserves the right to recover the corresponding amount from the freelancer's balance."
        ]
      },
      {
        title: '4. Tax Liability (TDS)',
        paragraphs: [
          'Freelancers are solely responsible for reporting their income and paying applicable taxes. TeenVerseHub does not deduct TDS at present. TeenVerseHub does not act as an e-commerce operator for the purpose of tax collection at source unless mandated under applicable law.'
        ]
      },
      {
        title: '5. GST Status',
        paragraphs: [
          'TeenVerseHub is currently not registered under the Goods and Services Tax (GST) Act. If registration becomes mandatory under Indian law, applicable taxes will be charged accordingly.'
        ]
      }
    ]
  },
  {
    id: 'disputes',
    title: 'Dispute Resolution',
    icon: <Gavel />,
    intro: 'In the event of a disagreement between Client and Freelancer, TeenVerseHub encourages mutual resolution. If that fails, TeenVerseHub may assist in facilitating dispute resolution between Clients and Freelancers.',
    sections: [
      {
        title: '1. Dispute Resolution Process',
        ordered: [
          'User raises a Dispute ticket via the Dashboard.',
          'Funds are frozen immediately by the payment gateway pending review.',
          'Both parties submit evidence (chat logs, file deliverables).',
          'TeenVerseHub may assist in facilitating dispute resolution between users based on the provided evidence.'
        ],
        paragraphs: [
          'However, the final legal resolution remains subject to applicable laws and courts. Any formal legal dispute shall be conducted in accordance with applicable Indian law.'
        ]
      },
      {
        title: '2. Refund Eligibility',
        paragraphs: [
          'Refunds, if applicable, are processed through the payment gateway according to their refund and settlement policies.'
        ],
        bullets: [
          'Full Refund: If Freelancer delivered nothing or missed a strict deadline.',
          'Partial Refund: If work was delivered but incomplete/low quality.',
          'No Refund: If Client changes their mind after work has already been completed according to specs.'
        ]
      }
    ]
  },
  {
    id: 'parent-agreement',
    title: 'Parent/Guardian Agreement',
    icon: <UserCheck />,
    sections: [
      {
        title: '1. Financial Responsibility',
        warning: 'Critical: By approving an account, you legally bind yourself to these terms.',
        paragraphs: [
          'As the Guardian, you acknowledge that the financial account linked for withdrawals legally belongs to you or is authorized by you. You are responsible for any tax implications of earnings generated under this account.'
        ]
      },
      {
        title: '2. Supervision',
        paragraphs: [
          "While TeenVerseHub employs safety filters, you agree to supervise the account's online interactions. TeenVerseHub is not liable for interactions that occur off-platform."
        ]
      },
      {
        title: '3. Right to Revoke',
        paragraphs: [
          'You retain the absolute right to revoke your consent at any time. Upon revocation, we will freeze the account and process any pending payouts to your bank account before deletion.'
        ]
      }
    ]
  },
  {
    id: 'ip-rights',
    title: 'Intellectual Property (IP)',
    icon: <Briefcase />,
    sections: [
      {
        title: '1. Ownership Transfer',
        paragraphs: ['Unless otherwise agreed in writing:'],
        bullets: [
          'Before Payment: The Freelancer retains full copyright and ownership of all work.',
          'After Payment: Upon successful release of funds, full ownership and IP rights transfer exclusively to the Client.'
        ]
      },
      {
        title: '2. Portfolio Rights',
        paragraphs: [
          'Freelancers retain a non-exclusive license to display the completed work in their TeenVerseHub portfolio for self-promotion purposes only, unless a Non-Disclosure Agreement (NDA) was signed.'
        ]
      }
    ]
  }
]

function LegalBlock({ block }) {
  return (
    <div className="border-t border-slate-200 pt-10 first:border-t-0 first:pt-0 dark:border-white/10">
      <h3 className="text-xl font-bold text-slate-950 dark:text-white">{block.title}</h3>
      {block.paragraphs?.map((p, i) => (
        <p key={i} className="mt-4 text-[0.95rem] leading-[1.8] text-slate-600 dark:text-slate-300">{p}</p>
      ))}
      {block.bullets && (
        <ul className="mt-6 space-y-4 text-[0.95rem] leading-[1.8] text-slate-600 dark:text-slate-300">
          {block.bullets.map((item, i) => (
            <li key={i} className="flex gap-4">
              <Zap className="mt-1 h-4 w-4 shrink-0 text-indigo-500" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
      {block.ordered && (
        <ol className="mt-6 list-decimal space-y-3 pl-6 text-[0.95rem] leading-[1.8] text-slate-600 dark:text-slate-300">
          {block.ordered.map((item, i) => <li key={i}>{item}</li>)}
        </ol>
      )}
      {block.example && (
        <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-6 font-mono text-[0.9rem] text-slate-700 dark:border-white/10 dark:bg-slate-950 dark:text-slate-200">
          {block.example.map((line, i) => <p key={i}>{line}</p>)}
        </div>
      )}
      {block.note && (
        <p className="mt-6 rounded-2xl border border-blue-100 bg-blue-50/50 p-6 text-[0.95rem] leading-[1.8] text-slate-600 dark:border-blue-500/10 dark:bg-blue-500/5 dark:text-slate-300">
          <strong>Note:</strong> {block.note}
        </p>
      )}
      {block.warning && (
        <p className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-6 text-[0.95rem] font-medium text-amber-800 dark:border-amber-500/20 dark:bg-amber-500/10 dark:text-amber-200">
          {block.warning}
        </p>
      )}
    </div>
  )
}

function LegalDocument({ document }) {
  return (
    <article id={document.id} className="scroll-mt-36 overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-sm dark:border-white/10 dark:bg-slate-900">
      <div className="flex flex-col gap-6 border-b border-slate-200 p-8 dark:border-white/10 sm:flex-row sm:items-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-[20px] bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">
          {document.icon}
        </div>
        <div>
          <h2 className="text-2xl font-black tracking-tight text-slate-950 dark:text-white">{document.title}</h2>
          <p className="mt-1 text-sm font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">{document.kicker || 'Official Policy'}</p>
        </div>
      </div>
      <div className="p-8 sm:p-10">
        {document.intro && <p className="text-[1.1rem] leading-[1.8] text-slate-600 dark:text-slate-300">{document.intro}</p>}
        <div className="mt-12 space-y-12">{document.sections.map((b) => <LegalBlock key={b.title} block={b} />)}</div>
      </div>
    </article>
  )
}

export default function LegalPage() {
  return (
    <>
      <StructuredData data={{ '@context': 'https://schema.org', '@type': 'WebPage', name: 'Legal Center' }} />
      <MarketingShell>
        <Hero
          eyebrow="Legal Center"
          title="Official policies for a safer marketplace."
          description="Review the rules that govern platform access, verification, privacy, fees, disputes, and guardian consent."
          primaryAction={{ href: '#terms', label: 'Read Terms' }}
          secondaryAction={{ href: '/contact', label: 'Ask a Question' }}
          proof={['Effective Jan 2026', 'Guardian-aware', 'India-based']}
          image="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1200"
          imageAlt="Legal documents"
        />

        <Section className="pt-0">
          <SectionHeading eyebrow="Index" title="Trust-sensitive policies." description="Find every operating rule you need before joining." />
          <div className="mt-16"><FeatureGrid items={legalCards} /></div>
        </Section>

        <Section className="border-y border-slate-900/5 bg-slate-50/50 dark:border-white/5 dark:bg-white/[0.02]">
          <div className="grid gap-12">{documents.map((d) => <LegalDocument key={d.id} document={d} />)}</div>
        </Section>

        <Section id="legal-disclaimer">
          <div className="mx-auto max-w-[1000px] overflow-hidden rounded-[32px] bg-white/60 p-10 shadow-sm ring-1 ring-slate-900/5 backdrop-blur-2xl dark:bg-white/[0.03] dark:ring-white/10 sm:p-16">
            <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:text-left text-center">
              <div>
                <div className="flex items-center gap-4 justify-center lg:justify-start">
                  <Scale className="h-10 w-10 text-indigo-600" />
                  <h2 className="text-3xl font-black text-slate-950 dark:text-white">Governing Law</h2>
                </div>
                <p className="mt-6 text-slate-600 dark:text-slate-300">Terms are governed by Indian law. Disputes are subject to the jurisdiction of New Delhi, India.</p>
              </div>
              <div className="rounded-3xl bg-slate-50 p-8 dark:bg-white/5">
                <p className="font-black text-slate-950 dark:text-white">Legal Entity</p>
                <p className="mt-2">TeenVerseHub (Proprietorship)</p>
                <p>Operator: Mohd Asif</p>
                <p>Mahoba, Uttar Pradesh</p>
              </div>
            </div>
          </div>
        </Section>

        <Section className="pt-0">
          <CtaBand title="Need clarification?" description="Contact support before beginning paid work." primaryAction={{ href: '/contact', label: 'Contact Support' }} secondaryAction={{ href: '/guardian-guide', label: 'Guardian Guide' }} />
        </Section>
      </MarketingShell>
    </>
  )
}