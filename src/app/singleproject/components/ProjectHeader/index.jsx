'use client'
import React, { useEffect } from 'react'
import styles from './styles.module.scss'
import anime from "animejs";

function ProjectHeader() {

  const TextRevealWithFade = () => {
    const decors = document.querySelectorAll(".highlight");

    const xc = anime
      .timeline({
        autoplay: false
      })
      .add({
        targets: "#text-box #my-text",
      
        opacity: [0, 1],
        delay: 1000,
        easing: "easeOutExpo",
        duration: 1400
      })
      .add(
        {
          targets: decors,
          width: "100%",
          paddingRight: "0.9rem",
          duration: 500,
          endDelay: 500,
          easing: "linear",
          loop: true
        },
        "+=200"
      );
    xc.play();
  };
  useEffect(() => {
    TextRevealWithFade();
  }, []);

  return (
    <div className={styles.container} id='text-box'>
      <p id='my-text'>Talent Agency Portfolio Website</p>
    </div>
  )
}

export default ProjectHeader