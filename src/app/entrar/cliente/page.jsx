'use client'

import { useState } from 'react'

import styles from '@/styles/pages/signin.module.scss'

import { Button, TextInput } from '@/components'

import { useRouter } from 'next/navigation'

import { useAuth } from '@/providers/AuthContext'

export default function ClientSigninPage() {
  const router = useRouter()

  const { handleLogin } = useAuth()

  const [userEmail, setUserEmail] = useState('')
  const [userPassword, setUserPassword] = useState('')

  const handleChangeUserEmail = (value) => setUserEmail(value)
  const handleChangeUserPassword = (value) => setUserPassword(value)

  const reset = () => {
    setUserEmail('')
    setUserPassword('')
  }

  const handleSignin = () => {
    const signinData = {
      userEmail,
      userPassword
    }

    handleLogin('client')
    reset()

    router.push('/home')
  }

  const isValid = userEmail !== '' && userPassword !== ''

  return (
    <main className={styles.client_signin_page}>
      <div className={styles.auth_container}>
        <h2 className={styles.auth_container__title}>
          <b>Entrar</b> como <b>cliente</b>
        </h2>
        <div className={styles.auth_container__form}>
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

          <Button disabled={!isValid} label="Entrar" onClick={handleSignin} />
        </div>
      </div>
    </main>
  )
}
