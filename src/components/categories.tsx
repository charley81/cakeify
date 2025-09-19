import { POST_QUERYResult } from '@/sanity/types'

type CategoriesProps = {
  categories: NonNullable<POST_QUERYResult>['categories']
}

export function Categories({ categories }: CategoriesProps) {
  return categories.map((category) => (
    <span
      key={category._id}
      className="rounded-full bg-slate-600 px-2 py-1 text-sm leading-none font-semibold whitespace-nowrap text-slate-50"
    >
      {category.title}
    </span>
  ))
}
