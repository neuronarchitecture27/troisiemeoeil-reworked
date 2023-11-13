import './globals.css'
import { Inter } from 'next/font/google'
import Header from '../components/Header';
import { Suspense } from 'react';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Troisieme Oeil Digital - Crafting Experience.',
  description: 'Troisieme Oeil Digital is a software agency working with top leaders in the industry to deliver high quality solutions and ensure the best service. ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Suspense>

        <Header />
        {children}
        </Suspense>
      </body>
    </html>
  )
}
