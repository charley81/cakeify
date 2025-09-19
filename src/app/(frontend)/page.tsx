import Link from 'next/link'
import { postsPath } from '@/paths'
import { Title } from '@/components/title'

export default function HomePage() {
  return (
    <section className="container mx-auto grid grid-cols-1 gap-6 p-12">
      <Title>cakeify home page</Title>
      <hr />
      <Link href={postsPath()}>Post index &rarr;</Link>
    </section>
  )
}
