'use client';
import styles from './page.module.scss'
import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion';
import Preloader from '../components/Header/Preloader';
import Landing from '../components/Home/Landing';
import Projects from '../components/Projects';
import Description from '../components/Home/Description';
import SlidingImages from '../components/Home/SlidingImages';
import Contact from '../components/Home/Contact';
import IntroProjects from '../components/Home/IntroProjects';

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
          }, 2000)
      }
    )()
  }, [])

  return (
    <main className={styles.main}>
      <AnimatePresence mode='wait'>
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Landing />
      <Description />
      <IntroProjects />
      <Projects />
      <SlidingImages />
      <Contact />
    </main>
  )
}
