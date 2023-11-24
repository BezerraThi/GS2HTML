'use client'

import styles from './styles.module.scss'

import { Button } from '@/components'

import Image from 'next/image'
import Link from 'next/link'

import { useAuth } from '@/providers/AuthContext'

export default function Header() {
  const { isUserLogged } = useAuth()

  return (
    <header className={styles.header}>
      <div className={styles.header_logo}>
        <Image
          src="/logo.png"
          width={121}
          height={60}
          alt="Picture of the author"
        />
      </div>
      <nav className={styles.header_navigation}>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/calculadora">Calculadora de IMC</Link>
          </li>
          <li>
            <Link href="/guia">Guia de treinos</Link>
          </li>
        </ul>
      </nav>
      <div className={styles.header_auth}>
        {isUserLogged ? (
          <Button label="Sair" onClick={() => {}} />
        ) : (
          <Button label="Entrar / Cadastrar" onClick={() => {}} />
        )}
      </div>
    </header>
  )
}
