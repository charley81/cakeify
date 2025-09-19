import type { Metadata } from 'next'
import { SanityLive } from '@/sanity/lib/live'
import { Header } from '@/components/header'

export const metadata: Metadata = {
  title: 'cakeify posts',
  description: 'list of post from the cakeify blog',
}

export default function FrontendLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Header />
      {children}
      <SanityLive />
    </>
  )
}
