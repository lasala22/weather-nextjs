import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import WeatherHome from './home'

export default function Home() {
  return (
    <div className={styles.container}>
      <Link href='/home'>Weather API</Link>
    </div>
  )
}
