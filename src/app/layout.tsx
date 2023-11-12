import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import {Navbar} from '@/presentation/molecules/'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ecomerce base',
  description: 'This is a base of architecture for ecomerce.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="flex h-full flex-col items-center justify-between p-24">
          {children}
         </main>
      </body>
    </html>
  )
}
