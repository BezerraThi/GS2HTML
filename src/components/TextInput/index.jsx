'use client'

import { useState } from 'react'

import styles from './styles.module.scss'
import { FiEye, FiEyeOff } from 'react-icons/fi'

export default function TextInput({
  type,
  password = false,
  placeholder,
  value,
  onChange
}) {
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
      type={type}
      min={0}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  )
}
