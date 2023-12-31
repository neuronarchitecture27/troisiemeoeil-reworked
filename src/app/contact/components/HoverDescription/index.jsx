'use client'
import styles from './page.module.scss'
import { useState } from 'react';  
import { motion } from 'framer-motion';
import useMousePosition from './utils/useMousePosition';
import './index.css'
export default function Home() {

  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 500 : 40;

  return (
    <main className={styles.main}>
      <motion.div 
        className={styles.mask}
        animate={{
          WebkitMaskPosition: `${x - (size/2)}px ${y - (size/2)}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration:0.5}}
      >
          <p className='paragraph' onMouseEnter={() => {setIsHovered(true)}} onMouseLeave={() => {setIsHovered(false)}}>
            A company - with skills that havent been replaced by A.I (yet) - making good shit only if the paycheck is equally good.
          </p>
      </motion.div>

      <div className={styles.body}>
        <p className='paragraph'>At Troisieme Oeil, we excel in selectively skilled engineering, prioritizing the creation of impactful digital experiences.</p>
      </div>

    </main>
  )
}