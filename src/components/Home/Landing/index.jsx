'use client'
import "../../globals.css"
import Sphere from '@/components/Sphere';
import './index.css'
import { useEffect, useRef } from "react";
import styles from './page.module.css'
import gsap from "gsap";
import Description from '../Description';

export default function Home() {
  const path = useRef(null);
  let progress = 0;
  let x = 0.5;
  let time = Math.PI / 2;
  let reqId = null;
  const arrowRef = useRef(null)
  const mainheadlineRef = useRef(null)
  useEffect(() => {
    const mainheadlineEl = mainheadlineRef.current

    let headingWrapp = document.querySelector('.ml12')
    headingWrapp.innerHTML = headingWrapp.textContent.replace(
      /\S/g,
      "<span id='letter'>$&</span>"
    )
    gsap.timeline().from("#letter", {
        opacity: 0,
        duration: 0.5,
        delay: 1,
        stagger: {
          amount: 0.75,
          grid:"auto",
          from: "random"
        },
        ease: "power2.out"
    })
    gsap.from(mainheadlineEl, {duration: 1, opacity: 0, delay: 1,});


    setPath(progress);

  }, [])


  const setPath = (progress) => {
    const width = window.innerWidth * 0.48;
    path.current.setAttributeNS(null, "d", `M0 250 Q${width * x} ${250 + progress}, ${width} 250`)
  }

  const lerp = (x, y, a) => x * (1 - a) + y * a

  const manageMouseEnter = () => {
    if(reqId){
      cancelAnimationFrame(reqId)
      resetAnimation()
    }
  }

  const manageMouseMove = (e) => {
    const { movementY, clientX } = e;
    const pathBound =  path.current.getBoundingClientRect();
    x = (clientX - pathBound.left) / pathBound.width;
    progress+= movementY
    setPath(progress);
  }

  const manageMouseLeave = () => {
    animateOut();
  }

  const animateOut = () => {
    const newProgress = progress * Math.sin(time);
    progress = lerp(progress, 0, 0.025);
    time+=0.2;
    setPath(newProgress);
    if(Math.abs(progress) > 0.75){
      reqId = requestAnimationFrame(animateOut);
    }
    else{
      resetAnimation();
    }
  }

  const resetAnimation = () => {
    time = Math.PI / 2;
    progress = 0;
  }

  return (
    <section >

     <div className=" hidden">
     <Sphere />
     </div>

      <div className=" h-[20dvh]"></div>
      <div className='containerWrapp' >
       <div ref={mainheadlineRef} className="mainheadline">
       
          <div className='headingWrapp'>
             <div className="ml12" id="sentences">
              
               cutting edge technology.</div>
              
              <div className={styles.line}>
              <div 
               onMouseEnter={() => {manageMouseEnter()}} 
               onMouseMove={(e) => {manageMouseMove(e)}}
               onMouseLeave={() => {manageMouseLeave()}} 
               className={styles.box}></div>
              <svg>
                <path ref={path}></path>
              </svg>
            </div>
          </div>
          <div className="descheadline">
          <div className='descText'>
           From design <br /> to software
          </div>
          <div className='descText2'>
          The combination of  passion for design, code & interaction set us up in a unique place in the industry.
          </div>
       </div>
       </div>
  
      </div>
    
    </section>
  )
}
