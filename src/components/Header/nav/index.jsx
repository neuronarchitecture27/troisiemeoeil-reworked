import React, { useState } from 'react'
import styles from './style.module.scss';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { menuSlide } from '../animation';
import Link from './Link';
import Curve from './Curve';
import Footer from './Footer';
import "../../globals.css"
import Rounded from '@/common/RoundedButton';

import { PopupButton } from '@typeform/embed-react';

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Work",
    href: "/work",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  },
 
 
]

export default function Index() {

  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <motion.div 
      variants={menuSlide} 
      initial="initial" 
      animate="enter" 
      exit="exit" 
      className={styles.menu}
      >
       <div className={styles.body}>
            <div onMouseLeave={() => {setSelectedIndicator(pathname)}} className={styles.nav}>
                    <div className={styles.header}>
                        <p className={styles.Headline}>Navigation</p>
                    </div>
                    {
                      navItems.map( (data, index) => {
                        return <div  key={index} className='movingDesc' >
                          <Link 
                        data={{...data, index}} 
                        isActive={selectedIndicator == data.href} 
                        setSelectedIndicator={setSelectedIndicator}>
                        </Link>
                        </div>
                      })
                    }

                <PopupButton id="j4p5sUNU" className={styles.popup}>
                <div className={styles.beClient}>
                <Rounded>
                <a>Become a client!</a>
                </Rounded>
                </div>
                 </PopupButton>
            </div>

            <Footer />
        </div>
        <Curve />
    </motion.div>
  )
}