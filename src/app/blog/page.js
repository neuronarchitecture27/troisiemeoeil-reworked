'use client'

import { useEffect, useState } from 'react';
import styles from './page.module.scss'
import { AnimatePresence } from 'framer-motion';
import Transition from "../../components/Transition"
import AllPosts from './components/AllPosts';

export default function Index() {


    
  const [isLoading, setIsLoading] = useState(true);

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
    <div className={styles.divider}></div>
    
    <AllPosts />
  </main>
  )
}
