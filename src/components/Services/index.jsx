import styles from './page.module.scss'
import React from 'react';
import dynamic from 'next/dynamic';
import SmoothScroll from './components/SmoothScroll';
import ServiceNames from './components/ServiceNames';


export default function Home() {
  return (
    <SmoothScroll>
      <main className={styles.main}>
        <ServiceNames />
      </main>
    </SmoothScroll>
  )
}