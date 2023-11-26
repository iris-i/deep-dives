import '../css/water.css'
import '../css/globals.css'
import localFont from 'next/font/local'
import { Literata } from 'next/font/google'

import Header from '../components/header/Header'
import Footer from '@/components/Footer'

const literata = Literata({
  subsets: ['latin'],
  variable: '--font-literata',
})

const agrandir = localFont(
  {
    src: '../fonts/Agrandir-Medium.woff',
    variable: '--font-agrandir',
  }
)

const agrandirRegular = localFont(
  {
    src: '../fonts/Agrandir-Regular.otf',
    variable: '--font-agrandir-regular',
  }
)

export const metadata = {
  title: 'Deep Dives and Quick Bytes',
  description: 'Explore a developer\'s journey through coding rabbit holes and enlightening moments. Discover daily insights and in-depth guides on NextJS, KeystoneJS, Prisma, and more. Dive into the world of continuous learning and experience the evolution of coding practices and technologies at Deep Dives and Quick Bytes.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${agrandir.variable} ${literata.variable} ${agrandirRegular.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
