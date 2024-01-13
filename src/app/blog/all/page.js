'use client'
import { useEffect, useState } from 'react'
import supabase from '@/config/supabaseClient';
import './index.css'
import styles from './page.module.scss'
import { AnimatePresence } from 'framer-motion';
import Transition from "../../../components/Transition"
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import Link from 'next/link';
import  { anime } from 'react-anime';

export default function Index() {
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

      const staggerVisualizerEl = document.querySelector('.stagger-visualizer');
const fragment = document.createDocumentFragment();
const grid = [17, 17];
const col = grid[0];
const row = grid[1];
const numberOfElements = col * row;

for (let i = 0; i < numberOfElements; i++) {
  fragment.appendChild(document.createElement('div'));
}

staggerVisualizerEl.appendChild(fragment);

const staggersAnimation = anime.timeline({
  targets: '.stagger-visualizer div',
  easing: 'easeInOutSine',
  delay: anime.stagger(50),
  loop: true,
  autoplay: false
})
.add({
  translateX: [
    {value: anime.stagger('-.1rem', {grid: grid, from: 'center', axis: 'x'}) },
    {value: anime.stagger('.1rem', {grid: grid, from: 'center', axis: 'x'}) }
  ],
  translateY: [
    {value: anime.stagger('-.1rem', {grid: grid, from: 'center', axis: 'y'}) },
    {value: anime.stagger('.1rem', {grid: grid, from: 'center', axis: 'y'}) }
  ],
  duration: 1000,
  scale: .5,
  delay: anime.stagger(100, {grid: grid, from: 'center'})
})
.add({
  translateX: () => anime.random(-10, 10),
  translateY: () => anime.random(-10, 10),
  delay: anime.stagger(8, {from: 'last'})
})
.add({
  translateX: anime.stagger('.25rem', {grid: grid, from: 'center', axis: 'x'}),
  translateY: anime.stagger('.25rem', {grid: grid, from: 'center', axis: 'y'}),
  rotate: 0,
  scaleX: 2.5,
  scaleY: .25,
  delay: anime.stagger(4, {from: 'center'})
})
.add({
  rotate: anime.stagger([90, 0], {grid: grid, from: 'center'}),
  delay: anime.stagger(50, {grid: grid, from: 'center'})
})
.add({
  translateX: 0,
  translateY: 0,
  scale: .5,
  scaleX: 1,
  rotate: 180,
  duration: 1000,
  delay: anime.stagger(100, {grid: grid, from: 'center'})
})
.add({
  scaleY: 1,
  scale: 1,
  delay: anime.stagger(20, {grid: grid, from: 'center'})
})

staggersAnimation.play();
    }, [])
    const [posts, setposts] = useState(null)
    useEffect(()=> {
      const getData = async () => {
        let { data: posts, error } = await supabase
        .from('blogs')
        .select()
        .order('created_at', { ascending: false })
        setposts(posts);
      console.log(posts);
  
      }
      getData()
    },[])
  return (
    <main className={styles.main }>
    <AnimatePresence mode='wait'>
      {isLoading && <Transition />}
    </AnimatePresence>
    <div className=' h-[8em]'></div>
    <div className='w-full flex items-center justify-center h-[50vh]'>
    <div className="stagger-visualizer"></div>

    </div>
   <div className=' w-full h-auto flex-wrap flex flex-col items-center py-3 '>
   {posts && posts.map((_, i) => (
           <Link href={`/blog/${posts[i].slug}`}>
           <div key={i} className=' w-[80vw] lg:w-[40vw] h-auto rounded-xl cursor-pointer hover:bg-[#2b3240a3] transition ease-in-out delay-75 p-6'>
           <h3 className='text-balance text-white font-semibold text-2xl'>{posts[i].title}</h3>
           <div className='flex items-center '>
           <FaRegCalendarAlt color='#93a2b7' size="15px"/>
           <p className=' text-[#93a2b7] text-sm mx-2'>{posts[i].blog_date} |</p>
           <IoMdTime color='#93a2b7' size="18px" />
           <p className=' text-[#93a2b7] text-sm p-1 '>{posts[i].reading_time} </p>
           </div>
           <p className=' text-balance text-[#93a2b7] line-clamp-2 text-sm leading-snug text-muted-foreground m-0 p-0'>{posts[i].description}</p>
       </div>
           </Link>
           
         ))}

 
   </div>
  </main>
  )
}
