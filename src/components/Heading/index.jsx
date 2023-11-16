'use client';
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion';
import Button from './Button';
import styles from './style.module.scss';
import Nav from './Nav';
import { usePathname } from 'next/navigation';
const menu = {

    // MOBILE VERSION COMPATIBLE
    open: {
        width: "23em",
        height: "650px",
        top: "-20px",
        right: "-5px",
        transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1]}
    },
    closed: {
        width: "6.2em",
        height: "40px",
        top: "0px",
        right: "0px",
        transition: { duration: 0.75, delay: 0.35, type: "tween", ease: [0.76, 0, 0.24, 1]}
    }
}

   

export default function Index() {
    const router = usePathname();
    const [isActive, setIsActive] = useState(false);
    useEffect(() => {
        setIsActive(false)
      }, [router.events]);
    return (
        <div className={styles.header}>
            <motion.div 
                className={styles.menu}
                variants={menu}
                animate={isActive ? "open" : "closed"}
                initial="closed"
            >
                <AnimatePresence>
                    {isActive && <Nav />}
                </AnimatePresence>
            </motion.div>
            <Button isActive={isActive} toggleMenu={() => {setIsActive(!isActive)}}/>
        </div>
    )
}