import SeoGrowthPage from '../components/SeoGrowthPage'
import { SITE, buildMetadata } from '../lib/site'

export const metadata = buildMetadata({
  title: 'AI Tools for Teen Freelancers | Safer AI-Assisted Digital Work',
  description:
    'Learn how teen freelancers can use AI tools responsibly for research, design, writing, content planning, and portfolio samples with TeenVerseHub safety expectations.',
  path: '/ai-tools-for-teen-freelancers',
  keywords: [
    'AI tools for teen freelancers',
    'AI for teenagers',
    'teen AI freelancing',
    'AI assisted teen work',
    'TeenVerseHub AI tools',
    'safe AI tools for students',
  ],
})

const schema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  headline: 'AI Tools for Teen Freelancers | Safer AI-Assisted Digital Work',
  description:
    'A TeenVerseHub guide to responsible AI-assisted workflows for teen freelancers, students, creators, and beginner digital workers.',
  author: { '@type': 'Organization', name: SITE.shortName },
  publisher: { '@type': 'Organization', name: SITE.shortName },
  mainEntityOfPage: `${SITE.baseUrl}/ai-tools-for-teen-freelancers`,
}

export default function AiToolsForTeenFreelancersPage() {
  return (
    <SeoGrowthPage
      schema={schema}
      eyebrow="AI assisted work"
      title="AI tools for teen freelancers"
      accent="with responsibility built in."
      description="AI can help teenagers draft, research, edit, plan, and prototype faster, but TeenVerseHub frames AI as assisted work: teens still need judgment, originality, honesty, and safe project boundaries."
      primaryKeyword="AI tools for teen freelancers"
      sections={[
        {
          icon: 'wand',
          title: 'Creative acceleration',
          text: 'Teens can use AI for thumbnail ideas, captions, outlines, moodboards, prompt drafts, and content variations while keeping the final work reviewed and human.',
        },
        {
          icon: 'fileSearch',
          title: 'Research support',
          text: 'AI can organize notes, summarize source material, create checklists, and structure drafts, but facts and client-specific details still need verification.',
        },
        {
          icon: 'shield',
          title: 'Safety and honesty',
          text: 'Responsible AI use means no plagiarism, no fake portfolio claims, no unsafe content, no private-data sharing, and clear disclosure when AI materially assists the work.',
        },
      ]}
      checklist={[
        'Use AI to support thinking, not replace proof of skill',
        'Verify facts, links, claims, and client-specific details',
        'Avoid uploading private or sensitive information into tools',
        'Show original portfolio samples and explain the workflow honestly',
      ]}
      relatedLinks={[
        { href: '/teen-digital-skills', label: 'Teen digital skills' },
        { href: '/teen-portfolio-builder', label: 'Portfolio builder' },
        { href: '/safe-online-jobs-for-teens', label: 'Safe online jobs' },
        { href: '/legal', label: 'Legal center' },
      ]}
    />
  )
}
