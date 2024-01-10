'use client';
import styles from './page.module.scss'
import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion';
import Preloader from '../components/Header/Preloader';
import Landing from '../components/Home/Landing';
import Projects from '../components/Projects';
import Description from '../components/Home/Description';
import SlidingImages from '../components/Home/SlidingImages';
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
   <div className='md:pt-[15em]'>
   <IntroProjects firstsentence="We turn empty space " secondsentence='into complexe shapes.' />
   </div>
    <Services />

    <IntroProjects firstsentence="Don't take our word for it."  
    secondsentence='Our clients can vouch for us.'
    />
    <Projects />
    <IntroProjects firstsentence="Projects always alignes "
    secondsentence='with our core values.'
     />
    <ServiceSection />
    <IntroProjects firstsentence="Reliable tech choices" 
    secondsentence=' is in our startegy.'
    />  
    <SlidingImages />
    <IntroProjects firstsentence="We would love to hear from you!" />  
    

    </main>
    )
}
