
import  { useEffect, useState } from 'react'
import getSlug from '../../../../utils/getSlug';
import supabase from '@/config/supabaseClient';
import anime from "animejs";
import "./index.css"

function ProjectHeader() {
  const id =  getSlug();
  const [projectData, setprojectData] = useState(null);


  const TextRevealWithFade = () => {
    const decors = document.querySelectorAll(".container");

    const xc = anime
      .timeline({
        autoplay: false
      })
      .add({
        targets: "#text-box #my-text",
        opacity: [0, 1],
        delay: 1000,
        easing: "easeOutExpo",
        duration: 10800
      })
      
      
    xc.play();
  };
  let dataArr = []
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
    TextRevealWithFade();
  }, []);

  return (
    <div className='container' id='text-box'>
      <p id='my-text'> 
      {projectData && projectData[0].project_title} 
      {/* {projectData && 
      projectData.map((item,i) => (
        {item} 
      ))
      } */}
      </p>
    
    </div>
  )
}

export default ProjectHeader