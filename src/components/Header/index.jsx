'use client';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import styles from './style.module.scss';
import { usePathname } from 'next/navigation';
import { AnimatePresence } from 'framer-motion';
import Nav from './nav';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Rounded from '../../common/RoundedButton';
import Magnetic from '../../common/Magnetic';
import Heading from '../../components/Heading';

import Link from 'next/link';
import { PopupButton, Sidetab } from '@typeform/embed-react';

export default function Index() {
    const header = useRef(null);
    const [isActive, setIsActive] = useState(false);
    const pathname = usePathname();
    const button = useRef(null);

    useEffect( () => {
      if(isActive) setIsActive(false)
    }, [pathname])

    useLayoutEffect( () => {
        gsap.registerPlugin(ScrollTrigger)
        gsap.to(button.current, {
            scrollTrigger: {
                trigger: document.documentElement,
                start: 0,
                end: "150px",
                onLeave: () => {gsap.to(button.current, {scale: 1, duration: 0.25, ease: "power1.out"})},
                onEnterBack: () => {gsap.to(button.current, {scale: 0, duration: 0.25, ease: "power1.out"},setIsActive(false))}
            }
        })
    }, [])

    return (
        <>
        <div ref={header} className={styles.header}>
            <div className={styles.logo}>
                <p className={styles.copyright}>©</p>
               <Link href="/" className={styles.link}>
               <div className={styles.name}>
                    <p className={styles.codeBy}>Code by</p>
                    <p className={styles.ahmed}>Ahmed</p>
                    <p className={styles.boulakhras}>Boulakhras</p>
                </div>
               </Link>
            </div>
         
            <div className={styles.nav}>
                
                <Magnetic>
                    <div className={styles.el}>
                        <Link className={styles.link} href="/projects">
                            <div>Projects</div>
                            </Link>
                        <div className={styles.indicator}></div>
                    </div>
                </Magnetic>
                <Magnetic>
                    <div className={styles.el}>
                        <div>Blog</div>
                        <div className={styles.indicator}></div>
                    </div>
                </Magnetic>
                <Magnetic>
                    <div className={styles.el}>
                        <div>Contact</div>
                        <div className={styles.indicator}></div>
                    </div>
                </Magnetic>
                
                <PopupButton id="j4p5sUNU" className={styles.popup}>
                <div className={styles.beClient}>
                <Rounded>
                <p>Become a client!</p>
                </Rounded>
                </div>
                 </PopupButton>
            
            </div>
        </div>
        <div ref={button} className={styles.headerButtonContainer}>
        <Heading />
            {/* <Rounded onClick={() => {setIsActive(!isActive)}} className={`${styles.button}`}>
                <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
            </Rounded> */}
        </div>
        {/* <AnimatePresence mode="wait">
            {isActive && <Heading />}
        </AnimatePresence> */}
        </>
    )
}

