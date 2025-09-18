import { postsPath } from '@/paths'
import Link from 'next/link'

export default function HomePage() {
  return (
    <section className="container mx-auto grid grid-cols-1 gap-6 p-12">
      <h1 className="text-4xl">Hello World!</h1>
      <hr />
      <Link href={postsPath()}>Post index &rarr;</Link>
    </section>
  )
}
