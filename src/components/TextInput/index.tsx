'use client'

import { forwardRef, useState } from 'react'

import styles from './styles.module.scss'

import { FiEye, FiEyeOff } from 'react-icons/fi'

interface ITextInput {
  password?: boolean
  placeholder: string
}

const TextInput = forwardRef<HTMLInputElement, ITextInput>(
  ({ password = false, placeholder }: ITextInput, ref) => {
    const [passwordVisible, setPasswordVisible] = useState(false)

    const togglePasswordVisible = () => setPasswordVisible(!passwordVisible)

    if (password)
      return (
        <div className={styles.text_input__password_container}>
          <input
            ref={ref}
            className={styles.text_input}
            type={passwordVisible ? 'text' : 'password'}
            placeholder={placeholder}
          />
          <button
            className={styles.text_input__password_toggle}
            onClick={togglePasswordVisible}
          >
            {passwordVisible ? <FiEye /> : <FiEyeOff />}
          </button>
        </div>
      )

    return (
      <input
        ref={ref}
        className={styles.text_input}
        type="text"
        placeholder={placeholder}
      />
    )
  }
)

export default TextInput
