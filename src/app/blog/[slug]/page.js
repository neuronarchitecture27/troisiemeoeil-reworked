'use client'
import { useEffect, useRef, useState } from 'react'
import { GoHome } from "react-icons/go";
import { MdKeyboardArrowRight } from "react-icons/md";
import './index.css'
import getSlug from '../../utils/getSlug';
import styles from './page.module.scss'
import { AnimatePresence } from 'framer-motion';
import Transition from "../../../components/Transition"
import Link from 'next/link';
import Image from 'next/image';
export default function SinglePost() {
    
    const [isLoading, setIsLoading] = useState(true);
    const id =  getSlug();
    const path = useRef(null);
    let progress = 0;
    let x = 0.5;
    let time = Math.PI / 2;
    let reqId = null;
    useEffect( () => {
      (
        async () => {
            const LocomotiveScroll = (await import('locomotive-scroll')).default
            const locomotiveScroll = new LocomotiveScroll();
  
            setTimeout( () => {
              setIsLoading(false);
              document.body.style.cursor = 'default'
              window.scrollTo(0,0);
            }, 20)
        }
      )()
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
    <main className={styles.main }>
    <AnimatePresence mode='wait'>
      {isLoading && <Transition />}
    </AnimatePresence>
   <div className='w-full h-[100vh] flex flex-col items-center py-3 mt-[7em]'>
    <div className='w-1/2'>

    <div className='flex p-2 gap-1 mb-8'>
        <Link href="/">
    <GoHome color='#93a2b7'  size="20px"/>
        </Link>
    <MdKeyboardArrowRight color='#93a2b7' size="20px"/>
    <Link  href='/blog/all'>
        <div className=' w-auto cursor-pointer'>

    <div className='text-[#93a2b7] line-clamp-2 text-sm leading-snug text-muted-foreground'>Blog</div>
        </div>
    </Link>
    <MdKeyboardArrowRight color='#93a2b7' size="20px"/>
    <p className='text-[#93a2b7] line-clamp-2 text-sm leading-snug text-muted-foreground '>{id.slug}</p>
    </div>
    <div className='w-full relative h-[250px] mb-20'> 
    <Image
    src="/images/c2montreal.png"
    alt="Post Thumbnail"
    fill="true"
    style={{objectFit: "cover"}}
    />
    </div>
    <h1 className="mb-2 text-6xl text-white">Glassmorphism with Tailwind CSS Under 60 seconds</h1>
    <h3 className=' mb-2 text-[#f0f8ff]'>Quick guide on how to make glass morph components with Tailwind (updated for latest Tailwind version)</h3>
    <div className="line">
              <div 
               onMouseEnter={() => {manageMouseEnter()}} 
               onMouseMove={(e) => {manageMouseMove(e)}}
               onMouseLeave={() => {manageMouseLeave()}} 
               className="box"></div>
              <svg>
                <path ref={path}></path>
              </svg>
    </div>

    <div className='text-[#f0f8ff] font-light text-xl'>
    Glassmorphism is an ongoing trend right now in User interfaces. The new macOS, Big Sur brings a lot of it into the OS, and Microsoft has it for years with Aero UI, then later FluentUI.
<br />
<br />
To recreate this effect on the web, we only need a few css properties, but what if we want to use Tailwind?
<br />
<br />

Tailwind 2.1 Update
Tailwind 2.1 introduced first-party support of background-blur utility, so I'm back with a revision of this post.
<br />
<br />

The only classes you need to apply to your element right now: bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border border-gray-200
<br />
<br />

Here's the Play link for the updated code
<br />
<br />

Original article:
(Only read this if you are curious about how it worked before Tailwind 2.1)
<br />

If you prefer a quick 1 min video:
    </div>
    </div>

 
   </div>
  </main>
  )
}
