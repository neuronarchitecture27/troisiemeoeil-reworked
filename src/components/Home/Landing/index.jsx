'use client'
import Image from 'next/image'
import styles from './style.module.scss'
import { useRef, useLayoutEffect, Suspense } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { slideUp } from './animation';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Model } from './Model';
import "../../globals.css"
export default function Home() {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useLayoutEffect( () => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: e => direction = e.direction * -1
      },
      x: "-500px",
    })
    requestAnimationFrame(animate);
  }, [])

  const animate = () => {
    if(xPercent < -100){
      xPercent = 0;
    }
    else if(xPercent > 0){
      xPercent = -100;
    }
    gsap.set(firstText.current, {xPercent: xPercent})
    gsap.set(secondText.current, {xPercent: xPercent})
    requestAnimationFrame(animate);
    xPercent += 0.1 * direction;
  }

  return (
    <motion.main  className={styles.landing}>
   {/* <div className={styles.canvas}>
   <Canvas >
    <directionalLight  color={"#ff1717"} intensity={1}  position={[3,0, 2]}/>
    <directionalLight  color={"#ffffff"} intensity={1}  position={[1, 3, 0]}/>
    <directionalLight  color={"#ffffff"} intensity={1}  position={[1, 0, 3]}/>
    <PerspectiveCamera
    makeDefault
    position={[500, 0.9, 1.8]}
    fov={60}
    enableZoom={false}
    zoom={6}
  />
    <OrbitControls enableZoom={false} autoRotate />
          <Model />
      </Canvas>
    </div> */}
{/* <div id="canvas-container" className={styles.canvas}> */}
  
      {/* <Canvas>
      <OrbitControls />
      <mesh>
    <boxGeometry />
    <meshStandardMaterial />
  </mesh>
      </Canvas> */}
    {/* </div> */}
      <div className={styles.sliderContainer}>
        <div ref={slider} className={styles.slider}>
          <p className='movingDesc' ref={firstText}>Freelance Developer -</p>
          <p className='movingDesc' ref={secondText}>Freelance Developer -</p>
        </div>
      </div>
      <div data-scroll data-scroll-speed={0.1} className={styles.description}>
        <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z" fill="white"/>
        </svg>  
        <p className='Headline'>Creative</p>
        <p className='Headline'>Software Company</p>
      </div>
    
    </motion.main>
  )
}
