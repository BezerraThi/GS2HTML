'use client'

import { useState } from 'react'

import styles from '@/styles/pages/signin.module.scss'

import { Button, TextInput } from '@/components'

import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'

import { ISigninUser } from '@/@types/Auth'

export default function ClientSigninPage() {
  const router = useRouter()

  const [signinIsLoading, setSigninIsLoading] = useState(false)

  const { register, handleSubmit, reset, formState } = useForm<ISigninUser>()

  const { isValid } = formState

  const handleSignin = async (data: ISigninUser) => {
    setSigninIsLoading(true)

    const signinFunction = (): boolean => {
      console.log(data)
      return true
    }

    const signinResponse = signinFunction()

    setSigninIsLoading(false)

    if (signinResponse) {
      reset()
      router.push('/home')
    }
  }

  return (
    <main className={styles.client_signin_page}>
      <div className={styles.auth_container}>
        <h2 className={styles.auth_container__title}>
          <b>Entrar</b> como <b>cliente</b>
        </h2>
        <form
          className={styles.auth_container__form}
          onSubmit={handleSubmit(handleSignin)}
        >
          <TextInput {...register('userEmail')} placeholder="E-mail" />
          <TextInput
            {...register('userPassword')}
            password
            placeholder="Senha"
          />

          <div className={styles.auth_container__form_navigation}>
            <p>
              Não tem cadastro?{' '}
              <b onClick={() => router.push('/cadastrar/cliente')}>Cadastrar</b>
            </p>
          </div>

          <Button
            loading={signinIsLoading}
            disabled={!isValid}
            label="Entrar"
          />
        </form>
      </div>
    </main>
  )
}
