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
    'Find safer freelance jobs for teens and students, build a portfolio, gain real project experience, and learn how to earn through digital skills with clearer platform guardrails.',
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
    icon: Award,
    title: 'Build proof, not just a profile',
    description:
      'The goal is to turn early skills into visible portfolio pieces, repeatable client work, and real confidence.',
  },
  {
    icon: ShieldCheck,
    title: 'Work inside clearer rules',
    description:
      'TeenVerse Hub is meant to feel more structured than random online job boards or generic platforms built mainly for adults.',
  },
  {
    icon: DollarSign,
    title: 'Learn how paid work actually works',
    description:
      'Freelancing is not just about earning. It is also about scope, approvals, revisions, communication, and professional habits.',
  },
]

const skillCards = [
  {
    icon: Video,
    title: 'Video editing',
    description: 'Great for teens who already make reels, shorts, gaming edits, or creator clips.',
  },
  {
    icon: PenTool,
    title: 'Writing and captions',
    description: 'A strong first category for students who can research, write, and explain ideas clearly.',
  },
  {
    icon: Layout,
    title: 'Design basics',
    description: 'Useful for social graphics, thumbnails, decks, posters, and starter brand assets.',
  },
  {
    icon: TrendingUp,
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
      <Hero
        eyebrow="For teen freelancers and students"
        title="Start freelancing with a platform built around first work experience, not chaos."
        description="TeenVerse Hub is designed for teenagers and young adults who want safer online work, stronger portfolios, and real digital experience through structured freelance opportunities."
        primaryAction={{ href: SITE.appUrl, label: 'Create Your Profile' }}
        secondaryAction={{ href: '/guardian-guide', label: 'Show the guardian guide' }}
        proof={[
          'Beginner-friendly digital categories',
          'Trust pages parents can actually review',
          'Built for experience as well as earnings',
        ]}
        image="https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&q=80&w=1400"
        imageAlt="Teen student working on a laptop"
      />

      <Section className="pt-0">
        <SectionHeading
          eyebrow="Why this is different"
          title="Most freelance platforms were not built for your first client."
          description="TeenVerse Hub works better when it explains the rules, shows the trust system, and helps you start with smaller, safer digital work."
        />
        <div className="mt-10">
          <FeatureGrid items={benefits} />
        </div>
      </Section>

      <Section className="bg-white/70">
        <SectionHeading
          eyebrow="Best starter categories"
          title="Choose one clear service and get good at delivering it."
          description="A focused skill makes it easier to build samples, easier to sell your work, and easier for clients to trust what you do."
        />
        <div className="mt-10">
          <FeatureGrid items={skillCards} columns={2} />
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Your path"
          title="Small wins beat vague ambition."
          description="Clear process, proof of work, and safe habits matter more than pretending you already run a full agency."
        />
        <div className="mt-10">
          <ComparisonList items={roadmaps} />
        </div>
      </Section>

      <Section className="bg-white/70">
        <CtaBand
          title="Show the trust pages before anyone worries."
          description="TeenVerse Hub will convert better when teens, parents, and clients can each find the exact page that answers their biggest risk question."
          primaryAction={{ href: '/safety', label: 'Read the safety page' }}
          secondaryAction={{ href: '/payments-protection', label: 'Understand payments' }}
        />
      </Section>
    </MarketingShell>
  )
}
