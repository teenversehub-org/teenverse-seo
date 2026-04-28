export const SITE = {
  name: 'TeenVerse Hub',
  shortName: 'TeenVerseHub',
  baseUrl: 'https://www.teenversehub.in',
  appUrl: 'https://app.teenversehub.in/login',
  parentPortalUrl: 'https://parent.teenversehub.in',
  supportEmail: 'support@teenversehub.in',
  location: 'Mahoba, Uttar Pradesh, India',
  founder: 'Kashif Khan',
  operator: 'Mohd Asif',
  description:
    'TeenVerse Hub is a teen-focused freelance marketplace where young talent can build skills, gain experience, and earn safely while startups hire verified Gen Z talent with clearer trust and payment guardrails.',
}

export function absoluteUrl(path = '/') {
  return new URL(path, SITE.baseUrl).toString()
}

/**
 * @param {{
 *   title: string
 *   description: string
 *   path?: string
 *   keywords?: string[]
 *   type?: import('next').Metadata['openGraph'] extends infer T
 *     ? T extends { type?: infer U }
 *       ? U
 *       : 'website'
 *     : 'website'
 * }} options
 * @returns {import('next').Metadata}
 */
export function buildMetadata({
  title,
  description,
  path = '/',
  keywords = [],
  type = 'website',
}) {
  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      type,
      url: path,
      siteName: SITE.name,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  }
}

export const primaryNav = [
  { href: '/about', label: 'About' },
  { href: '/safety', label: 'Safety' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
]

export const footerGroups = [
  {
    title: 'Platform',
    links: [
      { href: '/', label: 'Home' },
      { href: '/hire-teen-freelancers', label: 'For Startups' },
      { href: '/freelance-jobs-for-teens', label: 'For Teen Freelancers' },
      { href: '/about', label: 'About' },
    ],
  },
  {
    title: 'Trust',
    links: [
      { href: '/safety', label: 'Trust and Safety' },
      { href: '/verification-process', label: 'Verification Process' },
      { href: '/payments-protection', label: 'Payments and Protection' },
      { href: '/guardian-guide', label: 'Parent and Guardian Guide' },
    ],
  },
  {
    title: 'Support',
    links: [
      { href: '/faq', label: 'FAQ' },
      { href: '/contact', label: 'Contact' },
      { href: '/legal', label: 'Legal Center' },
      { href: `mailto:${SITE.supportEmail}`, label: SITE.supportEmail },
    ],
  },
]

export const faqItems = [
  {
    question: 'Is TeenVerse Hub safe for teenagers?',
    answer:
      'TeenVerse Hub is designed around age-aware onboarding, platform messaging, restricted work categories, payment controls, and visible trust documentation so teenagers, clients, and guardians understand how the marketplace is meant to work.',
  },
  {
    question: 'Who can join TeenVerse Hub?',
    answer:
      'TeenVerse Hub is designed for teenagers and young adults ages 14 to 21, plus startups and clients who want to hire emerging digital talent. Additional consent, verification, or payment rules may apply for users under 18.',
  },
  {
    question: 'Can beginners use TeenVerse Hub?',
    answer:
      'Yes. The platform is positioned around first work experience, portfolio building, skill growth, and beginner-friendly digital services such as editing, design, writing, social support, and research.',
  },
  {
    question: 'How do payments work?',
    answer:
      'TeenVerse Hub frames payments through protected platform flows and third-party payment partners. The goal is to keep work, approvals, and payout expectations clear instead of pushing users into off-platform payment arrangements.',
  },
  {
    question: 'What can startups hire teen talent for?',
    answer:
      'Common use cases include short-form video editing, content writing, social media support, research, design assistance, and other digital tasks where young creators can deliver value while building experience.',
  },
  {
    question: 'What should parents or guardians look at first?',
    answer:
      'The best starting points are the Trust and Safety page, Verification Process page, Payments and Protection page, and the Parent and Guardian Guide. Those pages explain the platform rules, visibility, and reporting paths.',
  },
]
