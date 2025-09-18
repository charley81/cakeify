import Link from 'next/link'
import { sanityFetch } from '@/sanity/lib/live'
import { POSTS_QUERY } from '@/sanity/lib/queries'
import { homePath, postPath } from '@/paths'

export default async function PostsPage() {
  const { data: posts } = await sanityFetch({ query: POSTS_QUERY })

  return (
    <main className="container mx-auto grid grid-cols-1 gap-6 p-12">
      <h1 className="text-4xl font-bold">post index</h1>
      <ul className="grid grid-cols-1 divide-y divide-slate-700">
        {posts.map((post) => (
          <li key={post._id} className="block py-8 text-slate-400">
            <Link href={postPath(post?.slug?.current)}>{post?.title}</Link>
          </li>
        ))}
      </ul>
      <Link href={homePath()}>&larr; return home</Link>
    </main>
  )
}
