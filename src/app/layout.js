import './globals.css'
import { Inter } from 'next/font/google'
import { lazy } from "react";
//inside my components/i have an index.js file 
export const Header = lazy(()=> import('../components/Header'));


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Troisieme Oeil Digital - Crafting New Experiences.',
  description: 'Troisieme Oeil Digital is a software agency working with top leaders in the industry to deliver high quality solutions and guarantee the best service. ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <link rel="icon" href="/images/favicon.ico" sizes="any" />
        <Header />
        {children}
      </body>
    </html>
  )
}
