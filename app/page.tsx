'use client'
import styles from './page.module.css'
import ZoomParallax from './components/ZoomParallax/page';
import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis'

export default function Home() {

  useEffect( () => {
    const lenis = new Lenis()
    
    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  },[])

  return (
    <main className={styles.main}>
      <ZoomParallax />
    </main>
  )
}
