import styles from './styles.module.scss'

export default function Button({
  loading = false,
  disabled = false,
  label,
  onClick
}) {
  return (
    <button
      className={styles.button}
      disabled={disabled}
      onClick={onClick && onClick}
    >
      {label}
    </button>
  )
}
