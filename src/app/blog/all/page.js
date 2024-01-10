'use client'
import React, { useEffect, useState } from 'react'
import getSlug from '../../utils/getSlug';
import styles from './page.module.scss'
import { AnimatePresence } from 'framer-motion';
import Transition from "../../../components/Transition"
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import Link from 'next/link';
export default function Index() {
    const [isLoading, setIsLoading] = useState(true);
    const id =  getSlug();

    useEffect( () => {
      (
        async () => {
            const LocomotiveScroll = (await import('locomotive-scroll')).default
            const locomotiveScroll = new LocomotiveScroll();
  
            setTimeout( () => {
              setIsLoading(false);
              document.body.style.cursor = 'default'
              window.scrollTo(0,0);
            }, 20)
        }
      )()
    }, [])

  return (
    <main className={styles.main }>
    <AnimatePresence mode='wait'>
      {isLoading && <Transition />}
    </AnimatePresence>
    <div className=' h-[8em]'></div>
   <div className=' w-full h-auto flex flex-col items-center py-3 '>
   {[...Array(10)].map((_, i, post) => (
           <Link href="/blog/posttitle">
           <div key={i} className=' w-auto h-auto rounded-xl cursor-pointer hover:bg-[#2b3240a3] transition ease-in-out delay-75 p-6'>
           <h3 className=' text-white font-semibold text-2xl'>Choosing Providers</h3>
           <div className='flex items-center '>
           <FaRegCalendarAlt color='#93a2b7' size="15px"/>
           <p className=' text-[#93a2b7] text-sm mx-2'>22-05-2024 |</p>
           <IoMdTime color='#93a2b7' size="18px" />
           <p className=' text-[#93a2b7] text-sm p-1 '>2 Minutes </p>
           </div>
           <p className=' text-[#93a2b7] line-clamp-2 text-sm leading-snug text-muted-foreground m-0 p-0'>How to choose and set up Analytics, newsletter, and other providers for your blog.</p>
       </div>
           </Link>
           
         ))}

 
   </div>
  </main>
  )
}
