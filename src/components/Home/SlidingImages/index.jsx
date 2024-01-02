import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import styles from './style.module.scss';
import Image from 'next/image';

const slider1 = [
    {
        color: "#e3e5e7",
        src: "391742802_805876058211946_8390445651657770848_n.jpg"
    },
    {
        color: "#d6d7dc",
        src: "1_IWnUIsLJV5gADU0eZic8YA.jpg"
    },
    {
        color: "#e3e3e3",
        src: "8ca37a1183fa016ce74c4b794e8f425f.webp"
    },
    {
        color: "#21242b",
        src: "299463877_560030875914611_8025210373789510385_n.jpg"
    }
]

const slider2 = [
    {
        color: "#d4e3ec",
        src: "Threejs-logo.svg"
    },
    {
        color: "#ffffff",
        src: "Typescript.png"
    },
    {
        color: "#d7d4cf",
        src: "React_Hero.png"
    },
    {
        color: "#e1dad6",
        src: "Emblem-Google-Cloud.jpg"
    }
]

export default function Index() {

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end start"]
    })

    const x1 = useTransform(scrollYProgress, [0, 1], [0, 150])
    const x2 = useTransform(scrollYProgress, [0, 1], [0, -150])
    const height = useTransform(scrollYProgress, [0, 0.9], [50, 0])

    return (
        <div ref={container} className={styles.slidingImages}>
            <motion.div style={{x: x1}} className={styles.slider}>
                    {
                        slider1.map( (project, index) => {
                            return <div key={index} className={styles.project} style={{backgroundColor: project.color}} >
                                <div className={styles.imageContainer}>
                                    <Image 
                                    fill={true}
                                    alt={"image"}
                                    src={`/images/slidingImages/${project.src}`}/>
                                </div>
                            </div>
                        })
                    }
                </motion.div>
                <motion.div style={{x: x2}} className={styles.slider}>
                    {
                        slider2.map( (project, index) => {
                            return <div key={index} className={styles.project} style={{backgroundColor: project.color}} >
                                <div key={index} className={styles.imageContainer}>
                                    <Image 
                                    fill={true}
                                    alt={"image"}
                                    src={`/images/slidingImages/${project.src}`}/>
                                </div>
                            </div>
                        })
                    }
                </motion.div>
                <motion.div style={{height}} className={styles.circleContainer}>
                    <div className={styles.circle}></div>
                </motion.div>
        </div>
    )
}
