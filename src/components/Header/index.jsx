'use client'

import styles from './styles.module.scss'

import { Button } from '@/components'

import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

import { useAuth } from '@/providers/AuthContext'

export default function Header() {
  const router = useRouter()

  const { isUserLogged, handleLogout, userType } = useAuth()

  return (
    <header className={styles.header}>
      <div className={styles.header_logo}>
        <Link href="/">
          <Image src="/logo.png" width={121} height={60} alt="Logo" />
        </Link>
      </div>
      {isUserLogged && (
        <nav className={styles.header_navigation}>
          <ul>
            <li>
              <Link href="/home">Home</Link>
            </li>
            <li>
              <Link href="/calculadora">Calculadora de IMC</Link>
            </li>
            <li>
              <Link href="/guia">Guia de treinos</Link>
            </li>
          </ul>
        </nav>
      )}
      <div className={styles.header_auth}>
        {isUserLogged &&
          (userType === 'client' ? (
            <Button label="Marcar consulta" onClick={() => {}} />
          ) : (
            <Button label="Criar consulta" onClick={() => {}} />
          ))}

        {isUserLogged ? (
          <Button label="Sair" onClick={handleLogout} />
        ) : (
          <Button label="Entrar / Cadastrar" onClick={() => router.push('/')} />
        )}
      </div>
    </header>
  )
}
