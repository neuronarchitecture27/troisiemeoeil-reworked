'use client';
import styles from './page.module.scss'
import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion';
import Contact from '../../components/Home/Contact';
import Transition from "../../components/Transition"
import ImageSlider from "./components/ImageSlider"
import HoverDescription from "./components/HoverDescription"
import Form from './components/Form';
export default function Work() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect( () => {
    (
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll =
           new LocomotiveScroll();

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
    <HoverDescription />  
    <Form />
    <ImageSlider />
    <div className={styles.seperator}></div>

  </main>
  )
}
