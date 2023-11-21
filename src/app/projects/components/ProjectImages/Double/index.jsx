
import axios from "axios"
import styles from './style.module.scss';
import Image from 'next/image';
import {  useEffect, useRef, useState } from 'react';
import RoundedButton from "./RoundedButton" 
import useSWR from 'swr';
import supabase from '@/config/supabaseClient';


// const fetcher = (url) => axios.get(url).then((res) => res.data);
export default function Index() {
 const [project, setProject] = useState(null)

 
  useEffect(()=> {
    const getData = async () => {
      let { data: projects, error } = await supabase
      .from('projects')
      .select()
      setProject(projects);
  
    }
    getData()

  },[])

    return(
      <div className={styles.container}>
           { project && 
           project.map((item,i) => (
                       <div  className={styles.double} key={i}>
      
                       <div className={styles.imageContainer}>
                         <div className={styles.stretchyWrapper}>
                           <img 
                           className={styles.image}
                             src={`${item.img_url}`}
                             alt={"image"}
                           />
                           
                           <div className={styles.rounded}>
                           <RoundedButton>
                                   <p className={styles.viewCase}>Read the Study Case</p>
                                 </RoundedButton>
               
                                     </div>
                         </div>   
                         <div className={styles.body}>
                             <h3>{item.project_title}</h3>
                             <p>{item.project_desc}</p>
                             <p>{item.project_date}</p>
                         </div>
                       </div>
                     </div>
                    ))}
      </div>
     
    )
  }

