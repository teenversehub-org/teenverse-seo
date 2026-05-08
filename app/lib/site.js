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
  lastUpdated: '2026-05-08',
  description:
    'TeenVerseHub is a secure AI-powered teen talent ecosystem where teenagers can learn digital skills, build portfolios, collaborate with startups, and earn safely through verification, moderation, guardian consent, and structured trust systems.',
}

export function absoluteUrl(path = '/') {
  return new URL(path, SITE.baseUrl).toString()
}

export const indexedPages = [
  {
    path: '/',
    title: 'TeenVerseHub AI-Powered Teen Talent Ecosystem',
    description:
      'TeenVerseHub helps teenagers learn digital skills, build portfolios, collaborate with startups, and earn safely through a verified teen economic ecosystem.',
    priority: 1,
    changeFrequency: 'weekly',
  },
  {
    path: '/hire-teen-freelancers',
    title: 'Hire Verified Teen Freelancers and Student Talent',
    description:
      'Hire teen freelancers for creative, tech, content, gaming, and AI-assisted digital work through portfolios, verification, moderation, and safer payment workflows.',
    priority: 0.95,
    changeFrequency: 'weekly',
  },
  {
    path: '/freelance-jobs-for-teens',
    title: 'Freelance Jobs for Teens and Students',
    description:
      'Explore teen freelance jobs across video editing, design, coding, content, gaming, and AI services with portfolio proof and TeenVerseHub safety systems.',
    priority: 0.95,
    changeFrequency: 'weekly',
  },
  {
    path: '/how-to-earn-money-as-a-teenager',
    title: 'How to Earn Money as a Teenager',
    description:
      'Learn how teenagers can earn money safely through digital skills, verified opportunities, portfolio building, guardian-aware workflows, and protected payments.',
    priority: 0.92,
    changeFrequency: 'weekly',
  },
  {
    path: '/safe-online-jobs-for-teens',
    title: 'Safe Online Jobs for Teens',
    description:
      'Find safer online jobs for teens and learn how guardian consent, KYC, moderation, scam detection, and protected payments reduce risk.',
    priority: 0.9,
    changeFrequency: 'weekly',
  },
  {
    path: '/online-jobs-for-teens',
    title: 'Online Jobs for Teens',
    description:
      'Explore online jobs for teens in creative, tech, content, gaming, social media, and AI-assisted services with verification and safety systems.',
    priority: 0.88,
    changeFrequency: 'weekly',
  },
  {
    path: '/how-to-start-freelancing-as-a-teen',
    title: 'How to Start Freelancing as a Teen',
    description:
      'Learn how teens can start freelancing with one digital skill, portfolio samples, verified profiles, guardian consent, safer payments, and real beginner projects.',
    priority: 0.88,
    changeFrequency: 'weekly',
  },
  {
    path: '/safety',
    title: 'TeenVerseHub Trust and Safety',
    description:
      'See how TeenVerseHub approaches teen safety with guardian consent, KYC, AI moderation, scam detection, reporting, and protected communication.',
    priority: 0.9,
    changeFrequency: 'monthly',
  },
  {
    path: '/verification-process',
    title: 'Verification Process',
    description:
      'Learn how TeenVerseHub verification combines skill tests, portfolio reviews, verified badges, age checks, KYC, and fraud monitoring.',
    priority: 0.8,
    changeFrequency: 'monthly',
  },
  {
    path: '/payments-protection',
    title: 'Payments and Protection',
    description:
      'Understand TeenVerseHub payment protection, teen-safe payout design, Indian and international payment vision, approval steps, refunds, and disputes.',
    priority: 0.8,
    changeFrequency: 'monthly',
  },
  {
    path: '/guardian-guide',
    title: 'Parent and Guardian Guide',
    description:
      'A guardian-friendly guide to TeenVerseHub consent flows, teen accounts, verification, KYC, payments, moderation, and safe online work expectations.',
    priority: 0.8,
    changeFrequency: 'monthly',
  },
  {
    path: '/about',
    title: 'About TeenVerse Hub',
    description:
      'Learn how TeenVerseHub is building a teen-focused economic ecosystem for skills, safe earning, verified portfolios, and startup collaboration.',
    priority: 0.7,
    changeFrequency: 'monthly',
  },
  {
    path: '/faq',
    title: 'Frequently Asked Questions',
    description:
      'Answers about TeenVerseHub teen freelancing, online jobs, guardian consent, KYC, AI moderation, payments, verification, and platform safety.',
    priority: 0.7,
    changeFrequency: 'monthly',
  },
  {
    path: '/contact',
    title: 'Contact TeenVerse Hub',
    description:
      'Contact TeenVerseHub for teen account support, guardian questions, safety concerns, verification, payments, partnerships, and startup hiring.',
    priority: 0.6,
    changeFrequency: 'monthly',
  },
  {
    path: '/legal',
    title: 'Legal Center, Terms, Privacy, and Guardian Policies',
    description:
      'Review TeenVerseHub legal information for terms, privacy, guardian consent, KYC, payment protection, disputes, verification, moderation, and IP rules.',
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
      'TeenVerseHub is designed around guardian consent, age-aware onboarding, KYC where applicable, restricted communication, AI moderation, reporting systems, and protected payment workflows so teens, guardians, and clients can understand the trust model.',
  },
  {
    question: 'Who can join TeenVerse Hub?',
    answer:
      'TeenVerseHub is built for teenagers learning digital skills, plus startups, creators, and clients who want to work with emerging student talent. Users under 18 may need guardian consent, age verification, and additional safety checks before full access.',
  },
  {
    question: 'Can beginners use TeenVerse Hub?',
    answer:
      'Yes. TeenVerseHub is designed for first real work experience, portfolio growth, skill testing, and beginner-friendly services such as video editing, design, writing, frontend tasks, social media support, gaming services, and AI-assisted workflows.',
  },
  {
    question: 'How do payments work?',
    answer:
      'The payment vision is teen-safe and approval-based: the client pays through platform systems, funds are held while work is completed, the client reviews the submission, and payment is released through approved payout paths with dispute handling when needed.',
  },
  {
    question: 'What can startups hire teen talent for?',
    answer:
      'Startups and creators can hire teen talent for creative, tech, content, gaming, and AI-assisted services, including short-form editing, thumbnails, UI support, websites, Discord bots, SEO writing, social media operations, and AI workflow setup.',
  },
  {
    question: 'What should parents or guardians look at first?',
    answer:
      'The best starting points are the Trust and Safety page, Verification Process page, Payments and Protection page, and Parent and Guardian Guide. Those pages explain consent, identity checks, moderation, communication rules, payout protection, and reporting paths.',
  },
]
