import './globals.css'
import { Inter } from 'next/font/google'
import Header from "@/components/layout/Header"
import Providers from './Provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ecommerce Store',
  description: 'Ecommerce Store',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    
    <html lang="en">
      <body className={inter.className}>

        <Header />
        {/* Homepage */}
        <main className='px-8'>
         <Providers> {children}</Providers>
        </main>
      </body>
    </html>
  )
}
