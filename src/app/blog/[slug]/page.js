'use client'
import { GoHome } from "react-icons/go";
import { MdKeyboardArrowRight } from "react-icons/md";
import './index.css'
import supabase from '@/config/supabaseClient';
import MdxLayout from '../template/template'

import Link from 'next/link';
import Image from 'next/image';
import { useEffect } from "react";



export  default async function SinglePost({params}) {
  const {slug} = params

    let post 
    const { data: notes } = await supabase.from('blogs')
    .select()
    .match({
      slug: slug
    })
      // const { data: postDetails, error: err } =  supabase
      // .from('blogs')
      // .select()
      // .match({
      //   slug: slug
      // })
      // return postDetails
      console.log(notes);

    // getSlugDetails().then((result)=> {
    //   // setHistory(result[0].title)
    //   post = result
    //   console.log(post[0].title);
    // })
 

  return (
    <main className="w-full h-auto">
    {/* <AnimatePresence mode='wait'>
      {isLoading && <Transition />}
    </AnimatePresence> */}
    <div className='w-full h-[20vh] lg:h-[20vh]'></div>
   <div className='w-full  flex flex-col items-center py-3 '>
 
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
    <p className='text-[#93a2b7] line-clamp-2 text-sm leading-snug text-muted-foreground '></p>
    </div>
          
            <div >
          <div  className='w-full relative h-[250px] mb-20'> 
          <Image
          src={notes[0].blog_img_url}
          alt={notes[0].title}
          fill="true"
          style={{objectFit: "cover"}}
          />
          </div>
          <h1 className="mb-2 text-5xl md:text-6xl text-white">{notes[0].title}</h1>
          <h3 className=' mb-2 md:text-lg text-[#f0f8ff]'>{notes[0].description}</h3>
          </div>
    

    {/* <div className="line">
              <div 
               onMouseEnter={() => {manageMouseEnter()}} 
               onMouseMove={(e) => {manageMouseMove(e)}}
               onMouseLeave={() => {manageMouseLeave()}} 
               className="box"></div>
              <svg>
                <path ref={path}></path>
              </svg>
    </div> */}

 
    <div className='text-[#f0f8ff] font-light text-xl'>
{/* <MdxLayout /> */}
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
