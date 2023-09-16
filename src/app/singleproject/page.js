'use client';
import styles from './page.module.scss'
import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion';
import Transition from "../../components/Transition"

import Landing from '@/components/Home/Landing';
import Projects from '@/components/Projects';
import Description from '@/components/Home/Description';
import SlidingImages from '@/components/Home/SlidingImages';
import Contact from '@/components/Home/Contact';
import IntroProjects from '@/components/Home/IntroProjects';
import Services from '@/components/Services';

import LogoAnimation from '@/components/LogoAnimation';
import ProjectHeader from './components/ProjectHeader';
// import "./globals.css"
export default function Work() {

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
    <main className={styles.main}>
      <AnimatePresence mode='wait'>
      {isLoading && <Transition />}
       </AnimatePresence>
       
      <ProjectHeader />
      <Contact />
    </main>
  )
}
