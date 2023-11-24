'use client'

import styles from '@/styles/pages/handlers.module.scss'

import { Button } from '@/components'

import { useRouter } from 'next/navigation'
import Image from 'next/image'

export default function PageNotFound() {
  const router = useRouter()

  return (
    <div className={styles.page_not_found}>
      <div className={styles.page_not_found__container}>
        <Image
          src="/not_found.svg"
          width={215}
          height={143}
          alt="Not Found Image"
        />
        <h2>Página não encontrada!</h2>
        <Button label="Retornar" onClick={() => router.push('/')} />
      </div>
    </div>
  )
}
