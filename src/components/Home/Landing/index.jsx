'use client'
import "../../globals.css"
import Sphere from '@/components/Sphere';
import './index.css'
import { useEffect, useRef } from "react";
import styles from './page.module.css'
import gsap from "gsap";


export default function Home() {
  const path = useRef(null);
  let progress = 0;
  let x = 0.5;
  let time = Math.PI / 2;
  let reqId = null;

  useEffect(() => {
    let headingWrapp = document.querySelector('.ml12')
    headingWrapp.innerHTML = headingWrapp.textContent.replace(
      /\S/g,
      "<span id='letter'>$&</span>"
    )
    gsap.timeline().from("#letter", {
        opacity: 0,
        duration: 0.25,
        delay: 3,
        stagger: {
          amount: 0.5,
          grid:"auto",
          from: "random"
        },
        ease: "power2.out"
    })
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
    <main >

      <Sphere />


      <div className='containerWrapp' >
       <div className="mainheadline">
          <div className="arrow">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="150px" height="150px" ><path d="M17 15.586 6.707 5.293 5.293 6.707 15.586 17H7v2h12V7h-2v8.586z" style={{fill:"#ffffff"}}/></svg>
          </div>
          <div className='headingWrapp'>
             <h1 className="ml12" id="sentences"> cutting edge technology.</h1>
              
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
    
    </main>
  )
}
