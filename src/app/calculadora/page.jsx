'use client'

import { useState } from 'react'

import styles from '@/styles/pages/calculator.module.scss'

import { Button, TextInput } from '@/components'
import { FiX } from 'react-icons/fi'

export default function CalculatorPage() {
  const [imcResult, setImcResult] = useState(null)

  const [userWeight, setUserWeight] = useState(0)
  const [userHeight, setUserHeight] = useState(0)

  const handleChangeUserWeight = (value) => setUserWeight(value)
  const handleChangeUserHeight = (value) => setUserHeight(value)

  const handleCalculateImc = () => {
    const imc = userWeight / (userHeight * userHeight)

    const imcResult = imc.toFixed(2)
    setImcResult(imcResult)
  }

  const handleCalculateImcCategory = (imc) => {
    if (imc < 18.5) {
      return 'Magreza'
    } else if (imc >= 18.5 && imc <= 24.9) {
      return 'Normal'
    } else if (imc >= 25 && imc <= 30) {
      return 'Sobrepeso'
    } else {
      return 'Obesidade'
    }
  }

  const handleResetImc = () => {
    setImcResult(null)
    setUserWeight(0)
    setUserHeight(0)
  }

  const isValid = userWeight !== 0 && userHeight !== 0

  return (
    <main className={styles.calculator_page}>
      <div className={styles.calculator_container}>
        <div className={styles.calculator_container__header}>
          Cálculo do <b>IMC</b>
        </div>
        <div className={styles.calculator_container__wrapper}>
          <div className={styles.calculator_input_wrapper}>
            <p className={styles.calculator_input_wrapper_label}>Peso (Kg)</p>
            <TextInput
              type="number"
              value={userWeight}
              onChange={handleChangeUserWeight}
              placeholder="Peso"
            />
          </div>
          <div className={styles.calculator_input_wrapper}>
            <p className={styles.calculator_input_wrapper_label}>
              Altura (Metros)
            </p>
            <TextInput
              type="number"
              value={userHeight}
              onChange={handleChangeUserHeight}
              placeholder="Altura"
            />
          </div>
        </div>
        <div className={styles.calculator_container__footer}>
          <Button
            disabled={!isValid}
            label="Calcular"
            onClick={handleCalculateImc}
          />
          <span>{imcResult && `${imcResult} kg/m²`}</span>

          {!!imcResult && (
            <button onClick={handleResetImc}>
              <FiX />
            </button>
          )}
        </div>
        {imcResult && (
          <div className={styles.calculator_container__result}>
            <p>
              Seu IMC é de <b>{imcResult} kg/m²</b>
            </p>
            <p>
              Você é considerado <b>{handleCalculateImcCategory(imcResult)}</b>
            </p>
          </div>
        )}
      </div>
    </main>
  )
}
