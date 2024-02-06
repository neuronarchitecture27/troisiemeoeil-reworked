'use client'
import { useEffect, useState } from 'react'
import './index.css'
import { AnimatePresence } from 'framer-motion';
import Transition from "../../../components/Transition"
import Layout from './Layout';

export default function SinglePost() {

  // const {slug} = params

  // let post 
  // const { data: article } = await supabase.from('blogs')
  // .select()
  // .match({
  //   slug: slug
  // })
  //   console.log(article);
    const [isLoading, setIsLoading] = useState(true);
  
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
    }, [])

 
  return (
    <main className=' h-auto w-full'>
    <AnimatePresence mode='wait'>
      {isLoading && <Transition />}
    </AnimatePresence>
    <div className='w-full h-[10vh]'></div>
   <div className='w-full flex flex-col items-center py-3 '>
  <Layout />

    <div className='w-full flex flex-col items-center'>
      <h1>Liked it? Check these out:</h1>
      <div >
    
      </div>
    </div>
   </div>
  </main>
  )
}


