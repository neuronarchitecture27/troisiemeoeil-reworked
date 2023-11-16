import React, { useEffect, useState } from 'react'
import "./index.css"
function ServiceSection() {
    useEffect(()=> {
        const circleArea = document.querySelector('.circle__container__inner');
let circles = [...document.querySelectorAll('.circle')];
circles.shift();

let positions = {
    circleOne: {x: 0, y:0},
    circleTwo: {x: 0, y:0},
    circleThree: {x: 0, y:0},
    circleFour: {x: 0, y:0},
}

let width = window.innerWidth;
let height = window.innerHeight;

let x = 0;
let y = 0;

function lerp(start, end, t){
    return start * ( 1 - t ) + end * t;
}

circleArea.addEventListener('mousemove', (e) => {
    x = e.clientX;
    y = e.clientY;
})

function animate(){

    // Animate circles
    positions.circleOne.x = lerp(positions.circleOne.x, (x - (width / 2)) * .2, .1);
    positions.circleOne.y = lerp(positions.circleOne.y, (y - (height / 2)) * .2, .1);

    positions.circleTwo.x = lerp(positions.circleTwo.x, (-x + (width / 2)) * .2, .1);
    positions.circleTwo.y = lerp(positions.circleTwo.y, (y - (height / 2)) * .2, .1);

    positions.circleThree.x = lerp(positions.circleThree.x, (x - (width / 2)) * .2, .1);
    positions.circleThree.y = lerp(positions.circleThree.y, (-y + (height / 2)) * .2, .1);

    positions.circleFour.x = lerp(positions.circleFour.x, (-x + (width / 2)) * .2, .1);
    positions.circleFour.y = lerp(positions.circleFour.y, (-y + (height / 2)) * .2, .1);

    circles[0].style.transform = `translate(-50%, -50%) translate3d(${positions.circleOne.x}px, ${positions.circleOne.y}px, 0)`;
    circles[1].style.transform = `translate(-50%, -50%) translate3d(${positions.circleTwo.x}px, ${positions.circleTwo.y}px, 0)`;
    circles[2].style.transform = `translate(-50%, -50%) translate3d(${positions.circleThree.x}px, ${positions.circleThree.y}px, 0)`;
    circles[3].style.transform = `translate(-50%, -50%) translate3d(${positions.circleFour.x}px, ${positions.circleFour.y}px, 0)`;

    requestAnimationFrame(animate)

    let posCircleOneX = (Math.round(positions.circleOne.x * 100) / 100).toFixed(2)
    let posCircleTwoX =  (Math.round(positions.circleFour.x * 100) / 100).toFixed(2)

    let posCircleOneY =   (Math.round(positions.circleOne.y * 100) / 100).toFixed(2)
    let posCircleTwoY =   (Math.round(positions.circleFour.y * 100) / 100).toFixed(2)
    ;
    // console.log(posCircleOneX, posCircleOneY );
    
}
circleArea.addEventListener('mousemove', (e) => {
    x = e.clientX;
    y = e.clientY;
    let width = window.innerWidth / 2
    console.log(width);
    console.log(x);
})

animate()
    }, [])

    const [aligned, setAligned] = useState(false)

    useEffect(()=> {
    if (aligned == true) return console.log("state updated"); 
    })

  return (
    <section  className={`${"section" }`} onClick={()=> {setAligned(!aligned)}}>
    <div className="header">
        <div className="header__container">
            
        </div>
    </div>

    <div className="circle__container">
        
        <div className="innerCirc">
            <div className={`${"vertical__line" }`}></div>
        <div className={`${ "horizontal__line" }`}></div>
        <div className="circle__container__inner">
           
            <div className={`${"circle middle__circle" }`}></div>
            <div className={`${"circle circle__one" }`}></div>
            <div className={`${"circle circle__two" }`}></div>
            <div className={`${"circle circle__three" }`}></div>
            <div className={`${"circle circle__four" }`}></div>
        </div>
        </div>
        <div className={`${"circleInfo_container"}`}>
          
            <div className="info">
            TECH THAT’S LIGHT AS AIR
            <p className='info_desc'>
            Our multidisciplinary team transforms big, innovative ideas into powerful, accessible interactive experiences that ignite emotions and provoke action.
By combining creativity, technical expertise, and a deep understanding of users behaviour, we create compelling immersive experiences that are flawless to use.
            </p>
            </div>
            <div className="info">
            STAND ABOVE THE NOISE
            <p className='info_desc'>
            With meticulous attention to detail, we shape every face of the brand experience. From developing a strategic foundation to crafting compelling visual elements.
Our expertise lies in seamlessly translating these elements into a cohesive and memorable brand identity that resonates with the target audience and delivering deep engagement with your brand.
            </p>
            </div>
            <div className="info">
            DESIGN-POWERED <br /> PRODUCT GROWTH
            <p className='info_desc'>
            Our design agency partners with startups and tech companies, leveraging its expertise in design to fuel their growth.
We deliver interactive design solutions, increasing user engagement opportunities, and streamlining workflows through intuitive design systems.
            </p>
            </div>
            <div className="info">
            BESPOKE SOLUTIONS
            <p className='info_desc'>
            Our design process is tailored to effectively achieve client goals. We prioritize establishing strong relationships and understanding business objectives for every project.
Through seamless communication and collaboration between our team of experts and steakholders, we deliver exceptional design solutions to tell unique stories.
            </p>
            </div>
        </div>
    </div>
</section>

  )
}

export default ServiceSection