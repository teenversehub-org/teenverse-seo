import { SITE, absoluteUrl, indexedPages } from '../lib/site'

export const dynamic = 'force-static'

export function GET() {
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
    '## Key entities',
    `- Brand: ${SITE.name}`,
    `- Founder: ${SITE.founder}`,
    `- Operator: ${SITE.operator}`,
    `- Support: ${SITE.supportEmail}`,
    `- Location: ${SITE.location}`,
    '',
    '## Important topics',
    '- Teen freelance marketplace',
    '- Safe online jobs for teens',
    '- Freelance jobs for teens and students',
    '- Hire teen freelancers and student talent',
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
