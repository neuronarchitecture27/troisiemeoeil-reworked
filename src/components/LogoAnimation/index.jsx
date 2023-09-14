import React, { useEffect } from 'react'
import Anime, { anime } from 'react-anime';

function LogoAnimation() {
    const animate = () => {
        anime({
            targets: "#demo path",
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: "easeInOutQuad",
            duration: 5000,
            direction: "alternate",
            // loop: true 
        })

    }
    
  return (
    
<svg width="1000" height="700" id="demo" onMouseOver={animate}>
<path
stroke='red'
strokeWidth="3"
fill='white'
d="m204 445c0 0 68-58.5 103-71 35-12.5 125.4-69.6 273-67 147.6 2.6 231.9 64.2 245 68 13.1 3.8 66.6 44.2 76 53 9.4 8.8 6.7 37.1-4 35-10.7-2.1-11-2-11-2 0 0-9.7 1.2-40-12-30.3-13.2-30-13-30-13l-79-37c0 0-6.5-3.5-6 10 0.5 13.5 3 102.6-50 147-53 44.4-122.2 36.8-169-5-46.8-41.8-56.7-153.3-53-175 3.7-21.7-145 54-147 52-2-2-62.3 36.3-87 43-24.7 6.7-28.8-10.9-24-18 4.8-7.1 3-8 3-8z"

/>
</svg>
  )
}

export default LogoAnimation