import './globals.css'
import { Inter } from 'next/font/google'
import { lazy } from "react";
//inside my components/i have an index.js file 
export const Header = lazy(()=> import('../components/Header'));
export const Contact = lazy(()=> import('../components/Home/Contact'));




const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    default: "Troisieme Oeil Digital - Crafting New Experiences.",
    template: '%s | Troisieme Oeil Digital'
  },
  description: 'Troisieme Oeil Digital is a software agency working with top leaders in the industry to deliver high quality solutions and guarantee the best service. ',
  twitter: {
    card: "summary_large_image"
  }

}

export default function RootLayout({ children }) {
  return (
    <html lang="en"  >
      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
      
</head>
      <body className={inter.className}>
      <link rel="icon" href="/images/favicon.ico" sizes="any" />
        <Header />
        {children}
        <Contact />
      </body>
    </html>
  )
}
