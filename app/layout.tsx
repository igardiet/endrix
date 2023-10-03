import type { Metadata } from 'next'
import { Figtree } from 'next/font/google'
import Sidebar from '@/components/Sidebar'
import SupabaseProvider from '@/providers/SupabaseProvider'
import './globals.css'

const font = Figtree( { subsets: [ 'latin' ] } )

export const metadata: Metadata = {
  title: 'Endrix',
  description: 'Music app powered by NextJS',
}

export default function RootLayout ( {
  children,
}: {
  children: React.ReactNode
} )
{
  return (
    <html lang="en">
      <body className={ font.className }>
        <SupabaseProvider>
          <Sidebar>
            { children }
          </Sidebar>
        </SupabaseProvider>
      </body>
    </html>
  )
}