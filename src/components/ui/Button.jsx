import styles from './Button.module.css';

export default function Button({
  variant = 'orange',
  children,
  onClick,
  type = 'button',
  className = '',
  ...rest
}) {
  return (
    <button
      type={type}
      className={`${styles.btn} ${styles[variant]} ${className}`}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
}
