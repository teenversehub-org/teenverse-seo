export const SITE = {
  name: 'TeenVerseHub',
  shortName: 'TeenVerseHub',
  baseUrl: 'https://www.teenversehub.in',
  appUrl: 'https://app.teenversehub.in/login',
  parentPortalUrl: 'https://parent.teenversehub.in',
  supportEmail: 'support@teenversehub.in',
  location: 'Mahoba, Uttar Pradesh, India',
  founder: 'Kashif Khan',
  operator: 'Mohd Asif',
  lastUpdated: '2026-05-10',
  description:
    'TeenVerseHub helps students and teenagers build portfolios, learn digital skills, find beginner-friendly projects, and work with startups in a safer online platform.',
}

export function absoluteUrl(path = '/') {
  return new URL(path, SITE.baseUrl).toString()
}

export const indexedPages = [
  {
    path: '/',
    title: 'TeenVerseHub | Teen Freelancing Platform for Students',
    description:
      'TeenVerseHub helps students and teenagers build portfolios, learn digital skills, find beginner-friendly projects, and work with startups in a safer online platform.',
    priority: 1,
    changeFrequency: 'weekly',
  },
  {
    path: '/hire-teen-freelancers',
    title: 'Hire Teen Freelancers and Student Talent',
    description:
      'Hire teen freelancers and student talent for video editing, design, content writing, frontend work, social media support, and startup projects.',
    priority: 0.95,
    changeFrequency: 'weekly',
  },
  {
    path: '/freelance-jobs-for-teens',
    title: 'Freelance Jobs for Teens and Students',
    description:
      'Find beginner-friendly freelance jobs for teens in video editing, design, coding, content writing, AI-assisted work, and social media support.',
    priority: 0.95,
    changeFrequency: 'weekly',
  },
  {
    path: '/how-to-earn-money-as-a-teenager',
    title: 'How to Earn Money as a Teenager',
    description:
      'Learn how teenagers can earn money online by building digital skills, creating a portfolio, finding projects, and working safely with clients.',
    priority: 0.92,
    changeFrequency: 'weekly',
  },
  {
    path: '/safe-online-jobs-for-teens',
    title: 'Safe Online Jobs for Teens',
    description:
      'Explore safer online jobs for teens and learn how guardian consent, verification, safe messaging, reporting, and payment protection can reduce risk.',
    priority: 0.9,
    changeFrequency: 'weekly',
  },
  {
    path: '/online-jobs-for-teens',
    title: 'Online Jobs for Teens',
    description:
      'Explore online jobs for teens in content writing, design, video editing, coding, social media, research, and AI-assisted digital services.',
    priority: 0.88,
    changeFrequency: 'weekly',
  },
  {
    path: '/how-to-start-freelancing-as-a-teen',
    title: 'How to Start Freelancing as a Teen',
    description:
      'Learn how to start freelancing as a teen with one skill, portfolio samples, beginner projects, safe communication, and clear payment steps.',
    priority: 0.88,
    changeFrequency: 'weekly',
  },
  {
    path: '/teen-digital-skills',
    title: 'Digital Skills for Teens',
    description:
      'Learn useful digital skills for teens, including video editing, graphic design, frontend development, content writing, AI tools, and social media support.',
    priority: 0.87,
    changeFrequency: 'weekly',
  },
  {
    path: '/teen-portfolio-builder',
    title: 'Teen Portfolio Builder',
    description:
      'Build a teen portfolio with your skills, sample projects, profile proof, service details, and work examples that startups and clients can understand.',
    priority: 0.86,
    changeFrequency: 'weekly',
  },
  {
    path: '/student-talent-marketplace',
    title: 'Student Talent Marketplace',
    description:
      'TeenVerseHub is a student talent marketplace where startups can find young digital talent and students can showcase skills through portfolios.',
    priority: 0.86,
    changeFrequency: 'weekly',
  },
  {
    path: '/ai-tools-for-teen-freelancers',
    title: 'AI Tools for Teen Freelancers',
    description:
      'Learn how teen freelancers can use AI tools for writing, research, design ideas, content planning, project support, and portfolio building.',
    priority: 0.84,
    changeFrequency: 'weekly',
  },
  {
    path: '/blog',
    title: 'TeenVerseHub Blog',
    description:
      'Read TeenVerseHub guides about teen freelancing, online jobs for students, digital skills, portfolio building, startup hiring, and online safety.',
    priority: 0.86,
    changeFrequency: 'weekly',
  },
  {
    path: '/safety',
    title: 'TeenVerseHub Safety',
    description:
      'Learn how TeenVerseHub supports safer teen freelancing with guardian consent, verification, safe messaging, reporting, moderation, and protected workflows.',
    priority: 0.9,
    changeFrequency: 'monthly',
  },
  {
    path: '/verification-process',
    title: 'TeenVerseHub Verification Process',
    description:
      'Learn how TeenVerseHub uses profile checks, age-aware onboarding, portfolio proof, skill signals, and verification steps to build trust.',
    priority: 0.8,
    changeFrequency: 'monthly',
  },
  {
    path: '/payments-protection',
    title: 'TeenVerseHub Payments and Protection',
    description:
      'Understand how TeenVerseHub plans safer payments, client approvals, payout checks, refund handling, and dispute support for teen work.',
    priority: 0.8,
    changeFrequency: 'monthly',
  },
  {
    path: '/guardian-guide',
    title: 'Parent and Guardian Guide',
    description:
      'A simple guide for parents and guardians about TeenVerseHub accounts, consent, verification, communication safety, payments, and teen online work.',
    priority: 0.8,
    changeFrequency: 'monthly',
  },
  {
    path: '/about',
    title: 'About TeenVerseHub',
    description:
      'Learn why TeenVerseHub was built to help students and teenagers learn digital skills, build portfolios, find projects, and work more safely online.',
    priority: 0.7,
    changeFrequency: 'monthly',
  },
  {
    path: '/faq',
    title: 'TeenVerseHub FAQ',
    description:
      'Find answers about TeenVerseHub, teen freelancing, student projects, guardian consent, verification, payments, safety, and online work.',
    priority: 0.7,
    changeFrequency: 'monthly',
  },
  {
    path: '/contact',
    title: 'Contact TeenVerseHub',
    description:
      'Contact TeenVerseHub for support, teen accounts, parent questions, safety issues, verification help, payment questions, and startup hiring.',
    priority: 0.6,
    changeFrequency: 'monthly',
  },
  {
    path: '/legal',
    title: 'TeenVerseHub Legal Center',
    description:
      'Read TeenVerseHub terms, privacy information, guardian consent details, verification rules, payment policies, safety guidelines, and platform policies.',
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
    alt: `${SITE.name} - teen freelancing platform for students`,
  }

  const defaultKeywords = [
    'TeenVerseHub',
    'teen freelancing platform',
    'freelancing platform for students',
    'student freelancing website',
    'student talent marketplace',
    'teen talent marketplace',
    'online jobs for teens',
    'online jobs for students',
    'safe online jobs for teens',
    'freelance jobs for teens',
    'freelance jobs for students',
    'hire teen freelancers',
    'hire student freelancers',
    'teen portfolio builder',
    'student portfolio builder',
    'digital skills for teens',
    'AI tools for teen freelancers',
    'startup projects for students',
    'teen freelancing India',
    'student work platform India',
  ]

  return {
    title,
    description,
    keywords: [...new Set([...defaultKeywords, ...keywords])],
    applicationName: SITE.name,
    authors: [{ name: SITE.founder }],
    creator: SITE.founder,
    publisher: SITE.name,
    category: 'business',
    classification:
      'Teen freelancing platform, student talent marketplace, online jobs for teens, portfolio builder, startup hiring',
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
  { href: '/hire-teen-freelancers', label: 'Hire' },
  { href: '/freelance-jobs-for-teens', label: 'Projects' },
  { href: '/how-to-earn-money-as-a-teenager', label: 'Earn' },
  { href: '/teen-digital-skills', label: 'Skills' },
  { href: '/safety', label: 'Safety' },
  { href: '/faq', label: 'FAQ' },
]

export const footerGroups = [
  {
    title: 'Platform',
    links: [
      { href: '/', label: 'Home' },
      { href: '/about', label: 'About TeenVerseHub' },
      { href: '/student-talent-marketplace', label: 'Student Talent Marketplace' },
      { href: '/teen-portfolio-builder', label: 'Teen Portfolio Builder' },
      { href: '/blog', label: 'Blog' },
    ],
  },
  {
    title: 'For Students',
    links: [
      { href: '/freelance-jobs-for-teens', label: 'Freelance Jobs for Teens' },
      { href: '/online-jobs-for-teens', label: 'Online Jobs for Teens' },
      { href: '/safe-online-jobs-for-teens', label: 'Safe Online Jobs' },
      { href: '/how-to-earn-money-as-a-teenager', label: 'How Teens Can Earn' },
      { href: '/how-to-start-freelancing-as-a-teen', label: 'Start Freelancing' },
      { href: '/teen-digital-skills', label: 'Digital Skills for Teens' },
    ],
  },
  {
    title: 'For Startups',
    links: [
      { href: '/hire-teen-freelancers', label: 'Hire Teen Freelancers' },
      { href: '/student-talent-marketplace', label: 'Find Student Talent' },
      { href: '/ai-tools-for-teen-freelancers', label: 'AI Tools for Teen Freelancers' },
      { href: '/teen-portfolio-builder', label: 'View Portfolio Talent' },
    ],
  },
  {
    title: 'Safety',
    links: [
      { href: '/safety', label: 'TeenVerseHub Safety' },
      { href: '/guardian-guide', label: 'Parent and Guardian Guide' },
      { href: '/verification-process', label: 'Verification Process' },
      { href: '/payments-protection', label: 'Payments and Protection' },
      { href: '/legal', label: 'Legal Center' },
    ],
  },
  {
    title: 'Support',
    links: [
      { href: '/faq', label: 'FAQ' },
      { href: '/contact', label: 'Contact' },
      { href: `mailto:${SITE.supportEmail}`, label: SITE.supportEmail },
    ],
  },
]

export const faqItems = [
  {
    question: 'What is TeenVerseHub?',
    answer:
      'TeenVerseHub is a teen freelancing platform and student talent marketplace where students can build portfolios, learn digital skills, and find beginner-friendly projects.',
  },
  {
    question: 'Who can join TeenVerseHub?',
    answer:
      'TeenVerseHub is built for students and teenagers who want to learn skills, build portfolios, and explore online work. Startups, creators, and clients can also use TeenVerseHub to find young digital talent.',
  },
  {
    question: 'Is TeenVerseHub safe for teenagers?',
    answer:
      'TeenVerseHub is designed with safer online work in mind. It includes age-aware onboarding, guardian consent for users under 18, verification, safer messaging, reporting, moderation, and protected workflows.',
  },
  {
    question: 'Can beginners use TeenVerseHub?',
    answer:
      'Yes. TeenVerseHub is beginner-friendly. Students can start with skills like video editing, design, content writing, frontend development, social media support, research, and AI-assisted work.',
  },
  {
    question: 'What can students do on TeenVerseHub?',
    answer:
      'Students can create a profile, build a portfolio, show their skills, explore projects, communicate safely, and grow their work experience over time.',
  },
  {
    question: 'What can startups hire teen talent for?',
    answer:
      'Startups and creators can hire teen talent for video editing, thumbnails, design, content writing, social media support, landing pages, frontend tasks, research, and AI-assisted digital work.',
  },
  {
    question: 'How does TeenVerseHub help with portfolios?',
    answer:
      'TeenVerseHub helps students show their projects, skills, work samples, service details, and profile proof in one place so clients can understand what they can do.',
  },
  {
    question: 'How do payments work on TeenVerseHub?',
    answer:
      'TeenVerseHub is planned around safer payment workflows where project details, client approval, payout checks, refunds, and disputes can be handled with more clarity.',
  },
  {
    question: 'What should parents or guardians check first?',
    answer:
      'Parents and guardians should start with the Safety page, Parent and Guardian Guide, Verification Process page, and Payments and Protection page.',
  },
]