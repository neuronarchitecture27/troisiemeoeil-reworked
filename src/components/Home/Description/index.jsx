import styles from './style.module.scss';
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
import { slideUp, opacity } from './animation';
import Rounded from '../../../common/RoundedButton';
import { PopupButton } from '@typeform/embed-react';
import Link from 'next/link';

import "../../globals.css"

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
                <Link className={styles.link} href="/contact">
                    <Rounded className={styles.button}>
                        <p className={styles.headline}>Start Here!</p>
                    </Rounded>
                        </Link>
              
            </div>
        </div>
    )
}
