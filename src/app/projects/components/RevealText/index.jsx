'use client';
import styles from './page.module.css'
import { useRef, useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import "./global.css"
const phrase = "The magic of design and the wizardry of technology are embraced, with brands crafted that are not only dazzling and performing brilliantly but also possessing the power to grow beyond imagination.";

export default function Home() {

  let refs = useRef([]);
  const body = useRef();
  const container = useRef();

  useEffect( () => {
    gsap.registerPlugin(ScrollTrigger);
    createAnimation();
  }, [])
  const createAnimation = () => {
      gsap.to(refs.current, {
        scrollTrigger: {
            trigger: container.current,
            scrub: true,
            start: `top`,
            end: `+=${window.innerHeight / 1.5}`,
        },
        opacity: 1,
        ease: "none",
        stagger: 0.1
    })
  }

  const splitWords = (phrase) => {
    let body = [];
    phrase.split(" ").forEach( (word, i) => {
      const letters = splitLetters(word);
      body.push(<p key={word + "_" + i}>{letters}</p>)
    })
    return body
  }

  const splitLetters = (word) => {
    let letters = []
    word.split("").forEach( (letter, i) => {
      letters.push(<span key={letter + "_" + i} ref={el => {refs.current.push(el)}}>{letter}</span>)
    })
    return letters;
  }



  return (
    <div ref={container} className={styles.main}>
 
 
      <div ref={body} className={styles.body}>
        {
          splitWords(phrase)
        }
      </div>
    </div>
  )
}