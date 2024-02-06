

import Link from 'next/link';
import Image from 'next/image';
import MarkdownView from 'react-showdown';
import { GoHome } from "react-icons/go";
import { MdKeyboardArrowRight } from "react-icons/md";
import supabase from '@/config/supabaseClient';
import getSlug from '../../utils/getSlug';


export default function Layout() {
    
    const id =  getSlug();

    let post = null

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
       post = result
       console.log(post);
      })
     
 
    
    

  return (
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
  
      <>
    <div className='w-full relative h-[250px] mb-20'> 
    <Image
    src={post[0].blog_img_url}
    alt={post[0].title}
    fill="true"
    style={{objectFit: "cover"}}
    />
    </div>
    <h1 className="mb-2 text-5xl md:text-6xl text-white">{post[0].title}</h1>
    <h3 className=' mb-2 md:text-lg text-[#f0f8ff]'>{post[0].description}</h3>
 
    </>


    <div id='reactMarkDown' className='text-[#f0f8ff] h-auto font-light '>
    {post && post.map((_, i) => (
 
    <MarkdownView
      markdown={post[i].content}
    />
))}

    </div>
    </div>
  )
}
