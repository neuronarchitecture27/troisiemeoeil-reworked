'use client'
import { useEffect, useState } from 'react'
import { GoHome } from "react-icons/go";
import { MdKeyboardArrowRight } from "react-icons/md";

import getSlug from '../../utils/getSlug';
import styles from './page.module.scss'
import { AnimatePresence } from 'framer-motion';
import Transition from "../../../components/Transition"
import Link from 'next/link';
export default function SinglePost() {
    
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
   <div className='w-full h-auto flex flex-col items-center py-3 mt-[7em]'>
    <div className='flex p-2 gap-1'>
        <Link href="/">
    <GoHome color='#93a2b7'  size="20px"/>
        </Link>
    <MdKeyboardArrowRight color='#93a2b7' size="20px"/>
    <Link  href='/blog'>
        <div className=' w-auto cursor-pointer'>

    <div className='text-[#93a2b7] line-clamp-2 text-sm leading-snug text-muted-foreground'>Blog</div>
        </div>
    </Link>
    <MdKeyboardArrowRight color='#93a2b7' size="20px"/>
    <p className='text-[#93a2b7] line-clamp-2 text-sm leading-snug text-muted-foreground '>{id.slug}</p>
    </div>

 
   </div>
  </main>
  )
}
