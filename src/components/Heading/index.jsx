'use client';
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion';
import Button from './Button';
import styles from './style.module.scss';
import Nav from './Nav';

const menu = {
    // open: {
    //     width: "23em",
    //     height: "650px",
    //     top: "-20px",
    //     right: "-25px",
    //     transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1]}
    // },
    // closed: {
    //     width: "6.2em",
    //     height: "40px",
    //     top: "0px",
    //     right: "0px",
    //     transition: { duration: 0.75, delay: 0.35, type: "tween", ease: [0.76, 0, 0.24, 1]}
    // }
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
    const [isActive, setIsActive] = useState(false);

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