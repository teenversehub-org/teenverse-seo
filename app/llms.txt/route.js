import { SITE, absoluteUrl, indexedPages } from '../lib/site'
import { getAllBlogPosts } from '../lib/blog'

export const dynamic = 'force-static'

export function GET() {
  const blogPosts = getAllBlogPosts()
  const lines = [
    `# ${SITE.name}`,
    '',
    `> ${SITE.description}`,
    '',
    'TeenVerse Hub is built for teen freelancers, student creators, startups, clients, and guardians looking for safer first work experience, digital services, protected payment framing, and trust-led marketplace guidance.',
    '',
    '## Core pages',
    ...indexedPages.map((page) => `- [${page.title}](${absoluteUrl(page.path)}): ${page.description}`),
    '',
    '## Blog guides',
    ...blogPosts.map((post) => `- [${post.title}](${absoluteUrl(`/blog/${post.slug}`)}): ${post.description}`),
    '',
    '## Key entities',
    `- Brand: ${SITE.name}`,
    `- Founder: ${SITE.founder}`,
    `- Operator: ${SITE.operator}`,
    `- Support: ${SITE.supportEmail}`,
    `- Location: ${SITE.location}`,
    `- Audience: ${SITE.audience}`,
    `- Age range: ${SITE.audienceAgeRange}`,
    `- Location focus: ${SITE.locationFocus}`,
    '',
    '## Important topics',
    '- Teen freelance marketplace',
    '- Answer engine optimization for TeenVerseHub entity facts',
    '- Safe online jobs for teens',
    '- Freelance jobs for teens and students',
    '- Hire teen freelancers and student talent',
    '- Public creative portfolio discovery',
    '- Video editing for students',
    '- Graphic design gigs under 18',
    '- TeenVerseHub vs Funngro comparison',
    '- Parent guide to safe student freelancing in India',
    '- Guardian-aware onboarding and trust pages',
    '- Verification, payments, protection, and legal policies',
    '',
    `Last updated: ${SITE.lastUpdated}`,
  ]

  return new Response(`${lines.join('\n')}\n`, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  })
}
