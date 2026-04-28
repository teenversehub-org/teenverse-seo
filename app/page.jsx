import {
  Briefcase,
  CheckCircle2,
  Code,
  Layout,
  Lock,
  PenTool,
  Search,
  ShieldCheck,
  TrendingUp,
  Users,
  Video,
} from 'lucide-react'

import MarketingShell from './components/MarketingShell'
import {
  ComparisonList,
  CtaBand,
  FeatureGrid,
  Hero,
  Section,
  SectionHeading,
  StatGrid,
} from './components/MarketingPrimitives'
import StructuredData from './components/StructuredData'
import { SITE, buildMetadata } from './lib/site'

export const metadata = buildMetadata({
  title: 'Safer Teen Freelancing and Startup Hiring',
  description:
    'TeenVerse Hub helps teenagers build real work experience and helps startups hire young digital talent with clearer trust signals, protected payments, and guardian-aware onboarding.',
  path: '/',
  keywords: [
    'teen freelance platform',
    'safe freelance jobs for teens',
    'student freelance marketplace',
    'hire teen freelancers',
    'guardian approved teen jobs',
  ],
})

const pathCards = [
  {
    icon: Briefcase,
    title: 'For startups and clients',
    description:
      'Hire emerging talent for short-form editing, content, research, design support, and social media tasks without the usual trust ambiguity of a brand-new marketplace.',
    link: {
      href: '/hire-teen-freelancers',
      label: 'Explore the hiring path',
    },
  },
  {
    icon: TrendingUp,
    title: 'For teen freelancers',
    description:
      'Build a portfolio, learn client workflows, and earn through beginner-friendly digital services inside a marketplace framed around first experience and skill growth.',
    link: {
      href: '/freelance-jobs-for-teens',
      label: 'Explore the freelancer path',
    },
  },
]

const trustSystem = [
  {
    icon: ShieldCheck,
    title: 'Verification where it matters',
    description:
      'Verification, consent, and eligibility checks can be tied to payouts, protected workflows, and platform access instead of leaving trust assumptions unclear.',
  },
  {
    icon: Lock,
    title: 'Protected payment framing',
    description:
      'Payments are positioned through platform and partner flows so clients and freelancers are not pushed into off-platform improvisation from the first interaction.',
  },
  {
    icon: CheckCircle2,
    title: 'Restricted work categories',
    description:
      'The marketplace should stay focused on safe, digital-first work such as design, editing, writing, research, and social support instead of risky or inappropriate categories.',
  },
  {
    icon: Users,
    title: 'Guardian-aware onboarding',
    description:
      'TeenVerse Hub is built around the reality that users under 18 need clearer safeguards, transparency, and support pathways than generic freelance platforms offer.',
  },
]

const talentCategories = [
  {
    icon: Video,
    title: 'Video editing',
    description:
      'Short-form edits, reels, basic motion graphics, and creator support for startup content pipelines.',
  },
  {
    icon: PenTool,
    title: 'Content writing',
    description:
      'Blog support, research-backed drafts, simple landing page copy, captions, and newsletters.',
  },
  {
    icon: Layout,
    title: 'Design support',
    description:
      'Social graphics, thumbnails, lightweight branding tasks, and presentation cleanup.',
  },
  {
    icon: TrendingUp,
    title: 'Social assistance',
    description:
      'Content repurposing, posting support, trend research, comment workflows, and community basics.',
  },
  {
    icon: Search,
    title: 'Research and ops',
    description:
      'Competitor scans, list building, data gathering, and structured internet research for lean teams.',
  },
  {
    icon: Code,
    title: 'Entry-level tech help',
    description:
      'Simple no-code tasks, QA passes, site updates, and digital project assistance for early teams.',
  },
]

const journeyCards = [
  {
    title: 'How teens use TeenVerse Hub',
    points: [
      'Choose a skill you can deliver clearly and safely.',
      'Build a lightweight profile and portfolio proof.',
      'Start with smaller digital tasks that create repeatable wins.',
      'Learn pricing, communication, and delivery through real work.',
    ],
  },
  {
    title: 'How startups use TeenVerse Hub',
    points: [
      'Pick narrow deliverables rather than broad full-time expectations.',
      'Start with a small paid project or repeatable content task.',
      'Keep communication, approvals, and payments inside clear platform rules.',
      'Use teen talent where speed, trend fluency, and affordability matter.',
    ],
  },
]

