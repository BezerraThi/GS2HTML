'use client'

import { useState } from 'react'

import styles from './styles.module.scss'
import { FiEye, FiEyeOff } from 'react-icons/fi'

interface ITextInput {
  password?: boolean
  placeholder: string
  value: string
  onChange: (value: string) => void
}

export default function TextInput({
  password = false,
  placeholder,
  value,
  onChange
}: ITextInput) {
  const [passwordVisible, setPasswordVisible] = useState(false)

  const togglePasswordVisible = () => setPasswordVisible(!passwordVisible)

  if (password)
    return (
      <div className={styles.text_input__password_container}>
        <input
          className={styles.text_input}
          type={passwordVisible ? 'text' : 'password'}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />

        <button
          className={styles.text_input__password_toggle}
          type="button"
          onClick={togglePasswordVisible}
        >
          {passwordVisible ? <FiEye /> : <FiEyeOff />}
        </button>
      </div>
    )

  return (
    <input
      className={styles.text_input}
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  )
}
