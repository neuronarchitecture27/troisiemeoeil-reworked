"use client"
import { useEffect } from "react"
import "./notfound.css"
import gsap from 'gsap';
import Link from "next/link";
import Header from '../components/Header';


export default function NotFound() {
    useEffect(()=> {
        const tl = new gsap.timeline();
        tl.from(".page-not-found, .logo",{
            duration: .8,
            stagger: {
                amount: .7
            },
            y: 200,
            skewY: 2,
            opacity: 0
            
        })
        tl.from(".home-btn", {
            scale: 0,
            duration: .5,
            stagger: {
                amount: .6
            }
        })
    })
  return (
    <div className="body">
         <Header />
        <div className="page-container">
        <div className="page-not-found">
            <span>PAGE</span>
            <span>
                <div className="span404">404</div>
                NOT
            </span>
            <span>FOUND</span>
        </div>
    </div>
    <div className="home-btn">
    <button>
        <Link className="link" href="/"> 
        Take me home
        </Link>
        </button>
        
    </div>
    </div>
  )
}
