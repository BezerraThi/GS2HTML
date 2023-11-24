'use client'

import { useEffect } from 'react'

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className={styles.page_error}>
      <div className={styles.page_error__container}>
        <Image src="/error.svg" width={147} height={165} alt="Error Image" />
        <h2>Ocorreu um erro!</h2>
        <Button label="Recarregar" onClick={() => reset()} />
      </div>
    </div>
  )
}
