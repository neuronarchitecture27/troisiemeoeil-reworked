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
import Image from 'next/image';

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
                    <p className={styles.ahmed}>👁️</p>
                    <p className={styles.boulakhras}>TROISIEME OEIL</p>
                </div>
               </Link>
            </div>
            <div className={styles.logoImage}>
                <a href="/">

                <Image
                          src="/images/troisiemeoeillogo.png"
                       fill={true}
                          alt='troisieme oeil company logo'
                          />
            </a>
            
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
                    <Link className={styles.link} href="/blog">

                        <div>Blog</div>
                        </Link>
                        <div className={styles.indicator}></div>
                    </div>
                </Magnetic>
            
                <Magnetic>
                    <div className={styles.el}>
                    <Link className={styles.link} href="/contact">
                        <div>Contact</div>
                        </Link>
                        <div className={styles.indicator}></div>
                    </div>
                </Magnetic>
                <Link href='/contact'>
                <div className={styles.beClient}>
                <Rounded>
                <p>Become a client!</p>
                </Rounded>
                </div>
                </Link>
            
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