const signals = [
  {
    label: 'Marketplace focus',
    value: 'One niche',
    detail: 'Teen talent plus startup demand, not a generic freelancer directory.',
  },
  {
    label: 'Trust model',
    value: 'Two-sided',
    detail: 'Built for teens, clients, and the guardians who need clarity before saying yes.',
  },
  {
    label: 'Core promise',
    value: 'Safer first work',
    detail: 'The message centers on legitimacy, structure, and skill-building.',
  },
  {
    label: 'Conversion path',
    value: 'Segmented',
    detail: 'Visitors choose the startup or teen path quickly instead of decoding the whole business alone.',
  },
]

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE.name,
  url: SITE.baseUrl,
  description: SITE.description,
}

export default function Home() {
  return (
    <>
      <StructuredData data={websiteSchema} />
      <MarketingShell>
        <Hero
          eyebrow="Verified profiles. Protected payments. Guardian-aware onboarding."
          title="The safer freelance marketplace for teen talent and modern startups."
          description="Teenagers build real skills, portfolios, and income. Startups hire emerging digital talent through a clearer trust system built for first work experience, age-aware safeguards, and more structured collaboration."
          primaryAction={{
            href: '/freelance-jobs-for-teens',
            label: 'Start as a Teen Freelancer',
          }}
          secondaryAction={{
            href: '/hire-teen-freelancers',
            label: 'Hire Teen Talent',
          }}
          proof={[
            'Trust and safety pages live',
            'Protected payment framing',
            'Contactable real-world operator details',
          ]}
          image="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1400"
          imageAlt="Students and young creators collaborating on laptops"
        >
          <p className="mt-6 text-sm leading-6 text-slate-500">
            Built in India for teen talent and startup teams who want a marketplace that
            feels credible before the first signup.
          </p>
        </Hero>

        <Section className="pt-0">
          <StatGrid items={signals} />
        </Section>

        <Section>
          <SectionHeading
            eyebrow="Choose your path"
            title="TeenVerse Hub should route people fast, not force them to decode the platform."
            description="Search traffic and direct traffic both convert better when each audience sees their own promise, risks, and next step immediately."
          />
          <div className="mt-10">
            <FeatureGrid items={pathCards} columns={2} />
          </div>
        </Section>

        <Section className="bg-white/70">
          <SectionHeading
            eyebrow="Trust system"
            title="The credibility story has to be operational, not decorative."
            description="TeenVerse Hub will earn trust faster by explaining exactly how the marketplace handles verification, payments, communication, and category boundaries."
          />
          <div className="mt-10">
            <FeatureGrid items={trustSystem} columns={4} />
          </div>
        </Section>

        <Section>
          <SectionHeading
            eyebrow="Popular services"
            title="Start with narrow digital categories that are easy to understand and easy to buy."
            description="That makes ranking easier, onboarding cleaner, and trust friction lower for both startups and first-time freelancers."
          />
          <div className="mt-10">
            <FeatureGrid items={talentCategories} />
          </div>
        </Section>

        <Section className="bg-white/70">
          <SectionHeading
            eyebrow="How it works"
            title="The best first experience is structured for both sides."
            description="Smaller scopes, visible safeguards, and repeatable workflows help a new marketplace feel real much faster than big generic promises."
          />
          <div className="mt-10">
            <ComparisonList items={journeyCards} />
          </div>
        </Section>

        <Section>
          <CtaBand
            title="Build trust before you ask for the signup."
            description="TeenVerse Hub already has the right category angle. The winning move is to make every page feel more credible, more specific, and more useful than a generic freelance marketplace pitch."
            primaryAction={{
              href: '/safety',
              label: 'Review the safety model',
            }}
            secondaryAction={{
              href: '/contact',
              label: 'Contact the team',
            }}
          />
        </Section>
      </MarketingShell>
    </>
  )
}
