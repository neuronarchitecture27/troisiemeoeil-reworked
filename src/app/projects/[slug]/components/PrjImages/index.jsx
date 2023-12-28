import Image from "next/image"
import styles from "./style.module.scss"
import { useEffect } from "react"


function PrjImages() {
useEffect(()=> {
  const container = document.getElementById('container')

    const wrapper = document.getElementById('wrapper')
    const wrapperDot = document.getElementById('wrapperDot')
  function updateProgress() {
    wrapper.style.top = `${getScrollPerc()}%`
    wrapperDot.innerText = `${getScrollPerc()}`
    requestAnimationFrame(updateProgress)

  }
  function getScrollPerc() {
    // console.log((container.scrollY) / (container.scrollHeight) * 100);
    return ((container.scrollTop) / (container.scrollHeight) * 100)
  }
  updateProgress()
    wrapper.addEventListener('scroll', function(event) {
      // Your code here
      console.log('Scrolling in the div!');
  });
})


  return (
    <div className={styles.wrapper} id="container">
      <div className={styles.navBar} >
        <div className={styles.naverbarInner}>
          <div className={styles.navBarLinksWrapper}>
            <div className={styles.navBarLinkBlock}>
            <div className={styles.textWrapper}>
                  <p>
                    0.1
                  </p>
                  <p className={styles.linkText}>
                    Introduction
                  </p>
              </div>
            </div>
            <div className={styles.navBarLinkBlock}>
                 <div className={styles.textWrapper}>
                  <p>
                    0.2
                  </p>
                  <p className={styles.linkText}>
                    Approach
                  </p>
              </div>
            </div>
            <div className={styles.navBarLinkBlock}>
                 <div className={styles.textWrapper}>
                  <p>
                    0.3
                  </p>
                  <p className={styles.linkText}>
                    Design
                  </p>
              </div>
            </div>
            <div className={styles.navBarLinkBlock}>
                 <div className={styles.textWrapper}>
                  <p>
                    0.4
                  </p>
                  <p className={styles.linkText}>
                    Work
                  </p>
              </div>
            </div>
            <div className={styles.navBarLinkBlock}>
                 <div className={styles.textWrapper}>
                  <p>
                    0.5
                  </p>
                  <p className={styles.linkText}>
                    Talent
                  </p>
              </div>
            </div>
            <div className={styles.navBarLinkBlock}>
                 <div className={styles.textWrapper}>
                  <p>
                    0.6
                  </p>
                  <p className={styles.linkText}>
                    Results
                  </p>
              </div>
            </div>
            <div className={styles.navBarLinkIndicatorWrapper} id="wrapper" >
                <div className={styles.navBarLinkDot} id="wrapperDot" ></div>
            </div>
          </div>
        </div>

      </div>
      <div className={styles.mainWrapper} >
        <div className={styles.sectionWrapper}>
          <div className={styles.paddingGlobal}>
            <h2>
            One Pager Vertical Section Navigation
            </h2>
            <p>
            In this Webflow tutorial, I'll show you how to create a dynamic vertical sidebar navigation, similar to the one on the Raw Materials Design Agency website. 
            <br /> <br /> Perfect for One-Pagers & longer websites. We'll use the native Standard Webflow navigation component and customize the design of the navigation point based on the active section. Plus, we'll integrate an appealing indicator to show users their current location. 
            <br /> <br /> Let me know your thoughts, and don't forget to subscribe to my channel for more Webflow tips and tricks!
            </p>
          </div>
        </div>
        <div className={styles.sectionWrapper}>
          <div className={styles.paddingGlobal}>
            <h2>
            One Pager Vertical Section Navigation
            </h2>
            <p>
            In this Webflow tutorial, I'll show you how to create a dynamic vertical sidebar navigation, similar to the one on the Raw Materials Design Agency website. 
            <br /> <br /> Perfect for One-Pagers & longer websites. We'll use the native Standard Webflow navigation component and customize the design of the navigation point based on the active section. Plus, we'll integrate an appealing indicator to show users their current location. 
            <br /> <br /> Let me know your thoughts, and don't forget to subscribe to my channel for more Webflow tips and tricks!
            </p>
          </div>
        </div>
        <div className={styles.sectionWrapper}>
          <div className={styles.paddingGlobal}>
            <h2>
            One Pager Vertical Section Navigation
            </h2>
            <p>
            In this Webflow tutorial, I'll show you how to create a dynamic vertical sidebar navigation, similar to the one on the Raw Materials Design Agency website. 
            <br /> <br /> Perfect for One-Pagers & longer websites. We'll use the native Standard Webflow navigation component and customize the design of the navigation point based on the active section. Plus, we'll integrate an appealing indicator to show users their current location. 
            <br /> <br /> Let me know your thoughts, and don't forget to subscribe to my channel for more Webflow tips and tricks!
            </p>
          </div>
        </div>
        <div className={styles.sectionWrapper}>
          <div className={styles.paddingGlobal}>
            <h2>
            One Pager Vertical Section Navigation
            </h2>
            <p>
            In this Webflow tutorial, I'll show you how to create a dynamic vertical sidebar navigation, similar to the one on the Raw Materials Design Agency website. 
            <br /> <br /> Perfect for One-Pagers & longer websites. We'll use the native Standard Webflow navigation component and customize the design of the navigation point based on the active section. Plus, we'll integrate an appealing indicator to show users their current location. 
            <br /> <br /> Let me know your thoughts, and don't forget to subscribe to my channel for more Webflow tips and tricks!
            </p>
          </div>
        </div>
        <div className={styles.sectionWrapper}>
          <div className={styles.paddingGlobal}>
            <h2>
            One Pager Vertical Section Navigation
            </h2>
            <p>
            In this Webflow tutorial, I'll show you how to create a dynamic vertical sidebar navigation, similar to the one on the Raw Materials Design Agency website. 
            <br /> <br /> Perfect for One-Pagers & longer websites. We'll use the native Standard Webflow navigation component and customize the design of the navigation point based on the active section. Plus, we'll integrate an appealing indicator to show users their current location. 
            <br /> <br /> Let me know your thoughts, and don't forget to subscribe to my channel for more Webflow tips and tricks!
            </p>
          </div>
        </div>
        <div className={styles.sectionWrapper}>
          <div className={styles.paddingGlobal}>
            <h2>
            One Pager Vertical Section Navigation
            </h2>
            <p>
            In this Webflow tutorial, I'll show you how to create a dynamic vertical sidebar navigation, similar to the one on the Raw Materials Design Agency website. 
            <br /> <br /> Perfect for One-Pagers & longer websites. We'll use the native Standard Webflow navigation component and customize the design of the navigation point based on the active section. Plus, we'll integrate an appealing indicator to show users their current location. 
            <br /> <br /> Let me know your thoughts, and don't forget to subscribe to my channel for more Webflow tips and tricks!
            </p>
          </div>
        </div>
      </div>
        {/* <Image 
            className={styles.img}
            src="/images/imageport1.webp"
            alt="portfolio Image One"
          width={2900}
          height={2900}
        /> */}
    </div>
  )
}

export default PrjImages