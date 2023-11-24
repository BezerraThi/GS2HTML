'use client'

import { useState } from 'react'

import styles from '@/styles/pages/signin.module.scss'

import { Button, TextInput } from '@/components'

import { useRouter } from 'next/navigation'

export default function ClientSigninPage() {
  const router = useRouter()

  const [userEmail, setUserEmail] = useState('')
  const [userPassword, setUserPassword] = useState('')

  const handleChangeUserEmail = (value) => setUserEmail(value)
  const handleChangeUserPassword = (value) => setUserPassword(value)

  const handleSignin = () => {
    const signinData = {
      userEmail,
      userPassword
    }

    console.log(signinData)
  }

  const isValid = userEmail !== '' && userPassword !== ''

  return (
    <main className={styles.client_signin_page}>
      <div className={styles.auth_container}>
        <h2 className={styles.auth_container__title}>
          <b>Entrar</b> como <b>cliente</b>
        </h2>
        <form className={styles.auth_container__form} onSubmit={handleSignin}>
          <TextInput
            value={userEmail}
            onChange={handleChangeUserEmail}
            placeholder="E-mail"
          />
          <TextInput
            value={userPassword}
            onChange={handleChangeUserPassword}
            password
            placeholder="Senha"
          />

          <div className={styles.auth_container__form_navigation}>
            <p>
              Não tem cadastro?{' '}
              <b onClick={() => router.push('/cadastrar/cliente')}>Cadastrar</b>
            </p>
          </div>

          <Button disabled={!isValid} label="Entrar" />
        </form>
      </div>
    </main>
  )
}
