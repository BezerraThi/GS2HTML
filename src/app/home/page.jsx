'use client'

import styles from '@/styles/pages/home.module.scss'

import { Button } from '@/components'

import { useRouter } from 'next/navigation'

export default function HomePage() {
  const router = useRouter()

  return (
    <main className={styles.home_page}>
      <div className={styles.home_navigation}>
        <div className={styles.home_navigation__header}>
          O que você precisa?
        </div>
        <Button
          label="Calculadora de IMC"
          onClick={() => router.push('/calculadora')}
        />
        <Button label="Guia de treinos" onClick={() => router.push('/guia')} />
      </div>
    </main>
  )
}
