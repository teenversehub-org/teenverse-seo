import { SITE, absoluteUrl, indexedPages } from './lib/site'
import { getAllBlogPosts } from './lib/blog'

export default function sitemap() {
  const staticPages = indexedPages.map((page) => ({
    url: absoluteUrl(page.path),
    lastModified: new Date(SITE.lastUpdated),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }))

  const blogPages = getAllBlogPosts().map((post) => ({
    url: absoluteUrl(`/blog/${post.slug}`),
    lastModified: new Date(post.updatedAt),
    changeFrequency: 'weekly',
    priority: 0.82,
  }))

  return [...staticPages, ...blogPages]
}
