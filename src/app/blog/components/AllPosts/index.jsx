'use client'
import Link from 'next/link'
import Postdiv from './RestPost/Postdiv'
import supabase from '@/config/supabaseClient';
import Rounded from '@/common/RoundedButton'
import { useEffect, useState } from 'react';
import Image from 'next/image';
export const metadata = {
  title: {
    absolute: "Blog"
  }
}
export default function AllPosts() {

  const [posts, setposts] = useState(null)
  const [isReady, setIsReady] = useState(false);
  useEffect(()=> {
      const getData = async () => {
        let { data: posts, error } = await supabase
        .from('blogs')
        .select()
        .order('created_at', { ascending: false })
        setposts(posts);
        setIsReady(true);
        console.log(posts);
        
      }
      getData()
  },[])

  return (
    <div className=" w-full flex flex-col items-center justify-center h-auto my-5 p-2">
 
   <div className=" w-4/5 grid lg:grid-cols-3 grid-cols-1 gap-6 px-3 mt-10"> 

   {isReady ? (
        // Render posts if ready
        <>
          {posts && posts.slice(0, 5).map((_, i) => (
            <>
           {/* <h1 className='text-white'>{posts[i].slug}</h1> */}
           <div
             key={i}
             className={`rounded-xl border border-neutral-800 bg-neutral-900  relative  overflow-hidden 
             ${i === 0 && "md:row-span-2 lg:h-auto h-60 row-start-1 "}
             ${i === 1 && "lg:h-[280px] h-64 "}
             ${i === 2 && "lg:h-80 h-64 "}
             ${i === 3 && "lg:h-[330px] h-64 lg:-mt-9 "}
             ${i === 4 && "h-72"}
             `}
           >
             <Link href={`blog/${posts[i].slug}`}>
               <img
                 className="h-full  w-full object-cover"
                 src={posts[i].blog_img_url}
                 alt=""
               />

               <p className="text-neutral-50 bottom-14 font-InterBold text-sm lg:text-xl ml-2 capitalize  absolute z-20 ">
                 {posts[i].title}
               </p>

               <div className="absolute bottom-3 z-20 flex justify-between items-center w-full px-2 font-InterMedium text-neutral-500 text-sm">
                 <div className="flex items-center gap-x-2">
                   <img
                     className="w-6 h-6 rounded-full object-cover"
                     src={posts[i].author_img_url}
                     alt={posts[i].author_name}
                   />
                   <p>  {posts[i].author_name}</p>
                 </div>
                 <p> {posts[i].blog_date}</p>
               </div>
             </Link>
             <div className="bg-gradient-to-t  w-full absolute z-10  from-[#000000] via-black/80  to-transparent bottom-0   h-44 transition-all ease-in duration-200" />
           </div>
           </>

         )
           )}
        </>
      ) : (
        // Render skeleton if posts NOT ready

      <>
       {[...Array(5)].map((_, i) => (

            <div
              key={i}
              className={`rounded-xl border border-neutral-800 bg-neutral-900  relative  overflow-hidden bg-gradient-to-b from-neutral-800  to-neutral-700
              ${i === 0 && "md:row-span-2 row-start-1 "}
              ${i === 2 && "lg:h-80 h-64 "}
              ${i === 1 && "lg:h-[280px] h-64 "}
              ${i === 3 && "lg:h-[330px] h-64 lg:-mt-9 "}
              ${i === 4 && "h-72"}
              `}
            >
           
              <div className=" bg-gradient-to-t  w-full absolute z-10  from-[#000000] via-black/80  to-transparent bottom-0   h-44 transition-all ease-in duration-200" />
            </div>
)
)}

<div className="mt-6 grid lg:grid-cols-2 lg:gap-11 p-3 gap-7  w-[78vw]">
        <div className='bg-gradient-to-b from-neutral-800  to-neutral-700 rounded-md'>
              <Link
                href='#'
                className="hover:bg-neutral-950 p-2 hover:rounded-2xl"
              >
          
                <div className="text-neutral-500 flex  w-full items-center ">
              <div className="flex items-center gap-x-3 h-12 ">
          
              
              </div>
                </div>
              </Link>
        </div>
        <div className='bg-gradient-to-b from-neutral-800  to-neutral-700 rounded-md'>
              <Link
                href='#'
                className="hover:bg-neutral-950 p-2 hover:rounded-2xl"
              >
          
                <div className="text-neutral-500 flex  w-full items-center ">
              <div className="flex items-center gap-x-3 h-12 ">
          
              
              </div>
                </div>
              </Link>
        </div>
        <div className='bg-gradient-to-b from-neutral-800  to-neutral-700 rounded-md'>
              <Link
                href='#'
                className="hover:bg-neutral-950 p-2 hover:rounded-2xl"
              >
          
                <div className="text-neutral-500 flex  w-full items-center ">
              <div className="flex items-center gap-x-3 h-12 ">
          
              
              </div>
                </div>
              </Link>
        </div>
        <div className='bg-gradient-to-b from-neutral-800  to-neutral-700 rounded-md'>
              <Link
                href='#'
                className="hover:bg-neutral-950 p-2 hover:rounded-2xl"
              >
          
                <div className="text-neutral-500 flex  w-full items-center ">
              <div className="flex items-center gap-x-3 h-12 ">
          
              
              </div>
                </div>
              </Link>
        </div>
  </div>

      </>
      )}
    
    
          
          </div>

          <div className="mt-6 grid lg:grid-cols-2 lg:gap-11 p-3 gap-7  w-4/5">
          {posts && posts.map((_, i) => {
            if (i >= 5 && i < 9) {
              return <Postdiv key={i} title={posts[i].title} authorName={posts[i].author_name} blogDate={posts[i].blog_date} link={'/blog/' + posts[i].slug}  />
            }
              
            })}

            </div>
      <Link href="/blog/all">
      <Rounded>
                <p > Read All Posts</p>
                </Rounded>
                </Link>
    </div>
  )
}
