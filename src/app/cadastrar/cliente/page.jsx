'use client'

import { useState } from 'react'

import styles from '@/styles/pages/signup.module.scss'

import { Button, TextInput } from '@/components'

import { useRouter } from 'next/navigation'

import { useAuth } from '@/providers/AuthContext'

export default function ClientSignupPage() {
  const router = useRouter()

  const { handleLogin } = useAuth()

  const [userName, setUserName] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [userAddress, setUserAddress] = useState('')
  const [userCpf, setUserCpf] = useState('')
  const [userPassword, setUserPassword] = useState('')

  const handleChangeUserName = (value) => setUserName(value)
  const handleChangeUserEmail = (value) => setUserEmail(value)
  const handleChangeUserAddress = (value) => setUserAddress(value)
  const handleChangeUserCpf = (value) => setUserCpf(value)
  const handleChangeUserPassword = (value) => setUserPassword(value)

  const reset = () => {
    setUserName('')
    setUserEmail('')
    setUserAddress('')
    setUserCpf('')
    setUserPassword('')
  }

  const handleSignup = () => {
    const signupData = {
      userName,
      userEmail,
      userAddress,
      userCpf,
      userPassword
    }

    handleLogin('client')
    reset()

    router.push('/home')
  }

  const isValid =
    userName !== '' &&
    userEmail !== '' &&
    userAddress !== '' &&
    userCpf !== '' &&
    userPassword !== ''

  return (
    <main className={styles.client_signup_page}>
      <div className={styles.auth_container}>
        <h2 className={styles.auth_container__title}>
          <b>Cadastrar-se</b> como <b>cliente</b>
        </h2>
        <div className={styles.auth_container__form}>
          <TextInput
            value={userName}
            onChange={handleChangeUserName}
            placeholder="Nome completo"
          />
          <TextInput
            value={userEmail}
            onChange={handleChangeUserEmail}
            placeholder="E-mail"
          />
          <TextInput
            value={userAddress}
            onChange={handleChangeUserAddress}
            placeholder="Endereço"
          />
          <TextInput
            value={userCpf}
            onChange={handleChangeUserCpf}
            placeholder="CPF"
          />
          <TextInput
            value={userPassword}
            onChange={handleChangeUserPassword}
            password
            placeholder="Senha"
          />

          <div className={styles.auth_container__form_navigation}>
            <p>
              Já possui cadastro?{' '}
              <b onClick={() => router.push('/entrar/cliente')}>Entrar</b>
            </p>
          </div>

          <Button disabled={!isValid} label="Entrar" onClick={handleSignup} />
        </div>
      </div>
    </main>
  )
}
