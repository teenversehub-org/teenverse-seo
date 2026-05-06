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
    'Hire teen freelancers and student talent for content, design, video editing, research, and social support through a cleaner, trust-first marketplace.',
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
    icon: <TrendingUp />, // THE CURE: JSX element
    title: 'Fresh digital instincts',
    description:
      'Teen talent is especially strong in short-form editing, social content, online culture, and fast digital execution.',
  },
  {
    icon: <DollarSign />, // THE CURE: JSX element
    title: 'Smart startup economics',
    description:
      'This works best for scoped deliverables, repeatable content work, and early experiments that do not need agency overhead.',
  },
  {
    icon: <ShieldCheck />, // THE CURE: JSX element
    title: 'Cleaner trust layer',
    description:
      'TeenVerse Hub uses clearer onboarding, trust pages, category guardrails, and simpler payment framing than a generic hire-anyone marketplace.',
  },
]

const categories = [
  {
    icon: <Video />, // THE CURE: JSX element
    title: 'Video editing',
    description: 'Short-form clips, creator edits, ad variations, and social-first video tasks.',
  },
  {
    icon: <PenTool />, // THE CURE: JSX element
    title: 'Content support',
    description: 'Captions, blog drafts, newsletters, research-backed writing, and repurposing.',
  },
  {
    icon: <Layout />, // THE CURE: JSX element
    title: 'Design assistance',
    description: 'Social posts, thumbnails, decks, lightweight brand assets, and layout cleanup.',
  },
  {
    icon: <Search />, // THE CURE: JSX element
    title: 'Research help',
    description: 'Competitor scans, lead research, list building, and market snapshots.',
  },
  {
    icon: <Users />, // THE CURE: JSX element
    title: 'Community and social',
    description: 'Posting support, moderation basics, trend research, and engagement workflows.',
  },
  {
    icon: <Briefcase />, // THE CURE: JSX element
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
      {/* HERO SECTION - Image Kept as requested */}
      <Hero
        eyebrow="For startups, founders, and lean teams"
        title="Hire teen freelancers for work that needs speed and fresh perspective."
        description="TeenVerse Hub helps startup teams hire young digital talent for content, design, editing, research, and social support through a cleaner trust-first workflow."
        primaryAction={{ href: SITE.appUrl, label: 'Post a Project' }}
        secondaryAction={{ href: '/payments-protection', label: 'Review payments and protection' }}
        proof={[
          'Built for scoped digital work',
          'Trust pages inside the buyer journey',
          'Sharper fit than generic marketplaces',
        ]}
        image="/graphics/startup-hiring-board.png"
        imageAlt="Startup hiring board graphic for teen freelancer categories"
      />

      <Section className="pt-0">
        <SectionHeading
          eyebrow="Business Case"
          title="Focused, affordable, and easy to review."
          description="Teen talent performs best when the brief is clear, the workflow is structured, and the task is digital-first."
        />
        <div className="mt-16">
          <FeatureGrid items={valueCards} />
        </div>
      </Section>

      <Section className="border-y border-slate-900/5 bg-slate-50/50 dark:border-white/5 dark:bg-white/[0.02]">
        <SectionHeading
          eyebrow="High-intent categories"
          title="Start with work that is easy to buy and easy to judge."
          description="That improves conversion for clients and supports stronger service-specific SEO over time."
        />
        <div className="mt-16">
          <FeatureGrid items={categories} />
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Client workflow"
          title="How to hire teen talent with less friction"
          description="A strong first project should feel clear, controlled, and easy to repeat."
        />
        <div className="mt-16">
          <ComparisonList items={comparisons} />
        </div>
      </Section>

      <Section className="pt-0">
        <CtaBand
          title="Trust matters before the first hire."
          description="Review the safety model, verification process, and guardian guide before you ask cautious buyers to commit."
          primaryAction={{ href: '/safety', label: 'View trust and safety' }}
          secondaryAction={{ href: '/verification-process', label: 'See the verification process' }}
        />
      </Section>
    </MarketingShell>
  )
}