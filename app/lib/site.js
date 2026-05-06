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
  lastUpdated: '2026-05-04',
  description:
    'TeenVerse Hub is a premium teen-focused freelance marketplace where young talent can build skills, gain experience, and earn safely while startups hire fresh Gen Z talent through a cleaner trust-first workflow.',
}

export function absoluteUrl(path = '/') {
  return new URL(path, SITE.baseUrl).toString()
}

export const indexedPages = [
  {
    path: '/',
    title: 'Teen Freelance Marketplace for Real Experience',
    description:
      'TeenVerse Hub helps teenagers turn digital skills into real work and helps startups hire fresh teen talent through a safer trust-first marketplace.',
    priority: 1,
    changeFrequency: 'weekly',
  },
  {
    path: '/hire-teen-freelancers',
    title: 'Hire Teen Freelancers and Student Talent',
    description:
      'Hire teen freelancers for content, design, video editing, research, and social support through a cleaner startup hiring workflow.',
    priority: 0.95,
    changeFrequency: 'weekly',
  },
  {
    path: '/freelance-jobs-for-teens',
    title: 'Freelance Jobs for Teens and Students',
    description:
      'Find safer freelance jobs for teens, build a portfolio, gain real project experience, and learn digital work through TeenVerse Hub.',
    priority: 0.95,
    changeFrequency: 'weekly',
  },
  {
    path: '/how-to-earn-money-as-a-teenager',
    title: 'How to Earn Money as a Teenager',
    description:
      'A practical guide for teenagers who want to earn money safely through skills, digital services, and beginner-friendly online work.',
    priority: 0.92,
    changeFrequency: 'weekly',
  },
  {
    path: '/safe-online-jobs-for-teens',
    title: 'Safe Online Jobs for Teens',
    description:
      'Learn safer online job options for teens and how to avoid risky work, off-platform payments, and unclear job offers.',
    priority: 0.9,
    changeFrequency: 'weekly',
  },
  {
    path: '/online-jobs-for-teens',
    title: 'Online Jobs for Teens',
    description:
      'Explore digital-first online jobs for teens, including editing, writing, design, research, and social media support.',
    priority: 0.88,
    changeFrequency: 'weekly',
  },
  {
    path: '/how-to-start-freelancing-as-a-teen',
    title: 'How to Start Freelancing as a Teen',
    description:
      'Learn how teens can start freelancing with one clear skill, portfolio proof, safer communication, and better first projects.',
    priority: 0.88,
    changeFrequency: 'weekly',
  },
  {
    path: '/safety',
    title: 'Trust and Safety',
    description:
      'See how TeenVerse Hub frames safety for teens, startups, and guardians through category guardrails and reporting paths.',
    priority: 0.9,
    changeFrequency: 'monthly',
  },
  {
    path: '/verification-process',
    title: 'Verification Process',
    description:
      'Review TeenVerse Hub verification and eligibility framing for teen freelancers, guardians, clients, and payout trust.',
    priority: 0.8,
    changeFrequency: 'monthly',
  },
  {
    path: '/payments-protection',
    title: 'Payments and Protection',
    description:
      'Understand TeenVerse Hub payment protection, approval framing, payout expectations, and marketplace trust signals.',
    priority: 0.8,
    changeFrequency: 'monthly',
  },
  {
    path: '/guardian-guide',
    title: 'Parent and Guardian Guide',
    description:
      'A guardian-friendly guide to TeenVerse Hub safety, consent, trust pages, and teen online work expectations.',
    priority: 0.8,
    changeFrequency: 'monthly',
  },
  {
    path: '/about',
    title: 'About TeenVerse Hub',
    description:
      'Learn what TeenVerse Hub is building and why safer first work experience matters for teen freelancers and startup teams.',
    priority: 0.7,
    changeFrequency: 'monthly',
  },
  {
    path: '/faq',
    title: 'Frequently Asked Questions',
    description:
      'Answers about TeenVerse Hub safety, payments, age rules, beginner freelancing, startup hiring, and guardian visibility.',
    priority: 0.7,
    changeFrequency: 'monthly',
  },
  {
    path: '/contact',
    title: 'Contact TeenVerse Hub',
    description:
      'Contact TeenVerse Hub for support, safety concerns, partnerships, hiring questions, and general platform inquiries.',
    priority: 0.6,
    changeFrequency: 'monthly',
  },
  {
    path: '/legal',
    title: 'Legal Center, Terms, Privacy, and Guardian Policies',
    description:
      'Review TeenVerseHub legal policies, terms, privacy, verification, payments, disputes, guardian agreement, and IP rules.',
    priority: 0.5,
    changeFrequency: 'yearly',
  },
]

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
  const canonicalUrl = absoluteUrl(path)
  const image = {
    url: absoluteUrl('/opengraph-image'),
    width: 1200,
    height: 630,
    alt: `${SITE.name} - safer teen freelancing and startup hiring`,
  }

  return {
    title,
    description,
    keywords,
    applicationName: SITE.name,
    authors: [{ name: SITE.founder }],
    creator: SITE.founder,
    publisher: SITE.name,
    category: 'business',
    classification:
      'Teen freelance marketplace, student talent platform, startup hiring, safer online jobs for teens',
    referrer: 'origin-when-cross-origin',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1,
      },
    },
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      type,
      url: canonicalUrl,
      siteName: SITE.name,
      locale: 'en_IN',
      images: [image],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image.url],
    },
  }
}

export const primaryNav = [
  { href: '/how-to-earn-money-as-a-teenager', label: 'Earn' },
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
    title: 'Earning Guides',
    links: [
      { href: '/how-to-earn-money-as-a-teenager', label: 'How Teens Earn' },
      { href: '/safe-online-jobs-for-teens', label: 'Safe Online Jobs' },
      { href: '/online-jobs-for-teens', label: 'Online Jobs for Teens' },
      { href: '/how-to-start-freelancing-as-a-teen', label: 'Start Freelancing' },
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
      'TeenVerse Hub is designed around age-aware onboarding, clearer work categories, visible trust pages, and safer payment framing so teens, clients, and guardians can understand how the platform is meant to work.',
  },
  {
    question: 'Who can join TeenVerse Hub?',
    answer:
      'TeenVerse Hub is designed for teenagers and young adults ages 14 to 21, plus startups and clients who want to hire emerging digital talent. Additional consent, verification, or payment rules may apply for users under 18.',
  },
  {
    question: 'Can beginners use TeenVerse Hub?',
    answer:
      'Yes. The platform is built around first work experience, portfolio growth, and beginner-friendly digital services like editing, design, writing, social support, and research.',
  },
  {
    question: 'How do payments work?',
    answer:
      'TeenVerse Hub frames payments through protected platform flows and third-party payment partners so work, approvals, and payout expectations stay clear.',
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
