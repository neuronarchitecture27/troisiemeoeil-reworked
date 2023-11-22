
import styles from './style.module.scss';
import {  useEffect, useState } from 'react';
import RoundedButton from "./RoundedButton" 
import supabase from '@/config/supabaseClient';
import Link from "next/link";


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
                            <Link
                            className={styles.link}
                              href={{
                                pathname: `/projects/${item.slug}`,
                              }}
                            >
                           <RoundedButton>
                                   <p className={styles.viewCase}>Read More</p>
                                 </RoundedButton>
                            </Link>
               
                                     </div>
                         </div>   
                         <div className={styles.body}>
                             <h3>{item.project_title}</h3>
                             <p className={styles.project_desc}>{item.project_desc}</p>
                             <p>{item.project_date}</p>
                         </div>
                       </div>
                     </div>
                    ))}
      </div>
     
    )
  }

