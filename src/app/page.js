'use client';
import styles from './page.module.scss'
import { Suspense, useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion';
import Preloader from '../components/Header/Preloader';
import Landing from '../components/Home/Landing';
import Projects from '../components/Projects';
import Description from '../components/Home/Description';
import SlidingImages from '../components/Home/SlidingImages';
import Contact from '../components/Home/Contact';
import IntroProjects from '../components/Home/IntroProjects';
import Services from '../components/Services';
import "./globals.css"
import ServiceSection from '@/components/Home/ServiceSection';
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
    <div className='mobile'>
    <Landing />
    </div>
    <Description />
    <IntroProjects description="We specialize in turning space into complexe shapes." />
    <Services />
    <IntroProjects description="Don't take our word for it. Our clients can vouch for us." />
    <Projects />
    <IntroProjects description="We also take our values seriously." />
    <ServiceSection />
    <IntroProjects description="Scalable and performent tech is our go-to tools." />  
    <SlidingImages />
    <IntroProjects description="Get in touch." />  

    <Contact />
    </main>
    )
}
