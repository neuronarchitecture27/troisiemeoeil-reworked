'use client';
import styles from './page.module.scss'
import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion';
import Transition from "../../../components/Transition"
import Contact from '@/components/Home/Contact';
import ProjectHeader from './components/ProjectHeader';
import PrjDescription from './components/PrjDescription';
import PrjImages from './components/PrjImages';
import getSlug from '../../utils/getSlug';
import supabase from '@/config/supabaseClient';



export default  function Work() {
  const [isLoading, setIsLoading] = useState(true);
  const id =  getSlug();
  const [projectData, setprojectData] = useState(null);


  useEffect(() => {
    const  getSlugDetails = async () => {
      const { data: slugDetails, error: err } = await supabase
      .from('projects')
      .select()
      .match({
        slug: id.slug
      })
      return slugDetails
    }
    getSlugDetails().then((result)=> {
      setprojectData(result)
    })
   
  }, []);
  if (projectData) {
    console.log(projectData);
  }
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
    <main className={styles.main}>
      <AnimatePresence mode='wait'>
      {isLoading && <Transition />}
       </AnimatePresence>
    {projectData &&  
       <div className={styles.parralex}>
       <ProjectHeader header={projectData[0].project_title} />
       <PrjDescription description={projectData[0].project_desc} tags={projectData[0].tags.list}/>
       </div>
      }  
      <PrjImages />
      <Contact />
      </main>
  )
}

