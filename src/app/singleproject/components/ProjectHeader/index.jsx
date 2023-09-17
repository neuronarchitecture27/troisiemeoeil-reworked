'use client'
import React, { useEffect } from 'react'

import anime from "animejs";
import "./index.css"

function ProjectHeader() {

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
  useEffect(() => {
    TextRevealWithFade();
  }, []);

  return (
    <div className='container' id='text-box'>
      {/* <div>
        
<video id="background-video" autoplay loop muted >
<source src="./spherepart.webp" type="video/webp" />
</video>
      </div> */}
      <p id='my-text'>Talent Agency Portfolio Website</p>
        
    </div>
  )
}

export default ProjectHeader