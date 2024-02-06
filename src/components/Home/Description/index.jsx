'use client'
import styles from './style.module.scss';
import { useInView, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { slideUp, opacity } from './animation';
import Rounded from '../../../common/RoundedButton';
import Link from 'next/link';
import "../../globals.css"
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


export default function Index() {

    const phrase = "Helping brands to stand out in the digital era. Together we will set the new status quo. No nonsense, always on the cutting edge.";
    const description = useRef(null);
    const isInView = useInView(description)

 

    return (
        <div ref={description} className={styles.description}>
            <div className={styles.body}>
                <motion.p className='DescriptionHead'>
                {
                    phrase.split(" ").map( (word, index) => {
                        return <span key={index} 
                        className={styles.mask}>
                            <motion.span variants={slideUp} 
                            custom={index} 
                            animate={isInView ? "open" : "closed"} 
                            key={index}>{word}</motion.span>
                            </span>
                    })
                }
                </motion.p>
                <motion.p variants={opacity}
                 animate={isInView ? "open" : "closed"}  
                 className='Headline'>
                </motion.p>
                <div>
                <Drawer>
      <DrawerTrigger asChild>
      <Rounded className={styles.button}>
                        <p className={styles.headline}>Start Here!</p>
                    </Rounded>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto h-auto w-full max-w-sm ">
     
          <div className="p-4 pb-0 h-[70vh]">
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
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
                  </Drawer>
             
                </div>
              
            </div>
        </div>
    )
}
