import styles from './styles.module.scss'

interface IButton {
  type?: 'primary' | 'secondary'
  label: string
  onClick: () => void
}

export default function Button({ type = 'primary', label, onClick }: IButton) {
  return (
    <button className={styles.button} onClick={onClick}>
      {label}
    </button>
  )
}
