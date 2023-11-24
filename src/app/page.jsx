'use client'

import styles from '@/styles/pages/initial.module.scss'

import { Button } from '@/components'

import { useRouter } from 'next/navigation'

export default function InitialPage() {
  const router = useRouter()

  return (
    <main className={styles.initial_page}>
      <div className={styles.initial_container}>
        <h2 className={styles.initial_container__title}>
          Seja bem-vindo ao <b>FitCross</b>
        </h2>
        <div className={styles.initial_container__wrapper}>
          <div className={styles.initial_container__inputs}>
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
