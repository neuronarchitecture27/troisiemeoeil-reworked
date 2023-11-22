import styles from './page.module.scss'
import Double from './Double';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.gallery}>
      <Double />
      </div>
    </main>
  )
}
