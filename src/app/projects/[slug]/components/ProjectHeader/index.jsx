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
      <p id='my-text'>Software Agency Portfolio Website</p>
        
    </div>
  )
}

export default ProjectHeader