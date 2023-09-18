import Image from "next/image"
import styles from "./style.module.scss"


function PrjImages() {
  return (
    <div className={styles.wrapper}>
        <Image 
            className={styles.img}
            src="/images/imageport1.webp"
            alt="portfolio Image One"
          width={2900}
          height={2900}
          quality={100}
        />
    </div>
  )
}

export default PrjImages