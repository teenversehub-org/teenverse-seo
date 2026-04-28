import {
  Briefcase,
  DollarSign,
  Layout,
  PenTool,
  Search,
  ShieldCheck,
  TrendingUp,
  Users,
  Video,
} from 'lucide-react'

import MarketingShell from '../components/MarketingShell'
import {
  ComparisonList,
  CtaBand,
  FeatureGrid,
  Hero,
  Section,
  SectionHeading,
} from '../components/MarketingPrimitives'
import { SITE, buildMetadata } from '../lib/site'

export const metadata = buildMetadata({
  title: 'Hire Teen Freelancers and Student Talent',
  description:
    'Hire teen freelancers and student talent for content, design, video editing, research, and social support through a marketplace designed around clearer trust and safer workflows.',
  path: '/hire-teen-freelancers',
  keywords: [
    'hire teen freelancers',
    'hire student freelancers',
    'hire teen video editor',
    'hire student content writer',
    'startup talent marketplace',
  ],
})

const valueCards = [
  {
    icon: TrendingUp,
    title: 'Gen Z-native execution',
    description:
      'Young creators are often strongest at short-form editing, social content, trend fluency, and digital-first communication.',
  },
  {
    icon: DollarSign,
    title: 'Lean startup economics',
    description:
      'Teen talent works best for focused deliverables, repeatable content tasks, and early-stage experiments that do not need full agency overhead.',
  },
  {
    icon: ShieldCheck,
    title: 'Clearer trust story',
    description:
      'TeenVerse Hub is framed around safer onboarding, category guardrails, visible policy pages, and more explicit payment expectations than a generic “hire anyone” marketplace.',
  },
]

const categories = [
  {
    icon: Video,
    title: 'Video editing',
    description: 'Short-form clips, creator edits, ad variations, and social-first video tasks.',
  },
  {
    icon: PenTool,
    title: 'Content support',
    description: 'Captions, blog drafts, newsletters, research-backed writing, and repurposing.',
  },
  {
    icon: Layout,
    title: 'Design assistance',
    description: 'Social posts, thumbnails, decks, lightweight brand assets, and layout cleanup.',
  },
  {
    icon: Search,
    title: 'Research help',
    description: 'Competitor scans, lead research, list building, and market snapshots.',
  },
  {
    icon: Users,
    title: 'Community and social',
    description: 'Posting support, moderation basics, trend research, and engagement workflows.',
  },
  {
    icon: Briefcase,
    title: 'Project assistance',
    description: 'Structured digital tasks that let startups move faster without bloating payroll.',
  },
]

const comparisons = [
  {
    title: 'Best client behaviors on TeenVerse Hub',
    points: [
      'Start with a paid pilot instead of a huge undefined brief.',
      'Use task-based scopes with clear approvals and deadlines.',
      'Hire for digital execution where speed and platform-native instincts matter.',
      'Keep payment and communication inside the intended marketplace flow.',
    ],
  },
  {
    title: 'What builds trust faster',
    points: [
      'A real brief, a real budget, and a clear outcome.',
      'Visible policies around payments, reporting, and work categories.',
      'A smaller first task that can turn into repeat work.',
      'Respect for the fact that some freelancers will need guardian-aware support paths.',
    ],
  },
]

export default function HireTeenFreelancersPage() {
  return (
    <MarketingShell>
      <Hero
        eyebrow="For startups, founders, and lean teams"
        title="Hire teen freelancers for digital work that benefits from speed, trend fluency, and fresh eyes."
        description="TeenVerse Hub is designed to help startup teams hire emerging talent more confidently for content, design, editing, research, and social support while keeping trust, payment clarity, and age-aware expectations visible."
        primaryAction={{ href: SITE.appUrl, label: 'Post a Project' }}
        secondaryAction={{ href: '/payments-protection', label: 'Review payments and protection' }}
        proof={[
          'Best for narrow, digital-first deliverables',
          'Trust pages built into the buyer journey',
          'A clearer fit than generic marketplaces for teen talent',
        ]}
        image="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1400"
        imageAlt="Startup team reviewing work together"
      />

      <Section className="pt-0">
        <SectionHeading
          eyebrow="Why startups use it"
          title="The best early use cases are focused, affordable, and easy to review."
          description="Teen talent is strongest when the brief is clear, the workflow is structured, and the task can be delivered digitally without risky ambiguity."
        />
        <div className="mt-10">
          <FeatureGrid items={valueCards} />
        </div>
      </Section>

      <Section className="bg-white/70">
        <SectionHeading
          eyebrow="High-intent categories"
          title="Start with work that is easy to buy and easy to judge."
          description="That makes conversion smoother for clients and helps TeenVerse Hub rank for service-specific commercial intent over time."
        />
        <div className="mt-10">
          <FeatureGrid items={categories} />
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Client workflow"
          title="How to hire teen talent safely and productively"
          description="A good first hiring experience should reduce uncertainty, not create more of it."
        />
        <div className="mt-10">
          <ComparisonList items={comparisons} />
        </div>
      </Section>

      <Section className="bg-white/70">
        <CtaBand
          title="Want better trust before the first hire?"
          description="Review the safety model, verification process, and guardian guide before you ask cautious buyers to create an account. Those pages do real conversion work on a marketplace like this."
          primaryAction={{ href: '/safety', label: 'View trust and safety' }}
          secondaryAction={{ href: '/verification-process', label: 'See the verification process' }}
        />
      </Section>
    </MarketingShell>
  )
}
