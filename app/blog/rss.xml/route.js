import { getAllBlogPosts, getBlogPostUrl } from '../../lib/blog'
import { SITE, absoluteUrl } from '../../lib/site'

export const dynamic = 'force-static'

function escapeXml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;')
}

export function GET() {
  const posts = getAllBlogPosts()

  const items = posts
    .map(
      (post) => `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${escapeXml(getBlogPostUrl(post.slug))}</link>
      <guid>${escapeXml(getBlogPostUrl(post.slug))}</guid>
      <description>${escapeXml(post.description)}</description>
      <category>${escapeXml(post.category)}</category>
      <pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>
    </item>`
    )
    .join('')

  const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${escapeXml(`${SITE.name} Blog`)}</title>
    <link>${escapeXml(absoluteUrl('/blog'))}</link>
    <description>${escapeXml('SEO guides for teen freelancing, safe online jobs, student skills, startup hiring, and guardian safety.')}</description>
    <language>en-IN</language>
    <lastBuildDate>${new Date(SITE.lastUpdated).toUTCString()}</lastBuildDate>${items}
  </channel>
</rss>`

  return new Response(feed, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  })
}
