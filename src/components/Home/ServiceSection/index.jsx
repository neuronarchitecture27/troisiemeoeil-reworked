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

    let posCircleOneX = (Math.round(positions.circleOne.x * 100) / 100).toFixed(1)
    let posCircleTwoX =  (Math.round(positions.circleTwo.x * 100) / 100).toFixed(1)

    let posCircleOneY =   (Math.round(positions.circleOne.y * 100) / 100).toFixed(1)
    let posCircleTwoY =   (Math.round(positions.circleTwo.y * 100) / 100).toFixed(1)
    ;
    // console.log(posCircleOneX, posCircleOneY );
        if (posCircleOneX == posCircleTwoX && posCircleOneY == posCircleTwoY)
        return setAligned(true)
}

animate()
    }, [])

    const [aligned, setAligned] = useState(false)

    useEffect(()=> {
    if (aligned == true) return console.log("state updated"); 
    })

  return (
    <section  className={`${aligned ? "section" : "section_inverted"}`} onClick={()=> {setAligned(false)}}>
    <div className="header">
        <div className="header__container">
            
        </div>
    </div>

    <div className="circle__container">
        
        <div className="innerCirc">
            <div className={`${!aligned ? "vertical__line" : "vertical__line_inverted"}`}></div>
        <div className={`${!aligned ? "horizontal__line" : "horizontal__line_inverted"}`}></div>
        <div className="circle__container__inner">
           
            <div className={`${!aligned ? "circle middle__circle" : "circle_inverted middle__circle"}`}></div>
            <div className={`${!aligned ? "circle circle__one" : "circle_inverted circle__one"}`}></div>
            <div className={`${!aligned ? "circle circle__two" : "circle_inverted circle__two"}`}></div>
            <div className={`${!aligned ? "circle circle__three" : "circle_inverted circle__three"}`}></div>
            <div className={`${!aligned ? "circle circle__four" : "circle_inverted circle__four"}`}></div>
        </div>
        </div>
        <div className={`${!aligned ? "circleInfo_container" : "circleInfo_container_inverted"}`}>
          
            <div className="info">
            TECH THAT’S LIGHT AS AIR
            </div>
            <div className="info">
            STAND ABOVE THE NOISE
            </div>
            <div className="info">
            DESIGN-POWERED PRODUCT GROWTH
            </div>
            <div className="info">
            BESPOKE SOLUTIONS
            </div>
        </div>
    </div>
</section>

  )
}

export default ServiceSection