'use client'

import styles from '@/styles/pages/home.module.scss'

import { Button } from '@/components'

import { useRouter } from 'next/navigation'

export default function HomePage() {
  const router = useRouter()

  return (
    <main className={styles.home_page}>
      <div className={styles.home_container}>
        <h2 className={styles.home_container__title}>
          Seja bem-vindo ao <b>FitCross</b>
        </h2>
        <div className={styles.home_container__wrapper}>
          <div className={styles.home_container__inputs}>
            <Button
              label="Funcionário"
              onClick={() => router.push('/entrar/funcionario')}
            />
            <Button
              label="Cliente"
              onClick={() => router.push('/entrar/cliente')}
            />
          </div>
        </div>
      </div>
    </main>
  )
}
