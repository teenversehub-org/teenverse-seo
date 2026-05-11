import { getAllBlogPosts } from '../../lib/blog'

export const dynamic = 'force-static'

export function GET() {
  const posts = getAllBlogPosts().map((post) => ({
    slug: post.slug,
    title: post.title,
    description: post.description,
    summary: post.summary,
    category: post.category,
    publishedAt: post.publishedAt,
    updatedAt: post.updatedAt,
    readingTime: post.readingTime,
    keywords: post.keywords,
  }))

  return Response.json({
    count: posts.length,
    posts,
  })
}
