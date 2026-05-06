import { SITE, absoluteUrl, indexedPages } from './lib/site'

export default function sitemap() {
  return indexedPages.map((page) => ({
    url: absoluteUrl(page.path),
    lastModified: new Date(SITE.lastUpdated),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }))
}
