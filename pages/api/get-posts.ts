import type { NextApiRequest, NextApiResponse } from 'next'
import { getAllPosts } from '../../lib/new-api'

export default async function getPosts(
  req: NextApiRequest,
  res: NextApiResponse
) {
  
  const post = await getAllPosts()

  // If the post doesn't exist prevent preview mode from being enabled
  if (!post) {
    return res.status(401).json({ message: 'Post not found' })
  }

  // Enable Preview Mode by setting the cookies
  res.setPreviewData({
    post,
  })

  // // Redirect to the path from the fetched post
  // // We don't redirect to `req.query.slug` as that might lead to open redirect vulnerabilities
  // res.writeHead(307, { Location: `/posts/${post.slug || post.databaseId}` })
  res.end()
}
