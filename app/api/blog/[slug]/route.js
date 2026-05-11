import { getAllBlogPosts, getBlogPost } from '../../../lib/blog'

export const dynamic = 'force-static'

export function generateStaticParams() {
  return getAllBlogPosts().map((post) => ({
    slug: post.slug,
  }))
}

export async function GET(_request, { params }) {
  const { slug } = await params
  const post = getBlogPost(slug)

  if (!post) {
    return Response.json({ error: 'Blog post not found' }, { status: 404 })
  }

  return Response.json({ post })
}
