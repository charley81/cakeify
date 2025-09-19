import { notFound } from 'next/navigation'
import { sanityFetch } from '@/sanity/lib/live'
import { POST_QUERY } from '@/sanity/lib/queries'
import { Post } from '@/components/posts'

type PostPageProps = {
  params: Promise<{ slug: string }>
}

export default async function PostPage({ params }: PostPageProps) {
  const { data: post } = await sanityFetch({
    query: POST_QUERY,
    params: await params,
  })

  if (!post) {
    notFound()
  }

  return (
    <main className="container mx-auto grid grid-cols-1 gap-6 p-12">
      <Post {...post} />
    </main>
  )
}
