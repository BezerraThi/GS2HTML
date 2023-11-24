'use client'

import { useState } from 'react'

import styles from '@/styles/pages/signup.module.scss'

import { Button, TextInput } from '@/components'

import { useRouter } from 'next/navigation'

export default function EmployeeSignupPage() {
  const router = useRouter()

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

  const handleSignup = () => {
    const signupData = {
      userName,
      userEmail,
      userAddress,
      userCpf,
      userPassword
    }

    console.log(signupData)
  }

  const isValid =
    userName !== '' &&
    userEmail !== '' &&
    userAddress !== '' &&
    userCpf !== '' &&
    userPassword !== ''

  return (
    <main className={styles.employee_signup_page}>
      <div className={styles.auth_container}>
        <h2 className={styles.auth_container__title}>
          <b>Cadastrar-se</b> como <b>funcionário</b>
        </h2>
        <form className={styles.auth_container__form} onSubmit={handleSignup}>
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
              <b onClick={() => router.push('/entrar/funcionario')}>Entrar</b>
            </p>
          </div>

          <Button disabled={!isValid} label="Entrar" />
        </form>
      </div>
    </main>
  )
}
