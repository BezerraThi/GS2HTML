import styles from './styles.module.scss'

interface IButton {
  type?: 'primary' | 'secondary'
  loading?: boolean
  disabled?: boolean
  label: string
  onClick?: () => void
}

export default function Button({
  type = 'primary',
  loading = false,
  disabled = false,
  label,
  onClick
}: IButton) {
  return (
    <button
      className={styles.button}
      type="submit"
      onClick={onClick && onClick}
    >
      {label}
    </button>
  )
}
