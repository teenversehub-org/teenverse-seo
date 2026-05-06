import {
  Award,
  DollarSign,
  Layout,
  PenTool,
  ShieldCheck,
  TrendingUp,
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
  title: 'Freelance Jobs for Teens and Students',
  description:
    'Find safer freelance jobs for teens and students, build a portfolio, gain real project experience, and earn through digital skills with clearer platform guardrails.',
  path: '/freelance-jobs-for-teens',
  keywords: [
    'freelance jobs for teens',
    'safe online jobs for teens',
    'online jobs for students',
    'how to start freelancing as a teen',
    'student freelance platform',
  ],
})

const benefits = [
  {
    icon: <Award />, // THE CURE: JSX element
    title: 'Build proof, not just a profile',
    description:
      'Turn early skills into visible portfolio pieces, repeatable client work, and real confidence.',
  },
  {
    icon: <ShieldCheck />, // THE CURE: JSX element
    title: 'Work inside clearer rules',
    description:
      'TeenVerse Hub is designed to feel more structured than random online job boards or adult-first platforms.',
  },
  {
    icon: <DollarSign />, // THE CURE: JSX element
    title: 'Learn how paid work really works',
    description:
      'Freelancing is not only about earning. It is also about scope, revisions, approvals, and professional habits.',
  },
]

const skillCards = [
  {
    icon: <Video />, // THE CURE: JSX element
    title: 'Video editing',
    description: 'Great for teens who already make reels, shorts, gaming edits, or creator clips.',
  },
  {
    icon: <PenTool />, // THE CURE: JSX element
    title: 'Writing and captions',
    description: 'A strong first category for students who can research, write, and explain ideas clearly.',
  },
  {
    icon: <Layout />, // THE CURE: JSX element
    title: 'Design basics',
    description: 'Useful for social graphics, thumbnails, decks, posters, and starter brand assets.',
  },
  {
    icon: <TrendingUp />, // THE CURE: JSX element
    title: 'Social support',
    description: 'Content repurposing, trend research, posting help, and community support tasks.',
  },
]

const roadmaps = [
  {
    title: 'Your first 30 days',
    points: [
      'Pick one skill category instead of trying to do everything.',
      'Create 3 to 5 sample pieces that show how you think and deliver.',
      'Start with smaller, easier projects that help you build confidence.',
      'Use each job to improve your process, pricing, and communication.',
    ],
  },
  {
    title: 'How to stay safe',
    points: [
      'Read the platform rules before accepting work.',
      'Use on-platform communication and approved payment flows.',
      'Avoid vague jobs, urgent pressure, or requests to move off-platform.',
      'Ask a parent or guardian to review the trust pages if you are under 18.',
    ],
  },
]

export default function FreelanceJobsForTeensPage() {
  return (
    <MarketingShell>
      {/* HERO SECTION - Image kept as requested */}
      <Hero
        eyebrow="For teen freelancers and students"
        title="Start freelancing with a platform built for your first real projects."
        description="TeenVerse Hub helps teenagers and young adults build safer online work, stronger portfolios, and real digital experience without the chaos of random job boards."
        primaryAction={{ href: SITE.appUrl, label: 'Create Your Profile' }}
        secondaryAction={{ href: '/guardian-guide', label: 'Show the guardian guide' }}
        proof={[
          'Beginner-friendly digital categories',
          'Trust pages parents can review',
          'Built for experience and earnings',
        ]}
        image="/graphics/teen-earning-map.png"
        imageAlt="Teen earning map graphic from first skill to first paid digital project"
      />

      <Section className="pt-0">
        <SectionHeading
          eyebrow="Why this is different"
          title="Built for your first client."
          description="TeenVerse Hub works better when it explains the rules, shows the trust system, and helps you start smaller."
        />
        <div className="mt-16">
          <FeatureGrid items={benefits} />
        </div>
      </Section>

      <Section className="border-y border-slate-900/5 bg-slate-50/50 dark:border-white/5 dark:bg-white/[0.02]">
        <SectionHeading
          eyebrow="Best starter categories"
          title="Choose one clear service and get good at delivering it."
          description="A focused skill is easier to package, easier to prove, and easier for clients to trust."
        />
        <div className="mt-16">
          {/* Removed columns={2} to allow the premium fluid grid to handle layout */}
          <FeatureGrid items={skillCards} />
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Your path"
          title="Small wins beat vague ambition."
          description="Clear process, proof of work, and safe habits matter more than pretending you already run an agency."
        />
        <div className="mt-16">
          <ComparisonList items={roadmaps} />
        </div>
      </Section>

      <Section className="pt-0">
        <CtaBand
          title="Show the trust pages early."
          description="TeenVerse Hub will convert better when teens, parents, and clients can each find the exact page that answers their biggest risk question."
          primaryAction={{ href: '/safety', label: 'Read the safety page' }}
          secondaryAction={{ href: '/payments-protection', label: 'Understand payments' }}
        />
      </Section>
    </MarketingShell>
  )
}