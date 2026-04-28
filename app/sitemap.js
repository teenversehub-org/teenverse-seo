import { SITE } from './lib/site'

const pages = [
  { path: '/', priority: 1, changeFrequency: 'weekly' },
  {
    path: '/hire-teen-freelancers',
    priority: 0.95,
    changeFrequency: 'weekly',
  },
  {
    path: '/freelance-jobs-for-teens',
    priority: 0.95,
    changeFrequency: 'weekly',
  },
  { path: '/safety', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/verification-process', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/payments-protection', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/guardian-guide', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/about', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/faq', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/contact', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/legal', priority: 0.5, changeFrequency: 'yearly' },
]

export default function sitemap() {
  return pages.map((page) => ({
    url: `${SITE.baseUrl}${page.path}`,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }))
}
