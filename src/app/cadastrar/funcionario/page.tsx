'use client'

import { useState } from 'react'

import styles from '@/styles/pages/signup.module.scss'

import { Button, TextInput } from '@/components'

import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'

import { ISignupUser } from '@/@types/Auth'

export default function EmployeeSignupPage() {
  const router = useRouter()

  const [signupIsLoading, setSignupIsLoading] = useState(false)

  const { register, handleSubmit, reset, formState } = useForm<ISignupUser>()

  const { isValid } = formState

  const handleSignup = async (data: ISignupUser) => {
    setSignupIsLoading(true)

    const signupFunction = (): boolean => {
      console.log(data)
      return true
    }

    const signupResponse = signupFunction()

    setSignupIsLoading(false)

    if (signupResponse) {
      reset()
      router.push('/home')
    }
  }

  return (
    <main className={styles.employee_signup_page}>
      <div className={styles.auth_container}>
        <h2 className={styles.auth_container__title}>
          <b>Cadastrar-se</b> como <b>funcionário</b>
        </h2>
        <form
          className={styles.auth_container__form}
          onSubmit={handleSubmit(handleSignup)}
        >
          <TextInput {...register('userName')} placeholder="Nome completo" />
          <TextInput {...register('userEmail')} placeholder="E-mail" />
          <TextInput {...register('userAddress')} placeholder="Endereço" />
          <TextInput {...register('userCpf')} placeholder="CPF" />
          <TextInput
            {...register('userPassword')}
            password
            placeholder="Senha"
          />

          <div className={styles.auth_container__form_navigation}>
            <p>
              Já possui cadastro?{' '}
              <b onClick={() => router.push('/entrar/funcionario')}>Entrar</b>
            </p>
          </div>

          <Button
            loading={signupIsLoading}
            disabled={!isValid}
            label="Entrar"
          />
        </form>
      </div>
    </main>
  )
}
