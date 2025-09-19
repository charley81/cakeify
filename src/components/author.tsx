import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
import { POSTS_QUERYResult } from '@/sanity/types'

type AuthorProps = {
  author: NonNullable<POSTS_QUERYResult>[0]['author']
}

export function Author({ author }: AuthorProps) {
  return author?.image || author?.name ? (
    <div>
      {author?.image ? (
        <Image
          src={urlFor(author.image).width(80).height(80).url()}
          alt={author.name || ''}
          width={80}
          height={80}
          className="size-10 rounded-full bg-slate-50 shadow-inner"
        />
      ) : null}
      {author?.name ? (
        <p className="text-base text-slate-700">{author.name}</p>
      ) : null}
    </div>
  ) : null
}
