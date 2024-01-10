'use client';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import styles from './style.module.scss';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Rounded from '../../common/RoundedButton';
import Magnetic from '../../common/Magnetic';
import Heading from '../../components/Heading';

import Link from 'next/link';
import Image from 'next/image';
import { MinusIcon, PlusIcon } from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

const data = [
    {
      goal: 400,
    },
    {
      goal: 300,
    },
    {
      goal: 200,
    },
    {
      goal: 300,
    },
    {
      goal: 200,
    },
    {
      goal: 278,
    },
    {
      goal: 189,
    },
    {
      goal: 239,
    },
    {
      goal: 300,
    },
    {
      goal: 200,
    },
    {
      goal: 278,
    },
    {
      goal: 189,
    },
    {
      goal: 349,
    },
  ]
export default function Index() {
    const header = useRef(null);
    const [isActive, setIsActive] = useState(false);
    const pathname = usePathname();
    const button = useRef(null);

    const [goal, setGoal] = useState(350)
 
    function onClick(adjustment) {
      setGoal(Math.max(200, Math.min(400, goal + adjustment)))
    }

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
            
                <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Get in touch 👋</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto h-auto w-full flex flex-col items-center  ">
     
          <div className="p-4 pb-0 w-[100vw] h-[70vh]">
            <div className="flex items-center justify-center space-x-2">
            <iframe
            className='h-[70vh]'
      src="https://calendly.com/troisiemeoeildigital/30min" // Replace this with the URL you want to embed
      title="Calendly Meeting"
      width="100%"
      height="500px"
      scrolling="no"
    />
            </div>
          
          </div>
          <div className='w-[25vw] '>

          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
          </div>
        </div>
      </DrawerContent>
                  </Drawer>
            </div>
        </div>
        <div ref={button} className={styles.headerButtonContainer}>
        <Heading />
        </div>
        </>
    )
}

