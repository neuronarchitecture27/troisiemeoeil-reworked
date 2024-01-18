'use client'
import { useEffect, useRef, useState } from 'react'
import { GoHome } from "react-icons/go";
import { MdKeyboardArrowRight } from "react-icons/md";
import './index.css'
import supabase from '@/config/supabaseClient';
import MarkdownView from 'react-showdown';
import getSlug from '../../utils/getSlug';
import { AnimatePresence } from 'framer-motion';
import Transition from "../../../components/Transition"
import Link from 'next/link';
import Image from 'next/image';

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
    const id =  getSlug();
  
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

    const [post, setpost] = useState(null)

    useEffect(() => {
      const  getSlugDetails = async () => {
        const { data: postDetails, error: err } = await supabase
        .from('blogs')
        .select()
        .match({
          slug: id.slug
        })
        return postDetails
      }
      getSlugDetails().then((result)=> {
        setpost(result)
      })
     
    }, []);
    if (post) {
      console.log(post[0].content);
    }
    
  return (
    <main className=' h-auto w-fit'>
    <AnimatePresence mode='wait'>
      {isLoading && <Transition />}
    </AnimatePresence>
    <div className='w-full h-[10vh]'></div>
   <div className='w-full flex flex-col items-center py-3 '>
    <div className='w-full p-4 md:w-1/2'>

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
    {post && post.map((_, i) => (
      <>
    <div className='w-full relative h-[250px] mb-20'> 
    <Image
    src={post[i].blog_img_url}
    alt={post[i].title}
    fill="true"
    style={{objectFit: "cover"}}
    />
    </div>
    <h1 className="mb-2 text-5xl md:text-6xl text-white">{post[i].title}</h1>
    <h3 className=' mb-2 md:text-lg text-[#f0f8ff]'>{post[i].description}</h3>
 
    </>
))}


    <div id='reactMarkDown' className='text-[#f0f8ff] h-auto font-light '>
    {post && post.map((_, i) => (
 
    <MarkdownView
      markdown={post[i].content}
    />
))}

    </div>
    </div>

    <div className='w-full flex flex-col items-center'>
      <h1>Liked it? Check these out:</h1>
      <div >
    
      </div>
    </div>
   </div>
  </main>
  )
}


