'use client'

import { useState } from 'react'

import styles from './styles.module.scss'

import { FiMenu, FiX } from 'react-icons/fi'
import { Button } from '@/components'

import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

import { useAuth } from '@/providers/AuthContext'

export default function Header() {
  const router = useRouter()

  const { isUserLogged, handleLogout, userType } = useAuth()

  const [menuMobileIsOpen, setMenuMobileIsOpen] = useState(false)

  const toggleMenuMobile = () => setMenuMobileIsOpen(!menuMobileIsOpen)

  return (
    <header className={styles.header}>
      <div className={styles.header_logo}>
        <Link href="/">
          <Image
            src="/logo.png"
            width={121}
            height={60}
            alt="Picture of the author"
          />
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

      {isUserLogged && (
        <div className={styles.header_mobile}>
          <div
            className={styles.header_mobile__toggle}
            onClick={toggleMenuMobile}
          >
            {menuMobileIsOpen ? <FiX /> : <FiMenu />}
          </div>
          <div
            className={`${styles.header_mobile__menu} ${
              menuMobileIsOpen && styles.opened
            }`}
          >
            <div className={styles.header_auth__mobile}>
              {isUserLogged &&
                (userType === 'client' ? (
                  <Button label="Marcar consulta" onClick={() => {}} />
                ) : (
                  <Button label="Criar consulta" onClick={() => {}} />
                ))}

              {isUserLogged ? (
                <Button label="Sair" onClick={handleLogout} />
              ) : (
                <Button
                  label="Entrar / Cadastrar"
                  onClick={() => router.push('/')}
                />
              )}
            </div>

            {isUserLogged && (
              <nav className={styles.header_navigation__mobile}>
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
          </div>
        </div>
      )}
    </header>
  )
}
