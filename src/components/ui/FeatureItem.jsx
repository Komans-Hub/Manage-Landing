import styles from './FeatureItem.module.css';

export default function FeatureItem({ number, title, description }) {
  return (
    <article className={styles.feature}>
      <header className={styles.header}>
        <span className={styles.badge} aria-hidden="true">{number}</span>
        <h3 className={styles.title}>{title}</h3>
      </header>
      <p className={styles.description}>{description}</p>
    </article>
  );
}
