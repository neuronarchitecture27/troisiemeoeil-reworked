'use client'
import gsap from 'gsap';
import "../../globals.css"
import Sphere from '@/components/Sphere';
import './index.css'

export default function Home() {
  const tl = gsap.timeline()
  


  return (
    <main >

      <Sphere />


      <div className='containerWrapp' >
       <div className="mainheadline">
          <div className="arrow">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="150px" height="150px" ><path d="M17 15.586 6.707 5.293 5.293 6.707 15.586 17H7v2h12V7h-2v8.586z" style={{fill:"#ffffff"}}/></svg>
          </div>
          <div className='headingWrapp'>
              cutting edge technology.
              <div className="border"></div>
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
