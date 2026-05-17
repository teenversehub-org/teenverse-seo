import {
  Code2,
  ShieldCheck,
  Video,
} from 'lucide-react'

import SeoGrowthPage from '../components/SeoGrowthPage'
import { SITE, buildMetadata } from '../lib/site'

export const metadata = buildMetadata({
  title: 'Teen Digital Skills | Skills Teenagers Can Learn and Earn With',
  description:
    'Explore practical teen digital skills such as video editing, design, coding, content writing, AI-assisted workflows, and social media support with TeenVerseHub.',
  path: '/teen-digital-skills',
  keywords: [
    'teen digital skills',
    'digital skills for teenagers',
    'skills teens can earn with',
    'TeenVerseHub skills',
    'teen freelancing skills',
    'student digital skills',
  ],
})

const schema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  headline: 'Teen Digital Skills | Skills Teenagers Can Learn and Earn With',
  description:
    'A TeenVerseHub guide to practical teen digital skills for portfolio building, safe online work, and beginner-friendly earning paths.',
  author: { '@type': 'Organization', name: SITE.shortName },
  publisher: { '@type': 'Organization', name: SITE.shortName },
  mainEntityOfPage: `${SITE.baseUrl}/teen-digital-skills`,
}

export default function TeenDigitalSkillsPage() {
  return (
    <SeoGrowthPage
      schema={schema}
      eyebrow="Skill discovery"
      title="Teen digital skills"
      accent="that can become real proof."
      description="TeenVerseHub helps teenagers move from scattered learning to visible skills: sample work, profile clarity, beginner services, safer project habits, and a path toward real digital experience."
      primaryKeyword="teen digital skills"
      sections={[
        {
          icon: Video,
          title: 'Creative execution',
          text: 'Video editing, thumbnails, captions, short-form content, and creator support are practical first skills because teens can build proof quickly and improve through feedback.',
        },
        {
          icon: Code2,
          title: 'Tech and AI workflows',
          text: 'Simple websites, landing page support, automation ideas, AI-assisted research, and prompt-based workflows help students turn curiosity into marketable output.',
        },
        {
          icon: ShieldCheck,
          title: 'Safe work habits',
          text: 'TeenVerseHub connects skill growth with safer communication, guardian awareness, clear scope, payment clarity, and responsible project boundaries.',
        },
      ]}
      checklist={[
        'Choose one service category before chasing every skill at once',
        'Create portfolio samples even before the first client arrives',
        'Use clear deliverables, deadlines, and revision limits',
        'Keep communication and payment expectations structured',
      ]}
      relatedLinks={[
        { href: '/how-to-earn-money-as-a-teenager', label: 'How teens earn' },
        { href: '/freelance-jobs-for-teens', label: 'Freelance jobs for teens' },
        { href: '/teen-portfolio-builder', label: 'Teen portfolio builder' },
        { href: '/safe-online-jobs-for-teens', label: 'Safe online jobs' },
      ]}
    />
  )
}
