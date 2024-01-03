import Image from "next/image"
import styles from "./style.module.scss"
import { useEffect } from "react"


function PrjImages() {



  return (
    <div className={styles.wrapper} id="container">
  
        <Image 
            className={styles.img}
            src="/images/imageport1.webp"
            alt="portfolio Image One"
          width={2900}
          height={2900}
        />
    </div>
  )
}

export default PrjImages