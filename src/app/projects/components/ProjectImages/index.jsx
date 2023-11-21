import styles from './page.module.scss'
import { projects } from './Double/data';
import Image from 'next/image';
import Double from './Double';
import supabase from '@/config/supabaseClient';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.gallery}>
      <Double />
      </div>
    </main>
  )
}
